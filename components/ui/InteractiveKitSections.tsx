"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-1 font-mono text-xs text-[var(--color-text)]">
      {children}
    </code>
  );
}

export function ButtonSection() {
  const [loading, setLoading] = useState(false);
  const variants = ["primary", "secondary", "ghost"] as const;
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <section id="buttons" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Buttons</h2>
      <div className="mt-6 space-y-8">
        <div>
          <h3 className="editorial-kicker">Button variants</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {variants.map((v) => (
              <Button key={v} variant={v}>
                {v}
              </Button>
            ))}
            {variants.map((v) => (
              <Button key={`${v}-disabled`} variant={v} disabled>
                {v} disabled
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="editorial-kicker">Button sizes</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {sizes.map((s) => (
              <Button key={s} size={s} variant="primary">
                {s}
              </Button>
            ))}
            {sizes.map((s) => (
              <Button key={`${s}-secondary`} size={s} variant="secondary">
                {s}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="editorial-kicker">Button with icon</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <Button icon={<ArrowRight className="h-4 w-4" />}>Continue</Button>
            <Button icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              Continue
            </Button>
          </div>
        </div>

        <div>
          <h3 className="editorial-kicker">Button loading state</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <Button isLoading onClick={() => setLoading(!loading)}>
              {loading ? "Saving..." : "Trigger loading"}
            </Button>
          </div>
        </div>

        <div>
          <h3 className="editorial-kicker">
            ButtonLink (Next.js <Code>Link</Code>)
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {variants.map((v) => (
              <ButtonLink key={v} variant={v} href="#">
                {v}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BadgeSection() {
  const variants = ["default", "accent", "muted"] as const;
  const [visible, setVisible] = useState(true);
  return (
    <section id="badges" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Badges</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Props: <Code>variant</Code>, <Code>dismissible</Code>
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {variants.map((v) => (
          <Badge key={v} variant={v}>
            {v}
          </Badge>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {visible && (
          <Badge variant="accent" dismissible onDismiss={() => setVisible(false)}>
            Dismiss me
          </Badge>
        )}
        {!visible && (
          <button onClick={() => setVisible(true)} className="focus-ring text-sm text-[var(--color-link)] underline">
            Reset badge
          </button>
        )}
      </div>
    </section>
  );
}

export function CardSection() {
  const variants = ["flat", "elevated", "proof"] as const;
  const paddings = ["compact", "normal", "spacious"] as const;
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section id="cards" className="scroll-mt-24">
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
          <h3 className="editorial-kicker">Padding variants</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {paddings.map((p) => (
              <Card key={p} variant="elevated" padding={p}>
                <p className="font-semibold text-[var(--color-text)] capitalize">{p}</p>
                <p className="mt-1 text-sm text-[var(--color-text-soft)]">Padding variant demo.</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="editorial-kicker">Selectable</h3>
          <div className="mt-3 flex flex-wrap gap-4">
            {["Option A", "Option B", "Option C"].map((item) => (
              <Card
                key={item}
                variant="elevated"
                hoverable
                selected={selectedCard === item}
                onClick={() => setSelectedCard(selectedCard === item ? null : item)}
                className="cursor-pointer"
              >
                <p className="font-semibold text-[var(--color-text)]">{item}</p>
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
  );
}

export function ThemeToggleSection() {
  return (
    <section id="theme" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Theme Toggle</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        Theme preferences selector from <Code>components/theme/ThemeToggle.tsx</Code> with keyboard-accessible focus
        rings.
      </p>
      <div className="mt-6 flex items-center gap-4">
        <ThemeToggle />
        <span className="text-xs text-[var(--color-text-muted)]">
          Click/Focus to test options and arrow-key navigation.
        </span>
      </div>
    </section>
  );
}
