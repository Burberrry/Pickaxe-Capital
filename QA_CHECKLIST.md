# PICKAXE CAPITAL QA CHECKLIST

Run this after every patch.

## Route QA

- [ ] /home loads
- [ ] /mission-control loads
- [ ] /signals-desk loads
- [ ] /source-ledger loads
- [ ] /risk-gate loads
- [ ] /agents loads
- [ ] /memory loads
- [ ] /founder loads
- [ ] /pricing loads
- [ ] /legal loads

## Visual QA

- [ ] Starfield still works
- [ ] Obsidian / gold / gunmetal theme preserved
- [ ] Cards have readable contrast
- [ ] Mobile layout has no horizontal overflow
- [ ] Desktop layout does not feel cramped
- [ ] Status chips are clear
- [ ] CEO B seal does not look cheap
- [ ] Source / Risk / Silence states are visually distinct

## Product QA

- [ ] QQQ Research Card Flow is visible
- [ ] QQQ demo card appears in Signals Desk
- [ ] Source Ledger blocks unverified data
- [ ] Silence Gate supports No Output
- [ ] Risk Gate blocks incomplete cards
- [ ] CEO B Review is required before approval
- [ ] Memory Vault records an outcome
- [ ] Demo Data label appears
- [ ] Source Required label appears
- [ ] Timestamp Required label appears

## Compliance QA

- [ ] Research-only footer appears globally
- [ ] No fake live prices
- [ ] No fake performance numbers
- [ ] No trade execution language
- [ ] No personalized financial advice
- [ ] No guaranteed outcomes
- [ ] Options risk warning appears where options are mentioned
- [ ] Pricing does not promise profits
- [ ] CEO B Review is not described as a performance guarantee

## Technical QA

- [ ] No console errors
- [ ] No broken route navigation
- [ ] No broken buttons
- [ ] No broken mobile menu
- [ ] Escape behavior works for drawers/modals if present
- [ ] Focus states are visible
- [ ] Links are keyboard accessible
- [ ] Public build still deploys correctly
