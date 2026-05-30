/**
 * AI Habitat OS - Frontend Orchestrator
 */

// Node coordinates on the SVG map (0-100 percentage layout)
const NODE_POSITIONS = {
  "ceo-b-hq": { x: 50, y: 15 },
  "trading-floor": { x: 35, y: 35 },
  "filter-gateway": { x: 65, y: 35 },
  "prompts-decisions": { x: 20, y: 15 },
  "brain-learning": { x: 80, y: 15 },
  "eye-monitor": { x: 50, y: 48 },
  "research-ideas": { x: 35, y: 68 },
  "agents-network": { x: 65, y: 68 },
  "code-builder": { x: 20, y: 80 },
  "memory-archive": { x: 80, y: 80 },
  "bookmarks-alerts": { x: 50, y: 82 },
  "saved-data": { x: 10, y: 48 },
  "formula-engine": { x: 90, y: 48 },
  "ai-models": { x: 35, y: 48 },
  "collaboration-exchange": { x: 65, y: 48 },
  "qa": { x: 50, y: 68 } // Added QA node explicitly for the implementation path
};

const AGENT_ROSTER = [
  { name: "Research Agent", role: "Market Analyst", badge: "Research", confidence: 91, status: "thinking" },
  { name: "Trading Agent", role: "Execution Analyst", badge: "Static", confidence: 82, status: "active" },
  { name: "Builder Agent", role: "Code Architect", badge: "Builder", confidence: 88, status: "working" },
  { name: "Risk Agent", role: "Risk sentinel", badge: "Guardian", confidence: 95, status: "active" },
  { name: "Memory Agent", role: "Archive librarian", badge: "Memory", confidence: 89, status: "scanning" },
  { name: "QA Agent", role: "System validator", badge: "QA Gate", confidence: 92, status: "working" },
  { name: "Strategy Agent", role: "Decision compiler", badge: "Strategy", confidence: 94, status: "thinking" },
  { name: "Recon Agent", role: "Geopolitical scout", badge: "Scout", confidence: 86, status: "scanning" }
];

const FALLBACK_NODES = [
  { id: "ceo-b-hq", name: "CEO B Command Center", role: "Commander Layer" },
  { id: "trading-floor", name: "Trading Floor", role: "Market Operation Desk" },
  { id: "filter-gateway", name: "Filter Gateway", role: "Verification Gate" },
  { id: "prompts-decisions", name: "Prompts & Decisions", role: "AI Planner" },
  { id: "brain-learning", name: "Brain / Learning Core", role: "Knowledge Loop" },
  { id: "eye-monitor", name: "Eye Monitor", role: "Sentinel Watch" },
  { id: "research-ideas", name: "Research / Ideas", role: "Hypothesis Forge" },
  { id: "agents-network", name: "Agents Network", role: "Workforce Matrix" },
  { id: "code-builder", name: "Code / Builder", role: "Infrastructure Engine" },
  { id: "memory-archive", name: "Memory / Archive", role: "Permanent Database" },
  { id: "bookmarks-alerts", name: "Bookmarks / Alerts", role: "Intake Workbench" },
  { id: "saved-data", name: "Saved Data", role: "Local Datasets" },
  { id: "formula-engine", name: "Formula Engine", role: "Quantitative Analytics" },
  { id: "ai-models", name: "AI Models", role: "Cognitive Nodes" },
  { id: "collaboration-exchange", name: "Collaboration / Idea Exchange", role: "Agent Council" }
];

