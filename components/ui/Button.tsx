import Link, { type LinkProps } from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonBase =
  "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-[0.02em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] active:translate-y-px";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[linear-gradient(120deg,var(--color-accent),var(--color-accent-strong))] text-[var(--color-on-accent)] shadow-[0_14px_28px_-18px_var(--color-accent-strong)] hover:-translate-y-0.5 hover:shadow-[0_20px_34px_-20px_var(--color-accent-strong)]",
  secondary:
    "border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-text-soft)] hover:-translate-y-0.5 hover:text-[var(--color-text)]",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={cn(buttonBase, buttonVariants[variant], className)} {...props} />;
}

type ButtonLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  LinkProps & {
    children: ReactNode;
    variant?: ButtonVariant;
    className?: string;
  };

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonBase, buttonVariants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
