const createTerminalEnvironment = (() => {
  const empty = new Map();
  const copy = files => new Map(files);
  const parent = path => path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
  const name = path => path.split("/").at(-1);
  const inside = (path, root) => !root || path === root || path.startsWith(root + "/");
  const changed = (left, right) => [...new Set([...left.keys(), ...right.keys()])]
    .filter(path => left.get(path) !== right.get(path)).sort();
  const error = output => ({ output });
  const result = (event, output = "") => ({ event, output });
  const validBranch = value => /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(value ?? "");

  function tokenize(raw) {
    const parts = raw.match(/(?:"[^"]*"|'[^']*'|[^\s"']+)(?:\s+|$)/g);
    return parts?.join("") === raw ? parts.map(part => part.trim()) : null;
  }

  const unquote = token => token.replace(/^["']|["']$/g, "");
  const unsupportedFlag = (command, token) => "Флаг «" + token + "» для команды «" + command +
    "» не поддерживается в бета-версии тренажёра. Список доступных флагов — в справке.";

  const pathOptions = { "-path": "path", "-literalpath": "path" };
  const fileOptions = { ...pathOptions, "-destination": "destination" };
  const bashOptions = {
    pwd: { short: "LP" },
    ls: { short: "aAlh1F", switches: { "--all": "a", "--almost-all": "A", "--human-readable": "h", "--classify": "F" } },
    mkdir: { short: "pv", switches: { "--parents": "p", "--verbose": "v" } },
    cat: { short: "n", switches: { "--number": "n" } },
    search: { short: "Finvc", switches: {
      "--fixed-strings": "F", "--ignore-case": "i", "--line-number": "n",
      "--invert-match": "v", "--count": "c"
    }, values: { "-e": "pattern", "--regexp": "pattern" } },
    cp: { short: "nv", switches: { "--no-clobber": "n", "--verbose": "v" } },
    mv: { short: "nv", switches: { "--no-clobber": "n", "--verbose": "v" } },
    rm: { short: "fv", switches: { "--force": "f", "--verbose": "v" } }
  };
  const powershellOptions = {
    cd: { values: pathOptions },
    ls: { values: pathOptions, switches: { "-force": "hidden", "-name": "name", "-file": "file", "-directory": "directory" } },
    "new-item": { values: { "-path": "path", "-itemtype": "type" } },
    cat: { values: { ...pathOptions, "-totalcount": "first", "-tail": "last" } },
    write: { values: { ...pathOptions, "-value": "content" } },
    search: { values: { ...pathOptions, "-pattern": "pattern" }, switches: {
      "-simplematch": "F", "-casesensitive": "case-sensitive", "-notmatch": "v"
    } },
    cp: { values: fileOptions, switches: { "-whatif": "preview" } },
    mv: { values: fileOptions, switches: { "-whatif": "preview" } },
    rm: { values: pathOptions, switches: { "-whatif": "preview" } }
  };

  function parseOptions(command, action, tokens, windows) {
    const { short = "", switches = {}, values = {} } =
      (windows ? powershellOptions : bashOptions)[action] ?? {};
    const shortFlags = windows && command === "ls" ? bashOptions.ls.short : short;
    const namedFlags = windows && command === "ls" ? { ...bashOptions.ls.switches, ...switches } : switches;
    const flags = new Set();
    const named = {};
    const operands = [];
    let endOfOptions = false;
    for (let i = 0; i < tokens.length; i++) {
      const token = unquote(tokens[i]);
      if (!windows && !endOfOptions && token === "--") {
        endOfOptions = true;
        continue;
      }
      if (endOfOptions || token === "-" || !token.startsWith("-") || (windows && /^["']/.test(tokens[i]))) {
        operands.push(token);
        continue;
      }
      const option = windows ? token.toLowerCase() : token;
      if (Object.hasOwn(namedFlags, option)) {
        flags.add(namedFlags[option]);
      } else if (Object.hasOwn(values, option)) {
        const key = values[option];
        if (Object.hasOwn(named, key)) return { problem: "Параметр «" + token + "» указан повторно." };
        const next = tokens[i + 1];
        const value = next === undefined ? undefined : unquote(next);
        if (value === undefined || (next.startsWith("-") && value !== "-" && option !== "-e" && option !== "--regexp")) {
          return { problem: "Для параметра «" + token + "» нужно указать значение." };
        }
        named[key] = value;
        i++;
      } else if (/^-[a-zA-Z1]+$/.test(token) && [...token.slice(1)].every(flag => shortFlags.includes(flag))) {
        for (const flag of token.slice(1)) flags.add(flag);
      } else {
        return { problem: unsupportedFlag(command, token) };
      }
    }
    return { flags, named, operands };
  }

  function fileSize(content, humanReadable) {
    const bytes = new TextEncoder().encode(content).length;
    if (!humanReadable || bytes < 1024) return String(bytes);
    const units = ["K", "M", "G"];
    let size = bytes / 1024;
    let index = 0;
    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }
    return (size < 10 ? size.toFixed(1) : Math.ceil(size)) + units[index];
  }

  const fileLines = text => text ? text.replace(/\r?\n$/, "").split(/\r?\n/) : [];

  function diffText(left, right) {
    return changed(left, right).map(path => {
      const before = left.has(path) ? left.get(path).replace(/\n$/, "").split("\n") : [];
      const after = right.has(path) ? right.get(path).replace(/\n$/, "").split("\n") : [];
      let start = 0;
      while (start < before.length && start < after.length && before[start] === after[start]) start++;
      let end = 0;
      while (end < before.length - start && end < after.length - start &&
        before[before.length - 1 - end] === after[after.length - 1 - end]) end++;
      const removed = before.slice(start, before.length - end);
      const added = after.slice(start, after.length - end);
      return [
        "diff --git a/" + path + " b/" + path,
        "--- " + (left.has(path) ? "a/" + path : "/dev/null"),
        "+++ " + (right.has(path) ? "b/" + path : "/dev/null"),
        "@@ -" + (removed.length ? start + 1 : start) + "," + removed.length +
          " +" + (added.length ? start + 1 : start) + "," + added.length + " @@",
        ...removed.map(line => "-" + line),
        ...added.map(line => "+" + line)
      ].join("\n");
    }).join("\n");
  }

  return function createEnvironment(shell, scenario) {
    const windows = shell === "powershell";
    const base = windows ? "C:/Users/student/Workshop" : "/home/student/workshop";
    const files = new Map(Object.entries(scenario.files ?? {}));
    const folders = new Set(["", ...(scenario.folders ?? [])]);
    const hiddenPaths = new Set(scenario.hidden ?? []);
    let cwd = scenario.cwd ?? "";
    let serial = 0;
    let repo = null;

    function addParents(path) {
      for (let folder = parent(path); folder; folder = parent(folder)) folders.add(folder);
    }
    [...folders, ...files.keys()].forEach(addParents);

    function displayPath(path) {
      const full = base + (path ? "/" + path : "");
      return windows ? full.replaceAll("/", "\\") : full;
    }

    function resolvePath(input) {
      if (input == null || input === "") return null;
      let path = windows ? input.replaceAll("\\", "/") : input;
      const compare = value => windows ? value.toLowerCase() : value;
      let parts = cwd ? cwd.split("/") : [];
      if (path === "~" || path.startsWith("~/")) {
        path = path.slice(2);
        parts = [];
      } else if (path.startsWith("/") || (windows && /^[a-z]:/i.test(path))) {
        if (compare(path) !== compare(base) && !compare(path).startsWith(compare(base + "/"))) return null;
        path = path.slice(base.length);
        parts = [];
      }
      for (const part of path.split("/")) {
        if (part === "." || !part) continue;
        if (part === "..") {
          if (!parts.length) return null;
          parts.pop();
          continue;
        }
        const candidate = [...parts, part].join("/");
        const known = windows
          ? [...folders, ...files.keys()].find(item => compare(item) === compare(candidate))
          : undefined;
        parts.push(known ? name(known) : part);
      }
      return parts.join("/");
    }

    function makeCommit(message, snapshot, previous = null) {
      return { id: (0xa11ce00 + ++serial).toString(16), message, files: copy(snapshot), previous };
    }

    function newRepo(root, head = null, remote = null, tracked = false) {
      return { root, branch: "main", heads: new Map([["main", head]]), index: copy(head?.files ?? empty),
        remote, remoteHead: head, fetched: head, tracked };
    }

    if (scenario.git) {
      const { commits = [], remote, upstream = false, incoming, branch, feature } = scenario.git;
      let tip = null;
      for (const [message, snapshot] of commits) tip = makeCommit(message, new Map(Object.entries(snapshot)), tip);
      repo = newRepo("", tip, remote, upstream);
      if (incoming) {
        repo.remoteHead = makeCommit(incoming[0], new Map(Object.entries(incoming[1])), tip);
      }
      if (feature) {
        repo.heads.set("feature", makeCommit(feature[0], new Map(Object.entries(feature[1])), tip));
      }
      if (branch) {
        repo.branch = branch;
        repo.index = copy(repo.heads.get(branch)?.files ?? empty);
      }
    }

    const head = () => repo.heads.get(repo.branch);
    const headFiles = () => head()?.files ?? empty;
    const workingFiles = () => new Map([...files]
      .filter(([path]) => inside(path, repo.root))
      .map(([path, value]) => [repo.root ? path.slice(repo.root.length + 1) : path, value]));
    const fullRepoPath = path => repo.root ? repo.root + "/" + path : path;
    const clean = () => !changed(headFiles(), repo.index).length && !changed(repo.index, workingFiles()).length;

    function checkout(commit) {
      for (const path of [...files.keys()]) if (inside(path, repo.root)) files.delete(path);
      repo.index = copy(commit?.files ?? empty);
      for (const [path, content] of repo.index) {
        const fullPath = fullRepoPath(path);
        files.set(fullPath, content);
        addParents(fullPath);
      }
    }

    function distance(tip, ancestor) {
      let count = 0;
      while (tip && tip !== ancestor) {
        tip = tip.previous;
        count++;
      }
      return tip === ancestor ? count : null;
    }

    function gitStatus() {
      const work = workingFiles();
      const staged = changed(headFiles(), repo.index);
      const unstaged = changed(repo.index, work).filter(path => repo.index.has(path));
      const untracked = [...work.keys()].filter(path => !repo.index.has(path)).sort();
      const lines = ["On branch " + repo.branch];
      if (!head()) lines.push("", "No commits yet");
      if (repo.tracked && repo.branch === "main") {
        const ahead = distance(head(), repo.fetched);
        const behind = distance(repo.fetched, head());
        if (ahead > 0) lines.push("Your branch is ahead of 'origin/main' by " + ahead + " commit(s).");
        if (behind > 0) lines.push("Your branch is behind 'origin/main' by " + behind + " commit(s).");
        if (ahead === 0 && behind === 0) lines.push("Your branch is up to date with 'origin/main'.");
      }
      if (staged.length) {
        lines.push("", "Changes to be committed:", ...staged.map(path =>
          "  " + (repo.index.has(path) ? headFiles().has(path) ? "modified" : "new file" : "deleted") + ": " + path));
      }
      if (unstaged.length) {
        lines.push("", "Changes not staged for commit:", ...unstaged.map(path =>
          "  " + (work.has(path) ? "modified" : "deleted") + ": " + path));
      }
      if (untracked.length) lines.push("", "Untracked files:", ...untracked.map(path => "  " + path));
      if (!staged.length && !unstaged.length && !untracked.length) lines.push("", "nothing to commit, working tree clean");
      return lines.join("\n");
    }

    function git(args) {
      const [command, ...options] = args;
      if (command === "init" && (!options.length || options.join(" ") === "-b main")) {
        if (repo) return error("В этой учебной среде уже есть репозиторий.");
        repo = newRepo(cwd);
        return result("git:init", "Initialized empty Git repository in " + displayPath(cwd) + "/.git/");
      }
      if (!repo || !inside(cwd, repo.root)) return error("fatal: not a git repository\nПерейди в репозиторий или создай его через git init.");
      if (command === "status" && !options.length) return result("git:status", gitStatus());
      if (command === "diff") {
        const staged = options.length === 1 && ["--cached", "--staged"].includes(options[0]);
        if (options.length && !staged) return error("Используй git diff или git diff --cached.");
        const work = workingFiles();
        const indexed = new Map([...work].filter(([path]) => repo.index.has(path)));
        const left = staged ? headFiles() : repo.index;
        const right = staged ? repo.index : indexed;
        const text = diffText(left, right);
        return { ...result(text ? staged ? "git:staged" : "git:diff" : null, text || "(вывода нет)"),
          paths: changed(left, right) };
      }
      if (command === "add") {
        const args = options[0] === "--" ? options.slice(1) : options;
        if (args === options && args[0]?.startsWith("-")) return error(unsupportedFlag("git add", args[0]));
        if (args.length !== 1) return error("Укажи один файл или папку для git add.");
        const path = resolvePath(args[0]);
        if (path === null || !inside(path, repo.root)) return error("Укажи путь внутри репозитория.");
        const relative = repo.root ? path.slice(repo.root.length + 1) : path;
        const work = workingFiles();
        const candidates = folders.has(path)
          ? [...new Set([...work.keys(), ...repo.index.keys()])].filter(file => inside(file, relative))
          : work.has(relative) || repo.index.has(relative) ? [relative] : [];
        if (!candidates.length) return error("pathspec did not match any files");
        for (const file of candidates) {
          if (work.has(file)) repo.index.set(file, work.get(file));
          else repo.index.delete(file);
        }
        return result("git:add:" + (folders.has(path) ? "." : relative));
      }
      if (command === "restore") {
        const staged = options[0] === "--staged";
        const rest = staged ? options.slice(1) : options;
        const args = rest[0] === "--" ? rest.slice(1) : rest;
        if (args === rest && args[0]?.startsWith("-")) return error(unsupportedFlag("git restore", args[0]));
        if (args.length !== 1) return error("Укажи один файл для git restore.");
        const path = resolvePath(args[0]);
        if (path === null || !inside(path, repo.root)) return error("Укажи путь внутри репозитория.");
        const relative = repo.root ? path.slice(repo.root.length + 1) : path;
        if (staged && !head()) return error("Для git restore --staged в этом уроке нужен первый коммит.");
        const source = staged ? headFiles() : repo.index;
        if (!source.has(relative) && !(staged && repo.index.has(relative))) {
          return error("Git не нашёл этот файл в источнике восстановления.");
        }
        if (staged) {
          if (source.has(relative)) repo.index.set(relative, source.get(relative));
          else repo.index.delete(relative);
        } else {
          files.set(path, source.get(relative));
          addParents(path);
        }
        return result((staged ? "git:unstage:" : "git:restore:") + relative);
      }
      if (command === "commit" && options.length === 2 && options[0] === "-m" && options[1].trim()) {
        const paths = changed(headFiles(), repo.index);
        if (!paths.length) return error("Нет подготовленных изменений. Проверь git status и выполни git add.");
        const commit = makeCommit(options[1], repo.index, head());
        repo.heads.set(repo.branch, commit);
        return { ...result("git:commit", "[" + repo.branch + " " + commit.id + "] " + commit.message), paths };
      }
      if (command === "log" && options.length === 1 && options[0] === "--oneline") {
        const lines = [];
        for (let commit = head(); commit; commit = commit.previous) {
          const refs = [
            ...[...repo.heads].filter(([, tip]) => tip === commit).map(([branch]) =>
              branch === repo.branch ? "HEAD -> " + branch : branch),
            ...(repo.remote && repo.fetched === commit ? ["origin/main"] : [])
          ];
          lines.push(commit.id + (refs.length ? " (" + refs.join(", ") + ")" : "") + " " + commit.message);
        }
        return result("git:log", lines.join("\n") || "В этой ветке ещё нет коммитов.");
      }
      if (command === "branch" && !options.length) {
        return result("git:branch", [...repo.heads.keys()].map(branch =>
          (branch === repo.branch ? "* " : "  ") + branch).join("\n"));
      }
      if (command === "branch" && options.length === 1 && validBranch(options[0])) {
        if (!head() || repo.heads.has(options[0])) return error("Нужен коммит и новое имя ветки.");
        repo.heads.set(options[0], head());
        return result("git:branch:" + options[0]);
      }
      if (command === "switch") {
        const create = options[0] === "-c";
        const target = options.at(-1);
        if (options.length !== (create ? 2 : 1) || !validBranch(target)) return error("Укажи имя ветки после git switch.");
        if (create) {
          if (!head() || repo.heads.has(target)) return error("Нужен коммит и новое имя ветки.");
          repo.heads.set(target, head());
        } else if (!repo.heads.has(target)) return error("Ветка не найдена: " + target);
        else if (head() !== repo.heads.get(target)) {
          if (!clean()) return error("Учебный git switch требует чистой рабочей папки перед сменой версии.");
          checkout(repo.heads.get(target));
        }
        repo.branch = target;
        return result("git:switch:" + target, "Switched to " + (create ? "a new " : "") + "branch '" + target + "'");
      }
      if (command === "merge" && options.length === 1 && repo.heads.has(options[0])) {
        const target = repo.heads.get(options[0]);
        if (!target || distance(head(), target) !== null) return error("Already up to date.");
        if (!clean() || distance(target, head()) === null) return error("Здесь поддерживается только fast-forward из чистой рабочей папки.");
        repo.heads.set(repo.branch, target);
        checkout(target);
        return result("git:merge:" + options[0], "Fast-forward\n" + target.id + " " + target.message);
      }
      if (command === "remote" && options.length === 1 && options[0] === "-v") {
        return result("git:remote", repo.remote
          ? "origin\t" + repo.remote + " (fetch)\norigin\t" + repo.remote + " (push)"
          : "(удалённый репозиторий ещё не настроен)");
      }
      if (command === "remote" && options.length === 3 && options[0] === "add" && options[1] === "origin" && options[2]) {
        if (repo.remote) return error("Удалённый репозиторий origin уже существует.");
        repo.remote = options[2];
        repo.remoteHead = null;
        repo.fetched = null;
        return result("git:remote:add");
      }
      if (["push", "fetch", "pull"].includes(command)) {
        if (!repo.remote) return error("Сначала настрой удалённый репозиторий origin.");
        if (command === "fetch" && (!options.length || options.join(" ") === "origin")) {
          repo.fetched = repo.remoteHead;
          return result("git:fetch", "Fetched origin/main. Текущая ветка и файлы не изменились.");
        }
        if (repo.branch !== "main") return error("В учебной среде публикация и обновление настроены для ветки main.");
        if (command === "push") {
          const upstream = options.join(" ") === "-u origin main";
          if (options.length && !upstream && options.join(" ") !== "origin main") {
            return error("Поддерживаются git push, git push origin main и git push -u origin main.");
          }
          if (!options.length && !repo.tracked) return error("Нет upstream. Используй git push -u origin main.");
          if (!head() || distance(head(), repo.remoteHead) === null) return error("Push отклонён. Проверь локальные коммиты и состояние origin.");
          const updated = head() !== repo.remoteHead;
          repo.remoteHead = repo.fetched = head();
          repo.tracked ||= upstream;
          return result(upstream ? "git:push:upstream" : "git:push",
            updated ? "To " + repo.remote + "\n   main -> main" : "Everything up-to-date");
        }
        if (command === "pull" && (!options.length || options.join(" ") === "--ff-only")) {
          if (!repo.tracked) return error("Сначала свяжи ветку main с origin/main.");
          repo.fetched = repo.remoteHead;
          if (distance(head(), repo.fetched) !== null) return result("git:pull", "Already up to date.");
          if (!clean() || distance(repo.fetched, head()) === null) return error("Обновление требует чистой рабочей папки и fast-forward.");
          repo.heads.set(repo.branch, repo.fetched);
          checkout(repo.fetched);
          return result("git:pull", "Fast-forward\n" + head().id + " " + head().message);
        }
      }
      return error("Этот вариант команды Git недоступен. Посмотри справку тренажёра.");
    }

    const shellAliases = windows
      ? {
        "get-location": "pwd", pwd: "pwd", "get-childitem": "ls", ls: "ls", dir: "ls",
        "set-location": "cd", cd: "cd", mkdir: "mkdir", "new-item": "new-item",
        "get-content": "cat", cat: "cat", "set-content": "write", "select-string": "search",
        "copy-item": "cp", cp: "cp", "move-item": "mv", mv: "mv", "remove-item": "rm", rm: "rm",
        "clear-host": "clear", clear: "clear"
      }
      : { pwd: "pwd", ls: "ls", cd: "cd", mkdir: "mkdir", touch: "touch", cat: "cat", grep: "search",
        cp: "cp", mv: "mv", rm: "rm", clear: "clear", echo: "echo" };

    function execute(raw) {
      const tokens = tokenize(raw.trim());
      if (!tokens) return error("Проверь кавычки и пробелы между аргументами.");
      const [typed, ...argumentTokens] = tokens;
      const rawArgs = argumentTokens.map(unquote);
      const command = windows ? unquote(typed).toLowerCase() : unquote(typed);
      if (command === "git") return git(rawArgs);
      if (command === "help" && !rawArgs.length) return result("help", "Открой справку под консолью, чтобы увидеть доступные команды.");
      if (command === "dotnet" && rawArgs[0] === "run") {
        const flag = rawArgs.slice(1).find(arg => arg.startsWith("-"));
        if (flag) return error(unsupportedFlag("dotnet run", flag));
        if (rawArgs.length !== 1) return error("В тренажёре dotnet run запускает проект из текущей папки.");
        const hasProject = [...files.keys()].some(path => parent(path) === cwd && path.endsWith(".csproj"));
        return hasProject
          ? result("run", scenario.runOutput ?? "Учебный проект запущен.")
          : error("Couldn't find a project to run.\nВ текущей папке нет файла .csproj.");
      }
      const action = Object.hasOwn(shellAliases, command) ? shellAliases[command] : undefined;
      if (!action) return error("Команда недоступна в симуляторе. Проверь оболочку и справку.");
      // В учебной форме echo текст > файл текст является данными, в том числе если он начинается с дефиса.
      const redirect = action === "echo" && rawArgs.length === 3 && rawArgs[1] === ">";
      const { flags, named, operands: args, problem } = parseOptions(command, action, redirect ? [] : argumentTokens, windows);
      if (problem) return error(problem);
      if (action === "pwd" && !args.length) return result("pwd", displayPath(cwd));
      if (action === "clear" && !args.length) return result("clear");
      if (action === "cd" && args.length <= (named.path === undefined ? 1 : 0)) {
        const target = named.path ?? args[0] ?? "~";
        const path = resolvePath(target);
        if (!folders.has(path)) return error("Папка не найдена: " + target);
        cwd = path;
        return result("cd:" + cwd);
      }
      if (action === "ls" && args.length <= (named.path === undefined ? 1 : 0)) {
        const target = named.path ?? args[0];
        const path = target === undefined ? cwd : resolvePath(target);
        if (!folders.has(path) && !files.has(path)) return error("Путь не найден: " + target);
        if (flags.has("file") && flags.has("directory")) return error("Выбери один фильтр: -File или -Directory.");
        const hidden = ["a", "A", "hidden"].some(flag => flags.has(flag));
        const gnuStyle = !windows || [...flags].some(flag => bashOptions.ls.short.includes(flag));
        const entries = folders.has(path) ? [...folders, ...files.keys()]
          .filter(item => item && parent(item) === path &&
            (hidden || !(gnuStyle ? name(item).startsWith(".") : hiddenPaths.has(item)))) : [path];
        const listed = entries.filter(item => (!flags.has("file") || files.has(item)) &&
          (!flags.has("directory") || folders.has(item))).sort().map(item => ({
          name: name(item),
          directory: folders.has(item),
          content: files.get(item) ?? ""
        }));
        if (folders.has(path) && flags.has("a") && !flags.has("file")) {
          listed.unshift({ name: ".", directory: true, content: "" }, { name: "..", directory: true, content: "" });
        }
        const lines = listed.map(item => {
          const label = item.name + (item.directory && flags.has("F") ? "/" : "");
          if (!flags.has("l") || flags.has("name")) return label;
          return (item.directory ? "drwxr-xr-x" : "-rw-r--r--") + "  " +
            fileSize(item.content, flags.has("h")).padStart(5) + "  " + label;
        });
        const compatibility = windows && gnuStyle
          ? "\n\nУчебный режим: распознаны флаги GNU ls. В PowerShell для скрытых элементов используй Get-ChildItem -Force." : "";
        return result("ls:" + path, (lines.join("\n") || "(нет подходящих элементов)") + compatibility);
      }
      if (["mkdir", "touch", "new-item"].includes(action)) {
        const target = named.path ?? args[0];
        const type = named.type?.toLowerCase();
        if (!target || args.length > (named.path === undefined ? 1 : 0) ||
            (action === "new-item" && !["directory", "file"].includes(type))) {
          return error(action === "new-item" ? "Укажи путь и тип элемента: -ItemType File или -ItemType Directory." : "Укажи один путь.");
        }
        const directory = action === "mkdir" || type === "directory";
        const path = resolvePath(target);
        if (path === null || (!path && !flags.has("p"))) return error("Укажи путь внутри учебной папки.");
        if (!flags.has("p") && !folders.has(parent(path))) return error("Родительская папка не найдена.");
        if (folders.has(path) && !flags.has("p") || files.has(path) && (directory || action === "new-item")) return error("Такой путь уже существует.");
        if (directory) {
          const missing = [];
          for (let folder = path; !folders.has(folder); folder = parent(folder)) {
            if (files.has(folder)) return error("Часть пути уже занята файлом: " + name(folder));
            missing.unshift(folder);
          }
          missing.forEach(folder => folders.add(folder));
          return result("mkdir:" + path, flags.has("v") ? missing.map(folder => "Создана папка: " + displayPath(folder)).join("\n") : "");
        }
        if (!files.has(path)) files.set(path, "");
        return result("touch:" + path);
      }
      if (action === "write" || redirect) {
        const path = resolvePath(redirect ? rawArgs[2] : named.path ?? args.shift());
        const content = redirect ? rawArgs[0] : named.content ?? args.shift();
        if (content === undefined || args.length) return error("Укажи файл и текст для записи.");
        if (!path || folders.has(path) || !folders.has(parent(path))) return error("Укажи файл в существующей папке.");
        files.set(path, content + "\n");
        return result("write:" + path);
      }
      if (action === "cat" && args.length === (named.path === undefined ? 1 : 0)) {
        const path = resolvePath(named.path ?? args[0]);
        if (!files.has(path)) return error("Файл не найден.");
        if (named.first !== undefined && named.last !== undefined) return error("Выбери -TotalCount или -Tail.");
        const count = named.first ?? named.last;
        if (count !== undefined && (!/^\d+$/.test(count) || !Number.isSafeInteger(Number(count)))) {
          return error("Количество строк должно быть целым неотрицательным числом.");
        }
        const content = files.get(path);
        const lines = fileLines(content);
        const selected = named.first !== undefined ? lines.slice(0, Number(count))
          : named.last !== undefined ? lines.slice(Math.max(0, lines.length - Number(count))) : lines;
        const output = flags.has("n") ? selected.map((line, index) => String(index + 1).padStart(6) + "\t" + line).join("\n")
          : count === undefined ? content : selected.join("\n");
        return result("cat:" + path, output || "(нет строк для вывода)");
      }
      if (action === "search") {
        const pattern = named.pattern ?? args.shift();
        const target = named.path ?? args.shift();
        if (pattern === undefined || !target || args.length) return error(windows ? "Формат: Select-String -Pattern текст -Path файл" : "Формат: grep текст файл");
        const path = resolvePath(target);
        if (!files.has(path)) return error("Файл не найден.");
        const ignoreCase = windows ? !flags.has("case-sensitive") : flags.has("i");
        const compare = text => ignoreCase ? text.toLowerCase() : text;
        const hits = fileLines(files.get(path)).map((line, index) => ({ line, number: index + 1 }))
          .filter(({ line }) => compare(line).includes(compare(pattern)) !== flags.has("v"));
        const output = flags.has("c") ? String(hits.length) : hits.map(({ line, number }) =>
          flags.has("n") ? number + ":" + line : line).join("\n");
        return result(hits.length ? "search:" + path + ":" + compare(pattern) : null, output || "(совпадений нет)");
      }
      if (["cp", "mv"].includes(action)) {
        const from = resolvePath(named.path ?? args.shift());
        let to = resolvePath(named.destination ?? args.shift());
        if (!files.has(from) || to === null || args.length) return error("Укажи исходный файл и путь назначения.");
        if (folders.has(to)) to = (to ? to + "/" : "") + name(from);
        to = resolvePath("~/" + to);
        if (to === from || folders.has(to) || !folders.has(parent(to))) return error("Проверь путь назначения.");
        if (flags.has("preview")) return result(null, "What if: " + command + " " + displayPath(from) + " → " + displayPath(to));
        if (flags.has("n") && files.has(to)) return result(null, "Файл уже существует. Изменения пропущены.");
        files.set(to, files.get(from));
        if (hiddenPaths.has(from)) hiddenPaths.add(to);
        if (action === "mv") {
          files.delete(from);
          hiddenPaths.delete(from);
        }
        return result(action + ":" + from + ":" + to, flags.has("v") ? displayPath(from) + " → " + displayPath(to) : "");
      }
      if (action === "rm" && args.length === (named.path === undefined ? 1 : 0)) {
        const path = resolvePath(named.path ?? args[0]);
        if (folders.has(path)) return error("Удаление папок в тренажёре отключено.");
        if (!files.has(path)) return flags.has("f") ? result(null) : error("Укажи существующий файл.");
        if (flags.has("preview")) return result(null, "What if: " + command + " " + displayPath(path));
        files.delete(path);
        hiddenPaths.delete(path);
        return result("rm:" + path, flags.has("v") ? "Удалён файл: " + displayPath(path) : "");
      }
      return error("Команда или её параметры недоступны в симуляторе. Проверь оболочку и справку.");
    }

    return {
      get prompt() { return windows ? "PS " + displayPath(cwd) + ">" : "student@linux:" + displayPath(cwd) + "$"; },
      execute
    };
  };
})();
