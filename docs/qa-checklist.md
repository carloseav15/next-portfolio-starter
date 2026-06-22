# QA Checklist (Release Gate)

## Technical Checks

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run test`
- [ ] `npm run test:e2e`
- [ ] `npm run build`

## UX and Conversion

- [ ] Home first viewport clearly states role and value proposition.
- [ ] Metric band is readable on mobile and desktop.
- [ ] Proof lane shows truthful status labels (`pending` or `verified`).
- [ ] No fake verified links.
- [ ] Placeholder images are either intentionally documented or replaced with final screenshots.
- [ ] Contact behavior is either real or explicitly documented as deferred.
- [ ] Contact CTA is visible in navbar and final section.

## Accessibility

- [ ] Skip link works with keyboard.
- [ ] Theme selector supports keyboard arrows and Escape close.
- [ ] Focus ring is visible on all interactive controls.
- [ ] External links announce new-tab behavior via SR text.
- [ ] Reduced-motion preference is respected.

## Route Journey

- [ ] Home -> Case Studies -> Case Study -> Resume -> Contact works without dead ends.
- [ ] Resume route allows direct PDF access even if inline preview fails.
- [ ] Contact route exposes Email + LinkedIn + GitHub.

## Performance and SEO

- [ ] Lighthouse accessibility: 100 (main routes).
- [ ] Lighthouse SEO: >= 95.
- [ ] Lighthouse performance target: >= 85 on home/case-studies/contact.
