# UI Kit — carlosarancibia.com

Design system reference for the personal portfolio site. This document catalogs all design tokens, component APIs, and usage guidelines. A live visual preview is available at `/ui-kit`.

---

## Design Tokens

### Color System

All colors are defined as CSS custom properties on `:root` (light) and overridden in `.dark` (dark). Components reference these variables to support theme switching.

| Group | Token | Light Value | Dark Value |
|---|---|---|---|
| **Background** | `--color-bg` | `#ecf2f8` | `#0f141c` |
| | `--color-bg-texture` | `rgba(15,28,52,0.022)` | `rgba(255,255,255,0.022)` |
| | `--color-surface-1` | `rgba(255,255,255,0.86)` | `rgba(30,38,50,0.88)` |
| | `--color-surface-2` | `rgba(255,255,255,0.94)` | `rgba(38,47,60,0.93)` |
| | `--color-surface-3` | `#ffffff` | `#242e3a` |
| | `--color-subtle-bg` | `rgba(15,28,52,0.048)` | `rgba(255,255,255,0.045)` |
| **Text** | `--color-text` | `#07152b` | `#e5ecf2` |
| | `--color-text-soft` | `#233854` | `#b1c1d1` |
| | `--color-text-muted` | `#48637f` | `#7b95b0` |
| **Border** | `--color-border` | `rgba(12,32,59,0.13)` | `rgba(255,255,255,0.1)` |
| | `--color-border-strong` | `rgba(12,32,59,0.24)` | `rgba(255,255,255,0.2)` |
| **Accent** | `--color-accent` | `#0d7795` | `#28bddf` |
| | `--color-accent-strong` | `#0a647a` | `#1ea4c3` |
| | `--color-on-accent` | `#f3fcff` | `#03202a` |
| **Link** | `--color-link` | `#075985` | `#22c5e8` |
| | `--color-link-hover` | `#0a7698` | `#50d4f0` |
| **Focus** | `--color-focus` | `#0ea5c9` | `#22c5e8` |
| **Proof Pending** | `--color-proof-pending-bg` | `rgba(249,115,22,0.13)` | `rgba(249,115,22,0.18)` |
| | `--color-proof-pending-border` | `rgba(217,119,6,0.4)` | `rgba(251,146,60,0.5)` |
| | `--color-proof-pending-text` | `#8f3d0f` | `#fb923c` |
| **Proof Verified** | `--color-proof-verified-bg` | `rgba(14,116,144,0.13)` | `rgba(14,116,144,0.2)` |
| | `--color-proof-verified-border` | `rgba(14,116,144,0.36)` | `rgba(34,197,232,0.4)` |
| | `--color-proof-verified-text` | `#065f72` | `#22cde8` |
| **Utility** | `--color-header-bg` | `rgba(236,242,248,0.9)` | `rgba(15,20,28,0.9)` |
| | `--color-shadow` | `rgba(8,21,40,0.24)` | `rgba(0,0,0,0.48)` |

### Typography

| Family | Variable | Usage |
|---|---|---|
| Chakra Petch | `--font-chakra-petch` | `--font-sans`, `--font-display`. All body and display text. Weights: 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold for `.display-heading`). |
| JetBrains Mono | `--font-jetbrains-mono` | `--font-mono`. Code samples, technical metadata. |

**Key type classes:**

| Class | Font | Weight | Size | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| `.display-heading` | Chakra Petch | 800 | var | -0.01em | 0.98 |
| `.editorial-kicker` | Chakra Petch | 700 | 0.8rem | 0.08em | normal |
| `body` (default) | Chakra Petch | 400 | 1rem | normal | normal |

### Spacing & Sizing

No custom spacing tokens — uses Tailwind v4 defaults. Custom values used directly in components:

- Container max-width: `76rem` (1216px)
- Container padding: `px-4` → `sm:px-6` → `lg:px-8`
- Card border-radius: `rounded-2xl` (16px)
- Button border-radius: `rounded-full`
- Button min-height: `min-h-11` (44px)

### Shadows & Elevation

Shadows use the `--color-shadow` token with black as the tint. Elevation is conveyed through shadow depth and border strength:

