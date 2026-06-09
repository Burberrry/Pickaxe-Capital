# Pickaxe Source and Memory Rules

Status: Governing trust and privacy rules.

## Source Hierarchy

1. Official filings, company investor relations, regulators, and primary publications
2. Approved market-data snapshots with known provenance
3. Reputable secondary research with visible methodology
4. Manual observations and commentary
5. Speculation, folklore, or unverified claims

Lower tiers may create questions. They cannot independently create high-confidence packets.

## Market Cipher Room Classifications

- `Verified Fact`: independently reviewable and source-linked.
- `Interpretation`: reasoned reading of verified facts.
- `Speculation`: hypothesis requiring more evidence.
- `Private Note`: local owner context that cannot enter public runtime.
- `Blocked`: unsafe, unverifiable, stale, private, or disallowed.

Source Hub verification is required before Cipher Room material enters a research packet.

## Pickaxe Research Center Rules

- Every report has source lineage, author/owner, date, status, and review state.
- Reports distinguish facts, interpretation, and speculation.
- No copied third-party reports or implied affiliation.
- Unsourced investment claims are blocked.
- Theme research must record disconfirming evidence.

## Security Research Cockpit Rules

Each ticker surface must expose:

- source lineage
- freshness
- market-hours context
- fundamental source
- technical observation timestamp
- short-interest methodology
- options snapshot provenance
- volatility methodology
- CEO B review state

## Memory Flow

```text
Reviewed Packet
  -> Outcome
  -> Sanitized Archive Record
  -> Learning Ledger Entry
  -> Proposed Rule
  -> CEO B Decision
  -> Versioned Rule Update
```

## Options Alerts Archive Outcome

Archive receives the reviewed packet as an immutable-at-decision, sanitized snapshot. It stores packet and rule versions, source references, contract and volatility snapshots, hard blocks, warnings, CEO B decision, rationale, route outcome, privacy tier, later outcome, and linked lesson IDs.

Archive Outcome is internal company memory, not public performance proof. Later outcomes may append a new review record but must not rewrite the original source, contract, volatility, risk, or decision state.

## Options Alerts Learning Ledger Handoff

Learning Ledger receives an explicit lesson candidate only when an observed outcome or blocked packet reveals a reusable process lesson. Each candidate links to its Archive Outcome and separates:

- observed result
- process quality
- mistake or strength
- lesson extracted
- proposed rule, checklist, source, design, or prompt improvement
- CEO B adoption decision

No lesson changes system rules automatically.

## Privacy Boundary

- Obsidian is a private owner notebook, not a public database.
- Raw vault content, local paths, personal notes, private URLs, and account data stay outside public files.
- Only cleaned, intentionally approved summaries may cross into project documentation or runtime.
- Performance Tracker data is private analytics by default.
- Founder OS data must remain separate from market research and public pages.

## Improvement Boundary

The system may propose lessons and rule changes. It cannot silently rewrite its own rules, scores, prompts, or product behavior. CEO B approval and a scoped Codex task are required.
