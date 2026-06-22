"use client";

import { type ComponentPropsWithoutRef, type ElementType, type ReactNode, type MouseEvent, useRef } from "react";
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
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hoverable || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "rounded-lg border transition duration-200 ease-out relative overflow-hidden card-spotlight",
        paddingClasses[padding],
        variantClasses[variant],
        hoverable &&
          "will-change-transform hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-hover",
        selected && "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
