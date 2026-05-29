import { existsSync } from "node:fs";

const required = [
  "server.mjs",
  "package.json",
  "index.html",
  "public/index.html",
  "public/app.js",
  "public/styles.css",
  "public/habitat-data.js"
];

const missing = required.filter((file) => !existsSync(file));

if (missing.length) {
  console.error("Missing required files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log("Pickaxe project check passed.");
