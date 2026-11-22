import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const functions = source.slice(source.indexOf("function stopCodeTimer()"), source.indexOf("function escapeAttribute("));

function element() {
  const classes = new Set();
  return {
    textContent: "", hidden: false, disabled: false, checked: false, style: {}, children: [],
    classList: {
      toggle(name, enabled) { enabled ? classes.add(name) : classes.delete(name); },
      contains(name) { return classes.has(name); }
    },
    replaceChildren() { this.children = []; },
    append(child) { this.children.push(child); },
    addEventListener() {}, setAttribute() {}, focus() {}
  };
}

function setup({ hideAnswers = false, deferResults = false } = {}) {
  let now = 0;
  let nextId = 0;
  const intervals = new Map();
  const els = Object.fromEntries([
    "codeLabSelect", "codeTimer", "codeProgress", "codeProgressFill", "codeType",
    "codeQuestion", "codeSnippet", "codeText", "codeInput", "codeAnswerGrid",
    "codeFeedback", "nextCodeBtn", "codeMistakesOnly", "codeDeckSelect", "codeRefactorTask", "codeAnswerHint",
    "codeHideAnswers", "codeDeferResults", "showCodeAnswersBtn", "codeHiddenAnswersNote", "codeReview", "codeReviewList"
  ].map(key => [key, element()]));
  els.codeLabSelect.value = "all";
  els.codeDeckSelect.value = "test-deck";
  els.codeHideAnswers.checked = hideAnswers;
  els.codeDeferResults.checked = deferResults;
  const question = {
    codeDeckId: "test-deck",
    kind: "Что выведет код?", term: "int", prompt: "Результат?",
    challengeCode: "Console.WriteLine(1);", options: ["1", "2", "3", "4"],
    correctIndex: 0, explanation: "Выводится число 1."
  };
  const context = vm.createContext({
    CODE_ANSWER_TIME_MS: 90_000,
    state: { codeSession: null, codeTimerId: null }, els,
    codeLessons: [question, question, question, question], deckLabTags: {}, shuffle: items => items,
    randomItem: items => items[0],
    codeDecks: [{ id: "test-deck", lab: "ЛБ 7", title: "Циклы" }],
    recordLearningAnswer() {}, needsReview: () => false,
    Date: { now: () => now }, document: { createElement: element },
    window: {
      setInterval(callback) { intervals.set(++nextId, callback); return nextId; },
      clearInterval(id) { intervals.delete(id); }
    }
  });
  vm.runInContext(functions, context);
  context.startCode();
  return { context, els, intervals, setTime(value) { now = value; }, tick() {
    for (const callback of [...intervals.values()]) callback();
  } };
}

test("counts down 90 seconds and expires without awarding a point", () => {
  const app = setup();
  assert.equal(app.els.codeTimer.textContent, "Осталось: 1:30");
  app.setTime(75_000);
  app.tick();
  assert.equal(app.els.codeTimer.textContent, "Осталось: 0:15");
  assert.ok(app.els.codeTimer.classList.contains("is-urgent"));
  app.setTime(90_000);
  app.tick();
  assert.equal(app.context.state.codeSession.correct, 0);
  assert.equal(app.context.state.codeSession.answered, true);
  assert.ok(app.els.codeAnswerGrid.children.every(button => button.disabled));
  assert.ok(app.els.codeAnswerGrid.children[0].classList.contains("is-correct"));
  assert.match(app.els.codeFeedback.textContent, /Время вышло.*Правильный ответ: 1.*Выводится число 1/);
  assert.equal(app.els.nextCodeBtn.hidden, false);
  assert.equal(app.intervals.size, 0);
  app.context.handleCodeAnswer(0);
  assert.equal(app.context.state.codeSession.correct, 0);
});

