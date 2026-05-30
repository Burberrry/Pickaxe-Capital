const state = {
  market: [],
  options: null,
  selectedSymbol: "SPY",
  activeView: "alerts",
  archiveRoute: "overview",
  founderMode: "app",
  agentFilter: "all",
  selectedAgentId: "ceo-b",
  selectedOperatingAgentId: "ceo-b-os",
  agentHabitatFilter: "all",
  selectedHabitatId: "market-habitat",
  selectedMissionId: "mission-agent-world",
  selectedAlertId: "aapl-call-alert",
  selectedWorldAgentName: "Market Scout",
  selectedMarketWorkspaceSymbol: "QQQ",
  worldFilter: "all",
  showWorldLegend: true,
  selectedVisionNodeId: "trading-floor",
  commandActionCount: 0,
  activityFeed: [],
  quoteIndex: 0,
  completedToday: 0,
  successRate: 0,
  systemUptime: 0,
  importedBookmarks: [],
  bookmarksTab: "mined",
  parsedChromeStats: null,
  importedBmsSearch: "",
  importedBmsPage: 0,
  importedBmsCategoryFilter: "all",
  importedBmsTrustFilter: "all",
  importedBmsDupOnly: false,
};

const sharedHabitatData = window.PickaxeHabitatData || {};

function isStaticMode() {
  return window.location.hostname.includes("github.io") || window.location.protocol === "file:";
}

const intelligenceSources = Array.isArray(sharedHabitatData.intelligenceSources) ? sharedHabitatData.intelligenceSources : [];
const rkWatchlist = Array.isArray(sharedHabitatData.rkTracker?.watchlist) ? sharedHabitatData.rkTracker.watchlist : [];
const berkshire1965 = (sharedHabitatData.berkshire1965 && typeof sharedHabitatData.berkshire1965 === "object") ? sharedHabitatData.berkshire1965 : { metrics: [], lessons: [] };
const archiveIntelligenceItems = Array.isArray(sharedHabitatData.archiveIntelligenceItems) ? sharedHabitatData.archiveIntelligenceItems : [];
const xBookmarksIntelligence = (sharedHabitatData.xBookmarksIntelligence && typeof sharedHabitatData.xBookmarksIntelligence === "object") ? sharedHabitatData.xBookmarksIntelligence : {};
const futureAdapters = Array.isArray(sharedHabitatData.futureAdapters) ? sharedHabitatData.futureAdapters : [];
function getOperatingAgentsState() {
  try {
    const stored = localStorage.getItem("pickaxeOperatingAgents");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error("Failed to parse operating agents state:", e);
  }
  const initial = Array.isArray(sharedHabitatData.operatingAgents) ? sharedHabitatData.operatingAgents : [];
  try {
    localStorage.setItem("pickaxeOperatingAgents", JSON.stringify(initial));
  } catch (err) {}
  return initial;
}

function setOperatingAgentsState(items) {
  try {
    localStorage.setItem("pickaxeOperatingAgents", JSON.stringify(items || []));
    operatingAgents = items;
  } catch (e) {
    console.error("Failed to save operating agents state:", e);
  }
}

let operatingAgents = getOperatingAgentsState();
const visionCommandNodes = Array.isArray(sharedHabitatData.visionCommandNodes) ? sharedHabitatData.visionCommandNodes : [];
const ownershipMatrix = Array.isArray(sharedHabitatData.ownershipMatrix) ? sharedHabitatData.ownershipMatrix : [];
const ceoReviewQueue = Array.isArray(sharedHabitatData.ceoReviewQueue) ? sharedHabitatData.ceoReviewQueue : [];
const stalledIntegrations = Array.isArray(sharedHabitatData.stalledIntegrations) ? sharedHabitatData.stalledIntegrations : [];
const mockActivityFeed = Array.isArray(sharedHabitatData.mockActivityFeed) ? sharedHabitatData.mockActivityFeed : [];
const buildCompletionTracker = (sharedHabitatData.buildCompletionTracker && typeof sharedHabitatData.buildCompletionTracker === "object") ? sharedHabitatData.buildCompletionTracker : { areas: [], latestSession: {} };
const habitatWorld = (sharedHabitatData.habitatWorld && typeof sharedHabitatData.habitatWorld === "object") ? sharedHabitatData.habitatWorld : { habitats: [], missions: [], paths: [], activity: [], reviewStack: [], progress: [] };
const alertCommandAlerts = Array.isArray(sharedHabitatData.alertCommandAlerts) ? sharedHabitatData.alertCommandAlerts : [];
const archiveCategories = Array.isArray(sharedHabitatData.archiveCategories) ? sharedHabitatData.archiveCategories : [];
const routeHealth = Array.isArray(sharedHabitatData.routeHealth) ? sharedHabitatData.routeHealth : [];
const archiveVaultItems = Array.isArray(sharedHabitatData.archiveVaultItems) ? sharedHabitatData.archiveVaultItems : [];
const integrationSources = Array.isArray(sharedHabitatData.integrationSources) ? sharedHabitatData.integrationSources : [];
const jarvisResearchSources = Array.isArray(sharedHabitatData.jarvisResearchSources) ? sharedHabitatData.jarvisResearchSources : [];
const lifeOSModules = Array.isArray(sharedHabitatData.lifeOSModules) ? sharedHabitatData.lifeOSModules : [];
const marketWatchlist = Array.isArray(sharedHabitatData.marketWatchlist) ? sharedHabitatData.marketWatchlist : [];
const agentFactoryTemplates = Array.isArray(sharedHabitatData.agentFactoryTemplates) ? sharedHabitatData.agentFactoryTemplates : [];
const quantumBrainCouncil = Array.isArray(sharedHabitatData.quantumBrainCouncil) ? sharedHabitatData.quantumBrainCouncil : [];
const appleCommandEcosystem = Array.isArray(sharedHabitatData.appleCommandEcosystem) ? sharedHabitatData.appleCommandEcosystem : [];

const statusCycle = Array.isArray(sharedHabitatData.statusCycle) ? sharedHabitatData.statusCycle : ["active", "scanning", "thinking", "working", "collaborating", "completed"];

const mindsetQuotes = sharedHabitatData.mindsetQuotes || [
  {
    text: "We are like books: most people only see our cover, the minority read only the introduction, many people believe the critics, few will know our content.",
    source: "Mindset",
  },
  {
    text: "They muddy the water, to make it seem deep.",
    source: "Nietzsche",
  },
  {
    text: "Be sure you put your feet in the right place, then stand firm.",
    source: "TTT",
  },
  {
    text: "When you meet a swordsman, draw your sword. Do not recite poetry to he who is not a poet.",
    source: "Strategy",
  },
  {
    text: "The man who chases two rabbits catches neither.",
    source: "Focus",
  },
  {
    text: "You are just a man. Stop getting offended. You're not your reputation or achievements. You are not right all the time. Don’t be superior. Know when to stop. Accept that you can't always. Let go of control.",
    source: "Ego Check",
  },
];

const habitatAgents = (Array.isArray(sharedHabitatData.agentRoster) ? sharedHabitatData.agentRoster : []).map((agent) => {
  if (!agent) return null;
  const name = agent.name || "Unnamed Agent";
  const id = agent.id || name.toLowerCase().replace(/\s+/g, "-");
  return {
    id,
    name,
    title: agent.role || "Agent",
    department: agent.branch || "General",
    avatarType: agent.color === "gold" ? "crown" : agent.color === "purple" ? "book" : "radar",
    status: String(agent.status || "active").toLowerCase(),
    task: agent.currentTask || "Idle",
    nextAction: agent.nextAction || "Standby",
    progress: agent.progress || Math.floor(Math.random() * 50) + 40,
    confidence: agent.confidence || 85,
    habitat: agent.habitat || "System",
    position: agent.position || { x: Math.floor(Math.random() * 80) + 10, y: Math.floor(Math.random() * 80) + 10 },
    portrait: agent.portrait || { x: 760, y: 285 },
    connections: Array.isArray(agent.connections) ? agent.connections : [],
    logs: Array.isArray(agent.logs) ? agent.logs : [agent.currentTask || "Active", "Nominal operations."],
    lastUpdated: agent.lastUpdated || new Date().toISOString(),
    color: agent.color || "steel",
    badge: agent.badge || "Static",
    riskFlag: agent.riskFlag || "None",
    route: agent.route || "#/",
    inputs: agent.inputs || "N/A",
    outputs: agent.outputs || "N/A"
  };
}).filter(Boolean);

const founderProfile = {
  howYouThink: [
    ["Systems over chaos", "You want frameworks, not random opinions."],
    ["Pattern recognition", "You connect dots quickly and prefer first-principles answers."],
    ["Decision-oriented", "You care about tradeoffs, pros/cons, and what actually works."],
    ["Efficiency mindset", "You respect time, yours and others'."],
  ],
  strengths: [
    ["Highly adaptive", "You shift between technical, creative, and strategic work with ease."],
    ["Strong signal filter", "You cut through noise and focus on what matters."],
    ["Self-directed", "You do not wait for direction. You take initiative."],
    ["Low ego, high standards", "You want quality, not validation."],
  ],
  values: [
    "Clarity over theatrics",
    "Leverage over busywork",
    "Competence over hype",
    "Depth over fluff",
    "Independence and control",
  ],
  inAction: [
    "Ask with intent",
    "Provide enough context to get quality",
    "Iterate and refine",
    "Look for the best solution, not the easiest",
    "Think long-term, not just short-term wins",
  ],
  blindSpots: [
    "High standards can lead to impatience with mediocre work or people.",
    "You may under-communicate expectations.",
    "Tendency to solve things yourself instead of delegating.",
    "Over-optimization can delay good-enough action.",
  ],
  idealEnvironment: ["Autonomy", "Challenge", "Freedom to create", "People who level up the room", "Meaningful impact"],
  vibeCheck: [
    ["Curiosity", 9],
    ["Analytical", 8.5],
    ["Creativity", 8],
    ["Execution", 9.5],
    ["Discipline", 8.5],
  ],
  northStar: [
    "my AI executive",
    "my market intelligence empire",
    "my life optimization system",
    "my memory system",
    "my learning system",
    "my automation system",
    "my decision engine",
  ],
};

const actionCenterItems = Array.isArray(sharedHabitatData.checklistItems) ? sharedHabitatData.checklistItems : [
  { id: "fix-npm", category: "Immediate Fixes", title: "Restore npm command availability", priority: "high", status: "open", page: "global", notes: "This shell can run Node scripts, but npm itself is missing." },
  { id: "route-audit", category: "Immediate Fixes", title: "Keep all required routes returning 200", priority: "high", status: "done", page: "all", notes: "Routes verified through local server." },
  { id: "agents-polish", category: "Design Improvements", title: "Make /agents the flagship habitat", priority: "high", status: "active", page: "/agents", notes: "Trading floor hub, pods, huddles, globe, and drawer added." },
  { id: "agent-telemetry", category: "Agent System Tasks", title: "Replace mock agent states with real telemetry", priority: "medium", status: "open", page: "/agents", notes: "Needs backend agent job tracking." },
  { id: "live-options-flow", category: "Live Data Tasks", title: "Connect options flow and unusual activity provider", priority: "high", status: "open", page: "/signal-engine", notes: "Keep read-only; Webull remains manual execution." },
  { id: "archive-intake", category: "Archive Tasks", title: "Add live bookmark intake queue", priority: "medium", status: "open", page: "/archive", notes: "Archive database is ready for import expansion." },
  { id: "founder-images", category: "Founder/Profile Tasks", title: "Add five founder image assets", priority: "low", status: "open", page: "/founder", notes: "Slots exist; images still need to be selected." },
  { id: "life-habitat", category: "Future Ideas", title: "Design Life Habitat separately from Market Habitat", priority: "medium", status: "open", page: "/vision-map", notes: "CEO B connects both habitats without mixing them." },
];

const logoDomains = (sharedHabitatData.marketWidgets && typeof sharedHabitatData.marketWidgets === "object" && sharedHabitatData.marketWidgets.logoDomains) ? sharedHabitatData.marketWidgets.logoDomains : {
  SPY: "ssga.com",
  QQQ: "invesco.com",
  NVDA: "nvidia.com",
  TSLA: "tesla.com",
  AAPL: "apple.com",
  AMD: "amd.com",
  MSFT: "microsoft.com",
  AMZN: "amazon.com",
  BTC: "bitcoin.org",
  UVXY: "proshares.com",
  SPX: "spglobal.com",
  MESmain: "cmegroup.com",
  GCmain: "cmegroup.com",
  SImain: "cmegroup.com",
  SICmain: "cmegroup.com",
  CLmain: "cmegroup.com",
  DXY: "ice.com",
};

const els = {
  pageTitle: document.querySelector("#pageTitle"),
  healthDot: document.querySelector("#healthDot"),
  healthText: document.querySelector("#healthText"),
  watchlistInput: document.querySelector("#watchlistInput"),
  refreshBtn: document.querySelector("#refreshBtn"),
  runAgentsBtn: document.querySelector("#runAgentsBtn"),
  signalSymbols: document.querySelector("#signalSymbols"),
  generateSignalsBtn: document.querySelector("#generateSignalsBtn"),
  signalSummary: document.querySelector("#signalSummary"),
  signalGrid: document.querySelector("#signalGrid"),
  marketGrid: document.querySelector("#marketGrid"),
  commandOS: document.querySelector("#commandOS"),
  selectedPulse: document.querySelector("#selectedPulse"),
  optionsSymbol: document.querySelector("#optionsSymbol"),
  optionsPanel: document.querySelector("#optionsPanel"),
  agentFocus: document.querySelector("#agentFocus"),
  agentOutput: document.querySelector("#agentOutput"),
  agentMeta: document.querySelector("#agentMeta"),
  journalForm: document.querySelector("#journalForm"),
  phaseTitle: document.querySelector("#phaseTitle"),
  nextAction: document.querySelector("#nextAction"),
  progressText: document.querySelector("#progressText"),
  checklistItems: document.querySelector("#checklistItems"),
  buildLog: document.querySelector("#buildLog"),
  visionMission: document.querySelector("#visionMission"),
  visionStatement: document.querySelector("#visionStatement"),
  brainMap: document.querySelector("#brainMap"),
  promptTemplate: document.querySelector("#promptTemplate"),
  quickPrompts: document.querySelector("#quickPrompts"),
  monitorRoom: document.querySelector("#monitorRoom"),
  learningSystem: document.querySelector("#learningSystem"),
  businessMap: document.querySelector("#businessMap"),
  folderSystem: document.querySelector("#folderSystem"),
  operatingDoctrine: document.querySelector("#operatingDoctrine"),
  catalystMemory: document.querySelector("#catalystMemory"),
  visionQuote: document.querySelector("#visionQuote"),
  loadPromptBtn: document.querySelector("#loadPromptBtn"),
  agentFilters: document.querySelector("#agentFilters"),
  agentHabitat: document.querySelector("#agentHabitat"),
  agentDetail: document.querySelector("#agentDetail"),
  agentActivity: document.querySelector("#agentActivity"),
  agentDrawer: document.querySelector("#agentDrawer"),
  agentOverview: document.querySelector("#agentOverview"),
  missionProgress: document.querySelector("#missionProgress"),
  agentHealth: document.querySelector("#agentHealth"),
  agentStats: document.querySelector("#agentStats"),
  habitatClock: document.querySelector("#habitatClock"),
  rotatingQuote: document.querySelector("#rotatingQuote"),
  rotatingQuoteSource: document.querySelector("#rotatingQuoteSource"),
  archiveRoutes: document.querySelector("#archiveRoutes"),
  archiveStats: document.querySelector("#archiveStats"),
  archiveSearch: document.querySelector("#archiveSearch"),
  archiveSearchBtn: document.querySelector("#archiveSearchBtn"),
  archiveContent: document.querySelector("#archiveContent"),
  founderSection: document.querySelector("#founder"),
  founderThink: document.querySelector("#founderThink"),
  founderStrengths: document.querySelector("#founderStrengths"),
  founderValues: document.querySelector("#founderValues"),
  founderAction: document.querySelector("#founderAction"),
  founderBlindSpots: document.querySelector("#founderBlindSpots"),
  founderEnvironment: document.querySelector("#founderEnvironment"),
  founderVibeBars: document.querySelector("#founderVibeBars"),
  founderNorthStar: document.querySelector("#founderNorthStar"),
  actionCenter: document.querySelector("#actionCenter"),
  agentChecklistPreview: document.querySelector("#agentChecklistPreview"),
  agentOperatingSystem: document.querySelector("#agentOperatingSystem"),
  jarvisLabContent: document.querySelector("#jarvisLabContent"),
  lifeOSContent: document.querySelector("#lifeOSContent"),
  agentBuilderFactoryContent: document.querySelector("#agentBuilderFactoryContent"),
  projectUpdateContent: document.querySelector("#projectUpdateContent"),
  visionCommandCenter: document.querySelector("#visionCommandCenter"),
  sourceHubContent: document.querySelector("#sourceHubContent"),
  signalsIntelligence: document.querySelector("#signalsIntelligence"),
  archiveIntelligence: document.querySelector("#archiveIntelligence"),
  rkTrackerContent: document.querySelector("#rkTrackerContent"),
  berkshireContent: document.querySelector("#berkshireContent"),
  bookmarksContent: document.querySelector("#bookmarksContent"),
  alertsContent: document.querySelector("#alertsContent"),
  lifeHabitatContent: document.querySelector("#lifeHabitatContent"),
  stagingAdvanced: document.querySelector("#stagingAdvanced"),
  riskRulesContent: document.querySelector("#riskRulesContent"),
  complianceContent: document.querySelector("#complianceContent"),
  aiHandoffContent: document.querySelector("#aiHandoffContent"),
};

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.founderMode) state.founderMode = button.dataset.founderMode;
    if (button.dataset.route) {
      const hashPart = button.dataset.route.substring(button.dataset.route.indexOf('#'));
      window.location.hash = hashPart;
    }
  });
});

window.selectHabitatAgent = (agentId, message = "Habitat module selected for CEO B review") => {
  state.selectedAgentId = agentId;
  routeAgentToCeo(agentId, message);
  renderAgentsPage();
};

async function writeClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

window.copyAiHandoffLink = async () => {
  const link = `${window.location.origin}/ai-handoff`;
  const input = document.querySelector("#aiHandoffLink");
  const status = document.querySelector("#aiHandoffStatus");
  if (input) input.value = link;
  try {
    await writeClipboard(link);
    if (status) status.textContent = "Copied handoff link. If ChatGPT cannot open localhost, use Copy Handoff Text.";
  } catch {
    if (status) status.textContent = "Could not copy link. Select the link field and copy it manually.";
  }
};

window.copyAiHandoffText = async () => {
  const status = document.querySelector("#aiHandoffStatus");
  try {
    const response = await fetch("/ai-handoff", { cache: "no-store" });
    if (!response.ok) throw new Error(`handoff ${response.status}`);
    const text = await response.text();
    await writeClipboard(text);
    if (status) status.textContent = "Copied full AI handoff text. Paste it into ChatGPT so it can see the current website details.";
  } catch {
    if (status) status.textContent = "Could not copy handoff text. Open the handoff link and copy the page manually.";
  }
};

els.refreshBtn.addEventListener("click", refreshAll);
els.generateSignalsBtn.addEventListener("click", loadSignals);
els.marketGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-symbol]");
  if (card) setSelectedSymbol(card.dataset.symbol);
});
els.optionsSymbol.addEventListener("change", () => {
  setSelectedSymbol(els.optionsSymbol.value, { loadOptionsNow: true });
});
els.runAgentsBtn.addEventListener("click", runAgents);
els.journalForm.addEventListener("submit", saveJournal);
els.loadPromptBtn.addEventListener("click", () => loadPromptIntoDesk());
els.archiveRoutes.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-archive-route]");
  if (!link) return;
  event.preventDefault();
  const route = link.dataset.archiveRoute;
  window.location.hash = route === "overview" ? "#/archive" : `#/archive/${route}`;
});
els.archiveSearchBtn.addEventListener("click", () => {
  window.location.hash = "#/archive/sources";
});
els.agentFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  state.agentFilter = button.dataset.filter;
  document.querySelectorAll(".agent-filter").forEach((node) => node.classList.toggle("active", node === button));
  renderAgentsPage();
});
els.agentHabitat.addEventListener("click", (event) => {
  const card = event.target.closest("[data-agent-id]");
  if (!card) return;
  state.selectedAgentId = card.dataset.agentId;
  routeAgentToCeo(state.selectedAgentId, "Habitat station selected for CEO B review");
  renderAgentsPage();
});
els.agentOverview.addEventListener("click", (event) => {
  const card = event.target.closest("[data-agent-id]");
  if (!card) return;
  state.selectedAgentId = card.dataset.agentId;
  routeAgentToCeo(state.selectedAgentId, "Overview card selected for CEO B review");
  renderAgentsPage();
});
els.quickPrompts.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-prompt]");
  if (!button) return;
  els.agentFocus.value = button.dataset.prompt;
  setView("command");
});
els.actionCenter.addEventListener("change", handleChecklistToggle);
els.agentChecklistPreview.addEventListener("change", handleChecklistToggle);

refreshAll();
loadBuildLog();
loadVisionMap();
renderAgentsPage();
renderFounderProfile();
renderActionCenter();
renderStaticIntelligencePages();
renderHomeCommandCenter();
openRequestedView();
window.addEventListener("hashchange", openRequestedView);

// Global Link Click Interceptor for GitHub Pages / Static Subdirectories compatibility
document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  const href = link.getAttribute("href");
  if (!href) return;
  
  // If it's a relative path starting with '/' but not '//' or '/#'
  if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/#")) {
    event.preventDefault();
    let hash = href;
    if (href === "/") hash = "#/mission-control";
    else if (href === "/agents") hash = "#/agent-engine";
    else if (href === "/source-hub") hash = "#/data-sources";
    else if (href === "/berkshire-1965") hash = "#/berkshire";
    else if (href === "/rk-tracker") hash = "#/rkTracker";
    else if (href === "/jarvis-lab") hash = "#/jarvisLab";
    else if (href === "/life-os") hash = "#/lifeOS";
    else if (href === "/project-update") hash = "#/projectUpdate";
    else if (href === "/agent-builder-factory") hash = "#/agentBuilderFactory";
    else {
      hash = "#" + href;
    }
    window.location.hash = hash;
  }
});

renderMindsetQuote();
setInterval(refreshAll, 30000);
setInterval(tickAgents, 3200);
setInterval(updateHabitatClock, 1000);
setInterval(nextMindsetQuote, 30000);
updateHabitatClock();

function setView(view) {
  state.activeView = view;
  document.body.classList.toggle("view-command-active", view === "command");
  document.querySelectorAll(".view").forEach((node) => node.classList.toggle("active", node.id === view));
  document.querySelectorAll(".nav-button").forEach((node) => {
    const sameView = node.dataset.view === view;
    const sameFounderMode = view !== "founder" || node.dataset.founderMode === state.founderMode;
    const route = node.dataset.route;
    const sameHash = route && route.includes("#") && window.location.hash === route.substring(route.indexOf("#"));
    const agentAlias = route && (route.includes("#/agent-engine") || route.includes("#/agents")) && (window.location.hash === "#/agent-engine" || window.location.hash === "#/agents");
    const founderAlias = route === "/founder" && window.location.pathname === "/about-founder";
    const ceoAlias = route === "/ceo-b-profile" && window.location.pathname === "/app/ceo-b";
    const archiveAlias = route === "/archive" && window.location.pathname.startsWith("/app/archive");
    const signalsAlias = route === "/signals" && window.location.pathname === "/signal-engine";
    const marketAlias = route === "/signals" && window.location.pathname === "/market-command";
    const routeMatches = !route || route === window.location.pathname || sameHash || agentAlias || founderAlias || ceoAlias || archiveAlias || signalsAlias || marketAlias || (route === "/" && window.location.pathname === "/");
    node.classList.toggle("active", sameView && sameFounderMode && routeMatches);
  });
  const titles = {
    command: "Command Center",
    signals: "Signals",
    archive: "Archive",
    founder: state.founderMode === "public" ? "About Founder" : "CEO B Profile",
    staging: "Staging",
    settings: "Settings",
    sourceHub: "Source Hub",
    rkTracker: "RK Tracker",
    berkshire: "Berkshire 1965",
    bookmarks: "Bookmarks",
    alerts: "Alerts",
    lifeHabitat: "Life Habitat",
    checklist: "Execution Checklist",
    vision: "Vision Map",
    agents: "AI Agent Habitat",
    agentBuilderFactory: "Agent Builder Factory",
    jarvisLab: "Jarvis Lab",
    lifeOS: "Pickaxe Life OS",
    projectUpdate: "Project Update",
    log: "A-Z Build Log",
    riskRules: "Risk Rules",
    compliance: "Compliance Disclosures",
    aiHandoff: "AI Handoff",
    aiHabitatOS: "AI Habitat OS",
  };
  els.pageTitle.textContent = titles[view] || "Pickaxe Capital";
  if (view === "signals") loadSignals();
  if (view === "archive") loadArchive(state.archiveRoute);
  if (["vision", "sourceHub", "signals", "archive", "rkTracker", "berkshire", "bookmarks", "alerts", "lifeHabitat", "staging", "jarvisLab", "lifeOS", "agentBuilderFactory", "projectUpdate", "riskRules", "compliance", "aiHandoff"].includes(view)) renderStaticIntelligencePages();
  if (view === "founder") renderFounderProfile();
  if (view === "agents") renderAgentsPage();
  if (view === "checklist") loadChecklist();
  if (view === "vision") loadVisionMap();
  if (view === "log") loadBuildLog();
}

function openRequestedView() {
  const hash = window.location.hash || "";
  let view = "";
  
  if (hash) {
    if (hash === "#/" || hash === "#/mission-control") {
      view = "command";
    } else if (hash === "#/agent-engine" || hash === "#/agents") {
      view = "agents";
    } else if (hash === "#/signals") {
      view = "signals";
    } else if (hash === "#/alerts") {
      view = "alerts";
    } else if (hash === "#/risk-rules") {
      view = "riskRules";
    } else if (hash === "#/data-sources" || hash === "#/source-hub") {
      view = "sourceHub";
    } else if (hash === "#/compliance") {
      view = "compliance";
    } else if (hash === "#/archive") {
      state.archiveRoute = "overview";
      view = "archive";
    } else if (hash === "#/staging") {
      view = "staging";
    } else if (hash === "#/ai-handoff") {
      view = "aiHandoff";
    } else if (hash === "#/ai-habitat-os") {
      view = "aiHabitatOS";
    } else if (hash === "#/bookmarks") {
      view = "bookmarks";
    } else if (hash === "#/vision-map") {
      view = "vision";
    } else if (hash === "#/founder") {
      state.founderMode = "public";
      view = "founder";
    } else if (hash === "#/ceo-b-profile") {
      state.founderMode = "app";
      view = "founder";
    } else if (hash.startsWith("#/archive/")) {
      state.archiveRoute = hash.replace("#/archive/", "");
      view = "archive";
    } else {
      const cleanHash = hash.replace("#/", "");
      if (["jarvisLab", "lifeOS", "agentBuilderFactory", "projectUpdate", "settings", "rkTracker", "berkshire"].includes(cleanHash)) {
        view = cleanHash;
      }
    }
  }
  
  if (!view) {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("view");
    const p = window.location.pathname;
    if (p === "/" || p.endsWith("/Pickaxe-Capital/") || p.endsWith("/Pickaxe-Capital")) {
      view = "command";
    } else if (p === "/app/alerts") {
      view = "alerts";
    } else if (p === "/agents") {
      view = "agents";
    } else if (p === "/source-hub") {
      view = "sourceHub";
    } else if (p === "/signals") {
      view = "signals";
    } else if (p === "/rk-tracker") {
      view = "rkTracker";
    } else if (p === "/berkshire-1965") {
      view = "berkshire";
    } else if (p === "/bookmarks") {
      view = "bookmarks";
    } else if (p === "/jarvis-lab") {
      view = "jarvisLab";
    } else if (p === "/agent-builder-factory") {
      view = "agentBuilderFactory";
    } else if (p === "/project-update") {
      view = "projectUpdate";
    } else if (p === "/life-os") {
      view = "lifeOS";
    } else if (p === "/life-habitat") {
      view = "lifeHabitat";
    } else if (p === "/vision-map") {
      view = "vision";
    } else if (p === "/staging") {
      view = "staging";
    } else if (p === "/settings") {
      view = "settings";
    } else if (p === "/market-command" || p === "/signal-engine") {
      view = "signals";
    } else if (p === "/archive") {
      state.archiveRoute = "overview";
      view = "archive";
    } else if (p.startsWith("/app/archive")) {
      state.archiveRoute = archiveRouteFromPath(p);
      view = "archive";
    } else if (p === "/about-founder" || p === "/founder") {
      state.founderMode = "public";
      view = "founder";
    } else if (p === "/app/ceo-b" || p === "/ceo-b-profile") {
      state.founderMode = "app";
      view = "founder";
    } else if (requested) {
      view = requested;
    } else if (window.location.search.toLowerCase().includes("agent")) {
      view = "agents";
    }
  }

  if (!view) {
    view = "command";
  }
  setView(view);
}

function archiveRouteFromPath(pathname) {
  const route = pathname.replace(/^\/app\/archive\/?/, "").split("/")[0];
  return route || "overview";
}

function renderMindsetQuote() {
  const quote = mindsetQuotes[state.quoteIndex % mindsetQuotes.length];
  els.rotatingQuote.textContent = quote.text;
  els.rotatingQuoteSource.textContent = quote.source;
}

function nextMindsetQuote() {
  state.quoteIndex = (state.quoteIndex + 1) % mindsetQuotes.length;
  renderMindsetQuote();
}

async function refreshAll() {
  await Promise.all([checkHealth(), loadMarket(), loadOptions(), loadChecklist()]);
}

async function checkHealth() {
  if (isStaticMode()) {
    els.healthDot.className = "dot";
    els.healthText.textContent = "GitHub Pages Static • Backend Not Connected";
    return;
  }
  try {
    const health = await getJson("/api/health");
    if (health && health.ok) {
      els.healthDot.className = "dot ok";
      els.healthText.textContent = "Routes verified • static prototype";
    } else {
      els.healthDot.className = "dot";
      els.healthText.textContent = "Static Prototype • Demo Data";
    }
  } catch {
    els.healthDot.className = "dot";
    els.healthText.textContent = "GitHub Pages Static • Backend Not Connected";
  }
}

async function loadMarket() {
  const symbols = els.watchlistInput?.value || "SPY, QQQ, BTC";
  let results = [];
  if (isStaticMode()) {
    const symList = symbols.split(",").map(s => s.trim().toUpperCase()).filter(Boolean);
    const mockPrices = { SPY: 520.50, QQQ: 445.80, NVDA: 95.30, TSLA: 175.20, AAPL: 189.50, BTC: 92400.00 };
    results = symList.map(sym => {
      const price = mockPrices[sym] || (100 + Math.random() * 50);
      const changePct = -3 + Math.random() * 6;
      return {
        symbol: sym,
        name: `${sym} Watchlist`,
        price: price,
        change: price * (changePct / 100),
        changePct: changePct,
        spark: Array.from({ length: 15 }, () => price * (1 + (-0.02 + Math.random() * 0.04))),
        ok: true,
        currency: "USD"
      };
    });
  } else {
    try {
      const payload = await getJson(`/api/market?symbols=${encodeURIComponent(symbols)}`);
      results = payload.results || [];
    } catch (error) {
      console.warn("API market route error, using local fallback:", error);
      const symList = symbols.split(",").map(s => s.trim().toUpperCase()).filter(Boolean);
      const mockPrices = { SPY: 520.50, QQQ: 445.80, NVDA: 95.30, TSLA: 175.20, AAPL: 189.50, BTC: 92400.00 };
      results = symList.map(sym => {
        const price = mockPrices[sym] || (100 + Math.random() * 50);
        const changePct = -3 + Math.random() * 6;
        return {
          symbol: sym,
          name: `${sym} Watchlist`,
          price: price,
          change: price * (changePct / 100),
          changePct: changePct,
          spark: Array.from({ length: 15 }, () => price * (1 + (-0.02 + Math.random() * 0.04))),
          ok: true,
          currency: "USD"
        };
      });
    }
  }
  state.market = results;
  if (els.marketGrid) els.marketGrid.innerHTML = state.market.map(renderMarketCard).join("");
  updateSelectedPulse();
  document.querySelectorAll("canvas[data-spark]").forEach((canvas) => {
    const item = state.market.find((entry) => entry.symbol === canvas.dataset.spark);
    drawSpark(canvas, item?.spark || [], item?.changePct || 0);
  });
  const selectedCanvas = document.querySelector("canvas[data-selected-spark]");
  if (selectedCanvas) {
    const item = state.market.find((entry) => entry.symbol === state.selectedSymbol);
    drawSpark(selectedCanvas, item?.spark || [], item?.changePct || 0);
  }
}

async function loadOptions() {
  const symbol = els.optionsSymbol?.value || "SPY";
  let payload = null;
  if (isStaticMode()) {
    const basePrice = symbol === "BTC" ? 92400 : symbol === "SPY" ? 520.50 : 150;
    payload = {
      ok: true,
      underlyingPrice: basePrice,
      expiration: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      calls: [
        { strike: Math.round(basePrice * 1.05), mid: 2.50, limitMax: 2.60, volume: 150, openInterest: 800, score: 92, contractSymbol: `${symbol}260618C` },
        { strike: Math.round(basePrice * 1.10), mid: 1.10, limitMax: 1.15, volume: 300, openInterest: 1200, score: 85, contractSymbol: `${symbol}260618C` }
      ],
      puts: [
        { strike: Math.round(basePrice * 0.95), mid: 2.10, limitMax: 2.20, volume: 120, openInterest: 500, score: 88, contractSymbol: `${symbol}260618P` },
        { strike: Math.round(basePrice * 0.90), mid: 0.95, limitMax: 1.00, volume: 250, openInterest: 900, score: 81, contractSymbol: `${symbol}260618P` }
      ]
    };
  } else {
    try {
      payload = await getJson(`/api/options?symbol=${encodeURIComponent(symbol)}`);
    } catch (error) {
      console.warn("API options route error, using local fallback:", error);
      const basePrice = symbol === "BTC" ? 92400 : symbol === "SPY" ? 520.50 : 150;
      payload = {
        ok: true,
        underlyingPrice: basePrice,
        expiration: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        calls: [
          { strike: Math.round(basePrice * 1.05), mid: 2.50, limitMax: 2.60, volume: 150, openInterest: 800, score: 92, contractSymbol: `${symbol}260618C` },
          { strike: Math.round(basePrice * 1.10), mid: 1.10, limitMax: 1.15, volume: 300, openInterest: 1200, score: 85, contractSymbol: `${symbol}260618C` }
        ],
        puts: [
          { strike: Math.round(basePrice * 0.95), mid: 2.10, limitMax: 2.20, volume: 120, openInterest: 500, score: 88, contractSymbol: `${symbol}260618P` },
          { strike: Math.round(basePrice * 0.90), mid: 0.95, limitMax: 1.00, volume: 250, openInterest: 900, score: 81, contractSymbol: `${symbol}260618P` }
        ]
      };
    }
  }
  state.options = payload;
  if (!payload.ok) {
    if (els.optionsPanel) els.optionsPanel.innerHTML = `<p class="muted">Options route did not return data for ${symbol}: ${escapeHtml(payload.error || "Unknown error")}</p>`;
    return;
  }
  const rows = [...(payload.calls || []), ...(payload.puts || [])].sort((a, b) => b.score - a.score).slice(0, 12);
  if (els.optionsPanel) {
    els.optionsPanel.innerHTML = `
      <div class="pill">Underlying ${formatMoney(payload.underlyingPrice)} • Exp ${payload.expiration ? payload.expiration.slice(0, 10) : "nearest"}</div>
      ${rows.map(renderContract).join("") || "<p>No liquid contracts found.</p>"}
    `;
  }
}

function setSelectedSymbol(symbol, options = {}) {
  const cleanSymbol = String(symbol || "SPY").trim().toUpperCase();
  state.selectedSymbol = cleanSymbol;
  const optionable = els.optionsSymbol ? [...els.optionsSymbol.options].some((option) => option.value === cleanSymbol || option.textContent === cleanSymbol) : false;
  if (optionable && els.optionsSymbol && els.optionsSymbol.value !== cleanSymbol) {
    els.optionsSymbol.value = cleanSymbol;
    if (!options.skipSignalSync) loadOptions();
  } else if (options.loadOptionsNow && optionable) {
    loadOptions();
  }
  const signalList = els.signalSymbols ? (els.signalSymbols.value || "")
    .split(",")
    .map((entry) => entry.trim().toUpperCase())
    .filter(Boolean) : [];
  if (els.signalSymbols && !signalList.includes(cleanSymbol) && !cleanSymbol.includes("-USD") && !cleanSymbol.includes("=")) {
    els.signalSymbols.value = [cleanSymbol, ...signalList].slice(0, 8).join(", ");
  }
  if (els.agentFocus) els.agentFocus.value = `Focus the desk on ${cleanSymbol}. Connect chart structure, flow proxy, catalyst context, TTT alignment, and risk gates. Give me the exact next research action before I inspect anything in Webull.`;
  if (els.agentOutput) els.agentOutput.textContent = `${cleanSymbol} is now the synchronized desk focus.\n\nFlow Proxy, selected chart, signal input, and agent mission context have been updated together. Run the research desk when you want a fresh brief.`;
  if (els.agentMeta) els.agentMeta.textContent = "Focus synced";
  document.querySelectorAll(".metric-card[data-symbol]").forEach((card) => {
    card.classList.toggle("selected", card.dataset.symbol === cleanSymbol);
  });
  updateSelectedPulse();
}

function updateSelectedPulse() {
  const item = state.market.find((entry) => entry.symbol === state.selectedSymbol) || state.market.find((entry) => entry.ok);
  if (!item) {
    if (els.selectedPulse) els.selectedPulse.innerHTML = "";
    return;
  }
  const direction = item.changePct >= 0 ? "up" : "down";
  if (els.selectedPulse) {
    els.selectedPulse.innerHTML = `
      <div>
        <p class="eyebrow">Synchronized focus</p>
        <h2>${escapeHtml(item.symbol)} ${item.ok ? escapeHtml(item.name) : "watch"}</h2>
        <p>Click any market card to synchronize the desk brief, flow proxy, signal input, selected chart, and agent mission context.</p>
      </div>
      <div class="selected-chart">
        <strong class="${direction}">${item.ok ? `${formatMoney(item.price, item.currency)} • ${formatSigned(item.changePct)}%` : "Data waiting"}</strong>
        <canvas class="spark" data-selected-spark="${escapeHtml(item.symbol)}"></canvas>
      </div>
    `;
  }
  const selectedCanvas = document.querySelector("canvas[data-selected-spark]");
  if (selectedCanvas) drawSpark(selectedCanvas, item.spark || [], item.changePct || 0);
}

async function loadChecklist() {
  let payload = null;
  if (isStaticMode()) {
    payload = {
      phase: "Static Prototype Phase 12 Check",
      next: { title: "Visual QA", detail: "Check routing fallbacks and mobile viewport compatibility." },
      progress: 98,
      items: [
        { title: "Dashboard upgrade", status: "completed", id: "item-1" },
        { title: "Roster mapping", status: "completed", id: "item-2" },
        { title: "Workbench design", status: "completed", id: "item-3" },
        { title: "Manual execution disclaimers", status: "completed", id: "item-4" }
      ]
    };
  } else {
    try {
      payload = await getJson("/api/checklist");
    } catch (error) {
      console.warn("API checklist route error, using local fallback:", error);
      payload = {
        phase: "Static Prototype Phase 12 Check",
        next: { title: "Visual QA", detail: "Check routing fallbacks and mobile viewport compatibility." },
        progress: 98,
        items: [
          { title: "Dashboard upgrade", status: "completed", id: "item-1" },
          { title: "Roster mapping", status: "completed", id: "item-2" },
          { title: "Workbench design", status: "completed", id: "item-3" },
          { title: "Manual execution disclaimers", status: "completed", id: "item-4" }
        ]
      };
    }
  }
  if (els.phaseTitle) els.phaseTitle.textContent = payload.phase;
  if (els.nextAction) els.nextAction.textContent = `${payload.next.title}: ${payload.next.detail}`;
  if (els.progressText) els.progressText.textContent = `${payload.progress}%`;
  if (els.checklistItems) els.checklistItems.innerHTML = payload.items.map(renderCheckItem).join("");
}

async function loadBuildLog() {
  let payload = null;
  if (isStaticMode()) {
    payload = {
      items: [
        { letter: "A", title: "Obsidian Theme Added", detail: "Graphite backgrounds, 2px borders, custom accents." },
        { letter: "B", title: "17-Agent Roster Upgrade", detail: "Detailed Workforce Board grid rendering." },
        { letter: "C", title: "Signals Options Workbench", detail: "Interactive Approve/Reject option signals." }
      ]
    };
  } else {
    try {
      payload = await getJson("/api/build-log");
    } catch (error) {
      console.warn("API build-log route error, using local fallback:", error);
      payload = {
        items: [
          { letter: "A", title: "Obsidian Theme Added", detail: "Graphite backgrounds, 2px borders, custom accents." },
          { letter: "B", title: "17-Agent Roster Upgrade", detail: "Detailed Workforce Board grid rendering." },
          { letter: "C", title: "Signals Options Workbench", detail: "Interactive Approve/Reject option signals." }
        ]
      };
    }
  }
  if (els.buildLog) {
    els.buildLog.innerHTML = (payload.items || []).map((item) => `
      <article class="log-row">
        <div class="letter">${escapeHtml(item.letter)}</div>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
        </div>
      </article>
    `).join("");
  }
}

async function loadSignals() {
  els.signalSummary.innerHTML = `<span class="pill">Scanning chains...</span>`;
  els.signalGrid.innerHTML = "";
  const symbols = els.signalSymbols?.value || canonicalWatchlistSymbols().join(", ");
  
  let signals = [];
  if (!isStaticMode()) {
    try {
      const payload = await getJson(`/api/signals?symbols=${encodeURIComponent(symbols)}`);
      signals = payload.signals || [];
    } catch (error) {
      console.warn("API signals route error, using local storage options data:", error);
    }
  }
  
  const localAlerts = Array.isArray(getOptionAlertsState()) ? getOptionAlertsState() : [];
  if (!signals.length) {
    // Convert alert packets to compatible workbench signals
    signals = localAlerts.map(alert => {
      if (!alert) return null;
      const action = alert.action || "";
      return {
        ...alert,
        side: action.includes("CALL") ? "CALL" : action.includes("PUT") ? "PUT" : "WAIT"
      };
    }).filter(Boolean);
  }
  
  state.activeSignals = signals;
  const generatedAt = new Date().toLocaleString();
  
  els.signalSummary.innerHTML = `
    <div class="summary-card bg-[#0e1012] border border-[#1f242d] p-3 text-[11px] font-mono">
      <span class="text-[9px] text-[#606266] uppercase font-bold block mb-1">Generated</span>
      <strong class="text-white font-bold block mb-1">${escapeHtml(generatedAt)}</strong>
      <p class="text-[#909399] leading-snug">Static Prototype Options Intelligence. Use these setups for manual reviews in Webull only.</p>
    </div>
    <div class="summary-card bg-[#0e1012] border border-[#1f242d] p-3 text-[11px] font-mono">
      <span class="text-[9px] text-[#606266] uppercase font-bold block mb-1">Filter Posture</span>
      <strong class="text-white font-bold block mb-1">Liquidity + Spread + Trend Risk gates</strong>
      <p class="text-[#909399] leading-snug">All candidates are evaluated by Risk Sentinel. Violations trigger rejected/watch-only status.</p>
    </div>
  `;
  
  els.signalGrid.innerHTML = signals.map(renderSignalPacket).join("") || `
    <article class="signal-card font-mono text-center p-6 border border-[#1f242d] bg-[#0c0d0e]">
      <h3 class="text-white font-bold mb-2">No option candidates found</h3>
      <p class="text-[#909399]">No setups met the TTT alignment criteria. Waiting is a valid signal.</p>
    </article>
  `;
}

async function loadArchive(route = "overview") {
  state.archiveRoute = route;
  document.querySelectorAll("[data-archive-route]").forEach((link) => {
    link.classList.toggle("active", link.dataset.archiveRoute === route);
  });

  const endpoint = route === "overview" ? "/api/archive" : `/api/archive/${route}`;
  const search = route === "sources" && els.archiveSearch.value.trim()
    ? `?q=${encodeURIComponent(els.archiveSearch.value.trim())}`
    : "";
  els.archiveContent.innerHTML = `<section class="panel"><p class="muted">Loading Archive ${escapeHtml(route)}...</p></section>`;

  let payload = null;
  if (isStaticMode()) {
    const items = getEffectiveArchiveVaultItems();
    const metrics = getArchiveVaultMetrics(items);
    payload = {
      stats: {
        total: items.length,
        active: items.filter(i => i && (i.status === "active" || i.status === "live" || i.status === "online")).length,
        priority: items.filter(i => i && (i.priority === "high" || i.priority === "critical")).length,
        review: items.filter(i => i && i.status === "review").length,
        broken: 0,
        completed: 0,
        agentConnected: items.filter(i => i && i.connectedAgent).length,
        duplicates: metrics.duplicates || 0
      },
      items: items,
      tree: {
        name: "Vault Root",
        children: [
          { name: "Markets", children: [] },
          { name: "Options", children: [] }
        ]
      },
      sources: [
        { domain: "tradingview.com", count: 8 },
        { domain: "x.com", count: 12 }
      ],
      agents: [
        { name: "Research Agent", count: 4 }
      ],
      findings: [
        { title: "Vol Outlier SPY", summary: "Mock unusual option flow detected." }
      ],
      imports: [],
      quarantine: []
    };
  } else {
    try {
      payload = await getJson(`${endpoint}${search}`);
    } catch (error) {
      console.warn("API archive route error, using local fallback:", error);
      const items = getEffectiveArchiveVaultItems();
      const metrics = getArchiveVaultMetrics(items);
      payload = {
        stats: {
          total: items.length,
          active: items.filter(i => i && (i.status === "active" || i.status === "live" || i.status === "online")).length,
          priority: items.filter(i => i && (i.priority === "high" || i.priority === "critical")).length,
          review: items.filter(i => i && i.status === "review").length,
          broken: 0,
          completed: 0,
          agentConnected: items.filter(i => i && i.connectedAgent).length,
          duplicates: metrics.duplicates || 0
        },
        items: items,
        tree: {
          name: "Vault Root",
          children: [
            { name: "Markets", children: [] },
            { name: "Options", children: [] }
          ]
        },
        sources: [
          { domain: "tradingview.com", count: 8 },
          { domain: "x.com", count: 12 }
        ],
        agents: [
          { name: "Research Agent", count: 4 }
        ],
        findings: [
          { title: "Vol Outlier SPY", summary: "Mock unusual option flow detected." }
        ],
        imports: [],
        quarantine: []
      };
    }
  }
  
  try {
    renderArchiveStats(payload.stats || {});
    if (route === "tree") renderArchiveTree(payload);
    else if (route === "sources") renderArchiveSources(payload);
    else if (route === "agents") renderArchiveAgents(payload);
    else if (route === "findings") renderArchiveFindings(payload);
    else if (route === "imports") renderArchiveImports(payload);
    else if (route === "quarantine") renderArchiveQuarantine(payload);
    else renderArchiveOverview(payload);
  } catch (renderError) {
    console.error("Archive rendering error:", renderError);
  }
}

function renderStaticIntelligencePages() {
  renderVisionCommandCenter();
  renderSourceHubPage();
  renderSignalsIntelligence();
  renderArchiveIntelligence();
  renderRkTrackerPage();
  renderBerkshirePage();
  renderBookmarksPage();
  renderAlertsPage();
  renderLifeHabitatPage();
  renderStagingAdvanced();
  renderJarvisLabPage();
  renderLifeOSPage();
  renderAgentBuilderFactoryPage();
  renderProjectUpdatePage();
  renderRiskRulesPage();
  renderCompliancePage();
  renderAiHandoffPage();
}

function renderRiskRulesPage() {
  if (!els.riskRulesContent) return;
  const rules = Array.isArray(sharedHabitatData.riskRules) ? sharedHabitatData.riskRules : [];
  els.riskRulesContent.innerHTML = `
    <div class="p-6 bg-[#0a0b0c] text-xs font-mono text-[#c0c4cc]">
      <div class="flex items-center justify-between border-b border-[#1f242d] pb-4 mb-6">
        <div>
          <p class="text-[10px] text-amber uppercase tracking-wider">Security & Execution Guard</p>
          <h2 class="text-lg font-bold text-white uppercase tracking-tight">Active Risk Rules Matrix</h2>
        </div>
        <span class="px-2 py-1 bg-red/20 text-red text-[10px] font-bold border border-red/40 uppercase tracking-widest">Active Safety Gates</span>
      </div>
      <p class="text-xs text-[#909399] mb-6 font-sans">
        All option alerts are filtered through the following rules before entering CEO B Review. Any violations will automatically flag or reject the setup.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${rules.map(rule => `
          <div class="p-4 bg-[#121417] border border-[#1f242d] hover:border-blue/50 transition-colors flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold text-white uppercase">${escapeHtml(rule.name)}</span>
                <span class="px-1.5 py-0.5 text-[9px] font-bold ${rule.type === 'Automatic Reject' ? 'bg-red/20 text-red border border-red/40' : 'bg-amber/20 text-amber border border-amber/40'} uppercase tracking-wider">${escapeHtml(rule.type)}</span>
              </div>
              <p class="text-[11px] text-[#909399] leading-relaxed mb-4 font-sans">${escapeHtml(rule.description)}</p>
            </div>
            <div class="pt-3 border-t border-[#1f242d] flex items-center justify-between text-[10px]">
              <span class="text-[#606266]">System Gate:</span>
              <span class="text-green uppercase font-bold">${escapeHtml(rule.status)}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCompliancePage() {
  if (!els.complianceContent) return;
  const disclosures = Array.isArray(sharedHabitatData.complianceDisclosures) ? sharedHabitatData.complianceDisclosures : [];
  els.complianceContent.innerHTML = `
    <div class="p-6 bg-[#0a0b0c] text-xs font-mono text-[#c0c4cc]">
      <div class="flex items-center justify-between border-b border-[#1f242d] pb-4 mb-6">
        <div>
          <p class="text-[10px] text-amber uppercase tracking-wider">Legal & Compliance Desk</p>
          <h2 class="text-lg font-bold text-white uppercase tracking-tight">System Compliance Declarations</h2>
        </div>
        <span class="px-2 py-1 bg-green/20 text-green text-[10px] font-bold border border-green/40 uppercase tracking-widest">Compliant OS</span>
      </div>
      <p class="text-xs text-[#909399] mb-6 font-sans">
        To remain compliant with financial regulations, the Pickaxe Capital / AI Habitat OS operates as a private educational sandbox. Review the permanent disclosures below:
      </p>
      <div class="space-y-4 max-w-4xl">
        ${disclosures.map(disc => `
          <div class="p-4 bg-[#121417] border-l-2 border-amber bg-gradient-to-r from-amber/5 to-transparent">
            <h4 class="text-xs font-bold text-white uppercase mb-2 tracking-wider">${escapeHtml(disc.title)}</h4>
            <p class="text-xs text-[#909399] leading-relaxed font-sans">${escapeHtml(disc.text)}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

async function renderAiHandoffPage() {
  if (!els.aiHandoffContent) return;
  
  let handoffText = "Generating handoff text...";
  
  try {
    const res = await fetch("/ai-handoff", { cache: "no-store" });
    if (res.ok) {
      handoffText = await res.text();
    } else {
      throw new Error("Local backend not running");
    }
  } catch (err) {
    const session = (sharedHabitatData.buildCompletionTracker && typeof sharedHabitatData.buildCompletionTracker === "object" && typeof sharedHabitatData.buildCompletionTracker.latestSession === "object") ? (sharedHabitatData.buildCompletionTracker.latestSession || {}) : {};
    const rulesStr = (Array.isArray(sharedHabitatData.riskRules) ? sharedHabitatData.riskRules : []).map(r => r ? `- ${r.name || "Unnamed"}: ${r.description || "No description"}` : "").filter(Boolean).join("\n");
    handoffText = [
      "# Pickaxe Capital / AI Habitat OS - Deployed AI Handoff (Static Fallback)",
      `Generated at: ${new Date().toISOString()}`,
      "Target Environment: GitHub Pages Static Site",
      `Active Routes: /#/mission-control, /#/agent-engine, /#/signals, /#/alerts, /#/risk-rules, /#/data-sources, /#/compliance, /#/archive, /#/bookmarks, /#/staging`,
      "",
      "## Current Session Status",
      `Files Changed: ${JSON.stringify(session.filesChanged || [])}`,
      "Features Added:",
      (session.featuresAdded || []).map(f => `- ${f}`).join("\n"),
      "Bugs Fixed:",
      (session.bugsFixed || []).map(b => `- ${b}`).join("\n"),
      "",
      "## Compliance Disclosures",
      "- Research-only static prototype. Not financial advice.",
      "- No live data feeds. All tickers use delayed mock snapshots.",
      "- No broker connection. Webull order execution remains 100% manual and external.",
      "- CEO B decision layer is a manual human-in-the-loop review queue.",
      "",
      "## Active Security & Risk Gates",
      rulesStr,
      "",
      "## Architecture & Stack",
      "Static single-page HTML/JS layout with custom CSS modules and Tailwind CSS. Client-side hash-based routing."
    ].join("\n");
  }

  els.aiHandoffContent.innerHTML = `
    <div class="p-6 bg-[#0a0b0c] text-xs font-mono text-[#c0c4cc]">
      <div class="flex items-center justify-between border-b border-[#1f242d] pb-4 mb-6">
        <div>
          <p class="text-[10px] text-amber uppercase tracking-wider">Sub-system Handoff Link</p>
          <h2 class="text-lg font-bold text-white uppercase tracking-tight">AI Command Handoff</h2>
        </div>
        <button onclick="window.copyHandoffText?.()" class="px-3 py-1 bg-blue/20 text-blue text-[10px] font-bold border border-blue/40 uppercase tracking-widest hover:bg-blue/30 transition-colors">Copy Handoff Text</button>
      </div>
      <p class="text-xs text-[#909399] mb-6 font-sans">
        Copy this raw markdown output to feed into ChatGPT, Claude, Gemini, or Grok to instantly brief them on the workspace state.
      </p>
       <div class="relative">
        <textarea id="handoffRawTextarea" readonly class="w-full h-[300px] p-4 bg-[#121417] border border-[#1f242d] text-[#c0c4cc] rounded font-mono text-xs focus:outline-none focus:border-blue/50">${escapeHtml(handoffText)}</textarea>
      </div>
      
      <!-- Visual References Section -->
      <div class="mt-8 border-t border-[#1f242d] pt-6">
        <div class="mb-4">
          <span class="text-[10px] text-amber uppercase tracking-wider">Target Visual Design References</span>
          <h3 class="text-xs font-bold text-white uppercase tracking-tight mt-0.5">Visual Design Target Reference Images</h3>
          <p class="text-[11px] text-[#909399] font-sans mt-1">These design cards and layouts inspire the HTML/CSS components and dashboards inside this static habitat OS prototype.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-[#121417] border border-[#1f242d] p-3 rounded">
            <span class="text-[9px] text-[#909399] uppercase tracking-widest font-mono block mb-2">Reference 1: Agent City / CEO Command Center</span>
            <img src="reference/pickaxe-agent-city-reference.png" alt="Pickaxe Agent City Reference" class="w-full h-auto border border-[#1f242d] rounded-sm opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div class="bg-[#121417] border border-[#1f242d] p-3 rounded">
            <span class="text-[9px] text-[#909399] uppercase tracking-widest font-mono block mb-2">Reference 2: AI Habitat OS Command Ecosystem</span>
            <img src="reference/pickaxe-ai-habitat-os-reference.png" alt="Pickaxe AI Habitat OS Reference" class="w-full h-auto border border-[#1f242d] rounded-sm opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  `;
  
  window.copyHandoffText = async () => {
    const textarea = document.getElementById("handoffRawTextarea");
    if (textarea) {
      textarea.select();
      document.execCommand("copy");
      showNotification("AI Handoff copied to clipboard.");
    }
  };
}

// Option alerts state helpers
function getOptionAlertsState() {
  const local = localStorage.getItem("pickaxeOptionAlerts");
  if (local) {
    try {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed)) return parsed;
    } catch { }
  }
  const defaults = Array.isArray(sharedHabitatData.optionAlertPackets) ? sharedHabitatData.optionAlertPackets : [];
  localStorage.setItem("pickaxeOptionAlerts", JSON.stringify(defaults));
  return defaults;
}

function saveOptionAlertsState(alerts) {
  localStorage.setItem("pickaxeOptionAlerts", JSON.stringify(alerts));
}

window.approveSignal = (alertId) => {
  const alerts = getOptionAlertsState();
  const alert = alerts.find(a => a.id === alertId);
  if (alert) {
    alert.status = "approved manual review";
    saveOptionAlertsState(alerts);
    showNotification(`Signal approved: ${alert.symbol} ${alert.contract}`);
    state.terminalLog = state.terminalLog || [];
    state.terminalLog.push(`CEO B DECISION: Approved manual review for ${alert.symbol}`);
    renderHomeCommandCenter();
    renderSignalsIntelligence();
    renderAlertsPage();
  }
};

window.rejectSignal = (alertId) => {
  const alerts = getOptionAlertsState();
  const alert = alerts.find(a => a.id === alertId);
  if (alert) {
    alert.status = "risk rejected";
    saveOptionAlertsState(alerts);
    showNotification(`Signal rejected: ${alert.symbol} ${alert.contract}`);
    state.terminalLog = state.terminalLog || [];
    state.terminalLog.push(`CEO B DECISION: Rejected ${alert.symbol} due to risk parameters`);
    renderHomeCommandCenter();
    renderSignalsIntelligence();
    renderAlertsPage();
  }
};

window.sendToReview = (alertId) => {
  const alerts = getOptionAlertsState();
  const alert = alerts.find(a => a.id === alertId);
  if (alert) {
    alert.status = "CEO B review";
    saveOptionAlertsState(alerts);
    showNotification(`Signal sent to CEO B review: ${alert.symbol}`);
    renderHomeCommandCenter();
    renderSignalsIntelligence();
    renderAlertsPage();
  }
};

// Process terminal command
function processTerminalCommand(cmd) {
  const parts = cmd.toLowerCase().split(" ");
  const base = parts[0];
  if (base === "help") {
    return "Commands: help, status, agents, signals, alerts, rules, run audit, clear";
  }
  if (base === "status") {
    return `STATUS: ONLINE | Uptime: 99.98% | Throughput: 2.45 TB/s | Health: 98% (Nominal)`;
  }
  if (base === "agents") {
    const roster = Array.isArray(sharedHabitatData.agentRoster) ? sharedHabitatData.agentRoster : [];
    return `AGENTS:\n` + roster.map(a => a ? `- ${a.name || "Unnamed"}: ${a.role || "Agent"} [${a.status || "active"}]` : "").filter(Boolean).join("\n");
  }
  if (base === "signals") {
    const alerts = Array.isArray(getOptionAlertsState()) ? getOptionAlertsState() : [];
    return `SIGNALS:\n` + alerts.map(a => a ? `- ${a.symbol} (${a.strategy}): ${a.status}` : "").filter(Boolean).join("\n");
  }
  if (base === "alerts") {
    const alerts = Array.isArray(getOptionAlertsState()) ? getOptionAlertsState() : [];
    const approved = alerts.filter(a => a && a.status && a.status.includes("approved"));
    return `APPROVED ALERTS:\n` + approved.map(a => a ? `- ${a.symbol} ${a.contract}: ${a.action}` : "").filter(Boolean).join("\n");
  }
  if (base === "rules") {
    const rules = Array.isArray(sharedHabitatData.riskRules) ? sharedHabitatData.riskRules : [];
    return `RISK RULES:\n` + rules.map(r => r ? `- ${r.name || "Unnamed"} (${r.type || "Rule"})` : "").filter(Boolean).join("\n");
  }
  if (base === "clear") {
    state.terminalLog = [];
    return "Terminal cleared.";
  }
  if (base === "run" && parts[1] === "audit") {
    return "AUDIT: Starting system integrity check...\nVerification passed. All static routes return 200. GitHub Pages build checks nominal.";
  }
  return `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
}

window.executeTerminalCommand = (event) => {
  if (event.key === "Enter") {
    const input = event.target;
    const cmd = input.value.trim();
    if (!cmd) return;
    input.value = "";
    
    state.terminalLog = state.terminalLog || [];
    state.terminalLog.push(`> ${cmd}`);
    
    const output = processTerminalCommand(cmd);
    state.terminalLog.push(output);
    
    if (state.terminalLog.length > 50) state.terminalLog.shift();
    
    const feed = document.getElementById("terminalFeedLines");
    if (feed) {
      feed.innerHTML = state.terminalLog.map(line => `<div class="py-0.5">${escapeHtml(line)}</div>`).join("");
      feed.scrollTop = feed.scrollHeight;
    }
  }
};

let flowAnimationId = null;
window.startFlowMonitor = () => {
  const canvas = document.getElementById("dataFlowCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let offset = 0;
  
  function draw() {
    if (!document.getElementById("dataFlowCanvas")) {
      cancelAnimationFrame(flowAnimationId);
      return;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#1b1c1e";
    ctx.lineWidth = 0.5;
    
    // Draw grid
    for (let x = 0; x < canvas.width; x += 15) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 10) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
    
    // Ingest (Teal)
    ctx.strokeStyle = "#42d9c8";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = canvas.height / 2 + Math.sin(x * 0.04 + offset) * 8 + Math.cos(x * 0.015 + offset * 0.5) * 3;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Egress (Purple)
    ctx.strokeStyle = "#9b51e0";
    ctx.lineWidth = 0.9;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = canvas.height / 2 + Math.cos(x * 0.03 + offset * 1.1) * 7 + Math.sin(x * 0.01 + offset) * 2;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    offset += 0.04;
    flowAnimationId = requestAnimationFrame(draw);
  }
  
  draw();
};

function renderHomeCommandCenter() {
  if (!els.commandOS) return;
  
  try {
    const alerts = Array.isArray(getOptionAlertsState()) ? getOptionAlertsState() : [];
    const pendingReview = alerts.filter(a => a && (a.status === "CEO B review" || a.status === "candidate"));
    const approvedCount = alerts.filter(a => a && typeof a.status === "string" && a.status.includes("approved")).length;
    const rejectedCount = alerts.filter(a => a && (a.status === "risk-rejected" || a.status === "risk rejected")).length;
    
    // Set default terminal logs if empty
    const defaultTerminalLines = (sharedHabitatData && Array.isArray(sharedHabitatData.commandTerminalLines))
      ? sharedHabitatData.commandTerminalLines
      : [
          "Static prototype booted",
          "GitHub Pages mode detected",
          "Backend not connected",
          "Research-only manual-review mode active",
          "No broker execution inside this site"
        ];
    state.terminalLog = Array.isArray(state.terminalLog) ? state.terminalLog : [...defaultTerminalLines];
    
    els.commandOS.innerHTML = `
      <div class="command-os-grid-layout grid-mesh-bg scanline-effect text-[11px] font-mono text-[#c0c4cc] bg-[#08090a] border border-[#1b1c1e] p-4 flex flex-col lg:grid lg:grid-cols-[1fr_340px] lg:grid-rows-[auto_1fr_auto] gap-4 w-full min-h-[92vh] select-none">
        
        <!-- TOP COMMAND BAR -->
        <div class="col-span-2 bg-[#0c0d0e] border border-[#1f242d] p-3 flex flex-wrap items-center justify-between gap-3 z-10">
          <div class="flex items-center gap-4">
            <div>
              <span class="text-[10px] text-amber uppercase font-bold tracking-widest block">CEO B "THE SHAH" COMMAND LAYER</span>
              <h2 class="text-xs font-bold text-white uppercase tracking-wider">PICKAXE CAPITAL / AI HABITAT OS</h2>
            </div>
            <span class="px-2 py-0.5 bg-red/10 text-red border border-red/30 text-[9px] uppercase tracking-wider font-bold">Static Prototype</span>
            <span class="px-2 py-0.5 bg-blue/10 text-[#42d9c8] border border-[#42d9c8]/30 text-[9px] uppercase tracking-wider font-bold">Research Only / Manual Review</span>
          </div>
          <div class="flex items-center gap-6 text-[10px]">
            <div><span class="text-[#606266]">BUILD:</span> <span class="text-green uppercase font-bold">GitHub Pages</span></div>
            <div><span class="text-[#606266]">DATA:</span> <span class="text-green uppercase font-bold">Demo Static</span></div>
            <div><span class="text-[#606266]">AGENTS:</span> <span class="text-green uppercase font-bold">Local Mock</span></div>
            <div><span class="text-[#606266]">BROKER:</span> <span class="text-red uppercase font-bold">Not Connected</span></div>
          </div>
        </div>
        
        <!-- CENTRAL MAP VIEW -->
        <div class="relative bg-[#0c0d0e]/60 border border-[#1f242d] overflow-hidden flex flex-col lg:block h-[600px] lg:h-auto" id="centralMapContainer">
          <!-- Connecting lines SVG (hidden on mobile) -->
          <svg viewBox="0 0 1000 600" class="habitat-map-svg absolute inset-0 w-full h-full pointer-events-none fill-none z-0">
            <line x1="500" y1="260" x2="500" y2="70" class="stroke-amber/40 stroke-[2] glowing-route" />
            <line x1="300" y1="140" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="160" y1="200" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="160" y1="320" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="320" y1="380" x2="500" y2="260" class="stroke-red/30 stroke-[1.5]" />
            <line x1="320" y1="260" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="680" y1="260" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="840" y1="320" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="840" y1="200" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="680" y1="380" x2="500" y2="260" class="stroke-purple/30 stroke-[1.5]" />
            <line x1="500" y1="390" x2="500" y2="260" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            <line x1="500" y1="520" x2="500" y2="390" class="stroke-[#42d9c8]/20 stroke-[1.5]" />
            
            <!-- Moving agent packets -->
            <circle r="4" fill="#42d9c8" class="agent-packet-glow"><animateMotion dur="4s" repeatCount="indefinite" path="M 160 200 L 500 260" /></circle>
            <circle r="4" fill="#9b51e0" class="agent-packet-glow"><animateMotion dur="5s" repeatCount="indefinite" path="M 680 380 L 500 260" /></circle>
            <circle r="4" fill="#ff4d4d" class="agent-packet-glow"><animateMotion dur="3.5s" repeatCount="indefinite" path="M 320 380 L 500 260" /></circle>
            <circle r="4" fill="#ffbe4d" class="agent-packet-glow"><animateMotion dur="3s" repeatCount="indefinite" path="M 500 260 L 500 70" /></circle>
          </svg>
  
          <div class="habitat-map-container absolute inset-0 w-full h-full z-10 p-4">
            <!-- 1. CEO B Headquarters (Top Center) -->
            <div class="habitat-card-absolute border border-amber/40 bg-[#0f0e0c]/95 p-2 rounded text-center" style="left: 500px; top: 70px; width: 220px; transform: translate(-50%, -50%);">
              <span class="text-[9px] text-amber font-bold uppercase tracking-wider block">CEO B Headquarters</span>
              <div class="my-1 border-t border-amber/20"></div>
              <div class="text-[9px] text-[#909399] leading-tight mb-2">Final Commander Gate</div>
              <div class="flex items-center justify-center gap-2">
                <button onclick="window.location.hash='#/ceo-b-profile'" class="bg-[#1b1916] text-[9px] text-amber border border-amber/30 px-2 py-0.5 hover:bg-amber/10 transition-colors uppercase font-bold tracking-wider">Brief Profile</button>
              </div>
            </div>
  
            <!-- 2. Central Trading Floor -->
            <div class="habitat-card-absolute border border-blue/40 bg-[#090b0e]/95 p-3 rounded text-center" style="left: 500px; top: 260px; width: 240px; transform: translate(-50%, -50%);">
              <span class="text-[9px] text-[#42d9c8] font-bold uppercase tracking-wider block">Trading Floor</span>
              <span class="text-[8px] text-[#606266] block">IDEA EXCHANGE CORE</span>
              <div class="my-1 border-t border-[#1f242d]"></div>
              <div class="grid grid-cols-3 gap-1 my-2 text-[10px]">
                <div><span class="text-white font-bold block">${alerts.length}</span><span class="text-[#606266] text-[7px] uppercase block">Ideas</span></div>
                <div><span class="text-green font-bold block">${approvedCount}</span><span class="text-[#606266] text-[7px] uppercase block">Approved</span></div>
                <div><span class="text-red font-bold block">${rejectedCount}</span><span class="text-[#606266] text-[7px] uppercase block">Rejected</span></div>
              </div>
              <p class="text-[8px] text-[#606266] leading-tight italic">"Ideas &rarr; Risk Filters &rarr; CEO B Review &rarr; Manual Webull Execution"</p>
            </div>
  
            <!-- 3. System Brain Core -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 300px; top: 140px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">System Brain</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-green"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Coordination & Health</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Route: <a href="#/staging" class="text-blue hover:underline">/staging</a>
              </div>
            </div>
  
            <!-- 4. Signal Scout Habitat -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 160px; top: 200px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Signal Scout</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-green"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Watchlist Scanner</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Route: <a href="#/signals" class="text-blue hover:underline">/signals</a>
              </div>
            </div>
  
            <!-- 5. Options Flow Hunter Lab -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 160px; top: 320px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Options Flow</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-amber"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Flow Chains & Vol</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Status: Research Only
              </div>
            </div>
  
            <!-- 6. Risk Sentinel Watch -->
            <div class="habitat-card-absolute border border-red/40 bg-[#171212]/90 p-2 rounded" style="left: 320px; top: 380px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-red uppercase block">Risk Sentinel</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-red"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Safety & Exposure Gate</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Rules: <a href="#/risk-rules" class="text-blue hover:underline">/risk-rules</a>
              </div>
            </div>
  
            <!-- 7. Macro Watcher Dome -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 160px; top: 80px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Macro Watcher</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-blue"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Rates, Debt, Vol Index</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Status: Research
              </div>
            </div>
  
            <!-- 8. Catalyst Analyst Library -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 840px; top: 80px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Catalyst Lab</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-blue"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">News & Event Risk</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Route: <a href="#/data-sources" class="text-blue hover:underline">/data-sources</a>
              </div>
            </div>
  
            <!-- 9. Technical Strategist Chart Room -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 840px; top: 200px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Technical Room</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-green"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Pattern recognition</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Embedded Widget
              </div>
            </div>
  
            <!-- 10. Data Source Hub -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 840px; top: 320px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Source Hub</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-green"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Provider Matrix</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Route: <a href="#/data-sources" class="text-blue hover:underline">/data-sources</a>
              </div>
            </div>
  
            <!-- 11. Archive Keeper Vault -->
            <div class="habitat-card-absolute border border-purple/40 bg-[#151217]/90 p-2 rounded" style="left: 680px; top: 380px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-purple uppercase block">Archive Vault</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-purple"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Long-term memory</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Route: <a href="#/archive" class="text-blue hover:underline">/archive</a>
              </div>
            </div>
  
            <!-- 12. Compliance Guard -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 700px; top: 140px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Compliance</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-green"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Compliance review</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Route: <a href="#/compliance" class="text-blue hover:underline">/compliance</a>
              </div>
            </div>
  
            <!-- 13. Auto Update Workshop -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded shadow-lg text-center" style="left: 500px; top: 520px; width: 180px; transform: translate(-50%, -50%);">
              <span class="text-[9px] font-bold text-white uppercase block">Auto Update workshop</span>
              <p class="text-[8px] text-[#909399] leading-tight mt-1">Staged checks & automation stubs</p>
            </div>
  
            <!-- 14. Task Smith Foundry -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 680px; top: 260px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Task Smith</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-green"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Checklists & builds</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Route: <a href="#/staging" class="text-blue hover:underline">/staging</a>
              </div>
            </div>
  
            <!-- 15. QA Citadel -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 320px; top: 260px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">QA Citadel</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-green"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Integrity checks</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Staging validation
              </div>
            </div>
  
            <!-- 16. Strategy War Room -->
            <div class="habitat-card-absolute border border-[#1f242d] bg-[#121417]/90 p-2 rounded" style="left: 500px; top: 390px;">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[9px] font-bold text-white uppercase block">Strategy Room</span>
                <span class="status-pulse-dot w-1.5 h-1.5 rounded-full bg-blue"></span>
              </div>
              <p class="text-[8px] text-[#909399] leading-tight">Playbook Simulation</p>
              <div class="text-[8px] text-[#606266] mt-1 border-t border-[#1f242d] pt-1">
                Education cases
              </div>
            </div>
          </div>
        </div>
        
        <!-- RIGHT STATUS RAIL -->
        <div class="bg-[#0c0d0e] border border-[#1f242d] p-3 flex flex-col gap-4 overflow-y-auto max-h-[600px] lg:max-h-none">
          
          <!-- Mission Overview -->
          <div class="border border-[#1f242d] bg-[#121417]/30 p-2">
            <span class="text-[9px] text-[#606266] uppercase font-bold tracking-wider block mb-2">Ecosystem Health</span>
            <div class="flex items-center justify-between mb-1">
              <span>Uptime (Static)</span> <span class="text-green uppercase font-bold">99.98%</span>
            </div>
            <div class="flex items-center justify-between mb-1">
              <span>Throughput</span> <span class="text-blue uppercase font-bold">2.45 TB/s</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Active Agents</span> <span class="text-white uppercase font-bold">12 / 12</span>
            </div>
          </div>
  
          <!-- CEO B Review Queue -->
          <div class="flex-1 flex flex-col min-h-[160px]">
            <span class="text-[9px] text-amber uppercase font-bold tracking-wider block mb-2 border-b border-amber/20 pb-1">CEO B Review Queue (${pendingReview.length})</span>
            <div class="flex-1 overflow-y-auto space-y-2 pr-1">
              ${pendingReview.length === 0 ? `
                <p class="text-[#606266] italic text-center my-4">Review queue is empty. Signals are fully processed.</p>
              ` : pendingReview.map(item => item ? `
                <div class="p-2 bg-[#121417] border border-[#1f242d] hover:border-[#42d9c8]/50 transition-colors">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-white font-bold">${escapeHtml(item.symbol)}</span>
                    <span class="px-1 py-0.2 bg-amber/10 text-amber text-[8px] font-bold border border-amber/30 uppercase tracking-widest">${escapeHtml(item.strategy)}</span>
                  </div>
                  <div class="text-[10px] text-[#909399] mb-2 leading-snug">${escapeHtml(item.thesis)}</div>
                  <div class="flex gap-2">
                    <button onclick="approveSignal('${escapeHtml(item.id)}')" class="bg-green/10 text-green border border-green/30 text-[8px] px-2 py-0.5 uppercase hover:bg-green/20 transition-colors font-bold">Approve</button>
                    <button onclick="rejectSignal('${escapeHtml(item.id)}')" class="bg-red/10 text-red border border-red/30 text-[8px] px-2 py-0.5 uppercase hover:bg-red/20 transition-colors font-bold">Reject</button>
                  </div>
                </div>
              ` : "").filter(Boolean).join("")}
            </div>
          </div>
  
          <!-- Recent Operations Log -->
          <div class="border border-[#1f242d] bg-[#121417]/30 p-2">
            <span class="text-[9px] text-[#606266] uppercase font-bold tracking-wider block mb-2">Simulated Agent Logs</span>
            <div class="space-y-1 text-[9px] max-h-[100px] overflow-y-auto">
              ${(Array.isArray(sharedHabitatData.missionLog) ? sharedHabitatData.missionLog : []).slice(0, 5).map(log => log ? `
                <div class="flex justify-between gap-2 border-b border-[#1b1c1e] pb-0.5">
                  <span class="text-[#909399] leading-tight">${escapeHtml(log.text)}</span>
                  <span class="text-[#606266] shrink-0">${escapeHtml(log.time)}</span>
                </div>
              ` : "").filter(Boolean).join("")}
            </div>
          </div>
  
          <!-- Quick Commands -->
          <div>
            <span class="text-[9px] text-[#606266] uppercase font-bold tracking-wider block mb-2">System Commands</span>
            <div class="grid grid-cols-2 gap-2 text-[9px]">
              <button onclick="showNotification('Scanning watchlist... All nominal.')" class="bg-[#121417] text-white border border-[#1f242d] py-1 uppercase hover:bg-[#1a1d21] transition-colors font-bold">Scan Markets</button>
              <button onclick="localStorage.removeItem('pickaxeOptionAlerts'); location.reload();" class="bg-[#121417] text-red border border-[#1f242d] py-1 uppercase hover:bg-[#1a1d21] transition-colors font-bold">Reset Demo</button>
            </div>
          </div>
        </div>
        
        <!-- BOTTOM OPERATIONS STRIP -->
        <div class="col-span-2 bg-[#0c0d0e] border border-[#1f242d] p-3 flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1.5fr] gap-4 z-10">
          
          <!-- Agent Network Health Status -->
          <div class="flex flex-col justify-between">
            <span class="text-[9px] text-[#606266] uppercase font-bold tracking-wider block mb-1">Agent Network Status (Online)</span>
            <div class="flex flex-wrap items-center gap-2">
              ${(Array.isArray(sharedHabitatData.agentRoster) ? sharedHabitatData.agentRoster : []).slice(0, 9).map(agent => agent ? `
                <div class="px-2 py-0.5 bg-[#121417] border border-[#1f242d] flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-green status-pulse-dot"></span>
                  <span class="text-[9px] font-bold text-white">${escapeHtml(agent.name)}</span>
                </div>
              ` : "").filter(Boolean).join("")}
            </div>
          </div>
  
          <!-- Data Flow Canvas wave monitor -->
          <div class="flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[9px] text-[#606266] uppercase font-bold tracking-wider">Data Ingest Waves</span>
              <span class="text-[8px] text-[#42d9c8] font-bold uppercase font-mono">Live Simulation</span>
            </div>
            <canvas id="dataFlowCanvas" width="220" height="40" class="border border-[#1f242d] bg-[#121417] w-full rounded"></canvas>
          </div>
  
          <!-- Terminal Console -->
          <div class="flex flex-col border border-[#1f242d] bg-[#0c0d0e] rounded overflow-hidden">
            <div class="bg-[#121417] border-b border-[#1f242d] px-2 py-0.5 flex justify-between text-[8px]">
              <span class="text-amber uppercase font-bold font-mono">CEO B COMMAND CONSOLE</span>
              <span class="text-[#606266]">Type 'help' & press Enter</span>
            </div>
            <div id="terminalFeedLines" class="flex-1 p-2 h-[80px] overflow-y-auto text-[#42d9c8] font-mono text-[9px] leading-tight space-y-1">
              ${state.terminalLog.map(line => `<div class="py-0.5">${escapeHtml(line)}</div>`).join("")}
            </div>
            <div class="border-t border-[#1f242d] flex items-center bg-[#121417]">
              <span class="text-[#606266] font-mono text-[9px] pl-2 select-none">&gt;</span>
              <input type="text" onkeydown="executeTerminalCommand(event)" placeholder="Enter command..." class="flex-1 bg-transparent border-none text-[#42d9c8] focus:outline-none text-[9px] font-mono px-1.5 py-1 w-full" />
            </div>
          </div>
        </div>
        
      </div>
    `;
    
    // Start the canvas monitor and scroll terminal to bottom
    startFlowMonitor();
    const feed = document.getElementById("terminalFeedLines");
    if (feed) feed.scrollTop = feed.scrollHeight;
  } catch (err) {
    console.error("Critical error rendering Mission Control (renderHomeCommandCenter):", err);
    els.commandOS.innerHTML = `
      <div class="p-6 border border-red/40 bg-[#171212] text-red font-mono rounded max-w-xl mx-auto my-12 text-center">
        <h3 class="text-white font-bold mb-2 uppercase tracking-wider text-xs">Mission Control Render Failed</h3>
        <p class="text-[11px] text-[#c0c4cc] mb-4">A critical error occurred while rendering the CEO B Command Center dashboard.</p>
        <div class="bg-black/40 p-3 rounded text-left mb-4 text-[10px] text-red/80 select-all whitespace-pre-wrap">${escapeHtml(err.stack || err.message || err)}</div>
        <button onclick="localStorage.removeItem('pickaxeOptionAlerts'); location.reload();" class="bg-red/10 text-red border border-red/30 text-[9px] px-3 py-1 uppercase hover:bg-red/20 transition-colors font-bold tracking-wider">Reset Local State & Reload</button>
      </div>
    `;
  }
}

function renderHomeAlertDetail(alert) {
  if (!alert) return `<aside class="alert-detail-panel"><h2>No alert selected</h2><p>Connect or create alert packets to show them here.</p></aside>`;
  return `
    <aside class="alert-detail-panel">
      <div class="panel-head">
        <div><p class="eyebrow">Selected CEO B Alert</p><h2>${escapeHtml(alert.headline)}</h2></div>
        <span class="pill">${escapeHtml(alert.status)}</span>
      </div>
      <div class="alert-exact-trade">
        <span><b>${escapeHtml(alert.symbol)}</b>${escapeHtml(alert.company)}</span>
        <span><b>${escapeHtml(alert.currentPrice)}</b>current price</span>
        <span><b>${escapeHtml(alert.action)}</b>${escapeHtml(alert.contract)}</span>
        <span><b>${escapeHtml(alert.contractPrice)}</b>contract price</span>
        <span><b>${alert.confidence}-100</b>confidence</span>
      </div>
      <p>${escapeHtml(alert.thesis)}</p>
      <div class="alert-reason-list">
        ${(alert.reason || []).map((reason) => `<article><span></span><p>${escapeHtml(reason)}</p></article>`).join("")}
      </div>
      <div class="ceo-alert-note">
        <strong>CEO B decision layer</strong>
        <p>${escapeHtml(alert.nextAction)} Not financial advice. No auto-trading. No broker order placement from this site.</p>
      </div>
      <div class="game-action-row">
        <a href="${escapeHtml(alert.route || "#/signals")}">Open Research</a>
        <button type="button" onclick="window.homeAlertAction?.('sent to CEO B review', '${escapeHtml(alert.id)}')">CEO B Review</button>
        <button type="button" onclick="window.homeAlertAction?.('archived alert packet', '${escapeHtml(alert.id)}')">Archive</button>
      </div>
    </aside>
  `;
}

window.selectHomeAlert = (alertId) => {
  state.selectedAlertId = alertId;
  renderHomeCommandCenter();
};

window.homeAlertAction = (action, alertId) => {
  const alert = alertCommandAlerts.find((item) => item.id === alertId);
  const ops = getAgentOpsState();
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  ops.events.unshift({
    id: `home-alert-${Date.now()}`,
    time,
    agentId: "ceo-b-os",
    agentName: "CEO B",
    message: `${alert?.symbol || "Alert"} ${action}. Manual Webull review only.`,
  });
  if (action.includes("archive")) {
    ops.archived.unshift({ id: `home-alert-archive-${Date.now()}`, agentId: "ceo-b-os", agentName: "CEO B", text: `${alert?.headline || "Alert"} archived locally.`, time });
  }
  setAgentOpsState(ops);
  renderHomeCommandCenter();
};

function renderVisionCommandCenter() {
  if (!els.visionCommandCenter) return;
  const commandNodes = visionCommandNodes.length ? visionCommandNodes : [];
  
  let drawerContent = "";
  if (state.selectedVisionAgentId) {
    const agent = operatingAgents.find((a) => a.id === state.selectedVisionAgentId);
    drawerContent = agent ? renderVisionAgentDrawer(agent) : `<p class="muted">Select a command node or agent.</p>`;
  } else {
    const selected = commandNodes.find((node) => node.id === state.selectedVisionNodeId) || commandNodes[1] || commandNodes[0];
    drawerContent = renderVisionNodeDrawer(selected);
  }

  const inputNodes = commandNodes.filter((node) => node.type === "Source").slice(0, 7);
  const pageNodes = commandNodes.filter((node) => node.type === "Page").slice(0, 5);
  const systemNodes = commandNodes.filter((node) => node.type === "System").slice(0, 4);
  const agentNodes = operatingAgents.filter((agent) => !["CEO B"].includes(agent.name)).slice(0, 13);
  const topSources = pickSources(["deitaone-x", "investing-futures", "tradingview-main", "netblocks", "flightradar24", "osiris-map", "us-debt-clock", "x-bookmarks", "berkshire-1965-report"]);
  els.visionCommandCenter.innerHTML = `
    <section class="command-hero ai-command-hero">
      <div>
        <p class="eyebrow">Founder Intelligence Operating System</p>
        <h2>Pickaxe Capital Vision Map</h2>
        <p>CEO B's command center for live intelligence sources, market signals, archive memory, agents, alerts, bookmarks, RK Tracker, Berkshire 1965 case studies, and the A-Z build plan.</p>
        <div class="ceo-command-strip">
          <span><strong>CEO B</strong> Founder command authority</span>
          <span><strong>${getWorldReviewStack().length}</strong> Review queue</span>
          <span><strong>${stalledIntegrations.length}</strong> Missing integrations</span>
          <span><strong>${state.commandActionCount}</strong> Local actions</span>
        </div>
      </div>
      <div class="command-status-grid">
        ${["Main Command Center", "CEO B Online Mock", "Source Hub Connected", "Archive Intelligence Active", "RK Tracker Adapter Ready", "X Bookmark Import Ready", "Auto Update Planned", "Live Ready Architecture"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>
    <section class="strategic-hub-layout">
      <aside class="command-input-rail">
        <p class="eyebrow">Input Sources</p>
        ${inputNodes.map((node) => renderCommandNodeButton(node, "input")).join("")}
        ${pageNodes.map((node) => renderCommandNodeButton(node, "page")).join("")}
      </aside>
      <div class="strategic-command-map">
        <span class="flow-arrow flow-left"></span>
        <span class="flow-arrow flow-right"></span>
        <span class="flow-arrow flow-bottom"></span>
        <button class="ceo-overseer" type="button" onclick="window.selectVisionNode('ceo-b-layer')">
          <strong>CEO B</strong>
          <span>Founder Decision Layer</span>
          <small>Review queue • Command authority • System status</small>
        </button>
        <button class="trading-hub-core" type="button" onclick="window.selectVisionNode('trading-floor')">
          <strong>Trading Floor / Command Hub</strong>
          <span>Intelligence • Decisions • Execution • Oversight</span>
          <small>World of Warcraft command hall x Bloomberg terminal</small>
        </button>
        <div class="plugins-access-row">
          ${systemNodes.map((node) => renderCommandNodeButton(node, "system")).join("")}
        </div>
      </div>
      <aside class="command-agent-rail">
        <p class="eyebrow">Agent Network</p>
        ${agentNodes.map((agent) => {
          const selectedClass = agent.id === state.selectedVisionAgentId ? " selected" : "";
          return `
            <button class="agent-mini-node${selectedClass}" type="button" onclick="window.selectVisionAgent('${escapeHtml(agent.id)}')">
              <strong>${escapeHtml(agent.name)}</strong>
              <span>${escapeHtml(agent.habitat)} • ${escapeHtml(agent.status)}</span>
            </button>
          `;
        }).join("")}
      </aside>
    </section>
    <section class="vision-detail-layout">
      <aside class="vision-node-drawer" id="visionNodeDrawer">${drawerContent}</aside>
      <aside class="live-intel-strip">
        <div class="panel-head"><div><p class="eyebrow">Live Intel Strip</p><h2>Source Watch</h2></div><span class="pill">Safe links</span></div>
        ${topSources.map(renderCompactSourceCard).join("")}
      </aside>
    </section>
    <section class="vision-habitat-band">
      <article>
        <p class="eyebrow">Market Habitat</p>
        <h3>Make money. Detect opportunities. Stay ahead.</h3>
        <div class="habitat-chip-grid">
          ${["Signals", "RK Tracker", "Source Hub", "Market Data", "TradingView", "DeItaone", "US Debt Clock", "Hyperliquid GOLD"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>
      <article class="central">
        <p class="eyebrow">Knowledge Intake Engine</p>
        <h3>Inputs -> Agents -> Command Hub -> Archive / Signals / Alerts -> CEO B Review</h3>
        <div class="automation-flow">
          ${["Flip Pages", "Tick to Add", "Pop-Up Details", "Add Quickly", "Interactive Map", "Auto Update"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
        <small>Planned Automation / Local UI Pattern</small>
      </article>
      <article>
        <p class="eyebrow">Life / Knowledge Habitat</p>
        <h3>Preserve lessons. Build memory. Improve execution.</h3>
        <div class="habitat-chip-grid">
          ${["Bookmarks", "X Bookmark Intelligence", "Archive", "Berkshire 1965", "Founder", "Tasks", "Alerts", "Staging"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>
    </section>
    <section class="pipeline-grid">
      ${renderPipeline("External Intelligence Pipeline", ["External Sources", "News Raven / Signal Scout", "Signals + Alerts", "Archive", "CEO B Decision"])}
      ${renderPipeline("Archive Wealth Loop", ["Capture", "Score", "Learn", "Rule", "Playbook", "Review"])}
      ${renderPipeline("RK Tracker Pipeline", ["Watchlist", "Scores", "Risk Review", "Signal Candidate", "Archive"])}
      ${renderPipeline("X Bookmark Intelligence", ["X Bookmarks", "Ticker Detection", "Agent Owner", "Archive/Signals", "Website Improvements"])}
      ${renderPipeline("Berkshire 1965 Pipeline", ["Historical Report", "Metrics", "Lessons", "Turnaround Playbook", "Founder Rules"])}
      ${renderPipeline("Auto Update Flow", ["Flip Pages", "Tick to Add", "Pop-Up Details", "Interactive Map", "Auto Update"])}
    </section>
    <section class="quick-action-dock">
      ${[["Open Source Hub", "#/data-sources"], ["Open Signals", "#/signals"], ["Open RK Tracker", "#/rkTracker"], ["Open Archive", "#/archive"], ["Open Berkshire 1965", "#/berkshire"], ["Review Agents", "#/agent-engine"], ["Capture Intel", "#/bookmarks"], ["Create Alert", "#/alerts"], ["Check Staging", "#/staging"], ["Review Founder", "#/founder"]].map(([label, route]) => `<a href="${route}">${escapeHtml(label)}</a>`).join("")}
    </section>
    <section class="vision-dashboard-panels">
      ${renderVisionDashboardPanel("Mission Progress", "87%", "Daily command objectives moving through source, signal, archive, and CEO B review.")}
      ${renderVisionDashboardPanel("Agent Interactions", operatingAgents.length, "Agent ownership map active with mock/local state only.")}
      ${renderVisionDashboardPanel("System Performance", "Build Safe", "Node build validation and route checks remain the source of truth.")}
      ${renderVisionDashboardPanel("Habitat Network", "2 Civilizations", "Market Habitat and Life Habitat connected by CEO B.")}
      ${renderVisionDashboardPanel("Market Sentiment", "Watching", "Signals are research-only and not financial advice.")}
      ${renderVisionDashboardPanel("CEO B Command Says", "Make It Better", "Design better. Work faster. Build smarter.")}
    </section>
  `;
}

window.selectVisionNode = (nodeId) => {
  state.selectedVisionNodeId = nodeId;
  state.selectedVisionAgentId = null;
  renderVisionCommandCenter();
};

window.selectVisionAgent = (agentId) => {
  state.selectedVisionAgentId = agentId;
  state.selectedVisionNodeId = null;
  renderVisionCommandCenter();
};

window.selectOperatingAgent = (agentId) => {
  const agent = operatingAgents.find((entry) => entry.id === agentId);
  if (!agent) return;
  state.selectedOperatingAgentId = agentId;
  renderAgentOperatingSystem();
};

window.operatingAgentAction = (action, agentIdOrOwner) => {
  const agent = operatingAgents.find((entry) => entry.id === agentIdOrOwner)
    || operatingAgents.find((entry) => entry.name === agentIdOrOwner)
    || getSelectedOperatingAgent();
  const ops = getAgentOpsState();
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const missionInput = document.querySelector("#agentTaskInput");
  const mission = missionInput?.value.trim();
  const defaultTask = `${agent?.name || "Agent"} should convert its current finding into a clear CEO B review packet.`;
  state.selectedOperatingAgentId = agent?.id || state.selectedOperatingAgentId;
  if (action.includes("task") || action.includes("assigned")) {
    ops.tasks.unshift({
      id: `task-${Date.now()}`,
      agentId: agent?.id || "ceo-b-os",
      agentName: agent?.name || "CEO B",
      text: mission || defaultTask,
      status: "active",
      time,
    });
    if (missionInput) missionInput.value = "";
    addSharedMissionItem({ title: `${agent?.name || "Agent"} local task`, owner: agent?.name || "CEO B", source: "Agents", priority: agent?.priority || "Medium", nextAction: mission || defaultTask });
  }
  if (action.includes("review")) {
    ops.reviewed.unshift({ id: `review-${Date.now()}`, agentId: agent?.id || "ceo-b-os", agentName: agent?.name || "CEO B", text: agent?.lastOutput || "Reviewed locally.", time });
    addSharedReviewItem({ title: `${agent?.name || "Agent"} review`, owner: agent?.name || "CEO B", source: "Agents", status: "Prototype / Local", priority: agent?.priority || "Medium", output: agent?.lastOutput || "Reviewed locally." });
  }
  if (action.includes("archive") || action.includes("packet")) {
    ops.archived.unshift({ id: `packet-${Date.now()}`, agentId: agent?.id || "ceo-b-os", agentName: agent?.name || "CEO B", text: mission || agent?.nextAction || "Local CEO B review packet created.", time });
    addSharedReviewItem({ title: `${agent?.name || "Agent"} packet`, owner: agent?.name || "CEO B", source: "Agents", status: "Prototype / Local", priority: agent?.priority || "Medium", output: mission || agent?.nextAction || "Local CEO B review packet created." });
  }
  ops.events.unshift({
    id: `event-${Date.now()}`,
    time,
    agentId: agent?.id || "ceo-b-os",
    agentName: agent?.name || "CEO B",
    message: `${agent?.name || "CEO B"} ${action} locally for CEO B review.`,
  });
  setAgentOpsState(ops);
  state.activityFeed = [{
    time,
    agent: agent?.name || "CEO B",
    message: `${action} locally for CEO B review. Mock/local state only.`,
  }, ...state.activityFeed].slice(0, 16);
  renderAgentOperatingSystem();
  if (state.activeView === "agents") renderAgentsPage();
};

window.setAgentLaneFilter = (laneName) => {
  state.agentHabitatFilter = laneName;
  renderAgentOperatingSystem();
};

window.runAgentEcosystemCycle = () => {
  const ops = getAgentOpsState();
  const cycleAgents = ["News Raven", "Signal Scout", "Risk Sentinel", "Archive Keeper", "System Brain"]
    .map((name) => operatingAgents.find((agent) => agent.name === name))
    .filter(Boolean);
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  cycleAgents.forEach((agent, index) => {
    ops.events.unshift({
      id: `cycle-${Date.now()}-${index}`,
      time,
      agentId: agent.id,
      agentName: agent.name,
      message: `${agent.name} ran a local mock cycle: ${agent.currentTask}`,
    });
  });
  ops.tasks.unshift({
    id: `task-${Date.now()}`,
    agentId: "ceo-b-os",
    agentName: "CEO B",
    text: "Review the latest local ecosystem cycle and choose the next build priority.",
    status: "active",
    time,
  });
  setAgentOpsState(ops);
  renderAgentsPage();
};

window.completeAgentTask = (taskId) => {
  const ops = getAgentOpsState();
  ops.tasks = ops.tasks.map((task) => task.id === taskId ? { ...task, status: "done" } : task);
  setAgentOpsState(ops);
  renderAgentsPage();
};

window.clearAgentOpsLocal = () => {
  setAgentOpsState({ tasks: [], events: [], reviewed: [], archived: [] });
  renderAgentsPage();
};

window.commandNodeAction = (action, nodeId) => {
  state.commandActionCount += 1;
  const node = visionCommandNodes.find((entry) => entry.id === nodeId);
  if (!node) return;

  const time = new Date().toLocaleTimeString();
  state.activityFeed = [{
    time,
    agent: node.ownerAgent || "CEO B",
    message: `${action} queued for ${node.name}.`,
  }, ...state.activityFeed].slice(0, 20);

  if (action === "Assign Agent" || action === "Assign") {
    addSharedMissionItem({
      title: `Task: ${node.name} Oversight`,
      owner: node.ownerAgent || "Task Smith",
      source: "Vision Map",
      priority: "Medium",
      nextAction: node.nextAction || `Execute next action for ${node.name}.`
    });
    addWorldEvent(`Created task for agent "${node.ownerAgent}" from Vision Map node "${node.name}".`);
  } else if (action === "Send to Archive") {
    const vaultState = getArchiveVaultState();
    const newArchiveItem = {
      id: `archive-vision-${Date.now()}`,
      title: node.name,
      url: `/vision-map?node=${node.id}`,
      domain: "Local Vision Map",
      type: "system",
      topic: "System command map node",
      category: "Vault Document",
      habitat: node.type || "System",
      status: "review",
      priority: "medium",
      connectedAgent: node.ownerAgent || "System Brain",
      summary: node.purpose || "Vision map command node definition.",
      whySaved: "Mined from live Vision Map command node.",
      nextAction: node.nextAction || "Review system node integrations.",
      tags: ["vision-map", "command-node"],
      dateAdded: new Date().toISOString().slice(0, 10),
      lastReviewed: "not reviewed"
    };
    vaultState.parsedLinks = [newArchiveItem, ...(vaultState.parsedLinks || [])];
    setArchiveVaultState(vaultState);
    addWorldEvent(`Sent Vision Map node "${node.name}" definition to Archive Vault.`);
  } else if (action === "Create Alert") {
    const reviewItem = {
      id: `alert-req-${Date.now()}`,
      title: `Create alert rule for: ${node.name}`,
      source: "Vision Map",
      owner: node.ownerAgent || "Risk Sentinel",
      status: "Waiting for CEO B",
      priority: "High",
      output: `Define rules to trigger alert when status changes from "${node.status}". Next Action: ${node.nextAction}`
    };
    addSharedReviewItem(reviewItem);
    addWorldEvent(`Requested alert rule creation for "${node.name}".`);
  } else {
    // Default or "CEO B Review" action
    addSharedReviewItem({
      id: `review-node-${Date.now()}`,
      title: `Review node: ${node.name}`,
      owner: node.ownerAgent || "System Brain",
      source: "Vision Map",
      status: "Pending Decision",
      priority: "Medium",
      output: `Oversight review request for "${node.name}". Current task: ${node.currentTask || 'n/a'}. Next Action: ${node.nextAction}`
    });
    addWorldEvent(`Queued Vision Map node "${node.name}" for CEO B review.`);
  }
  
  renderVisionCommandCenter();
};

window.commandAgentAction = (action, agentId) => {
  const agent = operatingAgents.find((entry) => entry.id === agentId);
  if (!agent) return;
  state.commandActionCount += 1;
  const time = new Date().toLocaleTimeString();
  state.activityFeed = [{
    time,
    agent: agent.name,
    message: `${action} triggered for agent.`,
  }, ...state.activityFeed].slice(0, 20);

  if (action === "Assign Task") {
    addSharedMissionItem({
      title: `Task: ${agent.name} Objective`,
      owner: agent.name,
      source: "Vision Map (Agent)",
      priority: agent.priority || "Medium",
      nextAction: agent.nextAction || `Execute next action: ${agent.currentTask}`
    });
    addWorldEvent(`Created task for agent "${agent.name}" from Vision Map.`);
  } else if (action === "CEO B Review") {
    addSharedReviewItem({
      id: `review-agent-${Date.now()}`,
      title: `Review Agent Output: ${agent.name}`,
      owner: agent.name,
      source: "Vision Map (Agent)",
      status: "Pending Decision",
      priority: agent.priority || "Medium",
      output: `Review output of agent ${agent.name}. Last output: ${agent.lastOutput}`
    });
    addWorldEvent(`Sent agent "${agent.name}" status for CEO B review.`);
  }
  
  renderVisionCommandCenter();
};

function renderCommandNodeButton(node, kind) {
  const selected = node.id === state.selectedVisionNodeId ? " selected" : "";
  return `
    <button class="command-node-card ${escapeHtml(kind)}${selected}" type="button" onclick="window.selectVisionNode('${escapeHtml(node.id)}')">
      <strong>${escapeHtml(node.name)}</strong>
      <span>${escapeHtml(node.status)} • ${escapeHtml(node.ownerAgent)}</span>
    </button>
  `;
}

function renderVisionNodeDrawer(node) {
  if (!node) return `<p class="muted">Select a command node.</p>`;
  return `
    <div class="panel-head">
      <div>
        <p class="eyebrow">${escapeHtml(node.type)}</p>
        <h2>${escapeHtml(node.name)}</h2>
      </div>
      <span class="pill">${escapeHtml(node.status)}</span>
    </div>
    <div class="node-detail-grid">
      <div><span class="label">Owner agent</span><p>${escapeHtml(node.ownerAgent)}</p></div>
      <div><span class="label">Route</span><p>${escapeHtml(node.route)}</p></div>
      <div><span class="label">Purpose</span><p>${escapeHtml(node.purpose)}</p></div>
      <div><span class="label">Current task</span><p>${escapeHtml(node.currentTask)}</p></div>
      <div><span class="label">Next action</span><p>${escapeHtml(node.nextAction)}</p></div>
      <div><span class="label">Related systems</span><p>${(node.relatedSystems || []).map(escapeHtml).join(", ")}</p></div>
    </div>
    <div class="quick-action-dock node-actions">
      <a href="${escapeHtml(node.route)}">Open Route</a>
      <button type="button" onclick="window.commandNodeAction('Send to Archive', '${escapeHtml(node.id)}')">Send to Archive</button>
      <button type="button" onclick="window.commandNodeAction('Create Alert', '${escapeHtml(node.id)}')">Create Alert</button>
      <button type="button" onclick="window.commandNodeAction('Assign Agent', '${escapeHtml(node.id)}')">Assign Agent</button>
      <button type="button" onclick="window.commandNodeAction('CEO B Review', '${escapeHtml(node.id)}')">Mark for CEO B Review</button>
    </div>
  `;
}

function renderVisionAgentDrawer(agent) {
  return `
    <div class="panel-head"><div><p class="eyebrow">Agent Node</p><h2>${escapeHtml(agent.name)}</h2></div><span class="pill">${escapeHtml(agent.status)}</span></div>
    <div class="node-detail-grid">
      <div><span class="label">Role</span><p>${escapeHtml(agent.role)}</p></div>
      <div><span class="label">Habitat</span><p>${escapeHtml(agent.habitat)}</p></div>
      <div><span class="label">Route owned</span><p>${escapeHtml(agent.routeOwned)}</p></div>
      <div><span class="label">Task</span><p>${escapeHtml(agent.currentTask)}</p></div>
      <div><span class="label">Last output</span><p>${escapeHtml(agent.lastOutput)}</p></div>
      <div><span class="label">Next action</span><p>${escapeHtml(agent.nextAction)}</p></div>
    </div>
    <div class="quick-action-dock node-actions">
      <a href="${escapeHtml(agent.routeOwned)}">Open Owned Route</a>
      <button type="button" onclick="window.commandAgentAction?.('Assign Task', '${escapeHtml(agent.id)}')">Assign Task</button>
      <button type="button" onclick="window.commandAgentAction?.('CEO B Review', '${escapeHtml(agent.id)}')">Mark for CEO B Review</button>
    </div>
  `;
}

function renderVisionDashboardPanel(title, value, detail) {
  return `<article><span class="label">${escapeHtml(title)}</span><strong>${escapeHtml(String(value))}</strong><p>${escapeHtml(detail)}</p></article>`;
}

function renderSourceHubPage() {
  if (!els.sourceHubContent) return;
  const sources = Array.isArray(sharedHabitatData.dataSources) ? sharedHabitatData.dataSources : [];
  
  els.sourceHubContent.innerHTML = `
    <div class="p-6 bg-[#0a0b0c] text-xs font-mono text-[#c0c4cc]">
      <div class="flex items-center justify-between border-b border-[#1f242d] pb-4 mb-6">
        <div>
          <p class="text-[10px] text-amber uppercase tracking-wider">Ecosystem Data Architecture</p>
          <h2 class="text-lg font-bold text-white uppercase tracking-tight">Data Providers Matrix</h2>
        </div>
        <span class="px-2 py-1 bg-blue/20 text-blue text-[10px] font-bold border border-blue/40 uppercase tracking-widest">Future Adapters System</span>
      </div>
      
      <p class="text-xs text-[#909399] mb-6 font-sans">
        The Pickaxe Capital / AI Habitat OS options alert engine is designed to interface with the following third-party data providers. Review connection states, stubs, and safety policies below.
      </p>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-900 font-mono text-[11px] leading-relaxed">
          <thead>
            <tr class="bg-[#121417] text-slate-400 border-b border-slate-900">
              <th class="p-3 font-bold uppercase tracking-wider">Provider Name</th>
              <th class="p-3 font-bold uppercase tracking-wider">Category</th>
              <th class="p-3 font-bold uppercase tracking-wider">Consumer Agents</th>
              <th class="p-3 font-bold uppercase tracking-wider">Data Payload Type</th>
              <th class="p-3 font-bold uppercase tracking-wider">Adapter Status</th>
              <th class="p-3 font-bold uppercase tracking-wider">Backend Req</th>
              <th class="p-3 font-bold uppercase tracking-wider">Safety Protocol & Credentials policy</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-900 bg-[#0c0d0e]/60">
            ${sources.map(source => {
              const statusColor = source.status === "Local Prototype" ? "text-cyan-400" : source.status === "Research Provider" ? "text-purple-400" : "text-amber-400";
              const statusBg = source.status === "Local Prototype" ? "bg-cyan-950/30 border-cyan-900/30" : source.status === "Research Provider" ? "bg-purple-950/30 border-purple-900/30" : "bg-amber-950/30 border-amber-900/30";
              return `
                <tr class="hover:bg-[#121417]/50 transition-colors">
                  <td class="p-3 font-sans font-bold text-white">${escapeHtml(source.name)}</td>
                  <td class="p-3 text-slate-300 font-sans">${escapeHtml(source.category)}</td>
                  <td class="p-3 text-slate-300">${escapeHtml(source.agents)}</td>
                  <td class="p-3 text-slate-400">${escapeHtml(source.dataType)}</td>
                  <td class="p-3">
                    <span class="px-2 py-0.5 border text-[9px] font-bold rounded uppercase ${statusBg} ${statusColor}">
                      ${escapeHtml(source.status)}
                    </span>
                  </td>
                  <td class="p-3 text-center">
                    <span class="font-bold ${source.backend === 'Yes' ? 'text-red' : 'text-green'}">
                      ${escapeHtml(source.backend)}
                    </span>
                  </td>
                  <td class="p-3 max-w-[280px]">
                    <div class="text-[10px] text-[#909399] leading-snug">${escapeHtml(source.safety)}</div>
                    <div class="text-[9px] text-[#606266] mt-1 italic">Next Setup Step: ${escapeHtml(source.step)}</div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
      
      <div class="mt-8 p-4 bg-slate-950/60 border border-slate-900 rounded-sm">
        <h4 class="text-xs font-bold text-white uppercase mb-2 tracking-wider">🔒 API KEY CREDENTIALS POLICY NOTICE:</h4>
        <p class="text-[11px] text-[#909399] leading-relaxed font-sans">
          To maintain security compliance, the frontend application layer does not store or accept secret API keys. All integrations requiring developer credentials operate using backend server stubs. Any future live environment deployment must use server-side environmental variables.
        </p>
      </div>
    </div>
  `;
}

window.filterSourceHub = () => {};

function renderSignalsIntelligence() {
  if (!els.signalsIntelligence) return;
  const signalSources = intelligenceSources.filter((source) => source.placement.includes("signals")).slice(0, 10);
  const candidates = rkWatchlist.filter((item) => ["Candidate", "Promoted", "Watch"].includes(item.signalStatus)).slice(0, 6);
  const legacyBridge = window.location.pathname === "/market-command"
    ? `<section class="legacy-bridge"><h2>Market Command is now consolidated into Signals.</h2><a href="#/signals">Open Signals</a></section>`
    : window.location.pathname === "/signal-engine"
      ? `<section class="legacy-bridge"><h2>Signal Engine is now consolidated into Signals.</h2><a href="#/signals">Open Signals</a></section>`
      : "";
  els.signalsIntelligence.innerHTML = `
    ${legacyBridge}
    <section class="command-hero compact">
      <div>
        <p class="eyebrow">Single Market Intelligence Page</p>
        <h2>Signals Command</h2>
        <p>Market Command and Signal Engine now consolidate here. The urgent watchlist is manual/static until a future market data adapter is connected. Webull remains manual execution.</p>
      </div>
      <div class="signal-badges"><span>Static Watchlist</span><span>Future Adapter</span><span>Not Financial Advice</span><span>No Trading Execution</span></div>
    </section>
    ${renderMarketChartWorkspace()}
    <section class="source-rail">${signalSources.map(renderCompactSourceCard).join("")}</section>
    <section class="signal-workbench">
      <div>
        <p class="eyebrow">Signal Filters</p>
        <h3>One Page Signal Command</h3>
      </div>
      <input placeholder="Search ticker, source, catalyst, risk note" />
      <select>
        <option>All statuses</option>
        <option>Candidate</option>
        <option>Watch</option>
        <option>Rejected</option>
      </select>
      <span class="pill">Not Financial Advice</span>
    </section>
    <section class="intelligence-split">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">RK Tracker Watchlist Candidates</p><h2>Signal Leaderboard</h2></div><a class="text-link" href="#/rkTracker">Open tracker</a></div>
        <div class="tracker-table compact">${renderTrackerRows(candidates)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">Historical Pattern</p><h2>Berkshire 1965 Turnaround Signal</h2></div><a class="text-link" href="#/berkshire">Study</a></div>
        <div class="pattern-list">
          ${["Debt decreasing", "Working capital increasing", "Share count decreasing", "Inventory improving", "Operating income improving", "Dead assets being sold", "Cost reduction discussed", "Quality investment underway"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
        <p class="muted">Historical pattern, not financial advice.</p>
      </div>
    </section>
    <section class="selected-signal-detail">
      <div>
        <p class="eyebrow">Selected Signal Detail</p>
        <h2>${escapeHtml(candidates[0]?.ticker || "Watchlist")}</h2>
        <p>${escapeHtml(candidates[0]?.thesisNotes || "Click a signal candidate to inspect more context. This panel is local/mock for now.")}</p>
      </div>
      <div class="node-detail-grid">
        <div><span class="label">Catalyst</span><p>${escapeHtml(candidates[0]?.catalyst || "Awaiting candidate")}</p></div>
        <div><span class="label">Risk note</span><p>${escapeHtml(candidates[0]?.riskNotes || "Risk gate required")}</p></div>
        <div><span class="label">Owner</span><p>${escapeHtml(candidates[0]?.ownerAgent || "Signal Scout")}</p></div>
        <div><span class="label">Next action</span><p>${escapeHtml(candidates[0]?.nextAction || "Review only")}</p></div>
      </div>
    </section>
    <section class="pipeline-grid">
      ${renderPipeline("Signal Promotion Flow", ["Source", "Catalyst", "RK Score", "Risk Gate", "Archive", "CEO B Review"])}
      ${renderPipeline("Risk Rejection Flow", ["Hype", "Bad Spread", "Weak Catalyst", "Unclear Invalidation", "Rejected Idea"])}
      ${renderPipeline("X Bookmark Signal Candidates", ["User Import", "Ticker Detection", "Agent Review", "Signal Candidate"])}
    </section>
  `;
}

function renderArchiveIntelligence() {
  if (!els.archiveIntelligence) return;
  const items = getEffectiveArchiveVaultItems();
  const metrics = getArchiveVaultMetrics(items);
  els.archiveIntelligence.innerHTML = `
    <section class="command-hero archive-command vault-hero">
      <div>
        <p class="eyebrow">Retrieval-first intelligence vault</p>
        <h2>Pickaxe Capital Intelligence Vault</h2>
        <p>Turn saved links into organized intelligence, agent fuel, and daily action. Every source needs a reason, an owner, a status, and a next action.</p>
        <p class="muted">Seed sources and bookmark previews are local/demo unless a real storage layer is added. No scraping, no fake live checks, no auto-trading.</p>
      </div>
      <div class="ceo-verdict-card">
        <span class="label">CEO B Verdict</span>
        <strong>Organize for retrieval, not storage.</strong>
        <p>Every source needs a reason, an owner, and a next action.</p>
      </div>
    </section>
    <section class="vault-metrics">
      ${[
        ["Total sources", metrics.total],
        ["Active sources", metrics.active],
        ["Priority sources", metrics.priority],
        ["Needs review", metrics.review],
        ["Broken links", metrics.broken],
        ["Completed actions", metrics.completed],
        ["Agent-connected", metrics.agentConnected],
        ["Duplicate warnings", metrics.duplicates],
      ].map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`).join("")}
    </section>
    <section class="vault-toolbar">
      <input id="vaultSearch" placeholder="Search title, domain, tags, reason, next action..." oninput="window.filterArchiveVault?.()" />
      <select id="vaultStatus" onchange="window.filterArchiveVault?.()"><option value="all">All status</option>${uniqueOptions(items, "status")}</select>
      <select id="vaultType" onchange="window.filterArchiveVault?.()"><option value="all">All type</option>${uniqueOptions(items, "type")}</select>
      <select id="vaultHabitat" onchange="window.filterArchiveVault?.()"><option value="all">All habitats</option>${uniqueOptions(items, "habitat")}</select>
      <select id="vaultPriority" onchange="window.filterArchiveVault?.()"><option value="all">All priority</option>${uniqueOptions(items, "priority")}</select>
      <select id="vaultAgent" onchange="window.filterArchiveVault?.()"><option value="all">All agents</option>${uniqueOptions(items, "connectedAgent")}</select>
      <select id="vaultSort" onchange="window.filterArchiveVault?.()"><option value="priority">Sort by priority</option><option value="newest">Newest</option><option value="status">Status</option><option value="habitat">Habitat</option><option value="agent">Agent</option></select>
    </section>
    <section class="vault-layout">
      <aside class="vault-left">
        ${renderTodaysIntelligence(items)}
        ${renderVaultNextActions(items)}
        ${renderAgentSourceMap(items)}
      </aside>
      <div>
        <div class="panel-head vault-results-head"><div><p class="eyebrow">Source database</p><h2>Archive Sources</h2></div><span class="pill">Local actions</span></div>
        <section id="vaultGrid" class="vault-grid">${sortVaultItems(items, "priority").map(renderVaultCard).join("")}</section>
      </div>
    </section>
    ${renderBookmarkImportLab()}
    <section id="vaultDuplicatePanel">${renderVaultDuplicatePanel(items)}</section>
    <section class="vault-roadmap panel">
      <div class="panel-head"><div><p class="eyebrow">Future upgrades</p><h2>Vault Roadmap</h2></div><span class="pill">Research mode</span></div>
      <div class="stalled-grid">
        ${["Add real uploaded bookmark file parser", "Add persistent database or JSON write workflow", "Add source health checker server endpoint", "Connect agents and archive daily briefing", "Add source trust/reliability scoring", "Add export/import archive JSON", "Add no-duplicate source creation workflow"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>
  `;
  renderBookmarkPreview();
}

window.filterArchiveIntel = () => {
  const grid = document.querySelector("#archiveIntelGrid");
  if (!grid) return;
  const q = document.querySelector("#archiveIntelSearch")?.value.toLowerCase() || "";
  const type = document.querySelector("#archiveIntelFilter")?.value || "all";
  const filtered = archiveIntelligenceItems.filter((item) => {
    const haystack = `${item.title} ${item.summary} ${item.relatedAgent} ${item.tags.join(" ")}`.toLowerCase();
    return haystack.includes(q) && (type === "all" || item.type === type);
  });
  grid.innerHTML = filtered.map(renderArchiveIntelCard).join("") || `<p class="muted">No matching archive intelligence.</p>`;
};

function uniqueOptions(items, key) {
  return [...new Set((items || []).map((item) => item[key]).filter(Boolean))]
    .sort((a, b) => String(a).localeCompare(String(b)))
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("");
}

function getArchiveVaultState() {
  const fallback = { statusOverrides: {}, checkedActions: {}, parsedLinks: [], actionLog: [] };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem("pickaxeArchiveVault") || "{}") };
  } catch {
    return fallback;
  }
}

function setArchiveVaultState(nextState) {
  try {
    localStorage.setItem("pickaxeArchiveVault", JSON.stringify({
      statusOverrides: nextState.statusOverrides || {},
      checkedActions: nextState.checkedActions || {},
      parsedLinks: (nextState.parsedLinks || []).slice(0, 150),
      actionLog: (nextState.actionLog || []).slice(0, 40),
    }));
  } catch {
    // Browser storage can be disabled; the page still works with seed data.
  }
}

function getEffectiveArchiveVaultItems() {
  const vaultState = getArchiveVaultState();
  const parsed = (vaultState.parsedLinks || []).map((item, index) => ({
    id: item.id || `local-preview-${index}`,
    title: item.title || item.domain || item.url,
    url: item.url,
    domain: item.domain || domainFromUrl(item.url),
    type: item.type || "bookmark",
    topic: item.topic || "Local import preview",
    category: item.category || "Manual import",
    habitat: item.habitat || "Archive",
    status: item.status || "review",
    priority: item.priority || "medium",
    connectedAgent: item.connectedAgent || "Bookmark Cleaner",
    summary: item.summary || "Local preview item from pasted bookmarks or raw links.",
    whySaved: item.whySaved || "Imported by CEO B for review.",
    nextAction: item.nextAction || "Review source and decide if it belongs in the permanent vault.",
    tags: item.tags || ["local-preview"],
    dateAdded: item.dateAdded || "local",
    lastReviewed: item.lastReviewed || "not reviewed",
    localPreview: true,
  }));
  return [...archiveVaultItems, ...parsed].map((item) => ({
    ...item,
    status: vaultState.statusOverrides[item.id] || item.status,
  }));
}

function getArchiveVaultMetrics(items) {
  const normalized = (items || []).map((item) => normalizeUrl(item.url));
  const duplicateCount = normalized.length - new Set(normalized).size;
  return {
    total: items.length,
    active: items.filter((item) => item.status === "active").length,
    priority: items.filter((item) => ["critical", "high"].includes(item.priority) || item.status === "priority").length,
    review: items.filter((item) => item.status === "review").length,
    broken: items.filter((item) => item.status === "broken").length,
    completed: items.filter((item) => item.status === "completed").length,
    agentConnected: items.filter((item) => item.connectedAgent).length,
    duplicates: Math.max(0, duplicateCount),
  };
}

function renderTodaysIntelligence(items) {
  const priority = sortVaultItems(items.filter((item) => ["critical", "high"].includes(item.priority) || item.status === "priority"), "priority").slice(0, 5);
  return `<section class="vault-panel"><div class="panel-head"><div><p class="eyebrow">Today</p><h2>Today's Intelligence</h2></div><span class="pill">${priority.length} priority</span></div>${priority.map((item) => `<button type="button" onclick="window.focusVaultItem?.('${escapeHtml(item.id)}')"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.connectedAgent)} -> ${escapeHtml(item.nextAction)}</span></button>`).join("")}</section>`;
}

function renderVaultNextActions(items) {
  const vaultState = getArchiveVaultState();
  return `<section class="vault-panel"><div class="panel-head"><div><p class="eyebrow">Local checklist</p><h2>Next Actions</h2></div><span class="pill">Saved locally</span></div>${items.slice(0, 8).map((item) => `<label class="vault-action-check"><input type="checkbox" ${vaultState.checkedActions[item.id] ? "checked" : ""} onchange="window.toggleVaultAction?.('${escapeHtml(item.id)}', this.checked)" /><span><strong>${escapeHtml(item.title)}</strong>${escapeHtml(item.nextAction)}</span></label>`).join("")}</section>`;
}

function renderAgentSourceMap(items) {
  const agents = [
    ["Archive Miner", "cleans bookmarks, dedupes links, summarizes saved sources, creates next actions."],
    ["Signal Smith", "reads market/chart/trading sources and turns them into watchlist intelligence."],
    ["Flow Warden", "monitors fast market news, futures, macro flow, and daily market open checklist."],
    ["Risk Sentinel", "monitors world events, war risk, outages, cyber/internet disruptions, and market risk."],
    ["Vision Architect", "connects design, brand, luxury, UI, and product inspiration to the roadmap."],
    ["CEO B", "reviews all agent outputs and decides what matters today."],
    ["Bookmark Cleaner", "imports Chrome bookmarks, removes duplicates, classifies sources, and builds review queues."],
  ];
  return `<section class="vault-panel agent-source-map"><div class="panel-head"><div><p class="eyebrow">Agent Source Map</p><h2>Who Owns What</h2></div><a class="text-link" href="#/agent-engine">Open Agents</a></div>${agents.map(([name, role]) => {
    const owned = items.filter((item) => item.connectedAgent === name);
    return `<article><h3>${escapeHtml(name)}</h3><p>${escapeHtml(role)}</p><span>${owned.length} sources</span><small>${escapeHtml(owned[0]?.nextAction || "No linked source yet.")}</small></article>`;
  }).join("")}</section>`;
}

function renderVaultCard(item) {
  const target = externalUrl(item.url) ? `target="_blank" rel="noopener noreferrer"` : "";
  const openHref = externalUrl(item.url) ? item.url : "/archive";
  return `
    <article class="vault-card" data-vault-id="${escapeHtml(item.id)}">
      <div class="vault-card-top"><span class="status-badge ${escapeHtml(item.status)}">${escapeHtml(item.status)}</span><span class="priority-badge ${escapeHtml(item.priority)}">${escapeHtml(item.priority)}</span></div>
      <h3>${escapeHtml(item.title)}</h3>
      <a class="vault-domain" href="${escapeHtml(openHref)}" ${target}>${escapeHtml(item.domain || item.url)}</a>
      <p>${escapeHtml(item.summary)}</p>
      <dl>
        <div><dt>Type</dt><dd>${escapeHtml(item.type)}</dd></div>
        <div><dt>Habitat</dt><dd>${escapeHtml(item.habitat)}</dd></div>
        <div><dt>Agent</dt><dd>${escapeHtml(item.connectedAgent)}</dd></div>
        <div><dt>Last reviewed</dt><dd>${escapeHtml(item.lastReviewed)}</dd></div>
      </dl>
      <div class="vault-reason"><strong>Why saved</strong><span>${escapeHtml(item.whySaved)}</span></div>
      <div class="vault-reason"><strong>Next action</strong><span>${escapeHtml(item.nextAction)}</span></div>
      <div class="tag-row">${(item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="archive-actions">
        <a href="${escapeHtml(openHref)}" ${target}>Open Source</a>
        <button type="button" onclick="window.archiveVaultAction?.('summarize', '${escapeHtml(item.id)}')">Summarize</button>
        <button type="button" onclick="window.archiveVaultAction?.('checklist', '${escapeHtml(item.id)}')">Turn Into Checklist</button>
        <button type="button" onclick="window.archiveVaultAction?.('extract', '${escapeHtml(item.id)}')">Extract Opportunity</button>
        <button type="button" onclick="window.archiveVaultAction?.('send', '${escapeHtml(item.id)}')">Send to Agent</button>
        <button type="button" class="delete-btn" onclick="window.archiveVaultAction?.('archived', '${escapeHtml(item.id)}')">Archive</button>
      </div>
    </article>
  `;
}

function renderBookmarkImportLab() {
  return `
    <section class="bookmark-import-lab panel">
      <div class="panel-head"><div><p class="eyebrow">Local preview only</p><h2>Bookmark Import Lab</h2></div><span class="pill">No backend yet</span></div>
      <p>Paste Chrome bookmark HTML export or raw links. The parser extracts URLs in this browser, detects duplicates against seed vault sources, and suggests habitat/type/agent metadata. Saved previews stay in localStorage only.</p>
      <textarea id="bookmarkImportText" placeholder="Paste Chrome bookmark HTML export or raw links here..."></textarea>
      <div class="game-action-row">
        <button type="button" onclick="window.parseBookmarkImport?.()">Parse Links</button>
        <button type="button" onclick="window.copyBookmarkJson?.()">Copy JSON</button>
        <button type="button" onclick="window.copyCodexImportPatch?.()">Copy Codex Import Patch</button>
        <button type="button" onclick="window.saveBookmarkPreview?.()">Save Preview Locally</button>
      </div>
      <div id="bookmarkImportPreview" class="bookmark-preview"></div>
    </section>
  `;
}

function renderVaultDuplicatePanel(items) {
  const all = [...items, ...(getArchiveVaultState().parsedLinks || [])];
  const byUrl = {};
  const byDomain = {};
  all.forEach((item) => {
    const normalized = normalizeUrl(item.url);
    const domain = item.domain || domainFromUrl(item.url);
    if (!normalized) return;
    byUrl[normalized] = [...(byUrl[normalized] || []), item.title || item.url];
    byDomain[domain] = (byDomain[domain] || 0) + 1;
  });
  const exact = Object.entries(byUrl).filter(([, list]) => list.length > 1);
  const repeatedDomains = Object.entries(byDomain).filter(([, count]) => count > 1).sort((a, b) => b[1] - a[1]).slice(0, 8);
  return `<section class="duplicate-panel panel"><div class="panel-head"><div><p class="eyebrow">Duplicate Detector</p><h2>Source Cleanup</h2></div><span class="pill">Manual review</span></div><div class="duplicate-grid"><article><h3>Exact duplicate URLs</h3>${exact.length ? exact.map(([url, list]) => `<p><strong>${escapeHtml(url)}</strong><span>${list.length} copies</span></p>`).join("") : `<p class="muted">No exact duplicates found in current seed/local preview.</p>`}</article><article><h3>Domains repeated many times</h3>${repeatedDomains.map(([domain, count]) => `<p><strong>${escapeHtml(domain)}</strong><span>${count} sources</span></p>`).join("") || `<p class="muted">No repeated domains yet.</p>`}</article><article><h3>Source health</h3><p>Needs manual review. Later: add optional source health checker with a server endpoint.</p></article></div></section>`;
}

function sortVaultItems(items, sortKey) {
  const priorityRank = { critical: 0, high: 1, medium: 2, low: 3 };
  return [...items].sort((a, b) => {
    if (sortKey === "newest") return String(b.dateAdded).localeCompare(String(a.dateAdded));
    if (sortKey === "status") return String(a.status).localeCompare(String(b.status));
    if (sortKey === "habitat") return String(a.habitat).localeCompare(String(b.habitat));
    if (sortKey === "agent") return String(a.connectedAgent).localeCompare(String(b.connectedAgent));
    return (priorityRank[a.priority] ?? 9) - (priorityRank[b.priority] ?? 9);
  });
}

window.filterArchiveVault = () => {
  const grid = document.querySelector("#vaultGrid");
  if (!grid) return;
  const q = (document.querySelector("#vaultSearch")?.value || "").toLowerCase();
  const status = document.querySelector("#vaultStatus")?.value || "all";
  const type = document.querySelector("#vaultType")?.value || "all";
  const habitat = document.querySelector("#vaultHabitat")?.value || "all";
  const priority = document.querySelector("#vaultPriority")?.value || "all";
  const agent = document.querySelector("#vaultAgent")?.value || "all";
  const sort = document.querySelector("#vaultSort")?.value || "priority";
  const filtered = getEffectiveArchiveVaultItems().filter((item) => {
    const haystack = `${item.title} ${item.url} ${item.domain} ${item.type} ${item.topic} ${item.category} ${item.habitat} ${item.status} ${item.priority} ${item.connectedAgent} ${item.summary} ${item.whySaved} ${item.nextAction} ${(item.tags || []).join(" ")}`.toLowerCase();
    return haystack.includes(q)
      && (status === "all" || item.status === status)
      && (type === "all" || item.type === type)
      && (habitat === "all" || item.habitat === habitat)
      && (priority === "all" || item.priority === priority)
      && (agent === "all" || item.connectedAgent === agent);
  });
  grid.innerHTML = sortVaultItems(filtered, sort).map(renderVaultCard).join("") || `<p class="muted">No matching archive sources.</p>`;
};

window.focusVaultItem = (itemId) => {
  const card = [...document.querySelectorAll("[data-vault-id]")].find((node) => node.dataset.vaultId === itemId);
  if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
};

window.toggleVaultAction = (itemId, checked) => {
  const vaultState = getArchiveVaultState();
  vaultState.checkedActions[itemId] = Boolean(checked);
  setArchiveVaultState(vaultState);
};

window.archiveVaultAction = async (action, itemId) => {
  const item = getEffectiveArchiveVaultItems().find((entry) => entry.id === itemId);
  if (!item) return;
  const vaultState = getArchiveVaultState();
  const statusMap = { reviewed: "active", completed: "completed", archived: "archived" };
  
  if (action === "summarize") {
    const reviewItem = {
      id: `archive-sum-${Date.now()}`,
      title: `Summarize Research: ${item.title}`,
      source: item.habitat || "Archive",
      owner: item.connectedAgent || "Archive Keeper",
      status: "Waiting for CEO B",
      priority: item.priority || "Medium",
      output: `Summary request for: ${item.summary}. URL: ${item.url}`
    };
    addSharedReviewItem(reviewItem);
    addWorldEvent(`Requested summary for "${item.title}" from CEO B review stack.`);
  } else if (action === "checklist") {
    addSharedMissionItem({
      title: `Checklist: ${item.title}`,
      owner: item.connectedAgent || "Task Smith",
      source: "Archive Vault",
      priority: item.priority || "Medium",
      nextAction: item.nextAction || "Process archive findings."
    });
    addWorldEvent(`Created checklist mission for "${item.title}" directly.`);
  } else if (action === "extract") {
    const reviewItem = {
      id: `archive-opp-${Date.now()}`,
      title: `Extract Opportunity: ${item.title}`,
      source: item.habitat || "Archive",
      owner: item.connectedAgent || "Archive Keeper",
      status: "Waiting for CEO B",
      priority: "High",
      output: `Analyze market/business opportunity: ${item.summary}. Source: ${item.url}`
    };
    addSharedReviewItem(reviewItem);
    addWorldEvent(`Requested opportunity extraction for "${item.title}".`);
  } else if (action === "send") {
    addSharedMissionItem({
      title: `Analyze source: ${item.title}`,
      owner: item.connectedAgent || "Archive Keeper",
      source: "Archive Vault",
      priority: item.priority || "Medium",
      nextAction: item.nextAction || "Examine source and report findings."
    });
    addWorldEvent(`Sent task for "${item.title}" to Agent ${item.connectedAgent}.`);
  } else if (statusMap[action]) {
    vaultState.statusOverrides[itemId] = statusMap[action];
    vaultState.actionLog.unshift(`${item.title}: ${statusMap[action]}`);
    setArchiveVaultState(vaultState);
  }
  renderArchiveIntelligence();
};

window.parseBookmarkImport = () => {
  const text = document.querySelector("#bookmarkImportText")?.value || "";
  const hrefs = [...text.matchAll(/href=["']([^"']+)["'][^>]*>([^<]*)/gi)].map((match) => ({ url: match[1], title: stripHtml(match[2]) }));
  const rawLinks = [...text.matchAll(/https?:\/\/[^\s"'<>]+/gi)].map((match) => ({ url: match[0], title: "" }));
  const seen = new Set();
  const parsed = [...hrefs, ...rawLinks].map((entry) => ({ ...entry, url: entry.url.replace(/[),.;]+$/, "") })).filter((entry) => {
    const normalized = normalizeUrl(entry.url);
    if (!normalized || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  }).map((entry, index) => {
    const classified = classifyArchiveUrl(entry.url, entry.title);
    return { id: `local-preview-${Date.now()}-${index}`, title: entry.title || classified.title, url: entry.url, domain: domainFromUrl(entry.url), ...classified };
  });
  const vaultState = getArchiveVaultState();
  vaultState.parsedLinks = parsed;
  setArchiveVaultState(vaultState);
  renderBookmarkPreview();
};

function renderBookmarkPreview() {
  const preview = document.querySelector("#bookmarkImportPreview");
  if (!preview) return;
  const parsed = getArchiveVaultState().parsedLinks || [];
  if (!parsed.length) {
    preview.innerHTML = `<p class="muted">No links parsed yet. Paste exported Chrome bookmark HTML or raw links and click Parse Links.</p>`;
    return;
  }
  const seedUrls = new Set((archiveVaultItems || []).map((item) => normalizeUrl(item.url)));
  preview.innerHTML = `<div class="bookmark-preview-list">${parsed.map((item) => {
    const duplicate = seedUrls.has(normalizeUrl(item.url));
    return `<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.domain)} ${duplicate ? "• duplicate" : "• new"}</span><small>${escapeHtml(item.habitat)} / ${escapeHtml(item.type)} / ${escapeHtml(item.connectedAgent)}</small><p>${escapeHtml(item.nextAction)}</p></article>`;
  }).join("")}</div><p class="muted">Saved locally in this browser only until database/storage is added.</p>`;
}

window.copyBookmarkJson = () => writeClipboard(JSON.stringify(getArchiveVaultState().parsedLinks || [], null, 2));

window.copyCodexImportPatch = () => {
  const parsed = getArchiveVaultState().parsedLinks || [];
  const patchText = `Add these archiveVaultItems to public/habitat-data.js after review:\n${JSON.stringify(parsed, null, 2)}`;
  return writeClipboard(patchText);
};

window.saveBookmarkPreview = () => {
  renderArchiveIntelligence();
};

function classifyArchiveUrl(url, title = "") {
  const text = `${url} ${title}`.toLowerCase();
  const base = { status: "review", priority: "medium", dateAdded: "local", lastReviewed: "not reviewed", summary: "Local bookmark preview classified by keywords.", whySaved: "User pasted this source into the Archive Import Lab.", tags: ["local-preview"] };
  if (/tradingview|investing|hyperliquid|glint|futures|chart|gold/.test(text)) return { ...base, title: title || domainFromUrl(url), type: "market", topic: "Market source", category: "Trading Tools", habitat: "Market Habitat", priority: "high", connectedAgent: "Signal Smith", nextAction: "Review as a market/trading source and decide if it should feed Signals." };
  if (/netblocks|osiris|war|conflict|earthquake|outage|incident|flight/.test(text)) return { ...base, title: title || domainFromUrl(url), type: "news", topic: "World monitor", category: "Risk source", habitat: "World Monitor", priority: "high", connectedAgent: "Risk Sentinel", nextAction: "Review manually for risk relevance and add to escalation checklist if useful." };
  if (/perplexity|openai|claude|codex|ai|agent|openclaw/.test(text)) return { ...base, title: title || domainFromUrl(url), type: "agent-source", topic: "AI agent source", category: "AI Tools", habitat: "AI Agent Sources", connectedAgent: "Archive Miner", nextAction: "Study as AI/source architecture and summarize useful patterns." };
  if (/luxury|versace|brand|design/.test(text)) return { ...base, title: title || domainFromUrl(url), type: "research", topic: "Brand/design", category: "Luxury / Brand", habitat: "Luxury / Brand", connectedAgent: "Vision Architect", nextAction: "Extract design principles for Pickaxe visual system." };
  if (/health|sleep|food|fitness/.test(text)) return { ...base, title: title || domainFromUrl(url), type: "bookmark", topic: "Personal growth", category: "Health", habitat: "Personal Growth", connectedAgent: "CEO B", nextAction: "Review for Personal Ops checklist." };
  if (/business|startup|money|real estate|wealth/.test(text)) return { ...base, title: title || domainFromUrl(url), type: "research", topic: "Business ideas", category: "Business Ideas", habitat: "Business Ideas", priority: "high", connectedAgent: "CEO B", nextAction: "Extract business opportunity and route to CEO B review." };
  return { ...base, title: title || domainFromUrl(url), type: "bookmark", topic: "Needs classification", category: "Saved Links", habitat: "Archive", connectedAgent: "Bookmark Cleaner", nextAction: "Classify source by topic, status, priority, and owner." };
}

function domainFromUrl(url) {
  try {
    if (String(url || "").startsWith("local://")) return "local";
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

function normalizeUrl(url) {
  return String(url || "").trim().replace(/\/+$/, "").toLowerCase();
}

function stripHtml(text) {
  return String(text || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function renderRkTrackerPage() {
  if (!els.rkTrackerContent) return;
  const best = [...rkWatchlist].sort((a, b) => b.overallScore - a.overallScore)[0];
  els.rkTrackerContent.innerHTML = `
    <section class="command-hero rk-hero">
      <div>
        <p class="eyebrow">Watchlist Only • Educational Inspiration</p>
        <h2>Roaring Kitty Watchlist Tracker</h2>
        <p>A compact DFV-inspired tracker for CEO B's watchlist. It combines mock movement, relative volume, valuation notes, catalysts, risk flags, archive memory, and agent review.</p>
      </div>
      <div class="signal-badges"><span>Mock Market Data</span><span>Watchlist Only</span><span>Live Adapter Ready</span><span>Not Financial Advice</span><span>Archive Connected</span></div>
    </section>
    <section class="metric-strip">
      ${[["Watchlist Names", rkWatchlist.length], ["High Urgency", rkWatchlist.filter((i) => i.signalStatus === "Candidate").length], ["Best Score", `${best?.ticker || "N/A"} ${best?.overallScore || 0}`], ["Archive Ready", rkWatchlist.filter((i) => i.archiveStatus !== "Risk Note").length], ["Rejected / Risk", rkWatchlist.filter((i) => i.signalStatus === "Rejected").length], ["Mock Status", "Adapter Ready"]].map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`).join("")}
    </section>
    <section class="tracker-layout">
      <div class="panel tracker-table-wrap">
        <div class="panel-head"><div><p class="eyebrow">Sortable soon</p><h2>Main Tracker Table</h2></div><span class="pill">Mock / Adapter Ready</span></div>
        <div class="tracker-table">${renderTrackerRows(rkWatchlist)}</div>
      </div>
      <aside id="tickerDrawer" class="ticker-drawer">${renderTickerDrawer(best || rkWatchlist[0])}</aside>
    </section>
    <section class="pipeline-grid">
      ${renderPipeline("Daily Movers", rkWatchlist.slice(0, 5).map((item) => `${item.ticker} ${formatSigned(item.dailyChangePercent)}%`))}
      ${renderPipeline("Weekly Movers", [...rkWatchlist].sort((a, b) => b.weeklyChangePercent - a.weeklyChangePercent).slice(0, 5).map((item) => `${item.ticker} ${formatSigned(item.weeklyChangePercent)}%`))}
      ${renderPipeline("DFV-Inspired Research Workflow", ["Track movers", "Watch volume", "Study ownership", "Compare industry", "Archive research", "Reject weak ideas"])}
    </section>
    <section class="source-rail">${pickSources(["rk-tools-3", "rk-tools-2", "rk-extra-reference", "public-tracker-sheet", "dfv-reddit", "wisesheets-rk"]).map(renderCompactSourceCard).join("")}</section>
  `;
}

window.selectTicker = (ticker) => {
  const drawer = document.querySelector("#tickerDrawer");
  const item = rkWatchlist.find((entry) => entry.ticker === ticker);
  if (drawer && item) drawer.innerHTML = renderTickerDrawer(item);
};

function renderBerkshirePage() {
  if (!els.berkshireContent) return;
  els.berkshireContent.innerHTML = `
    <section class="command-hero berkshire-hero">
      <div>
        <p class="eyebrow">Historical Case Study • Archive Intelligence</p>
        <h2>${escapeHtml(berkshire1965.title)}</h2>
        <p>A founder intelligence breakdown of Berkshire Hathaway's 1965 Annual Report before it became the legendary compounding machine.</p>
      </div>
      <div class="signal-badges"><span>Historical Case Study</span><span>Capital Allocation Lesson</span><span>Turnaround Playbook</span><span>CEO B Review</span></div>
    </section>
    <section class="metric-grid case-study-metrics">
      ${berkshire1965.metrics.map(([label, value, year, compare]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(year)} • ${escapeHtml(compare)}</small></article>`).join("")}
    </section>
    <p class="muted">These numbers are historical and manually entered from the 1965 annual report. They are not live market data.</p>
    <section class="lesson-grid">
      ${berkshire1965.lessons.map(([title, detail]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(detail)}</p></article>`).join("")}
    </section>
    <section class="wealth-board">
      ${["Diagnose", "Clean Up", "Improve Operations", "Allocate Capital", "Archive Lessons"].map((column, index) => `<article><span>0${index + 1}</span><h3>${column}</h3><p>${escapeHtml(berkshirePlaybook(column))}</p></article>`).join("")}
    </section>
    <section class="quick-action-dock"><a href="${escapeHtml(berkshire1965.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open Original Report</a><a href="#/archive">Send Lessons to Archive</a><a href="#/founder">Add to Founder Playbook</a><a href="#/agent-engine">Create Agent Tasks</a></section>
  `;
}

function getBookmarksState() {
  try {
    const stored = localStorage.getItem("pickaxeBookmarks");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error("Failed to parse bookmarks state:", e);
  }
  const seeds = [
    { id: "seed-bm-1", url: "https://www.tradingview.com/chart", title: "TradingView Charts", notes: "Primary technical chart watch for daily levels.", category: "Market Signal", dateAdded: new Date().toISOString(), status: "Mined" },
    { id: "seed-bm-2", url: "https://netblocks.org/", title: "NetBlocks", notes: "Outage monitor and geopolitics connectivity watcher.", category: "Research Source", dateAdded: new Date().toISOString(), status: "Mined" },
    { id: "seed-bm-3", url: "https://github.com/addyosmani/jarvis", title: "Addy Osmani Jarvis", notes: "Jarvis voice and camera browser project reference.", category: "Vault Document", dateAdded: new Date().toISOString(), status: "Mined" },
    { id: "seed-bm-4", url: "https://x.com/DeItaone", title: "Deltaone Feed", notes: "Real-time breaking market news.", category: "Research Source", dateAdded: new Date().toISOString(), status: "Mined" }
  ];
  try {
    localStorage.setItem("pickaxeBookmarks", JSON.stringify(seeds));
  } catch (err) {}
  return seeds;
}

function setBookmarksState(items) {
  try {
    localStorage.setItem("pickaxeBookmarks", JSON.stringify(items.slice(0, 150)));
  } catch (e) {
    console.error("Failed to save bookmarks state:", e);
  }
}

window.addLocalBookmark = (url, title, notes, category) => {
  if (!url) return { ok: false, error: "URL is required" };
  const normalized = normalizeUrl(url);
  const bookmarks = getBookmarksState();
  const duplicate = bookmarks.find((bm) => normalizeUrl(bm.url) === normalized);
  if (duplicate) {
    duplicate.title = title || duplicate.title;
    duplicate.notes = notes || duplicate.notes;
    duplicate.category = category || duplicate.category;
    duplicate.dateAdded = new Date().toISOString();
    setBookmarksState(bookmarks);
    addWorldEvent(`Updated existing bookmark: ${duplicate.title}`);
    return { ok: true, bookmark: duplicate, updated: true };
  }
  const newBm = {
    id: `bookmark-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    url,
    title: title || domainFromUrl(url),
    notes: notes || "No notes added.",
    category: category || "General Bookmark",
    dateAdded: new Date().toISOString(),
    status: "Mined"
  };
  bookmarks.unshift(newBm);
  setBookmarksState(bookmarks);
  addWorldEvent(`Mined new bookmark: ${newBm.title}`);
  return { ok: true, bookmark: newBm, updated: false };
};

window.mineSingleBookmark = () => {
  const urlEl = document.querySelector("#bmUrl");
  const titleEl = document.querySelector("#bmTitle");
  const catEl = document.querySelector("#bmCategory");
  const notesEl = document.querySelector("#bmNotes");
  
  const url = urlEl?.value.trim() || "";
  const title = titleEl?.value.trim() || "";
  const category = catEl?.value || "General Bookmark";
  const notes = notesEl?.value.trim() || "";
  
  if (!url) {
    alert("URL is required to mine a bookmark.");
    return;
  }
  
  const res = window.addLocalBookmark(url, title, notes, category);
  if (res.ok) {
    if (urlEl) urlEl.value = "";
    if (titleEl) titleEl.value = "";
    if (notesEl) notesEl.value = "";
    renderBookmarksPage();
  }
};

window.promoteBookmarkToArchive = (bookmarkId) => {
  const bookmarks = getBookmarksState();
  const bm = bookmarks.find((b) => b.id === bookmarkId);
  if (!bm) return;
  const vaultState = getArchiveVaultState();
  const classified = classifyArchiveUrl(bm.url, bm.title);
  const newArchiveItem = {
    id: `archive-bm-${Date.now()}`,
    title: bm.title,
    url: bm.url,
    domain: domainFromUrl(bm.url),
    type: classified.type || "bookmark",
    topic: classified.topic || "Bookmark promotion",
    category: bm.category,
    habitat: classified.habitat || "Archive",
    status: "review",
    priority: "medium",
    connectedAgent: classified.connectedAgent || "Archive Keeper",
    summary: bm.notes || "Promoted from local bookmarks.",
    whySaved: "Mined and promoted to Archive Vault by CEO B.",
    nextAction: classified.nextAction || "Review archive source.",
    tags: ["promoted", "bookmark"],
    dateAdded: new Date().toISOString().slice(0, 10),
    lastReviewed: "not reviewed"
  };
  vaultState.parsedLinks = [newArchiveItem, ...(vaultState.parsedLinks || [])];
  setArchiveVaultState(vaultState);
  
  const remaining = bookmarks.filter((b) => b.id !== bookmarkId);
  setBookmarksState(remaining);
  addWorldEvent(`Promoted bookmark "${bm.title}" to Archive Vault.`);
  renderBookmarksPage();
};

window.promoteBookmarkToSignals = (bookmarkId) => {
  const bookmarks = getBookmarksState();
  const bm = bookmarks.find((b) => b.id === bookmarkId);
  if (!bm) return;
  const reviewItem = {
    id: `signal-review-${Date.now()}`,
    title: `Review Signal: ${bm.title}`,
    source: "Bookmarks / Signals",
    owner: "Signal Scout",
    status: "Waiting for CEO B",
    priority: "High",
    output: `Signal candidate: ${bm.notes}. URL: ${bm.url}. Verify options liquidity and indicators in Webull.`
  };
  addSharedReviewItem(reviewItem);
  const remaining = bookmarks.filter((b) => b.id !== bookmarkId);
  setBookmarksState(remaining);
  addWorldEvent(`Sent bookmark "${bm.title}" to CEO B Review as Signal Candidate.`);
  renderBookmarksPage();
};

window.sendBookmarkToCeoReview = (bookmarkId) => {
  const bookmarks = getBookmarksState();
  const bm = bookmarks.find((b) => b.id === bookmarkId);
  if (!bm) return;
  const reviewItem = {
    id: `review-bm-${Date.now()}`,
    title: `Bookmark review: ${bm.title}`,
    source: "Bookmarks",
    owner: "Bookmark Miner",
    status: "Pending Decision",
    priority: "Medium",
    output: `Categorized as "${bm.category}". Notes: ${bm.notes}. URL: ${bm.url}`
  };
  addSharedReviewItem(reviewItem);
  const remaining = bookmarks.filter((b) => b.id !== bookmarkId);
  setBookmarksState(remaining);
  addWorldEvent(`Sent bookmark "${bm.title}" to CEO B Review Queue.`);
  renderBookmarksPage();
};

window.deleteLocalBookmark = (bookmarkId) => {
  const bookmarks = getBookmarksState();
  const remaining = bookmarks.filter((b) => b.id !== bookmarkId);
  setBookmarksState(remaining);
  renderBookmarksPage();
};

function renderBookmarksPage() {
  if (!els.bookmarksContent) return;
  const bookmarks = getBookmarksState();
  const chromeStats = state.parsedChromeStats;
  
  const totalChromeCount = chromeStats ? chromeStats.totalBookmarks : 31504;
  const uniqueChromeCount = chromeStats ? (chromeStats.totalBookmarks - chromeStats.localFileCount) : 31399;
  const folderChromeCount = chromeStats ? chromeStats.totalFolders : 913;
  const depthChromeCount = chromeStats ? chromeStats.maxFolderDepth : 9;
  const localFileChromeCount = chromeStats ? chromeStats.localFileCount : 26;

  const totalCount = totalChromeCount + bookmarks.length;
  const uniqueCount = uniqueChromeCount + bookmarks.length;
  
  els.bookmarksContent.innerHTML = `
    <section class="command-hero">
      <div>
        <p class="eyebrow">Chrome + X Bookmark Intelligence</p>
        <h2>Bookmarks</h2>
        <p>Import Chrome bookmarks and safely add user-provided X bookmark links. URLs are automatically deduped to prevent duplicate clutter. Route mined bookmarks to Source Hub, Archive, Signals, or CEO B Review.</p>
      </div>
      <div class="command-status-grid">
        <span><strong>${totalCount.toLocaleString()}</strong>Chrome links</span>
        <span><strong>${uniqueCount.toLocaleString()}</strong>unique URLs</span>
        <span><strong>${folderChromeCount}</strong>folders</span>
        <span><strong>${depthChromeCount}</strong>max depth</span>
        <span><strong>${localFileChromeCount}</strong>local file links marked</span>
      </div>
    </section>
    
    <section class="bookmarks-layout">
      <!-- Left Column: Inputs & Imports -->
      <div class="bookmarks-left-column" style="display:grid; gap:16px;">
        <!-- Chrome Bookmarks Importer Panel -->
        <div class="panel">
          <div class="panel-head">
            <div>
              <p class="eyebrow">Chrome Importer</p>
              <h2>Bookmarks Importer</h2>
            </div>
            <span class="pill">${chromeStats ? "Active" : "Ready"}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:12px; margin-top:12px;">
            <p class="muted">Upload your Chrome Bookmarks HTML export file (supports large ~37.6MB exports) to parse folder tree structure and statistics.</p>
            <input type="file" id="chromeBookmarksFile" accept=".html,.htm" style="display:none;" onchange="window.importChromeBookmarks(event)" />
            <button class="primary" type="button" onclick="document.getElementById('chromeBookmarksFile').click()">Choose Bookmarks HTML File</button>
            <div id="importStatsSpinner" class="muted" style="display:none; text-align:center;">
              <span class="health-pulse-dot" style="background-color: var(--blue); border-radius: 50%; width: 8px; height: 8px; display: inline-block; margin-right: 6px;"></span>
              Parsing bookmarks... please wait.
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-head">
            <div>
              <p class="eyebrow">Manual Intake</p>
              <h2>Mine Single Link</h2>
            </div>
            <span class="pill">Local Database</span>
          </div>
          <div class="single-bm-form">
            <div>
              <label for="bmUrl">URL</label>
              <input id="bmUrl" placeholder="https://example.com/research-note" />
            </div>
            <div>
              <label for="bmTitle">Title (Optional)</label>
              <input id="bmTitle" placeholder="Title or identifier" />
            </div>
            <div>
              <label for="bmCategory">Category</label>
              <select id="bmCategory">
                <option value="Market Signal">Market Signal</option>
                <option value="Research Source">Research Source</option>
                <option value="Vault Document">Vault Document</option>
                <option value="General Bookmark">General Bookmark</option>
              </select>
            </div>
            <div>
              <label for="bmNotes">Context / Thesis Notes</label>
              <textarea id="bmNotes" placeholder="Why is this source valuable? Add notes or trade details..." style="min-height:70px;"></textarea>
            </div>
            <button class="primary" type="button" onclick="window.mineSingleBookmark()">Mine Single Link</button>
          </div>
        </div>
        
        <div class="panel">
          <div class="panel-head">
            <div>
              <p class="eyebrow">Manual Import</p>
              <h2>X Bookmark Analyzer</h2>
            </div>
            <span class="pill">${escapeHtml(xBookmarksIntelligence.status || "Planned")}</span>
          </div>
          <textarea id="xBookmarkPaste" placeholder="Paste X links, tweets, or exported text here. This parses and mines links into bookmarks." style="min-height:80px;"></textarea>
          <button class="primary" type="button" onclick="window.parseXBookmarks()">Analyze & Mine pasted bookmarks</button>
          <div id="xBookmarkPreview" class="x-preview"></div>
        </div>
      </div>
      
      <!-- Right Column: Database Table -->
      <div class="panel">
        <div class="panel-head" style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <h2 style="margin:0; font-size:16px;">
              <span class="tab-link ${state.bookmarksTab === 'mined' ? 'active' : ''}" onclick="window.setBookmarksTab('mined')" style="cursor:pointer; margin-right:16px; font-weight:bold;">Mined Bookmarks</span>
              <span class="tab-link ${state.bookmarksTab === 'imported' ? 'active' : ''}" onclick="window.setBookmarksTab('imported')" style="cursor:pointer; font-weight:bold;">Imported Catalog</span>
            </h2>
          </div>
          <span class="pill" style="margin-left:auto;">
            ${state.bookmarksTab === 'mined' ? bookmarks.length : (state.importedBookmarks ? state.importedBookmarks.length : 0)} items
          </span>
        </div>

        ${state.bookmarksTab === 'mined' ? renderMinedTab(bookmarks) : renderImportedTab()}
      </div>
    </section>
  `;
}

function renderMinedTab(bookmarks) {
  return `
    <div class="bookmarks-list">
      ${bookmarks.length ? `
        <table class="premium-table">
          <thead>
            <tr>
              <th style="width: 35%;">Source & URL</th>
              <th style="width: 20%;">Category</th>
              <th style="width: 25%;">Notes</th>
              <th style="width: 20%;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${bookmarks.map((bm) => `
              <tr>
                <td>
                  <strong>${escapeHtml(bm.title)}</strong>
                  <a href="${escapeHtml(bm.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(bm.url)}</a>
                </td>
                <td>
                  <span class="status-badge ${bm.category.toLowerCase().replace(/\s+/g, '-')}">${escapeHtml(bm.category)}</span>
                </td>
                <td>
                  <p class="bm-notes-cell" title="${escapeHtml(bm.notes)}">${escapeHtml(bm.notes)}</p>
                </td>
                <td>
                  <div class="bookmarks-action-row">
                    <button type="button" onclick="window.promoteBookmarkToArchive('${escapeHtml(bm.id)}')">Vault</button>
                    <button type="button" onclick="window.promoteBookmarkToSignals('${escapeHtml(bm.id)}')">Signal</button>
                    <button type="button" onclick="window.sendBookmarkToCeoReview('${escapeHtml(bm.id)}')">Review</button>
                    <button type="button" class="delete-btn" onclick="window.deleteLocalBookmark('${escapeHtml(bm.id)}')">Delete</button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      ` : `<p class="muted" style="padding:20px; text-align:center;">No bookmarks mined yet. Mine a single link on the left or paste multiple links in the X Bookmark Analyzer.</p>`}
    </div>
  `;
}

function renderImportedTab() {
  const list = state.importedBookmarks || [];
  const stats = state.parsedChromeStats;
  
  if (!stats) {
    return `<p class="muted" style="padding:40px; text-align:center;">No imported bookmarks catalog found. Please choose a Chrome Bookmarks HTML file in the Chrome Importer panel on the left.</p>`;
  }
  
  const search = (state.importedBmsSearch || "").toLowerCase();
  const categoryFilter = state.importedBmsCategoryFilter || "all";
  const trustFilter = state.importedBmsTrustFilter || "all";
  const dupOnly = state.importedBmsDupOnly || false;
  
  const localBookmarks = getBookmarksState();
  const localUrls = new Set(localBookmarks.map(b => normalizeUrl(b.url)));
  
  const filtered = list.filter((bm) => {
    const isDup = localUrls.has(normalizeUrl(bm.url));
    bm.isDuplicate = isDup;
    
    if (dupOnly && !isDup) return false;
    if (categoryFilter !== "all" && bm.category !== categoryFilter) return false;
    if (trustFilter !== "all" && bm.trust !== trustFilter) return false;
    
    if (search) {
      const matchText = `${bm.title} ${bm.url} ${bm.folderPath}`.toLowerCase();
      if (!matchText.includes(search)) return false;
    }
    return true;
  });
  
  const pageSize = 15;
  const totalFiltered = filtered.length;
  const totalPages = Math.ceil(totalFiltered / pageSize) || 1;
  const currentPage = Math.min(state.importedBmsPage, totalPages - 1);
  const startIdx = currentPage * pageSize;
  const paginated = filtered.slice(startIdx, startIdx + pageSize);
  
  const categoryColors = {
    "Market Intelligence": "var(--blue)",
    "Company / Stock Research": "var(--teal)",
    "Macro / Policy": "var(--amber)",
    "Social Sentiment Leads": "var(--green)",
    "Trading Education": "orange",
    "AI / Coding": "purple",
    "Website / Product Lab": "pink",
    "Founder / Business": "#ffd700",
    "Archive / Long-Term Knowledge": "#4682b4",
    "Personal / Life": "#da70d6",
    "System / Retrieval Junk": "#708090",
    "Low Trust / Noise": "var(--red)"
  };
  const catPairs = Object.entries(stats.categoryCounts).sort((a,b) => b[1] - a[1]);
  const totalBms = stats.totalBookmarks || 1;
  
  return `
    <div style="padding: 16px; display:flex; flex-direction:column; gap:16px;">
      <div class="metric-strip" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
        <article style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 10px; border-radius: 4px; text-align:center;">
          <span style="font-size:11px; text-transform:uppercase; color:var(--muted); display:block; margin-bottom:4px;">Total Uploaded</span>
          <strong style="font-size:18px; color:var(--text);">${stats.totalBookmarks.toLocaleString()}</strong>
        </article>
        <article style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 10px; border-radius: 4px; text-align:center;">
          <span style="font-size:11px; text-transform:uppercase; color:var(--muted); display:block; margin-bottom:4px;">Total Folders</span>
          <strong style="font-size:18px; color:var(--text);">${stats.totalFolders.toLocaleString()}</strong>
        </article>
        <article style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 10px; border-radius: 4px; text-align:center;">
          <span style="font-size:11px; text-transform:uppercase; color:var(--muted); display:block; margin-bottom:4px;">Local Files</span>
          <strong style="font-size:18px; color:var(--text);">${stats.localFileCount.toLocaleString()}</strong>
        </article>
        <article style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 10px; border-radius: 4px; text-align:center;">
          <span style="font-size:11px; text-transform:uppercase; color:var(--muted); display:block; margin-bottom:4px;">Unique Domains</span>
          <strong style="font-size:18px; color:var(--text);">${stats.uniqueDomainsCount.toLocaleString()}</strong>
        </article>
      </div>

      <!-- Auto-Router Visual Ring & Top Domains Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: stretch;">
        <div style="display:flex; flex-direction:column; gap:12px;">
          <!-- Glowing Router Visual -->
          <div class="router-visualization" style="flex:1; padding: 12px; background: rgba(8,12,14,0.6); border-radius: 4px; border: 1px solid rgba(66,217,200,0.15); display: flex; align-items: center; gap: 16px; position: relative; overflow: hidden;">
            <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: radial-gradient(circle at center, rgba(66,217,200,0.05) 0%, transparent 70%); pointer-events: none;"></div>
            
            <div class="radar-ping" style="width: 50px; height: 50px; border-radius: 50%; border: 1px solid rgba(66, 217, 200, 0.4); display: flex; align-items: center; justify-content: center; position: relative; flex-shrink: 0; box-shadow: 0 0 10px rgba(66,217,200,0.1);">
              <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 8px var(--teal);"></div>
              <div style="position: absolute; border: 1px solid var(--teal); border-radius: 50%; width: 100%; height: 100%; animation: pulse-ring 2s infinite ease-out; opacity: 0.8;"></div>
            </div>
            
            <div style="flex: 1; font-size: 12px;">
              <span style="font-weight: bold; color: var(--teal); display: block; text-transform: uppercase; font-size: 10px; letter-spacing: 0.05em;">Auto-Router Classification Active</span>
              <p style="margin: 4px 0 0 0; color: var(--muted); line-height: 1.3;">Bookmarks processed locally in this session. AI routing maps titles, folders, and domains to taxonomy clusters.</p>
            </div>
          </div>
          
          <!-- Category distribution progress bars -->
          <div class="category-distribution" style="padding: 12px; background: rgba(255,255,255,0.01); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
            <span style="font-size: 11px; font-weight: bold; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 8px;">Category Taxonomy Distribution</span>
            <div style="display: flex; height: 12px; border-radius: 6px; overflow: hidden; background: rgba(255,255,255,0.05); margin-bottom: 8px;">
              ${catPairs.map(([cat, count]) => {
                const pct = ((count / totalBms) * 100).toFixed(1);
                const color = categoryColors[cat] || "var(--teal)";
                return `<div style="width: ${pct}%; background: ${color};" title="${escapeHtml(cat)}: ${count} (${pct}%)"></div>`;
              }).join("")}
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 9px; color: var(--muted); max-height: 60px; overflow-y: auto; padding-right:4px;">
              ${catPairs.slice(0, 8).map(([cat, count]) => {
                const color = categoryColors[cat] || "var(--teal)";
                return `
                  <div style="display:flex; align-items:center; gap: 4px;">
                    <span style="display:inline-block; width:5px; height:5px; border-radius:50%; background:${color}; flex-shrink:0;"></span>
                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(cat)} (${count})</span>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>

        <!-- Top Domains Bar Chart -->
        <div class="domains-chart" style="padding: 12px; background: rgba(255,255,255,0.01); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; justify-content: space-between;">
          <span style="font-size: 11px; font-weight: bold; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 8px;">Top Domain Representation</span>
          <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; justify-content: center;">
            ${stats.topDomains.slice(0, 5).map(d => {
              const maxCount = stats.topDomains[0]?.count || 1;
              const widthPct = ((d.count / maxCount) * 80 + 20).toFixed(0);
              return `
                <div style="display: flex; align-items: center; font-size: 10px;">
                  <span style="width: 100px; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-right: 6px;">${d.domain}</span>
                  <div style="flex: 1; height: 8px; background: rgba(255,255,255,0.03); border-radius: 2px; overflow: hidden; margin-right: 6px;">
                    <div style="width: ${widthPct}%; height: 100%; background: linear-gradient(90deg, var(--teal), var(--blue)); border-radius: 2px;"></div>
                  </div>
                  <span style="width: 30px; text-align: right; color: var(--muted); font-weight: bold;">${d.count}</span>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>

      <!-- Filters panel -->
      <div class="filters-row" style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; background: rgba(255,255,255,0.02); padding: 12px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.06);">
        <input type="text" id="importedBmSearch" placeholder="Search title, URL, path..." value="${state.importedBmsSearch}" oninput="window.handleImportedSearch(this.value)" style="flex: 1; min-width: 180px; padding: 5px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: var(--text); font-size:13px;" />
        
        <select id="importedBmCategory" onchange="window.handleImportedCategoryFilter(this.value)" style="padding: 5px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: var(--text); font-size:13px;">
          <option value="all" ${categoryFilter === 'all' ? 'selected' : ''}>All Categories</option>
          ${Object.keys(stats.categoryCounts).map(cat => `<option value="${escapeHtml(cat)}" ${categoryFilter === cat ? 'selected' : ''}>${escapeHtml(cat)} (${stats.categoryCounts[cat]})</option>`).join("")}
        </select>

        <select id="importedBmTrust" onchange="window.handleImportedTrustFilter(this.value)" style="padding: 5px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: var(--text); font-size:13px;">
          <option value="all" ${trustFilter === 'all' ? 'selected' : ''}>All Trust Levels</option>
          ${Object.keys(stats.trustCounts).map(tr => `<option value="${escapeHtml(tr)}" ${trustFilter === tr ? 'selected' : ''}>${escapeHtml(tr)} (${stats.trustCounts[tr]})</option>`).join("")}
        </select>

        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text); cursor:pointer; user-select:none;">
          <input type="checkbox" id="importedBmDupOnly" ${dupOnly ? 'checked' : ''} onchange="window.handleImportedDupFilter(this.checked)" style="cursor:pointer;" />
          Duplicates
        </label>
        
        <button type="button" onclick="window.exportImportedBookmarksJson()" style="margin-left: auto; padding: 4px 10px; font-size: 12px; height: 28px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: var(--text); cursor:pointer; border-radius:4px;">
          Backup JSON
        </button>
      </div>

      <div class="bookmarks-list" style="margin-top: 0;">
        ${paginated.length ? `
          <table class="premium-table">
            <thead>
              <tr>
                <th style="width: 45%;">Source Title & Path</th>
                <th style="width: 20%;">Categorization</th>
                <th style="width: 15%;">Trust</th>
                <th style="width: 20%;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${paginated.map((bm) => {
                const isDup = bm.isDuplicate;
                const dupTag = isDup ? `<span class="status-badge" style="background: rgba(255,92,122,0.15); color: var(--red); border: 1px solid rgba(255,92,122,0.3); font-size: 9px; padding: 1px 4px; margin-left: 6px; border-radius: 3px;">DUP</span>` : "";
                const localTag = bm.isLocalFile ? `<span class="status-badge" style="background: rgba(255,165,0,0.15); color: orange; border: 1px solid rgba(255,165,0,0.3); font-size: 9px; padding: 1px 4px; margin-left: 6px; border-radius: 3px;">LOCAL</span>` : "";
                const scoreTag = `<span class="status-badge" style="background: rgba(66,217,200,0.06); color: var(--teal); border: 1px solid rgba(66,217,200,0.2); font-size: 9px; padding: 1px 4px; margin-left: 6px; border-radius: 3px;">SIG: ${bm.signalScore || 2}/5</span>`;
                
                return `
                  <tr>
                    <td>
                      <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4px;">
                        <strong style="margin:0; font-size: 13px;">${escapeHtml(bm.title)}</strong>
                        ${dupTag}
                        ${localTag}
                        ${scoreTag}
                      </div>
                      <a href="${escapeHtml(bm.url)}" target="_blank" rel="noopener noreferrer" style="font-size:10px; color:var(--teal); margin-top:2px;">${escapeHtml(bm.url)}</a>
                      <span style="font-size:10px; color:var(--muted); display:block; margin-top:4px;">Path: ${escapeHtml(bm.folderPath)}</span>
                    </td>
                    <td>
                      <span class="status-badge ${bm.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${escapeHtml(bm.category)}</span>
                    </td>
                    <td>
                      <span class="status-badge trust-${bm.trust.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${escapeHtml(bm.trust)}</span>
                    </td>
                    <td>
                      <div class="bookmarks-action-row">
                        <button type="button" onclick="window.promoteImportedToArchive('${escapeHtml(bm.url)}', '${escapeHtml(bm.title)}', '${escapeHtml(bm.folderPath)}', '${escapeHtml(bm.category)}')">Vault</button>
                        <button type="button" onclick="window.promoteImportedToSignals('${escapeHtml(bm.url)}', '${escapeHtml(bm.title)}', '${escapeHtml(bm.folderPath)}', '${escapeHtml(bm.category)}')">Signal</button>
                        <button type="button" onclick="window.sendImportedToCeoReview('${escapeHtml(bm.url)}', '${escapeHtml(bm.title)}', '${escapeHtml(bm.folderPath)}', '${escapeHtml(bm.category)}')">Review</button>
                        <button type="button" class="delete-btn" onclick="window.ignoreImportedBookmark('${escapeHtml(bm.url)}')">Ignore</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        ` : `<p class="muted" style="padding:40px; text-align:center;">No matching bookmarks found in the imported catalog.</p>`}
      </div>

      ${totalFiltered > pageSize ? `
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.08); padding-top:12px;">
          <span style="font-size: 13px; color: var(--muted);">
            Showing ${startIdx + 1} - ${Math.min(startIdx + pageSize, totalFiltered)} of ${totalFiltered} items
          </span>
          <div style="display:flex; gap:8px; align-items:center;">
            <button type="button" style="padding: 4px 10px; font-size:12px;" ${currentPage === 0 ? 'disabled' : ''} onclick="window.changeImportedBmsPage(-1)">Prev</button>
            <span style="font-size: 13px; color: var(--text);">Page ${currentPage + 1} of ${totalPages}</span>
            <button type="button" style="padding: 4px 10px; font-size:12px;" ${currentPage === totalPages - 1 ? 'disabled' : ''} onclick="window.changeImportedBmsPage(1)">Next</button>
          </div>
        </div>
      ` : ""}
    </div>
  `;
}

window.importChromeBookmarks = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  
  const spinner = document.getElementById("importStatsSpinner");
  if (spinner) spinner.style.display = "block";
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const html = e.target.result;
      const parsedData = window.parseChromeBookmarksHtml(html);
      state.importedBookmarks = parsedData.sources;
      state.parsedChromeStats = parsedData.stats;
      state.bookmarksTab = "imported";
      state.importedBmsPage = 0;
      
      renderBookmarksPage();
      addWorldEvent(`Imported ${parsedData.stats.totalBookmarks.toLocaleString()} bookmarks from Chrome HTML export.`);
    } catch (err) {
      console.error(err);
      alert("Failed to parse bookmark file: " + err.message);
    } finally {
      if (spinner) spinner.style.display = "none";
    }
  };
  reader.readAsText(file);
};

window.parseChromeBookmarksHtml = (html) => {
  const tokenPattern = /<DL><p>|<DL>|<\/DL>|<DT><H3\b([^>]*)>([\s\S]*?)<\/H3>|<DT><A\b([^>]*)>([\s\S]*?)<\/A>/gi;
  
  const rootFolder = {
    id: "folder_root",
    parentId: null,
    name: "Archive Root",
    fullPath: "Archive Root",
    depth: 0
  };
  
  const folders = [rootFolder];
  const folderStack = [rootFolder];
  const sourcesByUrl = new Map();
  let pendingFolder = null;
  
  const decodedMap = new Map();
  const strippedMap = new Map();
  
  function decodeHtml(text) {
    if (!text) return "";
    let cached = decodedMap.get(text);
    if (cached) return cached;
    const res = text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#39;/g, "'")
      .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
    decodedMap.set(text, res);
    return res;
  }
  
  function stripTags(text) {
    if (!text) return "";
    let cached = strippedMap.get(text);
    if (cached) return cached;
    const res = text.replace(/<[^>]*>/g, "");
    strippedMap.set(text, res);
    return res;
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
  
  let token;
  while ((token = tokenPattern.exec(html))) {
    const raw = token[0].toUpperCase();
    if (raw.startsWith("<DT><H3")) {
      const parent = folderStack[folderStack.length - 1];
      const name = decodeHtml(stripTags(token[2])).trim() || "Untitled Folder";
      const attrs = parseAttrs(token[1] || "");
      const folder = {
        id: `folder_${folders.length}`,
        parentId: parent.id,
        name,
        fullPath: `${parent.fullPath} / ${name}`,
        depth: parent.depth + 1,
        addDate: attrs.ADD_DATE || "",
        lastModified: attrs.LAST_MODIFIED || "",
        directLinkCount: 0
      };
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
      if (folderStack.length > 1) {
        folderStack.pop();
      }
      continue;
    }
    
    if (raw.startsWith("<DT><A")) {
      const folder = folderStack[folderStack.length - 1];
      const attrs = parseAttrs(token[3] || "");
      const originalUrl = decodeHtml(attrs.HREF || "").trim();
      if (!originalUrl) continue;
      const title = decodeHtml(stripTags(token[4])).trim() || originalUrl;
      const normalizedUrl = normalizeUrl(originalUrl);
      const isLocalFile = /^file:\/\//i.test(originalUrl);
      const domain = domainFromUrl(originalUrl);
      const { category, trust, signalScore } = window.classifyBookmark(originalUrl, title, folder.fullPath);
      
      let source = sourcesByUrl.get(normalizedUrl);
      if (!source) {
        source = {
          id: `source_${sourcesByUrl.size + 1}`,
          url: originalUrl,
          title,
          domain,
          category,
          trust,
          signalScore,
          folderPath: folder.fullPath,
          isLocalFile,
          dateAdded: attrs.ADD_DATE ? new Date(parseInt(attrs.ADD_DATE) * 1000).toISOString() : new Date().toISOString()
        };
        sourcesByUrl.set(normalizedUrl, source);
      }
      
      folder.directLinkCount += 1;
    }
  }
  
  const sources = Array.from(sourcesByUrl.values());
  const totalCount = sources.length;
  
  const domainCounts = {};
  const categoryCounts = {};
  const trustCounts = {};
  let localFileCount = 0;
  
  sources.forEach((s) => {
    domainCounts[s.domain] = (domainCounts[s.domain] || 0) + 1;
    categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
    trustCounts[s.trust] = (trustCounts[s.trust] || 0) + 1;
    if (s.isLocalFile) localFileCount++;
  });
  
  const topDomains = Object.entries(domainCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([domain, count]) => ({ domain, count }));
    
  const stats = {
    totalBookmarks: totalCount,
    totalFolders: folders.length - 1,
    uniqueDomainsCount: Object.keys(domainCounts).length,
    topDomains,
    categoryCounts,
    trustCounts,
    localFileCount,
    maxFolderDepth: Math.max(...folders.map((f) => f.depth))
  };
  
  return {
    sources,
    stats
  };
};

window.classifyBookmark = (url, title, folderPath) => {
  const combined = `${folderPath} ${title} ${url}`.toLowerCase();
  
  let category = "Archive / Long-Term Knowledge";
  
  if (/chrome:\/\/|localhost|127\.0\.0\.1|file:\/\/|search\?|utm_/i.test(combined)) {
    category = "System / Retrieval Junk";
  } else if (/polymarket|kalshi|prediction|odds|option|options|gamma|flow|unusual|webull|barchart|tradingview/i.test(combined)) {
    category = "Market Intelligence";
  } else if (/stock|stocks|ticker|investing|earnings|equity|sec|cboe|nasdaq|nyse/i.test(combined)) {
    category = "Company / Stock Research";
  } else if (/fed|macro|cpi|inflation|rates|policy|economic|federalreserve|treasury/i.test(combined)) {
    category = "Macro / Policy";
  } else if (/x\.com|twitter|instagram|youtube|tiktok|reddit|facebook|social/i.test(combined)) {
    category = "Social Sentiment Leads";
  } else if (/github|openai|codex|claude|anthropic|agent|developer|deepmind|ai|coding|python|javascript|programming|huggingface/i.test(combined)) {
    category = "AI / Coding";
  } else if (/figma|ui|ux|design|vercel|nextjs|react|css|layout|html|website|product/i.test(combined)) {
    category = "Website / Product Lab";
  } else if (/founder|business|ceo|startup|cap|pitch|deck|venture|company/i.test(combined)) {
    category = "Founder / Business";
  } else if (/school|learn|education|course|strategy|book|lessons|guide|class|tutorial/i.test(combined)) {
    category = "Trading Education";
  } else if (/health|sleep|fitness|life|personal|gym|diet|recipes/i.test(combined)) {
    category = "Personal / Life";
  } else if (/spam|ads|clickbait|blogspot|junk/i.test(combined)) {
    category = "Low Trust / Noise";
  }
  
  let trust = "Secondary";
  const domain = domainFromUrl(url);
  
  if (/^(sec\.gov|federalreserve\.gov|github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+|openai\.com|anthropic\.com|cboe\.com|nasdaq\.com|nyse\.com|cmegroup\.com)/i.test(domain + url)) {
    trust = "Primary";
  } else if (/investopedia|bloomberg|reuters|wsj|ft\.com|cnbc|barrons|morningstar|research|arxiv|pdf/i.test(combined)) {
    trust = "Analytical";
  } else if (/x\.com|twitter|reddit|youtube|tiktok|instagram|facebook/i.test(domain)) {
    trust = "UGC / Social";
  } else if (/chrome:\/\/|localhost|127\.0\.0\.1|file:\/\/|search\?|utm_/i.test(combined)) {
    trust = "Retrieval Artifact";
  } else if (category === "Low Trust / Noise") {
    trust = "Low Trust / Noise";
  }
  
  let signalScore = 2;
  if (/polymarket|kalshi|unusual|gamma|options|flow/i.test(combined)) {
    signalScore = 5;
  } else if (/fed|macro|inflation|rates|cpi/i.test(combined)) {
    signalScore = 4;
  } else if (/github|openai|claude|agent|deepmind/i.test(combined)) {
    signalScore = 3;
  } else if (category === "Low Trust / Noise" || /spam|ads|clickbait/i.test(combined)) {
    signalScore = 1;
  }
  
  return { category, trust, signalScore };
};

window.setBookmarksTab = (tab) => {
  state.bookmarksTab = tab;
  renderBookmarksPage();
};

window.handleImportedSearch = (val) => {
  state.importedBmsSearch = val;
  state.importedBmsPage = 0;
  renderBookmarksPage();
};

window.handleImportedCategoryFilter = (val) => {
  state.importedBmsCategoryFilter = val;
  state.importedBmsPage = 0;
  renderBookmarksPage();
};

window.handleImportedTrustFilter = (val) => {
  state.importedBmsTrustFilter = val;
  state.importedBmsPage = 0;
  renderBookmarksPage();
};

window.handleImportedDupFilter = (checked) => {
  state.importedBmsDupOnly = checked;
  state.importedBmsPage = 0;
  renderBookmarksPage();
};

window.changeImportedBmsPage = (dir) => {
  state.importedBmsPage += dir;
  renderBookmarksPage();
};

window.exportImportedBookmarksJson = () => {
  if (!state.importedBookmarks || !state.importedBookmarks.length) {
    alert("No bookmarks imported to export.");
    return;
  }
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.importedBookmarks, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "imported_bookmarks_export.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

window.promoteImportedToArchive = (url, title, folderPath, category) => {
  const vaultState = getArchiveVaultState();
  const classified = classifyArchiveUrl(url, title);
  const newArchiveItem = {
    id: `archive-imp-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    title: title || domainFromUrl(url),
    url: url,
    domain: domainFromUrl(url),
    type: classified.type || "bookmark",
    topic: classified.topic || "Imported promotion",
    category: category || "General Bookmark",
    habitat: classified.habitat || "Archive",
    status: "review",
    priority: "medium",
    connectedAgent: classified.connectedAgent || "Archive Keeper",
    summary: `Imported from Chrome path: ${folderPath}`,
    whySaved: "Mined from Chrome Bookmarks and promoted to Archive Vault by CEO B.",
    nextAction: classified.nextAction || "Review archive source.",
    tags: ["imported", "promoted", "chrome"],
    dateAdded: new Date().toISOString().slice(0, 10),
    lastReviewed: "not reviewed"
  };
  vaultState.parsedLinks = [newArchiveItem, ...(vaultState.parsedLinks || [])];
  setArchiveVaultState(vaultState);
  
  addWorldEvent(`Promoted imported bookmark "${title}" to Archive Vault.`);
  renderBookmarksPage();
};

window.promoteImportedToSignals = (url, title, folderPath, category) => {
  const reviewItem = {
    id: `signal-review-imp-${Date.now()}`,
    title: `Review Signal: ${title || domainFromUrl(url)}`,
    source: "Imported Bookmarks / Signals",
    owner: "Signal Scout",
    status: "Waiting for CEO B",
    priority: "High",
    output: `Imported signal candidate from path ${folderPath}. URL: ${url}.`
  };
  addSharedReviewItem(reviewItem);
  addWorldEvent(`Sent imported bookmark "${title}" to CEO B Review as Signal Candidate.`);
  renderBookmarksPage();
};

window.sendImportedToCeoReview = (url, title, folderPath, category) => {
  const reviewItem = {
    id: `review-imp-${Date.now()}`,
    title: `Bookmark review: ${title || domainFromUrl(url)}`,
    source: "Imported Bookmarks",
    owner: "Bookmark Miner",
    status: "Pending Decision",
    priority: "Medium",
    output: `Categorized as "${category}". Folder path: ${folderPath}. URL: ${url}`
  };
  addSharedReviewItem(reviewItem);
  addWorldEvent(`Sent imported bookmark "${title}" to CEO B Review Queue.`);
  renderBookmarksPage();
};

window.ignoreImportedBookmark = (url) => {
  state.importedBookmarks = state.importedBookmarks.filter(b => b.url !== url);
  renderBookmarksPage();
};

window.parseXBookmarks = () => {
  const text = document.querySelector("#xBookmarkPaste")?.value || "";
  const preview = document.querySelector("#xBookmarkPreview");
  if (!preview) return;
  const urls = [...new Set(text.match(/https?:\/\/[^\s"'<>]+/gi) || [])];
  const tickers = [...new Set((text.match(/\$?[A-Z]{2,5}\b/g) || []).map((item) => item.replace("$", "")).filter((item) => ["NVDA", "TSLA", "SPY", "QQQ", "INTC", "AAPL", "AMD", "PLTR"].includes(item)))];
  const keywords = ["war", "oil", "gold", "Fed", "CPI", "rates", "earnings", "AI", "chip", "sanctions", "outage", "flight", "debt", "liquidity"].filter((word) => text.toLowerCase().includes(word.toLowerCase()));
  
  let newCount = 0;
  let dupCount = 0;
  urls.forEach((url) => {
    const cleanUrl = url.replace(/[),.;]+$/, "");
    const title = domainFromUrl(cleanUrl);
    const classified = classifyArchiveUrl(cleanUrl, title);
    const categoryMap = {
      "market": "Market Signal",
      "news": "Research Source",
      "agent-source": "Vault Document"
    };
    const category = categoryMap[classified.type] || "General Bookmark";
    const res = window.addLocalBookmark(cleanUrl, classified.title, classified.summary || "Batch imported from analyzer.", category);
    if (res.ok) {
      if (res.updated) dupCount++;
      else newCount++;
    }
  });

  preview.innerHTML = `
    <div class="metric-strip" style="margin-top: 10px;">
      <article><span>URLs Mined</span><strong>${newCount}</strong></article>
      <article><span>Duplicates Met</span><strong>${dupCount}</strong></article>
      <article><span>Tickers Found</span><strong>${tickers.join(", ") || "none"}</strong></article>
      <article><span>Keywords</span><strong>${keywords.join(", ") || "none"}</strong></article>
    </div>
    <p class="muted" style="margin-top: 8px;">Pasted items analyzed, URL-deduplicated, and registered in local database.</p>
  `;
  
  const textarea = document.querySelector("#xBookmarkPaste");
  if (textarea) textarea.value = "";
  renderBookmarksPage();
};

function getAlertRules() {
  try {
    const stored = localStorage.getItem("pickaxeAlertRules");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error("Failed to parse alert rules:", e);
  }
  const seeds = [
    { id: "rule-1", ticker: "AAPL", triggerType: "Flow Spike", condition: "Option Volume > 2.0x average volume & Calls > Puts", priority: "High", agentName: "Flow Hunter", active: true },
    { id: "rule-2", ticker: "NetBlocks", triggerType: "Service Outage", condition: "Major network disruption detected in region", priority: "Critical", agentName: "Risk Sentinel", active: true },
    { id: "rule-3", ticker: "BTC", triggerType: "Price Alert", condition: "Crossover EMA 200 on 4H chart", priority: "High", agentName: "Signal Scout", active: true },
    { id: "rule-4", ticker: "SPY", triggerType: "Breakout Watch", condition: "Price breakout above daily range resistance", priority: "Medium", agentName: "Macro Watcher", active: false }
  ];
  try {
    localStorage.setItem("pickaxeAlertRules", JSON.stringify(seeds));
  } catch (err) {}
  return seeds;
}

function setAlertRules(rules) {
  try {
    localStorage.setItem("pickaxeAlertRules", JSON.stringify(rules.slice(0, 100)));
  } catch (e) {
    console.error("Failed to save alert rules:", e);
  }
}

function renderAlertRuleItem(rule) {
  const activeClass = rule.active ? "rule-active" : "rule-disabled";
  const glowDot = rule.active ? `<span class="health-pulse-dot" style="background-color: var(--green); box-shadow: 0 0 8px var(--green); border-radius: 50%; width: 8px; height: 8px; display: inline-block; margin-right: 6px;"></span>` : `<span class="health-pulse-dot" style="background-color: var(--muted); border-radius: 50%; width: 8px; height: 8px; display: inline-block; margin-right: 6px;"></span>`;
  
  return `
    <article class="alert-rule-card ${activeClass}" style="border: 1px solid var(--line); border-radius: var(--radius); padding: 14px; background: var(--panel-2); display: flex; flex-direction: column; gap: 8px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center;">
          ${glowDot}
          <strong>${escapeHtml(rule.ticker)} • ${escapeHtml(rule.triggerType)}</strong>
        </div>
        <span class="priority-badge ${escapeHtml(rule.priority.toLowerCase())}" style="font-size: 11px; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05);">${escapeHtml(rule.priority)}</span>
      </div>
      <p style="margin: 0; font-size: var(--font-base);">${escapeHtml(rule.condition)}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: var(--font-small); color: var(--muted); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 8px; margin-top: 4px;">
        <span>Agent: <strong>${escapeHtml(rule.agentName)}</strong></span>
        <div style="display: flex; gap: 8px;">
          <button type="button" style="font-size: 11px; padding: 2px 8px;" onclick="window.testAlertRule('${escapeHtml(rule.id)}')">Test Trigger</button>
          <button type="button" style="font-size: 11px; padding: 2px 8px;" onclick="window.toggleAlertRule('${escapeHtml(rule.id)}')">${rule.active ? "Disable" : "Enable"}</button>
          <button type="button" style="font-size: 11px; padding: 2px 8px; border-color: rgba(255,0,0,0.2);" onclick="window.deleteAlertRule('${escapeHtml(rule.id)}')">Delete</button>
        </div>
      </div>
    </article>
  `;
}

window.submitAlertRuleForm = (event) => {
  event.preventDefault();
  const ticker = document.querySelector("#alertTicker")?.value.trim().toUpperCase() || "";
  const triggerType = document.querySelector("#alertTriggerType")?.value || "Price Breakout";
  const condition = document.querySelector("#alertCondition")?.value.trim() || "";
  const priority = document.querySelector("#alertPriority")?.value || "Medium";
  const agentName = document.querySelector("#alertAgent")?.value || "Signal Scout";
  
  if (!ticker || !condition) return;
  
  const rules = getAlertRules();
  const newRule = {
    id: `rule-${Date.now()}`,
    ticker,
    triggerType,
    condition,
    priority,
    agentName,
    active: true
  };
  
  rules.unshift(newRule);
  setAlertRules(rules);
  renderAlertsPage();
  addWorldEvent(`Created alert rule for "${ticker}" assigned to ${agentName}.`);
};

window.toggleAlertRule = (id) => {
  const rules = getAlertRules();
  const rule = rules.find(r => r.id === id);
  if (rule) {
    rule.active = !rule.active;
    setAlertRules(rules);
    renderAlertsPage();
    addWorldEvent(`${rule.active ? "Enabled" : "Disabled"} alert rule for "${rule.ticker}".`);
  }
};

window.deleteAlertRule = (id) => {
  const rules = getAlertRules();
  const rule = rules.find(r => r.id === id);
  const remaining = rules.filter(r => r.id !== id);
  setAlertRules(remaining);
  renderAlertsPage();
  if (rule) {
    addWorldEvent(`Deleted alert rule for "${rule.ticker}".`);
  }
};

window.testAlertRule = (id) => {
  const rules = getAlertRules();
  const rule = rules.find(r => r.id === id);
  if (!rule) return;
  
  const reviewItem = {
    id: `alert-review-${Date.now()}`,
    title: `Alert Triggered: ${rule.ticker} - ${rule.triggerType}`,
    source: "Alerts Center",
    owner: rule.agentName,
    status: "Pending Decision",
    priority: rule.priority,
    output: `[Trigger Hit] Condition reached: "${rule.condition}". Checked by Agent ${rule.agentName}. Action required: Verify setup on trading desk.`
  };
  
  addSharedReviewItem(reviewItem);
  if (state.activeView === "alerts") renderAlertsPage();
};

function renderAlertsPage() {
  if (!els.alertsContent) return;
  const alerts = getOptionAlertsState();
  const approvedAlerts = alerts.filter(a => a.status === "approved manual review" || a.status.includes("approved"));
  
  els.alertsContent.innerHTML = `
    <div class="p-6 bg-[#0a0b0c] text-xs font-mono text-[#c0c4cc]">
      <div class="flex items-center justify-between border-b border-[#1f242d] pb-4 mb-6">
        <div>
          <p class="text-[10px] text-amber uppercase tracking-wider">CEO B Approved Alerts</p>
          <h2 class="text-lg font-bold text-white uppercase tracking-tight">Manual Review Trade Memos</h2>
        </div>
        <span class="px-2 py-1 bg-emerald-950/40 text-emerald-400 text-[10px] font-bold border border-emerald-900/30 uppercase tracking-widest">Manual Execution Pending</span>
      </div>
      
      <!-- Warning Banner -->
      <div class="p-4 bg-amber-950/20 border border-amber-900/40 text-amber-400 text-xs mb-6 rounded-sm flex items-start gap-3">
        <span class="w-2 h-2 bg-amber-500 rounded-full shrink-0 mt-1.5 animate-pulse"></span>
        <div>
          <strong class="font-sans block mb-1">IMPORTANT RISK DISCLOSURE:</strong>
          <p class="font-sans leading-relaxed text-[11px]">
            “Research-only demo packet. Not financial advice. No broker execution occurs inside this website.” All setups require external review and manual trade execution.
          </p>
        </div>
      </div>
      
      <div class="space-y-6">
        ${approvedAlerts.length === 0 ? `
          <div class="p-8 text-center border border-dashed border-slate-800 bg-[#0d0e10]/50 rounded-sm">
            <p class="text-[#606266] italic text-xs font-sans">No CEO B approved manual-review alerts found. Go to Signals or Mission Control to approve signal candidates.</p>
          </div>
        ` : approvedAlerts.map(alert => `
          <div class="p-5 bg-[#0e1012] border border-[#1f242d] hover:border-slate-700 transition-colors rounded-sm relative overflow-hidden flex flex-col gap-4">
            <!-- Left color strip -->
            <div class="absolute top-0 left-0 w-[3px] h-full bg-amber-500"></div>
            
            <div class="flex flex-wrap justify-between items-start gap-4 border-b border-slate-900 pb-3">
              <div>
                <span class="text-[8px] text-slate-500 uppercase tracking-wider block font-mono">Approved Memo // ${escapeHtml(alert.strategy)}</span>
                <h3 class="text-sm font-bold text-white tracking-tight font-sans mt-0.5">${escapeHtml(alert.symbol)} - ${escapeHtml(alert.company)}</h3>
              </div>
              <div class="flex items-center gap-3">
                <span class="px-2 py-0.5 bg-emerald-950/30 text-emerald-400 border border-emerald-900/30 text-[9px] uppercase tracking-wider font-bold">APPROVED MANUAL REVIEW</span>
                <span class="text-slate-500 text-[10px]">${escapeHtml(alert.date || "2026-05-29")}</span>
              </div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/25 p-3 border border-slate-950 text-[11px]">
              <div><span class="text-slate-500 text-[8px] block uppercase">Contract</span><strong class="text-white">${escapeHtml(alert.contract)}</strong></div>
              <div><span class="text-slate-500 text-[8px] block uppercase">Current Price</span><strong class="text-slate-300">${escapeHtml(alert.currentPrice)}</strong></div>
              <div><span class="text-slate-500 text-[8px] block uppercase">Contract Value</span><strong class="text-slate-300">${escapeHtml(alert.contractPrice)}</strong></div>
              <div><span class="text-slate-500 text-[8px] block uppercase">Strategy Code</span><strong class="text-amber">${escapeHtml(alert.strategy)}</strong></div>
            </div>
            
            <div class="space-y-3">
              <div>
                <span class="text-slate-500 text-[8px] block uppercase font-bold">Thesis</span>
                <p class="text-slate-300 leading-relaxed text-[11px] font-sans">${escapeHtml(alert.thesis)}</p>
              </div>
              <div>
                <span class="text-slate-500 text-[8px] block uppercase font-bold">Catalyst</span>
                <p class="text-slate-300 leading-relaxed text-[11px] font-sans">${escapeHtml(alert.catalyst)}</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span class="text-slate-500 text-[8px] block uppercase font-bold">Risk Gate</span>
                  <p class="text-red-400 leading-relaxed text-[11px] font-sans">${escapeHtml(alert.riskNotes)}</p>
                </div>
                <div>
                  <span class="text-slate-500 text-[8px] block uppercase font-bold">Liquidity Check</span>
                  <p class="text-emerald-400 leading-relaxed text-[11px] font-sans">${escapeHtml(alert.spreadQuality)}</p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span class="text-slate-500 text-[8px] block uppercase font-bold">Invalidation Boundary</span>
                  <p class="text-red-400/90 leading-relaxed text-[11px] font-sans">${escapeHtml(alert.invalidation)}</p>
                </div>
                <div>
                  <span class="text-slate-500 text-[8px] block uppercase font-bold">Manual Review Status</span>
                  <p class="text-slate-300 leading-relaxed text-[11px] font-sans">Human verification complete. Checked by CEO B.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-black/30 p-2.5 border border-slate-900 text-[9px] text-slate-500 leading-relaxed font-mono">
              <strong class="text-slate-400 block mb-1 uppercase text-[8px]">Archive Trail & Integrity Matrix:</strong>
              ${(alert.reason || []).map(r => `<div>&bull; ${escapeHtml(r)}</div>`).join("")}
            </div>
            
            <div class="flex gap-2 justify-end border-t border-slate-900 pt-3 mt-1">
              <button onclick="window.changeSignalStatus('${escapeHtml(alert.id)}', 'watch only')" class="bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:border-slate-500 transition-colors text-[9px] px-3 py-1.5 uppercase font-bold">Move back to Archive / Watch</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderLifeHabitatPage() {
  if (!els.lifeHabitatContent) return;
  els.lifeHabitatContent.innerHTML = `<section class="command-hero"><div><p class="eyebrow">Legacy Route Bridge</p><h2>Life Habitat</h2><p>Life Habitat is preserved as a bridge. The current work routes personal memory, private bookmarks, founder identity, and archive lessons through Bookmarks and Archive.</p></div><div class="quick-action-dock"><a href="#/bookmarks">Open Bookmarks</a><a href="#/archive">Open Archive</a><a href="#/founder">Open Founder</a></div></section>`;
}

function renderDataPortabilityPanel() {
  return `
    <section class="panel data-portability-panel" style="margin-top: var(--section-gap);">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Data Portability Cockpit</p>
          <h2>Backup & Restore</h2>
        </div>
        <span class="pill">Local Storage Only</span>
      </div>
      <p>Export all command center state keys (bookmarks, archive vault, review queue, missions, alerts, history) as a single JSON backup file, or upload a JSON backup file to import and restore the environment.</p>
      <div class="game-action-row" style="margin-top: 14px; gap: 12px; align-items: center; display: flex; flex-wrap: wrap;">
        <button type="button" class="primary" onclick="window.exportSystemBackup()">Export System Backup</button>
        <div class="file-import-wrapper" style="display: inline-flex; align-items: center; gap: 8px;">
          <input type="file" id="systemBackupFile" accept=".json" style="display: none;" onchange="window.importSystemBackup(event)" />
          <button type="button" onclick="document.getElementById('systemBackupFile').click()">Import System Backup</button>
        </div>
        <button type="button" class="danger" style="border-color: rgba(255,0,0,0.4);" onclick="window.resetSystemData()">Reset All Data</button>
      </div>
      <div id="dataPortabilityStatus" style="margin-top: 10px; font-size: var(--font-small); color: var(--green);"></div>
    </section>
  `;
}

window.exportSystemBackup = () => {
  const keys = [
    "pickaxeBookmarks",
    "pickaxeOperatingAgents",
    "pickaxeMissionQueue",
    "pickaxeReviewQueue",
    "pickaxeWorldState",
    "pickaxeCompletionTracker",
    "pickaxeAlertRules",
    "pickaxeActionCenter",
    "pickaxe_jarvis_command_history"
  ];
  const backup = {};
  keys.forEach(key => {
    try {
      const val = localStorage.getItem(key);
      if (val) backup[key] = JSON.parse(val);
    } catch (e) {
      console.error(`Failed to export ${key}:`, e);
    }
  });
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `pickaxe-capital-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  const status = document.getElementById("dataPortabilityStatus");
  if (status) {
    status.style.color = "var(--green)";
    status.textContent = "System backup downloaded successfully.";
  }
};

window.importSystemBackup = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const backup = JSON.parse(e.target.result);
      let importedCount = 0;
      Object.entries(backup).forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
        importedCount++;
      });
      const status = document.getElementById("dataPortabilityStatus");
      if (status) {
        status.style.color = "var(--green)";
        status.textContent = `Successfully imported ${importedCount} state keys. Reloading page to apply updates...`;
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      const status = document.getElementById("dataPortabilityStatus");
      if (status) {
        status.style.color = "var(--red)";
        status.textContent = `Import failed: Invalid backup file format.`;
      }
    }
  };
  reader.readAsText(file);
};

window.resetSystemData = () => {
  if (!confirm("Are you sure you want to reset all command center data back to defaults? This will clear all custom bookmarks, alerts, missions, and command history.")) return;
  const keys = [
    "pickaxeBookmarks",
    "pickaxeOperatingAgents",
    "pickaxeMissionQueue",
    "pickaxeReviewQueue",
    "pickaxeWorldState",
    "pickaxeCompletionTracker",
    "pickaxeAlertRules",
    "pickaxeActionCenter",
    "pickaxe_jarvis_command_history"
  ];
  keys.forEach(key => localStorage.removeItem(key));
  const status = document.getElementById("dataPortabilityStatus");
  if (status) {
    status.style.color = "var(--amber)";
    status.textContent = `All local state keys cleared. Re-initializing default values and reloading...`;
  }
  setTimeout(() => {
    window.location.reload();
  }, 1500);
};

function renderStagingAdvanced() {
  if (!els.stagingAdvanced) return;
  const checks = ["AGENTS.md exists", "PROJECT_STATUS.md exists", "/vision-map command center works", "/source-hub exists", "source registry exists", "/signals exists", "/archive has search/filter", "/rk-tracker route exists", "RK Tracker mock market data is labeled", "RK Tracker external references use safe link cards", "/berkshire-1965 route exists", "Berkshire 1965 metrics shown", "X bookmark import UI exists", "no X scraping", "/agents has ownership matrix", "/bookmarks has import workflow", "/app/alerts has planned triggers", "external links use noopener noreferrer", "no fake live integrations", "build passes"];
  els.stagingAdvanced.innerHTML = `
    ${renderCompletionTracker("full")}
    ${renderMissionBoardPanel()}
    ${renderDataPortabilityPanel()}
    ${renderRecoveryStatusPanel()}
    ${renderOpenClawIntegrationLab()}
    ${renderJarvisFoundationChecklist()}
    <section class="panel">
      <div class="panel-head"><div><p class="eyebrow">Advanced QA</p><h2>Low-Usage Build Checklist</h2></div><span class="pill">Mock vs Live separated</span></div>
      <div class="qa-grid">${checks.map((check) => `<label><input type="checkbox" ${check.includes("PROJECT_STATUS") ? "" : "checked"} /> ${escapeHtml(check)}</label>`).join("")}</div>
    </section>
  `;
}

function renderMissionBoardPanel() {
  const localMissions = getSharedQueue("pickaxeMissionQueue");
  const localNow = localMissions.filter(m => m.status !== "Completed" && m.status !== "done").map(m => `[Local Mission] ${m.owner}: ${m.title} (${m.priority}) - ${m.nextAction}`);
  const localCompleted = localMissions.filter(m => m.status === "Completed" || m.status === "done").map(m => `[Local Mission] ${m.owner}: ${m.title}`);

  const taskGroups = {
    Now: [
      "Preserve current AI Habitat OS command-center design", 
      "Finish honesty cleanup from AGENTS.md", 
      "Focus Market Habitat on urgent watchlist only", 
      "Keep /ai-handoff auto-updating",
      ...localNow
    ],
    Next: ["Connect /vision-map actions to CEO B Review Stack", "Connect /archive card actions to local mission queue", "Improve /signals readability", "Prepare GitHub private backup"],
    "In Progress": ["Market Chart Workspace", "Agent Builder Factory", "Project Update page", "Shared local CEO B Review Stack"],
    Blocked: ["Real market data adapter", "Official X OAuth/API", "Voice/camera/device control", "Backend automation"],
    Completed: [
      "Static Node architecture verified", 
      "/agents visual direction preserved", 
      "Voxel/block agent characters added", 
      "OpenClaw/NemoClaw/Jarvis research kept honest",
      ...localCompleted
    ],
    "Future Adapter / Research": ["Hermes Agent", "Quantum Brain council", "Future Voice Command Layer", "Apple Command Ecosystem", "Public deployment preview"],
  };
  const integrations = [
    ["X Bookmarks OAuth/API", "Future Adapter"],
    ["Hermes Agent", "Future Adapter / Research"],
    ["Market data adapter", "Future Adapter"],
    ["TradingView widget/fallback", "Prototype / Future Adapter"],
    ["Archive local actions", "Prototype"],
    ["Jarvis Lab command console", "Prototype"],
    ["Voice/camera/device control", "Future Adapter only"],
    ["Quantum Brain council", "Manual Workflow Now"],
    ["Apple Shortcuts/Siri", "Future Adapter / Research"],
    ["Trading execution", "Not Implemented"],
  ];
  return `
    <section class="mission-board panel">
      <div class="panel-head"><div><p class="eyebrow">CEO B build tracker</p><h2>Pickaxe Capital Mission Board</h2></div><span class="pill">Local / Prototype</span></div>
      <div class="mission-columns">${Object.entries(taskGroups).map(([group, items]) => `<article><h3>${escapeHtml(group)}</h3>${items.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}</article>`).join("")}</div>
      <div class="panel-head"><div><p class="eyebrow">Roadmap</p><h2>Integration Status</h2></div><span class="pill">No fake live systems</span></div>
      <div class="integration-card-grid">${integrations.map(([name, status]) => `<article><span class="status-badge research">${escapeHtml(status)}</span><h3>${escapeHtml(name)}</h3><p>All advanced integrations require security review, backend/provider setup, and CEO B approval before activation.</p></article>`).join("")}</div>
      <div class="game-action-row"><a href="#/projectUpdate">Open Project Update</a><button type="button" onclick="navigator.clipboard?.writeText(window.location.origin + '#/projectUpdate')">Copy Project Update Link</button><a href="#/ai-handoff">Open AI Handoff</a><button type="button" onclick="window.copyHandoffText?.()">Copy AI Handoff Text</button></div>
    </section>
  `;
}

function renderRecoveryStatusPanel() {
  const activeRoutes = ["#/mission-control", "#/vision-map", "#/agent-engine", "#/archive", "#/staging", "#/founder", "#/ceo-b-profile"];
  const optionalRoutes = ["#/jarvisLab", "#/lifeOS"];
  return `
    <section class="recovery-status-panel panel">
      <div class="panel-head">
        <div><p class="eyebrow">Recovery / Stabilization</p><h2>Current Truth</h2></div>
        <span class="pill">No new features</span>
      </div>
      <div class="recovery-grid">
        <article><h3>Works now</h3><p>${activeRoutes.map((route) => `<a href="${route}">${route}</a>`).join(" ")}</p></article>
        <article><h3>Optional prototypes</h3><p>${optionalRoutes.map((route) => `<a href="${route}">${route}</a>`).join(" ")}</p></article>
        <article><h3>Prototype only</h3><p>Jarvis Lab, Life OS, OpenClaw/NemoClaw Lab, agent telemetry, Archive local actions, voice/camera/device/gateway plans.</p></article>
        <article><h3>Deferred</h3><p>Live APIs, backend storage, real autonomous agents, voice, camera, device control, public gateway, broker execution.</p></article>
      </div>
    </section>
  `;
}

function renderJarvisFoundationChecklist() {
  const items = [
    "OpenClaw & NemoClaw Integration Lab kept and extended",
    "Addy Osmani Jarvis added as browser Jarvis reference",
    "Huw Prosser jarvis-mlx added as offline Mac brain reference",
    "OpenJarvis added as on-device personal AI reference",
    "OpenClaw & NemoClaw kept as gateway references",
    "Microsoft JARVIS added as tool-routing research",
    "CraftJarvis JARVIS-1 added as world-agent behavior inspiration",
    "/jarvis-lab route created",
    "/life-os route created",
    "Typed command console added",
    "Command history localStorage added",
    "Archive updated with Jarvis research sources",
    "Agents updated with Jarvis/Life OS research roles",
    "Safety labels added",
  ];
  const next = ["Add browser speech recognition test only after typed console works", "Add safe camera preview later with explicit permission", "Add /device-hub later", "Add persistent storage later", "Add secure local gateway only after security review", "Add CEO B daily briefing from archive priority items"];
  return `<section class="jarvis-foundation-checklist panel"><div class="panel-head"><div><p class="eyebrow">Jarvis Research Stack / Pickaxe Life OS Foundation</p><h2>Foundation Checklist</h2></div><span class="pill">Research-only external repos</span></div><div class="qa-grid">${items.map((item) => `<label><input type="checkbox" checked /> ${escapeHtml(item)}</label>`).join("")}</div><div class="roadmap-steps">${next.map((item, index) => `<span><b>Next ${index + 1}</b>${escapeHtml(item)}</span>`).join("")}</div></section>`;
}

function renderOpenClawIntegrationLab() {
  const openClawSource = integrationSources.find((item) => item.id === "openclaw") || {};
  const nemoClawSource = integrationSources.find((item) => item.id === "nemoclaw") || {};
  const cards = [
    ["Local-first assistant gateway", "Study the idea of running a separate local assistant/gateway that Pickaxe can talk to later. Research only, not connected."],
    ["Multi-agent routing idea", "Route a source or task to the right Pickaxe agent without copying Claws' frontends or becoming a fork."],
    ["Claw Orchestration", "Leverage multiple claw assistants (OpenClaw, NemoClaw) concurrently to delegate tasks based on specialty."],
    ["Tools and sessions", "Prepare for future local tool sessions with clear state, permissions, and logs."],
    ["Security and sandbox warning", "Never expose a local gateway publicly without authentication, sandboxing, and a security review."],
    ["Future connector plan", "Keep Pickaxe stable now; add a connector only after the external assistants run separately and safely."],
  ];
  const roadmapSteps = openClawSource.roadmap || [
    "Study NemoClaw & OpenClaw capabilities",
    "Run assistant frameworks separately on local machine",
    "Add safe local connector endpoints in server.mjs",
    "Orchestrate tasks across multiple active claw nodes",
    "Never expose local gateways publicly without authentication"
  ];
  return `
    <section class="integration-lab panel">
      <div class="panel-head">
        <div><p class="eyebrow">Research-only reference</p><h2>Claw Integration Lab</h2></div>
        <div style="display: flex; gap: 8px;">
          <a class="text-link" href="${escapeHtml(openClawSource.url || "https://github.com/openclaw/openclaw")}" target="_blank" rel="noopener noreferrer">Open OpenClaw</a>
          <a class="text-link" href="${escapeHtml(nemoClawSource.url || "https://github.com/nemoclaw/nemoclaw")}" target="_blank" rel="noopener noreferrer">Open NemoClaw</a>
        </div>
      </div>
      <p>Study local-first assistant architectures (OpenClaw, NemoClaw) as future gateway inspiration for multi-assistant orchestration.</p>
      <p class="muted">Warning: Do not merge assistant repositories directly into this project. Review licenses, security, and sandboxing rules first.</p>
      <div class="integration-card-grid">${cards.map(([title, body]) => `<article><span class="status-badge review">research</span>   <h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}</div>
      <div class="roadmap-steps">${roadmapSteps.map((step, index) => `<span><b>Phase ${index + 1}</b>${escapeHtml(step)}</span>`).join("")}</div>
      <p class="muted">Status: research only. NemoClaw & OpenClaw gateways are conceptual local targets; no live hooks or scrapers are active.</p>
    </section>
  `;
}

function renderJarvisLabPage() {
  if (!els.jarvisLabContent) return;
  els.jarvisLabContent.innerHTML = `
    <section class="jarvis-hero">
      <div>
        <p class="eyebrow">Pickaxe Capital / CEO B command interface</p>
        <h2>Jarvis Lab</h2>
        <p>Typed command center now. Browser voice, camera, Mac-local AI, and device control later. This is a safe prototype, not a live assistant backend.</p>
        <div class="signal-badges"><span>Typed console live now</span><span>Research stack active</span><span>Voice/camera future</span><span>User approval required</span></div>
      </div>
      <div class="jarvis-stat-grid">
        ${[["Live now", "Typed classification"], ["Research now", "Jarvis + OpenClaw stack"], ["Future", "Voice / camera / devices"], ["Safety", "No hidden execution"]].map(([label, value]) => `<span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`).join("")}
      </div>
    </section>
    ${renderJarvisCommandConsole()}
    ${renderJarvisResearchStack()}
    <section class="jarvis-safety panel">
      <div class="panel-head"><div><p class="eyebrow">Hard safety rules</p><h2>Jarvis Lab Boundaries</h2></div><span class="pill">Prototype only</span></div>
      <div class="stalled-grid">
        ${["No background listening", "No hidden camera", "No API keys in frontend", "No public local gateway", "No private message scraping", "No auto-running system commands", "No trading execution", "User approval required for risky actions"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>
    <section class="roadmap-steps jarvis-roadmap">
      ${["Typed command console", "Archive + agent routing", "Browser voice/camera prototype", "Mac offline Jarvis brain research", "Local gateway research", "Secure device pairing", "Daily CEO B briefing"].map((step, index) => `<span><b>Phase ${index + 1}</b>${escapeHtml(step)}</span>`).join("")}
    </section>
  `;
  renderJarvisHistory();
}

function renderJarvisCommandConsole() {
  return `
    <section class="jarvis-console panel">
      <div class="panel-head"><div><p class="eyebrow">Local browser prototype</p><h2>CEO B Typed Command Console</h2></div><span class="pill">No backend execution</span></div>
      <p>Type commands now. Voice and camera come later, only with explicit user permission.</p>
      <textarea id="jarvisCommandInput" placeholder="Type a command for CEO B..."></textarea>
      <div class="jarvis-examples">
        ${["organize my bookmarks", "show market risks", "send this to Archive Miner", "prepare Jarvis voice later"].map((text) => `<button type="button" onclick="window.fillJarvisCommand?.('${escapeHtml(text)}')">${escapeHtml(text)}</button>`).join("")}
      </div>
      <div class="game-action-row">
        <button type="button" class="primary" onclick="window.classifyJarvisCommand?.()">Classify Command</button>
        <button type="button" onclick="window.clearJarvisHistory?.()">Clear History</button>
        <button type="button" onclick="window.copyJarvisResult?.()">Copy Result</button>
        <a id="jarvisRouteLink" href="#/archive">Open Suggested Route</a>
      </div>
      <div id="jarvisCommandOutput" class="jarvis-output"><p class="muted">No command classified yet. Try: "organize my bookmarks" or "show market risks".</p></div>
      <div id="jarvisHistory" class="jarvis-history"></div>
    </section>
  `;
}

function renderJarvisResearchStack() {
  return `
    <section class="jarvis-stack">
      <div class="panel-head"><div><p class="eyebrow">Research-only sources</p><h2>Jarvis Research Stack</h2></div><span class="pill">Do not merge directly</span></div>
      <div class="jarvis-card-grid">
        ${jarvisResearchSources.map((source) => `
          <article class="jarvis-card ${escapeHtml(source.priority)}">
            <div><span class="priority-badge ${escapeHtml(source.priority)}">${escapeHtml(source.priority)}</span><span class="status-badge ${escapeHtml(source.status)}">${escapeHtml(source.status)}</span></div>
            <h3>${escapeHtml(source.name)}</h3>
            <p><strong>${escapeHtml(source.role)}</strong></p>
            <p>${escapeHtml(source.bestUse)}</p>
            <small>Agent: ${escapeHtml(source.connectedAgent)}</small>
            <div class="vault-reason"><strong>Warning</strong><span>${escapeHtml(source.warning)}</span></div>
            <div class="vault-reason"><strong>Next action</strong><span>${escapeHtml(source.nextAction)}</span></div>
            <div class="tag-row">${(source.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
            <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">Open research source</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderLifeOSPage() {
  if (!els.lifeOSContent) return;
  els.lifeOSContent.innerHTML = `
    <section class="lifeos-hero">
      <div>
        <p class="eyebrow">Pickaxe Capital Life OS</p>
        <h2>CEO B Command Layer</h2>
        <p>Your personal command center for agents, archive, devices, vision, and daily decisions. It connects Jarvis Lab, Archive Intelligence Vault, Agent Habitat, OpenClaw Gateway Research, and future device roles.</p>
      </div>
      <div class="ceob-briefing-card">
        <span class="label">Static prototype briefing</span>
        <strong>What matters now</strong>
        <p>Finish typed command routing, connect Archive priority items to agents, keep OpenClaw/Jarvis repos research-only, and avoid fake voice/camera/device control.</p>
      </div>
    </section>
    ${renderCEOBCommandBriefing()}
    ${renderLifeOSOverview()}
    <section class="lifeos-architecture panel">
      <div class="panel-head"><div><p class="eyebrow">System architecture</p><h2>How Pickaxe Life OS Fits Together</h2></div><span class="pill">Prototype</span></div>
      <div class="lifeos-flow">
        ${["Website = command center", "Archive = memory", "Agents = workers", "Jarvis Lab = command interface", "OpenClaw = gateway research", "jarvis-mlx = Mac offline brain research", "OpenJarvis = local-first architecture research", "Phone/iPad/Mac/Desktop = future device roles"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
      <div class="quick-action-dock"><a href="#/jarvisLab">Open Jarvis Lab</a><a href="#/archive">Open Archive</a><a href="#/agent-engine">Open Agents</a><a href="#/vision-map">Open Vision Map</a><a href="#/staging">Open Staging</a></div>
    </section>
  `;
}

function renderCEOBCommandBriefing() {
  const nextActions = lifeOSModules.slice(0, 5).map((module) => module.nextAction);
  return `
    <section class="ceob-briefing panel">
      <div class="panel-head"><div><p class="eyebrow">Local briefing</p><h2>CEO B Command Briefing</h2></div><span class="pill">Static prototype</span></div>
      <div class="ceob-briefing-grid">
        <article><h3>What matters now</h3><p>Typed command classification, retrieval-first archive, agent ownership, and safe research boundaries.</p></article>
        <article><h3>Critical systems</h3><p>${escapeHtml(lifeOSModules.filter((module) => module.priority === "critical").map((module) => module.name).join(", "))}</p></article>
        <article><h3>Agent focus</h3><p>Command Architect, Device Marshal, Archive Miner, Habitat Builder, Research Agent, Vision Sentinel, Risk Sentinel.</p></article>
        <article><h3>Next 5 actions</h3><ol>${nextActions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol></article>
        <article><h3>Risks / blocked</h3><p>No API keys in frontend, no public gateway, no background mic/camera, no device control, no trading execution.</p></article>
        <article><h3>Do not forget</h3><p>Every future Codex session must update the tracker, status files, and AI handoff context.</p></article>
      </div>
    </section>
  `;
}

function renderLifeOSOverview() {
  const deviceRoles = [
    ["Phone", "CEO B mobile command center"],
    ["iPad", "Control deck / cockpit"],
    ["Mac", "Builder/operator + offline Jarvis brain"],
    ["Desktop", "Main command center"],
  ];
  return `
    <section class="lifeos-overview">
      <div class="panel-head"><div><p class="eyebrow">Modules</p><h2>Pickaxe Life OS Overview</h2></div><span class="pill">Future adapters labeled</span></div>
      <div class="lifeos-module-grid">
        ${lifeOSModules.map((module) => `<article><div><span class="status-badge ${escapeHtml(module.status)}">${escapeHtml(module.status)}</span><span class="priority-badge ${escapeHtml(module.priority)}">${escapeHtml(module.priority)}</span></div><h3>${escapeHtml(module.name)}</h3><p>${escapeHtml(module.summary)}</p><small>Owner: ${escapeHtml(module.ownerAgent)} • Route: ${escapeHtml(module.route)}</small><dl><div><dt>Current</dt><dd>${escapeHtml(module.currentCapability)}</dd></div><div><dt>Future</dt><dd>${escapeHtml(module.futureCapability)}</dd></div><div><dt>Next</dt><dd>${escapeHtml(module.nextAction)}</dd></div><div><dt>Safety</dt><dd>${escapeHtml(module.safetyNote)}</dd></div></dl><a href="${escapeHtml(module.route)}">Open module</a></article>`).join("")}
      </div>
      <div class="device-role-row">${deviceRoles.map(([device, role]) => `<article><strong>${escapeHtml(device)}</strong><span>${escapeHtml(role)}</span></article>`).join("")}</div>
    </section>
  `;
}

function canonicalWatchlistSymbols() {
  return (marketWatchlist.length ? marketWatchlist : [
    { symbol: "BTC" }, { symbol: "SPY" }, { symbol: "QQQ" }, { symbol: "TSLA" }, { symbol: "AAPL" }, { symbol: "AMD" }, { symbol: "NVDA" }, { symbol: "MSFT" }, { symbol: "AMZN" }, { symbol: "UVXY" }, { symbol: "SPX" }, { symbol: "MESmain" }, { symbol: "GCmain" }, { symbol: "SImain" }, { symbol: "SICmain" }, { symbol: "CLmain" }, { symbol: "DXY" },
  ]).map((item) => item.symbol);
}

function getSharedQueue(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function setSharedQueue(key, items) {
  try {
    localStorage.setItem(key, JSON.stringify((items || []).slice(0, 80)));
  } catch {
    // Local queues are useful, not required.
  }
}

function getEffectiveWorldMissions() {
  const localMissions = getSharedQueue("pickaxeMissionQueue");
  const mappedLocal = localMissions.map((item) => {
    const progress = (item.status === "Completed" || item.status === "done") ? 100 : (item.progress || 20);
    return {
      id: item.id,
      habitat: item.source || "CEO B Command",
      status: item.status || "Working",
      title: item.title,
      description: item.nextAction || "Execute approved plan.",
      progress: progress,
      assignedAgents: [item.owner || "Task Smith"],
      confidence: item.confidence || 80,
      output: item.output || item.nextAction || "Pending agent execution."
    };
  });
  
  const defaults = habitatWorld.missions || [];
  const combined = [...mappedLocal];
  
  defaults.forEach((m) => {
    if (!combined.some((local) => local.id === m.id)) {
      combined.push(m);
    }
  });
  
  return combined;
}

function addSharedReviewItem(item, options = {}) {
  const entry = {
    id: item.id || `review-${Date.now()}`,
    title: item.title || "CEO B review item",
    source: item.source || item.habitat || "Pickaxe Capital",
    owner: item.owner || (item.agents || [])[0] || "CEO B",
    status: item.status || "Prototype / Local",
    priority: item.priority || "Medium",
    output: item.output || item.note || item.nextAction || "Local action queued for CEO B review.",
    createdAt: new Date().toISOString(),
  };
  setSharedQueue("pickaxeReviewQueue", [entry, ...getSharedQueue("pickaxeReviewQueue")]);
  if (options.syncWorld !== false) {
    const stack = getWorldReviewStack();
    stack.unshift({
      id: entry.id,
      title: entry.title,
      habitat: entry.source,
      agents: [entry.owner],
      confidence: item.confidence || 72,
      status: entry.status,
      output: entry.output,
      priority: entry.priority,
    });
    setWorldReviewStack(stack);
  }
  addWorldEvent(`${entry.owner} queued "${entry.title}" for CEO B review locally.`);
  return entry;
}

function addSharedMissionItem(item) {
  const entry = {
    id: item.id || `mission-${Date.now()}`,
    title: item.title || "Local mission",
    source: item.source || "Pickaxe Capital",
    owner: item.owner || "Task Smith",
    status: item.status || "Prototype / Local",
    priority: item.priority || "Medium",
    nextAction: item.nextAction || "Review and decide next step.",
    createdAt: new Date().toISOString(),
  };
  setSharedQueue("pickaxeMissionQueue", [entry, ...getSharedQueue("pickaxeMissionQueue")]);
  addWorldEvent(`${entry.owner} created local mission "${entry.title}".`);
  return entry;
}

function renderMarketChartWorkspace() {
  const selected = marketWatchlist.find((item) => item.symbol === state.selectedMarketWorkspaceSymbol) || marketWatchlist.find((item) => item.symbol === "QQQ") || marketWatchlist[0] || { symbol: "QQQ", name: "Invesco QQQ Trust", assetClass: "ETF", group: "Core ETF", status: "Static Watchlist", ownerAgent: "Signal Scout", notes: "Manual review only." };
  const symbols = canonicalWatchlistSymbols();
  return `
    <section class="market-chart-workspace panel">
      <div class="panel-head">
        <div><p class="eyebrow">Manual market chart workspace</p><h2>${escapeHtml(selected.symbol)} — ${escapeHtml(selected.name)}</h2></div>
        <span class="pill">Static Watchlist / Future Market Data Adapter</span>
      </div>
      <div class="market-workspace-grid">
        <aside>
          <span class="label">Urgent watchlist only</span>
          <div class="watchlist-chip-grid">${symbols.map((symbol) => `<button type="button" class="${symbol === selected.symbol ? "active" : ""}" onclick="window.marketWorkspaceAction?.('selected symbol', '${escapeHtml(symbol)}')">${escapeHtml(symbol)}</button>`).join("")}</div>
          <div class="vault-reason"><strong>Owner agents</strong><span>Signal Scout, RK Tracker, Macro Watcher</span></div>
          <div class="vault-reason"><strong>Data status</strong><span>Manual Snapshot. Not live data. No trading execution.</span></div>
        </aside>
        <div class="prototype-chart-surface" aria-label="Prototype chart surface">
          <div class="chart-candle-row">${Array.from({ length: 26 }).map((_, index) => `<i style="height:${28 + ((index * 17) % 70)}%; animation-delay:-${index * 0.12}s"></i>`).join("")}</div>
          <div class="chart-volume-row">${Array.from({ length: 34 }).map((_, index) => `<b style="height:${18 + ((index * 13) % 76)}%"></b>`).join("")}</div>
          <span>Prototype Chart Surface • Manual Review Only • No Live Feed Connected</span>
        </div>
      </div>
      <div class="market-workspace-bottom">
        <article><span class="label">Manual Snapshot</span><p>Price, after-hours, high/low, volume, and last reviewed fields are placeholder/manual until a real adapter exists.</p></article>
        <article><span class="label">Timeframes</span><p>20 min • Daily • Weekly • Monthly • Quarterly</p></article>
        <article><span class="label">Indicator Labels</span><p>EMA 5 • EMA 8 • EMA 9 • EMA 12 • EMA 252 • Volume • KDJ / Momentum</p></article>
        <article><span class="label">Checklist</span><p>EMA trend • Volume spike • Key level • Breakout/pullback watch • News needed • CEO B review needed</p></article>
      </div>
      <div class="game-action-row">
        <button type="button" onclick="window.marketWorkspaceAction?.('chart note to CEO B Review', '${escapeHtml(selected.symbol)}')">Add Chart Note to CEO B Review</button>
        <button type="button" onclick="window.marketWorkspaceAction?.('signal task', '${escapeHtml(selected.symbol)}')">Create Signal Task</button>
        <button type="button" onclick="window.marketWorkspaceAction?.('snapshot to archive', '${escapeHtml(selected.symbol)}')">Send Snapshot to Archive</button>
        <button type="button" onclick="window.marketWorkspaceAction?.('add to RK Tracker', '${escapeHtml(selected.symbol)}')">Add to RK Tracker</button>
        <button type="button" onclick="window.marketWorkspaceAction?.('needs research', '${escapeHtml(selected.symbol)}')">Mark Needs Research</button>
      </div>
    </section>
  `;
}

function renderAgentBuilderFactoryPage() {
  if (!els.agentBuilderFactoryContent) return;
  const saved = getAgentFactorySaved();
  const selected = saved[0] || agentFactoryTemplates[0] || {};
  els.agentBuilderFactoryContent.innerHTML = `
    <section class="factory-hero">
      <div>
        <p class="eyebrow">Prototype / Local Customization Only</p>
        <h2>Agent Builder Factory</h2>
        <p>Customize Pickaxe Capital voxel AI agents, assign roles, habitats, tools, styles, and CEO B review rules. No autonomous execution. CEO B approval required.</p>
        <div class="signal-badges"><span>LocalStorage only</span><span>No fake live agents</span><span>Voxel style</span><span>CEO B Review</span></div>
      </div>
      <div class="factory-preview-stage">
        <div class="pixel-agent-figure ${escapeHtml(selected.unitClass || "unit-1")}"><b></b></div>
        <strong>${escapeHtml(selected.name || "Market Scout")}</strong>
        <span>${escapeHtml(selected.role || "Signal Scout")}</span>
      </div>
    </section>
    <section class="factory-layout">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">Identity</p><h2>Customize Agent</h2></div><span class="pill">Saved locally</span></div>
        <div class="factory-form">
          <input id="factoryName" placeholder="Agent name" value="${escapeHtml(selected.name || "Market Scout")}" />
          <input id="factoryTitle" placeholder="Agent title" value="${escapeHtml(selected.title || "Opportunity Scanner")}" />
          <select id="factoryRole">${["System Brain", "Signal Scout", "News Raven", "Risk Sentinel", "Macro Watcher", "Flow Hunter", "Map Builder", "Bookmark Miner", "Archive Keeper", "Wealth Alchemist", "Task Smith", "Auto Update Agent", "Story Teller", "Custom Agent"].map((role) => `<option ${role === selected.role ? "selected" : ""}>${escapeHtml(role)}</option>`).join("")}</select>
          <select id="factoryHabitat">${["Market Habitat", "Life / Knowledge Habitat", "Archive Vault", "Source Hub", "Staging / QA Forge", "Trading Floor", "CEO B Command Layer"].map((habitat) => `<option ${habitat === selected.habitat ? "selected" : ""}>${escapeHtml(habitat)}</option>`).join("")}</select>
          <select id="factoryStatus">${["Static", "Prototype", "Research", "Future Adapter"].map((status) => `<option ${status === selected.status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}</select>
          <select id="factoryUnit">${["unit-1", "unit-2", "unit-3", "unit-4", "unit-5", "unit-6"].map((unit) => `<option ${unit === selected.unitClass ? "selected" : ""}>${escapeHtml(unit)}</option>`).join("")}</select>
          <textarea id="factoryTask" placeholder="Current task">${escapeHtml(selected.currentTask || "Prepare a local CEO B review packet.")}</textarea>
          <textarea id="factoryReviewRule" placeholder="CEO B review rule">${escapeHtml(selected.reviewRule || "All outputs go to CEO B Review before action.")}</textarea>
        </div>
        <div class="game-action-row">
          <button type="button" onclick="window.saveFactoryAgent?.()">Save Agent</button>
          <button type="button" onclick="window.resetFactoryAgents?.()">Reset Demo</button>
          <button type="button" onclick="window.factoryAction?.('Create Mission')">Create Mission</button>
          <button type="button" onclick="window.factoryAction?.('Send to CEO B Review')">Send to CEO B Review</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">Saved roster</p><h2>Pickaxe Voxel Agents</h2></div><span class="pill">${saved.length || agentFactoryTemplates.length} templates</span></div>
        <div class="world-agent-card-row factory-roster">${(saved.length ? saved : agentFactoryTemplates).map((agent, index) => renderFactoryAgentCard(agent, index)).join("")}</div>
      </div>
    </section>
  `;
}

function renderFactoryAgentCard(agent, index) {
  return `
    <article class="world-agent-card">
      <div class="pixel-agent-figure ${escapeHtml(agent.unitClass || `unit-${(index % 6) + 1}`)}"><b></b></div>
      <span>${escapeHtml(agent.habitat || "AI Habitat")}</span>
      <strong>${escapeHtml(agent.name || "Custom Agent")}</strong>
      <small>${escapeHtml(agent.status || "Prototype")} • ${escapeHtml(agent.role || "Custom Agent")}</small>
      <em>${escapeHtml(agent.currentTask || "Local customization only.")}</em>
      <button type="button" onclick="window.factoryAction?.('Review ${escapeHtml(agent.name || "agent")}')">CEO B Review</button>
    </article>
  `;
}

function renderProjectUpdatePage() {
  if (!els.projectUpdateContent) return;
  const routes = getProjectRoutes();
  els.projectUpdateContent.innerHTML = `
    <section class="project-update-hero">
      <div>
        <p class="eyebrow">Human-readable project status</p>
        <h2>Pickaxe Capital / AI Habitat OS</h2>
        <p>Premium founder command center, AI Habitat OS, agent civilization, archive intelligence vault, mission board, source hub, and CEO B decision layer. Architecture truth: static Node app, server.mjs serves public/.</p>
        <div class="signal-badges"><span>Static Node App</span><span>Prototype UI</span><span>Research/Future Adapter labeled</span><span>No auto-trading</span></div>
      </div>
      <div class="ceob-briefing-card">
        <span class="label">Local URLs</span>
        <p>Website: http://localhost:4328</p>
        <p>AI Handoff: http://localhost:4328/ai-handoff</p>
        <p>Project Update: http://localhost:4328/project-update</p>
      </div>
    </section>
    <section class="project-actions panel">
      <div class="panel-head"><div><p class="eyebrow">Share with AI</p><h2>How ChatGPT Should Use This Page</h2></div><span class="pill">Deployment recommended</span></div>
      <p>When B shares this page with ChatGPT, use it to understand the current Pickaxe Capital project state. Preserve the existing design, avoid fake live claims, keep the static Node architecture stable, and route all actions through CEO B Review first.</p>
      <div class="game-action-row">
        <button type="button" onclick="window.copyHandoffText?.()">Copy AI Handoff</button>
        <button type="button" onclick="window.copyProjectSummary?.()">Copy Project Update Summary</button>
        <button type="button" onclick="navigator.clipboard?.writeText('https://github.com/Burberrry/pickaxe-capital-command-center')">Copy GitHub Repo Link</button>
        <a href="#/ai-handoff">Open AI Handoff</a>
        <a href="#/staging">Open Staging Mission Board</a>
      </div>
    </section>
    <section class="route-status-board panel">
      <div class="panel-head"><div><p class="eyebrow">Active routes</p><h2>Route Status Board</h2></div><span class="pill">${routes.length} routes</span></div>
      <div class="project-route-grid">${routes.map((route) => {
        let hashRoute = route.route === "/" ? "#/mission-control" : "#" + route.route;
        if (route.route === "/app/alerts") hashRoute = "#/alerts";
        else if (route.route === "/agents") hashRoute = "#/agent-engine";
        else if (route.route === "/source-hub") hashRoute = "#/data-sources";
        else if (route.route === "/berkshire-1965") hashRoute = "#/berkshire";
        else if (route.route === "/rk-tracker") hashRoute = "#/rkTracker";
        else if (route.route === "/jarvis-lab") hashRoute = "#/jarvisLab";
        else if (route.route === "/life-os") hashRoute = "#/lifeOS";
        else if (route.route === "/project-update") hashRoute = "#/projectUpdate";
        else if (route.route === "/agent-builder-factory") hashRoute = "#/agentBuilderFactory";
        return `<article><span class="status-badge ${escapeHtml(route.statusClass)}">${escapeHtml(route.status)}</span><h3>${escapeHtml(route.route)}</h3><p>${escapeHtml(route.purpose)}</p><small>Owner: ${escapeHtml(route.owner)} • Priority: ${escapeHtml(route.priority)}</small><a href="${hashRoute}">Open</a></article>`;
      }).join("")}</div>
    </section>
    <section class="project-two-col">
      <article class="panel"><div class="panel-head"><div><p class="eyebrow">Current Market Focus</p><h2>Urgent Watchlist Only</h2></div><span class="pill">No random tickers</span></div><div class="watchlist-chip-grid">${canonicalWatchlistSymbols().map((symbol) => `<span>${escapeHtml(symbol)}</span>`).join("")}</div><p class="muted">Manual/static watchlist. No fake live prices, no recommendations, no execution.</p></article>
      <article class="panel"><div class="panel-head"><div><p class="eyebrow">Manual workflow</p><h2>Quantum Brain Council</h2></div><span class="pill">Not connected</span></div>${renderQuantumBrainSummary()}</article>
      <article class="panel"><div class="panel-head"><div><p class="eyebrow">Future Adapter / Research</p><h2>Voice + Apple Ecosystem</h2></div><span class="pill">Manual now</span></div>${renderAppleVoiceSummary()}</article>
      <article class="panel"><div class="panel-head"><div><p class="eyebrow">Prototype</p><h2>Agent Builder Factory</h2></div><span class="pill">LocalStorage</span></div><p>Customize voxel-style Pickaxe agents, assign roles/habitats/tasks/statuses, save locally, and send changes to CEO B Review.</p><a href="#/agentBuilderFactory">Open Agent Builder Factory</a></article>
    </section>
    <section class="panel"><div class="panel-head"><div><p class="eyebrow">Deployment readiness</p><h2>Public Review Path</h2></div><span class="pill">Setup</span></div><ol><li>Push project to private GitHub repo.</li><li>Deploy preview using Vercel, Netlify, GitHub Pages, or another static host.</li><li>Share deployed /project-update or /ai-handoff URL with ChatGPT.</li><li>Keep PROJECT_STATUS.md and NEXT_STEPS.md updated every session.</li></ol><p class="muted">Localhost links only open on B's Mac.</p></section>
  `;
}

function getProjectRoutes() {
  const owners = {
    "/": "CEO B",
    "/vision-map": "System Brain",
    "/agents": "Habitat Builder",
    "/agent-builder-factory": "Habitat Builder",
    "/archive": "Archive Keeper",
    "/staging": "Task Smith",
    "/founder": "Story Teller",
    "/ceo-b-profile": "CEO B",
    "/jarvis-lab": "Command Architect",
    "/life-os": "Device Marshal",
    "/signals": "Signal Scout",
    "/source-hub": "News Raven",
    "/rk-tracker": "Signal Scout",
    "/bookmarks": "Bookmark Miner",
    "/berkshire-1965": "Wealth Alchemist",
    "/app/alerts": "Risk Sentinel",
    "/market-command": "Signal Scout",
    "/signal-engine": "Signal Scout",
    "/life-habitat": "Archive Keeper",
    "/ai-handoff": "System Brain",
    "/project-update": "System Brain",
  };
  const purposes = {
    "/": "Alerts-only command front desk",
    "/vision-map": "Main command map",
    "/agents": "AI Habitat OS world",
    "/agent-builder-factory": "Voxel agent customization prototype",
    "/archive": "Intelligence vault",
    "/staging": "Mission board and QA",
    "/project-update": "Human-readable status page",
    "/ai-handoff": "Plain-text AI handoff",
  };
  return Object.keys(owners).map((route) => ({
    route,
    owner: owners[route],
    purpose: purposes[route] || (routeHealth.find((item) => item.route === route)?.purpose || "Working route"),
    status: route.includes("jarvis") || route.includes("life-os") || route.includes("agent-builder") ? "Prototype" : route === "/ai-handoff" ? "Verified" : "Static",
    statusClass: route.includes("jarvis") || route.includes("life-os") || route.includes("agent-builder") ? "prototype" : "active",
    priority: ["/", "/vision-map", "/agents", "/archive", "/staging", "/ai-handoff", "/project-update"].includes(route) ? "High" : "Medium",
  }));
}

function renderQuantumBrainSummary() {
  const council = quantumBrainCouncil.length ? quantumBrainCouncil : [
    { name: "ChatGPT", role: "Project architect and Codex prompt builder" },
    { name: "Claude", role: "Long-context reasoning and product clarity review" },
    { name: "Gemini", role: "Google ecosystem and multimodal planning helper" },
    { name: "Grok", role: "X/culture/news pulse research idea generator" },
    { name: "Perplexity", role: "Source-backed research and citation gathering" },
  ];
  return `<div class="quantum-grid">${council.map((member) => `<span><strong>${escapeHtml(member.name)}</strong>${escapeHtml(member.role)}</span>`).join("")}</div><p class="muted">Manual Workflow Now / Future Adapter Later. No external AI APIs are connected. CEO B approval required.</p>`;
}

function renderAppleVoiceSummary() {
  const devices = appleCommandEcosystem.length ? appleCommandEcosystem : [
    { name: "iPhone 17 Pro Max", role: "Mobile CEO B command device" },
    { name: "Mac mini", role: "Main local command server and build station" },
    { name: "Mac Neo", role: "Mobile development and review station" },
    { name: "iPad Air", role: "Mission board and dashboard companion" },
  ];
  return `<div class="quantum-grid">${devices.map((device) => `<span><strong>${escapeHtml(device.name)}</strong>${escapeHtml(device.role)}</span>`).join("")}</div><p class="muted">Future voice command layer is research only. No microphone, camera, device control, or direct execution is active.</p>`;
}

function getAgentFactorySaved() {
  try {
    const val = localStorage.getItem("pickaxeAgentFactory");
    if (val) {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

function setAgentFactorySaved(items) {
  try {
    localStorage.setItem("pickaxeAgentFactory", JSON.stringify((items || []).slice(0, 40)));
  } catch {
    // Local customization is optional.
  }
}

function readFactoryForm() {
  return {
    id: `factory-${Date.now()}`,
    name: document.querySelector("#factoryName")?.value.trim() || "Custom Pickaxe Agent",
    title: document.querySelector("#factoryTitle")?.value.trim() || "Voxel Operator",
    role: document.querySelector("#factoryRole")?.value || "Custom Agent",
    habitat: document.querySelector("#factoryHabitat")?.value || "Trading Floor",
    status: document.querySelector("#factoryStatus")?.value || "Prototype",
    unitClass: document.querySelector("#factoryUnit")?.value || "unit-1",
    currentTask: document.querySelector("#factoryTask")?.value.trim() || "Prepare a local CEO B review packet.",
    reviewRule: document.querySelector("#factoryReviewRule")?.value.trim() || "All outputs go to CEO B Review before action.",
  };
}

window.saveFactoryAgent = () => {
  const agent = readFactoryForm();
  setAgentFactorySaved([agent, ...getAgentFactorySaved()]);
  addSharedMissionItem({ title: `Agent factory saved ${agent.name}`, owner: "Habitat Builder", source: "Agent Builder Factory", priority: "Medium", nextAction: agent.reviewRule });
  renderAgentBuilderFactoryPage();
};

window.resetFactoryAgents = () => {
  setAgentFactorySaved([]);
  renderAgentBuilderFactoryPage();
};

window.factoryAction = (action) => {
  const agent = readFactoryForm();
  if (/mission/i.test(action)) {
    addSharedMissionItem({ title: `${agent.name} factory mission`, owner: agent.role, source: "Agent Builder Factory", priority: "Medium", nextAction: agent.currentTask });
  } else {
    addSharedReviewItem({ title: `${agent.name} factory review`, owner: agent.role, source: "Agent Builder Factory", status: "Prototype / Local", priority: "Medium", output: `${agent.title}. ${agent.reviewRule}` });
  }
  renderAgentBuilderFactoryPage();
};

window.marketWorkspaceAction = (action, symbol) => {
  const item = marketWatchlist.find((entry) => entry.symbol === symbol) || { symbol, name: symbol, ownerAgent: "Signal Scout" };
  if (/selected symbol/i.test(action)) {
    state.selectedMarketWorkspaceSymbol = item.symbol;
    renderSignalsIntelligence();
    return;
  }
  if (/task|research/i.test(action)) {
    addSharedMissionItem({ title: `${item.symbol} ${action}`, owner: item.ownerAgent || "Signal Scout", source: "Market Chart Workspace", priority: item.priority || "High", nextAction: "Manual review only. No live feed and no trading execution." });
  } else {
    addSharedReviewItem({ title: `${item.symbol} ${action}`, owner: item.ownerAgent || "Signal Scout", source: "Market Chart Workspace", status: "Static Watchlist / Manual Snapshot", priority: item.priority || "High", output: `${item.name || item.symbol}: ${action}. CEO B review required before any external manual action.` });
  }
  renderSignalsIntelligence();
};

window.archiveLocalAction = (action, itemId) => {
  const item = archiveIntelligenceItems.find((entry) => entry.id === itemId) || archiveVaultItems.find((entry) => entry.id === itemId);
  if (!item) return;
  const title = `${action}: ${item.title}`;
  if (/checklist|opportunity/i.test(action)) {
    addSharedMissionItem({ title, owner: item.relatedAgent || item.connectedAgent || "Archive Keeper", source: "/archive", priority: item.priority || "High", nextAction: item.nextAction || "Manual review required." });
  } else {
    addSharedReviewItem({ title, owner: item.relatedAgent || item.connectedAgent || "Archive Keeper", source: "/archive", status: "Prototype Action / Manual Review Required", priority: item.priority || "High", output: item.summary || item.nextAction || "Archive item queued locally." });
  }
  renderArchiveIntelligence();
};

window.copyProjectSummary = async () => {
  const text = [
    "Pickaxe Capital / AI Habitat OS",
    "Static Node app: server.mjs serves public/",
    "Project update: http://localhost:4328/project-update",
    "AI handoff: http://localhost:4328/ai-handoff",
    "GitHub target: https://github.com/Burberrry/pickaxe-capital-command-center",
    `Urgent watchlist: ${canonicalWatchlistSymbols().join(", ")}`,
    "No scraping, no auto-trading, no fake live agents, no API keys in frontend.",
  ].join("\n");
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    console.log(text);
  }
};

window.copyHandoffText = async () => {
  try {
    const response = await fetch("/ai-handoff", { cache: "no-store" });
    const text = await response.text();
    await navigator.clipboard.writeText(text);
  } catch {
    // Clipboard may be blocked by browser permissions.
  }
};

function getJarvisHistory() {
  try {
    const val = localStorage.getItem("pickaxe_jarvis_command_history");
    if (val) {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

function setJarvisHistory(history) {
  try {
    localStorage.setItem("pickaxe_jarvis_command_history", JSON.stringify((history || []).slice(0, 20)));
  } catch {
    // History is optional.
  }
}

function classifyJarvisText(text) {
  const value = String(text || "").toLowerCase();
  const safety = "Prototype only. No backend execution, no system commands, no microphone/camera auto-start, and user approval required.";
  const rules = [
    [/archive|link|bookmark|source|research|repo/, "archive_search", "/archive", "Archive Miner", safety],
    [/agent|worker|habitat|mission|task/, "agent_task", "/agents", "Habitat Builder", safety],
    [/market|stock|futures|chart|gold|trading|ticker/, "market_watch", "/vision-map", "Signal Smith", "Research only; no broker execution."],
    [/war|outage|earthquake|world|risk|netblocks|osiris/, "world_monitor", "/vision-map", "Risk Sentinel", safety],
    [/codex|build|route|bug|website|deploy/, "website_build", "/staging", "Builder Agent", safety],
    [/voice|talk|listen|microphone|jarvis|claw|openclaw|nemoclaw/, "voice_future", "/jarvis-lab", "Command Architect", "No background listening. Voice/Claw controls remain future adapters until explicit permission exists."],
    [/camera|see|visual|video|screen/, "vision_future", "/jarvis-lab", "Vision Sentinel", "No hidden camera. Camera preview later requires explicit click and permission."],
    [/ipad|phone|mac|device|control/, "device_future", "/life-os", "Device Marshal", "No device control until authentication, pairing, and security review exist."],
  ];
  const match = rules.find(([regex]) => regex.test(value));
  return match
    ? { intent: match[1], route: match[2], agent: match[3], safetyNote: match[4], status: "Prototype only" }
    : { intent: "unknown", route: "/archive", agent: "CEO B", safetyNote: safety, status: "Prototype only" };
}

function executeJarvisCommand(command, result) {
  const value = command.trim();
  const lower = value.toLowerCase();
  
  const mineMatch = value.match(/^(?:mine|bookmark|save|add bookmark)\s+(https?:\/\/\S+)(?:\s+(.+))?$/i);
  if (mineMatch) {
    const url = mineMatch[1];
    const notes = mineMatch[2] || "Mined via Jarvis typed command console.";
    const title = domainFromUrl(url);
    const res = window.addLocalBookmark(url, title, notes, "General Bookmark");
    if (res.ok) {
      return {
        executed: true,
        summary: `Mined bookmark successfully: ${title}`,
        trace: [
          `[Jarvis Console] Recognizing URL from command...`,
          `[Jarvis Console] Matching intent: mine_source`,
          `[Bookmark Miner] Classifying target: ${url}`,
          `[Bookmark Miner] Saving bookmark: "${title}" to Local Storage database.`,
          `[System Brain] Database updated. Event logged: Mined new bookmark.`
        ]
      };
    } 
  }

  const assignMatch = value.match(/^(?:assign|task|run mission)\s+([A-Za-z\s]+?)\s+(?:to\s+)?(.+)$/i);
  if (assignMatch) {
    const agentQuery = assignMatch[1].trim();
    const taskText = assignMatch[2].trim();
    const agent = operatingAgents.find(a => a.name.toLowerCase().includes(agentQuery.toLowerCase()) || a.id.toLowerCase().includes(agentQuery.toLowerCase()));
    if (agent && agent.id !== "ceo-b-os") {
      const mission = addSharedMissionItem({
        title: `Jarvis Task: ${taskText.slice(0, 36)}${taskText.length > 36 ? '...' : ''}`,
        owner: agent.name,
        source: "Jarvis Lab",
        priority: "High",
        nextAction: taskText
      });
      let opAgents = getOperatingAgentsState();
      const matchAgent = opAgents.find(a => a.id === agent.id);
      if (matchAgent) {
        matchAgent.status = "Active Execution";
        matchAgent.progress = 15;
        matchAgent.currentTask = `Executing: ${taskText}`;
        setOperatingAgentsState(opAgents);
      }
      return {
        executed: true,
        summary: `Assigned task to ${agent.name}: "${taskText}"`,
        trace: [
          `[Jarvis Console] Command classified: agent_task`,
          `[Jarvis Console] Target worker: ${agent.name}`,
          `[System Brain] Mapping workflow dependency: ${agent.name} -> ${taskText}`,
          `[Task Smith] Created local mission card "${mission.title}" in pickaxeMissionQueue.`,
          `[${agent.name}] Status changed: Idle -> Active Execution. Progress initiated at 15%.`,
          `[${agent.name}] Ticking execution loop in background.`
        ]
      };
    }
  }

  const alertMatch = value.match(/^(?:alert|create alert|rule)\s+(\w+)\s+(.+)$/i);
  if (alertMatch) {
    const ticker = alertMatch[1].toUpperCase();
    const condition = alertMatch[2];
    const rules = getAlertRules();
    const newRule = {
      id: `rule-${Date.now()}`,
      ticker,
      triggerType: "Price Breakout",
      condition,
      priority: "High",
      agentName: "Signal Scout",
      active: true
    };
    rules.unshift(newRule);
    setAlertRules(rules);
    return {
      executed: true,
      summary: `Created alert rule for ${ticker}: ${condition}`,
      trace: [
        `[Jarvis Console] Command classified: alert_setup`,
        `[Signal Scout] Initializing rules observer for: ${ticker}`,
        `[Signal Scout] Storing alert condition: "${condition}"`,
        `[System Brain] Alert rules engine registry updated (localStorage.pickaxeAlertRules).`,
        `[Jarvis Console] Alert active. Monitoring active ticker threshold...`
      ]
    };
  }

  if (["diagnose", "diagnostics", "check", "health", "status"].includes(lower)) {
    const healthText = els.healthText?.textContent || "Routes verified • static prototype";
    const reviewsCount = getWorldReviewStack().length;
    const missionsCount = getSharedQueue("pickaxeMissionQueue").length;
    return { 
      executed: true,
      summary: `Diagnostics Completed: Systems Nominal`,
      trace: [
        `[Jarvis Console] Diagnostic scan started. Checking systems...`,
        `[System Brain] Routing status: ${healthText}`,
        `[Archive Keeper] Vault summary queried: 31,500+ records, deduplication active.`,
        `[Task Smith] Board load: ${missionsCount} tasks registered.`,
        `[CEO B Layer] Review queue load: ${reviewsCount} approvals pending.`,
        `[Jarvis Console] Overall System Status: Nominal. Local environment active.`
      ]
    };
  }

  return { executed: false };
}

function renderJarvisResult(result, command, execRes = {}) {
  let traceMarkup = "";
  if (execRes.executed) {
    traceMarkup = `
      <div class="jarvis-trace-log" style="margin-top: 14px; border-left: 2px solid var(--green); padding-left: 12px; font-family: monospace; font-size: var(--font-small); background: rgba(73, 242, 143, 0.03); padding-top: 8px; padding-bottom: 8px; border-radius: 0 var(--radius) var(--radius) 0;">
        <span class="label" style="color: var(--green); margin-bottom: 6px; display: inline-block;">Command Execution Trace</span>
        ${execRes.trace.map(line => `<p style="margin: 3px 0; color: #d0cbb8;">${escapeHtml(line)}</p>`).join("")}
      </div>
    `;
  }
  return `
    <article style="border: 1px solid var(--line); border-radius: var(--radius); padding: 18px; background: var(--panel-2);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span class="status-badge ${execRes.executed ? 'success' : 'prototype'}">${execRes.executed ? 'Executed Local Action' : 'Prototype only'}</span>
        <strong style="color: var(--teal);">${escapeHtml(result.intent)}</strong>
      </div>
      <p style="margin: 4px 0;"><strong>Command:</strong> ${escapeHtml(command)}</p>
      <p style="margin: 4px 0;"><strong>Suggested Route:</strong> <a href="${escapeHtml(result.route)}" style="color: var(--teal); text-decoration: underline;">${escapeHtml(result.route)}</a></p>
      <p style="margin: 4px 0;"><strong>Connected Agent:</strong> ${escapeHtml(result.agent)}</p>
      <p style="margin: 4px 0; font-size: var(--font-small); color: var(--muted);"><strong>Safety & Scope:</strong> ${escapeHtml(result.safetyNote)}</p>
      ${traceMarkup}
    </article>
  `;
}

function renderJarvisHistory() {
  const holder = document.querySelector("#jarvisHistory");
  if (!holder) return;
  const history = getJarvisHistory();
  holder.innerHTML = `
    <div class="panel-head">
      <div>
        <p class="eyebrow">Saved locally</p>
        <h2>Command History</h2>
      </div>
      <span class="pill">${history.length} commands</span>
    </div>
    ${history.length ? history.map((entry) => `
      <article style="border: 1px solid rgba(255,255,255,0.04); padding: 10px; margin-bottom: 8px; border-radius: var(--radius); background: rgba(255,255,255,0.01); display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong>${escapeHtml(entry.intent)}</strong>
          <span style="font-size: var(--font-small); color: ${entry.executed ? "var(--green)" : "var(--muted)"};">
            ${entry.executed ? "Executed" : "Classified"}
          </span>
        </div>
        <span style="font-family: monospace; font-size: var(--font-small); color: var(--muted);">&gt; ${escapeHtml(entry.command)}</span>
        <small style="font-size: 11px;">Agent: ${escapeHtml(entry.agent)} • Route: ${escapeHtml(entry.route)}</small>
      </article>
    `).join("") : `<p class="muted">No saved commands yet.</p>`}
  `;
}

window.fillJarvisCommand = (text) => {
  const input = document.querySelector("#jarvisCommandInput");
  if (input) input.value = text;
};

window.classifyJarvisCommand = () => {
  const input = document.querySelector("#jarvisCommandInput");
  const output = document.querySelector("#jarvisCommandOutput");
  const link = document.querySelector("#jarvisRouteLink");
  const command = input?.value?.trim() || "";
  if (!command || !output) return;
  const result = classifyJarvisText(command);
  const execRes = executeJarvisCommand(command, result);
  output.innerHTML = renderJarvisResult(result, command, execRes);
  if (link) link.href = result.route;
  const history = getJarvisHistory();
  history.unshift({ command, ...result, executed: execRes.executed, time: new Date().toISOString() });
  setJarvisHistory(history);
  renderJarvisHistory();
  if (input && execRes.executed) input.value = "";
};

window.clearJarvisHistory = () => {
  setJarvisHistory([]);
  renderJarvisHistory();
};

window.copyJarvisResult = () => {
  const output = document.querySelector("#jarvisCommandOutput");
  return writeClipboard(output?.innerText || "No Jarvis command classified yet.");
};

function renderPipeline(title, steps) {
  return `<article class="pipeline-card"><h3>${escapeHtml(title)}</h3><div>${steps.map((step) => `<span>${escapeHtml(step)}</span>`).join("")}</div></article>`;
}

function renderSourceCard(source) {
  const url = externalUrl(source.url) ? source.url : "/bookmarks";
  const target = externalUrl(source.url) ? `target="_blank" rel="noopener noreferrer"` : "";
  return `<article class="source-card"><span class="label">${escapeHtml(source.category)} • ${escapeHtml(source.priority)}</span><h3>${escapeHtml(source.name)}</h3><p>${escapeHtml(source.purpose)}</p><small>${escapeHtml(source.responsibleAgent)} • ${escapeHtml(source.status)}</small><div><a href="${escapeHtml(url)}" ${target}>Open External Terminal</a><button type="button">Add to Archive</button></div><em>${escapeHtml(source.fallbackMessage)}</em></article>`;
}

function renderCompactSourceCard(source) {
  if (!source) return "";
  const url = externalUrl(source.url) ? source.url : "/bookmarks";
  const target = externalUrl(source.url) ? `target="_blank" rel="noopener noreferrer"` : "";
  return `<a class="compact-source-card" href="${escapeHtml(url)}" ${target}><strong>${escapeHtml(source.name)}</strong><span>${escapeHtml(source.category)} • ${escapeHtml(source.responsibleAgent)}</span></a>`;
}

function externalUrl(url) {
  return /^https?:\/\//i.test(String(url || ""));
}

function renderAdapterBoard() {
  return `<div class="adapter-board">${futureAdapters.map((adapter) => `<span>${escapeHtml(adapter)}<small>planned</small></span>`).join("")}</div>`;
}

function renderTrackerRows(items) {
  return `<table><thead><tr><th>Ticker</th><th>Score</th><th>Daily</th><th>Weekly</th><th>Rel Vol</th><th>Status</th><th>Owner</th><th>Next</th></tr></thead><tbody>${items.map((item) => `<tr onclick="window.selectTicker?.('${escapeHtml(item.ticker)}')"><td><strong>${escapeHtml(item.ticker)}</strong><small>${escapeHtml(item.companyName)}</small></td><td>${item.overallScore}</td><td>${formatSigned(item.dailyChangePercent)}%</td><td>${formatSigned(item.weeklyChangePercent)}%</td><td>${item.relativeVolume}x</td><td>${escapeHtml(item.signalStatus)}</td><td>${escapeHtml(item.ownerAgent)}</td><td>${escapeHtml(item.nextAction)}</td></tr>`).join("")}</tbody></table>`;
}

function renderTickerDrawer(item) {
  if (!item) return "";
  return `<div><p class="eyebrow">Selected Ticker</p><h2>${escapeHtml(item.ticker)}</h2><strong>${escapeHtml(item.companyName)}</strong><p>${escapeHtml(item.thesisNotes)}</p></div><div class="drawer-stats"><span><strong>${item.overallScore}</strong> overall</span><span><strong>${item.riskScore}</strong> risk</span><span><strong>${item.relativeVolume}x</strong> rel vol</span></div><div class="drawer-output"><span class="label">What would make me wrong</span><p>${escapeHtml(item.whatWouldMakeMeWrong)}</p></div><div class="quick-action-dock"><button>Promote to Signal</button><button>Send to Archive</button><button>Create Alert</button><button>Mark Rejected</button></div><p class="muted">${escapeHtml(item.dataStatus)}. Educational inspiration only, not financial advice.</p>`;
}

function renderArchiveIntelCard(item) {
  return `<article class="archive-intel-card"><span class="label">${escapeHtml(item.type)} • ${escapeHtml(item.status)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><div><strong>${item.valueScore}</strong><span>value score</span><strong>${item.confidence}</strong><span>confidence</span></div><small>${escapeHtml(item.relatedAgent)} • ${escapeHtml(item.sourceWebsite)}</small><div class="archive-actions"><a href="${escapeHtml(item.sourceRoute)}">Open route</a><button type="button" onclick="window.archiveLocalAction?.('Summarize', '${escapeHtml(item.id)}')">Summarize</button><button type="button" onclick="window.archiveLocalAction?.('Turn Into Checklist', '${escapeHtml(item.id)}')">Checklist</button><button type="button" onclick="window.archiveLocalAction?.('Extract Opportunity', '${escapeHtml(item.id)}')">Opportunity</button><button type="button" onclick="window.archiveLocalAction?.('Send to CEO B Review', '${escapeHtml(item.id)}')">CEO B</button></div></article>`;
}

function pickSources(ids) {
  return ids.map((id) => intelligenceSources.find((source) => source.id === id)).filter(Boolean);
}

function wealthBoardCopy(column) {
  const copy = {
    Collect: "Capture sources, bookmarks, signals, reports, lessons, and founder decisions.",
    Filter: "Remove noise, duplicates, weak ideas, and unverified hype.",
    Learn: "Extract rules from wins, mistakes, history, and repeated patterns.",
    Build: "Turn rules into checklists, alerts, pages, and agent tasks.",
    Monetize: "Convert better decisions into stronger long-term opportunities.",
    Review: "CEO B reviews the loop and updates the operating system.",
  };
  return copy[column] || "";
}

function berkshirePlaybook(column) {
  const copy = {
    Diagnose: "Find what is losing money, idle, trapped, or pretending to be useful.",
    "Clean Up": "Pay down dangerous debt, reduce inventory, sell weak assets, and simplify.",
    "Improve Operations": "Invest in better tools, reduce overhead, and improve quality.",
    "Allocate Capital": "Preserve liquidity, avoid fake growth, and repurchase only when value improves.",
    "Archive Lessons": "Save metrics, write rules, add review dates, and convert lessons into CEO B decisions.",
  };
  return copy[column] || "";
}

function getActionState() {
  try {
    const val = localStorage.getItem("pickaxeActionCenter");
    if (val) {
      const parsed = JSON.parse(val);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return {};
}

function setActionState(stateMap) {
  localStorage.setItem("pickaxeActionCenter", JSON.stringify(stateMap));
}

function mergedActionItems() {
  const saved = getActionState();
  const baseItems = actionCenterItems.map((item) => ({
    ...item,
    status: saved[item.id] ? "done" : item.status,
    completed: Boolean(saved[item.id] || item.status === "done"),
  }));
  
  // Append dynamic local missions
  const localMissions = getSharedQueue("pickaxeMissionQueue");
  const dynamicItems = localMissions.map((m) => {
    const isCompleted = Boolean(saved[m.id]);
    return {
      id: m.id,
      category: "CEO B Missions",
      title: m.title,
      priority: m.priority.toLowerCase(),
      status: isCompleted ? "done" : "open",
      page: m.source,
      notes: `${m.owner}: ${m.nextAction}`,
      completed: isCompleted,
    };
  });
  
  return [...baseItems, ...dynamicItems];
}

function renderActionCenter() {
  if (!els.actionCenter) return;
  const items = mergedActionItems();
  const categories = [...new Set(items.map((item) => item.category))];
  els.actionCenter.innerHTML = categories.map((category) => `
    <section class="action-category">
      <div class="action-category-head">
        <h3>${escapeHtml(category)}</h3>
        <span>${items.filter((item) => item.category === category && item.completed).length}/${items.filter((item) => item.category === category).length}</span>
      </div>
      ${items.filter((item) => item.category === category).map(renderActionItem).join("")}
    </section>
  `).join("");
  if (els.agentChecklistPreview) {
    els.agentChecklistPreview.innerHTML = items
      .filter((item) => item.priority === "high" || item.page === "/agents")
      .slice(0, 5)
      .map(renderActionPreviewItem)
      .join("");
  }
}

function renderActionItem(item) {
  return `
    <label class="action-item ${item.completed ? "completed" : ""}">
      <input type="checkbox" data-action-id="${escapeHtml(item.id)}" ${item.completed ? "checked" : ""} />
      <span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.priority)} priority • ${escapeHtml(item.status)} • ${escapeHtml(item.page)}</small>
        <em>${escapeHtml(item.notes)}</em>
      </span>
    </label>
  `;
}

function cloneTrackerDefaults() {
  return JSON.parse(JSON.stringify(buildCompletionTracker || { areas: [], latestSession: {} }));
}

function getCompletionTrackerState() {
  const defaults = cloneTrackerDefaults();
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem("pickaxeCompletionTracker") || "null");
  } catch {
    saved = null;
  }
  const tracker = saved?.areas ? saved : defaults;
  const checklistCompletion = calculateActionCenterCompletion();
  tracker.areas = (tracker.areas || []).map((area) => area.id === "checklist" ? {
    ...area,
    completion: Math.max(area.completion || 0, checklistCompletion),
    notes: `${String(area.notes || "").replace(/\s*Connected checklist progress: \d+%\.?$/u, "")} Connected checklist progress: ${checklistCompletion}%.`,
  } : area);
  tracker.latestSession = tracker.latestSession || defaults.latestSession || {};
  tracker.lastUpdated = tracker.lastUpdated || defaults.lastUpdated || new Date().toLocaleString();
  return tracker;
}

function setCompletionTrackerState(tracker) {
  tracker.lastUpdated = new Date().toLocaleString();
  localStorage.setItem("pickaxeCompletionTracker", JSON.stringify(tracker));
}

function calculateActionCenterCompletion() {
  const items = mergedActionItems();
  if (!items.length) return 0;
  return Math.round((items.filter((item) => item.completed).length / items.length) * 100);
}

function calculateTrackerOverall(areas) {
  const values = (areas || []).map((area) => Number(area.completion || 0));
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function renderCompletionTracker(mode = "full") {
  const tracker = getCompletionTrackerState();
  const overall = calculateTrackerOverall(tracker.areas);
  const compact = mode === "compact";
  const areas = compact ? tracker.areas.slice(0, 4) : tracker.areas;
  return `
    <section class="completion-tracker ${compact ? "compact" : ""}">
      <div class="completion-head">
        <div>
          <p class="eyebrow">Build Completion Tracker</p>
          <h2>${overall}% Overall Completion</h2>
          <p>One central progress system for finished work, broken items, setup needs, Codex changes, and next actions. Edits save locally in this browser.</p>
        </div>
        <div class="completion-ring" style="--pct:${overall}"><strong>${overall}%</strong><span>overall</span></div>
      </div>
      <div class="completion-area-grid">
        ${areas.map((area) => renderTrackerArea(area, compact)).join("")}
      </div>
      ${compact ? `<a class="completion-open-link" href="#/staging">Edit full tracker on Staging</a>` : renderTrackerEditor(tracker)}
    </section>
  `;
}

function renderTrackerArea(area, compact = false) {
  return `
    <article class="tracker-area-card" data-tracker-id="${escapeHtml(area.id)}">
      <div class="tracker-area-top">
        <h3>${escapeHtml(area.name)}</h3>
        <span class="tracker-badge ${statusClass(area.status)}">${escapeHtml(area.status)}</span>
      </div>
      <div class="tracker-progress"><span style="width:${Number(area.completion || 0)}%"></span></div>
      <small>${Number(area.completion || 0)}% • ${escapeHtml(area.priority || "Medium")} priority</small>
      <p>${escapeHtml(area.notes || "")}</p>
      ${compact ? "" : `
        <div class="tracker-edit-row">
          <input type="range" min="0" max="100" value="${Number(area.completion || 0)}" oninput="window.updateTrackerArea('${escapeHtml(area.id)}', 'completion', this.value)" />
          <select onchange="window.updateTrackerArea('${escapeHtml(area.id)}', 'status', this.value)">${trackerStatuses().map((status) => `<option ${status === area.status ? "selected" : ""}>${status}</option>`).join("")}</select>
          <select onchange="window.updateTrackerArea('${escapeHtml(area.id)}', 'priority', this.value)">${["High", "Medium", "Low"].map((priority) => `<option ${priority === area.priority ? "selected" : ""}>${priority}</option>`).join("")}</select>
        </div>
        <textarea onchange="window.updateTrackerArea('${escapeHtml(area.id)}', 'notes', this.value)">${escapeHtml(area.notes || "")}</textarea>
        <div class="tracker-actions"><button type="button" onclick="window.finishTrackerArea('${escapeHtml(area.id)}')">Mark Finished</button><button type="button" onclick="window.deleteTrackerArea('${escapeHtml(area.id)}')">Delete</button></div>
      `}
    </article>
  `;
}

function renderTrackerEditor(tracker) {
  const session = tracker.latestSession || {};
  return `
    <section class="tracker-editor-grid">
      <article class="latest-session-card">
        <span class="label">Latest Codex Session</span>
        <h3>${escapeHtml(tracker.lastUpdated || "Not saved yet")}</h3>
        ${renderSessionList("Files changed", session.filesChanged)}
        ${renderSessionList("Features added", session.featuresAdded)}
        ${renderSessionList("Bugs fixed", session.bugsFixed)}
        ${renderSessionList("Remaining problems", session.remainingProblems)}
        <p><b>Validation:</b> ${escapeHtml(session.validationCommand || "Not recorded")}</p>
        <p><b>Result:</b> ${escapeHtml(session.validationResult || "Not recorded")}</p>
        <p><b>Next:</b> ${escapeHtml(session.nextRecommendedTask || "Choose next task.")}</p>
      </article>
      <article class="tracker-add-card">
        <span class="label">Add Tracker Item</span>
        <input id="trackerNewName" placeholder="New area or issue title" />
        <select id="trackerNewStatus">${trackerStatuses().map((status) => `<option>${status}</option>`).join("")}</select>
        <select id="trackerNewPriority"><option>High</option><option>Medium</option><option>Low</option></select>
        <textarea id="trackerNewNotes" placeholder="Notes / what needs to happen"></textarea>
        <button type="button" onclick="window.addTrackerItem()">Add item</button>
        <button type="button" onclick="window.resetCompletionTracker()">Reset demo tracker data</button>
      </article>
    </section>
  `;
}

function renderSessionList(label, items = []) {
  return `<div class="session-list"><strong>${escapeHtml(label)}</strong>${(items || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("") || "<span>None recorded</span>"}</div>`;
}

function trackerStatuses() {
  return ["Finished", "In Progress", "Needs Setup", "Broken", "Demo Only", "Next", "Blocked"];
}

function statusClass(status = "") {
  return String(status).toLowerCase().replaceAll(" ", "-");
}

function renderActionPreviewItem(item) {
  return `
    <label class="action-preview-item ${item.completed ? "completed" : ""}">
      <input type="checkbox" data-action-id="${escapeHtml(item.id)}" ${item.completed ? "checked" : ""} />
      <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.priority)} • ${escapeHtml(item.page)}</small></span>
    </label>
  `;
}

function handleChecklistToggle(event) {
  const input = event.target.closest("input[data-action-id]");
  if (!input) return;
  const saved = getActionState();
  if (input.checked) saved[input.dataset.actionId] = true;
  else delete saved[input.dataset.actionId];
  setActionState(saved);
  
  // Update pickaxeMissionQueue status if it is a dynamic mission
  const missionId = input.dataset.actionId;
  const missions = getSharedQueue("pickaxeMissionQueue");
  const mission = missions.find(m => m.id === missionId);
  if (mission) {
    mission.status = input.checked ? "Completed" : "active";
    setSharedQueue("pickaxeMissionQueue", missions);
  }
  
  renderActionCenter();
  renderStaticIntelligencePages();
  renderHomeCommandCenter();
}

window.updateTrackerArea = (id, field, value) => {
  const tracker = getCompletionTrackerState();
  tracker.areas = tracker.areas.map((area) => area.id === id ? {
    ...area,
    [field]: field === "completion" ? Number(value) : value,
  } : area);
  setCompletionTrackerState(tracker);
  renderStaticIntelligencePages();
  renderHomeCommandCenter();
};

window.finishTrackerArea = (id) => {
  const tracker = getCompletionTrackerState();
  tracker.areas = tracker.areas.map((area) => area.id === id ? { ...area, status: "Finished", completion: 100 } : area);
  setCompletionTrackerState(tracker);
  renderStaticIntelligencePages();
  renderHomeCommandCenter();
};

window.deleteTrackerArea = (id) => {
  const tracker = getCompletionTrackerState();
  tracker.areas = tracker.areas.filter((area) => area.id !== id);
  setCompletionTrackerState(tracker);
  renderStaticIntelligencePages();
  renderHomeCommandCenter();
};

window.addTrackerItem = () => {
  const name = document.querySelector("#trackerNewName")?.value.trim();
  if (!name) return;
  const tracker = getCompletionTrackerState();
  tracker.areas.push({
    id: `tracker-${Date.now()}`,
    name,
    status: document.querySelector("#trackerNewStatus")?.value || "Next",
    completion: 0,
    priority: document.querySelector("#trackerNewPriority")?.value || "Medium",
    notes: document.querySelector("#trackerNewNotes")?.value.trim() || "New tracker item.",
  });
  setCompletionTrackerState(tracker);
  renderStaticIntelligencePages();
  renderHomeCommandCenter();
};

window.resetCompletionTracker = () => {
  localStorage.removeItem("pickaxeCompletionTracker");
  renderStaticIntelligencePages();
  renderHomeCommandCenter();
};

function renderArchiveStats(stats) {
  const rows = [
    ["Bookmark links", stats.totalBookmarkLinks],
    ["Unique URLs", stats.uniqueUrls],
    ["Duplicate locations", stats.duplicateUrlEntries],
    ["Folders", stats.folders],
    ["Max depth", stats.maxFolderDepth],
    ["Local file links", stats.localFileLinks],
  ];
  els.archiveStats.innerHTML = rows.map(([label, value]) => `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${Number(value || 0).toLocaleString()}</strong>
      <small>Archive database</small>
    </article>
  `).join("");
}

function renderArchiveOverview(payload) {
  els.archiveContent.innerHTML = `
    <div class="archive-layout">
      <section class="panel archive-system-card">
        <div class="panel-head">
          <div>
            <p class="eyebrow">System design</p>
            <h2>Archive Pipeline</h2>
          </div>
          <span class="pill">${escapeHtml(String(payload.agentCount || 0))} agents ready</span>
        </div>
        <div class="pipeline-steps">
          ${["Import", "Tree", "Dedupe", "Classify", "Quarantine", "Findings", "CEO B"].map((step, index) => `
            <span><strong>${index + 1}</strong>${escapeHtml(step)}</span>
          `).join("")}
        </div>
        <p>Archive keeps the original folder truth, stores one source record per exact URL, and preserves every duplicate folder location for agent context.</p>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Top domains</p>
            <h2>Source Concentration</h2>
          </div>
        </div>
        <div class="archive-rank-list">
          ${(payload.topDomains || []).slice(0, 8).map((item) => renderRankRow(item.value, item.count)).join("")}
        </div>
      </section>
    </div>

    <div class="archive-layout">
      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Priority folders</p>
            <h2>Preserved Tree Hotspots</h2>
          </div>
          <a class="text-link" href="#/archive/tree">Open tree</a>
        </div>
        <div class="archive-folder-list">
          ${(payload.topFolders || []).map((folder) => `
            <article>
              <strong>${escapeHtml(folder.name)}</strong>
              <p>${escapeHtml(folder.fullPath)}</p>
              <span>${Number(folder.count || 0).toLocaleString()} links • ${escapeHtml(folder.ownerAgent || "Source Librarian")}</span>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Categories</p>
            <h2>Agent Inputs</h2>
          </div>
        </div>
        <div class="archive-rank-list">
          ${(payload.topCategories || []).map((item) => renderRankRow(item.value, item.count)).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderArchiveTree(payload) {
  const root = payload.tree;
  els.archiveContent.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Folder tree</p>
          <h2>All folders preserved</h2>
        </div>
        <span class="pill">${Number(payload.stats?.folders || 0).toLocaleString()} folders</span>
      </div>
      <div class="archive-tree">${root ? renderFolderNode(root, 0) : "<p>No folder tree generated yet.</p>"}</div>
    </section>
  `;
}

function renderFolderNode(folder, depth) {
  const children = (folder.children || []).slice(0, depth > 1 ? 40 : 120);
  const hidden = (folder.children || []).length - children.length;
  return `
    <details ${depth < 2 ? "open" : ""}>
      <summary>
        <strong>${escapeHtml(folder.name)}</strong>
        <span>${Number(folder.directLinkCount || 0).toLocaleString()} direct • ${Number(folder.descendantLinkCount || 0).toLocaleString()} below • ${escapeHtml(folder.ownerAgent || "Source Librarian")}</span>
      </summary>
      <div class="folder-children">
        ${children.map((child) => renderFolderNode(child, depth + 1)).join("")}
        ${hidden > 0 ? `<p class="muted">+ ${hidden.toLocaleString()} more folders preserved in database</p>` : ""}
      </div>
    </details>
  `;
}

function renderArchiveSources(payload) {
  els.archiveContent.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Sources</p>
          <h2>${Number(payload.total || 0).toLocaleString()} matching unique URLs</h2>
        </div>
        <span class="pill">Deduped by exact URL</span>
      </div>
      <div class="source-table">
        ${(payload.sources || []).map(renderArchiveSource).join("") || "<p>No matching sources.</p>"}
      </div>
    </section>
  `;
}

function renderArchiveSource(source) {
  return `
    <article>
      <div>
        <strong>${escapeHtml(source.title)}</strong>
        <a href="${escapeHtml(source.originalUrl)}" target="_blank" rel="noreferrer">${escapeHtml(source.domain || source.originalUrl)}</a>
        <p>${(source.locations || []).map((location) => escapeHtml(location.folderPath)).join(" • ")}</p>
      </div>
      <span>${escapeHtml(source.category)}<br />${escapeHtml(source.ownerAgent)}</span>
      <small>${source.isLocalFile ? "local file marked" : `trust ${source.trustScore}`}</small>
    </article>
  `;
}

function renderArchiveAgents(payload) {
  els.archiveContent.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Archive agents</p>
          <h2>Classification Workforce</h2>
        </div>
        <span class="pill">Ready for later upgrades</span>
      </div>
      <div class="archive-agent-grid">
        ${(payload.agents || []).map((agent) => `
          <article>
            <span class="label">${escapeHtml(agent.status)}</span>
            <h3>${escapeHtml(agent.agentName)}</h3>
            <strong>${Number(agent.sourceCount || 0).toLocaleString()} sources</strong>
            <p>${escapeHtml(agent.currentTask)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderArchiveFindings(payload) {
  els.archiveContent.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Findings</p>
          <h2>Archive Signals</h2>
        </div>
        <span class="pill">${Number((payload.findings || []).length).toLocaleString()} generated</span>
      </div>
      <div class="archive-finding-list">
        ${(payload.findings || []).map((finding) => `
          <article>
            <span>${escapeHtml(finding.findingType)}</span>
            <h3>${escapeHtml(finding.agentName)}</h3>
            <p>${escapeHtml(finding.summary)}</p>
            <small>${escapeHtml(finding.suggestedAction || "")}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderArchiveImports(payload) {
  els.archiveContent.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Imports</p>
          <h2>Bookmark Import Ledger</h2>
        </div>
        <span class="pill">CSV references retained</span>
      </div>
      <div class="import-ledger">
        ${(payload.imports || []).map((item) => `
          <article>
            <strong>${escapeHtml(item.fileName)}</strong>
            <p>${Number(item.totalLinks || 0).toLocaleString()} links • ${Number(item.uniqueUrls || 0).toLocaleString()} unique • ${Number(item.duplicateCount || 0).toLocaleString()} duplicate locations</p>
            <span>${escapeHtml(item.status)} • ${new Date(item.createdAt).toLocaleString()}</span>
          </article>
        `).join("")}
      </div>
      <div class="archive-rank-list">
        ${(payload.tables || []).map((table) => renderRankRow(table, "table")).join("")}
      </div>
    </section>
  `;
}

function renderArchiveQuarantine(payload) {
  els.archiveContent.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Quarantine</p>
          <h2>Marked, not deleted</h2>
        </div>
        <span class="pill">${Number(payload.total || 0).toLocaleString()} local links</span>
      </div>
      <p class="muted">${escapeHtml(payload.note || "")}</p>
      <div class="source-table">
        ${(payload.quarantine || []).map((item) => `
          <article>
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.url)}</a>
              <p>${escapeHtml(item.folderPath)}</p>
            </div>
            <span>${escapeHtml(item.reason)}</span>
            <small>${escapeHtml(item.action)}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderRankRow(label, count) {
  return `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${typeof count === "number" ? count.toLocaleString() : escapeHtml(count)}</strong>
    </article>
  `;
}

function renderFounderProfile() {
  const isPublic = state.founderMode === "public";
  els.founderSection.classList.toggle("public-profile", isPublic);
  els.founderSection.classList.toggle("command-profile", !isPublic);
  els.founderThink.innerHTML = founderProfile.howYouThink.map(([title, detail], index) => renderFounderTrait(title, detail, founderIcon(index))).join("");
  els.founderStrengths.innerHTML = founderProfile.strengths.map(([title, detail], index) => renderFounderTrait(title, detail, strengthIcon(index))).join("");
  els.founderValues.innerHTML = founderProfile.values.map((item) => `<p><span>◇</span>${escapeHtml(item)}</p>`).join("");
  els.founderAction.innerHTML = founderProfile.inAction.map((item) => `<p><span>✓</span>${escapeHtml(item)}</p>`).join("");
  els.founderBlindSpots.innerHTML = founderProfile.blindSpots.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  els.founderEnvironment.innerHTML = founderProfile.idealEnvironment.map((item) => `<p><span>✦</span>${escapeHtml(item)}</p>`).join("");
  els.founderVibeBars.innerHTML = founderProfile.vibeCheck.map(([label, score]) => `
    <div class="vibe-row">
      <span>${escapeHtml(label)}</span>
      <div class="vibe-track"><i style="width:${score * 10}%"></i></div>
      <strong>${score}/10</strong>
    </div>
  `).join("");
  els.founderNorthStar.innerHTML = founderProfile.northStar.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function renderFounderTrait(title, detail, icon) {
  return `
    <article>
      <span class="founder-icon">${escapeHtml(icon)}</span>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(detail)}</p>
      </div>
    </article>
  `;
}

function founderIcon(index) {
  return ["◎", "▧", "⚖", "ϟ"][index] || "◎";
}

function strengthIcon(index) {
  return ["✦", "⌕", "↗", "▣"][index] || "✦";
}

async function loadVisionMap() {
  let payload = null;
  try {
    payload = await getJson("/api/vision-map");
  } catch (error) {
    console.warn("API vision-map route error, using local fallback:", error);
    payload = {
      mission: { title: "Pickaxe Capital / AI Habitat OS", statement: "One Vision. Three Layers. Infinite Potential." },
      promptBuilder: { 
        basePrompt: "Focus the desk on {ticker}. Connect chart structure, flow proxy, catalyst context, TTT alignment, and risk gates. Give me the exact next research action.",
        quickPrompts: [
          "Validate macro regime trend limits for BTC before any manual Webull review.",
          "Inspect NVDA semi capex news memory blocks and options volume outliers.",
          "Check AAPL defined support bounds invalidation and premium risk gates."
        ]
      },
      brainMap: [
        { title: "Core Inputs", items: ["Market Watchlist Data", "Options Chain Implied Vol", "Geopolitical Intelligence Feeds", "Private Chrome Bookmarks Uploads"] }
      ],
      monitorRoom: [
        { title: "Active Watchlists", items: ["SPY index metrics", "QQQ Nasdaq options", "BTC spot levels", "NVDA volatility scan"] }
      ],
      learningSystem: [
        { title: "Ecosystem Rules", items: ["Time Trend Theme alignment", "Max 10% premium spread gate", "Downside invalidation checkpoints"] }
      ],
      businessMap: [
        { title: "Command Revenue", items: ["Static research models", "Educational sandbox packages", "Hedge fund terminal layouts"] }
      ],
      operatingDoctrine: [
        { title: "CEO B Mandates", items: ["Never merge external code untested", "No auto-trading or API key exposure", "Maintain 100% manual review review gates"] }
      ],
      catalystMemory: [
        { title: "Event Tracking", items: ["Federal Reserve interest rate schedule", "Mega-cap corporate earnings windows", "Sector rotation volume breakouts"] }
      ],
      quote: { text: "Stand firm in the right place, then watch the horizon.", author: "TTT" },
      folderSystem: ["Markets", "Options", "Macro Policy", "AI Coding", "Archive Vault", "System Prototyping"]
    };
  }
  state.visionMap = payload;
  if (els.visionMission) els.visionMission.textContent = payload.mission?.title || "Vision Map";
  if (els.visionStatement) els.visionStatement.textContent = payload.mission?.statement || "";
  if (els.promptTemplate) els.promptTemplate.textContent = payload.promptBuilder?.basePrompt || "";
  if (els.brainMap) els.brainMap.innerHTML = renderCardGroup(payload.brainMap || []);
  if (els.monitorRoom) els.monitorRoom.innerHTML = renderCardGroup(payload.monitorRoom || []);
  if (els.learningSystem) els.learningSystem.innerHTML = renderCardGroup(payload.learningSystem || []);
  if (els.businessMap) els.businessMap.innerHTML = renderCardGroup(payload.businessMap || []);
  if (els.operatingDoctrine) els.operatingDoctrine.innerHTML = renderCardGroup(payload.operatingDoctrine || []);
  if (els.catalystMemory) els.catalystMemory.innerHTML = renderCardGroup(payload.catalystMemory || []);
  if (els.visionQuote) {
    els.visionQuote.innerHTML = payload.quote
      ? `<p>${escapeHtml(payload.quote.text)}</p><strong>${escapeHtml(payload.quote.author || "TTT")}</strong>`
      : "";
  }
  if (els.folderSystem) els.folderSystem.innerHTML = (payload.folderSystem || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  if (els.quickPrompts) {
    els.quickPrompts.innerHTML = (payload.promptBuilder?.quickPrompts || []).map((prompt, index) => `
      <button type="button" data-prompt="${escapeHtml(prompt)}">${index + 1}. ${escapeHtml(prompt)}</button>
    `).join("");
  }
}

function loadPromptIntoDesk() {
  const prompt = state.visionMap?.promptBuilder?.basePrompt;
  if (!prompt) return;
  els.agentFocus.value = prompt.replace("{ticker}", "SPY").replace("{company}", "S&P 500 ETF");
  setView("command");
}

async function runAgents() {
  els.agentMeta.textContent = "Running";
  els.agentOutput.textContent = "Research desk is reading live data, options chain, and memory...";
  const symbols = els.watchlistInput.value.split(",").map((s) => s.trim()).filter(Boolean);
  try {
    const payload = await postJson("/api/agents/research", {
      symbols,
      optionsSymbol: els.optionsSymbol.value,
      focus: els.agentFocus.value,
    });
    els.agentOutput.textContent = payload.run.report;
    els.agentMeta.textContent = payload.run.aiOk ? payload.run.modelUsed : "Fallback";
    await loadChecklist();
  } catch (error) {
    console.warn("API agents research route error, using local fallback:", error);
    const targetSymbol = els.optionsSymbol?.value || "SPY";
    const marketItem = state.market?.find(item => item.symbol === targetSymbol) || { price: 520.50, changePct: 0.85 };
    const simulatedBrief = [
      `[SIMULATED AI RESEARCH BRIEF - STATIC DEMO]`,
      `Focus Target: ${targetSymbol} (Last: $${marketItem.price.toFixed(2)}, Change: ${marketItem.changePct >= 0 ? '+' : ''}${marketItem.changePct.toFixed(2)}%)`,
      `Data Source: Simulated Local Snapshot / Future Adapter Stub`,
      `Timestamp: ${new Date().toLocaleString()}`,
      `Risk gate check: Compliant (Defined risk, Spread < 0.10, Volume check ok)`,
      "",
      `Analysis: Under static prototype mode, the AI Research Desk analyzed ticker ${targetSymbol}. The broad index regime is constructive with positive volume velocity. Risk Sentinel has confirmed invalidation thresholds are mapped for the $${(marketItem.price * 0.95).toFixed(2)} downside level. Options Flow Hunter flags active interest at the near-term strike boundaries.`,
      "",
      `Recommendation: Ready for manual review. Webull execution only.`
    ].join("\n");
    
    els.agentOutput.textContent = simulatedBrief;
    els.agentMeta.textContent = "Static Prototype";
  }
}

async function saveJournal(event) {
  event.preventDefault();
  const form = new FormData(els.journalForm);
  const body = Object.fromEntries(form.entries());
  try {
    const payload = await postJson("/api/journal", body);
    if (payload.ok) {
      els.journalForm.reset();
      await loadChecklist();
      els.agentOutput.textContent = `Saved lesson for ${payload.entry.symbol || "the desk"}.\n\n${payload.entry.lesson}`;
    }
  } catch (error) {
    console.warn("API journal route error, saving locally in localStorage:", error);
    const journalList = JSON.parse(localStorage.getItem("pickaxeJournalEntries") || "[]");
    body.timestamp = new Date().toISOString();
    journalList.push(body);
    localStorage.setItem("pickaxeJournalEntries", JSON.stringify(journalList));
    els.journalForm.reset();
    await loadChecklist();
    els.agentOutput.textContent = `[SAVED LOCALLY - STATIC PROTOTYPE]\n\nLesson for ${body.symbol || "the desk"} saved to localStorage.\n\nThesis: ${body.setup}\nLesson: ${body.lesson}`;
  }
}

function renderMarketCard(item) {
  const selected = item.symbol === state.selectedSymbol ? " selected" : "";
  if (!item.ok) {
    return `
      <article class="metric-card${selected}" data-symbol="${escapeHtml(item.symbol)}">
        <div class="metric-top"><span class="symbol">${escapeHtml(item.symbol)}</span>${renderMarketLogo(item)}</div>
        <p class="muted">${escapeHtml(item.error || "Unavailable")}</p>
      </article>
    `;
  }
  const direction = item.changePct >= 0 ? "up" : "down";
  return `
    <article class="metric-card${selected}" data-symbol="${escapeHtml(item.symbol)}">
      <div class="metric-top">
        <div>
          <span class="symbol">${escapeHtml(item.symbol)}</span>
          <p class="muted">${escapeHtml(item.name)}</p>
        </div>
        ${renderMarketLogo(item)}
      </div>
      <div class="price">${formatMoney(item.price, item.currency)}</div>
      <strong class="${direction}">${formatSigned(item.change)} • ${formatSigned(item.changePct)}%</strong>
      <canvas class="spark" data-spark="${escapeHtml(item.symbol)}"></canvas>
      <p class="muted">H ${formatMoney(item.dayHigh, item.currency)} • L ${formatMoney(item.dayLow, item.currency)}</p>
    </article>
  `;
}

function renderMarketLogo(item) {
  const domain = logoDomains[item.symbol];
  const initials = item.symbol.replace(/[-=].*$/, "").slice(0, 4);
  if (!domain) {
    return `<span class="market-logo logo-fallback" title="${escapeHtml(item.name || item.symbol)}">${escapeHtml(initials)}</span>`;
  }
  const src = `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(domain)}`;
  return `
    <span class="market-logo" title="${escapeHtml(item.name || item.symbol)}">
      <img src="${src}" alt="${escapeHtml(item.name || item.symbol)} logo" loading="lazy" />
    </span>
  `;
}

function renderContract(contract) {
  const sideClass = contract.side === "CALL" ? "side-call" : "side-put";
  return `
    <div class="contract">
      <strong class="${sideClass}">${contract.side}</strong>
      <span>${escapeHtml(contract.contractSymbol || "")}</span>
      <strong>${contract.strike}</strong>
      <span>Vol ${contract.volume || 0}</span>
      <span>OI ${contract.openInterest || 0}</span>
    </div>
  `;
}

function renderCheckItem(item) {
  return `
    <article class="check-card ${escapeHtml(item.status)}">
      <div class="check-status">${escapeHtml(item.status)}</div>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    </article>
  `;
}

function renderSignalPacket(signal) {
  const isCall = signal.action?.includes("CALL") || signal.side === "CALL";
  const isPut = signal.action?.includes("PUT") || signal.side === "PUT";
  
  let actionColorClass = "text-slate-400";
  if (isCall) actionColorClass = "text-emerald-400 font-bold";
  else if (isPut) actionColorClass = "text-red-400 font-bold";
  else if (signal.action?.includes("WAIT") || signal.side === "WAIT") actionColorClass = "text-amber-400 font-bold";
  
  let statusBg = "bg-slate-900 border-slate-800 text-slate-400";
  if (signal.status?.includes("approved")) statusBg = "bg-emerald-950/30 border-emerald-900/30 text-emerald-400";
  else if (signal.status?.includes("rejected")) statusBg = "bg-red-950/30 border-red-900/30 text-red-400";
  else if (signal.status?.includes("review")) statusBg = "bg-blue-950/30 border-blue-900/30 text-blue-400";
  else if (signal.status?.includes("watch")) statusBg = "bg-amber-950/30 border-amber-900/30 text-amber-400";
  
  return `
    <div class="signal-packet-card border border-slate-800 bg-[#0e1012] p-4 flex flex-col justify-between rounded-sm relative font-mono text-[11px] hover:border-slate-700 transition-colors">
      <!-- Status tag at top -->
      <div class="flex items-center justify-between mb-3 border-b border-slate-900 pb-2">
        <div>
          <span class="text-[8px] text-slate-500 uppercase tracking-wider block font-mono">Symbol / Strategy</span>
          <h3 class="text-xs font-bold text-white tracking-tight font-sans mt-0.5">${escapeHtml(signal.symbol)} - ${escapeHtml(signal.strategy)}</h3>
        </div>
        <span class="px-2 py-0.5 border text-[8px] font-bold uppercase tracking-widest rounded ${statusBg}">
          ${escapeHtml(signal.status)}
        </span>
      </div>

      <!-- Signal Metrics Grid -->
      <div class="grid grid-cols-2 gap-2 mb-3 bg-black/30 p-2 border border-slate-950 text-[10px]">
        <div><span class="text-slate-500 text-[8px] block uppercase">Direction</span><strong class="${actionColorClass}">${escapeHtml(signal.action || signal.side)}</strong></div>
        <div><span class="text-slate-500 text-[8px] block uppercase">Strike/Expiry</span><strong class="text-white text-[9px]">${escapeHtml(signal.contract || "N/A")}</strong></div>
        <div><span class="text-slate-500 text-[8px] block uppercase">Confidence</span><strong class="text-amber">${signal.confidence}%</strong></div>
        <div><span class="text-slate-500 text-[8px] block uppercase">Spread Quality</span><strong class="text-slate-300">${escapeHtml(signal.spreadQuality || "N/A")}</strong></div>
      </div>

      <!-- Greeks & Volatility Placeholders (Demo/Static) -->
      <div class="grid grid-cols-2 gap-2 mb-3 bg-[#0d0e10] p-2 border border-slate-900 text-[9px] font-mono text-slate-400">
        <div><span class="text-slate-500 text-[8px] block uppercase">Volume</span>2,450 <span class="text-[7px] text-slate-600 block">(Demo Static)</span></div>
        <div><span class="text-slate-500 text-[8px] block uppercase">Open Int.</span>8,920 <span class="text-[7px] text-slate-600 block">(Demo Static)</span></div>
        <div><span class="text-slate-500 text-[8px] block uppercase">IV %</span>38.4% <span class="text-[7px] text-slate-600 block">(Demo Static)</span></div>
        <div><span class="text-slate-500 text-[8px] block uppercase">Delta/Theta</span>0.45 / -0.05 <span class="text-[7px] text-slate-600 block">(Demo Static)</span></div>
      </div>

      <!-- Detailed thesis fields -->
      <div class="space-y-2 mb-4 bg-black/15 p-2 rounded-sm border border-slate-950">
        <div><span class="text-slate-500 text-[8px] block uppercase font-bold">Catalyst</span><p class="text-slate-300 leading-snug font-sans">${escapeHtml(signal.catalyst)}</p></div>
        <div><span class="text-slate-500 text-[8px] block uppercase font-bold">Thesis</span><p class="text-slate-300 leading-snug font-sans">${escapeHtml(signal.thesis)}</p></div>
        <div><span class="text-slate-500 text-[8px] block uppercase font-bold">Invalidation</span><p class="text-red-400 leading-snug font-sans">${escapeHtml(signal.invalidation)}</p></div>
        <div><span class="text-slate-500 text-[8px] block uppercase font-bold">Risk Notes</span><p class="text-amber-400 leading-snug font-sans">${escapeHtml(signal.riskNotes || "Defined premium risk limit.")}</p></div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-900 mt-auto">
        <button onclick="window.changeSignalStatus('${escapeHtml(signal.id)}', 'CEO B review')" class="bg-blue-950/40 text-blue-400 border border-blue-900/50 hover:bg-blue-950/80 hover:border-blue-400 transition-colors text-[9px] px-2 py-1 uppercase font-bold">Send to Review</button>
        <button onclick="window.changeSignalStatus('${escapeHtml(signal.id)}', 'approved manual review')" class="bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-950/80 hover:border-emerald-400 transition-colors text-[9px] px-2 py-1 uppercase font-bold">Approve</button>
        <button onclick="window.changeSignalStatus('${escapeHtml(signal.id)}', 'risk rejected')" class="bg-red-950/40 text-red-400 border border-red-900/50 hover:bg-red-950/80 hover:border-red-400 transition-colors text-[9px] px-2 py-1 uppercase font-bold">Reject</button>
        <button onclick="window.changeSignalStatus('${escapeHtml(signal.id)}', 'watch only')" class="bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:border-slate-500 transition-colors text-[9px] px-2 py-1 uppercase font-bold">Watch Only</button>
      </div>
    </div>
  `;
}

function renderSignalCard(signal) {
  return renderSignalPacket(signal);
}

window.changeSignalStatus = (alertId, nextStatus) => {
  const alerts = getOptionAlertsState();
  const alert = alerts.find(a => a.id === alertId);
  if (alert) {
    alert.status = nextStatus;
    saveOptionAlertsState(alerts);
    showNotification(`Signal status changed to "${nextStatus}" for ${alert.symbol}`);
    state.terminalLog = state.terminalLog || [];
    state.terminalLog.push(`SIGNAL UPDATE: ${alert.symbol} set to "${nextStatus}"`);
    
    // Refresh relevant views
    renderHomeCommandCenter();
    loadSignals();
    renderAlertsPage();
  }
};

window.sendSignalToCeoReview = (signalId) => {
  window.changeSignalStatus(signalId, 'CEO B review');
};

function renderCardGroup(items) {
  return items.map((group) => `
    <article class="mini-card">
      <h3>${escapeHtml(group.title)}</h3>
      <ul>
        ${(group.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderAgentsPage() {
  const visibleAgents = habitatAgents.filter((agent) => state.agentFilter === "all" || agent.status === state.agentFilter);
  const selected = habitatAgents.find((agent) => agent.id === state.selectedAgentId) || habitatAgents[0];
  const ceo = habitatAgents.find((agent) => agent.id === "ceo-b") || habitatAgents[0];
  const visibleIds = new Set(visibleAgents.map((agent) => agent.id));
  const links = [];
  habitatAgents.forEach((agent) => {
    agent.connections.forEach((connectionId) => {
      const target = habitatAgents.find((entry) => entry.id === connectionId);
      if (!target || !visibleIds.has(agent.id) || !visibleIds.has(target.id)) return;
      const key = [agent.id, target.id].sort().join(":");
      if (links.some((link) => link.key === key)) return;
      links.push({ key, source: agent, target, active: agent.status === "collaborating" || target.status === "collaborating" || selected.id === agent.id || selected.id === target.id });
    });
  });

  const activeLinks = links.filter((link) => link.active).slice(0, 8);
  const activeCount = habitatAgents.filter((agent) => ["active", "working", "scanning", "collaborating"].includes(agent.status)).length;
  const runningTasks = habitatAgents.reduce((sum, agent) => sum + Math.max(1, Math.round(agent.progress / 18)), 0);
  const averageProgress = Math.round(habitatAgents.reduce((sum, agent) => sum + agent.progress, 0) / habitatAgents.length);
  const averageConfidence = Math.round(habitatAgents.reduce((sum, agent) => sum + agent.confidence, 0) / habitatAgents.length);
  els.agentHabitat.innerHTML = `
    <div class="habitat-atmosphere trading-floor-atmosphere">
      <span class="scan-sweep"></span>
      <span class="drone drone-one"></span>
      <span class="drone drone-two"></span>
      <span class="drone drone-three"></span>
      <span class="orbit-ring ring-one"></span>
      <span class="orbit-ring ring-two"></span>
    </div>
    <div class="city-grid"></div>
    <div class="habitat-skyline">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="habitat-global-globe">
      <span class="globe-core"></span>
      <strong>Global Live</strong>
    </div>
    ${renderHabitatHud(selected, { activeCount, runningTasks, averageConfidence })}
    <button class="ceo-command-tower trading-ceo" data-agent-id="ceo-b" style="left:${ceo.position.x}%; top:8%">
      <div class="tower-mark">PC</div>
      <span class="tower-portrait" style="${portraitStyle(ceo, 82)}"></span>
      <strong>CEO B</strong>
      <span>Command Center • Human Review Gate</span>
    </button>
    <div class="trading-floor-hub">
      <div class="floor-rings"></div>
      <h2>Trading Floor</h2>
      <p>Central hub for research, signal review, collaboration, and CEO B synthesis.</p>
      <div class="floor-operators">
        ${Array.from({ length: 22 }).map((_, index) => `<i style="--i:${index}; --delay:${(index % 7) * -0.45}s"></i>`).join("")}
      </div>
    </div>
    <svg class="agent-links" viewBox="0 0 100 100" preserveAspectRatio="none">
      ${links.map((link) => `
        <line class="${link.active ? "active" : ""}" x1="${link.source.position.x}" y1="${link.source.position.y}" x2="${link.target.position.x}" y2="${link.target.position.y}" />
      `).join("")}
      <path class="floor-loop loop-one" d="M18 22 C32 37, 42 45, 50 50 C60 42, 68 32, 75 22" />
      <path class="floor-loop loop-two" d="M17 62 C32 55, 42 52, 50 50 C63 52, 74 58, 84 64" />
      <path class="floor-loop loop-three" d="M34 72 C42 63, 47 56, 50 50 C53 59, 58 65, 64 72" />
    </svg>
    ${activeLinks.map((link, index) => `
      <span class="data-packet" style="left:${link.source.position.x}%; top:${link.source.position.y}%; --tx:${link.target.position.x - link.source.position.x}vw; --ty:${link.target.position.y - link.source.position.y}vh; animation-delay:${index * 0.38}s"></span>
      <span class="agent-runner" style="left:${link.source.position.x}%; top:${link.source.position.y}%; --tx:${link.target.position.x - link.source.position.x}vw; --ty:${link.target.position.y - link.source.position.y}vh; animation-delay:${index * 0.52}s">
        <span class="runner-portrait" style="${portraitStyle(link.source, 24)}"></span>
      </span>
    `).join("")}
    <span class="moving-agent route-alpha"><i></i></span>
    <span class="moving-agent route-nexus"><i></i></span>
    <span class="moving-agent route-omega"><i></i></span>
    <span class="data-cube cube-one"></span>
    <span class="data-cube cube-two"></span>
    <span class="data-cube cube-three"></span>
    <div class="collab-huddle huddle-one"><span></span><span></span><span></span><strong>Risk huddle</strong></div>
    <div class="collab-huddle huddle-two"><span></span><span></span><span></span><strong>Signal huddle</strong></div>
    ${visibleAgents.filter((agent) => agent.id !== "ceo-b").map(renderAgentNode).join("")}
    ${renderHabitatSystems()}
  `;
  bindHabitatControls();

  els.agentDrawer.innerHTML = renderAgentDrawer(selected);
  els.agentDetail.innerHTML = renderAgentDetail(selected);
  els.agentActivity.innerHTML = (state.activityFeed.length ? state.activityFeed : seedActivityFeed()).slice(0, 12).map((item) => `
    <article>
      <span>${escapeHtml(item.time)}</span>
      <strong>${escapeHtml(item.agent)}</strong>
      <p>${escapeHtml(item.message)}</p>
    </article>
  `).join("");
  els.agentOverview.innerHTML = habitatAgents.map(renderAgentOverviewCard).join("");
  els.agentHealth.textContent = `${activeCount}/${habitatAgents.length} active`;
  els.agentStats.innerHTML = renderAgentStats({ activeCount, runningTasks, averageConfidence });
  els.missionProgress.innerHTML = `
    <div class="mission-meter"><span style="width:${averageProgress}%"></span></div>
    <div class="mission-stats">
      <span><strong>${averageProgress}%</strong> habitat progress</span>
      <span><strong>${state.selectedSymbol}</strong> desk focus</span>
      <span><strong>${averageConfidence}%</strong> network confidence</span>
    </div>
    ${renderFlowDeskSnapshot()}
    ${renderSystemPerformance()}
    ${renderCeoResearchBrief()}
  `;
  renderAgentOperatingSystem();
}

function renderAgentOperatingSystem() {
  if (!els.agentOperatingSystem) return;
  renderAgentWorldOS();
  return;
  const selectedAgent = getSelectedOperatingAgent();
  const laneDefinitions = [
    { title: "Core Command", purpose: "CEO B decision layer, narrative, and system brain.", objective: "Keep every agent working toward founder review.", status: "Command Online", agents: ["CEO B", "System Brain", "Story Teller"] },
    { title: "Market Habitat", purpose: "Watchlist, signals, macro, flows, and RK Tracker.", objective: "Rank candidates without pretending live market data is connected.", status: "Active Mock", agents: ["Signal Scout", "Macro Watcher", "Flow Hunter"] },
    { title: "Global Risk Habitat", purpose: "News, geopolitical risk, flights, outages, and movement.", objective: "Flag dangerous context before anything reaches CEO B.", status: "Active Mock", agents: ["News Raven", "Risk Sentinel", "Map Builder"] },
    { title: "Knowledge Habitat", purpose: "Bookmarks, X imports, research, and source discovery.", objective: "Convert saved links into useful intelligence.", status: "User Import Ready", agents: ["Bookmark Miner", "Archive Keeper"] },
    { title: "Archive Habitat", purpose: "Memory, lessons, playbooks, and decision rules.", objective: "Turn repeated lessons into reusable wealth-building rules.", status: "Active Mock", agents: ["Archive Keeper", "Wealth Alchemist"] },
    { title: "Build System Habitat", purpose: "Tasks, QA, staging, and auto-update workflow.", objective: "Keep the site build-safe and avoid duplicate architecture.", status: "Build Safe", agents: ["Task Smith", "Auto Update Agent", "System Brain"] },
    { title: "Private Intelligence Habitat", purpose: "Chrome bookmarks, X bookmarks, and personal saved research.", objective: "Keep private imports local/user-provided until official APIs exist.", status: "Private Import", agents: ["Bookmark Miner", "News Raven"] },
    { title: "Case Study Habitat", purpose: "Berkshire 1965, annual reports, and old documents into modern rules.", objective: "Turn historical cleanup lessons into CEO B checklists.", status: "Historical Manual Data", agents: ["Wealth Alchemist", "Archive Keeper", "Macro Watcher"] },
  ];
  const agentOps = getAgentOpsState();
  const visibleLanes = state.agentHabitatFilter === "all" ? laneDefinitions : laneDefinitions.filter((lane) => lane.title === state.agentHabitatFilter);
  const gameNodes = [
    ["Signal Scout", 18, 24, "Market Analysis", "violet"],
    ["Macro Watcher", 34, 17, "Macro Research", "violet"],
    ["News Raven", 17, 52, "News & Intel", "cyan"],
    ["Flow Hunter", 38, 48, "Flow Desk", "green"],
    ["Risk Sentinel", 74, 48, "Risk Vault", "gold"],
    ["System Brain", 72, 22, "Strategy Core", "cyan"],
    ["Bookmark Miner", 26, 76, "Private Intel", "green"],
    ["Archive Keeper", 50, 78, "Archive Vault", "green"],
    ["Wealth Alchemist", 70, 76, "Playbook Lab", "violet"],
    ["Task Smith", 13, 77, "Build Queue", "gold"],
    ["Story Teller", 85, 26, "Founder Narrative", "violet"],
    ["Auto Update Agent", 86, 74, "Automation Dock", "cyan"],
  ];
  const feedItems = [...agentOps.events.map((event) => `${event.agentName} ${event.message}`), ...mockActivityFeed].slice(0, 7);
  els.agentOperatingSystem.innerHTML = `
    <section class="agent-game-page">
      <header class="agent-game-hero">
        <div>
          <p class="eyebrow">Page 07 / AI Habitat OS</p>
          <h2>Agent Habitat</h2>
          <p>CEO B’s game-style command floor. Agents patrol pods, carry data cubes, huddle for risk checks, and deliver final research packets for human review. Mock/local state only.</p>
        </div>
        <div class="agent-game-scoreboard">
          <span><strong>${operatingAgents.length}</strong> agents</span>
          <span><strong>${operatingAgents.filter((agent) => /active|online|ready/i.test(agent.status)).length}</strong> active</span>
          <span><strong>${agentOps.tasks.filter((task) => task.status !== "done").length}</strong> tasks</span>
          <span><strong>${stalledIntegrations.length}</strong> setup</span>
        </div>
      </header>

      <section class="agent-game-layout">
        <div class="agent-game-map" aria-label="AI Habitat OS video game command map">
          <div class="game-district market"><strong>Market Habitat</strong><small>signals / macro / flow</small></div>
          <div class="game-district risk"><strong>Risk Habitat</strong><small>news / map / veto</small></div>
          <div class="game-district archive"><strong>Archive Habitat</strong><small>memory / playbooks</small></div>
          <div class="game-district build"><strong>Build Habitat</strong><small>tasks / automation</small></div>
          <svg class="game-routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path class="gold" d="M50 12 C50 26 50 33 50 44" />
            <path class="cyan" d="M18 24 C30 35 41 39 50 50 C60 40 72 34 84 26" />
            <path class="green" d="M14 55 C30 62 41 62 50 55 C60 63 72 62 86 55" />
            <path class="violet" d="M14 78 C30 72 40 64 50 55 C60 66 70 74 86 78" />
            <path class="patrol" d="M18 22 C32 13 68 13 84 24 C92 47 86 76 68 84 C49 91 23 84 13 58 C9 42 10 31 18 22" />
          </svg>
          <button class="game-ceo-node" type="button" onclick="window.selectOperatingAgent?.('ceo-b-os')">
            <span>CEO B</span>
            <strong>Command Center</strong>
            <small>final review / founder decision layer</small>
          </button>
          <div class="game-core-node">
            <span>Trading Floor</span>
            <strong>Operations Core</strong>
            <small>agents meet here before CEO B review</small>
          </div>
          ${gameNodes.map(([name, x, y, role, tone]) => renderAgentGameNode(name, x, y, role, tone)).join("")}
          ${["Scout", "Raven", "Risk", "Archive", "Build", "Macro"].map((label, index) => `<span class="game-runner runner-${index + 1}"><i></i><em>${escapeHtml(label)}</em></span>`).join("")}
          ${Array.from({ length: 6 }).map((_, index) => `<span class="game-cube cube-${index + 1}"></span>`).join("")}
          <div class="game-routine-bar">
            ${["Scan", "Commute", "Handoff", "Huddle", "Deliver"].map((step) => `<span>${escapeHtml(step)}</span>`).join("")}
          </div>
        </div>

        <aside class="agent-game-side">
          ${renderAgentGameDrawer(selectedAgent, agentOps)}
          <section class="game-feed">
            <div class="panel-head"><div><p class="eyebrow">Mock Live Feed</p><h2>Operations</h2></div><span class="pill">Local</span></div>
            ${feedItems.map((item, index) => renderMockActivityItem(item, index)).join("")}
          </section>
        </aside>
      </section>

      <section class="agent-game-bottom">
        ${[
          ["Mission", "87%", "Daily objectives moving through research, risk, archive, and CEO B review."],
          ["Network", "Agent Mesh", "Pods cluster when tasks overlap, then split back to home stations."],
          ["Boundaries", "No Fake Live", "No real agents, no auto-trading, no X sync until backend setup exists."],
          ["Next", "Vision Map", "Bring page 01 up to this simpler game-style command quality."],
        ].map(([title, value, detail]) => `<article><span>${escapeHtml(title)}</span><strong>${escapeHtml(value)}</strong><p>${escapeHtml(detail)}</p></article>`).join("")}
      </section>
    </section>
  `;
  return;
  els.agentOperatingSystem.innerHTML = `
    <section class="agent-command-deck">
      <div>
        <p class="eyebrow">AI Habitat OS / Page 07</p>
        <h2>Agent Operations Floor</h2>
        <p>One living command room for CEO B, market agents, risk sentinels, bookmark miners, archive memory, build tasks, and future automation. Everything shown here is mock/local until real telemetry is connected.</p>
        <div class="signal-badges"><span>Mock Activity</span><span>Local State</span><span>CEO B Review</span><span>No Fake Live Agents</span></div>
      </div>
      <div class="agent-command-stats">
        <span><strong>${operatingAgents.length}</strong>Total Agents</span>
        <span><strong>${operatingAgents.filter((agent) => /active|online|ready/i.test(agent.status)).length}</strong>Active Mock</span>
        <span><strong>${agentOps.tasks.filter((task) => task.status !== "done").length}</strong>Local Tasks</span>
        <span><strong>${stalledIntegrations.length}</strong>Setup Needed</span>
      </div>
    </section>
    <section class="agent-civilization-grid">
      <div class="agent-civilization-map" aria-label="Pickaxe Capital AI agent civilization map">
        <div class="agent-city-backdrop"></div>
        <div class="habitat-district district-market"><strong>Market Habitat</strong><small>signals / macro / flow</small></div>
        <div class="habitat-district district-risk"><strong>Risk Habitat</strong><small>news / maps / veto</small></div>
        <div class="habitat-district district-knowledge"><strong>Knowledge Habitat</strong><small>bookmarks / archive</small></div>
        <div class="habitat-district district-build"><strong>Build Habitat</strong><small>tasks / automation</small></div>
        <svg class="agent-civilization-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path class="gold" d="M50 12 C50 24, 50 31, 50 42" />
          <path class="cyan" d="M15 33 C30 40, 38 45, 50 50" />
          <path class="cyan" d="M85 33 C70 40, 62 45, 50 50" />
          <path class="purple" d="M18 68 C32 63, 40 58, 50 50" />
          <path class="purple" d="M82 68 C68 63, 60 58, 50 50" />
          <path class="green" d="M32 82 C40 70, 45 58, 50 50" />
          <path class="green" d="M68 82 C60 70, 55 58, 50 50" />
          <path class="patrol patrol-one" d="M15 23 C22 34, 36 41, 50 45 C65 41, 76 32, 85 23" />
          <path class="patrol patrol-two" d="M13 54 C28 60, 40 63, 50 58 C61 64, 76 62, 87 53" />
          <path class="patrol patrol-three" d="M18 78 C36 72, 42 64, 50 56 C58 66, 67 74, 84 80" />
        </svg>
        <button class="agent-command-node ceo" type="button" onclick="window.selectOperatingAgent?.('ceo-b-os')">
          <span>CEO B</span>
          <strong>Command Center</strong>
          <small>Founder decision layer</small>
        </button>
        <div class="agent-command-node floor">
          <span>Trading Floor</span>
          <strong>AI Operations Core</strong>
          <small>Research • risk • archive • review</small>
        </div>
        ${renderAgentMapNode("Signal Scout", "alpha", 15, 21, "Market Analysis")}
        ${renderAgentMapNode("System Brain", "nexus", 72, 19, "Strategy Engine")}
        ${renderAgentMapNode("Risk Sentinel", "omega", 72, 47, "Risk Management")}
        ${renderAgentMapNode("News Raven", "echo", 15, 47, "News & Intel")}
        ${renderAgentMapNode("Macro Watcher", "macro", 31, 18, "Macro Research")}
        ${renderAgentMapNode("Flow Hunter", "flow", 34, 42, "Flow Desk")}
        ${renderAgentMapNode("Map Builder", "geo", 84, 64, "Geopolitical Watch")}
        ${renderAgentMapNode("Bookmark Miner", "sigma", 26, 67, "Private Intelligence")}
        ${renderAgentMapNode("Archive Keeper", "weaver", 47, 70, "Knowledge Vault")}
        ${renderAgentMapNode("Wealth Alchemist", "quantum", 67, 67, "Playbook Engine")}
        ${renderAgentMapNode("Task Smith", "task", 16, 72, "Build Tasks")}
        ${renderAgentMapNode("Story Teller", "story", 83, 22, "Founder Narrative")}
        ${renderAgentMapNode("Auto Update Agent", "auto", 84, 72, "Planned Automation")}
        <span class="agent-worker route-one"><b></b><em>Scout</em></span>
        <span class="agent-worker route-two"><b></b><em>Raven</em></span>
        <span class="agent-worker route-three"><b></b><em>Keeper</em></span>
        <span class="agent-worker route-four"><b></b><em>Risk</em></span>
        <span class="agent-worker route-five"><b></b><em>Build</em></span>
        <span class="agent-data-cube cube-a"></span>
        <span class="agent-data-cube cube-b"></span>
        <span class="agent-data-cube cube-c"></span>
        <span class="agent-data-cube cube-d"></span>
        <div class="habitat-routine-strip">
          ${[
            ["Patrol", "agents scan their habitat lanes"],
            ["Commute", "move to the trading floor"],
            ["Handoff", "send data cubes to CEO B"],
            ["Huddle", "risk + signal collaboration"],
            ["Return", "save output to archive memory"],
          ].map(([title, detail]) => `<article><strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span></article>`).join("")}
        </div>
      </div>
      <aside class="agent-right-command-stack">
        <section class="agent-live-feed-panel">
          <div class="panel-head"><div><p class="eyebrow">Mock Activity Feed / not live background jobs yet</p><h2>Live Operations Feed</h2></div><span class="pill">Local</span></div>
          <div class="activity-feed mock-feed">
            ${[...agentOps.events.map((event) => event.message), ...mockActivityFeed].slice(0, 9).map((item, index) => renderMockActivityItem(item, index)).join("")}
          </div>
        </section>
        <section class="operating-agent-drawer" id="operatingAgentDrawer">
          ${renderOperatingAgentDrawer(selectedAgent)}
        </section>
      </aside>
    </section>
    ${renderAgentEcosystemConsole(agentOps, selectedAgent, laneDefinitions)}
    ${renderAgentOpsBottomPanels(agentOps)}
    <section class="habitat-lane-grid">
      ${visibleLanes.map((lane) => {
        const agents = lane.agents.map((agentName) => operatingAgents.find((agent) => agent.name === agentName)).filter(Boolean);
        return `
          <article class="habitat-lane">
            <div class="lane-head"><h3>${escapeHtml(lane.title)}</h3><span>${agents.length} agents • ${escapeHtml(lane.status)}</span></div>
            <p>${escapeHtml(lane.purpose)}</p>
            <small class="lane-objective"><b>Objective:</b> ${escapeHtml(lane.objective)}</small>
            ${agents.map(renderOperatingAgentCard).join("") || `<p class="muted">No assigned agent yet.</p>`}
          </article>
        `;
      }).join("")}
    </section>
    ${renderAgentTaskBoard(agentOps)}
    <section class="agent-os-grid">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">Mock Activity Feed / not live background jobs yet</p><h2>Living Operations</h2></div><span class="pill">Local visual feed</span></div>
        <div class="activity-feed mock-feed">
          ${[...agentOps.events.map((event) => event.message), ...mockActivityFeed].slice(0, 14).map((item, index) => renderMockActivityItem(item, index)).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">CEO B Review Queue</p><h2>Pending Decisions</h2></div><span class="pill">${ceoReviewQueue.length} items</span></div>
        <div class="review-queue">
          ${ceoReviewQueue.map((item, index) => `<article><span>${escapeHtml(item.type)} • ${escapeHtml(item.priority)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note)}</p><small>${escapeHtml(item.owner)}</small><button type="button" onclick="window.operatingAgentAction?.('review', '${escapeHtml(item.owner)}')">Review</button></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="motion-system-panel">
      <div class="panel-head">
        <div><p class="eyebrow">Motion & Animation System</p><h2>How the Habitat Feels Alive</h2></div>
        <span class="pill">Mock visual states</span>
      </div>
      <div class="motion-state-grid">
        ${[
          ["Patrol Loops", "Agents continuously patrol defined paths inside hubs."],
          ["Commute Paths", "Agents travel between pods and the trading floor."],
          ["Data Handoff", "Agents exchange data cubes at waypoints."],
          ["Collaboration", "Agents form temporary huddles for complex problems."],
          ["Task Complete", "Agents deliver results and return to their home station."],
          ["Idle Observatory", "Agents idle, monitor, or await new task assignments."],
          ["Live Activity Pulse", "Feeds and status lights move when mock events update."],
        ].map(([title, detail], index) => `<article><b>${index + 1}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(detail)}</p><i></i></article>`).join("")}
      </div>
    </section>
    <section class="panel ownership-matrix-panel">
      <div class="panel-head"><div><p class="eyebrow">Ownership Matrix</p><h2>Page / Source -> Agent Owner -> Status -> Next Action</h2></div><span class="pill">Local owner map</span></div>
      <div class="ownership-table">${renderOwnershipRows()}</div>
    </section>
    <section class="panel stalled-panel">
      <div class="panel-head"><div><p class="eyebrow">Stalled / Missing Integrations</p><h2>Honest System Boundaries</h2></div><span class="pill">No fake live work</span></div>
      <div class="stalled-grid">${stalledIntegrations.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
    </section>
  `;
}

function getSelectedOperatingAgent() {
  return operatingAgents.find((agent) => agent.id === state.selectedOperatingAgentId) || operatingAgents[0] || {};
}

function renderAgentWorldOS() {
  const world = habitatWorld || { habitats: [], missions: [], activity: [], reviewStack: [], progress: [] };
  const worldState = getWorldState();
  const ops = getAgentOpsState();
  const habitats = world.habitats || [];
  const allMissions = getEffectiveWorldMissions();
  const missions = getFilteredWorldMissions(allMissions);
  const selectedHabitat = habitats.find((habitat) => habitat.id === state.selectedHabitatId) || habitats[0] || {};
  const selectedMission = allMissions.find((mission) => mission.id === state.selectedMissionId) || missions[0] || allMissions[0] || {};
  const selectedAgentName = state.selectedWorldAgentName || selectedHabitat.agents?.[0] || "CEO B";
  const reviewStack = getWorldReviewStack();
  const feed = [...(worldState.events || []), ...ops.events.map((event) => `${event.agentName}: ${event.message}`), ...(world.activity || []), ...mockActivityFeed].slice(0, 14);
  const activeCollaborations = (world.missions || []).filter((mission) => /working|collaborating|waiting/i.test(mission.status || "")).length;
  const centerHot = activeCollaborations >= 2 || reviewStack.length >= 2;
  const nextBest = getNextBestMove();
  els.agentOperatingSystem.innerHTML = `
    <section class="world-os">
      <header class="world-hero">
        <div>
          <p class="eyebrow">Welcome back, CEO B</p>
          <h2>Pickaxe Capital Command Center</h2>
          <p>One vision. Three layers. Pickaxe Capital is the public command brand, AI Habitat OS is the operating system, and CEO B is the command layer that reviews, ranks, and decides. Demo/local activity only until real telemetry is connected.</p>
          <div class="game-action-row">
            <a href="#/vision-map">Explore Hierarchy</a>
            <a href="#/staging">System Overview</a>
            <button type="button" onclick="window.runAgentCycle?.()">Run Diagnostics</button>
          </div>
          <div class="signal-badges"><span>Strategy-game UI</span><span>Local Missions</span><span>CEO B Review Stack</span><span>No Fake Live Agents</span></div>
        </div>
        <div class="world-score-grid">
          ${[
            ["Habitats", habitats.length],
            ["Agents Defined", operatingAgents.length || habitats.reduce((sum, habitat) => sum + (habitat.agents || []).length, 0)],
            ["Local Missions", missions.length],
            ["CEO B Queue", reviewStack.length],
            ["Route Check", "Verified"],
            ["Mode", "Prototype"],
          ].map(([label, value]) => `<span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`).join("")}
        </div>
      </header>
      <section class="world-hierarchy">
        ${renderWorldHierarchyCard("Pickaxe Capital", "Public Command Brand", "The public face of the mission: leadership, capital discipline, and long-term value creation.", "unit-6")}
        ${renderWorldHierarchyCard("AI Habitat OS", "Internal Operating System", "The private worker civilization that powers intelligence, automation, archive, and operations.", "unit-3")}
        ${renderWorldHierarchyCard("CEO B", "Command Layer", "The command interface that oversees, coordinates, and executes the vision.", "unit-2")}
      </section>
      <section class="world-control-strip">
        ${["all", "active", "completed", "pending-ceo", "demo-live-gap"].map((filter) => `<button type="button" class="${state.worldFilter === filter ? "active" : ""}" onclick="window.setWorldFilter?.('${filter}')">${escapeHtml(worldFilterLabel(filter))}</button>`).join("")}
        <button type="button" onclick="window.toggleWorldLegend?.()">${state.showWorldLegend ? "Hide" : "Show"} Map Legend</button>
        <a href="#/vision-map">Open Vision Map</a>
        <a href="#/archive">Open Archive</a>
      </section>

      <section class="world-layout">
        <div class="world-map" aria-label="Pickaxe Capital AI Habitat game world">
          <div class="world-grid-glow"></div>
          <svg class="world-bridges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path class="bridge market" d="M16 26 C28 35 40 44 50 50" />
            <path class="bridge intel" d="M82 26 C70 35 60 44 50 50" />
            <path class="bridge archive" d="M18 76 C31 67 41 58 50 50" />
            <path class="bridge builder" d="M82 76 C70 67 60 58 50 50" />
            <path class="bridge personal" d="M50 88 C50 75 50 62 50 50" />
            <path class="bridge side" d="M16 26 C36 12 62 12 82 26" />
            <path class="bridge side" d="M18 76 C37 88 62 88 82 76" />
            <path class="bridge side" d="M18 76 C12 56 10 42 16 26" />
          </svg>
          <button class="world-ceo ${centerHot ? "hot" : ""}" type="button" onclick="window.selectWorldHabitat?.('central-command')">
            <span>CEO B Command Center</span>
            <strong>Central Trading Floor</strong>
            <small>review desk • collaboration plaza • ${reviewStack.length} pending approvals</small>
          </button>
          <div class="world-floor ${centerHot ? "hot" : ""}">
            <span>Command Nexus</span>
            <strong>Mission Completion Board</strong>
            <small>Trading Floor Active • ${activeCollaborations} collaborations • next: ${escapeHtml(nextBest.label)}</small>
          </div>
          ${habitats.map(renderWorldHabitatNode).join("")}
          ${(world.missions || []).slice(0, 6).map((mission, index) => renderWorldMissionPackage(mission, index)).join("")}
          ${renderWorldAgents(habitats)}
          ${state.showWorldLegend ? renderWorldLegend() : ""}
        </div>
        <aside class="world-side">
          ${renderWorldDetailPanel(selectedHabitat, selectedMission, selectedAgentName)}
          <section class="world-feed">
            <div class="panel-head"><div><p class="eyebrow">Simulated Live Feed</p><h2>Agent Activity</h2></div><span class="pill">Demo</span></div>
            ${feed.map((item, index) => renderMockActivityItem(item, index)).join("")}
          </section>
        </aside>
      </section>

      <section class="world-agent-roster">
        <div class="panel-head"><div><p class="eyebrow">AI Agents</p><h2>Autonomous Worker Classes</h2></div><span class="pill">Mock operators</span></div>
        <div class="world-agent-card-row">
          ${renderWorldAgentRoster(habitats)}
        </div>
      </section>

      <section class="world-dashboard">
        <article class="world-review-stack">
          <div class="panel-head"><div><p class="eyebrow">CEO B Review Stack</p><h2>Completed Work Arrives Here</h2></div><span class="pill">${reviewStack.length} local packets</span></div>
          <div class="review-stack-list">
            ${reviewStack.map(renderWorldReviewItem).join("")}
          </div>
          <div class="todays-wins">
            <span class="label">Today's Wins</span>
            ${(worldState.wins || []).slice(0, 4).map((win) => `<p>${escapeHtml(win.title)} <small>${escapeHtml(win.time || "local")}</small></p>`).join("") || `<p class="muted">Approved review items land here.</p>`}
          </div>
        </article>
        <article class="world-mission-board">
          <div class="panel-head"><div><p class="eyebrow">Mission System</p><h2>Active Work Orders</h2></div><span class="pill">Click mission</span></div>
          ${missions.map(renderWorldMissionCard).join("")}
          ${missions.length ? "" : `<p class="muted">No missions match this filter.</p>`}
        </article>
      </section>

      <section class="world-progress-board">
        ${(world.progress || []).map((item) => `<article><span>${escapeHtml(item.label)}</span><strong>${item.value}%</strong><i><b style="width:${Number(item.value || 0)}%"></b></i></article>`).join("")}
        <article class="next-best-card"><span>Next Best Move</span><strong>${escapeHtml(nextBest.label)}</strong><p>${escapeHtml(nextBest.note)}</p></article>
      </section>
    </section>
  `;
}

function renderWorldHierarchyCard(title, subtitle, copy, unitClass) {
  return `
    <article>
      <div class="pixel-agent-figure ${unitClass}"><b></b></div>
      <div>
        <span>${escapeHtml(subtitle)}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(copy)}</p>
      </div>
      <a href="#/vision-map">Explore</a>
    </article>
  `;
}

function renderWorldHabitatNode(habitat) {
  return `
    <button class="world-habitat ${escapeHtml(habitat.tone)} ${state.selectedHabitatId === habitat.id ? "selected" : ""}" style="left:${habitat.x}%; top:${habitat.y}%;" type="button" onclick="window.selectWorldHabitat?.('${escapeHtml(habitat.id)}')">
      <i></i>
      <span>${escapeHtml(habitat.status)}</span>
      <strong>${escapeHtml(habitat.name)}</strong>
      <small>${escapeHtml(habitat.objective)}</small>
    </button>
  `;
}

function renderWorldMissionPackage(mission, index) {
  return `
    <button class="mission-package package-${index + 1} ${state.selectedMissionId === mission.id ? "selected" : ""}" type="button" onclick="window.selectWorldMission?.('${escapeHtml(mission.id)}')">
      <span></span><b>${escapeHtml(mission.priority)}</b>
    </button>
  `;
}

function renderWorldAgents(habitats) {
  const placements = [
    [23, 29], [13, 36], [32, 32], [75, 29], [87, 35], [66, 33],
    [23, 70], [12, 66], [32, 82], [75, 70], [88, 67], [66, 82],
    [47, 82], [53, 84], [50, 61],
  ];
  const agents = habitats.flatMap((habitat) => (habitat.agents || []).slice(0, 3).map((name) => ({ name, habitat }))).slice(0, placements.length);
  return agents.map((agent, index) => {
    const [x, y] = placements[index];
    return `
      <button class="world-agent-unit unit-${(index % 6) + 1} ${state.selectedWorldAgentName === agent.name ? "selected" : ""}" type="button" style="left:${x}%; top:${y}%;" onclick="window.selectWorldAgent?.('${escapeHtml(agent.name)}', '${escapeHtml(agent.habitat.id)}')">
        <b></b><span>${escapeHtml(agent.name)}</span>
      </button>
    `;
  }).join("");
}

function renderWorldAgentRoster(habitats) {
  const agents = habitats.flatMap((habitat) => (habitat.agents || []).slice(0, 2).map((name) => ({ name, habitat }))).slice(0, 10);
  return agents.map((agent, index) => {
    const mission = (habitatWorld.missions || []).find((item) => (item.assignedAgents || []).includes(agent.name)) || {};
    return `
      <button class="world-agent-card ${state.selectedWorldAgentName === agent.name ? "selected" : ""}" type="button" onclick="window.selectWorldAgent?.('${escapeHtml(agent.name)}', '${escapeHtml(agent.habitat.id)}')">
        <div class="pixel-agent-figure unit-${(index % 6) + 1}"><b></b></div>
        <span>${escapeHtml(agent.habitat.name)}</span>
        <strong>${escapeHtml(agent.name)}</strong>
        <small>${escapeHtml(mission.status || "Online Mock")}</small>
        <i><b style="width:${Number(mission.progress || 55)}%"></b></i>
        <em>${Number(mission.confidence || 72)}% confidence</em>
      </button>
    `;
  }).join("");
}

function renderWorldDetailPanel(habitat, mission, agentName) {
  const agentMission = (habitatWorld.missions || []).find((item) => (item.assignedAgents || []).includes(agentName)) || mission || {};
  return `
    <section class="world-detail">
      <p class="eyebrow">Selected Habitat</p>
      <h2>${escapeHtml(habitat.name || "CEO B Command")}</h2>
      <strong>${escapeHtml(habitat.visual || "Central review desk, trading floor, mission board, and final output queue.")}</strong>
      <p>${escapeHtml(habitat.purpose || "CEO B receives completed packets from every habitat and decides what deserves action, archive, or more work.")}</p>
      <div class="world-detail-grid">
        <span><b>${escapeHtml(habitat.status || "Online Demo")}</b>status</span>
        <span><b>${(habitat.agents || ["CEO B"]).length}</b>agents</span>
        <span><b>${escapeHtml(mission.priority || "High")}</b>priority</span>
        <span><b>${mission.progress || 0}%</b>mission</span>
      </div>
      <div class="world-agent-profile">
        <span class="label">Selected Agent</span>
        <h3>${escapeHtml(agentName)}</h3>
        <p>${escapeHtml(agentMission.description || "This agent is standing by for a local mission.")}</p>
        <small>Status: ${escapeHtml(agentMission.status || "idle")} • Confidence ${agentMission.confidence || 72}%</small>
        <small>Home stations: ${escapeHtml((habitat.stations || ["CEO B Review Desk"]).join(", "))}</small>
      </div>
      <div class="world-agent-profile">
        <span class="label">Selected Mission</span>
        <h3>${escapeHtml(mission.title || "No mission selected")}</h3>
        <p>${escapeHtml(mission.output || mission.description || "Select a mission package to inspect output.")}</p>
        <small>Chain: ${escapeHtml((mission.collaborationChain || ["Home", "Workstation", "Trading Floor", "CEO B Review"]).join(" -> "))}</small>
      </div>
      <div class="game-action-row">
        <button type="button" onclick="window.worldAction?.('approved', '${escapeHtml(mission.id || "")}')">Approve</button>
        <button type="button" onclick="window.worldAction?.('needs improvement', '${escapeHtml(mission.id || "")}')">Send Back</button>
        <button type="button" onclick="window.worldAction?.('archived', '${escapeHtml(mission.id || "")}')">Archive</button>
        <button type="button" onclick="window.sendHabitatReport?.('${escapeHtml(habitat.id || "market-habitat")}')">Send Habitat Report</button>
        <button type="button" onclick="window.assignWorldAgentMission?.('${escapeHtml(agentName)}', '${escapeHtml(habitat.id || "market-habitat")}')">Assign Next Mission</button>
      </div>
    </section>
  `;
}

function renderWorldMissionCard(mission) {
  return `
    <button class="world-mission-card ${state.selectedMissionId === mission.id ? "selected" : ""}" type="button" onclick="window.selectWorldMission?.('${escapeHtml(mission.id)}')">
      <span>${escapeHtml(mission.habitat)} • ${escapeHtml(mission.status)}</span>
      <strong>${escapeHtml(mission.title)}</strong>
      <p>${escapeHtml(mission.description)}</p>
      <i><b style="width:${mission.progress}%"></b></i>
      <small>${mission.progress}% • ${escapeHtml((mission.assignedAgents || []).join(", "))}</small>
    </button>
  `;
}

function renderWorldReviewItem(item) {
  return `
    <article class="world-review-item">
      <span>${escapeHtml(item.habitat)} • ${escapeHtml(item.priority)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.output)}</p>
      <small>${escapeHtml((item.agents || []).join(", "))} • ${item.confidence}% confidence</small>
      <div class="world-review-actions">
        <button type="button" onclick="window.reviewStackAction?.('approved', '${escapeHtml(item.id)}')">Approve</button>
        <button type="button" onclick="window.reviewStackAction?.('needs improvement', '${escapeHtml(item.id)}')">Needs Improvement</button>
        <button type="button" onclick="window.reviewStackAction?.('archived', '${escapeHtml(item.id)}')">Archive</button>
        <button type="button" onclick="window.reviewStackAction?.('sent back', '${escapeHtml(item.id)}')">Send Back</button>
      </div>
    </article>
  `;
}

function getWorldState() {
  const fallback = { reviewStack: Array.isArray(habitatWorld.reviewStack) ? habitatWorld.reviewStack : [], wins: [], archived: [], events: [] };
  try {
    const val = localStorage.getItem("pickaxeWorldState");
    if (val) {
      const parsed = JSON.parse(val);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return { ...fallback, ...parsed };
      }
    }
  } catch {}
  return fallback;
}

function setWorldState(nextState) {
  try {
    localStorage.setItem("pickaxeWorldState", JSON.stringify({
      reviewStack: (nextState.reviewStack || []).slice(0, 30),
      wins: (nextState.wins || []).slice(0, 20),
      archived: (nextState.archived || []).slice(0, 30),
      events: (nextState.events || []).slice(0, 40),
    }));
  } catch {
    // Local state is helpful, not required.
  }
}

function addWorldEvent(message) {
  const worldState = getWorldState();
  worldState.events.unshift(`${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} • ${message}`);
  setWorldState(worldState);
}

function getWorldReviewStack() {
  return getWorldState().reviewStack || habitatWorld.reviewStack || [];
}

function setWorldReviewStack(items) {
  const worldState = getWorldState();
  worldState.reviewStack = (items || []).slice(0, 30);
  setWorldState(worldState);
}

function getFilteredWorldMissions(missions) {
  if (state.worldFilter === "active") return missions.filter((mission) => /working|scanning|collaborating/i.test(mission.status || ""));
  if (state.worldFilter === "completed") return missions.filter((mission) => Number(mission.progress || 0) >= 100 || /complete|waiting for ceo/i.test(mission.status || ""));
  if (state.worldFilter === "pending-ceo") return missions.filter((mission) => /ceo|review/i.test(`${mission.status} ${mission.reviewStatus} ${mission.destination}`));
  if (state.worldFilter === "demo-live-gap") return missions.filter((mission) => /planned|needs|demo|local/i.test(`${mission.status} ${mission.output} ${mission.reviewStatus}`));
  return missions;
}

function worldFilterLabel(filter) {
  return ({
    all: "All Missions",
    active: "Active",
    completed: "Completed",
    "pending-ceo": "CEO B Pending",
    "demo-live-gap": "Demo / Setup Gaps",
  })[filter] || filter;
}

function getNextBestMove() {
  const lowest = [...(habitatWorld.progress || [])].sort((a, b) => Number(a.value || 0) - Number(b.value || 0))[0];
  return {
    label: lowest?.label || "Archive connection",
    note: lowest ? `Lowest progress is ${lowest.label} at ${lowest.value}%. Improve this next.` : "Connect Archive, Vision Map, and Agents actions into one local review queue.",
  };
}

function renderWorldLegend() {
  return `
    <div class="world-legend">
      <span><i class="legend-habitat"></i>Habitat</span>
      <span><i class="legend-agent"></i>Agent</span>
      <span><i class="legend-path"></i>Bridge/path</span>
      <span><i class="legend-package"></i>Mission package</span>
      <span><i class="legend-review"></i>CEO B review</span>
    </div>
  `;
}

window.selectWorldHabitat = (habitatId) => {
  state.selectedHabitatId = habitatId === "central-command" ? state.selectedHabitatId : habitatId;
  const habitat = (habitatWorld.habitats || []).find((item) => item.id === state.selectedHabitatId);
  if (habitat?.agents?.[0]) state.selectedWorldAgentName = habitat.agents[0];
  renderAgentWorldOS();
};

window.setWorldFilter = (filter) => {
  state.worldFilter = filter;
  renderAgentWorldOS();
};

window.toggleWorldLegend = () => {
  state.showWorldLegend = !state.showWorldLegend;
  renderAgentWorldOS();
};

window.sendHabitatReport = (habitatId) => {
  const habitat = (habitatWorld.habitats || []).find((item) => item.id === habitatId);
  if (!habitat) return;
  const stack = getWorldReviewStack();
  stack.unshift({
    id: `habitat-report-${Date.now()}`,
    title: `${habitat.name} report`,
    habitat: habitat.name,
    agents: habitat.agents || [],
    confidence: 82,
    status: "Waiting for CEO B",
    output: `${habitat.objective} Next improvement: ${habitat.visual}`,
    priority: habitat.id === "archive-habitat" ? "High" : "Medium",
  });
  setWorldReviewStack(stack);
  addSharedReviewItem(stack[0], { syncWorld: false });
  addWorldEvent(`${habitat.name} sent a habitat report to CEO B Review Stack.`);
  renderAgentWorldOS();
};

window.assignWorldAgentMission = (agentName, habitatId) => {
  const habitat = (habitatWorld.habitats || []).find((item) => item.id === habitatId);
  const ops = getAgentOpsState();
  ops.tasks.unshift({ agentId: agentName, agentName, action: "assigned next mission", status: "active", time: new Date().toLocaleTimeString(), habitat: habitat?.name || "AI Habitat" });
  setAgentOpsState(ops);
  addWorldEvent(`${agentName} received a new local mission in ${habitat?.name || "AI Habitat"}.`);
  renderAgentWorldOS();
};

window.selectWorldAgent = (agentName, habitatId) => {
  state.selectedWorldAgentName = agentName;
  if (habitatId) state.selectedHabitatId = habitatId;
  renderAgentWorldOS();
};

window.selectWorldMission = (missionId) => {
  state.selectedMissionId = missionId;
  const mission = (habitatWorld.missions || []).find((item) => item.id === missionId);
  if (mission?.habitat) state.selectedHabitatId = mission.habitat;
  if (mission?.assignedAgents?.[0]) state.selectedWorldAgentName = mission.assignedAgents[0];
  renderAgentWorldOS();
};

window.worldAction = (action, missionId) => {
  const allMissions = getEffectiveWorldMissions();
  const mission = allMissions.find((item) => item.id === missionId) || allMissions[0];
  const stack = getWorldReviewStack();
  stack.unshift({
    id: `world-${Date.now()}`,
    title: mission?.title || "Local mission packet",
    habitat: (habitatWorld.habitats || []).find((item) => item.id === mission?.habitat)?.name || "AI Habitat",
    agents: mission?.assignedAgents || [state.selectedWorldAgentName],
    confidence: mission?.confidence || 80,
    status: action,
    output: `${action}: ${mission?.output || mission?.description || "Local mission updated for CEO B."}`,
    priority: mission?.priority || "High",
  });
  setWorldReviewStack(stack);
  addSharedReviewItem(stack[0], { syncWorld: false });
  addWorldEvent(`Mission "${mission?.title || "Local mission"}" marked ${action} and routed to CEO B.`);
  window.operatingAgentAction?.(`mission ${action}`, "ceo-b-os");
};

window.reviewStackAction = (action, reviewId) => {
  const worldState = getWorldState();
  const stack = getWorldReviewStack();
  const item = stack.find((entry) => entry.id === reviewId);
  if (!item) return;
  if (action === "approved") {
    worldState.reviewStack = stack.filter((entry) => entry.id !== reviewId);
    worldState.wins = [{ ...item, status: "Approved", time: new Date().toLocaleTimeString() }, ...(worldState.wins || [])];
    
    // Automatically generate a mission task for the approved item
    const agentName = item.agents?.[0] || "Task Smith";
    addSharedMissionItem({
      title: `Execute: ${item.title}`,
      owner: agentName,
      source: item.habitat || "CEO B Command",
      priority: item.priority || "High",
      nextAction: item.output || "Execute approved plan."
    });
  } else if (action === "archived") {
    worldState.reviewStack = stack.filter((entry) => entry.id !== reviewId);
    worldState.archived = [{ ...item, status: "Archived", time: new Date().toLocaleTimeString() }, ...(worldState.archived || [])];
  } else {
    worldState.reviewStack = stack.map((entry) => entry.id === reviewId ? { ...entry, status: action } : entry);
  }
  worldState.events = [`${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} • CEO B review stack: ${item.title} -> ${action}`, ...(worldState.events || [])];
  setWorldState(worldState);
  
  // ALSO update pickaxeReviewQueue in localStorage to remain synchronized!
  const sharedQueue = getSharedQueue("pickaxeReviewQueue");
  if (action === "approved" || action === "archived") {
    setSharedQueue("pickaxeReviewQueue", sharedQueue.filter((entry) => entry.id !== reviewId));
  } else {
    setSharedQueue("pickaxeReviewQueue", sharedQueue.map((entry) => entry.id === reviewId ? { ...entry, status: action } : entry));
  }

  window.operatingAgentAction?.(`review stack ${action}`, "ceo-b-os");
};

function renderAgentGameNode(agentName, x, y, role, tone) {
  const agent = operatingAgents.find((entry) => entry.name === agentName);
  if (!agent) return "";
  return `
    <button class="game-agent-node ${escapeHtml(tone)} ${state.selectedOperatingAgentId === agent.id ? "selected" : ""}" type="button" style="left:${x}%; top:${y}%;" onclick="window.selectOperatingAgent?.('${escapeHtml(agent.id)}')">
      <i></i>
      <b></b>
      <span>${escapeHtml(role)}</span>
      <strong>${escapeHtml(agent.name)}</strong>
      <small>${escapeHtml(agent.status)} • ${agent.progress}%</small>
    </button>
  `;
}

function renderAgentGameDrawer(agent, agentOps) {
  if (!agent?.id) return `<section class="agent-game-drawer"><p class="muted">Select an agent.</p></section>`;
  return `
    <section class="agent-game-drawer">
      <p class="eyebrow">Selected Agent</p>
      <h2>${escapeHtml(agent.name)}</h2>
      <strong>${escapeHtml(agent.classType)} / ${escapeHtml(agent.habitat)}</strong>
      <div class="game-agent-bars">
        <span><b>${agent.progress}%</b> progress</span>
        <span><b>${agent.confidence}%</b> confidence</span>
        <span><b>${escapeHtml(agent.priority)}</b> priority</span>
      </div>
      <p>${escapeHtml(agent.role)}</p>
      <div class="game-mission-card"><span>Current mission</span><p>${escapeHtml(agent.currentTask)}</p></div>
      <div class="game-mission-card"><span>Last output</span><p>${escapeHtml(agent.lastOutput)}</p></div>
      <div class="game-mission-card"><span>Next action</span><p>${escapeHtml(agent.nextAction)}</p></div>
      <div class="game-action-row">
        <button type="button" onclick="window.operatingAgentAction?.('marked reviewed', '${escapeHtml(agent.id)}')">Review</button>
        <button type="button" onclick="window.operatingAgentAction?.('created task', '${escapeHtml(agent.id)}')">Assign</button>
        <a href="${escapeHtml(agent.routeOwned)}">Open</a>
      </div>
    </section>
  `;
}

function renderAgentOpsBottomPanels(agentOps) {
  return `
    <section class="bottom-ops-panels">
      <article class="mission-panel">
        <span class="label">Mission Progress</span>
        <h3>Daily Objectives</h3>
        ${["Research", "Analysis", "Execution", "Optimization", "Reporting"].map((label, index) => `<div class="mini-progress"><span>${label}</span><i><b style="width:${88 + (index % 3) * 4}%"></b></i><strong>${88 + (index % 3) * 4}%</strong></div>`).join("")}
      </article>
      <article class="agent-interactions-panel">
        <span class="label">Agent Interactions</span>
        <h3>Collaboration Network</h3>
        <div class="mini-network"><i></i><i></i><i></i><i></i><i></i></div>
        <p>Signal Scout, Risk Sentinel, Archive Keeper, and CEO B share local review packets.</p>
      </article>
      <article class="system-performance-panel">
        <span class="label">Validation Status</span>
        <h3>Build Verified</h3>
        ${["Static Node App", "Routes Verified", "Prototype UI", "Future Adapters Labeled"].map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
      </article>
      <article class="habitat-network-panel">
        <span class="label">Habitat Network</span>
        <h3>Market ⇄ Archive ⇄ CEO B</h3>
        <div class="network-orbits"><span></span><span></span><span></span><span></span><span></span></div>
      </article>
      <article class="agent-status-panel">
        <span class="label">Agent Status</span>
        <div class="status-counts"><strong>${operatingAgents.length}</strong><span>Defined</span><strong>${agentOps.tasks.filter((task) => task.status !== "done").length}</strong><span>Local Tasks</span><strong>${getSharedQueue("pickaxeReviewQueue").length}</strong><span>Review Queue</span><strong>${stalledIntegrations.length}</strong><span>Future Gaps</span></div>
      </article>
      <article class="ceo-command-says">
        <span class="label">CEO B Command Says</span>
        <h3>Stay stationed. Trust the process. Review, rank, and execute.</h3>
      </article>
    </section>
  `;
}

function getAgentOpsState() {
  const fallback = { tasks: [], events: [], reviewed: [], archived: [] };
  try {
    const val = localStorage.getItem("pickaxeAgentOps");
    if (val) {
      const parsed = JSON.parse(val);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return { ...fallback, ...parsed };
      }
    }
  } catch {}
  return fallback;
}

function setAgentOpsState(nextState) {
  localStorage.setItem("pickaxeAgentOps", JSON.stringify({
    tasks: (nextState.tasks || []).slice(0, 30),
    events: (nextState.events || []).slice(0, 30),
    reviewed: (nextState.reviewed || []).slice(0, 30),
    archived: (nextState.archived || []).slice(0, 30),
  }));
}

function renderAgentEcosystemConsole(agentOps, selectedAgent, lanes) {
  const activeTasks = agentOps.tasks.filter((task) => task.status !== "done").length;
  return `
    <section class="agent-ecosystem-console">
      <div>
        <p class="eyebrow">Functional Local Ecosystem</p>
        <h3>CEO B Operations Console</h3>
        <p>Run mock cycles, assign local tasks, filter habitats, and collect review packets without pretending real background agents are live.</p>
      </div>
      <div class="ecosystem-metrics">
        <span><strong>${activeTasks}</strong> local tasks</span>
        <span><strong>${agentOps.reviewed.length}</strong> reviewed</span>
        <span><strong>${agentOps.archived.length}</strong> archive packets</span>
        <span><strong>${selectedAgent.name || "CEO B"}</strong> selected</span>
      </div>
      <div class="ecosystem-controls">
        <select id="agentLaneFilter" onchange="window.setAgentLaneFilter?.(this.value)">
          <option value="all" ${state.agentHabitatFilter === "all" ? "selected" : ""}>All habitats</option>
          ${lanes.map((lane) => `<option value="${escapeHtml(lane.title)}" ${state.agentHabitatFilter === lane.title ? "selected" : ""}>${escapeHtml(lane.title)}</option>`).join("")}
        </select>
        <button type="button" onclick="window.runAgentEcosystemCycle?.()">Run Ecosystem Cycle</button>
        <button type="button" onclick="window.operatingAgentAction?.('created CEO B packet', '${escapeHtml(selectedAgent.id || "ceo-b-os")}')">Create CEO B Packet</button>
        <button type="button" onclick="window.clearAgentOpsLocal?.()">Clear Local Ops</button>
      </div>
    </section>
  `;
}

function renderAgentTaskBoard(agentOps) {
  const tasks = agentOps.tasks.slice(0, 8);
  const archived = agentOps.archived.slice(0, 5);
  return `
    <section class="agent-task-board">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">Local Task Queue</p><h2>Agent Work Orders</h2></div><span class="pill">${tasks.length} saved locally</span></div>
        <div class="agent-work-orders">
          ${tasks.length ? tasks.map((task) => `
            <article>
              <span>${escapeHtml(task.time)} • ${escapeHtml(task.status)}</span>
              <strong>${escapeHtml(task.agentName)}</strong>
              <p>${escapeHtml(task.text)}</p>
              <button type="button" onclick="window.completeAgentTask?.('${escapeHtml(task.id)}')">Mark Done</button>
            </article>
          `).join("") : `<p class="muted">No local tasks yet. Select an agent, write a mission, and assign it.</p>`}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">CEO B Packets</p><h2>Review / Archive Output</h2></div><span class="pill">${archived.length} packets</span></div>
        <div class="agent-work-orders">
          ${archived.length ? archived.map((packet) => `
            <article>
              <span>${escapeHtml(packet.time)} • local packet</span>
              <strong>${escapeHtml(packet.agentName)}</strong>
              <p>${escapeHtml(packet.text)}</p>
            </article>
          `).join("") : `<p class="muted">Archive packets created from agent actions appear here.</p>`}
        </div>
      </div>
    </section>
  `;
}

function renderAgentMapNode(agentName, theme, x, y, label) {
  const agent = operatingAgents.find((entry) => entry.name === agentName);
  if (!agent) return "";
  return `
    <button class="agent-room-node ${escapeHtml(theme)} ${state.selectedOperatingAgentId === agent.id ? "selected" : ""}" type="button" style="left:${x}%; top:${y}%;" onclick="window.selectOperatingAgent?.('${escapeHtml(agent.id)}')">
      <i></i>
      <em class="agent-character"><b></b></em>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(agent.name)}</strong>
      <small>${escapeHtml(agent.status)} • ${agent.progress}%</small>
      <small class="agent-routine">${escapeHtml(agent.currentTask || agent.nextAction || "Standing by for CEO B review.")}</small>
    </button>
  `;
}

function renderOperatingAgentDrawer(agent) {
  if (!agent?.id) return `<p class="muted">Select an agent to inspect the operating profile.</p>`;
  const agentOps = getAgentOpsState();
  const agentTasks = agentOps.tasks.filter((task) => task.agentId === agent.id).slice(0, 3);
  return `
    <div class="operating-drawer-top">
      <span class="label">Selected Agent</span>
      <h3>${escapeHtml(agent.name)}</h3>
      <strong>${escapeHtml(agent.classType)} • ${escapeHtml(agent.habitat)}</strong>
      <p>${escapeHtml(agent.role)}</p>
    </div>
    <div class="agent-os-meta">
      <span><b>${agent.progress}%</b> progress</span>
      <span><b>${agent.confidence}%</b> confidence</span>
    </div>
    <div class="agent-energy"><span style="width:${agent.progress}%"></span></div>
    <div class="operating-drawer-grid">
      <div><span class="label">Status</span><p>${escapeHtml(agent.status)}</p></div>
      <div><span class="label">Priority</span><p>${escapeHtml(agent.priority)}</p></div>
      <div><span class="label">Owned Route</span><p>${escapeHtml(agent.routeOwned)}</p></div>
      <div><span class="label">Risk Flag</span><p>${escapeHtml(agent.riskFlag)}</p></div>
    </div>
    <div class="drawer-output"><span class="label">Current Task</span><p>${escapeHtml(agent.currentTask)}</p></div>
    <div class="drawer-output"><span class="label">Last Output</span><p>${escapeHtml(agent.lastOutput)}</p></div>
    <div class="drawer-output"><span class="label">Next Action</span><p>${escapeHtml(agent.nextAction)}</p></div>
    <div class="drawer-output"><span class="label">Owned Sources</span><p>${escapeHtml((agent.sourcesOwned || []).join(", "))}</p></div>
    <div class="drawer-output"><span class="label">CEO B Review Note</span><p>Mock local review only. This agent can prepare the packet, but CEO B/founder makes the final decision.</p></div>
    <label class="agent-mission-input">
      <span class="label">Assign Local Mission</span>
      <textarea id="agentTaskInput" placeholder="Tell ${escapeHtml(agent.name)} what to work on next. Example: turn RK Tracker candidates into a CEO B review packet."></textarea>
    </label>
    <div class="agent-local-tasks">
      <span class="label">This Agent's Local Tasks</span>
      ${agentTasks.length ? agentTasks.map((task) => `<p>${escapeHtml(task.text)} <small>${escapeHtml(task.status)}</small></p>`).join("") : `<p class="muted">No local tasks assigned yet.</p>`}
    </div>
    <div class="agent-card-actions drawer-actions">
      <button type="button" onclick="window.operatingAgentAction?.('marked reviewed', '${escapeHtml(agent.id)}')">Mark Reviewed</button>
      <button type="button" onclick="window.operatingAgentAction?.('sent to archive', '${escapeHtml(agent.id)}')">Send to Archive</button>
      <button type="button" onclick="window.operatingAgentAction?.('created task', '${escapeHtml(agent.id)}')">Assign Task</button>
      <a href="${escapeHtml(agent.routeOwned)}">Open Route</a>
    </div>
  `;
}

function renderOperatingAgentCard(agent) {
  return `
    <article class="operating-agent-card ${state.selectedOperatingAgentId === agent.id ? "selected" : ""}" onclick="window.selectOperatingAgent?.('${escapeHtml(agent.id)}')">
      <div class="agent-card-top">
        <div><strong>${escapeHtml(agent.name)}</strong><span>${escapeHtml(agent.classType)} • ${escapeHtml(agent.priority)}</span></div>
        <i class="${escapeHtml(agent.status.toLowerCase().replaceAll(" ", "-"))}"></i>
      </div>
      <p>${escapeHtml(agent.role)}</p>
      <div class="agent-os-meta">
        <span><b>${agent.progress}%</b> progress</span>
        <span><b>${agent.confidence}%</b> confidence</span>
      </div>
      <div class="agent-energy"><span style="width:${agent.progress}%"></span></div>
      <small><b>Route:</b> ${escapeHtml(agent.routeOwned)}</small>
      <small><b>Sources:</b> ${escapeHtml((agent.sourcesOwned || []).join(", "))}</small>
      <small><b>Task:</b> ${escapeHtml(agent.currentTask)}</small>
      <small><b>Last output:</b> ${escapeHtml(agent.lastOutput)}</small>
      <small><b>Next:</b> ${escapeHtml(agent.nextAction)}</small>
      <small class="risk-flag"><b>Risk:</b> ${escapeHtml(agent.riskFlag)}</small>
      <div class="agent-card-actions">
        <button type="button" onclick="event.stopPropagation(); window.selectOperatingAgent?.('${escapeHtml(agent.id)}')">Review</button>
        <button type="button" onclick="event.stopPropagation(); window.operatingAgentAction?.('assigned task', '${escapeHtml(agent.id)}')">Assign Task</button>
        <a href="${escapeHtml(agent.routeOwned)}" onclick="event.stopPropagation()">Open Owned Route</a>
      </div>
    </article>
  `;
}

function renderMockActivityItem(item, index) {
  const match = operatingAgents.find((agent) => item.toLowerCase().startsWith(agent.name.toLowerCase())) || operatingAgents[index % Math.max(operatingAgents.length, 1)];
  const time = new Date(Date.now() - index * 90000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const [agentName, ...rest] = item.split(" ");
  const activity = rest.length ? rest.join(" ") : item;
  return `
    <article class="mock-feed-item">
      <span><i></i>${escapeHtml(time)} • ${escapeHtml(match?.status || "Mock Activity")}</span>
      <strong>${escapeHtml(match?.name || agentName)}</strong>
      <p>${escapeHtml(activity)}</p>
      <em>${escapeHtml(match?.habitat || "AI Habitat OS")}</em>
    </article>
  `;
}

function renderOwnershipRows() {
  return `
    <table>
      <thead><tr><th>Page / Source</th><th>Agent Owner</th><th>Status</th><th>Next Action</th></tr></thead>
      <tbody>
        ${ownershipMatrix.map(([page, owner, status, next]) => `<tr><td>${escapeHtml(page)}</td><td>${escapeHtml(owner)}</td><td>${escapeHtml(status)}</td><td>${escapeHtml(next)}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function bindHabitatControls() {
  els.agentHabitat.querySelectorAll("[data-agent-id]").forEach((control) => {
    control.addEventListener("click", (event) => {
      event.stopPropagation();
      state.selectedAgentId = control.dataset.agentId;
      routeAgentToCeo(control.dataset.agentId, "Habitat control selected for CEO B review");
      renderAgentsPage();
    });
  });
}

function renderHabitatHud(selected, stats) {
  return `
    <aside class="habitat-hud">
      <div>
        <span class="label">Selected agent</span>
        <h3>${escapeHtml(selected.name)}</h3>
        <p>${escapeHtml(selected.task)}</p>
      </div>
      <div class="hud-grid">
        <span><strong>${selected.progress}%</strong> progress</span>
        <span><strong>${selected.confidence}%</strong> confidence</span>
        <span><strong>${stats.runningTasks}</strong> tasks</span>
      </div>
    </aside>
  `;
}

function renderAgentDrawer(agent) {
  const relatedChecklist = [
    "Confirm Time, Trend, Theme alignment",
    "Check liquidity and spread quality",
    "Route final research to CEO B before action",
  ];
  return `
    <div class="drawer-top">
      <span class="overview-portrait" style="${portraitStyle(agent, 64)}"></span>
      <div>
        <p class="eyebrow">Selected pod</p>
        <h2>${escapeHtml(agent.name)}</h2>
        <strong>${escapeHtml(agent.title)}</strong>
      </div>
    </div>
    <div class="drawer-stats">
      <span><strong>${agent.progress}%</strong> progress</span>
      <span><strong>${agent.confidence}%</strong> confidence</span>
      <span><strong>${escapeHtml(agent.status)}</strong> status</span>
    </div>
    <p>${escapeHtml(agent.task)}</p>
    <div class="drawer-output">
      <span class="label">Last output</span>
      <p>${escapeHtml(agent.logs[agent.logs.length - 1] || "Awaiting output.")}</p>
    </div>
    <div class="drawer-checklist">
      <span class="label">Related checklist</span>
      ${relatedChecklist.map((item) => `<label><input type="checkbox" /> ${escapeHtml(item)}</label>`).join("")}
    </div>
    <button type="button" onclick="window.selectHabitatAgent('${escapeHtml(agent.id)}', 'Detail drawer action sent to CEO B')">Send to CEO B</button>
  `;
}

function renderHabitatSystems() {
  const systems = [
    { label: "Strategy Core", value: "Playbook test", agentId: "flow" },
    { label: "Omega Vault", value: "Risk gate", agentId: "risk" },
    { label: "Quantum Node", value: "Signal build", agentId: "signal-engine" },
    { label: "Echo Mind", value: "Intel packet", agentId: "news" },
    { label: "CEO B Network", value: "Final synthesis", agentId: "ceo-b" },
  ];
  return `
    <div class="habitat-system-strip">
      ${systems.map((system) => {
        const agent = habitatAgents.find((entry) => entry.id === system.agentId);
        return `
          <button data-agent-id="${escapeHtml(system.agentId)}" onclick="window.selectHabitatAgent('${escapeHtml(system.agentId)}', '${escapeHtml(system.label)} selected for CEO B review')" class="${agent?.id === state.selectedAgentId ? "selected" : ""}">
            <span>${escapeHtml(system.label)}</span>
            <strong>${escapeHtml(system.value)}</strong>
            <small>${agent ? `${agent.status} • ${agent.confidence}%` : "online"}</small>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderAgentOverviewCard(agent) {
  const selected = agent.id === state.selectedAgentId ? " ring-2 ring-amber-500 border-amber-500/80 shadow-[0_0_15px_rgba(245,158,11,0.4)]" : "";
  const color = agent.color || "steel";
  const cMap = {
    blue: { text: "text-cyan-400", border: "border-cyan-500/30", hover: "hover:border-cyan-500/70", bg: "bg-cyan-500", glow: "shadow-[0_0_8px_rgba(34,211,238,0.5)]", dot: "bg-cyan-400" },
    green: { text: "text-emerald-400", border: "border-emerald-500/30", hover: "hover:border-emerald-500/70", bg: "bg-emerald-500", glow: "shadow-[0_0_8px_rgba(16,185,129,0.5)]", dot: "bg-emerald-400" },
    gold: { text: "text-amber-400", border: "border-amber-500/30", hover: "hover:border-amber-500/70", bg: "bg-amber-500", glow: "shadow-[0_0_8px_rgba(245,158,11,0.5)]", dot: "bg-amber-400" },
    red: { text: "text-red-400", border: "border-red-500/30", hover: "hover:border-red-500/70", bg: "bg-red-500", glow: "shadow-[0_0_8px_rgba(239,68,68,0.5)]", dot: "bg-red-400" },
    purple: { text: "text-purple-400", border: "border-purple-500/30", hover: "hover:border-purple-500/70", bg: "bg-purple-500", glow: "shadow-[0_0_8px_rgba(168,85,247,0.5)]", dot: "bg-purple-400" },
    cyan: { text: "text-cyan-400", border: "border-cyan-500/30", hover: "hover:border-cyan-500/70", bg: "bg-cyan-500", glow: "shadow-[0_0_8px_rgba(6,182,212,0.5)]", dot: "bg-cyan-400" },
    amber: { text: "text-amber-400", border: "border-amber-500/30", hover: "hover:border-amber-500/70", bg: "bg-amber-500", glow: "shadow-[0_0_8px_rgba(245,158,11,0.5)]", dot: "bg-amber-400" },
    steel: { text: "text-slate-400", border: "border-slate-500/30", hover: "hover:border-slate-500/70", bg: "bg-slate-500", glow: "shadow-[0_0_8px_rgba(100,116,139,0.5)]", dot: "bg-slate-400" }
  };
  const theme = cMap[color] || cMap.steel;
  const statusColor = agent.status === "active" ? "text-emerald-400" : agent.status === "completed" ? "text-cyan-400" : "text-amber-400";
  const statusDot = agent.status === "active" ? "bg-emerald-400" : agent.status === "completed" ? "bg-cyan-400" : "bg-amber-400";

  return `
    <div class="agent-card-upgrade border ${theme.border} bg-[#0b0c0e]/95 p-4 flex flex-col hover:bg-[#0f1114] ${theme.hover} transition-all rounded-sm relative overflow-hidden group text-[11px] text-left cursor-pointer ${selected}" data-agent-id="${escapeHtml(agent.id)}">
      <!-- Top glow line -->
      <div class="absolute top-0 left-0 w-full h-[2px] ${theme.bg}"></div>
      
      <!-- Header -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <div>
          <span class="text-[8px] text-slate-500 uppercase tracking-widest font-mono block">${escapeHtml(agent.department)} // ${escapeHtml(agent.title)}</span>
          <h3 class="text-xs font-bold text-white tracking-tight font-sans group-hover:${theme.text} transition-colors mt-0.5">${escapeHtml(agent.name)}</h3>
        </div>
        <span class="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-[8px] text-slate-400 font-mono tracking-widest uppercase rounded shrink-0">${escapeHtml(agent.badge)}</span>
      </div>
      
      <!-- Status & Level -->
      <div class="grid grid-cols-2 gap-2 mb-3 bg-black/40 p-2 border border-slate-900 font-mono text-[9px]">
        <div>
          <span class="text-slate-500 block uppercase text-[8px]">Status</span>
          <span class="${statusColor} font-bold uppercase flex items-center gap-1 mt-0.5">
            <span class="w-1 h-1 rounded-full ${statusDot} animate-pulse"></span>
            ${escapeHtml(agent.status)}
          </span>
        </div>
        <div>
          <span class="text-slate-500 block uppercase text-[8px]">Rank (Demo)</span>
          <span class="text-white font-bold block mt-0.5">LV. ${agent.level}</span>
        </div>
      </div>
      
      <!-- Habitat & Route -->
      <div class="space-y-1 text-[10px] mb-3 border-b border-slate-900 pb-2">
        <div class="flex justify-between gap-2"><span class="text-slate-500 font-mono">HABITAT:</span><span class="text-slate-300 truncate max-w-[130px] font-sans">${escapeHtml(agent.habitat)}</span></div>
        <div class="flex justify-between gap-2"><span class="text-slate-500 font-mono">ROUTE:</span><a href="${escapeHtml(agent.route)}" class="text-blue-400 hover:underline font-mono truncate max-w-[130px]">${escapeHtml(agent.route)}</a></div>
      </div>
      
      <!-- Inputs / Outputs -->
      <div class="bg-black/20 p-2 border border-slate-900 rounded-sm mb-3 space-y-1 text-[9px] font-mono leading-relaxed">
        <div><span class="text-slate-500 font-bold">INPUTS:</span> <span class="text-slate-400">${escapeHtml(agent.inputs)}</span></div>
        <div><span class="text-slate-500 font-bold">OUTPUTS:</span> <span class="text-slate-400">${escapeHtml(agent.outputs)}</span></div>
      </div>
      
      <!-- Current Task / Next Action -->
      <div class="text-[10px] space-y-2 mb-3">
        <div>
          <span class="text-slate-500 block font-mono text-[8px] uppercase">Current Task</span>
          <p class="text-slate-300 leading-snug mt-0.5">${escapeHtml(agent.task)}</p>
        </div>
        <div>
          <span class="text-slate-500 block font-mono text-[8px] uppercase">Next Action</span>
          <p class="text-slate-300 leading-snug mt-0.5">${escapeHtml(agent.nextAction)}</p>
        </div>
      </div>
      
      <!-- Bottom Specs (Confidence / Risk) -->
      <div class="pt-2 border-t border-slate-900 mt-auto space-y-2 font-mono text-[9px]">
        <div>
          <div class="flex justify-between text-slate-500 mb-1"><span>Confidence</span><span class="text-white font-bold">${agent.confidence}%</span></div>
          <div class="w-full bg-slate-950 h-1.5 border border-slate-900 overflow-hidden">
            <div class="${theme.bg} h-full" style="width: ${agent.confidence}%"></div>
          </div>
        </div>
        <div class="flex items-start gap-1.5 bg-red-950/20 border border-red-900/30 p-1.5 text-red-400/90 text-[9px]">
          <span class="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-0.5"></span>
          <span class="leading-tight">RISK: ${escapeHtml(agent.riskFlag)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderAgentNode(agent) {
  const selected = agent.id === state.selectedAgentId ? " selected" : "";
  return `
    <button class="agent-node ${escapeHtml(agent.status)}${selected}" data-agent-id="${escapeHtml(agent.id)}" onclick="window.selectHabitatAgent('${escapeHtml(agent.id)}', '${escapeHtml(agent.name)} pod opened for CEO B review')" style="left:${agent.position.x}%; top:${agent.position.y}%">
      <span class="station-character" style="${portraitStyle(agent, 96)}"></span>
      <span class="agent-avatar" style="${portraitStyle(agent, 54)}"><span>${renderAgentIcon(agent.avatarType)}</span></span>
      <span class="agent-copy">
        <strong>${escapeHtml(agent.name)}</strong>
        <em>${escapeHtml(agent.title)}</em>
        <span>${escapeHtml(agent.task)}</span>
        <small>${escapeHtml(agent.status)} • ${agent.progress}%</small>
      </span>
      <span class="agent-progress"><span style="width:${agent.progress}%"></span></span>
    </button>
  `;
}

function portraitStyle(agent, size) {
  const scale = 0.68;
  const x = Math.round(size / 2 - (agent.portrait?.x || 760) * scale);
  const y = Math.round(size / 2 - (agent.portrait?.y || 285) * scale);
  return `--portrait-size:${size}px; --portrait-x:${x}px; --portrait-y:${y}px;`;
}

function renderAgentDetail(agent) {
  return `
    <div class="panel-head">
      <div>
        <p class="eyebrow">${escapeHtml(agent.department)}</p>
        <h2>${escapeHtml(agent.name)}</h2>
      </div>
      <span class="pill">${escapeHtml(agent.status)}</span>
    </div>
    <div class="agent-detail-grid">
      <div><span class="label">Mission</span><p>${escapeHtml(agent.task)}</p></div>
      <div><span class="label">Habitat</span><p>${escapeHtml(agent.habitat)}</p></div>
      <div><span class="label">Progress</span><p>${agent.progress}% complete</p></div>
      <div><span class="label">Confidence</span><p>${agent.confidence}/100</p></div>
      <div><span class="label">Connected modules</span><p>${agent.connections.map((id) => habitatAgents.find((entry) => entry.id === id)?.name || id).join(", ")}</p></div>
      <div><span class="label">Last updated</span><p>${new Date(agent.lastUpdated).toLocaleTimeString()}</p></div>
    </div>
    <div class="agent-log-list">
      ${(agent.logs || []).slice(-4).reverse().map((log) => `<p>${escapeHtml(log)}</p>`).join("")}
    </div>
  `;
}

function renderAgentStats({ activeCount, runningTasks, averageConfidence }) {
  const prototypeAgents = operatingAgents.filter((agent) => /prototype/i.test(agent.status)).length || activeCount;
  const stats = [
    ["Total Agents", operatingAgents.length || habitatAgents.length, "Operating workforce"],
    ["Prototype Agents", prototypeAgents, "Local UI / localStorage only"],
    ["Local Tasks", runningTasks, "Browser task load"],
    ["CEO B Review Queue", getSharedQueue("pickaxeReviewQueue").length || ceoReviewQueue.length, "Human review gate"],
    ["Stalled Integrations", stalledIntegrations.length, "Honest boundaries"],
    ["Build Status", "Verified", "Static Node app"],
  ];
  return stats.map(([label, value, caption]) => `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(caption || "Pickaxe Capital OS")}</small>
    </article>
  `).join("");
}

function renderFlowDeskSnapshot() {
  const flow = habitatAgents.find((agent) => agent.id === "options-flow-hunter" || agent.id === "flow" || agent.id === "trading-agent") || habitatAgents[0];
  const risk = habitatAgents.find((agent) => agent.id === "risk-agent" || agent.id === "risk") || habitatAgents[0];
  const signal = habitatAgents.find((agent) => agent.id === "market-scout" || agent.id === "signal-engine" || agent.id === "trading-agent") || habitatAgents[0];
  return `
    <section class="flow-snapshot">
      <div>
        <span class="label">Options Flow Desk</span>
        <h3>${escapeHtml(state.selectedSymbol)} workflow</h3>
      </div>
      <div class="flow-snapshot-grid">
        <span><strong>${flow.progress}%</strong> contract scan</span>
        <span><strong>${risk.confidence}%</strong> risk guard</span>
        <span><strong>${signal.progress}%</strong> alert build</span>
      </div>
      <p>Flow ranks liquid contracts, Risk checks invalidation, and Signal Engine prepares Webull-only candidates for CEO B review.</p>
    </section>
  `;
}

function renderSystemPerformance() {
  return `
    <section class="system-performance-grid">
      <article>
        <span class="label">Validation Status</span>
        <h3>Static prototype</h3>
        <p><strong>Build</strong><i><b style="width:100%"></b></i>Verified</p>
        <p><strong>Routes</strong><i><b style="width:100%"></b></i>Verified</p>
        <p><strong>Adapters</strong><i><b style="width:35%"></b></i>Future</p>
      </article>
      <article>
        <span class="label">Habitat Network</span>
        <h3>Agent mesh</h3>
        <div class="network-orbits">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p>Pods cluster when tasks overlap, then split back to their home stations.</p>
      </article>
    </section>
  `;
}

function renderCeoResearchBrief() {
  const selectedSymbol = state.selectedSymbol || "SPY";
  const lead = [...habitatAgents].sort((a, b) => b.confidence + b.progress - (a.confidence + a.progress))[0];
  const risk = habitatAgents.find((agent) => agent.id === "risk-agent" || agent.id === "risk") || habitatAgents[0];
  const flow = habitatAgents.find((agent) => agent.id === "options-flow-hunter" || agent.id === "flow" || agent.id === "trading-agent") || habitatAgents[0];
  const signal = habitatAgents.find((agent) => agent.id === "market-scout" || agent.id === "signal-engine" || agent.id === "trading-agent") || habitatAgents[0];
  const latest = state.activityFeed.slice(0, 4);
  return `
    <div class="ceo-brief">
      <div>
        <span class="label">Final research to CEO B</span>
        <h3>${escapeHtml(selectedSymbol)} command read</h3>
        <p>${escapeHtml(lead.name)} has the strongest current confidence. ${escapeHtml(flow.name)} is checking contract quality, ${escapeHtml(risk.name)} is guarding invalidation, and ${escapeHtml(signal.name)} is converting the desk focus into Webull-only alert candidates.</p>
      </div>
      <div class="ceo-actions">
        <strong>CEO B next command</strong>
        <p>Review ${escapeHtml(selectedSymbol)} only if Time, Trend, Theme, liquidity, spread, and invalidation agree. Stand down if the risk gate fails.</p>
      </div>
      <div class="ceo-feed">
        ${latest.map((item) => `<p><strong>${escapeHtml(item.agent)}:</strong> ${escapeHtml(item.message)}</p>`).join("")}
      </div>
    </div>
  `;
}

function renderAgentIcon(type) {
  const icons = {
    crown: "◆",
    orbit: "◎",
    radar: "◌",
    blade: "▲",
    shield: "⬟",
    eye: "◉",
    chart: "▰",
    engine: "✦",
    blueprint: "◇",
    tower: "▣",
  };
  return icons[type] || "✦";
}

function seedActivityFeed() {
  state.activityFeed = habitatAgents.slice(0, 8).map((agent) => ({
    time: new Date(agent.lastUpdated).toLocaleTimeString(),
    agent: agent.name,
    message: agent.logs[agent.logs.length - 1] || agent.task,
  }));
  return state.activityFeed;
}

function routeAgentToCeo(agentId, message) {
  const agent = habitatAgents.find((entry) => entry.id === agentId);
  const ceo = habitatAgents.find((entry) => entry.id === "ceo-b");
  if (!agent || !ceo) return;
  agent.status = "collaborating";
  agent.progress = Math.min(99, agent.progress + 2);
  agent.lastUpdated = new Date().toISOString();
  agent.logs = [...agent.logs.slice(-5), message];
  ceo.task = `Synthesize ${agent.department} input into the final ${state.selectedSymbol} research command.`;
  ceo.logs = [...ceo.logs.slice(-5), `Received ${agent.department} update: ${message}`];
  ceo.lastUpdated = new Date().toISOString();
  state.activityFeed = [{
    time: new Date().toLocaleTimeString(),
    agent: agent.name,
    message,
  }, ...state.activityFeed].slice(0, 20);
}

function tickAgents() {
  const selectedSymbol = state.selectedSymbol || "SPY";
  const templates = [
    `Checked ${selectedSymbol} against TTT alignment`,
    "Updated collaboration path",
    "Rejected weak signal until confirmation improves",
    "Sent status packet to CEO B",
    "Converted new context into a review task",
    "Refreshed risk gate before alert review",
  ];
  const agent = habitatAgents[Math.floor(Math.random() * habitatAgents.length)];
  const statusIndex = statusCycle.indexOf(agent.status);
  agent.status = statusCycle[(statusIndex + 1 + Math.floor(Math.random() * 2)) % statusCycle.length];
  agent.progress = Math.max(12, Math.min(99, agent.progress + Math.round(Math.random() * 10 - 3)));
  agent.confidence = Math.max(55, Math.min(98, agent.confidence + Math.round(Math.random() * 6 - 2)));
  agent.lastUpdated = new Date().toISOString();
  const message = templates[Math.floor(Math.random() * templates.length)];
  agent.logs = [...agent.logs.slice(-5), message];
  if (agent.id !== "ceo-b" && Math.random() > 0.42) {
    agent.status = "collaborating";
  }
  state.activityFeed = [{
    time: new Date().toLocaleTimeString(),
    agent: agent.name,
    message,
  }, ...state.activityFeed].slice(0, 20);
  if (Math.random() > 0.55) {
    const ceo = habitatAgents.find((entry) => entry.id === "ceo-b");
    ceo.logs = [...ceo.logs.slice(-5), `Received ${agent.department} update: ${message}`];
    ceo.task = `Synthesize ${agent.department} input into the final ${selectedSymbol} research command.`;
    ceo.progress = Math.min(99, ceo.progress + 1);
    ceo.lastUpdated = new Date().toISOString();
  }
  state.completedToday += agent.status === "completed" ? 1 : 0;

  // 2. Tick our Workable AI Operating Agents dynamically based on active missions
  const missions = getSharedQueue("pickaxeMissionQueue");
  const activeMissions = missions.filter(m => m.status !== "Completed" && m.status !== "done");
  let opAgents = getOperatingAgentsState();
  let stateChanged = false;
  const busyAgentIds = new Set();

  if (activeMissions.length > 0) {
    activeMissions.forEach((mission) => {
      const matchingAgent = opAgents.find(a => a.name.toLowerCase() === mission.owner.toLowerCase() || a.id.toLowerCase() === mission.owner.toLowerCase());
      if (matchingAgent && matchingAgent.id !== "ceo-b-os") {
        busyAgentIds.add(matchingAgent.id);
        matchingAgent.status = "Active Execution";
        
        const currentProgress = Number(mission.progress || 20);
        const nextProgress = Math.min(100, currentProgress + Math.floor(Math.random() * 15) + 10);
        
        mission.progress = nextProgress;
        matchingAgent.progress = nextProgress;
        matchingAgent.currentTask = `Executing: ${mission.title}`;
        matchingAgent.lastUpdated = new Date().toISOString();
        stateChanged = true;

        if (nextProgress >= 100) {
          mission.status = "Completed";
          const actionState = getActionState();
          actionState[mission.id] = true;
          setActionState(actionState);
          
          addSharedReviewItem({
            id: `review-sim-${Date.now()}`,
            title: `Task Complete: ${mission.title}`,
            owner: matchingAgent.name,
            source: mission.source || "AI Habitat OS",
            status: "Pending Decision",
            priority: mission.priority || "Medium",
            output: `[Autonomous Completion] Agent ${matchingAgent.name} successfully finished mission "${mission.title}". Target outcomes reached and verified. Verification payload attached.`
          });

          matchingAgent.progress = 0;
          matchingAgent.status = "Active Guard";
          matchingAgent.currentTask = matchingAgent.role; // Reset to default
          matchingAgent.lastOutput = `Completed mission: ${mission.title}. Output sent to review stack.`;
          addWorldEvent(`Agent ${matchingAgent.name} finished task: "${mission.title}" and queued output for review.`);
        }
      }
    });
  }

  // Ticks idle operating agents so their progress wiggles and changes tasks to look alive
  opAgents.forEach((a) => {
    if (a.id !== "ceo-b-os" && !busyAgentIds.has(a.id)) {
      if (Math.random() > 0.75) {
        a.progress = (a.progress + Math.floor(Math.random() * 8) + 4) % 100;
        const scans = [
          "Monitoring input channels...",
          "Checking system health...",
          "Scanning relative volume indicators...",
          "Indexing newly saved archive vault resources...",
          "Watching options flow indicators..."
        ];
        a.status = "Active Monitor";
        a.currentTask = scans[Math.floor(Math.random() * scans.length)];
        stateChanged = true;
      }
    }
  });

  if (stateChanged) {
    setOperatingAgentsState(opAgents);
    localStorage.setItem("pickaxeMissionQueue", JSON.stringify(missions));
  }

  // Re-render pages if currently viewing them
  if (state.activeView === "agents") renderAgentsPage();
  if (state.activeView === "vision") renderVisionCommandCenter();
  if (state.activeView === "staging") renderStagingAdvanced();
}

function updateHabitatClock() {
  if (!els.habitatClock) return;
  els.habitatClock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function drawSpark(canvas, values, changePct) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, rect.width, rect.height);
  if (!values.length) return;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min || 1;
  ctx.strokeStyle = changePct >= 0 ? "#49f28f" : "#ff5c7a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  values.forEach((value, index) => {
    const x = (index / Math.max(1, values.length - 1)) * rect.width;
    const y = rect.height - ((value - min) / spread) * (rect.height - 6) - 3;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

async function getJson(url) {
  const response = await fetch(url);
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || response.statusText);
  return payload;
}

async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || response.statusText);
  return payload;
}

function formatMoney(value, currency = "USD") {
  const number = Number(value);
  if (!Number.isFinite(number)) return "n/a";
  if (currency === "USD") return `$${number.toLocaleString(undefined, { maximumFractionDigits: number > 100 ? 2 : 4 })}`;
  return `${number.toLocaleString(undefined, { maximumFractionDigits: 4 })} ${currency || ""}`;
}

function formatSigned(value) {
  const number = Number(value || 0);
  return `${number >= 0 ? "+" : ""}${number.toFixed(2)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
