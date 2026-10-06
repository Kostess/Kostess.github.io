import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const appSource = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const contentSource = readFileSync(new URL("../code-content.js", import.meta.url), "utf8");
const htmlSource = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const topicsSource = appSource.slice(0, appSource.indexOf("const positivePhrases"));
const topics = vm.runInNewContext(`${topicsSource}\ntopics`);
const lessons = vm.runInNewContext(`${contentSource}\ncodeLessons`);
const tagsSource = appSource.slice(appSource.indexOf("const deckLabTags"), appSource.indexOf("const state"));
const tags = vm.runInNewContext(`${tagsSource}\ndeckLabTags`);
const terms = new Set(topics.flatMap((topic) =>
  topic.decks.flatMap((deck) => deck.terms.map((item) => `${deck.id}:${item.term}`))
));

test("all 30 code lessons link to real glossary terms", () => {
  assert.equal(terms.size, 189);
  assert.equal(lessons.length, 30);
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

test("labs 4, 5 and 6 have separate practice questions", () => {
  const lab4 = lessons.filter((lesson) => ["variables-values", "csharp-data-types", "typing-and-output"].includes(lesson.deckId));
  const lab5 = lessons.filter((lesson) => lesson.deckId === "input-operations-conversions");
  const lab6 = lessons.filter((lesson) => ["conditions-logic", "branching-menu"].includes(lesson.deckId));
  assert.equal(lab4.length, 10);
  assert.equal(lab5.length, 5);
  assert.equal(lab6.length, 15);
  assert.deepEqual(Array.from(tags["conditions-logic"]), ["ЛБ 6"]);
  assert.deepEqual(Array.from(tags["branching-menu"]), ["ЛБ 6"]);
  assert.match(htmlSource, /<option value="ЛБ 6">ЛБ 6: условия и ветвление<\/option>/);
  assert.ok(lessons.some((lesson) => lesson.kind === "Где ошибка?"));
  assert.ok(lessons.some((lesson) => lesson.kind === "Что выведет код?"));
});
