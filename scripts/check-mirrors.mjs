import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const pairs = [
  ["index.html", "public/index.html"],
  ["app.js", "public/app.js"],
  ["styles.css", "public/styles.css"],
  ["utility-compat.css", "public/utility-compat.css"],
  ["habitat-data.js", "public/habitat-data.js"],
  ["agent-os.js", "public/agent-os.js"],
  ["agent-os.html", "public/agent-os.html"],
  ["founder/index.html", "public/founder/index.html"],
  ["app/alerts/index.html", "public/app/alerts/index.html"],
];

const failures = [];
for (const [source, mirror] of pairs) {
  const [sourceText, mirrorText] = await Promise.all([
    readFile(resolve(root, source), "utf8"),
    readFile(resolve(root, mirror), "utf8"),
  ]);
  if (sourceText !== mirrorText) failures.push(`${source} differs from ${mirror}`);
}

if (failures.length) {
  console.error(`Mirror check failed:\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Mirror check passed for ${pairs.length} root/public pairs.`);
}
