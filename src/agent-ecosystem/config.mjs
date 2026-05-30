/**
 * Configuration module - centralizes environment variables
 */

export const PORT = process.env.PORT || process.env.AGENT_PORT || 4328;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || null;
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null;
export const GITHUB_REPO = process.env.GITHUB_REPO || "Burberrry/Pickaxe-Capital";
export const ALLOW_GITHUB_WRITE = process.env.ALLOW_GITHUB_WRITE === "true";
