import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const read = name => readFileSync(new URL(`../${name}`, import.meta.url), "utf8");
const html = read("index.html");

function element() {
  const classes = new Set();
  const listeners = {};
  let markup = "";
  return {
    value: "", checked: false, hidden: false, textContent: "", style: {}, dataset: {}, children: [],
    classList: {
      contains: name => classes.has(name),
      add: name => classes.add(name), remove: name => classes.delete(name),
      toggle(name, enabled) {
        const active = enabled ?? !classes.has(name);
        active ? classes.add(name) : classes.delete(name);
        return active;
      }
    },
    set innerHTML(value) {
      markup = value;
      const firstOption = value.match(/<option value="([^"]*)"/);
      if (firstOption) this.value = firstOption[1];
      this.children = [...value.matchAll(/data-answer="([^"]*)"/g)].map(match => {
        const button = element();
        button.dataset.answer = match[1].replaceAll("&quot;", '"').replaceAll("&lt;", "<").replaceAll("&amp;", "&");
        return button;
      });
    },
    get innerHTML() { return markup; },
    replaceChildren() { this.children = []; markup = ""; this.textContent = ""; },
    append(child) { this.children.push(child); },
    querySelectorAll() { return this.children; },
    setAttribute() {},
    focus() {},
    addEventListener(name, callback) { listeners[name] = callback; },
    dispatch(name, event = {}) { listeners[name]?.({ preventDefault() {}, ...event }); },
    click() { this.dispatch("click"); }
  };
}

