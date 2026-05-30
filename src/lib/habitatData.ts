export type HabitatStatus = "active" | "scanning" | "thinking" | "working" | "collaborating" | "completed";

export type HabitatAgent = {
  id: string;
  name: string;
  title: string;
  department: string;
  status: HabitatStatus;
  task: string;
  progress: number;
  confidence: number;
  habitat: string;
  connections: string[];
};

export const statusCycle: HabitatStatus[] = ["active", "scanning", "thinking", "working", "collaborating", "completed"];

export const navigationItems = [
  { label: "Home", route: "/", view: "command" },
  { label: "Vision Map", route: "/vision-map", view: "vision" },
  { label: "Agent Habitat", route: "/agents", view: "agents" },
  { label: "Market Command", route: "/market-command", view: "command" },
  { label: "Signal Engine", route: "/signal-engine", view: "signals" },
  { label: "CEO B Profile", route: "/ceo-b-profile", view: "founder" },
  { label: "Archive", route: "/archive", view: "archive" },
  { label: "Founder", route: "/founder", view: "founder" },
  { label: "Staging", route: "/staging", view: "staging" },
  { label: "Settings", route: "/settings", view: "settings" },
];

export const agents: HabitatAgent[] = [
  {
    id: "ceo-b",
    name: "CEO B Command",
    title: "Commander / Overseer",
    department: "Command",
    status: "active",
    task: "Synchronize TTT, risk, signals, and business priorities.",
    progress: 86,
    confidence: 91,
    habitat: "Central command tower",
    connections: ["macro", "risk", "signal-engine", "business"],
  },
  {
    id: "macro",
    name: "Alpha Prime",
    title: "Market Analysis",
    department: "Market Analysis",
    status: "thinking",
    task: "Scan market trends, regimes, liquidity, and structure before the Trading Floor receives a thesis.",
    progress: 62,
    confidence: 78,
    habitat: "Alpha market observatory",
    connections: ["ceo-b", "geo", "technical"],
  },
  {
    id: "news",
    name: "Echo Mind",
    title: "News & Intel",
    department: "News & Intel",
    status: "scanning",
    task: "Aggregate global news, catalyst intelligence, and event risk into clean packets.",
    progress: 54,
    confidence: 73,
    habitat: "Intel antenna district",
    connections: ["ceo-b", "geo", "signal-engine"],
  },
  {
    id: "flow",
    name: "Nexus Core",
    title: "Strategy Engine",
    department: "Strategy Engine",
    status: "working",
    task: "Test playbooks, compare scenarios, and turn research into strategy candidates.",
    progress: 71,
    confidence: 82,
    habitat: "Strategy engine core",
    connections: ["risk", "signal-engine", "technical"],
  },
  {
    id: "risk",
    name: "Omega Vault",
    title: "Risk Management",
    department: "Risk Management",
    status: "active",
    task: "Guard exposure, invalidation, sizing, downside, and duplicate signal risk.",
    progress: 92,
    confidence: 95,
    habitat: "Omega risk vault",
    connections: ["ceo-b", "flow", "blueprint"],
  },
  {
    id: "geo",
    name: "Sigma Scout",
    title: "Sentiment Tracking",
    department: "Sentiment Tracking",
    status: "thinking",
    task: "Monitor sentiment, crowd momentum, social velocity, and narrative pressure.",
    progress: 48,
    confidence: 69,
    habitat: "Sentiment scout tower",
    connections: ["macro", "news", "business"],
  },
  {
    id: "technical",
    name: "Data Weaver",
    title: "Pattern Recognition",
    department: "Pattern Recognition",
    status: "scanning",
    task: "Connect patterns, levels, Archive memory, and repeated market structures.",
    progress: 66,
    confidence: 80,
    habitat: "Pattern recognition grid",
    connections: ["macro", "flow", "signal-engine"],
  },
  {
    id: "signal-engine",
    name: "Quantum Node",
    title: "Signal Generation",
    department: "Signal Generation",
    status: "collaborating",
    task: "Generate high-probability signal candidates from confirmed patterns and risk gates.",
    progress: 77,
    confidence: 84,
    habitat: "Quantum signal forge",
    connections: ["ceo-b", "flow", "technical", "blueprint"],
  },
  {
    id: "blueprint",
    name: "Alert Blueprint Studio",
    title: "Storyteller / Designer",
    department: "Alert Blueprint",
    status: "working",
    task: "Turn option ideas into story-driven trade blueprints.",
    progress: 69,
    confidence: 81,
    habitat: "Blueprint studio",
    connections: ["risk", "signal-engine", "business"],
  },
  {
    id: "business",
    name: "Business Operations",
    title: "Operator / Optimizer",
    department: "Business",
    status: "active",
    task: "Map TTT revenue streams, websites, goods, and operational priorities.",
    progress: 58,
    confidence: 76,
    habitat: "Business district",
    connections: ["ceo-b", "geo", "blueprint"],
  },
];