const FALLBACK_ROUTES = {
  intelligence: {
    name: "Intelligence Route",
    color: "green",
    path: ["eye-monitor", "research-ideas", "filter-gateway", "ai-models", "bookmarks-alerts", "ceo-b-hq"],
    description: "Evaluates raw market signals and alerts before promoting them to CEO B."
  },
  implementation: {
    name: "Implementation Route",
    color: "red",
    path: ["ceo-b-hq", "prompts-decisions", "agents-network", "trading-floor", "code-builder", "qa", "ceo-b-hq"],
    description: "Converts CEO B decisions into code commits, system builds, and deployments."
  },
  support: {
    name: "Support Route",
    color: "gold",
    path: ["saved-data", "formula-engine", "code-builder", "agents-network", "trading-floor"],
    description: "Feeds local data and formula calculations into operational trading floor nodes."
  },
  feedback: {
    name: "Feedback Route",
    color: "white",
    path: ["trading-floor", "qa", "memory-archive", "brain-learning", "filter-gateway", "ceo-b-hq"],
    description: "Evaluates execution outcomes and adds them to memory loops to refine future filter rules."
  },
  oversight: {
    name: "Oversight Route",
    color: "blue",
    path: ["ceo-b-hq", "eye-monitor", "agents-network", "trading-floor", "brain-learning", "ceo-b-hq"],
    description: "Direct monitoring of the active workforce status and trading nodes."
  }
};

let useFallback = false;
let localMemory = null;

function getLocalMemory() {
  if (localMemory) return localMemory;
  try {
    const stored = localStorage.getItem("pickaxe_agent_memory");
    if (stored) {
      localMemory = JSON.parse(stored);
      return localMemory;
    }
  } catch (e) {}
  
  localMemory = {
    missions: [
      {
        id: "MP-2753",
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        goal: "Build CEO B mission packet for the AI Habitat OS",
        activeRoutes: [
          { name: "Intelligence Route", color: "green", path: ["eye-monitor", "research-ideas", "filter-gateway", "ai-models", "bookmarks-alerts", "ceo-b-hq"] },
          { name: "Feedback Route", color: "white", path: ["trading-floor", "qa", "memory-archive", "brain-learning", "filter-gateway", "ceo-b-hq"] },
          { name: "Oversight Route", color: "blue", path: ["ceo-b-hq", "eye-monitor", "agents-network", "trading-floor", "brain-learning", "ceo-b-hq"] },
          { name: "Implementation Route", color: "red", path: ["ceo-b-hq", "prompts-decisions", "agents-network", "trading-floor", "code-builder", "qa", "ceo-b-hq"] }
        ],
        agentFindings: {
          "Research Agent": "Identified key sector parameters and compiled TTT data metrics.",
          "Risk Agent": "Guarded execution limits. Confirmed that no actual trades will be placed.",
          "Memory Agent": "Preserved mission logs and archived parameters in agent-memory.json.",
          "QA Agent": "Verified file checkpoints, routes health index, and build checks.",
          "Builder Agent": "Staged build templates for files related to AI Habitat OS."
        },
        riskGate: "No live execution connected. Webull execution remains separate and manual.",
        ceoBDecision: "pending",
        nextBuildStep: "Configure backend adapters to support manual review signals.",
        nextActions: ["Verify nodes active states in the visual map legend", "CEO B manual review required before coding decisions"]
      }
    ],
    alerts: [
      {
        id: "ALT-920",
        strike: "Build CEO B mission packet for the AI Habitat OS",
        thesis: "Mission MP-2753 launched successfully. Active routes: Intelligence, Feedback, Oversight, Implementation.",
        expiry: new Date().toISOString().split('T')[0],
        status: "ceo_review"
      }
    ]
  };
  saveLocalMemory();
  return localMemory;
}

function saveLocalMemory() {
  try {
    localStorage.setItem("pickaxe_agent_memory", JSON.stringify(localMemory));
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  document.getElementById("runMissionBtn").addEventListener("click", dispatchMission);
});

async function initDashboard() {
  try {
    const res = await fetch("/api/status");
    if (!res.ok) throw new Error();
    useFallback = false;
  } catch (e) {
    console.warn("API Server not detected. Running in STATIC Fallback mode.");
    useFallback = true;
  }
  await fetchStatus();
  await fetchRoutes();
  await fetchMemory();
}

/**
 * Fetch and display system status metrics
 */
