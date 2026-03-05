import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "flat" | "elevated" | "proof";

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  flat: "bg-[var(--color-surface-1)] border-[var(--color-border)]",
  elevated:
    "bg-[var(--color-surface-2)] border-[var(--color-border)] shadow-[0_24px_48px_-34px_var(--color-shadow)]",
  proof:
    "bg-[linear-gradient(135deg,var(--color-surface-2),var(--color-subtle-bg))] border-[var(--color-border-strong)] shadow-[0_28px_52px_-34px_var(--color-shadow)]",
};

export function Card({ children, className, hoverable = false, variant = "elevated" }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border p-5 transition duration-200 ease-out sm:p-6",
        variantClasses[variant],
        hoverable &&
          "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[0_30px_56px_-36px_var(--color-shadow)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