| Level | Shadow |
|---|---|
| Surface 1 (flat) | None |
| Surface 2 (elevated card) | `0 24px 48px -34px var(--color-shadow)` |
| Proof card | `0 28px 52px -34px var(--color-shadow)` |
| Hover (card) | `0 30px 56px -36px var(--color-shadow)` |
| Button primary | `0 14px 28px -18px var(--color-accent-strong)` |
| Button primary hover | `0 20px 34px -20px var(--color-accent-strong)` |

### Animations

| Name | Duration | Easing | Applies to |
|---|---|---|---|
| `rise-in` | 520ms | `cubic-bezier(0.2,0.85,0.2,1)` | Element entrance (fade + slide up) |
| `gradient-drift` | 16s / 18s | `ease-in-out infinite alternate` | `.surface-muted`, `.surface-contrast` |
| Theme transition | 180ms | ease-out | `.theme-ready` elements (bg, border, color, shadow, transform) |
| Button/card hover | 200ms | ease-out | Transform, border, shadow |
| Button active | instant | — | `translate-y-px` |

**Motion delay classes:** `.motion-delay-1` (90ms) through `.motion-delay-4` (360ms) for staggered entrance animations.

**Reduced motion:** `prefers-reduced-motion` disables all animations and transitions.

---

## Component API

### Button

```tsx
import { Button, ButtonLink } from '@/components/ui/Button'

<Button variant="primary" onClick={handleClick}>Label</Button>
<ButtonLink variant="secondary" href="/page">Label</ButtonLink>
```

**Props (`Button`):**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Visual style tier |
| `children` | `ReactNode` | required | Label content |
| `className` | `string` | — | Additional classes |
| All native `<button>` attributes are forwarded.

**Props (`ButtonLink`):**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Visual style tier |
| `children` | `ReactNode` | required | Label content |
| `href` | `string` (via `LinkProps`) | required | Route path |

All `next/link` `Link` props are forwarded.

**Variants:**

| Variant | Background | Text | Hover |
|---|---|---|---|
| `primary` | Accent gradient | `--color-on-accent` | Lifts +20px shadow |
| `secondary` | `--color-subtle-bg` + border | `--color-text` | Lifts, stronger border |
| `ghost` | Transparent | `--color-text-soft` | Lifts, solid text |

**States:** idle → hover (`-translate-y-0.5`) → active (`translate-y-px`) → focus-visible (ring) → disabled (native styling).

---

### Badge

```tsx
import { Badge } from '@/components/ui/Badge'

<Badge variant="accent">Label</Badge>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"default" \| "accent" \| "muted"` | `"default"` | Visual style |
| `children` | `ReactNode` | required | Label content |
| `className` | `string` | — | Additional classes |

Renders an inline `<span>` with `rounded-full`, `border`, `px-3 py-1`, `text-xs font-semibold`.

---

### Card

```tsx
import { Card } from '@/components/ui/Card'

<Card variant="elevated" hoverable>
  <p>Content</p>
</Card>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"flat" \| "elevated" \| "proof"` | `"elevated"` | Visual tier |
| `hoverable` | `boolean` | `false` | Enables hover lift effect |
| `children` | `ReactNode` | required | Card content |
| `className` | `string` | — | Additional classes |

Renders a semantic `<article>`. Padding: `p-5` → `sm:p-6`. Border radius: `rounded-2xl`.

**Variants:**

| Variant | Background | Border | Shadow |
|---|---|---|---|
| `flat` | `--color-surface-1` | `--color-border` | None |
| `elevated` | `--color-surface-2` | `--color-border` | 24px (soft) |
| `proof` | Gradient (surface-2 → subtle-bg) | `--color-border-strong` | 28px (deeper) |

---

### ProofPill

```tsx
import { ProofPill } from '@/components/ui/ProofPill'

<ProofPill status="verified" label="Evidence" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `status` | `"pending" \| "verified"` | required | Evidence verification state |
| `label` | `string` | `"Evidence"` | Left-side label text |
| `className` | `string` | — | Additional classes |

Styled via `data-status` CSS attribute. Two internal `<span>` elements for label and availability text.

---

### Container

```tsx
import { Container } from '@/components/ui/Container'

<Container>Content</Container>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | Content to wrap |
| `className` | `string` | — | Additional classes |

Max-width: `76rem` (1216px). Responsive padding: `px-4` → `sm:px-6` → `lg:px-8`.

