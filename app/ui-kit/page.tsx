import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ProofPill } from "@/components/ui/ProofPill";
import { TextLink, ActionLink, CompactActionLink } from "@/components/ui/Link";
import { KPIStrip, KPIItem } from "@/components/ui/KPIStrip";
import { BulletList, BulletListItem } from "@/components/ui/BulletList";
import { ColorTokensSection } from "@/components/ui/ColorToken";
import { ButtonSection, BadgeSection, CardSection, ThemeToggleSection } from "@/components/ui/InteractiveKitSections";

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-1 font-mono text-xs text-[var(--color-text)]">
      {children}
    </code>
  );
}

function TypographySection() {
  return (
    <section id="typography" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Typography</h2>
      <div className="mt-6 space-y-8">
        <div>
          <h3 className="editorial-kicker">Display / Sans (Outfit)</h3>
          <p className="mt-3 display-heading text-5xl" aria-label="Outfit display sample">
            Aa Bb 0123
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-base text-[var(--color-text)]">Body copy at 16px</p>
            <p className="text-sm text-[var(--color-text-soft)]">Small text at 14px</p>
            <p className="text-xs text-[var(--color-text-muted)]">Extra small at 12px</p>
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker">Mono (JetBrains Mono)</h3>
          <p className="mt-3 font-mono text-base text-[var(--color-text)]">
            const hello = &quot;world&quot;; // code sample
          </p>
        </div>
      </div>
    </section>
  );
}

function ProofPillSection() {
  return (
    <section id="proof-pills" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">ProofPill</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Props: <Code>status</Code>, <Code>label</Code>, <Code>variant</Code>
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <ProofPill status="verified" />
        <ProofPill status="pending" />
        <ProofPill status="verified" label="Code" />
        <ProofPill status="pending" label="Demo" />
        <ProofPill status="verified" label="Generic" variant="default" />
      </div>
    </section>
  );
}

function TextLinkSection() {
  return (
    <section id="links" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Text & Action Links</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Reusable link components from <Code>components/ui/Link.tsx</Code>
      </p>
      <div className="mt-6 space-y-5">
        <div>
          <h3 className="editorial-kicker">TextLink</h3>
          <p className="mt-1 text-[var(--color-text)]">
            Standard <TextLink href="#">inline text link</TextLink> with underline decoration.
          </p>
        </div>
        <div>
          <h3 className="editorial-kicker">TextLink with external prop</h3>
          <p className="mt-1 text-[var(--color-text)]">
            External{" "}
            <TextLink href="https://example.com" external>
              reference link
            </TextLink>{" "}
            with icon.
          </p>
        </div>
        <div>
          <h3 className="editorial-kicker">ActionLink</h3>
          <p className="mt-1">
            <ActionLink href="#">Action link →</ActionLink>
          </p>
        </div>
        <div>
          <h3 className="editorial-kicker">CompactActionLink</h3>
          <p className="mt-1">
            <CompactActionLink href="#">Compact action link →</CompactActionLink>
          </p>
        </div>
      </div>
    </section>
  );
}

function KPISection() {
  return (
    <section id="kpis" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">KPI Strip & Items</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Standard metrics display grid from <Code>components/ui/KPIStrip.tsx</Code>
      </p>
      <div className="mt-6">
        <KPIStrip>
          <KPIItem label="Downloads" value="10,000+" context="Google Play Store" />
          <KPIItem label="Throughput" value="3,000/day" context="Active transactions" />
          <KPIItem label="Daily Users" value="~1,000/day" context="Across platforms" />
          <KPIItem label="Experience" value="8+ Years" context="Product Engineering" />
        </KPIStrip>
      </div>
    </section>
  );
}

function BulletListSection() {
  return (
    <section id="lists" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Custom Bullet Lists</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Consistent lists with custom bullet decorations from <Code>components/ui/BulletList.tsx</Code>
      </p>
      <div className="mt-6 max-w-lg">
        <Card variant="flat">
          <BulletList>
            <BulletListItem>Designed and built end-to-end payment workflows.</BulletListItem>
            <BulletListItem>Coordinated and shipped store publications for Android and iOS.</BulletListItem>
            <BulletListItem>Maintained high system reliability under heavy daily traffic.</BulletListItem>
          </BulletList>
        </Card>
      </div>
    </section>
  );
}

