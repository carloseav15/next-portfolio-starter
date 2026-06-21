'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { ProofPill } from '@/components/ui/ProofPill'
import { textLinkClassName, actionLinkClassName, compactActionLinkClassName } from '@/lib/uiClasses'

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-1 font-mono text-xs text-[var(--color-text)]">
      {children}
    </code>
  )
}

function ColorToken({ variable, label }: { variable: string; label: string }) {
  const [, setTick] = useState(0)
  useEffect(() => {
    const obs = new MutationObserver(() => setTick((t) => t + 1))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [setTick])
  const value =
    typeof document === 'undefined'
      ? ''
      : getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] p-3">
      <div className="h-10 w-10 shrink-0 rounded-md" style={{ background: `var(${variable})` }} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text)]">{label}</p>
        <p className="font-mono text-xs text-[var(--color-text-muted)]">{variable}</p>
        <p className="font-mono text-xs text-[var(--color-text-muted)]">{value || '\u2014'}</p>
      </div>
    </div>
  )
}

const colorGroups = [
  {
    title: 'Background & Surfaces',
    tokens: [
      { variable: '--color-bg', label: 'Page Background' },
      { variable: '--color-bg-texture', label: 'Background Texture' },
      { variable: '--color-surface-1', label: 'Surface 1 (Lowest)' },
      { variable: '--color-surface-2', label: 'Surface 2 (Mid)' },
      { variable: '--color-surface-3', label: 'Surface 3 (Highest)' },
      { variable: '--color-subtle-bg', label: 'Subtle Background' },
      { variable: '--color-header-bg', label: 'Header Background' },
    ],
  },
  {
    title: 'Text',
    tokens: [
      { variable: '--color-text', label: 'Primary Text' },
      { variable: '--color-text-soft', label: 'Soft Text' },
      { variable: '--color-text-muted', label: 'Muted Text' },
    ],
  },
  {
    title: 'Borders',
    tokens: [
      { variable: '--color-border', label: 'Border' },
      { variable: '--color-border-strong', label: 'Strong Border' },
    ],
  },
  {
    title: 'Accent',
    tokens: [
      { variable: '--color-accent', label: 'Accent' },
      { variable: '--color-accent-strong', label: 'Accent Strong' },
      { variable: '--color-on-accent', label: 'On Accent' },
    ],
  },
  {
    title: 'Interactive',
    tokens: [
      { variable: '--color-link', label: 'Link' },
      { variable: '--color-link-hover', label: 'Link Hover' },
      { variable: '--color-focus', label: 'Focus Ring' },
    ],
  },
  {
    title: 'Proof Status',
    tokens: [
      { variable: '--color-proof-pending-bg', label: 'Pending BG' },
      { variable: '--color-proof-pending-border', label: 'Pending Border' },
      { variable: '--color-proof-pending-text', label: 'Pending Text' },
      { variable: '--color-proof-verified-bg', label: 'Verified BG' },
      { variable: '--color-proof-verified-border', label: 'Verified Border' },
      { variable: '--color-proof-verified-text', label: 'Verified Text' },
    ],
  },
  {
    title: 'Shadows',
    tokens: [
      { variable: '--color-shadow', label: 'Shadow' },
    ],
  },
]