---

### Section

```tsx
import { Section } from '@/components/ui/Section'

<Section tone="muted" density="normal" eyebrow="Label" title="Heading" description="Subtitle">
  <p>Content</p>
</Section>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `ElementType` | `"section"` | Semantic HTML element |
| `id` | `string` | — | DOM id for anchor links |
| `eyebrow` | `string` | — | Small label above title |
| `title` | `string` | — | Section heading |
| `titleAs` | `"h1" \| "h2" \| "h3"` | `"h2"` | Heading level |
| `description` | `string` | — | Subtitle below heading |
| `children` | `ReactNode` | required | Section body |
| `tone` | `"default" \| "muted" \| "contrast"` | `"default"` | Background treatment |
| `density` | `"flush" \| "compact" \| "normal" \| "hero"` | `"normal"` | Vertical padding |
| `className` | `string` | — | Additional classes |

**Density padding:**

| Density | Mobile | `sm+` |
|---|---|---|
| `flush` | `py-12` | `py-12` |
| `compact` | `py-10` | `py-14` |
| `normal` | `py-12` | `py-20` |
| `hero` | `py-16` | `py-28` |

---

### Text Link Classes

Reusable `className` strings from `lib/uiClasses.ts` for link styling outside components:

| Export | Use case | Style |
|---|---|---|
| `textLinkClassName` | Inline text links | Underline, `--color-link`, hover color |
| `actionLinkClassName` | Standalone action links | Button-like (rounded, padding, bg on hover) |
| `compactActionLinkClassName` | Compact inline actions | Underline with hover color |

All include `focus-visible` ring styling for accessibility.

---

### MDX Components

Styled via `mdx-components.tsx` for case study prose. Overrides:

| Element | Key styles |
|---|---|
| `h2` | `.display-heading`, `text-2xl → sm:text-3xl`, `mt-10` |
| `h3` | `text-xl font-semibold tracking-tight`, `mt-8` |
| `p` | `text-[0.98rem] → sm:text-base`, `leading-relaxed`, soft text |
| `a` | Rendered as `next/link` with `textLinkClassName` |
| `ul` | `list-disc space-y-2`, soft text |
| `code` (inline) | Mono, border, subtle bg, `px-1.5 py-0.5` |
| `blockquote` | Left accent border (`border-l-2`), no italics |

---

## Theme System

The theme system lives in `lib/theme.ts` and handles:

- **3 preferences:** `"system"`, `"light"`, `"dark"`
- **Storage:** `localStorage` key `"theme-preference"` with automatic legacy migration from old `"theme"` key
- **Resolution:** `"system"` reads `matchMedia("(prefers-color-scheme: dark)")` for SSR-safe resolution
- **Application:** Sets `class="dark"` on `<html>`, `color-scheme` meta, `data-theme` and `data-theme-preference` attributes, dispatches `themechange` custom event
- **React integration:** `useSyncExternalStore` for reactive subscriptions; `getThemePreferenceServerSnapshot()` returns `"system"` for SSR

### ThemeToggle Component

Located at `components/theme/ThemeToggle.tsx`:

| Prop | Type | Default | Description |
|---|---|---|---|
| `showLabelOnMobile` | `boolean` | `false` | Visually show "Theme" label at mobile sizes |
| `buttonClassName` | `string` | — | Additional classes on the trigger button |

Interactive dropdown with radio-group pattern (`aria-checked`), keyboard navigation (arrow keys, Home, End, Escape), and auto-close on blur/outside click.

---

## Accessibility

- All components use semantic HTML (`<button>`, `<article>`, `<section>`, `<span>`, `<header>`)
- Focus-visible rings use `--color-focus` token across all interactive elements
- `ThemeToggle` implements full ARIA radiogroup pattern with keyboard navigation
- `skip-link` is available for keyboard users
- `prefers-reduced-motion` disables all animations
- WCAG AA contrast ratios verified on critical text/accent pairs in design token tests

## Testing

Design token tests in `tests/unit/design-tokens.test.ts`:
- Verifies accent token values are locked
- Checks WCAG AA contrast (≥ 4.5:1) on critical pairs in both themes
- Asserts button hover avoids `brightness` filter (uses shadow-based effect instead)