function MdxSection() {
  return (
    <section id="mdx" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">MDX Components</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Styled via <Code>mdx-components.tsx</Code> — rendered in case study articles.
      </p>
      <div className="mt-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] p-6">
        <h2 className="display-heading mt-10 text-2xl text-[var(--color-text)] sm:text-3xl">Heading 2 (h2)</h2>
        <h3 className="mt-8 text-xl font-semibold tracking-tight text-[var(--color-text)]">Heading 3 (h3)</h3>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          Body paragraph with <strong className="font-semibold text-[var(--color-text)]">strong emphasis</strong> and a{" "}
          <TextLink href="#">text link</TextLink>.
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
          Inline{" "}
          <code className="rounded border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-1.5 py-0.5 font-mono text-[0.95em] text-[var(--color-text)]">
            code
          </code>{" "}
          element.
        </p>
      </div>
    </section>
  );
}

function LayoutSection() {
  return (
    <section id="layout" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Layout</h2>
      <div className="mt-6 space-y-8">
        <div>
          <h3 className="editorial-kicker">
            <Code>Container</Code>
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-soft)]">
            Polymorphic <Code>as</Code> prop. Max-width variants: <Code>sm</Code>, <Code>md</Code>, <Code>lg</Code>,{" "}
            <Code>xl</Code>, <Code>full</Code>.
          </p>
          <div className="mt-3">
            <Container maxWidth="md">
              <div className="rounded-md border border-dashed border-[var(--color-border-strong)] bg-[var(--color-subtle-bg)] py-8 text-center text-sm text-[var(--color-text-muted)]">
                Container <Code>maxWidth=&quot;md&quot;</Code>
              </div>
            </Container>
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker">
            <Code>Section</Code> Tones
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="surface-muted rounded-xl p-6">
              <p className="font-semibold text-[var(--color-text)]">tone=&quot;muted&quot;</p>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">Radial gradient with animated drift.</p>
            </div>
            <div className="surface-contrast rounded-xl p-6">
              <p className="font-semibold text-[var(--color-text)]">tone=&quot;contrast&quot;</p>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">Stronger gradient with animated drift.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="editorial-kicker">
            <Code>Section</Code> Densities
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-soft)]">
            compact (<Code>py-8 → sm:py-12</Code>) | normal (<Code>py-12 → sm:py-20</Code>) | spacious (
            <Code>py-16 → sm:py-24</Code>) | hero (<Code>py-16 → sm:py-28</Code>)
          </p>
        </div>
      </div>
    </section>
  );
}

export default function UIKitPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <header className="mb-12 border-b border-[var(--color-border)] pb-8">
          <p className="editorial-kicker">Internal Reference</p>
          <h1 className="display-heading mt-2 text-4xl sm:text-5xl">UI Kit</h1>
          <p className="mt-3 max-w-2xl text-base text-[var(--color-text-soft)]">
            Complete design system reference. Use the theme toggle in the header to preview components in light and dark
            mode.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block">
            <nav aria-label="UI Kit sections" className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-text-muted)] mb-3 px-3">
                Sections
              </p>
              {[
                { id: "colors", label: "Color Tokens" },
                { id: "typography", label: "Typography" },
                { id: "buttons", label: "Buttons" },
                { id: "badges", label: "Badges" },
                { id: "proof-pills", label: "Proof Pills" },
                { id: "cards", label: "Cards" },
                { id: "links", label: "Text & Action Links" },
                { id: "kpis", label: "KPI Strip" },
                { id: "lists", label: "Bullet Lists" },
                { id: "theme", label: "Theme Toggle" },
                { id: "mdx", label: "MDX Rendering" },
                { id: "layout", label: "Layout & Tones" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="focus-ring block rounded-md px-3 py-2 text-sm font-semibold text-[var(--color-text-soft)] transition hover:bg-[var(--color-subtle-bg)] hover:text-[var(--color-text)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-20 lg:space-y-28">
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
            <KPISection />
            <hr className="border-[var(--color-border)]" />
            <BulletListSection />
            <hr className="border-[var(--color-border)]" />
            <ThemeToggleSection />
            <hr className="border-[var(--color-border)]" />
            <MdxSection />
            <hr className="border-[var(--color-border)]" />
            <LayoutSection />
          </div>
        </div>
      </Container>
    </div>
  );
}
