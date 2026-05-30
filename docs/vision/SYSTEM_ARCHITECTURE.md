# System Architecture

Current architecture is intentionally simple:

- `server.mjs`: local Node server, API routes, market data, options data, signals, checklist, research fallback
- `public/index.html`: app shell and pages
- `public/app.js`: client state, rendering, interactions, mock agent habitat behavior
- `public/styles.css`: visual system and animations
- `data/*.json`: local memory for runs, alerts, lessons, journal, vision map, build log
- `docs/vision/*.md`: project memory domains

## Data Flow

Watchlist data feeds:

- market cards
- selected ticker state
- flow proxy
- desk brief prompt
- signal generator
- checklist state
- agent habitat context

## Rule

Keep routes and data shapes easy to replace later with real agent orchestration, database storage, premium market data, and OpenAI reasoning once quota/billing is active.

