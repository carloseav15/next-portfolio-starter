import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "accent" | "muted";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text-soft)]",
  accent:
    "border-[var(--color-proof-verified-border)] bg-[var(--color-proof-verified-bg)] text-[var(--color-proof-verified-text)]",
  muted: "border-[var(--color-border)] bg-transparent text-[var(--color-text-muted)]",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.02em]",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
