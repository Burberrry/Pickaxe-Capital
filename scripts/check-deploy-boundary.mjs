import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const workflow = await readFile(resolve(root, ".github/workflows/pages.yml"), "utf8");
const failures = [];

if (!/path:\s*["']?public["']?\s*$/m.test(workflow)) {
  failures.push("GitHub Pages artifact path is not public/");
}
if (/path:\s*["']?\.(?:\/)?["']?\s*$/m.test(workflow)) {
  failures.push("GitHub Pages still deploys the repository root");
}

const entries = await readdir(resolve(root, "public"), { withFileTypes: true });
const forbiddenNames = new Set(["docs", "data", "scripts", "src", ".env", ".env.local"]);
for (const entry of entries) {
  if (forbiddenNames.has(entry.name)) failures.push(`public/ contains forbidden deployment entry: ${entry.name}`);
}

for (const required of ["index.html", "app.js", "styles.css", "utility-compat.css", "habitat-data.js"]) {
  if (!entries.some((entry) => entry.name === required)) failures.push(`public/ is missing ${required}`);
}

if (failures.length) {
  console.error(`Deployment boundary check failed:\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log("Deployment boundary check passed: GitHub Pages publishes public/ only.");
}
