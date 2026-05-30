# CODEX PROMPT — Add CEO B / Founder Profile Feature

Continue from the existing Pickaxe Capital repo. Do not rebuild from scratch. Do not duplicate pages. Add this feature cleanly.

## Feature name
CEO B / Founder Profile

## Routes
Create two routes:

1. Public route:
`/about-founder`

2. Paid app route:
`/app/ceo-b`

## Purpose
This page explains the founder/CEO B personality, operating style, strengths, blind spots, ideal environment, and why Pickaxe Capital is built around CEO B as the command layer.

It should make the product feel:
- founder-led
- premium
- intelligent
- human
- strategic
- trustworthy

## Visual style
Public page:
- Apple-clean
- premium editorial
- black, ivory, graphite, gold accents
- trustworthy and wealthy-client friendly

Paid app version:
- dark luxury command profile
- cyberpunk but clean
- CEO B identity card
- connected to Mission Control and AI Council

Do not make it cheesy. Do not make it look like a resume.

## Asset
Use the reference image:
`assets/reference/ceo-b-nutshell-reference.png`

Copy it into the repo as:
`public/reference/ceo-b-nutshell-reference.png`

Do not rely on the image for runtime text extraction. Recreate the page as real components and real text.

## Suggested components
Create reusable components if helpful:

- `FounderProfileHero`
- `TraitCard`
- `StrengthCard`
- `BlindSpotCard`
- `VibeCheckBars`
- `FounderQuote`
- `IdealEnvironmentCard`
- `NorthStarGoal`

## Page title
The CEO B Profile

## Eyebrow
You in a Nutshell

## Hero headline
Quietly high-agency.

## Hero subtitle
Part strategist. Part builder. Part curious optimizer.

## Hero copy
You treat AI like leverage, not entertainment. Your prompts are concise, intentional, and outcome-driven. You value clarity, speed, and depth—without fluff. You ask the kinds of questions that move projects forward, solve real problems, and sharpen ideas.

## Quote
“You don’t ask for attention. You ask for results.”

## Sections

### The Big Picture
Quietly high-agency.
Part strategist. Part builder. Part curious optimizer.
Systems over chaos.
Signal over noise.
Execution over performance.

### How You Think
Cards:
- Systems over chaos — You want frameworks, not random opinions.
- Pattern recognition — You connect dots quickly and prefer first-principles answers.
- Decision-oriented — You care about tradeoffs, pros/cons, and what actually works.
- Efficiency mindset — You respect time—yours and others’.

### Your Strengths
Cards:
- Highly adaptive — You shift between technical, creative, and strategic work with ease.
- Strong signal filter — You cut through noise and focus on what matters.
- Self-directed — You do not wait for direction—you take initiative.
- Low ego, high standards — You want quality, not validation.

### What Stands Out
You get to the point, skip the fluff, and expect precision. That is rare.

### You Value
- Clarity over theatrics
- Leverage over busywork
- Competence over hype
- Depth over fluff
- Independence and control

### You In Action
- Ask with intent
- Provide enough context to get quality
- Iterate and refine
- Look for the best solution, not the easiest
- Think long-term, not just short-term wins

### Your Vibe
Explorer mind.
Builder energy.
Strategist heart.

### Potential Blind Spots
- High standards can lead to impatience with mediocre work or people.
- You may under-communicate expectations.
- Tendency to solve things yourself instead of delegating.
- Over-optimization can delay good-enough action.

### Ideal Environment
- Autonomy
- Challenge
- Freedom to create
- People who level up the room
- Meaningful impact

### Vibe Check
Show progress bars:
- Curiosity: 9/10
- Analytical: 8.5/10
- Creativity: 8/10
- Execution: 9.5/10
- Discipline: 8.5/10

### Final Score
9/10
High-impact human.

### In One Line
You are the kind of person who builds the playbook while winning the game.

## North-star goal
Include this exact section somewhere on the page or in the paid app version:

FINAL GOAL

Pickaxe Capital becomes:

- my AI executive
- my market intelligence empire
- my life optimization system
- my memory system
- my learning system
- my automation system
- my decision engine

Final emotional goal:

CEO B opens Pickaxe Capital and feels like:

“I am commanding a living autonomous intelligence civilization.”

## Integration
Add a public nav link:
- About Founder → `/about-founder`

Add paid app sidebar/user-menu link:
- CEO B Profile → `/app/ceo-b`

Connect language to:
- Mission Control
- AI Council
- Archive
- Vision Map
- Methodology page

## Implementation notes
- Keep the page responsive.
- Keep text editable in code, not embedded only in image.
- Use the existing Pickaxe Capital design system.
- Do not change Archive build order.
- Do not remove existing routes.

## Checks
After implementation run:

```bash
npm run check:project
npm run build
```

Report:
- files changed
- routes added
- build status
- any errors
