import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const db = JSON.parse(await readFile(join(root, "data", "archive-database.json"), "utf8"));
const stats = db.archive_stats;
const expected = {
  totalBookmarkLinks: 31504,
  uniqueUrls: 31399,
  duplicateUrlEntries: 105,
  folders: 913,
  maxFolderDepth: 9,
  localFileLinks: 26,
};

for (const [key, value] of Object.entries(expected)) {
  if (stats[key] !== value) {
    throw new Error(`Archive stat mismatch for ${key}: expected ${value}, got ${stats[key]}`);
  }
}

const html = await readFile(join(root, "public", "index.html"), "utf8");
const app = await readFile(join(root, "public", "app.js"), "utf8");
const habitatData = await readFile(join(root, "public", "habitat-data.js"), "utf8");
const server = await readFile(join(root, "server.mjs"), "utf8");

for (const route of ["#/archive", "#/archive/tree", "#/archive/sources", "#/archive/agents", "#/archive/findings", "#/archive/imports", "#/archive/quarantine"]) {
  if (!html.includes(route) && !app.includes(route)) throw new Error(`Route missing from frontend: ${route}`);
}
for (const route of ["/agents", "/vision-map", "/source-hub", "/signals", "/staging", "/archive", "/rk-tracker", "/berkshire-1965", "/bookmarks", "/app/alerts", "/founder", "/ceo-b-profile", "/about-founder", "/market-command", "/signal-engine", "/life-habitat"]) {
  const name = route.replace("/", "");
  const isPresent = html.includes(route) || app.includes(route) || html.includes(`#/${name}`) || app.includes(`#/${name}`) || html.includes(`data-view="${name}"`) || app.includes(`data-view="${name}"`);
  if (!isPresent) throw new Error(`Frontend route missing: ${route}`);
}
for (const requiredCopy of ["Roaring Kitty Watchlist Tracker", "Berkshire 1965: Turnaround Intelligence Case Study", "X Bookmark Intelligence", "Source Hub"]) {
  if (!html.includes(requiredCopy) && !app.includes(requiredCopy) && !habitatData.includes(requiredCopy)) throw new Error(`Intelligence OS copy missing: ${requiredCopy}`);
}
for (const requiredCopy of ["Quietly high-agency.", "Explorer mind.", "High-impact human.", "I am commanding a living autonomous intelligence civilization."]) {
  if (!html.includes(requiredCopy) && !app.includes(requiredCopy)) throw new Error(`CEO B profile copy missing: ${requiredCopy}`);
}
for (const api of ["/api/archive", "/api/archive/tree", "/api/archive/sources", "/api/archive/agents", "/api/archive/findings", "/api/archive/imports", "/api/archive/quarantine"]) {
  if (!server.includes(api)) throw new Error(`API route missing from server: ${api}`);
}

console.log("Build validation passed.");
