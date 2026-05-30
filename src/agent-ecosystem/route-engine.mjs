/**
 * Route Engine - plans agent connection routes and compiles mission packets
 */

import { saveMission, saveAlert } from "./memory-store.mjs";
import { queryOpenAI } from "./openai-client.mjs";

// Core Nodes definitions
export const NODES = [
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
  { id: "ai-models", name: "AI Models", type: "System", role: "Cognitive Nodes" },
  { id: "collaboration-exchange", name: "Collaboration / Idea Exchange", role: "Agent Council" }
];

// Connection route definitions
export const ROUTES = {
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

/**
 * Return connection routes definitions
 */
export function getRoutes() {
  return ROUTES;
}

/**
 * Return system nodes
 */
export function getHabitat() {
  return { nodes: NODES, routes: ROUTES };
}

/**
 * Evaluates the mission goal and coordinates agents connections
 * @param {string} goal - Mission goal
 * @returns {Promise<Object>} CEO B mission packet
 */
export async function runMission(goal) {
  const cleanGoal = (goal || "").toLowerCase();
  
  // Routes selection: intelligence, feedback, oversight are ALWAYS included
  const activeRoutes = {
    intelligence: ROUTES.intelligence,
    feedback: ROUTES.feedback,
    oversight: ROUTES.oversight
  };

  // Add Implementation Route if goal concerns building / coding / github
  const implKeywords = ["build", "code", "deploy", "github", "website", "antigravity", "codex", "develop"];
  if (implKeywords.some(kw => cleanGoal.includes(kw))) {
    activeRoutes.implementation = ROUTES.implementation;
  }

  // Add Support Route if goal concerns data / formula / bookmarks
  const supportKeywords = ["data", "formula", "bookmark", "alert", "model", "api", "repo", "calculation"];
  if (supportKeywords.some(kw => cleanGoal.includes(kw))) {
    activeRoutes.support = ROUTES.support;
  }

  const routeList = Object.values(activeRoutes);
  
  // Plan active agent list
  const activeAgents = [
    "Research Agent",
    "Risk Agent",
    "Memory Agent",
    "QA Agent",
    "Strategy Agent",
    "Recon Agent"
  ];
  if (activeRoutes.implementation) activeAgents.push("Builder Agent");
  if (activeRoutes.support) activeAgents.push("Trading Agent");

  // Plan packet structure
  let missionPacket = {
    id: `MP-${Math.floor(1000 + Math.random() * 9000)}`,
    timestamp: new Date().toISOString(),
    goal: goal,
    activeRoutes: routeList.map(r => ({ name: r.name, color: r.color, path: r.path })),
    agentFindings: {},
    riskGate: "Evaluating liquidity, spread risk, and compliance posture.",
    ceoBDecision: "pending",
    nextBuildStep: "Configure backend adapters to support manual review signals.",
    nextActions: ["Attach TTT checklist", "Review logs manually in Webull"]
  };

  // Compile prompt for optionally querying OpenAI
  const systemPrompt = `You are the AI routing planner and strategy coordinator for Pickaxe Capital AI Habitat OS. 
Analyze the mission goal and compile a JSON-formatted mission packet.
Respond ONLY with a valid JSON block containing:
{
  "agentFindings": { "AgentName": "Short descriptive finding related to the goal" },
  "riskGate": "A risk guardrail sentence warning about this operation",
  "ceoBDecision": "pending",
  "nextBuildStep": "The logical next coding step",
  "nextActions": ["Action 1", "Action 2"]
}`;

  const userPrompt = `Mission Goal: "${goal}"
Active Routes: ${routeList.map(r => r.name).join(", ")}
Active Agents: ${activeAgents.join(", ")}`;

  const aiResult = await queryOpenAI(systemPrompt, userPrompt);
  if (aiResult) {
    try {
      const parsed = JSON.parse(aiResult.match(/\{[\s\S]*\}/)?.[0] || aiResult);
      missionPacket = {
        ...missionPacket,
        agentFindings: parsed.agentFindings || {},
        riskGate: parsed.riskGate || missionPacket.riskGate,
        ceoBDecision: parsed.ceoBDecision || "pending",
        nextBuildStep: parsed.nextBuildStep || missionPacket.nextBuildStep,
        nextActions: parsed.nextActions || missionPacket.nextActions
      };
    } catch (e) {
      console.warn("Failed to parse OpenAI JSON response, falling back to simulated values:", e);
      simulateFindings(missionPacket, activeAgents, goal);
    }
  } else {
    // Local simulated findings
    simulateFindings(missionPacket, activeAgents, goal);
  }

  // Save to database
  saveMission(missionPacket);
  
  // Create an alert memo in data file format
  const alertMemo = {
    id: `ALT-${Math.floor(100 + Math.random() * 900)}`,
    ticker: "MISSION",
    direction: "OS",
    strategy: "mission_brief",
    expiry: new Date().toISOString().split('T')[0],
    strike: goal,
    estimatedMid: "Planned",
    spreadQuality: "Pass",
    volume: "N/A",
    openInterest: "N/A",
    impliedVolatility: "N/A",
    delta: "N/A",
    theta: "N/A",
    thesis: `Mission ${missionPacket.id} launched successfully. Active routes: ${routeList.map(r => r.name).join(", ")}.`,
    catalyst: `Goal: ${goal}`,
    invalidation: "Mission fails if manual verification finds discrepancies.",
    targetScenario: "Manual review of planned routes.",
    riskNotes: [missionPacket.riskGate],
    confidence: 85,
    status: "ceo_review",
    ceoBDecision: "pending",
    disclaimer: "Simulated research mission memo."
  };
  saveAlert(alertMemo);

  return missionPacket;
}

/**
 * Generate mock agent findings offline
 */
function simulateFindings(packet, agents, goal) {
  const findings = {};
  
  agents.forEach(agent => {
    if (agent === "Research Agent") {
      findings[agent] = `Identified key sector parameters and compiled TTT data metrics for: "${goal}".`;
    } else if (agent === "Risk Agent") {
      findings[agent] = "Guarded execution limits. Confirmed that no actual trades will be placed.";
      packet.riskGate = "No live execution connected. Webull execution remains separate and manual.";
    } else if (agent === "Memory Agent") {
      findings[agent] = "Preserved mission logs and archived parameters in agent-memory.json.";
    } else if (agent === "QA Agent") {
      findings[agent] = "Verified file checkpoints, routes health index, and build checks.";
    } else if (agent === "Builder Agent") {
      findings[agent] = `Staged build templates for files related to: "${goal}".`;
      packet.nextBuildStep = `Implement specific modules to support "${goal}".`;
    } else if (agent === "Trading Agent") {
      findings[agent] = "Analyzed liquidity placeholders and confirmed spread quality thresholds.";
    } else {
      findings[agent] = `Standing by to support mission goal: "${goal}".`;
    }
  });

  packet.agentFindings = findings;
  packet.nextActions = [
    "Verify nodes active states in the visual map legend",
    "CEO B manual review required before coding decisions"
  ];
}
