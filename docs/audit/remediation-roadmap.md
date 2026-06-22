# Remediation Roadmap

Date: 2026-02-22  
Goal: interview conversion uplift with recruiter-first trust completion and WCAG-safe interaction cleanup.

## Execution Model (Locked)

1. P0: 1-2 days
2. P1: 3-5 days
3. P2: 1 week

## P0 (1-2 Days) — Conversion Blockers + A11y Critical

### P0-1 Replace all placeholder proof/contact links

Findings: F-01  
Files:

1. `./lib/links.ts`
2. `./app/page.tsx`
3. `./app/contact/page.tsx`
4. `./components/layout/Footer.tsx`

Actions:

1. Replace placeholder email, LinkedIn, GitHub, Google Play, and App Store URLs.
2. Verify all external links open with `target="_blank" rel="noopener noreferrer"` where applicable.

Done criteria:

1. Zero placeholder domains remain.
2. All links resolve with HTTP 200/valid destination.

### P0-2 Replace Digicorp illustrative media with real proof

Findings: F-02  
Files:

1. `./public/images/digicorp-app-proof.webp`
2. `./lib/links.ts`
3. `./app/page.tsx`

Actions:

1. Use a real production screenshot (store listing, analytics, release panel, or app UI evidence).
2. Update alt text and caption to factual wording.

Done criteria:

1. Home proof block contains real evidence with clear context.
2. Caption no longer includes placeholder wording.

### P0-3 Normalize theme selector accessibility pattern

Findings: F-03  
Files:

1. `./components/theme/ThemeToggle.tsx`

Actions:

1. Pick one pattern and implement fully:
   - Option A: button + menu (menuitem only) OR
   - Option B: button + radiogroup/listbox for `system/light/dark`.
2. Align keyboard behavior with selected pattern.
3. Preserve `theme-preference` persistence and hydration-safe theme script.

Done criteria:

1. Keyboard traversal is predictable.
2. Screen reader announces control type, state, and selected option correctly.
3. No hydration mismatch warnings.

## P1 (3-5 Days) — Hierarchy, Scanability, and Trust Polish

### P1-1 Surface openness above fold

Findings: F-04  
Files:

1. `./app/page.tsx`

Actions:

1. Add one concise line in hero or quick snapshot.
2. Keep wording calm and factual.

Done criteria:

1. Recruiter sees role openness without scrolling.

### P1-2 Improve resume route performance tradeoff

Findings: F-05  
Files:

1. `./app/resume/page.tsx`

Actions:

1. Consider replacing always-on iframe with explicit `Open preview` action.
2. Keep direct PDF download/open actions visible.

Done criteria:

1. Resume remains one-click accessible.
2. Performance/bfcache penalty is reduced or explicitly justified.

### P1-3 Increase metadata readability and reduce tiny uppercase noise

Findings: F-06  
Files:

1. `./components/ui/Section.tsx`
2. `./app/case-studies/page.tsx`
3. `./components/case-studies/CaseStudyArticle.tsx`

Actions:

1. Raise size/contrast of metadata text.
2. Keep uppercase only where it improves scanning.

Done criteria:

1. Metadata is readable on mobile and desktop in both themes.

### P1-4 Break section flatness without adding visual noise

Findings: F-07  
Files:

1. `./app/page.tsx`
2. `./components/ui/Card.tsx`
3. `./app/globals.css`

Actions:

1. Use subtle alternation in section surfaces.
2. Strengthen heading/body contrast rhythm.
3. Keep shadows and motion restrained.

Done criteria:

1. Adjacent blocks no longer feel interchangeable.

### P1-5 Add LinkedIn to footer trust lane

Findings: F-08  
Files:

1. `./components/layout/Footer.tsx`
2. `./lib/links.ts`

Done criteria:

1. Footer exposes Email, LinkedIn, GitHub consistently.

### P1-6 Emphasize proof line on case-study cards

Findings: F-09  
Files:

1. `./app/case-studies/page.tsx`

Done criteria:

1. `Role · Timeline · Primary outcome` is visible in one quick glance.

## P2 (1 Week) — Final Polish and Regression Hardening

### P2-1 Add persistent low-friction contact cue

Findings: F-10  
Files:

1. `./components/layout/Nav.tsx`
2. `./app/page.tsx`

Done criteria:

1. User can reach contact action from top-level context with one decision.

### P2-2 Validate console/best-practices on Firebase preview

Findings: F-11  
Files:

1. Hosting preview URL + CI deployment checks

Done criteria:

1. Lighthouse best-practices no longer shows route-audit artifacts.

### P2-3 Strengthen theme-menu close behavior on focus transitions

Findings: F-12  
Files:

1. `./components/theme/ThemeToggle.tsx`

Done criteria:

1. Menu closes on blur/tab-out and focus returns predictably.

## Final QA Protocol (Must Pass)

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`
4. Keyboard-only flow: skip link -> nav -> theme -> content CTAs -> footer
5. Screen reader check: theme state and external-link new-tab cues
6. Contrast check in light/dark for body, metadata, buttons, links
7. Recruiter path (<2 min): Home -> Digicorp proof/case -> Resume -> Contact
8. Hydration check: no mismatch warnings in development runtime

## Ownership and Handoff Format

Each finding must close with:

1. PR link
2. Files changed
3. Before/after screenshot pair
4. QA evidence (keyboard, SR, contrast, build)
5. Status: Done / Blocked / Needs follow-up
