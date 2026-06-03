# Information Flow Map

This document maps how intelligence should move through Pickaxe Capital / AI Habitat OS after Phase 2D.

## Operating Truth

- Website = cockpit.
- Obsidian = private memory.
- CEO B = decision layer.
- Source Hub = trust layer.
- Mission Control = overview layer.
- Watchlists = research universe.
- Archive = saved intelligence memory.
- Agents = planned/future operators, not live autonomous workers.

## Primary Flow

```text
Sources
  -> Source Hub
  -> Watchlists / Signals / Alerts / Archive / Dashboard
  -> CEO B Review
```

### Meaning

- Sources enter as manual/demo/local source candidates.
- Source Hub assigns trust level, owner, route usage, safety notes, and escalation rules.
- Watchlists, Signals, Alerts, Archive, and Dashboard should consume cleaned source state, not raw private memory.
- CEO B decides what becomes public-safe research memory or a future build task.

## Route Flows

### Sources -> Source Hub -> Routes -> CEO B Review

- Source Hub validates where an idea came from.
- Watchlists need source-backed thesis cards.
- Signals need source-backed research context.
- Alerts need source-trigger context.
- Archive stores reviewed source memory.
- Dashboard/Mission Control summarizes cleaned source state only.
- CEO B remains final decision layer.

### Watchlists -> Mission Control

- Watchlists define research universe buckets, tickers/themes, thesis snippets, catalysts, and source gaps.
- Mission Control should summarize Watchlists as watchlist pulse, priority buckets, source gaps, and next review actions.
- Watchlists should not present live quotes or direct trade calls.

### Signals -> Alerts / Source Hub / Archive

- Signals are research signals, not trading signals.
- A signal should point back to Source Hub for source basis.
- If a signal needs CEO B attention, it can become an Alerts Desk review packet.
- If reviewed or rejected, it can move into Archive for memory.
- Risk Desk can block weak or unsourced signals before escalation.

### Bookmarks -> Source Hub / Archive / CEO B Review

- Bookmarks are private/user-imported source candidates.
- Bookmarks should be cleaned before they become public-facing summaries.
- Source Hub can classify bookmark-derived source candidates.
- Archive can store cleaned bookmark intelligence.
- CEO B Review can decide whether a bookmark idea matters.
- Raw private bookmark URLs should not be published into public frontend files.

### Obsidian -> Local Handoff -> Codex/ChatGPT Context

```text
Obsidian private vault
  -> /ai-handoff and /source-hub-staging on local server only
  -> Codex / ChatGPT context
  -> cleaned public-safe planning or implementation
```

- Obsidian remains private memory.
- `/ai-handoff` and `/source-hub-staging` can include selected local notes when the local server can read the vault.
- The static public site should not fetch or publish raw Obsidian note contents.
- Codex should use handoff text as context, not as content to publish blindly.

### Archive -> Learning Ledger / CEO B Review Memory

- Archive stores reviewed intelligence memory.
- Learning Ledger should receive only verified lessons, rules, and playbooks.
- CEO B Review can pull old archive items back into active review when needed.
- Archive should become the long-term memory layer after source verification.

### Risk -> Blocks Escalation

- Risk & Rules sets the hard boundaries.
- Risk Desk blocks unsourced escalation, weak confidence, execution language, fake live claims, and private data leaks.
- Risk gates apply before Signals become Alerts, Watchlists gain conviction, or Options packets become visible.

### Agents -> Ownership Layer Only

- Agents currently represent planned/local ownership roles.
- They do not run live autonomous jobs.
- They do not fetch live data, scrape, execute, or make final decisions.
- Agent ownership language should say planned, placeholder, local-only, research-only, or manual review where appropriate.

## Decision Gate Pattern

```text
Candidate idea
  -> Source attached?
  -> Source confidence labeled?
  -> Risk note attached?
  -> Private data removed?
  -> Route owner assigned?
  -> CEO B review?
```

If any answer is no, the idea should remain in Source Hub, Archive draft, or local/private memory.

## System Layer Responsibilities

| Layer | Responsibility | Must Not Do |
| --- | --- | --- |
| Website cockpit | Show public-safe state, routes, review queues, and planned workflows. | Publish private notes or claim live integrations. |
| Obsidian memory | Store private strategy, sketches, logs, and raw thinking. | Become public frontend content automatically. |
| Source Hub | Verify source type, trust, route, owner, and escalation rules. | Scrape, call live providers, or fake connected states. |
| Mission Control | Summarize cleaned system state for CEO B. | Pretend it has live market data or execution authority. |
| Watchlists | Organize research universe. | Present unsourced conviction as fact. |
| Archive | Store reviewed intelligence memory. | Store raw private data publicly. |
| Risk Desk | Block unsafe escalation. | Override CEO B or execute anything. |
| CEO B | Final decision layer. | Be replaced by autonomous agents. |
