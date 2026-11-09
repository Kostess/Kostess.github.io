import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const read = name => readFileSync(new URL(`../${name}`, import.meta.url), "utf8");
const cards = vm.runInNewContext(`${read("bug-content.js")}\nbugCards`);
const topics = vm.runInNewContext(`${read("terms-content.js")}\ntopics`);
const terms = new Set(topics.flatMap(topic => topic.decks.flatMap(deck =>
  deck.terms.map(item => `${deck.id}:${item.term}`))));

test("175 error cards have stable IDs, glossary links, and twenty-five cards per supported lab", () => {
  assert.equal(cards.length, 175);
  assert.equal(new Set(cards.map(card => card.id)).size, 175);
  for (const lab of [4, 5, 6, 7, 8, 9, 11]) {
    assert.equal(cards.filter(card => card.lab === `ЛБ ${lab}`).length, 25);
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
    assert.doesNotMatch(source, /\b(foreach|try|catch|throw|class|ref)\b/, card.id);
    const lab = Number(card.lab.replace(/\D/g, ""));
    if (lab < 11) assert.doesNotMatch(source, /\bnull\b|string\?/, card.id);
    if (lab <= 5) assert.doesNotMatch(source, /\b(if|switch|for|while)\b/, card.id);
    if (lab <= 7) assert.doesNotMatch(source, /\[|\b(TryParse|Length)\b/, card.id);
  }
});
