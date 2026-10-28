import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import vm from "node:vm";

const cards = vm.runInNewContext(`${readFileSync(new URL("../bug-content.js", import.meta.url), "utf8")}\nbugCards`);
const sdk = spawnSync("dotnet", ["--version"], { encoding: "utf8" });
if (sdk.error || sdk.status !== 0) throw new Error("Нужен установленный .NET SDK.");
const major = Number.parseInt(sdk.stdout, 10);
const scratch = mkdtempSync(join(tmpdir(), "csharp-bug-cards-"));
try {
  writeFileSync(join(scratch, "Cards.csproj"), `
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup><OutputType>Exe</OutputType><TargetFramework>net${major}.0</TargetFramework><ImplicitUsings>enable</ImplicitUsings></PropertyGroup>
  <ItemGroup>
    <Reference Include="Microsoft.CodeAnalysis"><HintPath>$(MSBuildSDKsPath)/../Roslyn/bincore/Microsoft.CodeAnalysis.dll</HintPath></Reference>
    <Reference Include="Microsoft.CodeAnalysis.CSharp"><HintPath>$(MSBuildSDKsPath)/../Roslyn/bincore/Microsoft.CodeAnalysis.CSharp.dll</HintPath></Reference>
  </ItemGroup>
</Project>`);
  writeFileSync(join(scratch, "cards.json"), JSON.stringify(cards));
  writeFileSync(join(scratch, "Program.cs"), String.raw`
using System.Globalization;
using System.Reflection;
using System.Runtime.Loader;
using System.Text.Json;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;

CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;
var references = ((string)AppContext.GetData("TRUSTED_PLATFORM_ASSEMBLIES"))
    .Split(Path.PathSeparator).Select(path => MetadataReference.CreateFromFile(path)).ToArray();
using var document = JsonDocument.Parse(File.ReadAllText("cards.json"));
int checkedCards = 0;
foreach (var card in document.RootElement.EnumerateArray())
{
    string id = card.GetProperty("id").GetString();
    string kind = card.GetProperty("kind").GetString();
    foreach (bool fixedVersion in new[] { true, false })
    {
        string code = card.GetProperty(fixedVersion ? "fixedCode" : "brokenCode").GetString();
        var compilation = CSharpCompilation.Create("Card_" + Guid.NewGuid().ToString("N"),
            new[] { CSharpSyntaxTree.ParseText("using System;\n" + code) }, references,
            new CSharpCompilationOptions(OutputKind.ConsoleApplication));
        using var binary = new MemoryStream();
        var result = compilation.Emit(binary);
        if (!fixedVersion && kind == "compile")
        {
            if (result.Success) throw new Exception(id + ": broken code unexpectedly compiles");
            continue;
        }
        if (!result.Success) throw new Exception(id + ": " + string.Join("\n", result.Diagnostics));
        binary.Position = 0;
        var loader = new AssemblyLoadContext("card", isCollectible: true);
        var previousOut = Console.Out;
        using var output = new StringWriter(CultureInfo.InvariantCulture);
        Exception failure = null;
        try
        {
            var assembly = loader.LoadFromStream(binary);
            var entry = assembly.EntryPoint;
            Console.SetOut(output);
            entry.Invoke(null, entry.GetParameters().Length == 0 ? null : new object[] { Array.Empty<string>() });
        }
        catch (TargetInvocationException error) { failure = error.InnerException; }
        finally { Console.SetOut(previousOut); loader.Unload(); }
        if (!fixedVersion && kind == "runtime")
        {
            string expectedType = card.GetProperty("exceptionType").GetString();
            if (failure?.GetType().FullName != expectedType) throw new Exception(id + ": expected " + expectedType);
        }
        else
        {
            if (failure != null) throw new Exception(id + ": unexpected exception", failure);
            string expected = card.GetProperty(fixedVersion ? "expectedResult" : "brokenResult").GetString();
            string actual = output.ToString().Replace("\r\n", "\n").TrimEnd();
            if (actual != expected) throw new Exception(id + ": expected [" + expected + "] got [" + actual + "]");
        }
    }
    checkedCards++;
}
Console.WriteLine($"Verified {checkedCards} corrected programs and {checkedCards} intentional errors.");
`);
  const result = spawnSync("dotnet", ["run", "--project", join(scratch, "Cards.csproj")],
    { cwd: scratch, encoding: "utf8", timeout: 120000 });
  process.stdout.write(result.stdout || "");
  process.stderr.write(result.stderr || "");
  if (result.error || result.status !== 0) throw result.error || new Error("Проверка карточек C# не прошла.");
} finally {
  if (!resolve(scratch).startsWith(resolve(tmpdir()) + "\\") && !resolve(scratch).startsWith(resolve(tmpdir()) + "/")) {
    throw new Error("Unexpected temporary path");
  }
  rmSync(scratch, { recursive: true, force: true });
}
