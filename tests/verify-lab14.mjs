import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import vm from "node:vm";

const lessons = vm.runInNewContext(readFileSync(new URL("../code-content.js", import.meta.url), "utf8") + "\ncodeLessons");
function method(id, declaration) {
  const code = lessons.find(item => item.id === id).challengeCode;
  const index = code.indexOf(declaration);
  if (index < 0) throw new Error("Update the file scenario fixture: " + id);
  return code.slice(index);
}
const methods = [
  method("lab14-load-before-menu", "bool LoadList("),
  method("lab14-save-success-after-write", "bool SaveList("),
  method("lab14-validate-name", "string[] AddItem(")
].join("\n");
const sdk = spawnSync("dotnet", ["--version"], { encoding: "utf8" });
if (sdk.error || sdk.status !== 0) throw new Error("Нужен установленный .NET SDK.");
const major = Number.parseInt(sdk.stdout, 10);
const scratch = mkdtempSync(join(tmpdir(), "csharp-lab14-"));
try {
  writeFileSync(join(scratch, "Shopping.csproj"), `<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><OutputType>Exe</OutputType><TargetFramework>net${major}.0</TargetFramework></PropertyGroup></Project>`);
  writeFileSync(join(scratch, "Program.cs"), `
using System;
using System.IO;
${methods}
void Require(bool condition, string message)
{
    if (!condition) throw new Exception(message);
}
var previousOut = Console.Out;
Console.SetOut(TextWriter.Null);
try
{
    string path = Path.GetFullPath("shopping.txt");
    Require(LoadList(path, out string[] items), "First launch must succeed");
    Require(items.Length == 0 && !File.Exists(path), "Missing file must produce an empty list without creating a file");

    items = AddItem(items, " Яблоки ");
    items = AddItem(items, "Чай");
    items = AddItem(items, "   ");
    Require(string.Join("|", items) == "Яблоки|Чай", "Names must be trimmed; whitespace-only names rejected");
    Require(SaveList(path, items), "First save failed");
    Require(string.Join("|", File.ReadAllLines(path)) == "Яблоки|Чай", "File must contain two lines in order");

    Require(LoadList(path, out items), "Reload failed");
    Require(string.Join("|", items) == "Яблоки|Чай", "Reload must restore both names");
    items = AddItem(items, "Рис");
    Require(SaveList(path, items), "Second save failed");
    Require(LoadList(path, out items), "Second reload failed");
    Require(string.Join("|", items) == "Яблоки|Чай|Рис", "Second save must replace the file without duplicating old entries");
    Require(SaveList(path, items) && File.ReadAllLines(path).Length == 3, "Repeated save must not append duplicates");

    items = AddItem(items, "Хлеб");
    Require(items.Length == 4, "Unsaved purchase must exist in memory");
    Require(LoadList(path, out items), "Reload after exit failed");
    Require(string.Join("|", items) == "Яблоки|Чай|Рис", "Unsaved purchase must not appear after restart");

    File.WriteAllText("empty.txt", "");
    Require(LoadList("empty.txt", out string[] empty) && empty.Length == 0, "Existing empty file must load successfully");
    Require(!LoadList("no-folder/shopping.txt", out _), "Other read errors must stop startup");
    Require(string.Join("|", File.ReadAllLines(path)) == "Яблоки|Чай|Рис", "Failed load must preserve the saved file");
    Require(!SaveList("no-folder/shopping.txt", items), "Failed save must report failure");
    Require(string.Join("|", items) == "Яблоки|Чай|Рис", "Failed save must preserve memory");
    Require(SaveList(path, items), "Saving again must remain possible");

    string originalDirectory = Environment.CurrentDirectory;
    Directory.CreateDirectory("other");
    try
    {
        Environment.CurrentDirectory = Path.Combine(originalDirectory, "other");
        Require(Path.GetFullPath("shopping.txt") != path, "Relative paths must depend on working directory");
        Require(!File.Exists("shopping.txt"), "The other working directory must not reuse the first file");
    }
    finally { Environment.CurrentDirectory = originalDirectory; }
}
finally { Console.SetOut(previousOut); }
Console.WriteLine("Verified lab 14 shopping persistence, overwrite, validation, read/write failures and working-directory behavior.");
`);
  const result = spawnSync("dotnet", ["run", "--project", join(scratch, "Shopping.csproj")],
    { cwd: scratch, encoding: "utf8", timeout: 120000 });
  if (result.error || result.status !== 0) throw new Error(result.error?.message || result.stdout + result.stderr);
  process.stdout.write(result.stdout);
} finally {
  if (!resolve(scratch).startsWith(resolve(tmpdir()) + sep)) throw new Error("Unexpected temporary path");
  rmSync(scratch, { recursive: true, force: true });
}
