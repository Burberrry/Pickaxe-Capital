import { AdapterStatuses } from "./adapter-types.mjs";

/**
 * @fileoverview Future Adapter for GitHub / Project Status integration.
 */
export const GithubProjectAdapter = {
  name: "GitHub Repository Status Adapter",
  category: "GitHub/Project Status",
  status: AdapterStatuses.LOCAL,
  requiredCredentials: [
    "GITHUB_PAT_TOKEN",
    "GITHUB_REPO_OWNER",
    "GITHUB_REPO_NAME"
  ],
  supportedMethods: {
    runBuildCheckLocal: "Triggers local shell process to run check-project.mjs and return execution logs.",
    getRepoIssues: "Query remote repo issues board to sync next best actions on Completion Tracker.",
    getLatestCommits: "Fetch commits list from GitHub API to populate A-Z build logs."
  },
  currentFallbackBehavior: "Loads build completion percentages and changed files logs from static public/habitat-data.js properties.",
  safetyNotes: "Local script trigger must restrict shell access to authorized directories. GitHub API calls are rate-limited.",
  frontendSafe: false,

  // Future implementation stub
  async getLatestCommits() {
    console.log("[Adapter - GitHub] Mocking commit log retrieval");
    return [];
  }
};
