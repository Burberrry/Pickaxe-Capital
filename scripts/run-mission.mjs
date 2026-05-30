#!/usr/bin/env node

/**
 * run-mission.mjs - CLI script to launch agent missions
 */

import { runMission } from "../src/agent-ecosystem/route-engine.mjs";

async function main() {
  const args = process.argv.slice(2);
  const goal = args[0];

  if (!goal) {
    console.log("Usage: node scripts/run-mission.mjs \"<mission_goal>\"");
    process.exit(1);
  }

  console.log(`\n⛏ Launching Pickaxe Agent City Mission...`);
  console.log(`Goal: "${goal}"`);

  try {
    const packet = await runMission(goal);
    
    console.log("\n=======================================================");
    console.log(`CEO B MISSION PACKET - ${packet.id}`);
    console.log("=======================================================");
    console.log(`Timestamp:      ${packet.timestamp}`);
    console.log(`CEO B Decision: ${packet.ceoBDecision.toUpperCase()}`);
    console.log(`Risk Gate:      ${packet.riskGate}`);
    console.log(`Next Build:     ${packet.nextBuildStep}`);
    console.log("\nActive Connection Routes:");
    packet.activeRoutes.forEach(r => {
      console.log(`- ${r.name} (${r.color.toUpperCase()}): ${r.path.join(" -> ")}`);
    });
    console.log("\nAgent Findings:");
    Object.entries(packet.agentFindings).forEach(([agent, finding]) => {
      console.log(`  [${agent}]: ${finding}`);
    });
    console.log("\nNext Actions:");
    packet.nextActions.forEach((act, idx) => {
      console.log(`  ${idx + 1}. ${act}`);
    });
    console.log("=======================================================\n");
  } catch (error) {
    console.error("Mission failed with error:", error.message);
    process.exit(1);
  }
}

main();
