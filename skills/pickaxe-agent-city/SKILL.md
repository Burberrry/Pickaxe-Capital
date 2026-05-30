# Pickaxe Agent City Skill Card

This skill card registers the execution parameters of the AI Habitat OS.

## Actions

### Run Mission
- **Shell command:** `node scripts/run-mission.mjs [goal]`
- **Description:** Runs a simulated multi-agent mission plan, ranks routes, compiles findings, and saves context to `data/agent-memory.json`.

### Run Agent Server
- **Shell command:** `node scripts/agent-server.mjs`
- **Description:** Initiates the server on port 4328.

## Constraints
- Do not perform live brokerage execution or place mock trades on external brokerages.
- Gated write operations to GitHub unless `ALLOW_GITHUB_WRITE=true` is set.
