// Snapshots the published poolproof results for the homepage:
//   src/data/poolproof.json        the results grid and the hero's example, built into the page
//   public/poolproof-details.json  what differed in each failing cell, fetched when the grid is explored
// Re-run after publishing new results:  node scripts/snapshot-poolproof.mjs
import { writeFile } from "node:fs/promises";

const SOURCE = "https://nihal-pandey-2302.github.io/poolproof/";
const REPO = "Nihal-Pandey-2302/poolproof";
const POSTGRES = "18.4"; // the Postgres version the homepage shows
const TRACE = { scenario: "multi-statement-begin", target: "pgdog-0.1.62" };
const PRODUCTS = [
  ["pgbouncer", "PgBouncer"],
  ["pgdog", "PgDog"],
  ["pgcat", "PgCat"],
  ["odyssey", "Odyssey"],
  ["supavisor", "Supavisor"],
];

const html = await (await fetch(SOURCE)).text();
const embedded = html.match(/<script id="data" type="application\/json">([\s\S]*?)<\/script>/);
if (!embedded) throw new Error("results page no longer embeds its data as <script id=\"data\">");
const reports = JSON.parse(embedded[1]).filter((r) => r.targets.every((t) => t.postgres === POSTGRES));
if (reports.length === 0) throw new Error(`no report for Postgres ${POSTGRES}`);

const scenarios = reports[0].scenarios.map(({ name, description }) => ({ name, description }));
const results = new Map(reports.flatMap((r) => r.results.map((x) => [`${x.target}/${x.scenario}`, x])));
const targets = reports.flatMap((r) => r.targets);

// One letter per cell. A failure the pooler's own docs explain is "expected":
// still a failure, drawn hollow (upper case here).
const counts = { pass: 0, silent: 0, errorOrHang: 0, expected: 0, skipped: 0 };
function cell(x) {
  if (!x || x.result === "skip") return counts.skipped++, "k";
  if (x.result === "pass") return counts.pass++, "p";
  const kind = x.mismatch.kind; // silent | error | hang
  if (x.expected) return counts.expected++, kind === "silent" ? "S" : "E";
  if (kind === "silent") return counts.silent++, "s";
  return counts.errorOrHang++, kind === "hang" ? "h" : "e";
}

// A step's outcome, worded exactly as the results page words it
function outcome(o) {
  if (!o) return "";
  if (o.status === "abandoned") return "abandoned (connection dropped)";
  if (o.status === "not_run") return "not run";
  if (o.status === "messages") return o.messages.join("\n");
  if (o.status === "error") return `error ${o.code}: ${o.message}`;
  const rows = o.rows.map((r) => `(${r.map((v) => (v === null ? "NULL" : JSON.stringify(v))).join(", ")})`).join(" ");
  return `ok${rows ? ` ${rows}` : ""}${o.tags.length ? `  tags ${o.tags.join(",")}` : ""}`;
}

// "[app] simple: SELECT 1" -> ["app", "simple: SELECT 1"]
function splitAction(action) {
  const [, actor, text] = action.match(/^\[([^\]]+)\]\s*(.*)$/) ?? [null, "", action];
  return [actor, text];
}

// Rows of the grid, in display order: grouped by product, as published within each
const ordered = PRODUCTS.map(([product, label]) => ({
  product: label,
  targets: targets.filter((t) => t.product === product),
})).filter((g) => g.targets.length > 0);

const groups = ordered.map((g) => ({
  product: g.product,
  targets: g.targets.map((t) => ({
    label: t.config === "default" ? t.version : `${t.version} ${t.config}`,
    cells: scenarios.map((s) => cell(results.get(`${t.name}/${s.name}`))).join(""),
  })),
}));

// Per-cell detail, keyed "row:column" to match the grid. Passing cells need none.
//   failure: [step number, actor, action, Postgres's answer, the pooler's answer, index into docs or -1]
//   skipped: the reason, as a string
const docs = [];
const cells = {};
ordered
  .flatMap((g) => g.targets)
  .forEach((t, row) => {
    scenarios.forEach((s, column) => {
      const x = results.get(`${t.name}/${s.name}`);
      if (!x || x.result === "pass") return;
      if (x.result === "skip") {
        cells[`${row}:${column}`] = x.reason ?? "";
        return;
      }
      let doc = -1;
      if (x.expected) {
        doc = docs.findIndex((d) => d.url === x.expected.doc && d.quote === x.expected.quote);
        if (doc === -1) doc = docs.push({ url: x.expected.doc, quote: x.expected.quote }) - 1;
      }
      const m = x.mismatch;
      cells[`${row}:${column}`] = [m.step, ...splitAction(m.action), outcome(m.expected), outcome(m.actual), doc];
    });
  });

const traced = results.get(`${TRACE.target}/${TRACE.scenario}`);
const tracedScenario = reports[0].scenarios.find((s) => s.name === TRACE.scenario);
const tracedTarget = targets.find((t) => t.name === TRACE.target);
if (!traced || !tracedScenario || !tracedTarget) throw new Error("trace scenario/target not in the results");

// Release and activity, as a fallback for the build-time lookup in src/utils/github.ts
async function github(path) {
  const res = await fetch(`https://api.github.com/repos/${REPO}${path}`, { headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) throw new Error(`GitHub ${path || "/"}: ${res.status}`);
  return res.json();
}
const [repoInfo, latest] = await Promise.all([github(""), github("/releases/latest")]);

const snapshot = {
  source: SOURCE,
  repo: {
    release: latest.tag_name,
    releasedAt: latest.published_at.slice(0, 10),
    pushedAt: repoInfo.pushed_at.slice(0, 10),
    license: repoInfo.license?.spdx_id ?? "",
  },
  poolproof: reports[0].poolproof,
  generatedAt: reports[0].generated_at.slice(0, 10),
  postgres: POSTGRES,
  counts,
  scenarios,
  groups,
  trace: {
    scenario: tracedScenario.name,
    description: tracedScenario.description,
    refs: tracedScenario.refs,
    target: `${PRODUCTS.find(([p]) => p === tracedTarget.product)[1]} ${tracedTarget.version}`,
    kind: traced.mismatch?.kind ?? traced.result,
    steps: tracedScenario.steps.map((action, i) => {
      const [actor, text] = splitAction(action);
      const postgres = outcome(traced.steps[i].postgres);
      const pooler = outcome(traced.steps[i].pooler);
      return { actor, action: text, postgres, pooler, differs: postgres !== pooler };
    }),
  },
};

await writeFile(new URL("../src/data/poolproof.json", import.meta.url), JSON.stringify(snapshot, null, 1) + "\n");
await writeFile(new URL("../public/poolproof-details.json", import.meta.url), JSON.stringify({ docs, cells }) + "\n");
console.log(`poolproof ${snapshot.poolproof}, Postgres ${POSTGRES}: ${scenarios.length} scenarios x ${groups.reduce((n, g) => n + g.targets.length, 0)} targets`, counts);
