import type { ElementType, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionTone = "default" | "muted" | "contrast";
type SectionDensity = "compact" | "normal" | "spacious" | "hero";

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
  background?: string;
};

const toneClasses: Record<SectionTone, string> = {
  default: "",
  muted: "surface-muted",
  contrast: "surface-contrast",
};

const densityClasses: Record<SectionDensity, string> = {
  compact: "py-8 sm:py-12",
  normal: "py-12 sm:py-20",
  spacious: "py-16 sm:py-24",
  hero: "py-16 sm:py-28",
};

const titleSizeClasses: Record<"h1" | "h2" | "h3", string> = {
  h1: "text-4xl tracking-tight sm:text-5xl md:text-6xl font-extrabold",
  h2: "text-2xl tracking-tight sm:text-3xl md:text-4xl font-bold",
  h3: "text-xl sm:text-2xl font-semibold",
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
  background,
}: SectionProps) {
  const TitleTag = titleAs;

  return (
    <Component
      id={id}
      className={cn(densityClasses[density], toneClasses[tone], className)}
      style={background ? { background } : undefined}
    >
      <Container>
        {(eyebrow || title || description) && (
          <header className="mb-8 max-w-4xl sm:mb-10">
            {eyebrow && <p className="editorial-kicker mb-2">{eyebrow}</p>}
            {title && (
              <TitleTag
                className={cn("display-heading text-balance text-[var(--color-text)]", titleSizeClasses[titleAs])}
              >
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
