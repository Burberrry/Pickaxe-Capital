import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const importFile = join(root, "data", "imports", "Export all Folders.html");
const databaseFile = join(root, "data", "archive-database.json");
const statsFile = join(root, "data", "archive-import-stats.json");

const agentRules = [
  ["Prediction Market Agent", ["polymarket", "kalshi", "prediction", "betting", "odds", "forecast"]],
  ["Options Flow Hunter", ["option", "options", "gamma", "flow", "unusual", "contract", "webull"]],
  ["Market Context Agent", ["stock", "market", "trading", "finance", "earnings", "cfa", "invest", "macro", "fed", "etf"]],
  ["Sentiment Scout", ["x.com", "twitter", "youtube", "tiktok", "instagram", "reddit", "social"]],
  ["GeoMacro Sentinel", ["iran", "oil", "war", "shipping", "sanction", "china", "taiwan", "russia", "weather"]],
  ["AI / Build Agent", ["github", "openai", "codex", "claude", "anthropic", "agent", "automation", "developer", "docs"]],
  ["Learning Archivist", ["learn", "course", "book", "psychology", "strategy", "education", "pdf"]],
];

const categoryRules = [
  ["prediction-markets", ["polymarket", "kalshi", "prediction", "odds"]],
  ["options", ["option", "options", "gamma", "flow", "webull"]],
  ["markets", ["stock", "market", "trading", "finance", "earnings", "macro", "etf", "cfa"]],
  ["social-sentiment", ["x.com", "twitter", "youtube", "tiktok", "instagram", "reddit"]],
  ["geo-macro", ["iran", "oil", "war", "shipping", "sanction", "china", "taiwan", "russia"]],
  ["ai-build", ["github", "openai", "codex", "claude", "anthropic", "agent", "developer", "automation"]],
  ["learning", ["learn", "course", "book", "strategy", "education", "pdf", "psychology"]],
];

await mkdir(join(root, "data"), { recursive: true });
if (!existsSync(importFile)) {
  throw new Error(`Missing bookmark export: ${importFile}`);
}

const html = await readFile(importFile, "utf8");
const importId = `imp_${Date.now()}`;
const rootFolder = makeFolder({
  id: "folder_root",
  importId,
  parentId: null,
  name: "Archive Root",
  fullPath: "Archive Root",
  depth: 0,
  order: 0,
});

const folders = [rootFolder];
const folderStack = [rootFolder];
const sourcesByUrl = new Map();
const sourceLocations = [];
const quarantine = [];
let pendingFolder = null;
let folderOrder = 1;
let linkOrder = 0;

