# Signal Engine Spec

The signal engine creates research alerts, not trades.

## Required Output

Every signal should include:

- symbol
- side
- exact option contract
- expiration
- strike
- bid, ask, mid, max limit idea
- volume and open interest
- thesis
- entry trigger
- invalidation
- target
- risk gate
- Webull verification action
- alert blueprint story

## Scoring Inputs

- liquidity
- open interest
- bid/ask spread
- delta zone
- underlying move
- moneyness
- catalyst context
- TTT alignment

## Current Limitation

The OpenAI API key is still quota/billing-limited, so the signal engine is currently rules/data-based. Once billing/quota is active, the AI research layer can synthesize deeper reasoning on top of these signals.

