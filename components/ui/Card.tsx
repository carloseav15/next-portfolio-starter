import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "flat" | "elevated" | "proof";
type CardPadding = "compact" | "normal" | "spacious";

type CardOwnProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  selected?: boolean;
  variant?: CardVariant;
  padding?: CardPadding;
  as?: ElementType;
};

type CardProps = CardOwnProps & Omit<ComponentPropsWithoutRef<"div">, keyof CardOwnProps>;

const variantClasses: Record<CardVariant, string> = {
  flat: "bg-[var(--color-surface-1)] border-[var(--color-border)]",
  elevated: "bg-[var(--color-surface-2)] border-[var(--color-border)] shadow-elevated",
  proof:
    "bg-[linear-gradient(135deg,var(--color-surface-2),var(--color-subtle-bg))] border-[var(--color-border-strong)] shadow-proof",
};

const paddingClasses: Record<CardPadding, string> = {
  compact: "p-4",
  normal: "p-5 sm:p-6",
  spacious: "p-6 sm:p-8",
};

export function Card({
  children,
  className,
  hoverable = false,
  selected = false,
  variant = "elevated",
  padding = "normal",
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg border transition duration-200 ease-out",
        paddingClasses[padding],
        variantClasses[variant],
        hoverable &&
          "will-change-transform hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-hover",
        selected && "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]",
        className,
      )}
    >
      {children}
    </Component>
  );
}
