# AI Workflow and Accountability

## Delivery boundaries
- You define the problem boundaries, acceptance criteria, and domain rules.
- You review architecture decisions before they are merged into production.
- You approve all code changes and deployment readiness.

## Accountability model
- AI accelerates implementation and iteration speed.
- You remain accountable for architecture quality, correctness, compliance, and business impact.
- AI output is treated as draft implementation until it passes your review and validation checks.

## Recommended operating loop
1. Define goals, constraints, and non-negotiable rules.
2. Use AI to draft implementation slices and test scaffolding.
3. Review code, verify assumptions, and request targeted revisions.
4. Run lint, typecheck, build, and scenario checks before merge.
5. Deploy only after explicit approval on risk and quality.
