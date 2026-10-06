import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import vm from "node:vm";

const source = readFileSync(new URL("../code-content.js", import.meta.url), "utf8");
const lessons = vm.runInNewContext(`${source}\ncodeLessons`);
const sdk = spawnSync("dotnet", ["--version"], { encoding: "utf8" });
if (sdk.error || sdk.status !== 0) {
  throw new Error("Для проверки примеров нужен установленный .NET SDK.");
}
const sdkMajor = Number.parseInt(sdk.stdout, 10);
const scratch = mkdtempSync(join(tmpdir(), "csharp-terms-examples-"));

try {
  writeFileSync(join(scratch, "Examples.csproj"), `
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net${sdkMajor}.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>
</Project>
`);

  const calls = lessons.map((lesson) => `
Check(${JSON.stringify(lesson.id)}, ${JSON.stringify(lesson.exampleResult)}, ${JSON.stringify(lesson.exampleInput || "")}, () => {
${lesson.exampleCode}
});`).join("\n");

  writeFileSync(join(scratch, "Program.cs"), `
using System;
using System.IO;

void Check(string id, string expected, string input, Action example)
{
    var previousOut = Console.Out;
    var previousIn = Console.In;
    using var output = new StringWriter();
    using var inputReader = new StringReader(input + "\\n");
    try
    {
        Console.SetOut(output);
        Console.SetIn(inputReader);
        example();
    }
    finally
    {
        Console.SetOut(previousOut);
        Console.SetIn(previousIn);
    }
    var actual = output.ToString().TrimEnd('\\r', '\\n').Replace("\\r\\n", "\\n");
    if (actual != expected)
        throw new Exception($"{id}: expected [{expected}], got [{actual}]");
}
${calls}
Console.WriteLine("Verified ${lessons.length} C# examples.");
`);

  const result = spawnSync("dotnet", ["run", "--project", scratch, "--configuration", "Release", "--verbosity", "quiet"], {
    encoding: "utf8",
    timeout: 120000
  });
  if (result.error || result.status !== 0) {
    throw new Error(result.error?.message || result.stderr || result.stdout);
  }
  process.stdout.write(result.stdout);
} finally {
  const parent = resolve(tmpdir());
  if (resolve(scratch).startsWith(parent + "\\")) {
    rmSync(scratch, { recursive: true, force: true });
  }
}