const tokenPattern = /<DL><p>|<DL>|<\/DL>|<DT><H3\b([^>]*)>([\s\S]*?)<\/H3>|<DT><A\b([^>]*)>([\s\S]*?)<\/A>/gi;
let token;
while ((token = tokenPattern.exec(html))) {
  const raw = token[0].toUpperCase();
  if (raw.startsWith("<DT><H3")) {
    const parent = folderStack.at(-1);
    const name = decodeHtml(stripTags(token[2])).trim() || "Untitled Folder";
    const attrs = parseAttrs(token[1] || "");
    const folder = makeFolder({
      id: `folder_${folders.length}`,
      importId,
      parentId: parent.id,
      name,
      fullPath: `${parent.fullPath} / ${name}`,
      depth: parent.depth + 1,
      order: folderOrder++,
      addDate: attrs.ADD_DATE || "",
      lastModified: attrs.LAST_MODIFIED || "",
    });
    folders.push(folder);
    pendingFolder = folder;
    continue;
  }

  if (raw.startsWith("<DL")) {
    if (pendingFolder) {
      folderStack.push(pendingFolder);
      pendingFolder = null;
    }
    continue;
  }

  if (raw.startsWith("</DL")) {
    if (folderStack.length > 1) folderStack.pop();
    continue;
  }

  if (raw.startsWith("<DT><A")) {
    const folder = folderStack.at(-1);
    const attrs = parseAttrs(token[3] || "");
    const originalUrl = decodeHtml(attrs.HREF || "").trim();
    if (!originalUrl) continue;
    const title = decodeHtml(stripTags(token[4])).trim() || originalUrl;
    const normalizedUrl = originalUrl;
    const isLocalFile = /^file:\/\//i.test(originalUrl);
    const domain = getDomain(originalUrl);
    const pathText = `${folder.fullPath} ${title} ${originalUrl}`.toLowerCase();
    const category = classify(pathText, categoryRules, "general");
    const ownerAgent = classify(pathText, agentRules, "Source Librarian");
    let source = sourcesByUrl.get(normalizedUrl);
    if (!source) {
      source = {
        id: `source_${sourcesByUrl.size + 1}`,
        normalizedUrl,
        originalUrl,
        title,
        domain,
        category,
        ownerAgent,
        trustScore: isLocalFile ? 40 : scoreTrust(domain, originalUrl),
        usefulnessScore: scoreUsefulness(pathText),
        noiseScore: scoreNoise(pathText, isLocalFile),
        freshnessScore: 50,
        status: isLocalFile ? "local-file" : "watch",
        isLocalFile,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      sourcesByUrl.set(normalizedUrl, source);
    }
    const location = {
      id: `location_${sourceLocations.length + 1}`,
      sourceId: source.id,
      folderId: folder.id,
      folderPath: folder.fullPath,
      titleAtLocation: title,
      addDate: attrs.ADD_DATE || "",
      order: linkOrder++,
      createdAt: new Date().toISOString(),
    };
    sourceLocations.push(location);
    folder.directLinkCount += 1;
    if (isLocalFile) {
      quarantine.push({
        id: `quarantine_${quarantine.length + 1}`,
        sourceId: source.id,
        folderId: folder.id,
        folderPath: folder.fullPath,
        title,
        url: originalUrl,
        reason: "local-file-link",
        action: "Marked only. Do not delete automatically.",
        createdAt: new Date().toISOString(),
      });
    }
  }
}

const sources = [...sourcesByUrl.values()];
const folderChildren = new Map(folders.map((folder) => [folder.id, []]));
for (const folder of folders) {
  if (folder.parentId && folderChildren.has(folder.parentId)) {
    folderChildren.get(folder.parentId).push(folder);
  }
}
for (const folder of folders) {
  folder.descendantLinkCount = countDescendantLinks(folder, folderChildren);
  folder.likelyCategory = classify(folder.fullPath.toLowerCase(), categoryRules, "general");
  folder.ownerAgent = classify(folder.fullPath.toLowerCase(), agentRules, "Source Librarian");
  folder.usefulnessScore = scoreUsefulness(folder.fullPath.toLowerCase());
  folder.noiseScore = scoreNoise(folder.fullPath.toLowerCase(), false);
  folder.status = folder.directLinkCount || folder.descendantLinkCount ? "watch" : "empty-folder";
}

const agentRows = buildAgentRows(sources);
const findings = buildFindings({ sources, folders, quarantine, agentRows });
const duplicateUrlEntries = sourceLocations.length - sources.length;
const stats = {
  totalBookmarkLinks: sourceLocations.length,
  uniqueUrls: sources.length,
  duplicateUrlEntries,
  folders: folders.length - 1,
  maxFolderDepth: Math.max(...folders.map((folder) => folder.depth)),
  localFileLinks: quarantine.length,
  generatedAt: new Date().toISOString(),
};

const database = {
  archive_imports: [{
    id: importId,
    fileName: "Export all Folders.html",
    totalLinks: stats.totalBookmarkLinks,
    uniqueUrls: stats.uniqueUrls,
    folderCount: stats.folders,
    duplicateCount: stats.duplicateUrlEntries,
    localFileCount: stats.localFileLinks,
    status: "raw_imported",
    createdAt: stats.generatedAt,
  }],
  archive_folders: folders,
  archive_sources: sources,
  archive_source_locations: sourceLocations,
  archive_findings: findings,
  archive_quarantine: quarantine,
  archive_agents: agentRows,
  archive_stats: stats,
};

await writeFile(databaseFile, `${JSON.stringify(database, null, 2)}\n`);
await writeFile(statsFile, `${JSON.stringify(stats, null, 2)}\n`);
console.log(JSON.stringify(stats, null, 2));

function makeFolder({ id, importId, parentId, name, fullPath, depth, order, addDate = "", lastModified = "" }) {
  return {
    id,
    importId,
    parentId,
    name,
    fullPath,
    depth,
    order,
    addDate,
    lastModified,
    directLinkCount: 0,
    descendantLinkCount: 0,
    likelyCategory: "general",
    ownerAgent: "Source Librarian",
    usefulnessScore: 50,
    noiseScore: 50,
    status: "watch",
    createdAt: new Date().toISOString(),
  };
}

function parseAttrs(text) {
  const attrs = {};
  const attrPattern = /([A-Za-z_:-]+)\s*=\s*"([^"]*)"/g;
  let match;
  while ((match = attrPattern.exec(text))) {
    attrs[match[1].toUpperCase()] = match[2];
  }
  return attrs;
}

