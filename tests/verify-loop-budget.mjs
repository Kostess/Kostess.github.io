import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import vm from "node:vm";

const read = name => readFileSync(new URL("../" + name, import.meta.url), "utf8");
const lessons = vm.runInNewContext(read("code-content.js") + "\ncodeLessons");
const decks = vm.runInNewContext(read("code-content.js") + "\ncodeDecks");
const cards = vm.runInNewContext(read("bug-content.js") + "\nbugCards");
const checks = [];
function add(id, lab, code, input) {
  const loops = code.match(/\b(for|foreach|while)\s*\(/g);
  if (!loops) return;
  checks.push({ id, code, input: input === null ? "" : (input ?? "") + "\n",
    budget: lab === "ЛБ 7" ? (loops.length === 1 ? 4 : 8) : 10 });
}
for (const lesson of lessons) {
  const lab = decks.find(deck => deck.id === lesson.codeDeckId)?.lab;
  add(lesson.id + ":example", lab, lesson.exampleCode, lesson.exampleInput);
  if (lesson.challengeResult !== undefined) add(lesson.id, lab, lesson.challengeCode, lesson.challengeInput);
  if (lesson.solutionResult !== undefined) add(lesson.id, lab,
    lesson.challengeCode.replace("/* ??? */", lesson.options[lesson.correctIndex]), lesson.challengeInput);
  for (const [index, variant] of (lesson.variants ?? []).entries()) add(lesson.id + ":variant-" + index,
    lab, variant.challengeCode, Object.hasOwn(variant, "challengeInput") ? variant.challengeInput : lesson.challengeInput);
}
for (const card of cards) add(card.id + ":fixed", card.lab, card.fixedCode);
const sdk = spawnSync("dotnet", ["--version"], { encoding: "utf8" });
if (sdk.error || sdk.status !== 0) throw new Error("Нужен установленный .NET SDK.");
const major = Number.parseInt(sdk.stdout, 10);
const scratch = mkdtempSync(join(tmpdir(), "csharp-loop-budget-"));
try {
  writeFileSync(join(scratch, "Budget.csproj"), `
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup><OutputType>Exe</OutputType><TargetFramework>net${major}.0</TargetFramework><ImplicitUsings>enable</ImplicitUsings></PropertyGroup>
  <ItemGroup>
    <Reference Include="Microsoft.CodeAnalysis"><HintPath>$(MSBuildSDKsPath)/../Roslyn/bincore/Microsoft.CodeAnalysis.dll</HintPath></Reference>
    <Reference Include="Microsoft.CodeAnalysis.CSharp"><HintPath>$(MSBuildSDKsPath)/../Roslyn/bincore/Microsoft.CodeAnalysis.CSharp.dll</HintPath></Reference>
  </ItemGroup>
</Project>`);
  writeFileSync(join(scratch, "checks.json"), JSON.stringify(checks));
  writeFileSync(join(scratch, "Program.cs"), String.raw`
using System.Globalization;
using System.Reflection;
using System.Runtime.Loader;
using System.Text.Json;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;

CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;
var references = ((string)AppContext.GetData("TRUSTED_PLATFORM_ASSEMBLIES"))
    .Split(Path.PathSeparator).Append(Assembly.GetExecutingAssembly().Location)
    .Distinct().Select(path => MetadataReference.CreateFromFile(path)).ToArray();
using var document = JsonDocument.Parse(File.ReadAllText("checks.json"));
var failures = new List<string>();
foreach (var check in document.RootElement.EnumerateArray())
{
    string id = check.GetProperty("id").GetString();
    var tree = CSharpSyntaxTree.ParseText("using System;\n" + check.GetProperty("code").GetString());
    var rewriter = new LoopRewriter();
    var root = (CSharpSyntaxNode)rewriter.Visit(tree.GetRoot());
    var compilation = CSharpCompilation.Create("Loop_" + Guid.NewGuid().ToString("N"),
        new[] { CSharpSyntaxTree.Create(root) }, references,
        new CSharpCompilationOptions(OutputKind.ConsoleApplication));
    using var binary = new MemoryStream();
    var result = compilation.Emit(binary);
    if (!result.Success) throw new Exception(id + ": " + string.Join("\n", result.Diagnostics));
    binary.Position = 0;
    LoopWorkProbe.Counts = new int[rewriter.Count];
    var loader = new AssemblyLoadContext("loop", isCollectible: true);
    var previousOut = Console.Out;
    var previousIn = Console.In;
    using var input = new StringReader(check.GetProperty("input").GetString());
    try
    {
        var entry = loader.LoadFromStream(binary).EntryPoint;
        Console.SetOut(TextWriter.Null);
        Console.SetIn(input);
        entry.Invoke(null, entry.GetParameters().Length == 0 ? null : new object[] { Array.Empty<string>() });
    }
    catch (Exception error) { throw new Exception(id, error); }
    finally { Console.SetOut(previousOut); Console.SetIn(previousIn); loader.Unload(); }
    int budget = check.GetProperty("budget").GetInt32();
    int work = LoopWorkProbe.Counts.Sum();
    if (work > budget) failures.Add(id + ": " + work + " body executions, budget " + budget);
}
if (failures.Count > 0) throw new Exception(string.Join("\n", failures));
Console.WriteLine($"Verified the execution budget of {document.RootElement.GetArrayLength()} loop examples and question versions.");

public static class LoopWorkProbe
{
    public static int[] Counts = Array.Empty<int>();
    public static void Hit(int id)
    {
        if (++Counts[id] > 100) throw new Exception("Loop exceeds safety limit");
    }
}
public class LoopRewriter : CSharpSyntaxRewriter
{
    public int Count;
    private BlockSyntax Wrap(StatementSyntax body, int id)
    {
        var block = body as BlockSyntax ?? SyntaxFactory.Block(body);
        return block.WithStatements(block.Statements.Insert(0, SyntaxFactory.ParseStatement($"LoopWorkProbe.Hit({id});")));
    }
    public override SyntaxNode VisitForStatement(ForStatementSyntax node)
    {
        int id = Count++;
        var result = (ForStatementSyntax)base.VisitForStatement(node);
        return result.WithStatement(Wrap(result.Statement, id));
    }
    public override SyntaxNode VisitForEachStatement(ForEachStatementSyntax node)
    {
        int id = Count++;
        var result = (ForEachStatementSyntax)base.VisitForEachStatement(node);
        return result.WithStatement(Wrap(result.Statement, id));
    }
    public override SyntaxNode VisitWhileStatement(WhileStatementSyntax node)
    {
        int id = Count++;
        var result = (WhileStatementSyntax)base.VisitWhileStatement(node);
        return result.WithStatement(Wrap(result.Statement, id));
    }
    public override SyntaxNode VisitDoStatement(DoStatementSyntax node)
    {
        int id = Count++;
        var result = (DoStatementSyntax)base.VisitDoStatement(node);
        return result.WithStatement(Wrap(result.Statement, id));
    }
}
`);
  const result = spawnSync("dotnet", ["run", "--project", join(scratch, "Budget.csproj")],
    { cwd: scratch, encoding: "utf8", timeout: 180000 });
  process.stdout.write(result.stdout || "");
  process.stderr.write(result.stderr || "");
  if (result.error || result.status !== 0) throw result.error || new Error("Проверка нагрузки циклов не прошла.");
} finally {
  if (!resolve(scratch).startsWith(resolve(tmpdir()) + sep)) throw new Error("Unexpected temporary path");
  rmSync(scratch, { recursive: true, force: true });
}
