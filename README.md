# Next Portfolio Starter

Reusable engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, MDX case studies, static export, and automated quality checks.

This repository powers [carlos-arancibia.com](https://www.carlos-arancibia.com), but it is structured so other developers can use it as a template, replace the profile/content data, and ship a serious portfolio foundation.

[![CI](https://github.com/carloseav15/next-portfolio-starter/actions/workflows/ci-firebase.yml/badge.svg)](https://github.com/carloseav15/next-portfolio-starter/actions/workflows/ci-firebase.yml)

## What It Demonstrates

- Server-first portfolio architecture with Next.js App Router.
- Typed profile, proof, links, and case-study data.
- MDX case studies with reusable metadata.
- Static export for low-maintenance hosting.
- SEO primitives: canonical URLs, sitemap, robots, Open Graph, Twitter cards, and JSON-LD.
- Light/dark/system theme support with hydration-safe initialization.
- Unit, component, accessibility, and Playwright recruiter-flow tests.
- GitHub Actions release gate for format, lint, typecheck, tests, e2e, and build.

## Tech Stack

| Area      | Tooling                                       |
| --------- | --------------------------------------------- |
| Framework | Next.js App Router, static export             |
| Language  | TypeScript strict mode                        |
| UI        | React, Tailwind CSS v4, CSS custom properties |
| Content   | MDX case studies plus typed data modules      |
| Testing   | Vitest, Testing Library, jest-axe, Playwright |
| Hosting   | Firebase Hosting                              |
| CI/CD     | GitHub Actions                                |

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Use As A Template

1. Create a new repository from this template.
2. Install dependencies with `npm install`.
3. Replace profile data, links, case studies, resume, and site metadata.
4. Run the full quality gate.
5. Connect your preferred static host.

Recommended GitHub topics for forks:

```txt
nextjs, portfolio, typescript, tailwindcss, starter, mdx, developer-portfolio
```

## Scripts

| Command                | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Start the local Next.js dev server                 |
| `npm run format`       | Format supported source files                      |
| `npm run format:check` | Verify formatting without writing files            |
| `npm run lint`         | Run ESLint with zero warnings                      |
| `npm run typecheck`    | Run TypeScript checks                              |
| `npm run test`         | Run unit and component tests                       |
| `npm run test:e2e`     | Run Playwright against the static export in `out/` |
| `npm run build`        | Build the static export                            |

## Project Structure

```txt
app/                 Next.js routes, layouts, metadata, sitemap, robots
components/          Layout, theme, resume, case-study, and UI primitives
content/             MDX case-study bodies
lib/                 Typed profile/content data, links, SEO helpers, utilities
public/              Static assets and resume PDF
tests/               Unit, component, accessibility, and e2e tests
docs/                Design notes, content model, QA checklist, and audit notes
.github/             CI workflow and collaboration templates
```

## Customization Guide

1. Replace profile data in `lib/data/identity.ts`, `lib/data/experience.ts`, `lib/data/content.ts`, and `lib/data/skills.ts`.
2. Replace public links and proof metadata in `lib/links.ts`.
3. Add or edit case-study metadata in `lib/caseStudies.ts`.
4. Add case-study body content in `content/case-studies/*.mdx`.
5. Replace images in `public/images/`.
6. Replace the resume PDF in `public/resume/`.
7. Update `lib/site.ts` with your domain, default title, and SEO summary.

## Quality Gates

Before publishing changes:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

The GitHub Actions workflow runs the same release gate on pull requests and pushes to `main`.

## Deployment

The project is configured for static export and Firebase Hosting:

```bash
npm run build
firebase deploy --only hosting
```

The CI workflow deploys only from `main` and expects these GitHub secrets:

- `FIREBASE_SERVICE_ACCOUNT`
- `FIREBASE_PROJECT_ID`

## Known Limitations

- Case-study image slots are intentionally still placeholders; real screenshots/proof images should be added before treating a fork as publication-ready.
- The contact form currently simulates submission. Replace it with a real backend, form provider, or direct `mailto:` flow before relying on it for inbound opportunities.
- `npm audit` currently reports a moderate advisory through Next.js' internal `postcss` dependency even on the newest published Next.js version available during this update. See `SECURITY.md` for how this project tracks dependency advisories without accepting unsafe downgrades.

## License

MIT. See [LICENSE](LICENSE).
