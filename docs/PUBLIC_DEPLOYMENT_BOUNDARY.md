# Public Deployment Boundary

## Decision

GitHub Pages publishes `public/` only. The repository root is not a public web artifact.

The public Pickaxe Capital application is a static/demo research prototype. GitHub Pages does not run `server.mjs`, external market services, options services, AI model calls, broker connections, or trade execution.

## Public-Safe Artifact

The `public/` directory may contain only assets required by the browser application:

- HTML, CSS, and JavaScript used by the static site
- Sanitized static/demo product data
- Public brand and interface assets
- Public-safe reference images intentionally used by the site

## Never Deploy

Do not place these materials in `public/`:

- Private research notes or raw research archives
- Imported bookmarks or browser exports
- Source PDFs or licensed source material
- Obsidian vault content
- Local filesystem paths
- SQL files or database exports
- Development scripts
- `.env` files, credentials, tokens, or API keys
- Unsanitized ingestion output

Future ingestion systems must sanitize, classify, and explicitly approve data before any public display. Private source material remains local unless a separate publication review confirms it is public-safe.

## Local Server Boundary

`server.mjs` is for local development. Live-service code is disabled by default and requires `PICKAXE_ENABLE_LIVE_SERVICES=true` for explicit local development. That mode is not used by GitHub Pages and does not change the public static/demo product truth.

Run `npm run check:deploy-boundary` before deployment changes.
