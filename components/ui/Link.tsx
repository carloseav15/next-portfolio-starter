import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BaseLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  LinkProps & {
    children: ReactNode;
    className?: string;
    external?: boolean;
  };

const focusRingClasses = "focus-ring";

export const textLinkClasses = cn(
  focusRingClasses,
  "underline decoration-[0.08em] underline-offset-4 text-[var(--color-link)] transition hover:text-[var(--color-link-hover)]",
);

export const actionLinkClasses = cn(
  focusRingClasses,
  "inline-flex min-h-12 items-center gap-1.5 rounded-md px-3 text-sm font-semibold text-[var(--color-link)] transition hover:bg-[var(--color-subtle-bg)] hover:text-[var(--color-link-hover)]",
);

export const compactActionLinkClasses = cn(
  focusRingClasses,
  "inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-[var(--color-link)] underline decoration-[0.08em] underline-offset-4 transition hover:text-[var(--color-link-hover)]",
);

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M10.5 7.5V10.5H1.5V1.5H4.5M7.5 1.5H10.5V4.5M10.5 1.5L4.5 7.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextLink({ children, className, external, ...props }: BaseLinkProps) {
  return (
    <Link
      className={cn(textLinkClasses, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external && (
        <>
          <ExternalIcon />
          <span className="sr-only"> (opens in new tab)</span>
        </>
      )}
    </Link>
  );
}

export function ActionLink({ children, className, external, ...props }: BaseLinkProps) {
  return (
    <Link
      className={cn(actionLinkClasses, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external && (
        <>
          <ExternalIcon />
          <span className="sr-only"> (opens in new tab)</span>
        </>
      )}
    </Link>
  );
}

export function CompactActionLink({ children, className, external, ...props }: BaseLinkProps) {
  return (
    <Link
      className={cn(compactActionLinkClasses, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external && (
        <>
          <ExternalIcon />
          <span className="sr-only"> (opens in new tab)</span>
        </>
      )}
    </Link>
  );
}
