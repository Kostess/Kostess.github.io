import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const assets = ["styles.css", "terms-content.js", "code-content.js", "bug-content.js", "app.js"];

export function updateAssetVersions(root, check = false) {
  const hash = createHash("sha256");
  for (const name of assets) {
    // Git may use CRLF on Windows and LF in the published checkout.
    hash.update(name + "\0" + readFileSync(resolve(root, name), "utf8").replaceAll("\r\n", "\n") + "\0");
  }
  const version = hash.digest("hex").slice(0, 12);
  const path = resolve(root, "index.html");
  const html = readFileSync(path, "utf8");
  const counts = new Map(assets.map(name => [name, 0]));
  const updated = html.replace(/\b(src|href)="(styles\.css|terms-content\.js|code-content\.js|bug-content\.js|app\.js)(?:\?[^"\s]*)?"/g,
    (_, attribute, name) => {
      counts.set(name, counts.get(name) + 1);
      return `${attribute}="${name}?v=${version}"`;
    });
  if ([...counts.values()].some(count => count !== 1)) {
    throw new Error("В index.html должно быть по одному подключению каждого CSS/JS-файла.");
  }
  if (check && html !== updated) {
    throw new Error("Версия файлов устарела. Выполните node scripts/update-assets.mjs и добавьте index.html в коммит.");
  }
  if (!check && html !== updated) writeFileSync(path, updated);
  return version;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  console.log(`Assets: ${updateAssetVersions(root, process.argv.includes("--check"))}`);
}
