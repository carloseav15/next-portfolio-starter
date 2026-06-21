# Carlos Arancibia Portfolio

> [carlos-arancibia.com](https://www.carlos-arancibia.com)

[![CI](https://github.com/carloseav15/personal-web/actions/workflows/ci-firebase.yml/badge.svg)](https://github.com/carloseav15/personal-web/actions/workflows/ci-firebase.yml)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100-brightgreen)]()
[![Accessibility](https://img.shields.io/badge/Accessibility-100-success)]()

Portfolio website built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, and MDX.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + CSS custom properties
- **Content**: MDX case studies
- **Testing**: Vitest + Testing Library + Playwright
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions (lint → typecheck → tests → build → deploy)

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run test` | Unit + component tests |
| `npm run test:e2e` | Playwright E2E tests |
| `npm run build` | Static export |

## Project Structure

```
├── app/              Next.js App Router pages and layouts
├── components/       Reusable UI components (Button, Card, Section, etc.)
├── lib/              Data layer (profile, case studies, links, proof system)
├── content/          MDX case study files
├── tests/            Unit, component, and E2E tests
├── public/           Static assets (images, resume PDF)
└── docs/             Internal design documentation
```

## Features

- **Server-first architecture** — React Server Components with minimal client bundles
- **Full light/dark theme** — System preference detection with manual override
- **WCAG 2.2 AA** — Verified via automated contrast tests and Lighthouse 100
- **Structured SEO** — JSON-LD, sitemap.xml, robots.txt, OG/Twitter cards on every route
- **Static export** — Deployed to Firebase Hosting with no server runtime
- **Optional analytics** — Privacy-first Plausible-compatible, off by default
