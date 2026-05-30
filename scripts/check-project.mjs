import { access, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const required = [
  "CODEX_START_HERE.md",
  "docs/CODEX_MASTER_PROMPT_FULL.md",
  "docs/ARCHIVE_AGENT_PIPELINE.md",
  "sql/archive_schema.sql",
  "public/brand/pickaxe-capital-logo.png",
  "data/imports/Export all Folders.html",
  "data/archive_sources_full.csv",
  "data/archive_folder_summary.csv",
  "data/archive_top_folders.csv",
  "data/archive_top_domains.csv",
  "data/archive_category_summary.csv",
  "assets/images/archive_pipeline_blueprint.png",
  "assets/images/final_sidebar_layout.png",
  "assets/images/agent_ecosystem_habitat.png",
  "docs/ceo-b/CODEX_CEO_B_PROFILE_PROMPT.md",
  "docs/ceo-b/PAGE_COPY.md",
  "docs/ceo-b/INTEGRATION_CHECKLIST.md",
  "public/reference/ceo-b-nutshell-reference.png",
];

for (const file of required) {
  await access(join(root, file));
}

const schema = await readFile(join(root, "sql/archive_schema.sql"), "utf8");
for (const table of ["archive_imports", "archive_folders", "archive_sources", "archive_source_locations", "archive_findings"]) {
  if (!schema.includes(table)) throw new Error(`Missing schema table: ${table}`);
}

const html = await readFile(join(root, "public", "index.html"), "utf8");
const app = await readFile(join(root, "public", "app.js"), "utf8");
for (const route of ["#/archive", "#/archive/tree", "#/archive/sources", "#/archive/agents", "#/archive/findings", "#/archive/imports", "#/archive/quarantine"]) {
  if (!html.includes(route)) throw new Error(`Missing Archive route link: ${route}`);
}
for (const route of ["/", "/agents", "/vision-map", "/source-hub", "/signals", "/staging", "/archive", "/rk-tracker", "/berkshire-1965", "/bookmarks", "/app/alerts", "/founder", "/ceo-b-profile", "/about-founder", "/market-command", "/signal-engine", "/life-habitat"]) {
  if (!html.includes(route) && !app.includes(route) && !html.includes(route.replace("/", ""))) throw new Error(`Missing route: ${route}`);
}
if (!html.includes("Quietly high-agency.")) throw new Error("Missing CEO B profile headline.");
if (!html.includes("I am commanding a living autonomous intelligence civilization.")) {
  throw new Error("Missing CEO B north-star emotional goal.");
}

if (existsSync(join(root, "data", "archive-database.json"))) {
  const db = JSON.parse(await readFile(join(root, "data", "archive-database.json"), "utf8"));
  if (!db.archive_sources?.length) throw new Error("Archive database has no sources.");
  if (db.archive_source_locations.length < db.archive_sources.length) throw new Error("Archive locations should preserve duplicates.");
}

console.log("Project check passed.");
