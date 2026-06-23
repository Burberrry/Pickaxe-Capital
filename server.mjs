import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { requestAlphaVantageQuoteSnapshot } from "./lib/alpha-vantage-quote.mjs";

const root = process.cwd();
const publicDir = join(root, "public");
const dataDir = join(root, "data");
const port = Number(process.env.PORT || 4328);
const obsidianVaultPath = process.env.PICKAXE_OBSIDIAN_VAULT || "/Users/b/Documents/Obsidian Vault";

const obsidianHandoffNotes = [
  ["Pickaxe Capital Vault Operating Prompt.md", "Obsidian Vault Operating Prompt"],
  ["13 Goals/Pickaxe Goal Command Center.md", "Pickaxe Goal Command Center"],
  ["01 CEO B/CEO B.md", "CEO B Decision Layer"],
  ["02 Pickaxe Capital/AI Habitat OS.md", "AI Habitat OS"],
  ["03 Market Habitat/Market Habitat.md", "Market Habitat"],
  ["04 Life Habitat/Life Habitat.md", "Life Habitat"],
  ["09 Agents/Agents.md", "Agents"],
  ["10 Decisions/CEO B Decisions.md", "CEO B Decisions"],
  ["00_START_HERE/NEXT_SESSION_PLAN.md.md", "Obsidian Next Session Plan"],
];

await mkdir(dataDir, { recursive: true });
loadEnvFile(join(root, ".env.local"));

// DEV-ONLY / DISABLED BY DEFAULT / NOT USED BY GITHUB PAGES
// GitHub Pages does not run server.mjs. The public app is a static/demo
// prototype. Live data belongs to a future backend phase and must be
// explicitly enabled for local development.
const LIVE_SERVICES_ENABLED =
  String(process.env.PICKAXE_ENABLE_LIVE_SERVICES || "").toLowerCase() === "true";
const LIVE_SERVICES_DISABLED_MESSAGE =
  "Live services are disabled in this static prototype. This endpoint returns demo/static data only.";
const PROVIDER_PROXY_MODE = String(process.env.PICKAXE_PROVIDER_MODE || "disabled").trim().toLowerCase();
const FIRST_PROVIDER_MODE = "alpha-vantage-quote";
const FIRST_PROVIDER_KEY_NAME = "PICKAXE_ALPHA_VANTAGE_API_KEY";
const FIRST_PROVIDER_ENTITLEMENT = String(process.env.PICKAXE_ALPHA_VANTAGE_ENTITLEMENT || "").trim().toLowerCase();
const FIRST_PROVIDER_COMMERCIAL_USE_APPROVED =
  String(process.env.PICKAXE_ALPHA_VANTAGE_COMMERCIAL_USE_APPROVED || "").trim().toLowerCase() === "true";
let firstProviderManualRequestConsumed = false;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

const defaultWatchlist = [
  "SPY",
  "QQQ",
  "NVDA",
  "TSLA",
  "AAPL",
  "MSTR",
  "COIN",
  "BTC-USD",
  "ETH-USD",
  "EURUSD=X",
  "GC=F",
  "CL=F",
];

