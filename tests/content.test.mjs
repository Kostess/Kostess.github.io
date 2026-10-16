import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const appSource = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const contentSource = readFileSync(new URL("../code-content.js", import.meta.url), "utf8");
const htmlSource = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const topicsSource = readFileSync(new URL("../terms-content.js", import.meta.url), "utf8");
const topics = vm.runInNewContext(`${topicsSource}\ntopics`);
const lessons = vm.runInNewContext(`${contentSource}\ncodeLessons`);
const codeDecks = vm.runInNewContext(`${contentSource}\ncodeDecks`);
const tagsSource = appSource.slice(appSource.indexOf("const deckLabTags"), appSource.indexOf("const state"));
const tags = vm.runInNewContext(`${tagsSource}\ndeckLabTags`);
const terms = new Set(topics.flatMap((topic) =>
  topic.decks.flatMap((deck) => deck.terms.map((item) => `${deck.id}:${item.term}`))
));

test("all 74 code lessons link to real glossary terms", () => {
  assert.equal(terms.size, 209);
  assert.equal(lessons.length, 74);
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

test("labs 4 through 7 have separate practice questions", () => {
  const lab4 = lessons.filter((lesson) => ["variables-values", "csharp-data-types", "typing-and-output"].includes(lesson.deckId));
  const lab5 = lessons.filter((lesson) => lesson.deckId === "input-operations-conversions");
  const lab6 = lessons.filter((lesson) => ["conditions-logic", "branching-menu"].includes(lesson.deckId));
  const lab7 = lessons.filter(lesson => ["loops-basics", "loops-control"].includes(lesson.deckId));
  assert.equal(lab4.length, 20);
  assert.equal(lab5.length, 14);
  assert.equal(lab6.length, 20);
  assert.equal(lab7.length, 20);
  assert.deepEqual(Array.from(tags["conditions-logic"]), ["ЛБ 6"]);
  assert.deepEqual(Array.from(tags["branching-menu"]), ["ЛБ 6"]);
  assert.deepEqual(Array.from(tags["loops-basics"]), ["ЛБ 7"]);
  assert.deepEqual(Array.from(tags["loops-control"]), ["ЛБ 7"]);
  assert.match(htmlSource, /<option value="ЛБ 6">ЛБ 6: условия и ветвление<\/option>/);
  assert.ok(lessons.some((lesson) => lesson.kind === "Где ошибка?"));
  assert.ok(lessons.some((lesson) => lesson.kind === "Что выведет код?"));
  assert.match(htmlSource, /<option value="ЛБ 7">ЛБ 7: циклы в C#<\/option>/);
  assert.doesNotMatch(lab7.map(lesson => JSON.stringify(lesson)).join(""), /foreach/i);
  assert.doesNotMatch(topicsSource, /foreach/i);
});

test("each practice deck has 5–10 examples, one lab, and every lesson belongs to exactly one deck", () => {
  assert.equal(codeDecks.length, 9);
  assert.equal(new Set(codeDecks.map(deck => deck.id)).size, codeDecks.length);
  for (const deck of codeDecks) {
    const members = lessons.filter(lesson => lesson.codeDeckId === deck.id);
    assert.ok(members.length >= 5 && members.length <= 10, `${deck.id}: ${members.length}`);
    for (const lesson of members) {
      assert.ok(tags[lesson.deckId].includes(deck.lab), lesson.id);
    }
  }
  for (const lesson of lessons) {
    assert.equal(codeDecks.filter(deck => deck.id === lesson.codeDeckId).length, 1, lesson.id);
    if (lesson.challengeResult !== undefined) {
      assert.equal(lesson.challengeResult, lesson.options[lesson.correctIndex], lesson.id);
    }
  }
});
