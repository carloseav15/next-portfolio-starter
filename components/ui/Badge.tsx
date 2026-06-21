import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "accent" | "muted";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text-soft)]",
  accent:
    "border-[var(--color-badge-accent-border)] bg-[var(--color-badge-accent-bg)] text-[var(--color-badge-accent-text)]",
  muted: "border-[var(--color-border)] bg-transparent text-[var(--color-text-muted)]",
};

export function Badge({ children, className, variant = "default", dismissible, onDismiss }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.02em]",
        variantClasses[variant],
        className,
      )}
    >
      {children}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className="focus-ring -mr-1 ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full opacity-60 transition hover:opacity-100"
          aria-label="Dismiss"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
}
