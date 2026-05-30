/**
 * Memory store - reads and writes to data/agent-memory.json
 */

import fs from "node:fs";
import path from "node:path";

const memoryFilePath = path.resolve("data", "agent-memory.json");

const defaultMemory = {
  missions: [],
  alerts: [],
  decisions: [],
  lessons: []
};

/**
 * Initialize and ensure memory file exists
 */
function ensureMemoryFile() {
  const dir = path.dirname(memoryFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(memoryFilePath)) {
    fs.writeFileSync(memoryFilePath, JSON.stringify(defaultMemory, null, 2), "utf8");
  }
}

/**
 * Read memory file
 * @returns {Object} Memory object
 */
export function readMemory() {
  ensureMemoryFile();
  try {
    const data = fs.readFileSync(memoryFilePath, "utf8");
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to read memory file, using defaults:", e);
    return defaultMemory;
  }
}

/**
 * Write memory file
 * @param {Object} memory - Memory object
 */
export function writeMemory(memory) {
  ensureMemoryFile();
  try {
    fs.writeFileSync(memoryFilePath, JSON.stringify(memory, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error("Failed to write memory file:", e);
    return false;
  }
}

/**
 * Add a mission to memory
 * @param {Object} mission - Mission packet
 */
export function saveMission(mission) {
  const memory = readMemory();
  memory.missions.unshift(mission);
  // Keep recent history
  if (memory.missions.length > 50) memory.missions.pop();
  writeMemory(memory);
}

/**
 * Add an alert to memory
 * @param {Object} alert - Alert details
 */
export function saveAlert(alert) {
  const memory = readMemory();
  memory.alerts.unshift(alert);
  if (memory.alerts.length > 50) memory.alerts.pop();
  writeMemory(memory);
}
