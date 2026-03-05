# Carlos Arancibia Portfolio (2026)

Portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, and MDX.

## Product Direction
- Goal: maximize interview conversion for Software Engineer I/II roles.
- Positioning: `Software Engineer | Full-Stack & Mobile`.
- Narrative anchor: production ownership, DigiApp delivery, Vanilla JavaScript e-commerce delivery, and active platform continuity.
- Runtime: static export (`output: "export"`) for Firebase Hosting.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- MDX case studies from `/content/case-studies`
- Optional privacy-first analytics script (Plausible-compatible)
- Test stack: Vitest + Testing Library + Playwright

## Local Setup
```bash
npm install
npm run dev
```

## Scripts
```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Content Model (Source of Truth)
- Profile contracts: `/Users/carancibia/Downloads/personal-web/lib/profile.ts`
- Proof contracts: `/Users/carancibia/Downloads/personal-web/lib/proof.ts`
- External links and evidence lane: `/Users/carancibia/Downloads/personal-web/lib/links.ts`
- Case-study metadata/index: `/Users/carancibia/Downloads/personal-web/lib/caseStudies.ts`

### Timeline Policy
- DATEC LATAM: `Aug 2014 - Dec 2014`
- Tismart: `Jan 2015 - May 2016`
- Iglesia Tiempo de Cambio: `Jun 2016 - Dec 2019`
- V@COMM: `Jan 2017 - Jun 2024`
- Digicorp: `Dec 2019 - Jun 2024`
- Diaz Brothers: `Jul 2024 - Dec 2025`
- MatchdayOS product: `Jan 2026 - Present`

### Active Platforms Policy
Employment timeline and platform continuity are represented separately.

Platforms marked active in production:
- Octopus Payments Platform
- Tiempo de Cambio Platform
- Digicorp e-Commerce Platform

### Verified Store Links
- Android (Google Play): `https://play.google.com/store/apps/details?id=digicorp.com.bo.main.digiecommerce&hl=es_419`
- iOS (App Store Bolivia): `https://apps.apple.com/bo/app/digiapp-bolivia/id1527479911`

## Route Coverage
- `/` Home (editorial conversion flow + compact KPI strip)
- `/about` Career Arc
- `/case-studies`
- `/case-studies/[slug]`
- `/resume`
- `/contact`

## MDX Workflow
1. Add or update `.mdx` files under `/Users/carancibia/Downloads/personal-web/content/case-studies`.
2. Keep section structure stable: Context -> Problem -> Constraints -> Approach -> Results -> Learnings.
3. Update metadata in `/Users/carancibia/Downloads/personal-web/lib/caseStudies.ts`.
4. Run checks before merge.

## Analytics (Optional)
No analytics script loads unless `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set.

Optional env vars:
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_PLAUSIBLE_SRC` (defaults to `https://plausible.io/js/script.js`)

## Build and Deploy
```bash
npm run build
firebase deploy --only hosting --project <your-project-id>
```

Build output is generated at `/Users/carancibia/Downloads/personal-web/out`.

## CI
Workflow: `/Users/carancibia/Downloads/personal-web/.github/workflows/ci-firebase.yml`

Verify stage runs:
1. lint
2. typecheck
3. unit/component tests
4. e2e tests
5. build

## Required GitHub Secrets
- `FIREBASE_SERVICE_ACCOUNT`
- `FIREBASE_PROJECT_ID`