export const pods = [
  { id: "trading-floor", label: "Central Trading Floor", owner: "CEO B Command", purpose: "Final research synthesis" },
  { id: "alpha", label: "Alpha Prime", owner: "Market Analysis", purpose: "Market structure and regime" },
  { id: "nexus", label: "Nexus Core", owner: "Strategy Engine", purpose: "Playbook ranking" },
  { id: "omega", label: "Omega Vault", owner: "Risk Management", purpose: "Risk veto and sizing" },
  { id: "echo", label: "Echo Mind", owner: "News & Intel", purpose: "Catalyst packet" },
  { id: "weaver", label: "Data Weaver", owner: "Pattern Recognition", purpose: "Chart and memory structure" },
  { id: "sigma", label: "Sigma Scout", owner: "Sentiment Tracking", purpose: "Narrative pressure" },
  { id: "quantum", label: "Quantum Node", owner: "Signal Generation", purpose: "Webull-only alert candidates" },
];

export const tasks = [
  { id: "ttt-check", title: "Confirm Time, Trend, Theme", owner: "CEO B Command", page: "/agents" },
  { id: "risk-veto", title: "Run Omega risk veto", owner: "Omega Vault", page: "/agents" },
  { id: "options-filter", title: "Filter options liquidity and spread", owner: "Nexus Core", page: "/signal-engine" },
  { id: "archive-memory", title: "Attach Archive lessons to signal review", owner: "Data Weaver", page: "/archive" },
];

export const liveOperationsLogs = [
  { agent: "CEO B Command", message: "Waiting for complete research packet before decision." },
  { agent: "Omega Vault", message: "No auto-trading. Webull execution remains manual." },
  { agent: "Quantum Node", message: "Signal engine is rules/data-based until API quota is active." },
  { agent: "Echo Mind", message: "Scanning catalysts and public market narratives." },
];

export const metrics = {
  totalAgents: 10,
  successRate: 98.7,
  systemUptime: 99.98,
  networkConfidence: 84,
};

export const checklistItems = [
  { id: "fix-npm", category: "Immediate Fixes", title: "Restore npm command availability", priority: "high", status: "open", page: "global", notes: "This shell can run Node scripts, but npm itself is missing." },
  { id: "route-audit", category: "Immediate Fixes", title: "Keep all required routes returning 200", priority: "high", status: "done", page: "all", notes: "Routes verified through local server." },
  { id: "agents-polish", category: "Design Improvements", title: "Make /agents the flagship habitat", priority: "high", status: "active", page: "/agents", notes: "Trading floor hub, pods, huddles, globe, and drawer added." },
  { id: "agent-telemetry", category: "Agent System Tasks", title: "Replace mock agent states with real telemetry", priority: "medium", status: "open", page: "/agents", notes: "Needs backend agent job tracking." },
  { id: "live-options-flow", category: "Live Data Tasks", title: "Connect options flow and unusual activity provider", priority: "high", status: "open", page: "/signal-engine", notes: "Keep read-only; Webull remains manual execution." },
  { id: "archive-intake", category: "Archive Tasks", title: "Add live bookmark intake queue", priority: "medium", status: "open", page: "/archive", notes: "Archive database is ready for import expansion." },
  { id: "founder-images", category: "Founder/Profile Tasks", title: "Add five founder image assets", priority: "low", status: "open", page: "/founder", notes: "Slots exist; images still need to be selected." },
  { id: "life-habitat", category: "Future Ideas", title: "Design Life Habitat separately from Market Habitat", priority: "medium", status: "open", page: "/vision-map", notes: "CEO B connects both habitats without mixing them." },
];

export const archiveCategories = [
  "Chrome Bookmarks / Saved Folders",
  "Market Research",
  "Agent Reports",
  "Trading Lessons",
  "Founder Notes",
  "Website Ideas",
  "Rejected Ideas",
  "Future Opportunities",
  "CEO B Final Reviews",
];

export const marketWidgets = {
  defaultWatchlist: ["SPY", "QQQ", "NVDA", "TSLA", "AAPL", "MSTR", "COIN", "BTC-USD", "ETH-USD", "EURUSD=X", "GC=F", "CL=F"],
  logoDomains: {
    SPY: "ssga.com",
    QQQ: "invesco.com",
    NVDA: "nvidia.com",
    TSLA: "tesla.com",
    AAPL: "apple.com",
    MSTR: "microstrategy.com",
    COIN: "coinbase.com",
    "BTC-USD": "bitcoin.org",
    "ETH-USD": "ethereum.org",
    "EURUSD=X": "ecb.europa.eu",
    "GC=F": "cmegroup.com",
    "CL=F": "cmegroup.com",
  },
};

export const habitatData = {
  statusCycle,
  navigationItems,
  agents,
  pods,
  tasks,
  liveOperationsLogs,
  metrics,
  checklistItems,
  archiveCategories,
  marketWidgets,
};
