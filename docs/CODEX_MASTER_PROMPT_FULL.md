# Pickaxe Capital — Codex Handoff Master Prompt

Use this handoff pack in Codex to continue the Pickaxe Capital website.

## Add this pack to repo

- Put `assets/brand/pickaxe-capital-logo.png` at `public/brand/pickaxe-capital-logo.png`.
- Put `data/imports/Export all Folders.html` at `data/imports/Export all Folders.html`.
- Use `data/archive_*.csv` as validation/reference outputs for Archive import.
- Use `assets/images/*.png` in docs or as visual references for Codex.

## Confirmed Archive stats

- Total bookmark links: 31,504
- Unique URLs: 31,399
- Duplicate URL entries: 105
- Folders/subfolders: 913
- Max folder depth: 9
- Local file links: 26

## Build priority

1. Build **Archive** first.
2. Make `/app/alerts` the first paid app page.
3. Update sidebar with Archive.
4. Wire agent classification, memory, checklist, and Mission Control outputs.
5. Add Prediction Markets, AI Council, and Newsletter Studio placeholders.

## Safety

Pickaxe Capital provides research alerts, trade plans, probability interpretation, risk levels, agent analysis, and confidence scoring only. It does not place trades or bets automatically.

## Archive routes

- `/app/archive`
- `/app/archive/tree`
- `/app/archive/sources`
- `/app/archive/agents`
- `/app/archive/findings`
- `/app/archive/imports`
- `/app/archive/quarantine`

## Sidebar

1. ⚡ Alerts
2. ↯ Command
3. ◎ Archive
4. ◆ Prediction Markets
5. 📈 Options
6. ◈ Agents
7. ☑ Checklist
8. ▣ Memory
9. ✉ Newsletter
10. ⬡ AI Council
11. ◌ Vision Map
12. ◇ Data Sources
13. ✦ Ideas Vault
14. ▤ A-Z Build

## Codex command

Do not rebuild from scratch. Add Archive using the provided import file and CSV outputs as reference. Preserve all links. Deduplicate exact URLs but keep every folder appearance in `archive_source_locations`.


## Agent classification

- Source Librarian: parses and organizes everything
- Junk Filter: labels junk/noise/dead/local links without deleting
- Market Context Agent: market dashboards, macro, stock research
- Options Flow Hunter: options tools, flow, gamma, calculators
- Sentiment Scout: X/Twitter, Instagram, YouTube, social narratives
- GeoMacro Sentinel: Iran, oil, war, shipping, sanctions, outages
- Prediction Market Agent: Polymarket, Kalshi, probability markets
- AI / Build Agent: GitHub, Codex, OpenAI, Claude, automation tools
- Learning Archivist: education, strategy, lessons, saved patterns
- CEO B: final synthesis and priority decisions

## Required app additions

- `/app/alerts` alert cards with entry, stop, take profit, confidence, CEO B verdict, manual execution disclaimer.
- `/app/prediction-markets` for Polymarket and Kalshi unusual activity.
- `/app/ai-council` for multi-AI answers and disagreement tracking.
- `/app/newsletter-studio` for daily Pickaxe Capital Command Brief drafts.
