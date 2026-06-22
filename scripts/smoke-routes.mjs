import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicIndexPath = resolve(root, "public", "index.html");
const publicAppPath = resolve(root, "public", "app.js");
const publicHabitatDataPath = resolve(root, "public", "habitat-data.js");
const publicFounderBridgePath = resolve(root, "public", "founder", "index.html");
const publicAlertsBridgePath = resolve(root, "public", "app", "alerts", "index.html");
const directBridgeSpecs = [
  ["agents", "#/agents"],
  ["vision-map", "#/vision-map"],
  ["staging", "#/staging"],
  ["ceo-b-profile", "#/ceo-b-profile"],
  ["jarvis-lab", "#/jarvisLab"],
  ["life-os", "#/lifeOS"],
];
const [indexText, appText, habitatDataText, founderBridgeText, alertsBridgeText, ...directBridgeTexts] = await Promise.all([
  readFile(publicIndexPath, "utf8"),
  readFile(publicAppPath, "utf8"),
  readFile(publicHabitatDataPath, "utf8"),
  readFile(publicFounderBridgePath, "utf8"),
  readFile(publicAlertsBridgePath, "utf8"),
  ...directBridgeSpecs.map(([route]) => readFile(resolve(root, "public", route, "index.html"), "utf8")),
]);
const frontendSource = `${indexText}\n${appText}`;

const directRoutes = [
  ["/", "Alerts Desk"],
  ["/agents", "Agent Habitat"],
  ["/vision-map", "Vision Map"],
  ["/archive", "Archive"],
  ["/staging", "Staging"],
  ["/founder", "Founder"],
  ["/ceo-b-profile", "CEO B Profile"],
  ["/jarvis-lab", "Jarvis Lab"],
  ["/life-os", "Pickaxe Life OS"],
];

const hashRoutes = [
  ["#/alerts", "alerts", "Alerts Desk"],
  ["#/dashboard", "dashboard", "Mission Control"],
  ["#/agents", "agents", "Agent Habitat"],
  ["#/ai-habitat-os", "aiHabitatOS", "AI Habitat OS"],
  ["#/source-hub", "sourceHub", "Source Hub"],
  ["#/watchlists", "watchlists", "Watchlists"],
  ["#/research", "research", "Research Desk"],
  ["#/roadmap", "roadmap", "Roadmap"],
];

const failures = [];
const serverOutput = [];
let child;