const marketNames = {
  SPY: "S&P 500 ETF",
  QQQ: "Nasdaq 100 ETF",
  NVDA: "NVIDIA",
  TSLA: "Tesla",
  AAPL: "Apple",
  MSTR: "MicroStrategy",
  COIN: "Coinbase",
  "BTC-USD": "Bitcoin",
  "ETH-USD": "Ethereum",
  "EURUSD=X": "EUR/USD",
  "GC=F": "Gold Futures",
  "CL=F": "Crude Oil Futures",
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);

    if (url.pathname === "/api/health") {
      return json(res, {
        ok: true,
        mode: LIVE_SERVICES_ENABLED ? "dev-live-services" : "static-demo",
        liveServicesEnabled: LIVE_SERVICES_ENABLED,
        hasOpenAIKey: LIVE_SERVICES_ENABLED && Boolean(process.env.OPENAI_API_KEY),
        message: LIVE_SERVICES_ENABLED ? "Local development live services are enabled." : LIVE_SERVICES_DISABLED_MESSAGE,
        time: new Date().toISOString(),
      });
    }

    if (url.pathname === "/api/provider/quote") {
      const ticker = cleanProviderTicker(url.searchParams.get("ticker") || "");
      const result = ticker
        ? await requestAlphaVantageQuoteSnapshot({
            ticker,
            proxyMode: PROVIDER_PROXY_MODE,
            requiredProxyMode: FIRST_PROVIDER_MODE,
            liveServicesEnabled: LIVE_SERVICES_ENABLED,
            apiKey: process.env[FIRST_PROVIDER_KEY_NAME],
            entitlement: FIRST_PROVIDER_ENTITLEMENT,
            commercialUseApproved: FIRST_PROVIDER_COMMERCIAL_USE_APPROVED,
            reserveRequest: () => {
              if (firstProviderManualRequestConsumed) return false;
              firstProviderManualRequestConsumed = true;
              return true;
            },
          })
        : getInvalidProviderTickerResponse();
      return json(res, result.payload, result.status);
    }

    if (url.pathname === "/api/market") {
      const symbols = (url.searchParams.get("symbols") || defaultWatchlist.join(","))
        .split(",")
        .map((s) => s.trim().toUpperCase())
        .filter(Boolean)
        .slice(0, 24);
      if (!LIVE_SERVICES_ENABLED) {
        return json(res, {
          mode: "static-demo",
          message: LIVE_SERVICES_DISABLED_MESSAGE,
          updatedAt: new Date().toISOString(),
          results: symbols.map(getDemoMarketSnapshot),
        });
      }
      const results = await Promise.all(symbols.map((symbol) => getMarketSnapshot(symbol)));
      return json(res, { updatedAt: new Date().toISOString(), results });
    }

    if (url.pathname === "/api/options") {
      const symbol = (url.searchParams.get("symbol") || "SPY").trim().toUpperCase();
      if (!LIVE_SERVICES_ENABLED) {
        return json(res, {
          mode: "static-demo",
          message: LIVE_SERVICES_DISABLED_MESSAGE,
          ...getDemoOptionsSnapshot(symbol),
        });
      }
      return json(res, await getOptionsSnapshot(symbol));
    }

    if (url.pathname === "/api/signals") {
      const symbols = (url.searchParams.get("symbols") || "SPY,QQQ,NVDA,TSLA,AAPL,MSTR,COIN")
        .split(",")
        .map((s) => s.trim().toUpperCase())
        .filter(Boolean)
        .slice(0, 10);
      if (!LIVE_SERVICES_ENABLED) {
        return json(res, {
          mode: "static-demo",
          message: LIVE_SERVICES_DISABLED_MESSAGE,
          updatedAt: new Date().toISOString(),
          signals: getDemoSignals(symbols),
        });
      }
      return json(res, await generateOptionSignals(symbols));
    }

    if (url.pathname === "/api/checklist") {
      return json(res, await buildChecklistState());
    }

    if (url.pathname === "/api/build-log") {
      return json(res, { items: await readJson("build-log.json", []) });
    }

    if (url.pathname === "/api/vision-map") {
      return json(res, await readJson("vision-map.json", {}));
    }

    if (url.pathname === "/api/memory") {
      return json(res, {
        lessons: await readJson("lessons.json", []),
        runs: (await readJson("agent-runs.json", [])).slice(-20).reverse(),
        journal: (await readJson("research-journal.json", [])).slice(-20).reverse(),
      });
    }

    if (url.pathname === "/source-hub-staging" || url.pathname === "/ai-handoff") {
      const body = await buildAiHandoff();
      res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      });
      res.end(body);
      return;
    }

    if (url.pathname === "/api/archive") {
      return json(res, await getArchiveSummary());
    }

    if (url.pathname === "/api/archive/tree") {
      return json(res, await getArchiveTree());
    }

    if (url.pathname === "/api/archive/sources") {
      return json(res, await getArchiveSources(url.searchParams));
    }

    if (url.pathname === "/api/archive/agents") {
      return json(res, await getArchiveAgents());
    }

    if (url.pathname === "/api/archive/findings") {
      return json(res, await getArchiveFindings());
    }

    if (url.pathname === "/api/archive/imports") {
      return json(res, await getArchiveImports());
    }

    if (url.pathname === "/api/archive/quarantine") {
      return json(res, await getArchiveQuarantine());
    }

    if (url.pathname === "/api/agents/research" && req.method === "POST") {
      const body = await readBody(req);
      if (!LIVE_SERVICES_ENABLED) {
        return json(res, getDemoResearchResponse(body));
      }
      return json(res, await runResearchAgents(body));
    }

    if (url.pathname === "/api/journal" && req.method === "POST") {
      const body = await readBody(req);
      const entry = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        symbol: cleanText(body.symbol, 20).toUpperCase(),
        setup: cleanText(body.setup, 240),
        outcome: cleanText(body.outcome, 120),
        emotion: cleanText(body.emotion, 120),
        lesson: cleanText(body.lesson, 500),
        mistake: cleanText(body.mistake, 240),
        grade: cleanText(body.grade, 20),
      };
      const journal = await readJson("research-journal.json", []);
      journal.push(entry);
      await writeJson("research-journal.json", journal);
      if (entry.lesson) {
        const lessons = await readJson("lessons.json", []);
        lessons.push({
          id: crypto.randomUUID(),
          createdAt: entry.createdAt,
          source: `journal:${entry.symbol}`,
          lesson: entry.lesson,
          score: entry.grade === "A" ? 9 : entry.grade === "B" ? 7 : 5,
        });
        await writeJson("lessons.json", lessons);
      }
      return json(res, { ok: true, entry });
    }

    return serveStatic(url.pathname, res);
  } catch (error) {
    console.error(error);
    return json(res, { ok: false, error: error.message || "Unknown error" }, 500);
  }
}).listen(port, () => {
  const mode = LIVE_SERVICES_ENABLED ? "DEV LIVE SERVICES ENABLED" : "STATIC/DEMO";
  console.log(`Pickaxe Capital is running at http://localhost:${port} (${mode})`);
});

