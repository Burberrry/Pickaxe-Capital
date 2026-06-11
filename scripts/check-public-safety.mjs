import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const publicFiles = [
  "index.html",
  "app.js",
  "habitat-data.js",
  "public/index.html",
  "public/app.js",
  "public/habitat-data.js",
];
const forbidden = [
  ["BUY CALL label", /\bBUY CALL\b/i],
  ["BUY STRENGTH label", /\bBUY STRENGTH\b/i],
  ["execution pipeline label", /label:\s*["']EXECUTE["']/i],
  ["Trading Agent label", /\bTrading Agent\b/i],
  ["legacy command alert route", /CEO_B_COMMAND_ALERT/i],
  ["execute slogan", /Review,\s*rank,\s*and\s*execute/i],
  ["generic Approve button", />\s*Approve\s*</i],
  ["trade-command approval state", /status:\s*["']Approved["']/i],
  ["place order language", /\b(place|submit)\s+(an?\s+)?order\b/i],
  ["guaranteed returns claim", /(?<!no\s)\bguaranteed returns\b/i],
];

const failures = [];
for (const file of publicFiles) {
  const text = await readFile(resolve(root, file), "utf8");
  for (const [label, pattern] of forbidden) {
    if (pattern.test(text)) failures.push(`${file}: ${label}`);
  }
}

const appText = await readFile(resolve(root, "public/app.js"), "utf8");
for (const required of [
  "Research Only",
  "No Broker Execution",
  "Approved for Research — Not a Trade Command",
  "Research only. Not financial advice. No broker execution. Options involve substantial risk. User judgment required.",
]) {
  if (!appText.includes(required)) failures.push(`public/app.js: missing required safety text "${required}"`);
}

const serverText = await readFile(resolve(root, "server.mjs"), "utf8");
for (const required of [
  "PICKAXE_ENABLE_LIVE_SERVICES",
  "DEV-ONLY / DISABLED BY DEFAULT / NOT USED BY GITHUB PAGES",
  "Live services are disabled in this static prototype. This endpoint returns demo/static data only.",
]) {
  if (!serverText.includes(required)) failures.push(`server.mjs: missing live-service boundary "${required}"`);
}

if (failures.length) {
  console.error(`Public safety check failed:\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log("Public safety check passed.");
}