async function fetchStatus() {
  let data;
  if (useFallback) {
    const mem = getLocalMemory();
    data = {
      status: "static_fallback",
      uptime: (performance.now() + 100000) / 1000,
      totalMissionsPlanned: mem.missions.length
    };
  } else {
    try {
      const res = await fetch("/api/status");
      if (!res.ok) throw new Error("Status API failed");
      data = await res.json();
    } catch (e) {
      console.error("Failed to load status:", e);
      return;
    }
  }
  
  const container = document.getElementById("systemMetrics");
  if (container) {
    container.innerHTML = `
      <span class="badge blue">OS Status: ${data.status.toUpperCase()}</span>
      <span class="badge green">Uptime: ${Math.floor(data.uptime)}s</span>
      <span class="badge gold">${data.totalMissionsPlanned} Missions Run</span>
    `;
  }
}

/**
 * Fetch connection routes, plot nodes, and draw SVG connection lines
 */
async function fetchRoutes(highlightedPaths = []) {
  let data;
  if (useFallback) {
    data = { nodes: FALLBACK_NODES, routes: FALLBACK_ROUTES };
  } else {
    try {
      const res = await fetch("/api/routes");
      if (!res.ok) throw new Error("Routes API failed");
      data = await res.json();
    } catch (e) {
      console.error("Failed to load routes:", e);
      return;
    }
  }
  
  const mapPanel = document.getElementById("mapPanel");
  const svgLines = document.getElementById("svgLines");
  const nodesContainer = document.getElementById("nodesContainer");
  const legendContainer = document.getElementById("legendContainer");

  // Clear previous
  svgLines.innerHTML = "";
  nodesContainer.innerHTML = "";
  legendContainer.innerHTML = "";

  const activeNodeIds = new Set(highlightedPaths.flat());

  // Plot nodes
  data.nodes.forEach(node => {
    const pos = NODE_POSITIONS[node.id] || { x: 50, y: 50 };
    const isActive = activeNodeIds.has(node.id);
    
    const nodeEl = document.createElement("div");
    nodeEl.className = `node-label ${isActive ? "active-node" : ""}`;
    nodeEl.style.left = `${pos.x}%`;
    nodeEl.style.top = `${pos.y}%`;
    nodeEl.id = `node-${node.id}`;
    nodeEl.innerHTML = `
      <strong>${node.name}</strong>
      <span style="display:block; font-size: 8px; color: var(--muted);">${node.role}</span>
    `;
    nodesContainer.appendChild(nodeEl);
  });

  // Handle extra QA node if needed
  if (activeNodeIds.has("qa") && !document.getElementById("node-qa")) {
    const pos = NODE_POSITIONS["qa"];
    const nodeEl = document.createElement("div");
    nodeEl.className = `node-label active-node`;
    nodeEl.style.left = `${pos.x}%`;
    nodeEl.style.top = `${pos.y}%`;
    nodeEl.id = `node-qa`;
    nodeEl.innerHTML = `
      <strong>QA / Testing</strong>
      <span style="display:block; font-size: 8px; color: var(--muted);">Verification</span>
    `;
    nodesContainer.appendChild(nodeEl);
  }

  // Draw lines for all routes
  Object.entries(data.routes).forEach(([key, route]) => {
    const isHighlighted = highlightedPaths.length === 0 || highlightedPaths.some(p => p.join(",") === route.path.join(","));
    const color = route.color;
    
    // Draw connection lines
    for (let i = 0; i < route.path.length - 1; i++) {
      const fromId = route.path[i];
      const toId = route.path[i + 1];
      
      const fromPos = NODE_POSITIONS[fromId];
      const toPos = NODE_POSITIONS[toId];
      
      if (fromPos && toPos) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", `${fromPos.x}%`);
        line.setAttribute("y1", `${fromPos.y}%`);
        line.setAttribute("x2", `${toPos.x}%`);
        line.setAttribute("y2", `${toPos.y}%`);
        line.setAttribute("stroke", isHighlighted ? color : "rgba(225,235,245,0.03)");
        line.setAttribute("stroke-width", isHighlighted ? "2.5" : "1");
        if (isHighlighted) {
          line.setAttribute("class", "glow-line");
        }
        svgLines.appendChild(line);
      }
    }

    // Add to legend
    const legRow = document.createElement("div");
    legRow.className = "agent-row";
    legRow.style.borderColor = color;
    legRow.innerHTML = `
      <span style="color:${color}; font-weight:bold;">${route.name}</span>
      <small style="color:var(--muted);">${route.description}</small>
    `;
    legendContainer.appendChild(legRow);
  });

  // Populate Agent Grid with statuses
  populateAgentGrid(activeNodeIds);
}

