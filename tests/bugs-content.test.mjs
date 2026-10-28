import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const read = name => readFileSync(new URL(`../${name}`, import.meta.url), "utf8");
const cards = vm.runInNewContext(`${read("bug-content.js")}\nbugCards`);
const topics = vm.runInNewContext(`${read("terms-content.js")}\ntopics`);
const terms = new Set(topics.flatMap(topic => topic.decks.flatMap(deck =>
  deck.terms.map(item => `${deck.id}:${item.term}`))));

test("30 error cards have stable IDs, glossary links, and five cards per lab", () => {
  assert.equal(cards.length, 30);
  assert.equal(new Set(cards.map(card => card.id)).size, 30);
  for (let lab = 4; lab <= 9; lab++) {
    assert.equal(cards.filter(card => card.lab === `ЛБ ${lab}`).length, 5);
  }
  for (const card of cards) {
    assert.ok(terms.has(`${card.deckId}:${card.term}`), card.id);
    assert.ok(card.title && card.prompt && card.explanation && card.expectedResult, card.id);
    assert.ok(["compile", "runtime", "logic"].includes(card.kind), card.id);
    if (card.kind === "logic") assert.notEqual(card.brokenResult, card.expectedResult, card.id);
    if (card.kind === "runtime") assert.ok(card.exceptionType, card.id);
  }
});

test("each correction changes exactly the highlighted line and respects the course scope", () => {
  for (const card of cards) {
    const broken = card.brokenCode.split("\n");
    const fixed = card.fixedCode.split("\n");
    assert.equal(broken.length, fixed.length, card.id);
    const changes = fixed.flatMap((line, index) => line !== broken[index] ? [index + 1] : []);
    assert.deepEqual(changes, [card.changedLine], card.id);
    const source = `${card.brokenCode}\n${card.fixedCode}`;
    assert.doesNotMatch(source, /\b(null|foreach|try|catch|throw|class|ref)\b/, card.id);
    if (Number(card.lab.slice(-1)) <= 5) assert.doesNotMatch(source, /\b(if|switch|for|while)\b/, card.id);
    if (Number(card.lab.slice(-1)) <= 7) assert.doesNotMatch(source, /\[|\b(TryParse|Length)\b/, card.id);
  }
});
