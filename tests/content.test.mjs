import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const appSource = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const contentSource = readFileSync(new URL("../code-content.js", import.meta.url), "utf8");
const topicsSource = appSource.slice(0, appSource.indexOf("const positivePhrases"));
const topics = vm.runInNewContext(`${topicsSource}\ntopics`);
const lessons = vm.runInNewContext(`${contentSource}\ncodeLessons`);
const terms = new Set(topics.flatMap((topic) =>
  topic.decks.flatMap((deck) => deck.terms.map((item) => `${deck.id}:${item.term}`))
));

test("all 15 code lessons link to real glossary terms", () => {
  assert.equal(lessons.length, 15);
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, lessons.length);
  assert.equal(new Set(lessons.map((lesson) => `${lesson.deckId}:${lesson.term}`)).size, lessons.length);
  for (const lesson of lessons) {
    assert.ok(terms.has(`${lesson.deckId}:${lesson.term}`), `${lesson.id} is not linked to a term`);
    assert.ok(lesson.exampleCode && lesson.exampleResult && lesson.exampleNote);
    assert.ok(lesson.challengeCode && lesson.prompt && lesson.explanation);
    assert.equal(lesson.options.length, 4, lesson.id);
    assert.equal(new Set(lesson.options).size, 4, lesson.id);
    assert.ok(Number.isInteger(lesson.correctIndex) && lesson.correctIndex >= 0 && lesson.correctIndex < 4);
  }
});

test("both lab collections have practice questions", () => {
  const lab4 = lessons.filter((lesson) => lesson.deckId !== "input-operations-conversions");
  const lab5 = lessons.filter((lesson) => lesson.deckId === "input-operations-conversions");
  assert.equal(lab4.length, 10);
  assert.equal(lab5.length, 5);
  assert.ok(lessons.some((lesson) => lesson.kind === "Где ошибка?"));
  assert.ok(lessons.some((lesson) => lesson.kind === "Что выведет код?"));
});