async function serveStatic(pathname, res) {
  const filePath = pathname === "/" ? join(publicDir, "index.html") : join(publicDir, pathname);
  const safePath = resolve(filePath);
  if (!safePath.startsWith(resolve(publicDir))) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  try {
    const file = await readFile(safePath);
    res.writeHead(200, {
      "Content-Type": contentTypes[extname(safePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(file);
  } catch {
    const fallback = await readFile(join(publicDir, "index.html"));
    res.writeHead(200, { "Content-Type": contentTypes[".html"], "Cache-Control": "no-store" });
    res.end(fallback);
  }
}

async function buildAiHandoff() {
  const files = [
    ["AGENTS.md", "Project Rules"],
    ["PROJECT_STATUS.md", "Current Project Status"],
    ["NEXT_STEPS.md", "Next Steps"],
  ];
  const sections = await Promise.all(files.map(async ([file, label]) => {
    try {
      const text = await readFile(join(root, file), "utf8");
      return `## ${label} (${file})\n\n${text.trim()}`;
    } catch {
      return `## ${label} (${file})\n\nNot found.`;
    }
  }));
  const obsidianSection = await buildObsidianHandoffSection();
  return [
    "# Pickaxe Capital / AI Habitat OS - Source Hub / Staging",
    "",
    `Generated locally: ${new Date().toISOString()}`,
    "",
    "Use this handoff to understand the current website state. The active runtime is the static Node app served by server.mjs and public/ files.",
    "",
    "Main local URL: http://localhost:4328/vision-map",
    "Handoff URLs: http://localhost:4328/ai-handoff and http://localhost:4328/source-hub-staging",
    "Project update URL: http://localhost:4328/project-update",
    "GitHub repo target: https://github.com/Burberrry/Pickaxe-Capital",
    "",
    "Architecture truth: the public product is static/demo. server.mjs is a local development server; GitHub Pages serves public/ directly. Astro src files are reference only unless this changes later.",
    "Live-service truth: Yahoo Finance, CBOE, and optional OpenAI paths are disabled by default. They require PICKAXE_ENABLE_LIVE_SERVICES=true for explicit local development and are never run by GitHub Pages.",
    "Active files: server.mjs, public/index.html, public/app.js, public/styles.css, public/habitat-data.js, AGENTS.md, PROJECT_STATUS.md, NEXT_STEPS.md.",
    "Build/check commands: /Applications/Codex.app/Contents/Resources/node --run build and /Applications/Codex.app/Contents/Resources/node --run check:project.",
    "Private memory source: selected Obsidian notes are included below only when this local server can read the vault. Do not copy private vault contents into public frontend files.",
    "",
    "Main routes: /, /vision-map, /agents, /agent-builder-factory, /archive, /staging, /project-update, /ai-handoff, /source-hub-staging, /founder, /ceo-b-profile, /jarvis-lab, /life-os, /signals, /source-hub, /rk-tracker, /bookmarks, /berkshire-1965, /app/alerts, /market-command, /signal-engine, /life-habitat.",
    "",
    "Urgent market watchlist only: BTC, SPY, QQQ, TSLA, AAPL, AMD, NVDA, MSFT, AMZN, UVXY, SPX, MESmain, GCmain, SImain, SICmain, CLmain, DXY. Do not expand the market universe until B approves more symbols.",
    "Market Chart Workspace: manual/prototype QQQ-default workspace, static watchlist, no live feed connected, no trading execution, all actions route to CEO B Review first.",
    "Agent Builder Factory: /agent-builder-factory is a localStorage-only voxel agent customization prototype. No fake autonomous agent claims.",
    "Quantum Brain: ChatGPT, Claude, Gemini, Grok, and Perplexity are represented as a manual review workflow only. No external AI APIs are connected.",
    "Future Voice Command Layer: iPhone/ChatGPT/Codex voice workflow is research/future adapter only. No microphone, camera, device control, or direct execution is active.",
    "Apple Command Ecosystem: iPhone 17 Pro Max, Mac mini, Mac Neo, and iPad Air roles are roadmap/workflow planning only. GitHub should become the source of truth.",
    "",
    "Honest labels: Static, Prototype, Research, Future Adapter, Manual Review, Not Implemented. No scraping, no auto-trading, no fake live agents, no API keys in frontend.",
    "Localhost warning: localhost links only work on B's Mac. For ChatGPT to open the site directly, deploy the static site and share /project-update or /source-hub-staging.",
    "",
    obsidianSection,
    "",
    sections.join("\n\n---\n\n"),
  ].join("\n");
}

async function buildObsidianHandoffSection() {
  if (!existsSync(obsidianVaultPath)) {
    return `## Private Obsidian Memory Layer\n\nVault not found at configured local path. Set PICKAXE_OBSIDIAN_VAULT to enable local handoff notes.`;
  }

  const sections = await Promise.all(obsidianHandoffNotes.map(async ([relativePath, label]) => {
    try {
      const text = await readFile(join(obsidianVaultPath, relativePath), "utf8");
      return `### ${label} (${relativePath})\n\n${text.trim()}`;
    } catch {
      return `### ${label} (${relativePath})\n\nNot found.`;
    }
  }));

  return [
    "## Private Obsidian Memory Layer",
    "",
    "Local-only source. The website cockpit uses public/static files; Obsidian remains the private memory layer for Codex/AI handoff context.",
    "Vault path is configured locally through PICKAXE_OBSIDIAN_VAULT or the default Mac vault location.",
    "",
    sections.join("\n\n---\n\n"),
  ].join("\n");
}

function getDemoMarketSnapshot(symbol, index = 0) {
  const demoRows = {
    SPY: [535.42, 0.38, 3_200_000],
    QQQ: [472.18, 0.61, 2_400_000],
    IWM: [205.36, -0.27, 1_100_000],
    NVDA: [121.74, 1.12, 4_800_000],
    AAPL: [196.88, 0.21, 2_000_000],
    TSLA: [179.42, -0.84, 3_700_000],
  };
  const [price, changePct, volume] = demoRows[symbol] || [
    100 + index * 7.5,
    index % 2 === 0 ? 0.24 : -0.19,
    750_000 + index * 90_000,
  ];
  const spark = [-0.8, -0.35, 0.1, -0.05, 0.44, 0.31, 0.72].map((step) =>
    Number((price * (1 + step / 100)).toFixed(2)),
  );
  return {
    ok: true,
    symbol,
    name: marketNames[symbol] || `${symbol} Demo Snapshot`,
    price,
    change: Number((price * changePct / 100).toFixed(2)),
    changePct,
    dayHigh: Math.max(...spark),
    dayLow: Math.min(...spark),
    volume,
    spark,
    currency: "USD",
    exchange: "Static Demo",
    status: "DEMO",
    source: "Static demo dataset",
    isDemo: true,
    updatedAt: new Date().toISOString(),
  };
}

function getDemoOptionsSnapshot(symbol) {
  const market = getDemoMarketSnapshot(symbol);
  const rounded = Math.max(1, Math.round(market.price / 5) * 5);
  const expiration = "DEMO-EXPIRATION";
  const makeContract = (side, strikeOffset, premium, volume, openInterest) => {
    const strike = rounded + strikeOffset;
    return {
      side,
      contractSymbol: `${symbol}-DEMO-${side}-${strike}`,
      strike,
      expiration,
      bid: Number((premium - 0.08).toFixed(2)),
      ask: Number((premium + 0.08).toFixed(2)),
      mid: premium,
      volume,
      openInterest,
      impliedVolatility: 0.31,
      score: 62,
      isDemo: true,
    };
  };
  return {
    ok: true,
    symbol,
    underlyingPrice: market.price,
    expiration,
    calls: [
      makeContract("CALL", 0, 3.15, 820, 2_450),
      makeContract("CALL", 5, 1.92, 610, 1_880),
    ],
    puts: [
      makeContract("PUT", 0, 2.84, 735, 2_120),
      makeContract("PUT", -5, 1.66, 540, 1_640),
    ],
    source: "Static demo dataset",
    isDemo: true,
  };
}

function getDemoSignals(symbols) {
  return symbols.slice(0, 3).map((symbol, index) => {
    const market = getDemoMarketSnapshot(symbol, index);
    const side = index % 2 === 0 ? "CALL" : "PUT";
    const strike = Math.round(market.price / 5) * 5;
    return {
      id: `demo-${symbol.toLowerCase()}-${side.toLowerCase()}`,
      symbol,
      alertType: "Research Candidate",
      side,
      strike,
      expiration: "DEMO-EXPIRATION",
      contractSymbol: `${symbol}-DEMO-${side}-${strike}`,
      underlyingPrice: market.price,
      bid: 1.84,
      ask: 2.02,
      mid: 1.93,
      volume: 640 + index * 75,
      openInterest: 1_900 + index * 210,
      score: 68 - index * 4,
      thesis: "Static demonstration candidate for human research review.",
      invalidation: "Demo-only scenario; verify all market context and sources before use.",
      source: "Static demo dataset",
      status: "Needs Review",
      isDemo: true,
    };
  });
}

function getDemoResearchResponse(body = {}) {
  const focus = cleanText(
    body.focus || body.question || body.prompt || "Review the current research queue.",
    500,
  );
  return {
    ok: true,
    mode: "static-demo",
    message: LIVE_SERVICES_DISABLED_MESSAGE,
    run: {
      id: `demo-research-${Date.now()}`,
      createdAt: new Date().toISOString(),
      focus,
      modelUsed: "static-demo",
      aiOk: false,
      status: "Needs Review",
      report: [
        "Static demonstration response. No AI model or external market service was called.",
        "Review Time, Trend, and Theme using verified sources.",
        "Confirm risk, invalidation, and source trail before research publication.",
        "CEO B review required.",
        "Research only. Not financial advice. No broker execution. Options involve substantial risk. User judgment required.",
      ].join("\n\n"),
    },
  };
}

async function getMarketSnapshot(symbol) {
  const endpoint = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1m&range=1d`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        "User-Agent": "Mozilla/5.0 April-18-2028-Trader",
        Accept: "application/json",
      },
    });
    if (!response.ok) throw new Error(`market ${response.status}`);
    const payload = await response.json();
    const result = payload.chart?.result?.[0];
    const meta = result?.meta || {};
    const quote = result?.indicators?.quote?.[0] || {};
    const closes = (quote.close || []).filter((n) => typeof n === "number");
    const volumes = (quote.volume || []).filter((n) => typeof n === "number");
    const previousClose = Number(meta.previousClose || closes[0] || 0);
    const price = Number(meta.regularMarketPrice || closes.at(-1) || previousClose || 0);
    const change = price - previousClose;
    const changePct = previousClose ? (change / previousClose) * 100 : 0;
    return {
      ok: true,
      symbol,
      name: marketNames[symbol] || symbol,
      price,
      change,
      changePct,
      dayHigh: Number(meta.regularMarketDayHigh || Math.max(...closes, 0)),
      dayLow: Number(meta.regularMarketDayLow || Math.min(...closes.filter(Boolean), price)),
      volume: Number(meta.regularMarketVolume || volumes.at(-1) || 0),
      spark: downsample(closes, 36),
      currency: meta.currency || "USD",
      exchange: meta.exchangeName || meta.fullExchangeName || "Market",
      status: meta.marketState || "UNKNOWN",
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      symbol,
      name: marketNames[symbol] || symbol,
      error: error.message,
      updatedAt: new Date().toISOString(),
      spark: [],
    };
  }
}

async function getOptionsSnapshot(symbol) {
  const cboe = await getCboeOptionsSnapshot(symbol);
  if (cboe.ok) return cboe;

  const endpoint = `https://query2.finance.yahoo.com/v7/finance/options/${encodeURIComponent(symbol)}`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        "User-Agent": "Mozilla/5.0 April-18-2028-Trader",
        Accept: "application/json",
      },
    });
    if (!response.ok) throw new Error(`options ${response.status}`);
    const payload = await response.json();
    const result = payload.optionChain?.result?.[0];
    const chain = result?.options?.[0] || {};
    const quote = result?.quote || {};
    const calls = rankContracts(chain.calls || [], "CALL");
    const puts = rankContracts(chain.puts || [], "PUT");
    return {
      ok: true,
      symbol,
      underlyingPrice: quote.regularMarketPrice || quote.ask || quote.bid || null,
      expiration: chain.expirationDate ? new Date(chain.expirationDate * 1000).toISOString() : null,
      expirations: (result?.expirationDates || []).slice(0, 8).map((n) => new Date(n * 1000).toISOString().slice(0, 10)),
      calls,
      puts,
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      symbol,
      error: `${cboe.error}; ${error.message}`,
      calls: [],
      puts: [],
      updatedAt: new Date().toISOString(),
    };
  }
}

