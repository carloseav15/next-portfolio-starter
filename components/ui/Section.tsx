import type { ElementType, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionTone = "default" | "muted" | "contrast";
type SectionDensity = "flush" | "compact" | "normal" | "hero";

type SectionProps = {
  as?: ElementType;
  id?: string;
  eyebrow?: string;
  title?: string;
  titleAs?: "h1" | "h2" | "h3";
  description?: string;
  className?: string;
  children: ReactNode;
  tone?: SectionTone;
  density?: SectionDensity;
};

const toneClasses: Record<SectionTone, string> = {
  default: "",
  muted: "surface-muted",
  contrast: "surface-contrast",
};

const densityClasses: Record<SectionDensity, string> = {
  flush: "py-12",
  compact: "py-10 sm:py-14",
  normal: "py-12 sm:py-20",
  hero: "py-16 sm:py-28",
};

export function Section({
  as: Component = "section",
  id,
  eyebrow,
  title,
  titleAs = "h2",
  description,
  className,
  children,
  tone = "default",
  density = "normal",
}: SectionProps) {
  const TitleTag = titleAs;

  return (
    <Component id={id} className={cn(densityClasses[density], toneClasses[tone], className)}>
      <Container>
        {(eyebrow || title || description) && (
          <header className="mb-8 max-w-4xl sm:mb-10">
            {eyebrow && <p className="editorial-kicker mb-2">{eyebrow}</p>}
            {title && (
              <TitleTag className="display-heading text-balance text-3xl text-[var(--color-text)] sm:text-5xl">
                {title}
              </TitleTag>
            )}
            {description && (
              <p className="mt-3 max-w-[72ch] text-[0.98rem] leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </Component>
  );
}
