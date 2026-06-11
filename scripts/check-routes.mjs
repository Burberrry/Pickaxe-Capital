import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const [indexText, appText] = await Promise.all([
  readFile(resolve(root, "public/index.html"), "utf8"),
  readFile(resolve(root, "public/app.js"), "utf8"),
]);
const routes = [
  ["/#/alerts", "alerts"],
  ["/#/dashboard", "dashboard"],
  ["/#/mission-control", "command"],
  ["/#/vision-map", "vision"],
  ["/#/agents", "agents"],
  ["/#/signals", "signals"],
  ["/#/source-hub", "sourceHub"],
  ["/#/risk-rules", "riskRules"],
  ["/#/learning-ledger", "learningLedger"],
  ["/#/trend-radar", "trendRadar"],
  ["/#/archive", "archive"],
  ["/#/bookmarks", "bookmarks"],
  ["/#/money-lab", "moneyLab"],
  ["/#/staging", "staging"],
  ["/#/ai-habitat-os", "aiHabitatOS"],
  ["/#/watchlists", "watchlists"],
  ["/#/markets", "markets"],
  ["/#/options", "options"],
  ["/#/catalysts", "catalysts"],
  ["/#/research", "research"],
  ["/#/roadmap", "roadmap"],
];

const failures = [];
for (const [route, view] of routes) {
  if (!indexText.includes(`data-route="${route}"`)) failures.push(`missing navigation route ${route}`);
  if (!indexText.includes(`data-view="${view}"`)) failures.push(`missing navigation view ${view}`);
  if (!appText.includes(`view = "${view}"`) && !appText.includes(`"${view}"`)) {
    failures.push(`app.js does not reference view ${view}`);
  }
}

if (!indexText.includes('data-view="alerts"') || !appText.includes('activeView: "alerts"')) {
  failures.push("Alerts Desk is not the default app view");
}

if (failures.length) {
  console.error(`Route sanity check failed:\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Route sanity check passed for ${routes.length} target routes.`);
}
