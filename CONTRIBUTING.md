# Contributing

This repository is primarily a personal portfolio and a reusable starter. Contributions should preserve both goals: the live site must stay honest, and the template structure should remain easy to adapt.

## Local Setup

```bash
npm install
npm run dev
```

## Before Opening A Pull Request

Run the full local gate:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

## Contribution Guidelines

- Keep profile-specific content in `lib/data/`, `lib/links.ts`, `lib/caseStudies.ts`, and `content/case-studies/`.
- Keep reusable UI behavior in `components/`.
- Do not add unverified claims, fake metrics, fake links, or placeholder proof labeled as verified.
- Prefer small, reviewable changes with clear motivation.
- Keep screenshots, resumes, and other personal assets out of generic template examples unless they are intentionally part of the live portfolio.

## Pull Request Expectations

- Explain the user-facing or maintainer-facing reason for the change.
- List the validation commands you ran.
- Include screenshots for visible UI changes when practical.
- Call out known limitations instead of hiding them.
