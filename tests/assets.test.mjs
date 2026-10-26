import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { updateAssetVersions } from "../scripts/update-assets.mjs";

test("published HTML requests the current version of all scripts and styles", () => {
  const root = fileURLToPath(new URL("..", import.meta.url));
  assert.doesNotThrow(() => updateAssetVersions(root, true));
});

test("a glossary update changes every asset URL and stale HTML fails validation", () => {
  const root = mkdtempSync(join(tmpdir(), "terms-assets-"));
  try {
    for (const name of ["styles.css", "terms-content.js", "code-content.js", "app.js"]) {
      writeFileSync(join(root, name), `content of ${name}\n`);
    }
    writeFileSync(join(root, "index.html"), '<link href="styles.css">\n<script src="terms-content.js"></script>\n<script src="code-content.js"></script>\n<script src="app.js"></script>');
    const first = updateAssetVersions(root);
    assert.equal(updateAssetVersions(root, true), first);
    writeFileSync(join(root, "terms-content.js"), "new lab data\n");
    assert.throws(() => updateAssetVersions(root, true), /Версия файлов устарела/);
    const second = updateAssetVersions(root);
    assert.notEqual(first, second);
    assert.equal(readFileSync(join(root, "index.html"), "utf8").match(new RegExp(`\\?v=${second}`, "g")).length, 4);
    assert.equal(updateAssetVersions(root, true), second);
    // Checkout line endings do not invalidate the published version.
    writeFileSync(join(root, "terms-content.js"), "new lab data\r\n");
    assert.equal(updateAssetVersions(root, true), second);
  } finally {
    const parent = resolve(tmpdir());
    if (resolve(root).startsWith(parent + "\\") || resolve(root).startsWith(parent + "/")) {
      rmSync(root, { recursive: true, force: true });
    }
  }
});
