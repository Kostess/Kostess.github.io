(() => {
  const readme = "# Notes\nProject workspace\n";
  const changedReadme = "# Notes\nProject workspace\nSetup instructions\n";
  const notes = "TODO update documentation\nDONE create folder\nTODO add examples\n";
  const remote = "https://example.test/student/notes.git";
  const baseline = { "README.md": readme };
  const initial = [["Start notes project", baseline]];
  const repo = (files = baseline, settings = {}) => ({ files, git: { commits: initial, ...settings } });
  const step = (event, task, powershell, bash = powershell, check) => ({ event, task, powershell, bash, check });
  const onlyReadme = ({ paths }) => paths.length === 1 && paths[0] === "README.md";
  const contains = text => ({ output }) => output.includes(text);
  const lesson = (id, title, intro, steps, scenario, takeaway) => ({ id, title, intro, steps, scenario, takeaway });

  const tracks = {
    shell: [
      lesson("navigate", "Ориентация в папках", "Ты в учебной папке Workshop. Найди каталог projects и посмотри, что в нём.", [
        step("pwd", "Узнай текущий путь.", "Get-Location", "pwd"),
        step("ls:", "Посмотри содержимое Workshop.", "Get-ChildItem", "ls"),
        step("cd:projects", "Перейди в projects.", "cd projects"),
        step("ls:projects", "Посмотри содержимое projects.", "Get-ChildItem", "ls")
      ], { files: { "projects/README.md": readme, "notes.txt": notes } }, "Путь в приглашении меняется после cd. Список файлов можно посмотреть и без смены папки."),
      lesson("paths", "Относительные пути", "Ты в projects/demo. Рядом с projects лежит папка archive.", [
        step("cd:projects", "Поднимись на один уровень в projects.", "cd .."),
        step("cd:archive", "Перейди в archive из текущей папки.", "cd ../archive"),
        step("cat:archive/notes.txt", "Прочитай notes.txt из архива.", "Get-Content notes.txt", "cat notes.txt")
      ], { cwd: "projects/demo", folders: ["projects/demo"], files: { "archive/notes.txt": notes } }, "Две точки означают родительскую папку. Относительный путь вычисляется от текущей папки."),
      lesson("quotes", "Пробелы в путях", "В Workshop есть папка team notes. В ней лежит файл next steps.txt.", [
        step("cd:team notes", "Открой папку с пробелом в имени.", 'cd "team notes"'),
        step("cat:team notes/next steps.txt", "Открой файл с пробелом в имени.", 'Get-Content "next steps.txt"', 'cat "next steps.txt"')
      ], { files: { "team notes/next steps.txt": "1. Check the project\n2. Share an update\n" } }, "Кавычки позволяют передать путь с пробелами как один аргумент."),
      lesson("create", "Создание папки и файла", "Подготовь каталог для отчётов. Он пока пуст.", [
        step("mkdir:reports", "Создай папку reports.", "New-Item -ItemType Directory reports", "mkdir reports"),
        step("touch:reports/daily.txt", "Создай пустой файл daily.txt в reports.", "New-Item -ItemType File reports/daily.txt", "touch reports/daily.txt"),
        step("ls:reports", "Проверь содержимое reports.", "Get-ChildItem reports", "ls reports")
      ], {}, "Файл можно создать по относительному пути. Переходить в родительскую папку для этого необязательно."),
      lesson("read-search", "Чтение и поиск по тексту", "В notes.txt есть выполненные и незавершённые дела. Найди строки с TODO.", [
        step("cat:notes.txt", "Прочитай файл целиком.", "Get-Content notes.txt", "cat notes.txt"),
        step(["search:notes.txt:todo", "search:notes.txt:TODO"], "Найди строки с TODO.", 'Select-String -Pattern "TODO" -Path notes.txt -SimpleMatch', 'grep -F "TODO" notes.txt')
      ], { files: { "notes.txt": notes } }, "Поиск выводит подходящие строки. В этом упражнении TODO ищется как обычный текст."),
      lesson("write-copy", "Запись и резервная копия", "Папка backup уже существует. Создай короткую заметку и сохрани копию.", [
        step("write:notes.txt", "Запиши текст в notes.txt.", 'Set-Content notes.txt "Ready to start"', 'echo "Ready to start" > notes.txt'),
        step("cp:notes.txt:backup/notes.txt", "Скопируй notes.txt в backup.", "Copy-Item notes.txt backup", "cp notes.txt backup"),
        step("cat:backup/notes.txt", "Прочитай копию и проверь текст.", "Get-Content backup/notes.txt", "cat backup/notes.txt")
      ], { folders: ["backup"] }, "Копирование оставляет исходный файл на месте. Запись через Set-Content или > заменяет старое содержимое."),
      lesson("move", "Переименование и перенос", "В Workshop лежит draft.txt. Подготовь финальную версию в папке archive.", [
        step("mv:draft.txt:final.txt", "Переименуй draft.txt в final.txt.", "Move-Item draft.txt final.txt", "mv draft.txt final.txt"),
        step("mv:final.txt:archive/final.txt", "Перенеси final.txt в archive.", "Move-Item final.txt archive", "mv final.txt archive"),
        step("ls:archive", "Проверь результат в archive.", "Get-ChildItem archive", "ls archive")
      ], { folders: ["archive"], files: { "draft.txt": "Draft ready\n" } }, "Одна команда умеет и переименовать файл, и переместить его в другую папку."),
      lesson("remove", "Удаление одного файла", "Убери scratch.tmp. Файл notes.txt должен остаться.", [
        step("ls:", "Посмотри, какие файлы лежат в папке.", "Get-ChildItem", "ls"),
        step("rm:scratch.tmp", "Удали только scratch.tmp.", "Remove-Item scratch.tmp", "rm scratch.tmp"),
        step("cat:notes.txt", "Проверь, что notes.txt остался доступен.", "Get-Content notes.txt", "cat notes.txt")
      ], { files: { "scratch.tmp": "temporary", "notes.txt": notes } }, "Перед удалением проверь текущую папку и точное имя файла."),
      lesson("run", "Запуск проекта из терминала", "Терминал открыт в drafts. Учебный проект .NET находится в соседней папке demo.", [
        step("cd:", "Вернись в родительскую папку.", "cd .."),
        step("cd:demo", "Перейди в demo.", "cd demo"),
        step("run", "Запусти проект.", "dotnet run")
      ], { cwd: "drafts", folders: ["drafts"], files: { "demo/Demo.csproj": "<Project />", "demo/Program.cs": 'Console.WriteLine("Hello from the terminal!");\n' }, runOutput: "Hello from the terminal!" }, "Инструменты часто ищут файл проекта в текущей папке. Проверь путь, если запуск не удался.")
    ],
    git: [
      lesson("init", "Первый репозиторий и коммит", "В папке есть README.md. Начни вести историю проекта.", [
        step("git:init", "Создай репозиторий с веткой main.", "git init -b main"),
        step("git:status", "Найди файл, который Git пока не отслеживает.", "git status"),
        step("git:add:README.md", "Подготовь README.md к коммиту.", "git add README.md"),
        step("git:commit", "Создай первый коммит.", 'git commit -m "Start notes project"')
      ], { files: baseline }, "git init создаёт репозиторий. Первый снимок появляется после git add и git commit."),
      lesson("inspect", "Что изменилось в проекте", "В README.md добавили инструкцию, рядом появился новый черновик.", [
        step("git:status", "Узнай состояние обоих файлов.", "git status"),
        step("git:diff", "Найди добавленную строку в отслеживаемом файле.", "git diff")
      ], repo({ "README.md": changedReadme, "draft.txt": "Draft\n" }), "git status показывает состояние файлов. Обычный git diff показывает неподготовленные изменения отслеживаемых файлов."),
      lesson("stage", "Один файл в коммите", "README.md готов, а draft.txt ещё в работе. Сохрани только README.md.", [
        step("git:add:README.md", "Подготовь README.md отдельно.", "git add README.md"),
        step("git:staged", "Проверь, что в индексе только README.md.", "git diff --cached", undefined, onlyReadme),
        step("git:commit", "Запиши подготовленное изменение в историю.", 'git commit -m "Document setup"', undefined, onlyReadme)
      ], repo({ "README.md": changedReadme, "draft.txt": "Draft\n" }), "Коммит берёт изменения из индекса. Черновик, который не добавляли, остаётся в рабочей папке."),
      lesson("unstage", "Убрать файл из индекса", "Сначала подготовь README.md. Затем убери его из индекса, сохранив правку в рабочем файле.", [
        step("git:add:README.md", "Добавь файл в индекс.", "git add README.md"),
        step("git:unstage:README.md", "Убери файл из индекса.", "git restore --staged README.md"),
        step("git:diff", "Проверь, что правка всё ещё видна.", "git diff")
      ], repo({ "README.md": changedReadme }), "git restore --staged меняет индекс. Рабочий файл сохраняет правку."),
      lesson("restore", "Отменить рабочую правку", "В README.md появилась случайная строка. Последняя сохранённая версия лежит в индексе.", [
        step("git:diff", "Посмотри, какая строка добавилась.", "git diff"),
        step("git:restore:README.md", "Верни README.md к версии из индекса.", "git restore README.md"),
        step("git:status", "Убедись, что рабочая папка чистая.", "git status", undefined, contains("working tree clean"))
      ], repo({ "README.md": readme + "Accidental edit\n" }), "git restore без --staged меняет рабочий файл. Отменяемая правка пропадает из него."),
      lesson("history", "История и указатели веток", "В проекте уже два коммита. Узнай, где находится main.", [
        step("git:log", "Выведи историю в компактном виде.", "git log --oneline"),
        step("git:branch", "Посмотри список веток и найди текущую.", "git branch")
      ], repo({ "README.md": changedReadme }, { commits: [...initial, ["Document setup", { "README.md": changedReadme }]] }), "HEAD указывает на текущую ветку. Звёздочка в git branch отмечает её."),
      lesson("branch", "Работа в отдельной ветке", "Попробуй новую заметку в ветке feature и вернись в main.", [
        step("git:switch:feature", "Создай ветку feature и переключись в неё.", "git switch -c feature"),
        step("write:idea.txt", "Запиши идею в файл idea.txt.", 'Set-Content idea.txt "New idea"', 'echo "New idea" > idea.txt'),
        step("git:add:idea.txt", "Подготовь файл.", "git add idea.txt"),
        step("git:commit", "Сохрани изменение в feature.", 'git commit -m "Record idea"'),
        step("git:switch:main", "Вернись в main.", "git switch main"),
        step("ls:", "Проверь содержимое папки после переключения.", "Get-ChildItem", "ls")
      ], repo(), "Ветка feature сохранила свой коммит. После возврата в main рабочая папка отражает версию main."),
      lesson("merge", "Слияние fast-forward", "В feature есть новый коммит, а main осталась на предыдущем. Перенеси main вперёд.", [
        step("git:switch:main", "Переключись с feature на main.", "git switch main"),
        step("git:merge:feature", "Включи изменения feature в main.", "git merge feature"),
        step("git:log", "Проверь, куда теперь указывают ветки.", "git log --oneline")
      ], repo({ ...baseline, "idea.txt": "New idea\n" }, {
        branch: "feature", feature: ["Record idea", { ...baseline, "idea.txt": "New idea\n" }]
      }), "При fast-forward указатель main перемещается на готовый коммит. Дополнительный коммит слияния не создаётся."),
      lesson("push", "Первый push и upstream", "Локальный коммит готов. В учебном удалённом репозитории ещё нет ветки main.", [
        step("git:remote:add", "Добавь удалённый репозиторий origin.", "git remote add origin " + remote),
        step("git:remote", "Проверь адреса origin.", "git remote -v"),
        step("git:push:upstream", "Опубликуй main и настрой связь веток.", "git push -u origin main"),
        step("git:status", "Проверь связь с origin/main.", "git status")
      ], repo(), "Ключ -u настраивает upstream. Дальше для этой ветки достаточно git push."),
      lesson("publish", "Отправка нового коммита", "Связь с origin/main уже настроена. В README.md появилась новая инструкция.", [
        step("git:add:README.md", "Подготовь README.md к коммиту.", "git add README.md"),
        step("git:commit", "Создай локальный коммит.", 'git commit -m "Document setup"'),
        step("git:status", "Убедись, что локальная ветка опережает origin/main.", "git status", undefined, contains("ahead of 'origin/main'")),
        step("git:push", "Отправь коммит через настроенный upstream.", "git push"),
        step("git:log", "Проверь, что main и origin/main указывают на один коммит.", "git log --oneline", undefined, contains("HEAD -> main, origin/main"))
      ], repo({ "README.md": changedReadme }, { remote, upstream: true }), "После коммита история обновилась локально. После push указатель origin/main переместился на новый коммит."),
      lesson("sync", "Fetch и pull", "Коллега обновил README.md на origin. У тебя пока старая версия.", [
        step("git:fetch", "Получи сведения об изменениях на origin.", "git fetch origin"),
        step("git:status", "Проверь, отстаёт ли локальная main.", "git status", undefined, contains("behind 'origin/main'")),
        step("git:pull", "Обнови локальную ветку без коммита слияния.", "git pull --ff-only"),
        step("cat:README.md", "Прочитай обновлённый README.md.", "Get-Content README.md", "cat README.md", contains("Setup instructions"))
      ], repo(baseline, { remote, upstream: true, incoming: ["Document setup", { "README.md": changedReadme }] }),
      "fetch обновляет сведения об удалённой ветке. pull получает изменения и применяет их к локальной ветке.")
    ],
    sandbox: [
      lesson("sandbox", "Свободная практика", "В песочнице уже есть учебный репозиторий. Меняй файлы и пробуй команды в любом порядке.", [],
        repo(baseline, { remote, upstream: true }), "")
    ]
  };

  const $ = id => document.querySelector("#terminal" + id);
  const shellSelect = $("Shell");
  const trackSelect = $("Track");
  const lessonSelect = $("Lesson");
  const input = $("Command");
  const log = $("Log");
  const hint = $("Hint");
  const hintButton = $("HintButton");
  const nextButton = $("Next");
  const key = "terminal-completed-v1";
  let completed = {};
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved && typeof saved === "object" && !Array.isArray(saved)) completed = saved;
  } catch { /* Practice remains available without browser storage. */ }

  let current;
  let environment;
  let index;
  let commands;
  let historyIndex;
  let draft;

  const lessonKey = id => shellSelect.value + ":" + id;
  const isComplete = id => completed[lessonKey(id)] === true;
  const activeTrack = () => tracks[trackSelect.value];
  const currentStep = () => current.steps[index];

  function appendLog(text, echo = false) {
    const line = document.createElement("div");
    line.className = echo ? "terminal-echo" : "terminal-output";
    line.textContent = text;
    log.append(line);
    if (log.children.length > 160) log.firstElementChild.remove();
    log.scrollTop = log.scrollHeight;
  }

  function fillLessons(id = activeTrack()[0].id) {
    const items = activeTrack();
    $("LessonField").hidden = trackSelect.value === "sandbox";
    lessonSelect.replaceChildren();
    for (const item of items) {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = (isComplete(item.id) ? "✓ " : "") + item.title;
      lessonSelect.append(option);
    }
    lessonSelect.value = id;
    const lessons = [...tracks.shell, ...tracks.git];
    $("Completed").textContent = "Пройдено в этой оболочке: " +
      lessons.filter(item => isComplete(item.id)).length + " из " + lessons.length;
  }

  function renderHelp() {
    const windows = shellSelect.value === "powershell";
    $("ShellHelp").textContent = windows
      ? "Get-Location · Get-ChildItem [путь] · Set-Location / cd\nNew-Item -ItemType File|Directory путь · Get-Content файл\nSet-Content файл текст · Select-String -Pattern текст -Path файл -SimpleMatch\nCopy-Item · Move-Item · Remove-Item · Clear-Host"
      : "pwd · ls [путь] · cd · mkdir папка · touch файл\ncat файл · echo текст > файл · grep -F текст файл\ncp · mv · rm · clear";
  }

  function hideHint() {
    hint.hidden = true;
    hintButton.setAttribute("aria-expanded", "false");
    hintButton.textContent = "Показать подсказку";
  }

  function render() {
    const task = currentStep();
    const sandbox = current.steps.length === 0;
    $("Title").textContent = current.title;
    $("Progress").textContent = sandbox ? "Песочница" : task ? "Шаг " + (index + 1) + " из " + current.steps.length : "Урок завершён";
    $("Task").textContent = task?.task ?? (sandbox ? current.intro : current.takeaway);
    $("Prompt").textContent = environment.prompt;
    hintButton.hidden = !task;
    const list = $("Steps");
    list.hidden = sandbox;
    list.replaceChildren();
    current.steps.forEach((item, position) => {
      const line = document.createElement("li");
      line.textContent = (position < index ? "✓ " : "") + item.task;
      if (position === index) line.setAttribute("aria-current", "step");
      list.append(line);
    });
    nextButton.hidden = Boolean(task) || !activeTrack()[activeTrack().indexOf(current) + 1];
  }

  function start() {
    current = activeTrack().find(item => item.id === lessonSelect.value) ?? activeTrack()[0];
    environment = createTerminalEnvironment(shellSelect.value, current.scenario);
    index = 0;
    commands = [];
    historyIndex = 0;
    draft = "";
    input.value = "";
    log.replaceChildren();
    appendLog(current.intro);
    hideHint();
    renderHelp();
    render();
  }

  function completeLesson() {
    completed[lessonKey(current.id)] = true;
    try { localStorage.setItem(key, JSON.stringify(completed)); } catch { /* Storage is optional. */ }
    fillLessons(current.id);
  }

  shellSelect.addEventListener("change", () => {
    fillLessons(current.id);
    start();
  });
  trackSelect.addEventListener("change", () => {
    fillLessons();
    start();
  });
  lessonSelect.addEventListener("change", start);
  $("Restart").addEventListener("click", () => { start(); input.focus(); });
  $("Clear").addEventListener("click", () => { log.replaceChildren(); input.focus(); });
  nextButton.addEventListener("click", () => {
    const next = activeTrack()[activeTrack().indexOf(current) + 1];
    if (!next) return;
    lessonSelect.value = next.id;
    start();
    input.focus();
  });
  hintButton.addEventListener("click", () => {
    if (!hint.hidden) { hideHint(); return; }
    const task = currentStep();
    if (!task) return;
    hint.textContent = task[shellSelect.value];
    hint.hidden = false;
    hintButton.setAttribute("aria-expanded", "true");
    hintButton.textContent = "Скрыть подсказку";
  });
  input.addEventListener("keydown", event => {
    if (!["ArrowUp", "ArrowDown"].includes(event.key) || !commands.length) return;
    event.preventDefault();
    if (historyIndex === commands.length) draft = input.value;
    const direction = event.key === "ArrowUp" ? -1 : 1;
    historyIndex = Math.max(0, Math.min(commands.length, historyIndex + direction));
    input.value = commands[historyIndex] ?? draft;
  });
  $("Form").addEventListener("submit", event => {
    event.preventDefault();
    const command = input.value.trim();
    if (!command) return;
    commands.push(command);
    if (commands.length > 100) commands.shift();
    historyIndex = commands.length;
    draft = "";
    appendLog(environment.prompt + " " + command, true);
    const outcome = environment.execute(command);
    const { event: action, output } = outcome;
    if (action === "clear") log.replaceChildren();
    if (action === "help") $("Reference").open = true;
    if (output) appendLog(output);
    const task = currentStep();
    if (task && [task.event].flat().includes(action)) {
      if (!task.check || task.check(outcome)) {
        index++;
        hideHint();
        if (!currentStep()) completeLesson();
      } else {
        appendLog("Команда выполнилась, но результат пока не соответствует шагу. " + task.task);
      }
    }
    input.value = "";
    render();
    input.focus();
  });
  fillLessons();
  start();
})();