async function getCboeOptionsSnapshot(symbol) {
  const cboeSymbol = symbol === "SPX" ? "_SPX" : symbol.replace(/[^A-Z0-9.-]/g, "");
  const endpoint = `https://cdn.cboe.com/api/global/delayed_quotes/options/${encodeURIComponent(cboeSymbol)}.json`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        "User-Agent": "Mozilla/5.0 April-18-2028-Trader",
        Accept: "application/json",
      },
    });
    if (!response.ok) throw new Error(`cboe ${response.status}`);
    const payload = await response.json();
    const data = payload.data || {};
    const options = Array.isArray(data.options) ? data.options : [];
    if (!options.length) throw new Error("cboe empty chain");
    const normalized = options.map(normalizeCboeContract).filter(Boolean);
    return {
      ok: true,
      source: "Cboe delayed quotes",
      symbol,
      underlyingPrice: data.current_price || data.close || null,
      expiration: nearestExpiration(normalized),
      expirations: [...new Set(normalized.map((c) => c.expiration).filter(Boolean))].slice(0, 8),
      calls: rankNormalizedContracts(normalized.filter((c) => c.side === "CALL")),
      puts: rankNormalizedContracts(normalized.filter((c) => c.side === "PUT")),
      updatedAt: payload.timestamp ? new Date(`${payload.timestamp} UTC`).toISOString() : new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      symbol,
      error: error.message,
      calls: [],
      puts: [],
      updatedAt: new Date().toISOString(),
    };
  }
}

