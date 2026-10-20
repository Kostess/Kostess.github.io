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

test("all 190 code lessons link to real glossary terms", () => {
  assert.equal(terms.size, 239);
  assert.equal(lessons.length, 190);
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, lessons.length);
  for (const lesson of lessons) {
    assert.ok(terms.has(`${lesson.deckId}:${lesson.term}`), `${lesson.id} is not linked to a term`);
    assert.ok(lesson.exampleCode && lesson.exampleResult && lesson.exampleNote);
    assert.ok(lesson.challengeCode && lesson.prompt && lesson.explanation);
    assert.equal(lesson.options.length, 4, lesson.id);
    assert.equal(new Set(lesson.options).size, 4, lesson.id);
    assert.ok(Number.isInteger(lesson.correctIndex) && lesson.correctIndex >= 0 && lesson.correctIndex < 4);
  }
});

test("labs 4 through 8 have separate practice questions", () => {
  const lab4 = lessons.filter((lesson) => ["variables-values", "csharp-data-types", "typing-and-output"].includes(lesson.deckId));
  const lab5 = lessons.filter((lesson) => lesson.deckId === "input-operations-conversions");
  const lab6 = lessons.filter((lesson) => ["conditions-logic", "branching-menu"].includes(lesson.deckId));
  const lab7 = lessons.filter(lesson => ["loops-basics", "loops-control"].includes(lesson.deckId));
  assert.equal(lab4.length, 40);
  assert.equal(lab5.length, 40);
  assert.equal(lab6.length, 40);
  assert.equal(lab7.length, 30);
  assert.equal(lessons.filter(lesson => lesson.codeDeckId.startsWith("lab8-")).length, 40);
  assert.deepEqual(Array.from(tags["conditions-logic"]), ["ЛБ 6"]);
  assert.deepEqual(Array.from(tags["branching-menu"]), ["ЛБ 6"]);
  assert.deepEqual(Array.from(tags["loops-basics"]), ["ЛБ 7"]);
  assert.deepEqual(Array.from(tags["loops-control"]), ["ЛБ 7"]);
  assert.match(htmlSource, /<option value="ЛБ 6">ЛБ 6: условия и ветвление<\/option>/);
  assert.ok(lessons.some((lesson) => lesson.kind === "Где ошибка?"));
  assert.ok(lessons.some((lesson) => lesson.kind === "Что выведет код?"));
  assert.match(htmlSource, /<option value="ЛБ 7">ЛБ 7: циклы в C#<\/option>/);
  assert.doesNotMatch(lab7.map(lesson => JSON.stringify(lesson)).join(""), /foreach/i);
  assert.doesNotMatch(JSON.stringify(topics.filter(topic => topic.id !== "csharp-arrays")), /foreach/i);
  for (const id of ["arrays-basics", "arrays-traversal", "arrays-analysis"]) {
    assert.deepEqual(Array.from(tags[id]), ["ЛБ 8"]);
  }
  assert.match(htmlSource, /<option value="ЛБ 8">ЛБ 8: одномерные массивы<\/option>/);
});

test("each practice deck has 5–10 examples, one lab, and every lesson belongs to exactly one deck", () => {
  assert.equal(codeDecks.length, 21);
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

test("practice only uses introduced syntax and early labs have no branching", () => {
  for (const lesson of lessons) {
    const versions = [lesson, ...(lesson.variants || [])];
    for (const version of versions) {
      const code = [lesson.exampleCode, version.challengeCode].join("\n");
      assert.doesNotMatch(code, /string\?|\bnull\b|\btry\b|\bcatch\b|GetType|InvariantCulture|:D\d/, lesson.id);
      const lab = codeDecks.find(deck => deck.id === lesson.codeDeckId).lab;
      assert.doesNotMatch(code, /\bMath\.|\bArray\.|\bOrderBy\b|\bToArray\b|\bList</, lesson.id);
      if (lab !== "ЛБ 8") assert.doesNotMatch(code, /\bforeach\b|\bnew\s+\w+\s*\[|TryParse|\bout\b/, lesson.id);
      if (["ЛБ 4", "ЛБ 5"].includes(lab)) {
        const syntax = code.replaceAll("/* ??? */", "").replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, "");
        assert.doesNotMatch(syntax, /\bif\b|\belse\b|\bswitch\b|\?/, lesson.id);
      }
    }
  }
});

test("fill-in questions have a single placeholder, four choices and an executable solution", () => {
  const questions = lessons.filter(lesson => lesson.kind === "Заполните пропуск");
  assert.ok(questions.length >= 15);
  for (const lesson of questions) {
    assert.equal(lesson.challengeCode.split("/* ??? */").length, 2, lesson.id);
    assert.ok(lesson.solutionResult !== undefined, lesson.id);
    assert.ok(lesson.prompt.includes(lesson.solutionResult), lesson.id);
  }
});

test("alternative questions have distinct code, four unique options, and verified result metadata", () => {
  assert.equal(lessons.filter(lesson => lesson.variants?.length).length, 34);
  let alternatives = 0;
  for (const lesson of lessons) {
    const codes = new Set([lesson.challengeCode]);
    for (const variant of lesson.variants || []) {
      alternatives++;
      assert.ok(!codes.has(variant.challengeCode), lesson.id);
      codes.add(variant.challengeCode);
      assert.equal(variant.options.length, 4, lesson.id);
      assert.equal(new Set(variant.options).size, 4, lesson.id);
      assert.equal(variant.options[variant.correctIndex], variant.challengeResult, lesson.id);
      assert.ok(variant.explanation, lesson.id);
    }
  }
  assert.equal(alternatives, 68);
});

test("lab 8 covers the supplied array lab and keeps every glossary deck short", () => {
  const topic = topics.find(topic => topic.id === "csharp-arrays");
  assert.equal(topic.decks.length, 3);
  assert.ok(topic.decks.every(deck => deck.terms.length === 10));
  const names = topic.decks.flatMap(deck => deck.terms.map(item => item.term));
  for (const name of ["Массив", "Индекс массива", "Длина массива Length", "foreach", "int.TryParse", "Выходной параметр out", "Два прохода", "Все совпадения", "Пересчёт результатов"]) {
    assert.ok(names.includes(name), name);
  }
  const lab8 = lessons.filter(lesson => lesson.codeDeckId.startsWith("lab8-"));
  assert.equal(lab8.filter(lesson => lesson.kind === "Заполните пропуск").length, 6);
  assert.ok(lab8.some(lesson => lesson.challengeInput?.includes("текст")));
  assert.ok(lab8.some(lesson => lesson.id === "lab8-max-negative"));
});