function stripTags(text) {
  return String(text || "").replace(/<[^>]*>/g, "");
}

function decodeHtml(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function getDomain(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "file:" ? "local-file" : parsed.hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

function classify(text, rules, fallback) {
  for (const [label, keywords] of rules) {
    if (keywords.some((keyword) => text.includes(keyword))) return label;
  }
  return fallback;
}

function scoreTrust(domain, url) {
  if (domain === "unknown") return 35;
  if (/^(docs|developer|github|openai|anthropic|sec|cboe|nasdaq|nyse|cmegroup|federalreserve)/i.test(domain)) return 78;
  if (/google|youtube|x\.com|twitter|reddit/i.test(domain)) return 58;
  if (/^chrome:\/\//i.test(url)) return 30;
  return 55;
}

function scoreUsefulness(text) {
  let score = 48;
  for (const keyword of ["options", "trading", "market", "agent", "openai", "github", "macro", "strategy", "risk", "finance"]) {
    if (text.includes(keyword)) score += 6;
  }
  return Math.min(95, score);
}

function scoreNoise(text, isLocalFile) {
  let score = isLocalFile ? 65 : 35;
  for (const keyword of ["login", "download", "chrome://", "search?", "utm_", "thank-you"]) {
    if (text.includes(keyword)) score += 8;
  }
  return Math.min(95, score);
}

function countDescendantLinks(folder, children) {
  return (children.get(folder.id) || []).reduce((sum, child) => {
    return sum + child.directLinkCount + countDescendantLinks(child, children);
  }, 0);
}

function buildAgentRows(sources) {
  const counts = new Map();
  for (const source of sources) {
    counts.set(source.ownerAgent, (counts.get(source.ownerAgent) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([agentName, sourceCount], index) => ({
      id: `archive_agent_${index + 1}`,
      agentName,
      sourceCount,
      status: "ready",
      currentTask: agentName === "Source Librarian" ? "Maintain folder truth and source provenance." : "Classify assigned Archive sources.",
      confidence: Math.max(72, 94 - index * 2),
      createdAt: new Date().toISOString(),
    }));
}

function buildFindings({ sources, folders, quarantine, agentRows }) {
  const topCategories = summarize(sources, "category").slice(0, 5);
  const topFolders = [...folders]
    .filter((folder) => folder.id !== "folder_root")
    .sort((a, b) => b.descendantLinkCount + b.directLinkCount - (a.descendantLinkCount + a.directLinkCount))
    .slice(0, 5);
  return [
    {
      id: "finding_1",
      sourceId: null,
      folderId: null,
      agentName: "Source Librarian",
      findingType: "import-summary",
      summary: `Archive imported ${sources.length.toLocaleString()} unique URLs while preserving every folder location.`,
      importance: 94,
      confidence: 96,
      suggestedAction: "Use Archive as the long-term knowledge mine before adding Alerts.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "finding_2",
      sourceId: null,
      folderId: null,
      agentName: "Junk Filter",
      findingType: "quarantine",
      summary: `${quarantine.length} local file links were marked and preserved in quarantine.`,
      importance: 82,
      confidence: 94,
      suggestedAction: "Review local links manually; never delete automatically.",
      createdAt: new Date().toISOString(),
    },
    ...topCategories.map((item, index) => ({
      id: `finding_category_${index + 1}`,
      sourceId: null,
      folderId: null,
      agentName: agentRows[index % Math.max(1, agentRows.length)]?.agentName || "Source Librarian",
      findingType: "category-cluster",
      summary: `${item.key} cluster contains ${item.count.toLocaleString()} unique sources.`,
      importance: 70 + index,
      confidence: 82,
      suggestedAction: "Use this cluster as an input stream for Archive classification.",
      createdAt: new Date().toISOString(),
    })),
    ...topFolders.map((folder, index) => ({
      id: `finding_folder_${index + 1}`,
      sourceId: null,
      folderId: folder.id,
      agentName: folder.ownerAgent,
      findingType: "folder-priority",
      summary: `${folder.fullPath} carries ${folder.descendantLinkCount + folder.directLinkCount} saved links.`,
      importance: 76,
      confidence: 84,
      suggestedAction: "Inspect this folder first during Archive review.",
      createdAt: new Date().toISOString(),
    })),
  ];
}

function summarize(rows, key) {
  const counts = new Map();
  for (const row of rows) counts.set(row[key] || "unknown", (counts.get(row[key] || "unknown") || 0) + 1);
  return [...counts.entries()].map(([entryKey, count]) => ({ key: entryKey, count })).sort((a, b) => b.count - a.count);
}
