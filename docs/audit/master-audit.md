# Master Audit

## Principal Hireability UX Auditor (Conversion + Accessibility + Product Narrative)

Date: 2026-02-22  
Repository: `./`

## Executive Summary
This portfolio is already technically stable and deployable, but hireability conversion is limited by missing proof quality in critical trust moments. The strongest claim (Digicorp public app ownership) is still supported by placeholder assets and placeholder links, which creates immediate recruiter doubt even when the copy is solid.

The site is close to interview-ready. The main gap is not architecture; it is trust completion. If you replace placeholders with verifiable links/screenshots and tighten a few interaction/accessibility details (theme menu semantics, micro-readability, CTA clarity), the perceived hiring risk drops fast.

## Role, Mission, and Decision Hierarchy (Locked)
Role: **Principal Hireability UX Auditor**  
Mission: maximize interview probability in under 2 minutes while minimizing perceived hiring risk.

Decision hierarchy:
1. Recruiter conversion/hireability
2. Accessibility compliance (WCAG 2.2 AA)
3. Visual differentiation without sacrificing clarity
4. Personal style polish

Non-goals:
1. Portfolio-art aesthetics that lower clarity
2. Animation-first experimentation
3. Stack rewrites without conversion or accessibility impact

## Scope and Method
### Routes audited
1. `/`
2. `/about`
3. `/case-studies`
4. `/case-studies/digicorp`
5. `/resume`
6. `/contact`

### Evidence sources
1. Source audit of UI, navigation, theme, and content components
2. Manual 10-second scan and 2-minute recruiter journey simulation
3. Automated checks:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build`
4. Lighthouse on static export (`out`) served locally

### Technical baseline result
1. Lint: pass
2. Typecheck: pass
3. Build/export: pass
4. Static routes generated and intact

## Objective Baseline (Lighthouse)
Run context: static files from `out` served with `http-server`.  
Note: best-practices penalties include local static-server console 404 noise from route-style differences (`/about` vs `/about.html`) during audit execution.

| Route | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| home | 83 | 100 | 96 | 100 |
| about | 86 | 100 | 96 | 100 |
| case-studies | 86 | 100 | 96 | 100 |
| case-studies-digicorp | 86 | 100 | 96 | 100 |
| contact | 84 | 100 | 96 | 100 |
| resume | 81 | 100 | 96 | 100 |

Additional observed issue:
1. `resume` route fails `bf-cache` because embedded PDF plugin is not eligible for browser back/forward cache.

## Conversion Baseline
### 10-second scan test (recruiter lens)
Pass:
1. Role and seniority signal are visible immediately.
2. Digicorp is framed as primary proof block.
3. Primary CTA (`View Case Studies`) is clear.

Friction:
1. Proof links are placeholders, so trust collapses on click.
2. Digicorp visual proof is explicitly marked placeholder.
3. Openness is not explicit in first viewport.

### 2-minute recruiter journey (Home -> Digicorp -> Resume -> Contact)
Pass:
1. Flow is linear and understandable.
2. Case study structure is scannable (`At a glance` helps).
3. Resume and contact routes are easy to reach.

Friction:
1. Credibility links do not validate real production claims yet.
2. Contact confidence is reduced by placeholder social/email values.
3. Theme control behavior is usable, but semantics need cleanup for robust accessibility confidence.

## Current Scorecard (Weighted, Locked Model)
Model weights:
1. Hireability conversion: 40
2. Accessibility WCAG 2.2 AA: 25
3. IA/scanability: 20
4. Visual hierarchy/trust polish: 15

| Dimension | Weight | Rating (0-5) | Points |
|---|---:|---:|---:|
| Hireability Conversion | 40 | 3.5 | 28 |
| Accessibility WCAG 2.2 AA | 25 | 4.2 | 21 |
| IA / Scanability | 20 | 3.5 | 14 |
| Visual Hierarchy / Trust Polish | 15 | 3.7 | 11 |
| **Total** | **100** |  | **74** |

Interpretation: strong baseline, moderate conversion risk, immediate upside if proof and trust blockers are removed.

## Top 10 Findings (Impact-Ordered)
1. F-01: External proof/contact links are placeholders.
2. F-02: Digicorp proof media is placeholder, not verifiable evidence.
3. F-03: Theme control uses menu semantics with radio behavior; accessibility semantics should be normalized.
4. F-04: Home above-fold does not explicitly state openness.
5. F-05: Resume embed reduces performance and fails bfcache.
6. F-06: Metadata microtext (`text-xs`) is readable but borderline for comfort in long scans.
7. F-07: Card rhythm is consistent but visually flat in repeated sections.
8. F-08: Footer trust links are incomplete (no LinkedIn in global footer).
9. F-09: Case-study list proof line can be made more visually scannable.
10. F-10: Contact conversion can improve with one-click confidence cues (availability + expected response + direct channels already partially present).

See full mapping, impact, severity, and files in `docs/audit/findings-matrix.md`.

## Master Remediation Plan
Implementation-ready plan is closed and prioritized in `docs/audit/remediation-roadmap.md`:
1. P0 (1-2 days): conversion blockers + a11y critical semantics
2. P1 (3-5 days): hierarchy and scanability improvements
3. P2 (1 week): polish and consistency

## Final Validation Protocol (Reproducible)
1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`
4. Keyboard-only pass: skip link -> nav -> theme -> CTAs -> footer
5. Screen reader pass: theme control state, external-link cues
6. Contrast pass in light/dark for body + metadata + CTA states
7. Recruiter journey pass (<2 min): Home -> Digicorp proof/case -> Resume -> Contact
8. Hydration/theme regression pass: `system`, `light`, `dark` without mismatch/flicker

## Open Risks / Assumptions
1. Placeholder URLs and placeholder screenshot are conversion blockers until replaced.
2. Lighthouse best-practices console errors were reproduced in local static server context; validate once on Firebase preview/prod hosting.
3. No route/slugs or stack changes are required to resolve current P0/P1 issues.

## Annex A: Expected Before/After Capture List
Use this checklist during implementation QA:
1. Home above-the-fold (before/after)
2. Digicorp proof block (before/after)
3. Theme control open/closed, light/dark/system (before/after)
4. Case studies list cards (before/after)
5. Contact action block (before/after)
6. Mobile home first viewport + nav/toggle interaction (before/after)

## Annex B: QA Checklist
- [ ] Exactly one primary CTA intent above fold.
- [ ] Real proof links resolve to valid external destinations.
- [ ] Real Digicorp screenshot present and legible.
- [ ] Theme control passes keyboard + SR semantics.
- [ ] Text contrast passes WCAG 2.2 AA in light/dark.
- [ ] Focus-visible ring appears on all interactive controls.
- [ ] Recruiter can complete proof -> resume -> contact in under 2 minutes.
