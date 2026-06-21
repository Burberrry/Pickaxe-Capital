# Pickaxe Starlight Signature System Scope

Status: Docs-only visual-system scope.
Date: 2026-06-21.
Authority: CEO B.
Runtime authority: None.

## Signature Role

The Starlight Field is a signature Pickaxe Capital background system: a quiet living sky behind the public brand and internal AI Habitat OS. It should create depth, ritual, and recognition without competing with research content.

Phase 7 remains locked. This document defines a possible V2 direction only.

## Visual Direction

- natural, live-feeling stars rather than a repeated pattern;
- deep black and charcoal atmosphere;
- restrained ivory, silver, antique-gold, and champagne-gold points;
- subtle parallax-like depth created within one canvas;
- rare random shooting stars;
- calm motion with no arcade, glitter, or cyberpunk effect;
- enough negative space for premium typography and readable dashboards.

## Depth Layers

A future implementation may use three bounded logical layers inside the existing canvas:

1. distant, small, slow, low-opacity stars;
2. middle-depth stars with restrained twinkle;
3. sparse foreground stars with slightly stronger presence.

Layering must remain decorative and must not imply live telemetry.

## Shooting Stars

- random, rare, and non-patterned;
- short duration and soft trail;
- no more than one active shooting star;
- avoid crossing primary reading areas when practical;
- disable motion under reduced-motion preference;
- no interaction, sound, click target, or product meaning.

## One-Canvas Rule

- exactly one global Starlight canvas;
- `aria-hidden`;
- `pointer-events: none`;
- fixed behind content;
- no route-specific duplicate canvases;
- no second constellation canvas;
- all future layers must be drawn inside the existing owner system.

## Reduced-Motion And Lifecycle Rules

- reduced motion renders a stable, non-animated field;
- hidden tabs pause animation and resume safely;
- resize work is throttled through the existing animation-frame pattern;
- route changes do not reinitialize or duplicate the system;
- motion must never be required to understand content.

## Performance Caps

A future implementation must preserve or improve the current safeguards:

- capped device-pixel ratio;
- bounded star count based on viewport area;
- approximately 30 FPS or an equivalent bounded cadence;
- transforms/opacity or efficient canvas drawing only;
- one active animation loop;
- one active shooting-star object at most;
- no external dependency, WebGL requirement, or large texture asset;
- no measurable input blocking or horizontal overflow.

Exact caps must be measured against the current Phase 7 baseline before code changes.

## Future Constellation / Asterism Layer

A later phase may add extremely subtle asterisms:

- sparse lines that appear only occasionally or at very low opacity;
- no literal navigation, data, or predictive meaning;
- no dense constellation map;
- no fake astronomy claims;
- no interference with text or controls.

An optional decorative Pickaxe asterism may be explored as a rare brand motif. It must be abstract, tasteful, and subordinate to the official circular crossed-pickaxe logo. It must not become an alternate company logo.

## Browser QA Plan

Any authorized implementation must test:

- `/`, `#/alerts`, `#/dashboard`, `#/research`, `#/source-hub`, `#/archive`, `#/staging`, and `#/ceo-b-profile`;
- desktop `1280x720`;
- mobile `390x844`;
- one canvas only;
- zero console errors;
- no document-level horizontal overflow;
- controls remain clickable;
- text contrast and mask visibility remain readable;
- hidden-tab pause/resume;
- reduced-motion static state;
- resize stability and pixel-ratio cap;
- locked V3.1 and route behavior unchanged.

## Hard Stops

Stop if work requires a second canvas, route/product changes, new data or telemetry, interaction meaning, a dependency, WebGL-only rendering, sound, excessive density, reduced-motion regression, hidden-tab regression, content-readability loss, or edits outside a separately authorized visual implementation scope.

## Next Bounded Implementation Sprint

`Pickaxe Starlight Field V2 — luxury living sky implementation`
