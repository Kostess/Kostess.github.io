import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import vm from "node:vm";

const lessons = vm.runInNewContext(readFileSync(new URL("../code-content.js", import.meta.url), "utf8") + "\ncodeLessons");
const source = lessons.find(item => item.id === "lab13-input-before-try").challengeCode;
const methodStart = source.indexOf("int ReserveSeats(");
const inputLine = "string? input = Console.ReadLine();\n";
const stateLine = "int available = 4;\n";
if (methodStart < 0 || !source.includes(inputLine) || !source.includes(stateLine)) throw new Error("Update the booking fixture for the new example structure.");
// Run the displayed single-attempt code repeatedly with the lab's initial state.
const attempt = source.slice(0, methodStart).replace("#nullable enable\n", "").replace(inputLine, "").replace(stateLine, "");
const method = source.slice(methodStart);
const checks = [
  ["3", 7, "Успех\nПопытка\n7"],
  ["abc", 7, "Формат"],
  ["0", 7, "Аргумент\nПопытка\n7"],
  ["-2", 7, "Аргумент\nПопытка\n7"],
  ["8", 7, "Мест нет\nПопытка\n7"],
  ["2", 5, "Успех\nПопытка\n5"],
  ["2147483648", 5, "Формат"],
  ["", 5, "Формат"],
  ["5", 0, "Успех\nПопытка\n0"],
  ["1", 0, "Мест нет\nПопытка\n0"],
  [" ВЫХОД ", 0, "Выход"],
  [null, 0, "Конец ввода"]
];
const sdk = spawnSync("dotnet", ["--version"], { encoding: "utf8" });
if (sdk.error || sdk.status !== 0) throw new Error("Нужен установленный .NET SDK.");
const major = Number.parseInt(sdk.stdout, 10);
const scratch = mkdtempSync(join(tmpdir(), "csharp-lab13-"));
try {
  writeFileSync(join(scratch, "Booking.csproj"), `<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><OutputType>Exe</OutputType><TargetFramework>net${major}.0</TargetFramework></PropertyGroup></Project>`);
  writeFileSync(join(scratch, "Program.cs"), `
#nullable enable
using System;
using System.IO;
using System.Globalization;
CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;
int available = 10;
void Attempt(string? input)
{
${attempt}
}
${method}
void Check(string? input, int expectedState, string expectedOutput)
{
    var previous = Console.Out;
    using var output = new StringWriter(CultureInfo.InvariantCulture);
    try { Console.SetOut(output); Attempt(input); }
    finally { Console.SetOut(previous); }
    string actual = output.ToString().Replace("\\r\\n", "\\n").TrimEnd('\\r', '\\n');
    if (available != expectedState || actual != expectedOutput)
        throw new Exception($"Input [{input ?? "<EOF>"}]: state {available}, output [{actual}]; expected state {expectedState}, output [{expectedOutput}]");
}
${checks.map(([input, state, result]) => `Check(${JSON.stringify(input)}, ${state}, ${JSON.stringify(result)});`).join("\n")}
Console.WriteLine("Verified all 11 lab 13 booking checks in sequence, plus end of input.");
`);
  const result = spawnSync("dotnet", ["run", "--project", join(scratch, "Booking.csproj")],
    { cwd: scratch, encoding: "utf8", timeout: 120000 });
  if (result.error || result.status !== 0) throw new Error(result.error?.message || result.stdout + result.stderr);
  process.stdout.write(result.stdout);
} finally {
  if (!resolve(scratch).startsWith(resolve(tmpdir()) + sep)) throw new Error("Unexpected temporary path");
  rmSync(scratch, { recursive: true, force: true });
}