try {
  verifyStaticBoundaries();

  const port = await reservePort();
  const baseUrl = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, ["server.mjs"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      PICKAXE_ENABLE_LIVE_SERVICES: "false",
      PICKAXE_PROVIDER_MODE: "disabled",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.stdout.on("data", (chunk) => serverOutput.push(chunk.toString()));
  child.stderr.on("data", (chunk) => serverOutput.push(chunk.toString()));

  await waitForServer(`${baseUrl}/api/health`);
  await verifyHealthBoundary(baseUrl);
  await verifyProviderProxyBoundary(baseUrl);
  await verifyAssets(baseUrl);

  for (const [route, marker] of directRoutes) {
    await verifyHtmlRoute(baseUrl, route, marker);
  }
  for (const [route, view, marker] of hashRoutes) {
    verifyHashRouteSource(route, view, marker);
    await verifyHtmlRoute(baseUrl, `/${route}`, marker);
  }

  if (failures.length) {
    throw new Error(failures.join("\n"));
  }

  console.log(`Route smoke passed: ${directRoutes.length} direct routes, ${hashRoutes.length} hash routes, 4 static assets, static/demo health boundary, and disabled local provider-proxy boundary.`);
  console.log("Coverage: HTTP 200, SPA fallback HTML, route/source markers, local assets, normalized UNAVAILABLE proxy response, no Tailwind CDN runtime, and no public local-vault path leakage.");
  console.log("Browser-only checks such as console errors, rendered blank states, and horizontal overflow remain part of manual/in-app browser QA.");
} catch (error) {
  console.error("Route smoke failed.");
  console.error(error.message || error);
  if (serverOutput.length) console.error(serverOutput.join("").trim());
  process.exitCode = 1;
} finally {
  await stopServer(child);
}

function verifyStaticBoundaries() {
  if (indexText.includes("cdn.tailwindcss.com") || indexText.includes("tailwind.config")) {
    failures.push("Tailwind Play CDN runtime remains in public/index.html");
  }
  if (!indexText.includes("utility-compat.css")) {
    failures.push("public/index.html does not link utility-compat.css");
  }
  if (!indexText.includes('id="pickaxe-starlight-field"')) {
    failures.push("public/index.html does not include the Pickaxe Starlight Field canvas");
  }
  if (!appText.includes("function initPickaxeStarlightField()")) {
    failures.push("public/app.js does not initialize the Pickaxe Starlight Field");
  }
  if (!appText.includes("function renderPickaxeIntelligenceOrbit()")) {
    failures.push("public/app.js does not render the Pickaxe Intelligence Orbit");
  }
  if (!appText.includes("window.selectPhase8RoboticsAgent")) {
    failures.push("public/app.js does not expose the Phase 8 robotics lineup interaction");
  }
  if (!habitatDataText.includes("pickaxeOrbitItems") || !habitatDataText.includes("agentRoboticsLineup")) {
    failures.push("public/habitat-data.js does not include the Phase 8 shared static models");
  }
  if (!founderBridgeText.includes("#/founder") || !founderBridgeText.includes("window.location.replace")) {
    failures.push("public/founder/index.html does not preserve the GitHub Pages Founder route bridge");
  }
  if (!alertsBridgeText.includes("#/alerts") || !alertsBridgeText.includes("window.location.replace")) {
    failures.push("public/app/alerts/index.html does not preserve the GitHub Pages Alerts route bridge");
  }
  if (!alertsBridgeText.includes("Research only") || !alertsBridgeText.includes("No broker execution")) {
    failures.push("public/app/alerts/index.html does not preserve the Alerts research-only safety boundary");
  }
  directBridgeSpecs.forEach(([route, hash], index) => {
    const bridgeText = directBridgeTexts[index] || "";
    if (!bridgeText.includes(hash) || !bridgeText.includes("window.location.replace")) {
      failures.push(`public/${route}/index.html does not preserve the ${hash} direct-path bridge`);
    }
  });
  for (const forbidden of [
    "/Users/b/Documents/Obsidian Vault",
    "PICKAXE_OBSIDIAN_VAULT",
    "Pickaxe Capital Vault Operating Prompt.md",
  ]) {
    if (frontendSource.includes(forbidden)) {
      failures.push(`public frontend exposes private local-vault marker: ${forbidden}`);
    }
  }
}

async function verifyHealthBoundary(baseUrl) {
  const response = await fetch(`${baseUrl}/api/health`);
  const payload = await response.json();
  if (!response.ok) failures.push(`/api/health returned ${response.status}`);
  if (payload.liveServicesEnabled !== false || payload.mode !== "static-demo") {
    failures.push("/api/health did not remain in static-demo mode");
  }
}

async function verifyProviderProxyBoundary(baseUrl) {
  const response = await fetch(`${baseUrl}/api/provider/quote?ticker=QQQ`);
  const payload = await response.json();
  if (response.status !== 503) failures.push(`/api/provider/quote returned ${response.status} instead of disabled 503`);
  if (payload.dataMode !== "UNAVAILABLE" || payload.errorCode !== "PROVIDER_NOT_CONFIGURED") {
    failures.push("/api/provider/quote did not return the normalized disabled UNAVAILABLE boundary");
  }
  if (payload.price !== null || payload.receivedAt !== null || payload.activationAuthorized !== false || payload.proxyMode !== "disabled") {
    failures.push("/api/provider/quote implied provider data or activation while disabled");
  }
  if (JSON.stringify(payload).includes("apikey=") || JSON.stringify(payload).includes("Authorization")) {
    failures.push("/api/provider/quote exposed a credential-shaped value");
  }
}

async function verifyAssets(baseUrl) {
  for (const asset of ["styles.css", "utility-compat.css", "app.js", "habitat-data.js"]) {
    const response = await fetch(`${baseUrl}/${asset}`);
    const body = await response.text();
    if (!response.ok || body.length < 100) {
      failures.push(`/${asset} failed static asset smoke (${response.status}, ${body.length} bytes)`);
    }
  }
}

async function verifyHtmlRoute(baseUrl, route, marker) {
  const response = await fetch(`${baseUrl}${route}`);
  const body = await response.text();
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok) failures.push(`${route} returned ${response.status}`);
  if (!contentType.includes("text/html")) failures.push(`${route} did not return HTML`);
  if (!body.includes("<title>Pickaxe Capital</title>")) failures.push(`${route} missed the SPA shell title`);
  if (!body.includes("utility-compat.css")) failures.push(`${route} missed the static utility stylesheet`);
  if (!frontendSource.includes(marker)) failures.push(`${route} source marker missing: ${marker}`);
}

function verifyHashRouteSource(route, view, marker) {
  if (!indexText.includes(`data-route="/${route}"`)) failures.push(`${route} navigation route missing`);
  if (!indexText.includes(`data-view="${view}"`)) failures.push(`${route} navigation view missing: ${view}`);
  if (!frontendSource.includes(marker)) failures.push(`${route} marker missing: ${marker}`);
}

async function waitForServer(url) {
  let lastError;
  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (child?.exitCode !== null) throw new Error("Local smoke server exited before becoming ready");
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }
  throw new Error(`Local smoke server did not become ready: ${lastError?.message || "timeout"}`);
}

async function reservePort() {
  return new Promise((resolvePort, rejectPort) => {
    const probe = createServer();
    probe.once("error", rejectPort);
    probe.listen(0, "127.0.0.1", () => {
      const address = probe.address();
      const port = typeof address === "object" && address ? address.port : 0;
      probe.close((error) => error ? rejectPort(error) : resolvePort(port));
    });
  });
}

async function stopServer(serverProcess) {
  if (!serverProcess || serverProcess.exitCode !== null) return;
  serverProcess.kill("SIGTERM");
  await Promise.race([
    new Promise((resolveExit) => serverProcess.once("exit", resolveExit)),
    new Promise((resolveTimeout) => setTimeout(resolveTimeout, 1500)),
  ]);
  if (serverProcess.exitCode === null) serverProcess.kill("SIGKILL");
}
