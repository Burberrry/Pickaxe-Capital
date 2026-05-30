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

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();

  document.getElementById("runMissionBtn").addEventListener("click", dispatchMission);
});

async function initDashboard() {
  await fetchStatus();
  await fetchRoutes();
  await fetchMemory();
}

/**
 * Fetch and display system status metrics
 */
async function fetchStatus() {
  try {
    const res = await fetch("/api/status");
    if (!res.ok) throw new Error("Status API failed");
    const data = await res.json();
    
    const container = document.getElementById("systemMetrics");
    container.innerHTML = `
      <span class="badge blue">OS Status: ${data.status.toUpperCase()}</span>
      <span class="badge green">Uptime: ${Math.floor(data.uptime)}s</span>
      <span class="badge gold">${data.totalMissionsPlanned} Missions Run</span>
    `;
  } catch (e) {
    console.error("Failed to load status:", e);
  }
}

/**
 * Fetch connection routes, plot nodes, and draw SVG connection lines
 */
async function fetchRoutes(highlightedPaths = []) {
  try {
    const res = await fetch("/api/routes");
    if (!res.ok) throw new Error("Routes API failed");
    const data = await res.json();
    
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

  } catch (e) {
    console.error("Failed to load routes:", e);
  }
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
  try {
    const res = await fetch("/api/memory");
    if (!res.ok) throw new Error("Memory API failed");
    const data = await res.json();
    
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
          <small>${item.expiry} • Review Queue: ${item.status.replaceAll("_", " ")}</small>
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
          <small>${new Date(mission.timestamp).toLocaleString()} • Decision: ${mission.ceoBDecision.toUpperCase()}</small>
        `;
        activityContainer.appendChild(row);
      });
    }
  } catch (e) {
    console.error("Failed to load memory:", e);
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
    const response = await fetch("/api/mission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ goal })
    });

    if (!response.ok) throw new Error("Mission API failed");
    const data = await response.json();

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
