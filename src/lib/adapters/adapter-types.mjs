/**
 * @fileoverview Type definitions and schema specifications for Pickaxe Capital Adapters.
 * Each adapter acts as a boundary interface separating the offline frontend/local stubs
 * from future backend API service connections.
 */

/**
 * @typedef {Object} AdapterStatus
 * @property {string} MOCK - Full simulation/demo mode. No real API.
 * @property {string} MANUAL - User-driven input only (e.g., file copy/paste, CSV uploads).
 * @property {string} LOCAL - Local sandbox processing (e.g., node scripts running on local files).
 * @property {string} ADAPTER_READY - Code interface fully ready, pending keys/env variables.
 * @property {string} CONNECTED - Fully operational live provider link.
 * @property {string} ERROR - Connection failure or invalid credentials.
 */
export const AdapterStatuses = {
  MOCK: "Mock",
  MANUAL: "Manual",
  LOCAL: "Local",
  ADAPTER_READY: "Adapter Ready",
  CONNECTED: "Connected",
  ERROR: "Error"
};

/**
 * @typedef {Object} AdapterInterface
 * @property {string} name - Human-readable name of the adapter.
 * @property {string} category - Category (e.g., Market Data, Options Flow, AI Review).
 * @property {keyof typeof AdapterStatuses} status - Active operational status.
 * @property {string[]} requiredCredentials - Names of environmental variables required for future activation.
 * @property {Object} supportedMethods - Map of methods that the adapter supports (methods details).
 * @property {string} fallbackBehavior - Description of what happens when status is Mock or not connected.
 * @property {string} safetyNotes - Safety and compliance notes (e.g., broker restrictions).
 * @property {boolean} frontendSafe - Whether it is safe to execute directly in the browser.
 */
