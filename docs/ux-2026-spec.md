# UX 2026 Specification

## Objective
Optimize recruiter conversion in under two minutes while preserving technical credibility and accessibility.

## Experience Principles
- Outcome-first messaging.
- Verifiable proof cues with explicit status (`pending`/`verified`).
- Fast path to contact channels.
- Consistent typography rhythm across mobile and desktop.

## Visual Direction
- Editorial Bold with high-contrast section hierarchy.
- Typography: Inter (UI/body), JetBrains Mono (technical metadata), Outfit (display headings).
- Color: slate/blue accent with cold neutrals; no purple bias.
- Motion: intentional fade/stagger transitions, reduced-motion safe.

## Route Intent
- `/`: conversion story in five blocks (hero, metrics, proof lane, case snapshots, contact CTA).
- `/about`: career arc timeline + working principles.
- `/case-studies`: scannable cards with impact line.
- `/case-studies/[slug]`: structured narrative and KPI context.
- `/resume`: print-ready web resume + optional inline preview.
- `/#contact-section`: persistent hiring CTA block in home page footer.

## Accessibility Targets
- Keyboard navigable theme selector with radiogroup semantics.
- Strong focus-visible across all controls.
- Screen-reader friendly external link cues.
- Maintain Lighthouse accessibility target of 100 on key routes.

## Conversion Notes
- Pending evidence must be transparent and non-deceptive.
- Contact CTA remains persistent in top navigation.
- Footer trust lane always includes Email, LinkedIn, GitHub.