/**
 * Populate Agent cards
 */
function populateAgentGrid(activeNodes) {
  const container = document.getElementById("agentsContainer");
  container.innerHTML = "";

  AGENT_ROSTER.forEach(agent => {
    // Modify status color based on active networks
    let tone = "blue";
    if (agent.status === "working") tone = "warn";
    else if (agent.status === "thinking") tone = "gold";
    else if (agent.status === "scanning") tone = "blue";
    else if (agent.status === "active") tone = "green";

    const card = document.createElement("article");
    card.className = "mini-agent-card";
    card.innerHTML = `
      <div class="mini-row" style="margin-bottom: 4px;">
        <h4>${agent.name}</h4>
        <span class="badge ${tone}">${agent.status}</span>
      </div>
      <p style="margin: 0; color: var(--muted);">${agent.role}</p>
      <div style="margin-top: 6px; display:flex; justify-content:space-between; font-size: 9px;">
        <span>Readiness</span>
        <strong style="color:#fff;">${agent.confidence}%</strong>
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Fetch memory log history
 */
async function fetchMemory() {
  let data;
  if (useFallback) {
    data = getLocalMemory();
  } else {
    try {
      const res = await fetch("/api/memory");
      if (!res.ok) throw new Error("Memory API failed");
      data = await res.json();
    } catch (e) {
      console.error("Failed to load memory:", e);
      return;
    }
  }
  
  // Stored Alerts Memory
  const memoryContainer = document.getElementById("memoryContainer");
  memoryContainer.innerHTML = "";
  if (data.alerts.length === 0) {
    memoryContainer.innerHTML = `<span class="muted">No alert packets stored yet.</span>`;
  } else {
    data.alerts.forEach(item => {
      const row = document.createElement("div");
      row.className = "feed";
      row.style.marginBottom = "8px";
      row.innerHTML = `
        <strong>${item.strike}</strong>
        <span>${item.thesis}</span>
        <small>${item.expiry || "N/A"} • Review Queue: ${(item.status || "ceo_review").replaceAll("_", " ")}</small>
      `;
      memoryContainer.appendChild(row);
    });
  }

  // Ecosystem Activity Feed
  const activityContainer = document.getElementById("activityContainer");
  activityContainer.innerHTML = "";
  if (data.missions.length === 0) {
    activityContainer.innerHTML = `<span class="muted">No missions launched yet.</span>`;
  } else {
    data.missions.forEach(mission => {
      const row = document.createElement("div");
      row.className = "feed";
      row.style.marginBottom = "8px";
      row.innerHTML = `
        <strong>${mission.id}: ${mission.goal}</strong>
        <span>Risk Warning: ${mission.riskGate}</span>
        <small>${new Date(mission.timestamp).toLocaleString()} • Decision: ${(mission.ceoBDecision || "pending").toUpperCase()}</small>
      `;
      activityContainer.appendChild(row);
    });
  }
}

/**
 * Dispatch agent mission
 */
async function dispatchMission() {
  const goalInput = document.getElementById("missionGoal");
  const goal = goalInput.value.trim();
  
  if (!goal) {
    alert("Please enter a mission goal.");
    return;
  }

  const resultContainer = document.getElementById("missionResult");
  resultContainer.innerHTML = `<span class="pill">Routing planning... Dispatching agents...</span>`;

  try {
    let data;
    if (useFallback) {
      const cleanGoal = goal.toLowerCase();
      const activeRoutes = {
        intelligence: FALLBACK_ROUTES.intelligence,
        feedback: FALLBACK_ROUTES.feedback,
        oversight: FALLBACK_ROUTES.oversight
      };

      const implKeywords = ["build", "code", "deploy", "github", "website", "antigravity", "codex", "develop"];
      if (implKeywords.some(kw => cleanGoal.includes(kw))) {
        activeRoutes.implementation = FALLBACK_ROUTES.implementation;
      }

      const supportKeywords = ["data", "formula", "bookmark", "alert", "model", "api", "repo", "calculation"];
      if (supportKeywords.some(kw => cleanGoal.includes(kw))) {
        activeRoutes.support = FALLBACK_ROUTES.support;
      }

      const routeList = Object.values(activeRoutes);
      const activeAgents = ["Research Agent", "Risk Agent", "Memory Agent", "QA Agent", "Strategy Agent", "Recon Agent"];
      if (activeRoutes.implementation) activeAgents.push("Builder Agent");
      if (activeRoutes.support) activeAgents.push("Trading Agent");

      const findings = {};
      activeAgents.forEach(agent => {
        if (agent === "Research Agent") {
          findings[agent] = `Identified key sector parameters and compiled TTT data metrics for: "${goal}".`;
        } else if (agent === "Risk Agent") {
          findings[agent] = "Guarded execution limits. Confirmed that no actual trades will be placed.";
        } else if (agent === "Memory Agent") {
          findings[agent] = "Preserved mission logs and archived parameters in browser local state.";
        } else if (agent === "QA Agent") {
          findings[agent] = "Verified file checkpoints, routes health index, and build checks.";
        } else if (agent === "Builder Agent") {
          findings[agent] = `Staged build templates for files related to: "${goal}".`;
        } else if (agent === "Trading Agent") {
          findings[agent] = "Analyzed options liquidity placeholders and confirmed spread quality thresholds.";
        } else {
          findings[agent] = `Standing by to support mission goal: "${goal}".`;
        }
      });

      const missionId = `MP-${Math.floor(1000 + Math.random() * 9000)}`;
      data = {
        id: missionId,
        timestamp: new Date().toISOString(),
        goal: goal,
        activeRoutes: routeList.map(r => ({ name: r.name, color: r.color, path: r.path })),
        agentFindings: findings,
        riskGate: "No live execution connected. Webull execution remains separate and manual.",
        ceoBDecision: "pending",
        nextBuildStep: activeRoutes.implementation ? `Implement specific modules to support "${goal}".` : "Configure backend adapters to support manual review signals.",
        nextActions: ["Verify nodes active states in the visual map legend", "CEO B manual review required before coding decisions"]
      };

      // Save to local memory
      const mem = getLocalMemory();
      mem.missions.unshift(data);
      mem.alerts.unshift({
        id: `ALT-${Math.floor(100 + Math.random() * 900)}`,
        strike: goal,
        thesis: `Mission ${missionId} launched successfully. Active routes: ${routeList.map(r => r.name).join(", ")}.`,
        expiry: new Date().toISOString().split('T')[0],
        status: "ceo_review"
      });
      saveLocalMemory();
    } else {
      const response = await fetch("/api/mission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ goal })
      });

      if (!response.ok) throw new Error("Mission API failed");
      data = await response.json();
    }

    // Render result
    resultContainer.innerHTML = `
      <p style="color:var(--gold); font-weight:bold; margin-bottom: 6px;">[CEO B PACKET - ${data.id}]</p>
      <p><b>Risk Warning:</b> ${data.riskGate}</p>
      <p><b>Decision:</b> ${data.ceoBDecision.toUpperCase()}</p>
      <p><b>Next Build:</b> ${data.nextBuildStep}</p>
      <h4 style="margin: 8px 0 4px; color:#fff;">Agent Findings:</h4>
      <ul style="padding-left:14px; margin:0;">
        ${Object.entries(data.agentFindings).map(([agent, finding]) => `
          <li><b>${agent}:</b> ${finding}</li>
        `).join("")}
      </ul>
      <h4 style="margin: 8px 0 4px; color:#fff;">Next Steps:</h4>
      <ol style="padding-left:14px; margin:0;">
        ${data.nextActions.map(act => `<li>${act}</li>`).join("")}
      </ol>
    `;

    // Highlight active routes in map
    const paths = data.activeRoutes.map(r => r.path);
    await fetchRoutes(paths);
    
    // Clear input
    goalInput.value = "";
    
    // Refresh counts and memory
    await fetchStatus();
    await fetchMemory();

  } catch (error) {
    resultContainer.innerHTML = `<span style="color:var(--red);">Error running mission: ${error.message}</span>`;
  }
}