function normalizeCboeContract(contract) {
  const parsed = parseOptionSymbol(contract.option);
  if (!parsed) return null;
  const bid = Number(contract.bid || 0);
  const ask = Number(contract.ask || 0);
  const volume = Number(contract.volume || 0);
  const openInterest = Number(contract.open_interest || 0);
  return {
    side: parsed.side,
    contractSymbol: contract.option,
    expiration: parsed.expiration,
    strike: parsed.strike,
    lastPrice: Number(contract.last_trade_price || 0),
    bid,
    ask,
    spread: ask && bid ? ask - bid : null,
    volume,
    openInterest,
    impliedVolatility: contract.iv || null,
    delta: contract.delta,
    gamma: contract.gamma,
    theta: contract.theta,
    vega: contract.vega,
    score: volume * 1.5 + openInterest * 0.28 - Math.max(0, ask - bid) * 2,
  };
}

function rankNormalizedContracts(contracts) {
  return contracts
    .filter((c) => c.volume > 0 || c.openInterest > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

function parseOptionSymbol(symbol) {
  const match = String(symbol || "").match(/^(.+?)(\d{6})([CP])(\d{8})$/);
  if (!match) return null;
  const year = 2000 + Number(match[2].slice(0, 2));
  const month = match[2].slice(2, 4);
  const day = match[2].slice(4, 6);
  return {
    root: match[1],
    expiration: `${year}-${month}-${day}`,
    side: match[3] === "C" ? "CALL" : "PUT",
    strike: Number(match[4]) / 1000,
  };
}

function nearestExpiration(contracts) {
  const expirations = contracts.map((c) => c.expiration).filter(Boolean).sort();
  return expirations[0] || null;
}

function rankContracts(contracts, side) {
  return contracts
    .map((c) => ({
      side,
      contractSymbol: c.contractSymbol,
      strike: c.strike,
      lastPrice: c.lastPrice,
      bid: c.bid,
      ask: c.ask,
      spread: c.ask && c.bid ? c.ask - c.bid : null,
      volume: c.volume || 0,
      openInterest: c.openInterest || 0,
      impliedVolatility: c.impliedVolatility || null,
      score: (c.volume || 0) * 1.4 + (c.openInterest || 0) * 0.25,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

async function generateOptionSignals(symbols) {
  const optionSymbols = symbols.filter((symbol) => !symbol.includes("=") && !symbol.includes("-USD"));
  const packets = await Promise.all(optionSymbols.map(async (symbol) => {
    const [market, options] = await Promise.all([getMarketSnapshot(symbol), getOptionsSnapshot(symbol)]);
    return { symbol, market, options };
  }));

  const signals = packets
    .flatMap((packet) => buildSignalsForPacket(packet))
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  const alertRun = {
    id: crypto.randomUUID(),
    generatedAt: new Date().toISOString(),
    symbols: optionSymbols,
    signals,
  };
  const alerts = await readJson("signal-alerts.json", []);
  alerts.push(alertRun);
  await writeJson("signal-alerts.json", alerts.slice(-200));

  return {
    ok: true,
    generatedAt: alertRun.generatedAt,
    symbols: optionSymbols,
    signals,
    notes: [
      "Signals are research alerts for manual review in Webull.",
      "No orders are placed from this website.",
      "Delayed/free options data can differ from Webull quotes, so verify bid, ask, spread, and volume before acting.",
    ],
  };
}

function buildSignalsForPacket({ symbol, market, options }) {
  if (!market.ok || !options.ok) return [];
  const move = Number(market.changePct || 0);
  const underlying = Number(market.price || options.underlyingPrice || 0);
  if (!underlying) return [];

  const direction = move >= 0 ? "CALL" : "PUT";
  const opposite = move >= 0 ? "PUT" : "CALL";
  const primary = selectBestContracts(options, direction, underlying, move).slice(0, 2);
  const hedge = Math.abs(move) > 2 ? selectBestContracts(options, opposite, underlying, move * -0.45).slice(0, 1) : [];
  return [...primary, ...hedge].map((contract, index) => buildSignalPlan({ symbol, market, options, contract, index, directionalMove: move }));
}

function selectBestContracts(options, side, underlying, move) {
  const contracts = side === "CALL" ? options.calls || [] : options.puts || [];
  return contracts
    .map((contract) => {
      const ask = Number(contract.ask || 0);
      const bid = Number(contract.bid || 0);
      const mid = ask && bid ? (ask + bid) / 2 : Number(contract.lastPrice || ask || bid || 0);
      const spread = ask && bid ? ask - bid : Number(contract.spread || 0);
      const spreadPct = ask ? spread / ask : 1;
      const volume = Number(contract.volume || 0);
      const openInterest = Number(contract.openInterest || 0);
      const delta = Number(contract.delta || 0);
      const deltaAbs = Math.abs(delta);
      const moneyness = Math.abs(Number(contract.strike || underlying) - underlying) / underlying;
      const deltaScore = deltaAbs ? Math.max(0, 1 - Math.abs(deltaAbs - 0.38) / 0.38) * 18 : 8;
      const spreadScore = Math.max(0, 1 - spreadPct / 0.18) * 18;
      const liquidityScore = Math.min(24, Math.log10(volume + 10) * 6 + Math.log10(openInterest + 10) * 3);
      const moveScore = Math.min(18, Math.abs(move) * 5);
      const moneynessScore = Math.max(0, 1 - moneyness / 0.08) * 14;
      const rawScore = liquidityScore + spreadScore + deltaScore + moveScore + moneynessScore;
      return {
        ...contract,
        mid,
        spreadPct,
        derivedScore: Math.round(Math.max(0, Math.min(100, rawScore))),
      };
    })
    .filter((contract) => {
      const ask = Number(contract.ask || 0);
      const volume = Number(contract.volume || 0);
      const openInterest = Number(contract.openInterest || 0);
      return ask > 0 && contract.mid > 0 && volume >= 20 && openInterest >= 100 && contract.spreadPct <= 0.35;
    })
    .sort((a, b) => b.derivedScore - a.derivedScore);
}

function buildSignalPlan({ symbol, market, options, contract, index, directionalMove }) {
  const side = contract.side;
  const isCall = side === "CALL";
  const underlying = Number(market.price || options.underlyingPrice || 0);
  const dayHigh = Number(market.dayHigh || underlying);
  const dayLow = Number(market.dayLow || underlying);
  const mid = roundMoney(contract.mid);
  const ask = Number(contract.ask || mid);
  const limitMax = roundMoney(Math.min(ask, mid * 1.08));
  const score = Math.max(1, Math.min(100, contract.derivedScore - index * 4));
  const trigger = isCall
    ? `underlying holds above ${roundMoney(Math.max(dayLow, underlying * 0.995))} and pushes toward ${roundMoney(dayHigh)}`
    : `underlying stays below ${roundMoney(Math.min(dayHigh, underlying * 1.005))} and loses ${roundMoney(dayLow)}`;
  const invalidation = isCall
    ? `stand down if ${symbol} loses ${roundMoney(Math.max(dayLow, underlying * 0.992))} or the contract spread widens past 20%`
    : `stand down if ${symbol} reclaims ${roundMoney(Math.min(dayHigh, underlying * 1.008))} or the contract spread widens past 20%`;
  const target = isCall
    ? `first trim near ${roundMoney(dayHigh)} underlying or +25% to +40% on premium; trail only if volume expands`
    : `first trim near ${roundMoney(dayLow)} underlying or +25% to +40% on premium; trail only if selling pressure expands`;

  return {
    id: crypto.randomUUID(),
    symbol,
    alertType: isCall ? "Bullish options idea" : "Bearish options idea",
    side,
    strike: contract.strike,
    expiration: contract.expiration || options.expiration,
    contractSymbol: contract.contractSymbol,
    underlyingPrice: underlying,
    bid: Number(contract.bid || 0),
    ask: Number(contract.ask || 0),
    mid,
    limitMax,
    volume: Number(contract.volume || 0),
    openInterest: Number(contract.openInterest || 0),
    impliedVolatility: contract.impliedVolatility,
    delta: contract.delta,
    score,
    thesis: `${symbol} is ${formatPct(directionalMove)} with a ${side.toLowerCase()} candidate near the active chain liquidity. This is an alert to inspect in Webull, not an order.`,
    entry: `Only consider if ${trigger}. Use a limit around mid ${formatUsd(mid)}; avoid chasing above ${formatUsd(limitMax)}.`,
    invalidation,
    target,
    riskGate: "Max loss is premium paid. Keep size small enough that a full loss does not damage the day. Skip if bid/ask, volume, or thesis disagrees with Webull.",
    webullAction: `Open Webull, search ${contract.contractSymbol}, verify quote/volume/OI, then decide manually. Website does not place trades.`,
    generatedAt: new Date().toISOString(),
  };
}

async function runResearchAgents(body) {
  const symbols = Array.isArray(body.symbols) && body.symbols.length ? body.symbols : defaultWatchlist.slice(0, 8);
  const focus = cleanText(body.focus || "Find the highest-quality research priorities for options trading today.", 500);
  const market = await Promise.all(symbols.slice(0, 12).map((symbol) => getMarketSnapshot(symbol)));
  const optionsSymbol = cleanText(body.optionsSymbol || symbols[0] || "SPY", 20).toUpperCase();
  const options = await getOptionsSnapshot(optionsSymbol);
  const lessons = (await readJson("lessons.json", [])).slice(-12);
  const visionMap = await readJson("vision-map.json", {});
  const prompt = {
    focus,
    market,
    options,
    lessons,
    visionMap: {
      mission: visionMap.mission,
      promptBuilder: visionMap.promptBuilder,
      monitorRoom: visionMap.monitorRoom,
      learningSystem: visionMap.learningSystem,
      businessMap: visionMap.businessMap,
    },
    requiredFormat: [
      "Desk Pulse",
      "Highest Priority Watchlist",
      "Options Flow Proxy Read",
      "Risk Gates",
      "Mistake To Avoid Today",
      "Next 3 Actions",
      "Conviction Score",
    ],
  };

  let report;
  let modelUsed = "local-fallback";
  let aiOk = false;

  if (LIVE_SERVICES_ENABLED && process.env.OPENAI_API_KEY) {
    try {
      const aiResponse = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
          temperature: 0.25,
          input: [
            {
              role: "system",
              content:
                "You are April 18 2028's trading research desk. Be direct, data-driven, risk-first, and useful. You do not place trades. You produce research for a human trader. No guarantees. Prefer process, liquidity, invalidation, and journaling over hype.",
            },
            {
              role: "user",
              content: JSON.stringify(prompt),
            },
          ],
        }),
      });
      const aiPayload = await aiResponse.json();
      if (!aiResponse.ok) throw new Error(aiPayload.error?.message || `OpenAI ${aiResponse.status}`);
      report = aiPayload.output_text || extractResponseText(aiPayload) || "";
      modelUsed = aiPayload.model || process.env.OPENAI_MODEL || "gpt-4.1-mini";
      aiOk = Boolean(report);
    } catch (error) {
      report = fallbackResearch(prompt, error.message);
    }
  } else {
    report = fallbackResearch(prompt, "No OpenAI API key available");
  }

  const run = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    focus,
    symbols,
    optionsSymbol,
    aiOk,
    modelUsed,
    report,
  };
  const runs = await readJson("agent-runs.json", []);
  runs.push(run);
  await writeJson("agent-runs.json", runs.slice(-200));
  return { ok: true, run };
}

function fallbackResearch(prompt, reason) {
  const cleanReason = reason.includes("quota") || reason.includes("billing")
    ? "model response is temporarily unavailable"
    : reason;
  const movers = prompt.market
    .filter((m) => m.ok)
    .sort((a, b) => Math.abs(b.changePct) - Math.abs(a.changePct))
    .slice(0, 5);
  const topContracts = [...(prompt.options.calls || []), ...(prompt.options.puts || [])]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  return [
    `Desk Pulse: Rules-based review is active (${cleanReason}). Treat all inputs as demo/static unless live services were explicitly enabled for local development.`,
    `Highest Priority Watchlist: ${movers.map((m) => `${m.symbol} ${formatPct(m.changePct)}`).join(", ") || "No clean market snapshot yet."}`,
    `Options Flow Proxy Read: ${topContracts.map((c) => `${c.side} ${c.strike} vol ${c.volume} OI ${c.openInterest}`).join("; ") || "No option chain available from the current free data route."}`,
    "Risk Gates: Only study liquid names, reject wide spreads, define invalidation before entry, cap risk per idea, and journal the thesis before action.",
    `Mistake To Avoid Today: Do not turn a market opinion into oversized options exposure without volume, catalyst, and invalidation lining up.`,
    "Next 3 Actions: Review the research packet again near relevant liquidity windows. Pick one ticker for deep review. Write the research thesis and the reason to reject it.",
    "Conviction Score: 5/10 - source verification and human review remain required.",
  ].join("\n\n");
}

async function buildChecklistState() {
  const now = new Date();
  const checklistSymbols = ["SPY", "QQQ", "NVDA", "BTC-USD"];
  const market = LIVE_SERVICES_ENABLED
    ? await Promise.all(checklistSymbols.map(getMarketSnapshot))
    : checklistSymbols.map(getDemoMarketSnapshot);
  const runs = await readJson("agent-runs.json", []);
  const journal = await readJson("research-journal.json", []);
  const today = now.toISOString().slice(0, 10);
  const hasRunToday = runs.some((r) => r.createdAt?.startsWith(today));
  const hasJournalToday = journal.some((r) => r.createdAt?.startsWith(today));
  const marketHealthy = market.some((m) => m.ok);
  const hour = Number(new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false, timeZone: "America/Los_Angeles" }).format(now));
  const phase = hour < 6 ? "Pre-market preparation" : hour < 13 ? "Market session" : hour < 17 ? "Post-market review" : "Deep research block";

  const items = [
    {
      id: "signals-only",
      title: "Confirm signals-only mode",
      status: "done",
      detail: "This website generates alerts, research, and option ideas only. Research only — no broker execution inside this site.",
      priority: 1,
    },
    {
      id: "risk",
      title: "Set today's risk ceiling",
      status: "due",
      detail: "Write max daily loss, max contracts, and the one setup you are allowed to send to CEO B Review. No ceiling means no CEO B Review entry.",
      priority: 1,
    },
    {
      id: "data",
      title: "Confirm static/demo data mode",
      status: marketHealthy ? "done" : "blocked",
      detail: marketHealthy
        ? "Market route returned labeled static/demo snapshots."
        : "Static/demo market context is not returning clean data yet.",
      priority: 1,
    },
    {
      id: "agent",
      title: "Run the research desk",
      status: hasRunToday ? "done" : "due",
      detail: hasRunToday
        ? "At least one agent research run is logged today."
        : "Review the static research desk brief before forming a research thesis.",
      priority: 1,
    },
    {
      id: "liquidity",
      title: "Check options liquidity",
      status: "due",
      detail: "Reject contracts with dead volume, weak open interest, or spreads that make the setup expensive before it starts.",
      priority: 2,
    },
    {
      id: "webull-verify",
      title: "Verify manually before action",
      status: "due",
      detail: "If a signal looks good, verify manually the exact contract, bid/ask, volume, open interest, spread, and underlying level before any manual decision.",
      priority: 1,
    },
    {
      id: "monitor-room",
      title: "Build monitor-room context",
      status: "due",
      detail: "Scan market overview, Fear and Greed, signals, IPOs, 13F, earnings, key levels, news, AI, ETF categories, crypto, metals, real estate, and prediction markets.",
      priority: 2,
    },
    {
      id: "thesis",
      title: "Write the signal thesis",
      status: "due",
      detail: "Symbol, direction, exact contract, catalyst, entry trigger, invalidation, target, time stop, and why this is better than waiting.",
      priority: 2,
    },
    {
      id: "psych",
      title: "Psychology check",
      status: "due",
      detail: "Name the emotion driving you. If it is revenge, boredom, panic, or needing money fast, stand down.",
      priority: 1,
    },
    {
      id: "journal",
      title: "Journal one lesson",
      status: hasJournalToday ? "done" : "due",
      detail: hasJournalToday ? "A lesson has been added today." : "Log a trade, avoided trade, mistake, or observation before the day ends.",
      priority: 2,
    },
    {
      id: "study",
      title: "Study one edge category",
      status: "due",
      detail: "Pick one: Ripster EMA cloud, LuxAlgo, indicators, risk management, psychology, human nature, law of average, import/export, or assets and liabilities.",
      priority: 3,
    },
  ];

  const next = items.find((item) => item.status === "blocked") || items.find((item) => item.status === "due") || {
    title: "Review and compound",
    detail: "Everything core is checked. Review the last agent output and update one lesson.",
  };

  return {
    updatedAt: now.toISOString(),
    phase,
    progress: Math.round((items.filter((i) => i.status === "done").length / items.length) * 100),
    next,
    items,
    market,
  };
}

