(() => {
  const shellConfigs = {
    powershell: {
      projects: "C:/Users/student/Projects",
      location: "Get-Location",
      list: "Get-ChildItem",
      locationNames: ["get-location", "pwd"],
      listNames: ["get-childitem", "ls", "dir"],
      changeNames: ["set-location", "cd"]
    },
    bash: {
      projects: "/home/student/Projects",
      location: "pwd",
      list: "ls",
      locationNames: ["pwd"],
      listNames: ["ls"],
      changeNames: ["cd"]
    }
  };

  function createSession(shell, lesson) {
    const config = shellConfigs[shell];
    const windows = shell === "powershell";
    const projects = config.projects;
    const lab = projects + "/Lab10";
    const drafts = projects + "/Drafts";
    const displayPath = path => windows ? path.replaceAll("/", "\\") : path;
    let folder = lesson === "git" ? lab : lesson === "run" ? drafts : projects;
    let step = 0;
    let gitState = "modified";
    let commitMessage = "";

    const lessons = {
      navigate: {
        title: "Найди папку ЛБ 10",
        intro: "В папке Projects лежит несколько каталогов. Найди проект лабораторной.",
        done: "Ты в папке Lab10. В ней лежат Program.cs и файл проекта Lab10.csproj.",
        steps: [
          ["location", "Узнай текущую папку.", config.location],
          ["list-projects", "Посмотри, какие папки есть в Projects.", config.list],
          ["enter", "Перейди в папку Lab10.", "cd Lab10"],
          ["list-lab", "Найди файл проекта с расширением .csproj.", config.list]
        ]
      },
      run: {
        title: "Запусти ЛБ 10",
        intro: "Терминал открыт в черновиках Drafts. Проект находится в соседней папке Lab10.",
        done: "Программа запустилась. На своём компьютере выполни dotnet run в папке проекта.",
        steps: [
          ["back", "Поднимись из Drafts в родительскую папку Projects.", "cd .."],
          ["enter", "Открой соседнюю папку Lab10.", "cd Lab10"],
          ["run", "Запусти проект из текущей папки.", "dotnet run"]
        ]
      },
      git: {
        title: "Сохрани и отправь изменение",
        intro: "Проект уже связан с origin. В Program.cs изменился вызов CreateSortedCopy.",
        done: "Коммит появился в учебной ветке origin/main. Проверь это командами git status или git log --oneline.",
        steps: [
          ["status", "Посмотри, какие файлы изменились в репозитории.", "git status"],
          ["diff", "Посмотри, какая строка изменилась в Program.cs.", "git diff"],
          ["add", "Подготовь Program.cs к коммиту.", "git add Program.cs"],
          ["staged", "Проверь, что попадёт в следующий коммит.", "git diff --cached"],
          ["commit", "Создай локальный коммит с осмысленным сообщением.", 'git commit -m "Sort timings in descending order"'],
          ["push", "Отправь локальный коммит в связанный репозиторий.", "git push"]
        ]
      }
    };
    const scenario = lessons[lesson];
    const diff = [
      "diff --git a/Program.cs b/Program.cs",
      "--- a/Program.cs",
      "+++ b/Program.cs",
      "@@ -1 +1 @@",
      "-var sorted = CreateSortedCopy(times);",
      "+var sorted = CreateSortedCopy(times, descending: true);"
    ].join("\n");

    function changeFolder(requested) {
      const path = windows ? requested.replaceAll("\\", "/") : requested;
      const absolute = path.startsWith("/") || (windows && /^[a-z]:\//i.test(path));
      const parts = [];
      for (const part of (absolute ? path : folder + "/" + path).split("/")) {
        if (part === "..") parts.pop();
        else if (part && part !== ".") parts.push(part);
      }
      const target = (windows ? "" : "/") + parts.join("/");
      const found = [projects, lab, drafts].find(candidate =>
        windows ? candidate.toLowerCase() === target.toLowerCase() : candidate === target
      );
      if (!found) return { output: "В учебной среде такой папки нет: " + requested };
      const fromDrafts = folder === drafts;
      folder = found;
      if (folder === lab) return { action: "enter" };
      return { action: folder === projects && fromDrafts ? "back" : null };
    }

    function runGit(args) {
      if (lesson !== "git" || folder !== lab) {
        return { output: "fatal: not a git repository\nВ учебной среде репозиторий доступен в папке Lab10 в уроке Git." };
      }
      const [command, ...options] = args;
      if (command === "status" && options.length === 0) {
        const statuses = {
          modified: "Your branch is up to date with 'origin/main'.\n\nChanges not staged for commit:\n  modified: Program.cs",
          staged: "Your branch is up to date with 'origin/main'.\n\nChanges to be committed:\n  modified: Program.cs",
          committed: "Your branch is ahead of 'origin/main' by 1 commit.\n\nnothing to commit, working tree clean",
          pushed: "Your branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean"
        };
        return { action: "status", output: "On branch main\n" + statuses[gitState] };
      }
      if (command === "diff" && options.length === 0) {
        return { action: "diff", output: gitState === "modified" ? diff : "" };
      }
      if (command === "diff" && options.length === 1 && ["--cached", "--staged"].includes(options[0])) {
        return { action: "staged", output: gitState === "staged" ? diff : "" };
      }
      if (command === "log" && options.length === 1 && options[0] === "--oneline") {
        const initial = "d0e891a ";
        if (gitState === "committed" || gitState === "pushed") {
          const refs = gitState === "pushed" ? "(HEAD -> main, origin/main)" : "(HEAD -> main)";
          return {
            output: "a1b2c3d " + refs + " " + commitMessage + "\n" +
              initial + (gitState === "committed" ? "(origin/main) " : "") + "Start Lab 10"
          };
        }
        return { output: initial + "(HEAD -> main, origin/main) Start Lab 10" };
      }

      const file = options[0];
      const correctFile = windows ? file?.toLowerCase() === "program.cs" : file === "Program.cs";
      const add = command === "add" && options.length === 1 && correctFile;
      const commit = command === "commit" && options.length === 2 && options[0] === "-m" && options[1].trim();
      const push = command === "push" && (
        options.length === 0 || (options.length === 2 && options[0] === "origin" && options[1] === "main")
      );
      if (add || commit || push) {
        const expected = scenario.steps[step];
        if (!expected) return { output: "Коммит уже отправлен. Состояние можно проверить через git status." };
        if (expected[0] !== command) {
          return { output: "В этом уроке сначала выполни текущий шаг: " + expected[1] };
        }
        if (add) {
          gitState = "staged";
          return { action: "add" };
        }
        if (commit) {
          gitState = "committed";
          commitMessage = options[1];
          return { action: "commit", output: "[main a1b2c3d] " + commitMessage + "\n 1 file changed, 1 insertion(+), 1 deletion(-)" };
        }
        gitState = "pushed";
        return { action: "push", output: "To github.com:student/lab10.git\n   d0e891a..a1b2c3d  main -> main" };
      }
      if (command === "add") return { output: "Укажи файл Program.cs: git add Program.cs." };
      if (command === "commit") return { output: 'Передай сообщение коммита: git commit -m "Сообщение".' };
      return { output: "Такая команда Git не входит в урок. Открой подсказку к текущему шагу." };
    }

    function execute(raw) {
      // Разбираем только слова и простые кавычки. Строка остаётся данными симулятора.
      const tokenPattern = /(?:"[^"]*"|'[^']*'|[^\s"']+)(?:\s+|$)/g;
      const tokens = raw.match(tokenPattern);
      if (!tokens || tokens.join("") !== raw) {
        return { output: "Проверь кавычки и пробелы между аргументами." };
      }
      const [name, ...args] = tokens.map(token => token.trim().replace(/^["']|["']$/g, ""));
      const command = windows ? name.toLowerCase() : name;
      if (config.locationNames.includes(command) && args.length === 0) {
        return { action: "location", output: displayPath(folder) };
      }
      if (config.listNames.includes(command) && args.length === 0) {
        if (folder === projects) return { action: "list-projects", output: "Drafts\nLab10" };
        if (folder === lab) return { action: "list-lab", output: "Lab10.csproj\nProgram.cs" };
        return { output: "notes.txt" };
      }
      if (config.changeNames.includes(command)) {
        return args.length === 1 && args[0] ? changeFolder(args[0]) : { output: "Укажи папку, в которую нужно перейти." };
      }
      if (command === "dotnet" && args.length === 1 && args[0] === "run") {
        return folder === lab
          ? {
            action: "run",
            output: [
              "Исходные замеры: 320 180 250 180 410",
              "По возрастанию: 180 180 250 320 410",
              "По убыванию: 410 320 250 180 180",
              "Исходные замеры повторно: 320 180 250 180 410",
              "Введите замер для поиска: 180 (учебный ввод)",
              "Индекс: 1"
            ].join("\n")
          }
          : { output: "Couldn't find a project to run.\nВ текущей папке нет файла .csproj." };
      }
      if (command === "git") return runGit(args);
      return { output: "Команда недоступна в этой учебной среде. Проверь выбранную оболочку или открой подсказку." };
    }

    return {
      title: scenario.title,
      intro: scenario.intro,
      get prompt() {
        return windows ? "PS " + displayPath(folder) + ">" : "student@linux:" + folder + "$";
      },
      get progress() {
        return step === scenario.steps.length ? "Урок завершён" : "Шаг " + (step + 1) + " из " + scenario.steps.length;
      },
      get task() {
        return scenario.steps[step]?.[1] ?? scenario.done;
      },
      get hint() {
        const current = scenario.steps[step];
        if (!current) return "";
        if (current[0] === "enter" && folder !== projects) return 'cd "' + displayPath(lab) + '"';
        if (current[0] === "list-projects" && folder !== projects) return "Сначала cd .., затем " + config.list;
        if (current[0] === "list-lab" && folder !== lab) return 'Сначала cd "' + displayPath(lab) + '", затем ' + config.list;
        if (current[0] === "back" && folder !== drafts) return 'Сначала cd "' + displayPath(drafts) + '", затем cd ..';
        if (current[0] === "run" && folder !== lab) return 'Сначала cd "' + displayPath(lab) + '", затем dotnet run';
        if (lesson === "git" && folder !== lab) return 'Сначала cd "' + displayPath(lab) + '", затем ' + current[2];
        return current[2];
      },
      submit(raw) {
        const { action, output } = execute(raw);
        if (action && action === scenario.steps[step]?.[0]) step += 1;
        return output;
      }
    };
  }

  const shellSelect = document.querySelector("#terminalShell");
  const lessonSelect = document.querySelector("#terminalLesson");
  const restart = document.querySelector("#terminalRestart");
  const title = document.querySelector("#terminalTitle");
  const progress = document.querySelector("#terminalProgress");
  const task = document.querySelector("#terminalTask");
  const hintButton = document.querySelector("#terminalHintButton");
  const hint = document.querySelector("#terminalHint");
  const log = document.querySelector("#terminalLog");
  const form = document.querySelector("#terminalForm");
  const input = document.querySelector("#terminalCommand");
  const prompt = document.querySelector("#terminalPrompt");
  let session;

  function appendLog(text, command = false) {
    const line = document.createElement("div");
    line.className = command ? "terminal-echo" : "terminal-output";
    line.textContent = text;
    log.append(line);
    log.scrollTop = log.scrollHeight;
  }

  function render() {
    title.textContent = session.title;
    progress.textContent = session.progress;
    task.textContent = session.task;
    prompt.textContent = session.prompt;
    hintButton.hidden = !session.hint;
    hint.hidden = true;
    hintButton.setAttribute("aria-expanded", "false");
    hintButton.textContent = "Показать подсказку";
  }

  function start() {
    session = createSession(shellSelect.value, lessonSelect.value);
    log.replaceChildren();
    input.value = "";
    appendLog(session.intro);
    render();
  }

  shellSelect.addEventListener("change", start);
  lessonSelect.addEventListener("change", start);
  restart.addEventListener("click", () => {
    start();
    input.focus();
  });
  hintButton.addEventListener("click", () => {
    hint.hidden = !hint.hidden;
    hint.textContent = hint.hidden ? "" : session.hint;
    hintButton.setAttribute("aria-expanded", String(!hint.hidden));
    hintButton.textContent = hint.hidden ? "Показать подсказку" : "Скрыть подсказку";
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const command = input.value.trim();
    if (!command) return;
    appendLog(session.prompt + " " + command, true);
    const output = session.submit(command);
    if (output) appendLog(output);
    input.value = "";
    render();
    input.focus();
  });
  start();
})();