function setup(storage = new Map(), blocked = false) {
  const elements = new Map([...html.matchAll(/id="([^"]+)"/g)].map(match => [`#${match[1]}`, element()]));
  const root = element();
  elements.get("#codeLabSelect").value = "ЛБ 4";
  elements.get("#bugLabSelect").value = "ЛБ 4";
  elements.get("#terminalShell").value = "powershell";
  elements.get("#terminalTrack").value = "shell";
  let id = 0;
  const intervals = new Map();
  const context = vm.createContext({
    TextEncoder,
    document: {
      documentElement: root,
      querySelector(selector) {
        assert.ok(elements.has(selector), `Missing HTML element ${selector}`);
        return elements.get(selector);
      },
      querySelectorAll: () => [], createElement: element
    },
    window: {
      matchMedia: () => ({ matches: false }), addEventListener() {},
      setInterval(fn) { intervals.set(++id, fn); return id; },
      clearInterval(key) { intervals.delete(key); },
      setTimeout() { throw new Error("Unexpected automatic transition"); }, clearTimeout() {}
    },
    localStorage: {
      getItem(key) { if (blocked) throw new Error("Blocked"); return storage.get(key) ?? null; },
      setItem(key, value) { if (blocked) throw new Error("Blocked"); storage.set(key, value); }
    }
  });
  vm.runInContext(`${read("terms-content.js")}\n${read("code-content.js")}\n${read("bug-content.js")}\n${read("app.js")}`, context);
  vm.runInContext(read("terminal-engine.js") + "\n" + read("terminal.js"), context);
  const run = code => vm.runInContext(code, context);
  return { elements, run, storage, intervals };
}

function terminal(app) {
  const get = id => app.elements.get("#terminal" + id);
  return {
    select(id, value) {
      get(id).value = value;
      get(id).dispatch("change");
    },
    command(value) {
      get("Command").value = value;
      get("Form").dispatch("submit");
      return get("Log").children.at(-1).textContent;
    },
    get
  };
}

test("all 20 terminal lessons can be completed from their hints in both shells", () => {
  const app = setup();
  const ui = terminal(app);
  for (const shell of ["powershell", "bash"]) {
    ui.select("Shell", shell);
    let count = 0;
    for (const track of ["shell", "git"]) {
      ui.select("Track", track);
      const lessons = ui.get("Lesson").children.map(option => option.value);
      for (const id of lessons) {
        ui.select("Lesson", id);
        let steps = 0;
        while (!ui.get("HintButton").hidden && steps++ < 12) {
          ui.get("HintButton").click();
          const command = ui.get("Hint").textContent;
          const before = ui.get("Progress").textContent;
          const output = ui.command(command);
          assert.notEqual(ui.get("Progress").textContent, before,
            [shell, id, before, command, output].join(" | "));
        }
        assert.equal(ui.get("Progress").textContent, "Урок завершён", id);
        count++;
      }
    }
    assert.equal(count, 20);
    assert.match(ui.get("Completed").textContent, /20 из 20/);
  }
  assert.match(terminal(setup(app.storage)).get("Completed").textContent, /20 из 20/);
});

test("terminal teaches the state of Git before and after fetch, pull and selective staging", () => {
  const ui = terminal(setup());
  ui.select("Track", "git");
  ui.select("Lesson", "sync");
  assert.doesNotMatch(ui.command("Get-Content README.md"), /Setup instructions/);
  ui.command("git fetch");
  assert.match(ui.command("git status"), /behind.*1 commit/);
  assert.doesNotMatch(ui.command("Get-Content README.md"), /Setup instructions/);
  assert.match(ui.command("git pull --ff-only"), /Fast-forward/);
  assert.match(ui.command("Get-Content README.md"), /Setup instructions/);
  assert.equal(ui.get("Progress").textContent, "Урок завершён");

  ui.select("Lesson", "stage");
  ui.command("git add README.md");
  ui.command("git add draft.txt");
  assert.match(ui.command("git diff --cached"), /результат пока не соответствует/);
  assert.equal(ui.get("Progress").textContent, "Шаг 2 из 3");
  ui.command("git restore --staged draft.txt");
  assert.doesNotMatch(ui.command("git diff --cached"), /draft.txt/);
  ui.command('git commit -m "Document setup"');
  assert.match(ui.command("git status"), /Untracked files:\n  draft.txt/);
  assert.equal(ui.get("Progress").textContent, "Урок завершён");
});

test("terminal listing separates supported flags, unknown flags, and literal paths", () => {
  const ui = terminal(setup());
  ui.select("Track", "sandbox");
  assert.doesNotMatch(ui.command("Get-ChildItem"), /\.env\.example/);
  assert.equal(ui.command("Get-ChildItem -Force -Name -File"), ".env.example\nREADME.md");
  assert.match(ui.command("ls -la"), /Учебный режим: распознаны флаги GNU ls/);
  assert.match(ui.command("Get-ChildItem -la"), /Флаг «-la».*не поддерживается/);
  assert.match(ui.command("Get-ChildItem -LiteralPath"), /нужно указать значение/);

  ui.select("Shell", "bash");
  assert.equal(ui.command("ls"), "README.md");
  assert.equal(ui.command("ls -a"), ".\n..\n.env.example\nREADME.md");
  assert.match(ui.command("ls -lha ."), /^drwxr-xr-x +0 +\.\n[\s\S]+-rw-r--r-- +10 +\.env\.example/m);
  assert.equal(ui.command("ls -A"), ".env.example\nREADME.md");
  assert.match(ui.command("ls -laz"), /Флаг «-laz».*не поддерживается/);
  assert.match(ui.command("ls missing -z"), /Флаг «-z».*не поддерживается/);
  assert.match(ui.command("ls -a missing"), /Путь не найден: missing/);
  ui.command("touch -- -la");
  assert.equal(ui.command("ls -- -la"), "-la");
  assert.match(ui.command("git add -la"), /Флаг «-la».*не поддерживается/);
  ui.command("git add -- -la");
  assert.match(ui.command("git status"), /new file: -la/);
});

test("terminal applies shell flags to virtual files and avoids mutation on errors or previews", () => {
  const ui = terminal(setup());
  ui.select("Track", "sandbox");
  assert.equal(ui.command("Get-Content -TotalCount 1 -LiteralPath README.md"), "# Notes");
  assert.equal(ui.command("Get-Content README.md -Tail 1"), "Project workspace");
  assert.match(ui.command("Remove-Item -WhatIf -Path README.md"), /What if:/);
  assert.match(ui.command("Get-Content README.md"), /Project workspace/);
  ui.command('Set-Content -Value "-a" -Path notes.txt');
  assert.equal(ui.command("Get-Content notes.txt -TotalCount 1"), "-a");

  ui.select("Shell", "bash");
  assert.match(ui.command('mkdir -pv "my notes/reports"'), /Создана папка: .*my notes\/reports/);
  assert.equal(ui.command('ls "my notes"'), "reports");
  assert.match(ui.command("cat -n README.md"), /1\s+# Notes\n\s+2\s+Project workspace/);
  assert.equal(ui.command('grep -in "notes" README.md'), "1:# Notes");
  assert.equal(ui.command('grep -vc "Notes" README.md'), "1");
  ui.command('echo "Keep this" > copy.txt');
  assert.match(ui.command("cp -nv README.md copy.txt"), /Изменения пропущены/);
  assert.match(ui.command("rm -rf copy.txt"), /Флаг «-rf».*не поддерживается/);
  assert.match(ui.command("cat copy.txt"), /Keep this/);
});

test("sandbox keeps file changes and command history until its environment is reset", () => {
  const ui = terminal(setup());
  ui.select("Track", "sandbox");
  ui.select("Shell", "bash");
  assert.equal(ui.get("LessonField").hidden, true);
  ui.command('echo "Test note" > note.txt');
  assert.match(ui.command("cat note.txt"), /Test note/);
  assert.match(ui.command('git commit -m "missing'), /Проверь кавычки/);
  const input = ui.get("Command");
  input.value = "draft input";
  input.dispatch("keydown", { key: "ArrowUp" });
  input.dispatch("keydown", { key: "ArrowUp" });
  assert.equal(input.value, "cat note.txt");
  input.dispatch("keydown", { key: "ArrowDown" });
  input.dispatch("keydown", { key: "ArrowDown" });
  assert.equal(input.value, "draft input");
  ui.get("Clear").click();
  assert.equal(ui.get("Log").children.length, 0);
  assert.match(ui.command("cat note.txt"), /Test note/);
  ui.get("Restart").click();
  assert.match(ui.command("cat note.txt"), /Файл не найден/);
});

test("error cards reveal corrections on demand and require a reveal before grading", () => {
  const app = setup();
  const intervalsBefore = app.intervals.size;
  app.elements.get("#startBugsBtn").click();
  assert.equal(app.run('state.bugSession.cards.length'), 5);
  assert.equal(app.intervals.size, intervalsBefore);
  assert.equal(app.elements.get("#bugSolution").hidden, true);
  assert.equal(app.elements.get("#bugFixedCode").innerHTML, "");
  app.run('markBugCard(true)');
  assert.equal(app.run('state.bugSession.index'), 0);
  assert.equal(app.run('Object.keys(learningProgress).length'), 0);
  app.elements.get("#flipBugBtn").click();
  assert.equal(app.elements.get("#bugSolution").hidden, false);
  assert.equal((app.elements.get("#bugFixedCode").innerHTML.match(/is-corrected/g) || []).length, 1);
  assert.equal(app.elements.get("#bugExpected").textContent, app.run('state.bugSession.cards[0].expectedResult'));
  app.elements.get("#bugRepeatBtn").click();
  assert.equal(app.run('state.bugSession.index'), 1);
  assert.equal(app.elements.get("#bugFixedCode").innerHTML, "");
  app.run('markBugCard(false)');
  assert.equal(app.run('Object.values(learningProgress)[0].attempts'), 1);
  for (let i = 0; i < 4; i++) {
    app.elements.get("#flipBugBtn").click();
    app.elements.get("#bugKnownBtn").click();
  }
  assert.equal(app.run('state.bugSession'), null);
  assert.equal(app.run('state.activeMode'), null);
  assert.equal(app.elements.get("#bugProgressFill").style.width, "100%");
  assert.match(app.elements.get("#bugPrompt").textContent, /нашёл сам — 4, нужно повторить — 1/);
  const reload = setup(app.storage);
  reload.elements.get("#bugMistakesOnly").checked = true;
  reload.run('startBugs()');
  assert.equal(reload.run('state.bugSession.cards.length'), 1);
  reload.run('flipBugCard(); markBugCard(true)');
  assert.equal(reload.run('Object.values(learningProgress).filter(item => item.needsReview).length'), 0);
});

test("error-card explanations describe the original program and reveal both outputs for logic errors", () => {
  const app = setup();
  for (const id of ["expand-bug8-index-or-value-1", "bug11-null-guard", "bug11-char-quotes"]) {
    app.run(`state.bugSession = { cards: [bugCards.find(card => card.id === "${id}")], index: 0, known: 0, repeated: 0, flipped: false }; renderBugCard();`);
    assert.equal(app.elements.get("#bugErrorType").textContent, "");
    assert.equal(app.elements.get("#bugOriginalOutput").hidden, true);
    assert.equal(app.elements.get("#bugActual").textContent, "");
    app.run("flipBugCard()");
    assert.match(app.elements.get("#bugErrorType").textContent, /исходного кода/);
    assert.equal(app.elements.get("#bugExplanation").textContent, app.run("state.bugSession.cards[0].explanation"));
    assert.equal(app.run("Object.keys(learningProgress).length"), 0);
    if (id === "expand-bug8-index-or-value-1") {
      assert.equal(app.elements.get("#bugOriginalOutput").hidden, false);
      assert.equal(app.elements.get("#bugActual").textContent, "5\n5");
      assert.equal(app.elements.get("#bugExpected").textContent, "1\n3");
      assert.match(app.elements.get("#bugExplanation").textContent, /индексах 0 и 2/);
    } else {
      assert.equal(app.elements.get("#bugOriginalOutput").hidden, true);
    }
    app.run("resetMode()");
    assert.equal(app.elements.get("#bugErrorType").textContent, "");
  }
});

test("error mode clears revealed answers on exit and safely handles an empty review list", () => {
  const app = setup();
  app.elements.get("#bugMistakesOnly").checked = true;
  app.run('startBugs()');
  assert.equal(app.run('state.bugSession'), null);
  assert.match(app.elements.get("#bugSessionNote").textContent, /нет карточек/);
  app.elements.get("#bugMistakesOnly").checked = false;
  app.elements.get("#bugLabSelect").value = "ЛБ 9";
  app.run('recordLearningAnswer("code", codeLessons[0], false); startBugs()');
  assert.equal(app.run('state.bugSession.cards.every(card => card.lab === "ЛБ 9")'), true);
  app.run('flipBugCard(); resetMode(); flipBugCard(); markBugCard(true)');
  assert.equal(app.run('state.bugSession'), null);
  assert.equal(app.elements.get("#bugSolution").hidden, true);
  assert.equal(app.elements.get("#bugFixedCode").innerHTML, "");
  assert.equal(app.run('Object.keys(learningProgress).length'), 1);
  assert.equal(app.run('needsReview("code", codeLessons[0])'), true);
});

test("answers persist after reload and a later correct answer resolves the review flag", () => {
  const app = setup();
  app.run('recordLearningAnswer("quiz", allTerms[0], false)');
  assert.match(app.elements.get("#learningSummary").textContent, /Пройдено терминов: 1.*На повторение: 1/);
  const reloaded = setup(app.storage);
  assert.equal(reloaded.run('needsReview("quiz", allTerms[0])'), true);
  assert.equal(reloaded.elements.get("#mistakeList").children.length, 1);
  reloaded.run('recordLearningAnswer("quiz", allTerms[0], true)');
  assert.equal(reloaded.run('needsReview("quiz", allTerms[0])'), false);
  const record = Object.values(JSON.parse(app.storage.get("terms-progress-v1")))[0];
  assert.deepEqual(record, { attempts: 2, correct: 1, needsReview: false });
});

test("quiz waits for Next, explains mistakes, counts answers once, and resets cleanly", () => {
  const app = setup();
  app.run('startQuiz()');
  const answer = app.run('state.quizSession.questions[0].term.definition');
  app.run('handleAnswer({ dataset: { answer: "wrong" }, classList: { add() {} } }, state.quizSession.questions[0].term.definition)');
  assert.equal(app.run('state.quizSession.index'), 0);
  assert.ok(app.elements.get("#quizFeedback").textContent.includes(answer));
  assert.equal(app.elements.get("#nextQuizBtn").hidden, false);
  app.run('handleAnswer({ dataset: { answer: "wrong" } }, "unused")');
  assert.equal(app.run('Object.values(learningProgress)[0].attempts'), 1);
  app.elements.get("#nextQuizBtn").click();
  assert.equal(app.run('state.quizSession.index'), 1);
  assert.equal(app.elements.get("#nextQuizBtn").hidden, true);
  app.run('startQuiz(); resetMode(); nextQuizQuestion()');
  assert.equal(app.run('state.quizSession'), null);
  assert.equal(app.elements.get("#nextQuizBtn").hidden, true);
});

test("review filters select saved mistakes and safely handle an empty selection", () => {
  const app = setup();
  app.elements.get("#quizMistakesOnly").checked = true;
  app.run('startQuiz()');
  assert.equal(app.run('state.quizSession'), null);
  app.run('recordLearningAnswer("quiz", allTerms[0], false); startQuiz()');
  assert.equal(app.run('state.quizSession.questions.length'), 1);
  app.run('handleAnswer({ dataset: { answer: state.quizSession.questions[0].term.definition } }, state.quizSession.questions[0].term.definition); nextQuizQuestion()');
  assert.equal(app.run('state.quizSession'), null);
  assert.equal(app.run('needsReview("quiz", allTerms[0])'), false);
  app.elements.get("#codeMistakesOnly").checked = true;
  app.elements.get("#codeLabSelect").value = "all";
  app.run('startCode()');
  assert.equal(app.run('state.codeSession'), null);
  app.run('recordLearningAnswer("code", codeLessons[0], false); startCode()');
  assert.equal(app.run('state.codeSession.questions.length'), 1);
  app.run('handleCodeAnswer(state.codeSession.questions[0].correctIndex)');
  assert.equal(app.run('needsReview("code", codeLessons[0])'), false);
});

test("cards record repeat and known decisions; quiz mistakes are available as cards", () => {
  const app = setup();
  app.elements.get("#cardMistakesOnly").checked = true;
  app.run('startCards()');
  assert.equal(app.run('state.cardSession'), null);
  app.run('recordLearningAnswer("quiz", allTerms[0], false); startCards()');
  assert.equal(app.run('state.cardSession.cards.length'), 1);
  app.run('markCard("repeat")');
  assert.equal(app.run('needsReview("cards", allTerms[0])'), true);
  app.run('markCard("known")');
  assert.equal(app.run('state.cardSession'), null);
  assert.equal(app.run('needsReview("cards", allTerms[0])'), false);
  assert.equal(app.run('needsReview("quiz", allTerms[0])'), true);
});

test("mixed lab practice draws ten distinct questions across decks without lengthening the session", () => {
  const app = setup();
  app.run('shuffle = items => items.map((_, i) => items[(i * 7) % items.length]);');
  for (let lab = 4; lab <= 10; lab++) {
    app.elements.get("#codeLabSelect").value = `ЛБ ${lab}`;
    app.run('fillCodeDeckSelect()');
    assert.equal(app.elements.get("#codeDeckSelect").value, "all");
    app.run('startCode()');
    assert.equal(app.run('state.codeSession.questions.length'), 10);
    assert.equal(app.run('new Set(state.codeSession.questions.map(question => question.id)).size'), 10);
    assert.ok(app.run('new Set(state.codeSession.questions.map(question => question.codeDeckId)).size') >= 2);
    assert.equal(app.run('state.codeSession.questions.every(question => deckLabTags[question.deckId].includes(els.codeLabSelect.value))'), true);
    app.run('resetMode()');
  }
});

test("error mode draws only five distinct cards from the full selected lab bank", () => {
  const app = setup();
  app.run('shuffle = items => [...items].reverse();');
  for (const lab of [4, 5, 6, 7, 8, 9, 11]) {
    app.elements.get("#bugLabSelect").value = `ЛБ ${lab}`;
    app.run('startBugs()');
    assert.equal(app.run('state.bugSession.cards.length'), 5);
    assert.equal(app.run('new Set(state.bugSession.cards.map(card => card.id)).size'), 5);
    assert.equal(app.run('state.bugSession.cards.every(card => card.lab === els.bugLabSelect.value)'), true);
    if (lab < 11) assert.ok(app.run('state.bugSession.cards.some(card => card.id.startsWith("bank-"))'));
    else assert.match(html, /<option value="ЛБ 11">ЛБ 11: строки и null<\/option>/);
    app.run('resetMode()');
  }
});

test("practice lab and deck selectors restrict a session to the selected 5–10 examples", () => {
  const app = setup();
  for (const lab of ["ЛБ 4", "ЛБ 5", "ЛБ 6", "ЛБ 7", "ЛБ 8", "ЛБ 9", "ЛБ 10", "ЛБ 11"]) {
    app.elements.get("#codeLabSelect").value = lab;
    app.run('fillCodeDeckSelect()');
    const deckIds = app.run(`codeDecks.filter(deck => deck.lab === ${JSON.stringify(lab)}).map(deck => deck.id)`);
    assert.ok(deckIds.length >= 2);
    for (const deckId of deckIds) {
      app.elements.get("#codeDeckSelect").value = deckId;
      app.run('startCode()');
      const length = app.run('state.codeSession.questions.length');
      assert.ok(length >= 5 && length <= 10);
      assert.equal(app.run('state.codeSession.questions.every(lesson => lesson.codeDeckId === els.codeDeckSelect.value)'), true);
      app.run('resetMode()');
    }
  }
});

test("quiz deduplicates repeated terms and reference preserves literal generic type syntax", () => {
  const app = setup();
  app.run(`shuffle = items => [...items].sort((a, b) => a === "Метод" ? -1 : b === "Метод" ? 1 : 0);
    state.quizSession = { questions: [{ term: allTerms[0], direction: "definition" }], index: 0, correct: 0 };
    renderQuestion();`);
  const options = app.elements.get("#answerGrid").children.map(button => button.dataset.answer);
  assert.equal(options.length, 4);
  assert.equal(new Set(options).size, 4);
  app.elements.get("#searchInput").value = "Nullable";
  app.run("renderReference()");
  assert.match(app.elements.get("#referenceList").innerHTML, /Nullable&lt;T&gt;/);
  assert.match(app.elements.get("#referenceList").innerHTML, /Nullable&lt;int&gt;/);
  assert.doesNotMatch(app.elements.get("#referenceList").innerHTML, /Nullable<(?:T|int)>/);
  assert.equal(app.run('describeCodeInput("   ")'), 'Ввод: "␠␠␠" (␠ — один пробел)');
});

test("whitespace-sensitive answers remain distinct and grading uses the original values", () => {
  const app = setup();
  app.run('state.codeSession = { questions: [codeLessons.find(lesson => lesson.id === "lab11-10")], index: 0, correct: 0 }; renderCodeQuestion();');
  const options = app.elements.get("#codeAnswerGrid").children.map(button => button.textContent);
  assert.equal(app.elements.get("#codeAnswerHint").hidden, false);
  assert.ok(options.includes('"Война␠␠␠и␠␠мир"'));
  assert.ok(options.includes('"Война␠и␠мир"'));
  assert.equal(new Set(options).size, 4);
  assert.equal(app.run('formatCodeAnswer("  Код  ", true)'), '"␠␠Код␠␠"');
  assert.equal(app.run('formatCodeAnswer("", true)'), '""');
  app.run('handleCodeAnswer(state.codeSession.questions[0].correctIndex)');
  assert.equal(app.run("state.codeSession.correct"), 1);
  app.run("resetMode()");
  assert.equal(app.elements.get("#codeAnswerHint").hidden, true);
});

test("lab 11 distinguishes Enter from end of input in questions and worked examples", () => {
  const app = setup();
  for (const [id, expected] of [
    ["lab11-12", /Enter без текста/],
    ["lab11-18", /входной поток завершён/]
  ]) {
    app.run(`state.codeSession = { questions: [codeLessons.find(lesson => lesson.id === "${id}")], index: 0, correct: 0 };`);
    app.run("renderCodeQuestion()");
    assert.equal(app.elements.get("#codeInput").hidden, false);
    assert.match(app.elements.get("#codeInput").textContent, expected);
  }
  assert.match(app.run('renderReferenceExample({deckId:"strings-null",term:"Конец входного потока"})'), /входной поток завершён/);
  const question = app.run('createCodeQuestion({...codeLessons.find(lesson => lesson.id === "lab11-30"), variants: []})');
  assert.equal(question.challengeInput, "0");
  app.elements.get("#codeLabSelect").value = "ЛБ 11";
  app.run("fillCodeDeckSelect(); startCode()");
  assert.equal(app.run("state.codeSession.questions.length"), 10);
  assert.equal(app.run('state.codeSession.questions.every(lesson => lesson.id.startsWith("lab11-"))'), true);
});

test("open refactoring task appears for the selected deck outside the timed session", () => {
  const app = setup();
  const task = app.elements.get("#codeRefactorTask");
  const select = app.elements.get("#codeDeckSelect");
  assert.equal(task.hidden, true);
  app.elements.get("#codeLabSelect").value = "ЛБ 10";
  app.run("fillCodeDeckSelect()");
  select.value = "lab10-method-refactoring";
  select.dispatch("change");
  assert.equal(task.hidden, false);
  app.run("startCode()");
  assert.equal(task.hidden, true);
  assert.equal(app.run("state.codeSession.questions.length"), 6);
  app.run("resetMode()");
  assert.equal(task.hidden, false);
  select.value = "lab10-array-operations";
  select.dispatch("change");
  assert.equal(task.hidden, true);
});

test("question versions rotate without repeats across reloads and cycle boundaries", () => {
  let app = setup();
  const seen = new Set();
  const count = app.run('1 + codeLessons[0].variants.length');
  let last;
  for (let i = 0; i < count; i++) {
    app.run('randomItem = items => items[0];');
    const code = app.run('createCodeQuestion(codeLessons[0]).challengeCode');
    assert.ok(!seen.has(code));
    seen.add(code);
    last = code;
    app = setup(app.storage);
  }
  assert.equal(seen.size, count);
  app.run('randomItem = items => items[items.length - 1];');
  assert.notEqual(app.run('createCodeQuestion(codeLessons[0]).challengeCode'), last);
  for (const raw of ['null', '[]', '{broken', '{"variable":[-1,9999,"0"]}']) {
    const broken = setup(new Map([["code-version-history-v1", raw]]));
    assert.ok(broken.run('createCodeQuestion(codeLessons[0]).challengeCode'));
  }
  const blocked = setup(new Map(), true);
  blocked.run('randomItem = items => items[0];');
  assert.notEqual(blocked.run('createCodeQuestion(codeLessons[0]).challengeCode'), blocked.run('createCodeQuestion(codeLessons[0]).challengeCode'));
});

test("choosing an alternative and shuffling answers preserves grading, explanation and glossary link", () => {
  const app = setup();
  const before = app.run('JSON.stringify(codeLessons[0])');
  app.run('randomItem = items => items[1]; shuffle = items => [...items].reverse();');
  app.run('const generated = createCodeQuestion(codeLessons[0]);');
  assert.equal(app.run('generated.challengeCode'), app.run('codeLessons[0].variants[0].challengeCode'));
  assert.equal(app.run('generated.options[generated.correctIndex]'), app.run('codeLessons[0].variants[0].challengeResult'));
  assert.equal(app.run('generated.correctIndex'), 3);
  assert.equal(app.run('generated.explanation'), app.run('codeLessons[0].variants[0].explanation'));
  assert.equal(app.run('progressKey("code", generated)'), app.run('progressKey("code", codeLessons[0])'));
  assert.equal(app.run('JSON.stringify(codeLessons[0])'), before);
});

test("corrupt or unavailable storage does not stop training", () => {
  for (const saved of ["{broken", "null", '{"quiz:fake":{"attempts":-1}}']) {
    const app = setup(new Map([["terms-progress-v1", saved]]));
    assert.equal(app.run('Object.keys(learningProgress).length'), 0);
    app.run('startQuiz()');
    assert.ok(app.run('state.quizSession'));
  }
  const blocked = setup(new Map(), true);
  blocked.run('startCards(); markCard("known")');
  assert.equal(blocked.run('Object.keys(learningProgress).length'), 1);
  assert.match(blocked.elements.get("#storageStatus").textContent, /Хранилище недоступно/);
});

test("legacy practice progress migrates only to the original lesson", () => {
  const app = setup(new Map([["terms-progress-v1", JSON.stringify({
    "code:variables-values:Переменная": { attempts: 3, correct: 1, needsReview: true }
  })]]));
  assert.equal(app.run('needsReview("code", codeLessons.find(lesson => lesson.id === "variable"))'), true);
  assert.equal(app.run('needsReview("code", codeLessons.find(lesson => lesson.id === "more4-overwrite"))'), false);
  assert.equal(app.run('Object.values(learningProgress).reduce((sum, item) => sum + item.attempts, 0)'), 3);
  app.run('recordLearningAnswer("code", codeLessons.find(lesson => lesson.id === "variable"), true)');
  const reloaded = setup(app.storage);
  assert.equal(reloaded.run('Object.values(learningProgress).reduce((sum, item) => sum + item.attempts, 0)'), 4);
  assert.equal(reloaded.run('needsReview("code", codeLessons.find(lesson => lesson.id === "variable"))'), false);
});

test("two lessons about one term retain independent mistakes and all worked examples appear in the reference", () => {
  const app = setup();
  app.run('const originalLesson = codeLessons.find(lesson => lesson.id === "variable"); const newLesson = codeLessons.find(lesson => lesson.id === "more4-overwrite");');
  app.run('recordLearningAnswer("code", originalLesson, false); recordLearningAnswer("code", newLesson, false); recordLearningAnswer("code", originalLesson, true)');
  assert.equal(app.run('needsReview("code", originalLesson)'), false);
  assert.equal(app.run('needsReview("code", newLesson)'), true);
  assert.equal(app.run('needsReview("code", {deckId: originalLesson.deckId, term: originalLesson.term})'), true);
  const reference = app.run('renderReferenceExample(originalLesson)');
  assert.ok(reference.includes(app.run('escapeHtml(originalLesson.exampleCode)')));
  assert.ok(reference.includes(app.run('escapeHtml(newLesson.exampleCode)')));
  const reloaded = setup(app.storage);
  assert.equal(reloaded.run('needsReview("code", codeLessons.find(lesson => lesson.id === "more4-overwrite"))'), true);
});

test("lab 9 is available in cards, quiz and the reference, not only in code practice", () => {
  const app = setup();
  for (const selector of ["#cardTopicSelect", "#quizTopicSelect", "#referenceTopicSelect"]) {
    assert.ok(app.elements.get(selector).innerHTML.includes('value="csharp-methods"'));
  }
  assert.ok(app.elements.get("#referenceTagSelect").innerHTML.includes('value="ЛБ 9"'));
  app.elements.get("#cardTopicSelect").value = "csharp-methods";
  app.run('fillDeckSelect(els.cardTopicSelect, els.cardDeckSelect); startCards()');
  assert.equal(app.run('state.cardSession.cards.length'), 30);
  app.run('resetMode()');
  app.elements.get("#quizTopicSelect").value = "csharp-methods";
  app.run('fillDeckSelect(els.quizTopicSelect, els.quizDeckSelect); startQuiz()');
  assert.equal(app.run('state.quizSession.questions.length'), 30);
  app.elements.get("#referenceTagSelect").value = "ЛБ 9";
  assert.equal(app.run('getReferenceTerms().length'), 30);
});
