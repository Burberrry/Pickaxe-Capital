# package.json Scripts Patch

The following scripts were appended to the `scripts` dictionary of `package.json` to configure the Pickaxe Agent City environment:

```json
{
  "scripts": {
    "agent": "node scripts/run-mission.mjs",
    "agent:server": "node scripts/agent-server.mjs",
    "check:agents": "node --check scripts/agent-server.mjs && node --check scripts/run-mission.mjs && node --check src/agent-ecosystem/config.mjs && node --check src/agent-ecosystem/route-engine.mjs && node --check src/agent-ecosystem/memory-store.mjs && node --check src/agent-ecosystem/openai-client.mjs && node --check src/agent-ecosystem/github-tools.mjs"
  }
}
```

## Running Scripts

- **`npm run check:agents`:** Resolves all syntax verification check points for the agent ecosystem modules.
- **`npm run agent:server`:** Starts the Node http API server on port 4328.
- **`npm run agent -- "Your Mission"`:** CLI command to plan a mission route.
