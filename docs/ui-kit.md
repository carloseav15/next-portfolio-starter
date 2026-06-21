# UI Kit — carlosarancibia.com

Design system reference for the personal portfolio site. This document catalogs all design tokens, component APIs, and usage guidelines. A live visual preview is available at `/ui-kit`.

---

## Design Tokens

### Color System

All colors are defined as CSS custom properties on `:root` (light) and overridden in `.dark` (dark). Components reference these variables to support theme switching.

| Group | Token | Light Value | Dark Value |
|---|---|---|---|---|
| **Background** | `--color-bg` | `#fafafa` | `#020913` |
| | `--color-bg-texture` | `rgba(15,23,42,0.003)` | `rgba(218,236,255,0.024)` |
| | `--color-surface-1` | `rgba(255,255,255,0.92)` | `rgba(8,18,32,0.84)` |
| | `--color-surface-2` | `rgba(255,255,255,0.97)` | `rgba(10,22,38,0.92)` |
| | `--color-surface-3` | `#ffffff` | `rgba(13,27,45,0.97)` |
| | `--color-subtle-bg` | `rgba(15,23,42,0.03)` | `rgba(218,236,255,0.052)` |
| **Text** | `--color-text` | `#0f172a` | `#eff7ff` |
| | `--color-text-soft` | `#334155` | `#c2d4e6` |
| | `--color-text-muted` | `#64748b` | `#9eb4cb` |
| **Border** | `--color-border` | `rgba(15,23,42,0.08)` | `rgba(157,188,220,0.2)` |
| | `--color-border-strong` | `rgba(15,23,42,0.16)` | `rgba(186,209,236,0.34)` |
| **Accent** | `--color-accent` | `#0f172a` | `#f8fafc` |
| | `--color-accent-strong` | `#020617` | `#ffffff` |
| | `--color-on-accent` | `#ffffff` | `#0f172a` |
| **Link** | `--color-link` | `#0284c7` | `#8dddf5` |
| | `--color-link-hover` | `#0369a1` | `#beebfa` |
| **Focus** | `--color-focus` | `#38bdf8` | `#85daef` |
| **Proof Pending** | `--color-proof-pending-bg` | `rgba(249,115,22,0.11)` | `rgba(249,115,22,0.22)` |
| | `--color-proof-pending-border` | `rgba(217,119,6,0.3)` | `rgba(251,146,60,0.34)` |
| | `--color-proof-pending-text` | `#8f3d0f` | `#ffc08a` |
| **Proof Verified** | `--color-proof-verified-bg` | `rgba(15,118,110,0.08)` | `rgba(45,212,191,0.16)` |
| | `--color-proof-verified-border` | `rgba(15,118,110,0.2)` | `rgba(94,234,212,0.32)` |
| | `--color-proof-verified-text` | `#0d9488` | `#82f1de` |
| **Header** | `--color-header-bg` | `rgba(250,250,250,0.85)` | `rgba(2,9,19,0.9)` |
| **Shadow** | `--color-shadow` | `rgba(0,0,0,0.04)` | `rgba(0,0,0,0.62)` |

### Typography

| Family | Variable | Usage |
|---|---|---|
| Outfit | `--font-outfit` | `--font-sans`, `--font-display`. All body and display text. Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold for `.display-heading`). |
| JetBrains Mono | `--font-jetbrains-mono` | `--font-mono`. Code samples, technical metadata. |

**Key type classes:**

| Class | Font | Weight | Size | Letter-spacing | Line-height |
|---|---|---|---|---|---|---|
| `.display-heading` | Outfit | 800 | var | -0.01em | 1.15 |
| `.editorial-kicker` | Inter/Outfit | 700 | 0.8rem | 0.08em | normal |
| `body` (default) | Inter | 400 | 1rem | normal | normal |

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

Reusable `className` strings from `components/ui/Link.tsx` for link styling outside components:

| Export | Use case | Style |
|---|---|---|
| `textLinkClasses` | Inline text links | Underline, `--color-link`, hover color |
| `actionLinkClasses` | Standalone action links | Button-like (rounded, padding, bg on hover) |
| `compactActionLinkClasses` | Compact inline actions | Underline with hover color |

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
