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
    return parts?.join("") === raw
      ? parts.map(part => part.trim().replace(/^["']|["']$/g, ""))
      : null;
  }

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
      if (command === "add" && options.length === 1) {
        const path = resolvePath(options[0]);
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
        if (options.length !== (staged ? 2 : 1)) return error("Укажи один файл для git restore.");
        const path = resolvePath(options.at(-1));
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
      const [typed, ...args] = tokens;
      const command = windows ? typed.toLowerCase() : typed;
      if (command === "git") return git(args);
      if (command === "help" && !args.length) return result("help", "Открой справку под консолью, чтобы увидеть доступные команды.");
      if (command === "dotnet" && args.join(" ") === "run") {
        const hasProject = [...files.keys()].some(path => parent(path) === cwd && path.endsWith(".csproj"));
        return hasProject
          ? result("run", scenario.runOutput ?? "Учебный проект запущен.")
          : error("Couldn't find a project to run.\nВ текущей папке нет файла .csproj.");
      }
      const action = Object.hasOwn(shellAliases, command) ? shellAliases[command] : undefined;
      if (action === "pwd" && !args.length) return result("pwd", displayPath(cwd));
      if (action === "clear" && !args.length) return result("clear");
      if (action === "cd" && args.length <= 1) {
        const path = resolvePath(args[0] ?? "~");
        if (!folders.has(path)) return error("Папка не найдена: " + (args[0] ?? "~"));
        cwd = path;
        return result("cd:" + cwd);
      }
      if (action === "ls" && args.length <= 1) {
        const path = args.length ? resolvePath(args[0]) : cwd;
        if (!folders.has(path)) return error("Папка не найдена: " + args[0]);
        const listed = [...folders, ...files.keys()].filter(item => item && parent(item) === path)
          .map(item => name(item) + (folders.has(item) ? "/" : "")).sort();
        return result("ls:" + path, listed.join("\n") || "(папка пуста)");
      }
      if ((action === "mkdir" || action === "touch") && args.length === 1 ||
          action === "new-item" && args.length === 3 && args[0].toLowerCase() === "-itemtype" &&
          ["directory", "file"].includes(args[1].toLowerCase())) {
        const directory = action === "mkdir" || args[1]?.toLowerCase() === "directory";
        const path = resolvePath(args.at(-1));
        if (!path || !folders.has(parent(path))) return error("Родительская папка не найдена.");
        if (folders.has(path) || files.has(path) && (directory || action === "new-item")) return error("Такой путь уже существует.");
        if (directory) folders.add(path);
        else if (!files.has(path)) files.set(path, "");
        return result((directory ? "mkdir:" : "touch:") + path);
      }
      if (action === "write" && args.length === 2 || action === "echo" && args.length === 3 && args[1] === ">") {
        const path = resolvePath(action === "write" ? args[0] : args[2]);
        const content = action === "write" ? args[1] : args[0];
        if (!path || folders.has(path) || !folders.has(parent(path))) return error("Укажи файл в существующей папке.");
        files.set(path, content + "\n");
        return result("write:" + path);
      }
      if (action === "cat" && args.length === 1) {
        const path = resolvePath(args[0]);
        return files.has(path) ? result("cat:" + path, files.get(path) || "(файл пуст)") : error("Файл не найден.");
      }
      if (action === "search") {
        if (windows && args.at(-1)?.toLowerCase() === "-simplematch") args.pop();
        if (!windows && args[0] === "-F") args.shift();
        const valid = windows
          ? args.length === 4 && args[0].toLowerCase() === "-pattern" && args[2].toLowerCase() === "-path"
          : args.length === 2;
        if (!valid) return error(windows ? "Формат: Select-String -Pattern текст -Path файл" : "Формат: grep текст файл");
        const pattern = windows ? args[1] : args[0];
        const path = resolvePath(args.at(-1));
        if (!files.has(path)) return error("Файл не найден.");
        const compare = text => windows ? text.toLowerCase() : text;
        const hits = files.get(path).split("\n").filter(line => compare(line).includes(compare(pattern)));
        return result(hits.length ? "search:" + path + ":" + compare(pattern) : null, hits.join("\n") || "(совпадений нет)");
      }
      if (["cp", "mv"].includes(action) && args.length === 2) {
        const from = resolvePath(args[0]);
        let to = resolvePath(args[1]);
        if (!files.has(from) || to === null) return error("Укажи исходный файл и путь назначения.");
        if (folders.has(to)) to = (to ? to + "/" : "") + name(from);
        to = resolvePath("~/" + to);
        if (to === from || folders.has(to) || !folders.has(parent(to))) return error("Проверь путь назначения.");
        files.set(to, files.get(from));
        if (action === "mv") files.delete(from);
        return result(action + ":" + from + ":" + to);
      }
      if (action === "rm" && args.length === 1) {
        const path = resolvePath(args[0]);
        if (!files.has(path)) return error("Укажи существующий файл. Удаление папок в тренажёре отключено.");
        files.delete(path);
        return result("rm:" + path);
      }
      return error("Команда или её параметры недоступны в симуляторе. Проверь оболочку и справку.");
    }

    return {
      get prompt() { return windows ? "PS " + displayPath(cwd) + ">" : "student@linux:" + displayPath(cwd) + "$"; },
      execute
    };
  };
})();