function ColorTokensSection() {
  return (
    <section>
      <h2 className="display-heading text-2xl">Color Tokens</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        CSS custom properties across the design system. Use the theme toggle in the header to see dark mode values.
      </p>
      <div className="mt-6 space-y-8">
        {colorGroups.map((group) => (
          <div key={group.title}>
            <h3 className="editorial-kicker">{group.title}</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.tokens.map((token) => (
                <ColorToken key={token.variable} {...token} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TypographySection() {
  return (
    <section>
      <h2 className="display-heading text-2xl">Typography</h2>
      <div className="mt-6 space-y-8">
        <div>
          <h3 className="editorial-kicker">Display / Sans (Chakra Petch)</h3>
          <p className="mt-3 display-heading text-5xl" aria-label="Chakra Petch display sample">Aa Bb 0123</p>
          <div className="mt-4 space-y-2">
            <p className="text-base text-[var(--color-text)]">Body copy at 16px</p>
            <p className="text-sm text-[var(--color-text-soft)]">Small text at 14px</p>
            <p className="text-xs text-[var(--color-text-muted)]">Extra small at 12px</p>
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker">Mono (JetBrains Mono)</h3>
          <p className="mt-3 font-mono text-base text-[var(--color-text)]">const hello = &quot;world&quot;;  // code sample</p>
        </div>
      </div>
    </section>
  )
}

function ButtonSection() {
  const variants = ['primary', 'secondary', 'ghost'] as const
  return (
    <section>
      <h2 className="display-heading text-2xl">Buttons</h2>
      <div className="mt-6 space-y-8">
        <div>
          <h3 className="editorial-kicker">Button (native <Code>button</Code>)</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {variants.map((v) => (
              <Button key={v} variant={v}>{v}</Button>
            ))}
            {variants.map((v) => (
              <Button key={`${v}-disabled`} variant={v} disabled>{v} disabled</Button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker">ButtonLink (Next.js <Code>Link</Code>)</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {variants.map((v) => (
              <ButtonLink key={v} variant={v} href="#">{v}</ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeSection() {
  const variants = ['default', 'accent', 'muted'] as const
  return (
    <section>
      <h2 className="display-heading text-2xl">Badges</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Props: <Code>variant</Code>
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {variants.map((v) => (
          <Badge key={v} variant={v}>{v}</Badge>
        ))}
      </div>
    </section>
  )
}

function ProofPillSection() {
  return (
    <section>
      <h2 className="display-heading text-2xl">ProofPill</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Props: <Code>status</Code>, <Code>label</Code>
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <ProofPill status="verified" />
        <ProofPill status="pending" />
        <ProofPill status="verified" label="Code" />
        <ProofPill status="pending" label="Demo" />
      </div>
    </section>
  )
}

function CardSection() {
  const variants = ['flat', 'elevated', 'proof'] as const
  return (
    <section>
      <h2 className="display-heading text-2xl">Cards</h2>
      <div className="mt-6 space-y-8">
        <div>
          <h3 className="editorial-kicker">Variants</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {variants.map((v) => (
              <Card key={v} variant={v}>
                <p className="font-semibold text-[var(--color-text)] capitalize">{v}</p>
                <p className="mt-1 text-sm text-[var(--color-text-soft)]">Content inside the card wrapper.</p>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker">Hoverable</h3>
          <div className="mt-3 max-w-md">
            <Card variant="elevated" hoverable>
              <p className="font-semibold text-[var(--color-text)]">Hover this card</p>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">Lifts and strengthens border on hover.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function TextLinkSection() {
  return (
    <section>
      <h2 className="display-heading text-2xl">Text Links</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Reusable className strings from <Code>lib/uiClasses.ts</Code>
      </p>
      <div className="mt-6 space-y-5">
        <div>
          <h3 className="editorial-kicker"><Code>textLinkClassName</Code></h3>
          <p className="mt-1 text-[var(--color-text)]">
            Standard <Link href="#" className={textLinkClassName}>inline text link</Link> with underline decoration.
          </p>
        </div>
        <div>
          <h3 className="editorial-kicker"><Code>actionLinkClassName</Code></h3>
          <p className="mt-1">
            <Link href="#" className={actionLinkClassName}>Action link →</Link>
          </p>
        </div>
        <div>
          <h3 className="editorial-kicker"><Code>compactActionLinkClassName</Code></h3>
          <p className="mt-1">
            <Link href="#" className={compactActionLinkClassName}>Compact action link →</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

function MdxSection() {
  return (
    <section>
      <h2 className="display-heading text-2xl">MDX Components</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Styled via <Code>mdx-components.tsx</Code> — rendered in case study articles.
      </p>
      <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] p-6">
        <h2 className="display-heading mt-10 text-2xl text-[var(--color-text)] sm:text-3xl">Heading 2 (h2)</h2>
        <h3 className="mt-8 text-xl font-semibold tracking-tight text-[var(--color-text)]">Heading 3 (h3)</h3>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          Body paragraph with <strong className="font-semibold text-[var(--color-text)]">strong emphasis</strong> and{' '}
          a <Link href="#" className={textLinkClassName}>text link</Link>.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          <li className="pl-1">Unordered list item one</li>
          <li className="pl-1">Unordered list item two</li>
          <li className="pl-1">Unordered list item three</li>
        </ul>
        <blockquote className="mt-4 border-l-2 border-[var(--color-accent)] pl-4 italic text-[var(--color-text)]">
          Blockquote with accent left border styling.
        </blockquote>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          Inline <code className="rounded border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-1.5 py-0.5 font-mono text-[0.95em] text-[var(--color-text)]">code</code> element.
        </p>
      </div>
    </section>
  )
}

function LayoutSection() {
  return (
    <section>
      <h2 className="display-heading text-2xl">Layout</h2>
      <div className="mt-6 space-y-8">
        <div>
          <h3 className="editorial-kicker"><Code>Container</Code></h3>
          <p className="mt-1 text-sm text-[var(--color-text-soft)]">
            Max-width: 76rem (1216px). Padding: <Code>px-4</Code> → <Code>sm:px-6</Code> → <Code>lg:px-8</Code>.
          </p>
          <div className="mt-3">
            <Container>
              <div className="rounded-lg border border-dashed border-[var(--color-border-strong)] bg-[var(--color-subtle-bg)] py-8 text-center text-sm text-[var(--color-text-muted)]">
                Container bounds (resize viewport)
              </div>
            </Container>
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker"><Code>Section</Code> Tones</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="surface-muted rounded-2xl p-6">
              <p className="font-semibold text-[var(--color-text)]">tone=&quot;muted&quot;</p>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">Radial gradient with animated drift (16s).</p>
            </div>
            <div className="surface-contrast rounded-2xl p-6">
              <p className="font-semibold text-[var(--color-text)]">tone=&quot;contrast&quot;</p>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">Stronger gradient with animated drift (18s).</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker"><Code>Section</Code> Densities</h3>
          <p className="mt-1 text-sm text-[var(--color-text-soft)]">
            flush (<Code>py-12</Code>) | compact (<Code>py-10 → sm:py-14</Code>) | normal (<Code>py-12 → sm:py-20</Code>) | hero (<Code>py-16 → sm:py-28</Code>)
          </p>
        </div>
      </div>
    </section>
  )
}

export default function UIKitPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <header>
          <p className="editorial-kicker">Internal Reference</p>
          <h1 className="display-heading mt-2 text-4xl sm:text-5xl">UI Kit</h1>
          <p className="mt-3 max-w-2xl text-[var(--color-text-soft)]">
            Complete design system reference for carlosarancibia.com. Use the theme toggle in the header to preview
            components in light and dark mode.
          </p>
        </header>

        <hr className="my-16 border-[var(--color-border)]" />

        <div className="space-y-24">
          <ColorTokensSection />
          <hr className="border-[var(--color-border)]" />
          <TypographySection />
          <hr className="border-[var(--color-border)]" />
          <ButtonSection />
          <hr className="border-[var(--color-border)]" />
          <BadgeSection />
          <hr className="border-[var(--color-border)]" />
          <ProofPillSection />
          <hr className="border-[var(--color-border)]" />
          <CardSection />
          <hr className="border-[var(--color-border)]" />
          <TextLinkSection />
          <hr className="border-[var(--color-border)]" />
          <MdxSection />
          <hr className="border-[var(--color-border)]" />
          <LayoutSection />
        </div>
      </Container>
    </div>
  )
}
