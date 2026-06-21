import Link, { type LinkProps } from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "focus-ring inline-flex items-center justify-center rounded-md border font-semibold tracking-[0.02em] transition duration-200 ease-out active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 gap-1.5 px-3.5 py-1.5 text-xs",
  md: "min-h-11 gap-2 px-5 py-2.5 text-sm",
  lg: "min-h-12 gap-2.5 px-6 py-3 text-base",
};

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[linear-gradient(120deg,var(--color-accent),var(--color-accent-strong))] text-on-accent shadow-button hover:shadow-[0_4px_12px_var(--color-shadow)]",
  secondary:
    "border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-text-soft)] hover:bg-[var(--color-subtle-bg)] hover:text-[var(--color-text)]",
};

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedButtonProps;

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  isLoading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonBase, sizeClasses[size], buttonVariants[variant], fullWidth && "w-full", className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && <Spinner />}
      {!isLoading && icon && iconPosition === "left" && icon}
      {children}
      {!isLoading && icon && iconPosition === "right" && icon}
    </button>
  );
}

type ButtonLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & LinkProps & SharedButtonProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = "primary", size = "md", fullWidth = false, icon, iconPosition = "left", children, className, ...props },
  ref,
) {
  return (
    <Link
      ref={ref}
      className={cn(buttonBase, sizeClasses[size], buttonVariants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
});
