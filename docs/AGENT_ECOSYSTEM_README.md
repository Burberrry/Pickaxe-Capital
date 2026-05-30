# Pickaxe Agent City / AI Habitat OS

The AI Habitat OS is an internal operating system and agent city designed to run alongside the Pickaxe Capital investment research dashboard. It simulates a collaborative multi-agent workforce and generates manual review research packets for CEO B ("The Shah").

## Setup & Running

To run the local agent server:
```bash
npm run agent:server
```
The server starts on port `4328` by default. You can view the dashboard at:
`http://localhost:4328/agent-os.html`

To run a mission via the CLI:
```bash
npm run agent "Deploy the new risk Sentinel alerts"
```

## System Architecture

- **`scripts/agent-server.mjs`:** The backend server that hosts static assets, coordinates bookmarks, and exposes JSON endpoints.
- **`src/agent-ecosystem/`:** Main code package containing memory management, OpenAI wrappers, route-planning logic, and Git/issue tools.
- **`public/agent-os.html` & `public/agent-os.js`:** The Bloomberg-terminal style dashboard visualizer with custom CSS nodes and glowing network paths.