test("accepts one answer before the deadline and gives the next question a fresh timer", () => {
  const app = setup();
  app.setTime(89_999);
  app.context.handleCodeAnswer(0);
  app.context.handleCodeAnswer(0);
  assert.equal(app.context.state.codeSession.correct, 1);
  assert.equal(app.intervals.size, 0);
  app.context.state.codeSession.index += 1;
  app.context.renderCodeQuestion();
  assert.equal(app.els.codeTimer.textContent, "Осталось: 1:30");
  assert.equal(app.intervals.size, 1);
  app.context.handleCodeAnswer(0);
  assert.equal(app.context.state.codeSession, null);
  assert.equal(app.els.codeTimer.hidden, true);
  assert.equal(app.intervals.size, 0);
});

test("rejects a late click even when background timer callbacks were delayed", () => {
  const app = setup();
  app.setTime(120_000);
  app.context.handleCodeAnswer(0);
  assert.equal(app.context.state.codeSession.correct, 0);
  assert.match(app.els.codeFeedback.textContent, /Время вышло/);
});

test("restart and exit clear the timer; an old callback cannot affect a new session", () => {
  const app = setup();
  const oldCallback = [...app.intervals.values()][0];
  app.setTime(30_000);
  app.context.startCode();
  assert.equal(app.intervals.size, 1);
  app.setTime(90_000);
  oldCallback();
  assert.equal(app.context.state.codeSession.answered, false);
  app.context.resetCodeUi();
  assert.equal(app.intervals.size, 0);
  assert.equal(app.els.codeTimer.hidden, true);
});

test("revealing hidden options keeps the original deadline and each new question starts hidden", () => {
  const app = setup({ hideAnswers: true });
  assert.equal(app.els.codeAnswerGrid.children.length, 0);
  assert.equal(app.els.showCodeAnswersBtn.hidden, false);
  app.context.handleCodeAnswer(0);
  assert.equal(app.context.state.codeSession.completed, 0);
  app.setTime(60_000);
  app.context.showCodeAnswers();
  app.tick();
  assert.equal(app.els.codeTimer.textContent, "Осталось: 0:30");
  assert.equal(app.els.codeAnswerGrid.children.length, 4);
  assert.equal(app.els.showCodeAnswersBtn.hidden, true);
  const first = app.els.codeAnswerGrid.children[0];
  app.context.showCodeAnswers();
  assert.equal(app.els.codeAnswerGrid.children[0], first);
  assert.equal(app.intervals.size, 1);
  app.context.handleCodeAnswer(0);
  app.context.state.codeSession.index++;
  app.context.renderCodeQuestion();
  assert.equal(app.els.codeTimer.textContent, "Осталось: 1:30");
  assert.equal(app.els.codeAnswerGrid.children.length, 0);
  assert.equal(app.els.showCodeAnswersBtn.hidden, false);
});

test("timeout before revealing options shows immediate feedback only when results are not deferred", () => {
  for (const deferResults of [false, true]) {
    const app = setup({ hideAnswers: true, deferResults });
    app.setTime(90_000);
    app.context.showCodeAnswers();
    assert.equal(app.context.state.codeSession.completed, 1);
    assert.equal(app.context.state.codeSession.wrong, 1);
    assert.equal(app.context.state.codeSession.responses[0].selectedIndex, null);
    assert.equal(app.els.showCodeAnswersBtn.hidden, true);
    assert.equal(app.els.codeAnswerGrid.children.length, deferResults ? 0 : 4);
    if (deferResults) {
      assert.doesNotMatch(app.els.codeFeedback.textContent, /Правильный ответ|Выводится число/);
      assert.doesNotMatch(app.els.codeProgress.textContent, /Верно:|Неверно:/);
    } else assert.match(app.els.codeFeedback.textContent, /Правильный ответ: 1/);
    app.context.showCodeAnswers();
    app.context.handleCodeAnswer(0);
    assert.equal(app.context.state.codeSession.completed, 1);
    assert.equal(app.intervals.size, 0);
  }
});