async function getArchiveSummary() {
  const db = await readArchiveDatabase();
  const stats = db.archive_stats || {};
  const sources = db.archive_sources || [];
  const folders = db.archive_folders || [];
  const locations = db.archive_source_locations || [];
  const agents = db.archive_agents || [];
  return {
    updatedAt: stats.generatedAt || new Date().toISOString(),
    stats,
    topDomains: summarizeRows(sources, "domain").slice(0, 12),
    topCategories: summarizeRows(sources, "category").slice(0, 8),
    topFolders: folders
      .filter((folder) => folder.id !== "folder_root")
      .map((folder) => ({
        id: folder.id,
        name: folder.name,
        fullPath: folder.fullPath,
        count: folder.directLinkCount + folder.descendantLinkCount,
        ownerAgent: folder.ownerAgent,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10),
    sampleSources: sources.slice(0, 12),
    locationCount: locations.length,
    agentCount: agents.length,
  };
}

async function getArchiveTree() {
  const db = await readArchiveDatabase();
  const folders = db.archive_folders || [];
  const byParent = new Map();
  for (const folder of folders) {
    const key = folder.parentId || "root";
    if (!byParent.has(key)) byParent.set(key, []);
    byParent.get(key).push(folder);
  }
  const build = (folder) => ({
    id: folder.id,
    name: folder.name,
    fullPath: folder.fullPath,
    depth: folder.depth,
    directLinkCount: folder.directLinkCount,
    descendantLinkCount: folder.descendantLinkCount,
    ownerAgent: folder.ownerAgent,
    likelyCategory: folder.likelyCategory,
    children: (byParent.get(folder.id) || [])
      .sort((a, b) => a.order - b.order)
      .map(build),
  });
  const rootFolder = folders.find((folder) => folder.id === "folder_root") || folders[0];
  return {
    stats: db.archive_stats || {},
    tree: rootFolder ? build(rootFolder) : null,
  };
}

async function getArchiveSources(searchParams) {
  const db = await readArchiveDatabase();
  const q = String(searchParams.get("q") || "").trim().toLowerCase();
  const category = String(searchParams.get("category") || "").trim();
  const status = String(searchParams.get("status") || "").trim();
  const limit = Math.min(120, Number(searchParams.get("limit") || 60));
  let sources = db.archive_sources || [];
  if (q) {
    sources = sources.filter((source) => `${source.title} ${source.originalUrl} ${source.domain} ${source.category}`.toLowerCase().includes(q));
  }
  if (category) sources = sources.filter((source) => source.category === category);
  if (status) sources = sources.filter((source) => source.status === status);
  const locationsBySource = new Map();
  for (const location of db.archive_source_locations || []) {
    if (!locationsBySource.has(location.sourceId)) locationsBySource.set(location.sourceId, []);
    if (locationsBySource.get(location.sourceId).length < 4) locationsBySource.get(location.sourceId).push(location);
  }
  const rows = sources
    .slice()
    .sort((a, b) => b.usefulnessScore - a.usefulnessScore || a.title.localeCompare(b.title))
    .slice(0, limit)
    .map((source) => ({
      ...source,
      locations: locationsBySource.get(source.id) || [],
    }));
  return {
    stats: db.archive_stats || {},
    total: sources.length,
    sources: rows,
    categories: summarizeRows(db.archive_sources || [], "category"),
  };
}

async function getArchiveAgents() {
  const db = await readArchiveDatabase();
  return {
    stats: db.archive_stats || {},
    agents: db.archive_agents || [],
    pipeline: [
      "Source Librarian",
      "Junk Filter",
      "Market Context Agent",
      "Options Flow Hunter",
      "Sentiment Scout",
      "GeoMacro Sentinel",
      "Prediction Market Agent",
      "AI / Build Agent",
      "Learning Archivist",
      "CEO B",
    ],
  };
}

async function getArchiveFindings() {
  const db = await readArchiveDatabase();
  return {
    stats: db.archive_stats || {},
    findings: db.archive_findings || [],
  };
}

async function getArchiveImports() {
  const db = await readArchiveDatabase();
  const reference = await readJson("archive_reference_stats.json", {});
  return {
    imports: db.archive_imports || [],
    stats: db.archive_stats || {},
    reference,
    tables: Object.keys(db).filter((key) => key.startsWith("archive_")),
  };
}

async function getArchiveQuarantine() {
  const db = await readArchiveDatabase();
  return {
    stats: db.archive_stats || {},
    quarantine: (db.archive_quarantine || []).slice(0, 120),
    total: (db.archive_quarantine || []).length,
    note: "Local file links are marked for review and preserved. Nothing is deleted automatically.",
  };
}

async function readArchiveDatabase() {
  return readJson("archive-database.json", {
    archive_imports: [],
    archive_folders: [],
    archive_sources: [],
    archive_source_locations: [],
    archive_findings: [],
    archive_quarantine: [],
    archive_agents: [],
    archive_stats: {},
  });
}

function summarizeRows(rows, key) {
  const counts = new Map();
  for (const row of rows) {
    const value = row[key] || "unknown";
    counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count);
}

function extractResponseText(payload) {
  return (payload.output || [])
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .filter(Boolean)
    .join("\n");
}

function downsample(values, target) {
  if (values.length <= target) return values;
  const step = values.length / target;
  const sampled = [];
  for (let i = 0; i < target; i += 1) sampled.push(values[Math.floor(i * step)]);
  return sampled;
}

async function readBody(req) {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  if (!raw) return {};
  return JSON.parse(raw);
}

async function readJson(file, fallback) {
  const path = join(dataDir, file);
  if (!existsSync(path)) return fallback;
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(file, value) {
  await writeFile(join(dataDir, file), `${JSON.stringify(value, null, 2)}\n`);
}

function json(res, payload, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(payload));
}

function cleanText(value, maxLength) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanProviderTicker(value) {
  const ticker = String(value || "").trim().toUpperCase();
  return /^[A-Z0-9.-]{1,12}$/.test(ticker) ? ticker : "";
}

function getInvalidProviderTickerResponse() {
  const base = {
    ticker: "",
    price: null,
    change: null,
    changePercent: null,
    marketTime: null,
    source: "Pickaxe Local Proxy Scaffold",
    sourceUrl: "",
    dataMode: "UNAVAILABLE",
    quoteType: "Unavailable",
    timezone: null,
    receivedAt: null,
    isStale: false,
    staleReason: "",
    providerId: "localProxyProvider",
    providerCandidate: "futureAlphaVantageProvider",
    proxyMode: PROVIDER_PROXY_MODE === FIRST_PROVIDER_MODE ? FIRST_PROVIDER_MODE : "disabled",
    activationAuthorized: false,
  };

  return {
    status: 400,
    payload: {
      ...base,
      dataMode: "ERROR",
      errorCode: "INVALID_TICKER",
      errorMessage: "Ticker must contain 1–12 letters, numbers, periods, or hyphens.",
      staleReason: "No provider request was made.",
    },
  };
}

function formatPct(value) {
  const number = Number(value || 0);
  return `${number >= 0 ? "+" : ""}${number.toFixed(2)}%`;
}

function roundMoney(value) {
  const number = Number(value || 0);
  if (number >= 1000) return Math.round(number * 100) / 100;
  if (number >= 10) return Math.round(number * 100) / 100;
  return Math.round(number * 10000) / 10000;
}

function formatUsd(value) {
  const number = Number(value || 0);
  return `$${number.toLocaleString(undefined, { maximumFractionDigits: number >= 10 ? 2 : 4 })}`;
}

function loadEnvFile(path) {
  if (!existsSync(path)) return;
  const text = readFileSync(path, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2];
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}
