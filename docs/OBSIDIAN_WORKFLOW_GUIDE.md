# Obsidian Workflow Guide

This guide explains how B should use Obsidian with Pickaxe Capital / AI Habitat OS.

## Core Boundary

- Website = cockpit.
- Obsidian = private memory.
- CEO B = decision layer.
- Codex = builder.
- ChatGPT = strategy/prompt layer.

Obsidian is not a public content source. It is a private thinking, memory, and strategy vault.

## What Goes In Obsidian

- Raw strategy notes.
- 20-section hand-drawn blueprint notes.
- Visual references and taste notes.
- Codex session logs.
- ChatGPT planning prompts.
- Private CEO B decisions.
- Watchlist thoughts before they are cleaned.
- Source notes that are not ready for public display.
- Lessons, mistakes, and rules that need review.
- Personal operating-system ideas.

## What Should Never Be Public

- Raw private notes.
- Private vault paths.
- Personal financial details.
- Private URLs or bookmarks.
- Screenshots that expose accounts, messages, or private context.
- API keys, tokens, provider credentials, or account identifiers.
- Unreviewed strategy notes.
- Any note that B has not explicitly approved for public-safe summary.

## How `/ai-handoff` Fits

`/ai-handoff` is a local server endpoint generated from:

- `AGENTS.md`
- `PROJECT_STATUS.md`
- `NEXT_STEPS.md`
- selected local Obsidian notes, only when the local server can read the private vault

Use it before future Codex or ChatGPT sessions so the AI receives current project context. It should be copied/pasted as context, not published into the public frontend.

## How `/source-hub-staging` Fits

`/source-hub-staging` is the parallel local handoff/status route. It can carry the same local project context and selected private memory for AI handoff.

On GitHub Pages, Source Hub should not fetch `/source-hub-staging` in a way that causes public 404s. Public pages may mention it as a local-only workflow.

## How Codex Should Use Handoff Text

Codex should:

- Treat handoff text as context.
- Extract current route, status, safety, and next-step truth.
- Convert private memory into cleaned implementation decisions only when B asks.
- Keep raw vault contents out of `public/`.
- Keep Obsidian local-only.
- Ask B before publishing any cleaned summary that comes from private notes.

Codex should not:

- Copy raw Obsidian note contents into frontend files.
- Expose private vault paths publicly.
- Build a public note browser.
- Add in-browser vault readers.
- Treat private notes as source citations for public claims.

## How B Can Store Visual Blueprint Work

Recommended Obsidian note structure:

```text
Pickaxe Capital/
  20 Section Blueprint/
    Sketch Notes.md
    Route Grouping Ideas.md
    Visual References.md
    Things I Hate In Current UI.md
    Next Build Decision.md
```

Use `docs/VISUAL_BLUEPRINT_INTAKE_TEMPLATE.md` as the public-safe bridge from sketch notes into the repo.

## How B Can Store Session Logs

Suggested notes:

- `Codex Session Logs/YYYY-MM-DD Phase 2E Planning Pack.md`
- `ChatGPT Strategy Sessions/YYYY-MM-DD Source Hub Followup.md`
- `Decisions/CEO B Next Sprint Choice.md`

Each note should include:

- what changed
- what passed validation
- what is still off limits
- next recommended choice
- what B actually chooses

## Public-Safe Summary Rule

Before any Obsidian idea goes into the website:

1. Remove private path details.
2. Remove personal/private strategy language.
3. Remove private URLs.
4. Convert raw thought into public-safe product copy or architecture notes.
5. Label anything uncertain as planning, prototype, manual, or local-only.
6. Get CEO B approval.

## Practical Workflow

1. B writes/draws freely in Obsidian.
2. B fills `docs/VISUAL_BLUEPRINT_INTAKE_TEMPLATE.md` or asks Codex to help translate notes into it.
3. Codex reads the handoff and repo docs.
4. Codex proposes a sprint plan.
5. B approves one sprint.
6. Codex builds or documents only that sprint.
7. Status docs and tracker are updated.

## Hard No

- Do not publish raw Obsidian notes into `public/`.
- Do not expose private vault paths publicly.
- Do not read Obsidian in-browser.
- Do not create a public file that mirrors private notes.
- Only sanitized local handoff summaries can inform Codex/ChatGPT sessions.
