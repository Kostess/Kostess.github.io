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
    replaceChildren() { this.children = []; },
    append(child) { this.children.push(child); },
    querySelectorAll() { return this.children; },
    setAttribute() {},
    addEventListener(name, callback) { listeners[name] = callback; },
    click() { listeners.click?.(); }
  };
}

function setup(storage = new Map(), blocked = false) {
  const elements = new Map([...html.matchAll(/id="([^"]+)"/g)].map(match => [`#${match[1]}`, element()]));
  const root = element();
  elements.get("#codeLabSelect").value = "all";
  let id = 0;
  const intervals = new Map();
  const context = vm.createContext({
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
  vm.runInContext(`${read("terms-content.js")}\n${read("code-content.js")}\n${read("app.js")}`, context);
  const run = code => vm.runInContext(code, context);
  return { elements, run, storage, intervals };
}

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

test("practice lab and deck selectors restrict a session to the selected 5–10 examples", () => {
  const app = setup();
  for (const lab of ["ЛБ 4", "ЛБ 5", "ЛБ 6", "ЛБ 7", "ЛБ 8", "ЛБ 9"]) {
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
