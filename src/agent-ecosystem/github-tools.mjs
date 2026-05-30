/**
 * GitHub Tools - interacts with GitHub API
 */

import { GITHUB_TOKEN, GITHUB_REPO, ALLOW_GITHUB_WRITE } from "./config.mjs";

/**
 * Creates a GitHub issue (or simulates it if writes are disabled)
 * @param {string} title - Issue title
 * @param {string} body - Issue description
 * @returns {Promise<Object>} Status object
 */
export async function createIssue(title, body) {
  if (!ALLOW_GITHUB_WRITE || !GITHUB_TOKEN) {
    return {
      status: "skipped",
      message: "GitHub write operation skipped (ALLOW_GITHUB_WRITE is false or GITHUB_TOKEN is missing).",
      simulatedIssue: {
        title,
        body,
        repo: GITHUB_REPO,
        simulatedAt: new Date().toISOString()
      }
    };
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `token ${GITHUB_TOKEN}`,
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Pickaxe-Agent-OS"
      },
      body: JSON.stringify({ title, body })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GitHub API error: ${err}`);
    }

    const payload = await response.json();
    return {
      status: "created",
      issueUrl: payload.html_url,
      number: payload.number,
      message: `Issue #${payload.number} created successfully on GitHub.`
    };
  } catch (error) {
    console.error("Failed to create GitHub issue:", error.message);
    return {
      status: "error",
      message: `Failed to communicate with GitHub: ${error.message}`
    };
  }
}
