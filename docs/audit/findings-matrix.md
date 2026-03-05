# Findings Matrix

Date: 2026-02-22  
Owner role: Principal Hireability UX Auditor

Scales:
1. Conversion impact: High / Medium / Low
2. A11y risk: Critical / Major / Minor / None
3. Effort: S / M / L
4. Priority: P0 / P1 / P2

| ID | Finding | Conversion Impact | A11y Risk | Effort | Priority | Affected Files | Acceptance Criteria |
|---|---|---|---|---|---|---|---|
| F-01 | External links are placeholders (`EMAIL`, LinkedIn, GitHub, store links). | High | None | S | P0 | `/Users/carancibia/Downloads/personal-web/lib/links.ts`, `/Users/carancibia/Downloads/personal-web/app/page.tsx`, `/Users/carancibia/Downloads/personal-web/app/contact/page.tsx`, `/Users/carancibia/Downloads/personal-web/components/layout/Footer.tsx` | All public links point to real, verified destinations. |
| F-02 | Digicorp proof image is placeholder and explicitly marked illustrative. | High | None | S | P0 | `/Users/carancibia/Downloads/personal-web/public/images/digicorp-app-proof.webp`, `/Users/carancibia/Downloads/personal-web/lib/links.ts`, `/Users/carancibia/Downloads/personal-web/app/page.tsx` | Replace with real production screenshot and neutral caption. |
| F-03 | Theme selector uses `role="menu"` + `menuitemradio`; pattern is mixed and can confuse AT expectations. | Medium | Major | M | P0 | `/Users/carancibia/Downloads/personal-web/components/theme/ThemeToggle.tsx` | Control uses one consistent pattern (`button + listbox` or `radiogroup`) with correct keyboard semantics. |
| F-04 | Above-fold hero does not explicitly surface junior/mid-level openness in the first scan. | High | None | S | P1 | `/Users/carancibia/Downloads/personal-web/app/page.tsx` | First viewport includes junior/mid-level openness without extra scroll. |
| F-05 | Resume iframe lowers performance and fails bfcache (`ContainsPlugins`). | Medium | Minor | S | P1 | `/Users/carancibia/Downloads/personal-web/app/resume/page.tsx` | Resume route keeps PDF access but avoids bfcache-critical embed path (or clearly accepts tradeoff). |
| F-06 | Micro metadata text (`text-xs` uppercase) is hard to scan over repeated cards/sections. | Medium | Minor | S | P1 | `/Users/carancibia/Downloads/personal-web/components/ui/Section.tsx`, `/Users/carancibia/Downloads/personal-web/app/case-studies/page.tsx`, `/Users/carancibia/Downloads/personal-web/components/case-studies/CaseStudyArticle.tsx` | Metadata text reaches comfortable readability in both themes and mobile. |
| F-07 | Section cards are visually consistent but too similar, causing “flatness” in longer scroll. | Medium | None | M | P1 | `/Users/carancibia/Downloads/personal-web/app/page.tsx`, `/Users/carancibia/Downloads/personal-web/components/ui/Card.tsx`, `/Users/carancibia/Downloads/personal-web/app/globals.css` | Adjacent sections have clear visual rhythm differences while preserving calm style. |
| F-08 | Footer lacks LinkedIn quick trust link. | Medium | None | S | P1 | `/Users/carancibia/Downloads/personal-web/components/layout/Footer.tsx`, `/Users/carancibia/Downloads/personal-web/lib/links.ts` | Footer includes LinkedIn alongside Email/GitHub with consistent link cues. |
| F-09 | Case-study listing “Role · Timeline · Outcome” line is useful but visually under-emphasized. | Medium | None | S | P1 | `/Users/carancibia/Downloads/personal-web/app/case-studies/page.tsx` | Proof line is immediately scannable on each card without adding noise. |
| F-10 | Contact block still relies on a separate route for full context; conversion can improve with a compact persistent contact cue in nav/hero. | Medium | None | M | P2 | `/Users/carancibia/Downloads/personal-web/components/layout/Nav.tsx`, `/Users/carancibia/Downloads/personal-web/app/page.tsx` | One low-friction contact action is available from top navigation or hero context. |
| F-11 | Best-practices Lighthouse penalty from console 404 appears in local static audit context. | Low | None | S | P2 | Hosting/audit setup + `/Users/carancibia/Downloads/personal-web/firebase.json` | Re-run on Firebase preview/prod confirms no persistent console errors. |
| F-12 | Theme menu close behavior is pointer/escape based; add robust focus-out handling to avoid stale-open state in keyboard traversal. | Low | Minor | S | P2 | `/Users/carancibia/Downloads/personal-web/components/theme/ThemeToggle.tsx` | Menu closes predictably on tab-out and maintains focus order. |

## Notes on Severity
1. No Critical WCAG violations were found in static Lighthouse baseline.
2. Major a11y risk is concentrated in theme selector interaction semantics, not global page structure.
3. Strongest conversion blockers are evidence quality and placeholder destinations, not layout architecture.

## Route-Level Risk Snapshot
1. Home: High conversion sensitivity (proof and CTA trust moments).
2. Case studies list/detail: Good structure; moderate readability and visual emphasis adjustments needed.
3. Resume: Performance tradeoff due PDF embed; conversion still acceptable if fallback remains clear.
4. Contact: Good intent and tone; final conversion depends on real links and faster channel confidence.
