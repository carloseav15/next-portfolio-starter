import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { textLinkClasses } from "@/components/ui/Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: ({ src, alt, className }) => (
      <div
        className={`relative my-8 aspect-[16/10] w-full overflow-hidden rounded-xl border border-dashed border-[var(--color-border-strong)] bg-[var(--color-subtle-bg)] flex flex-col items-center justify-center text-[var(--color-text-soft)] p-6 ${className ?? ""}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-1)] border border-[var(--color-border)] shadow-sm">
          <svg
            className="h-6 w-6 text-[var(--color-text-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <span className="mt-3 text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider">
          {alt || "Screenshot Placeholder"}
        </span>
        {src ? <span className="mt-1 text-xs text-[var(--color-text-muted)] font-mono">Path: {src}</span> : null}
      </div>
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={`display-heading mt-10 text-2xl text-[var(--color-text)] sm:text-3xl ${className ?? ""}`}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={`mt-8 text-xl font-semibold tracking-tight text-[var(--color-text)] ${className ?? ""}`}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={`mt-4 text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base ${className ?? ""}`}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={`mt-4 list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base ${className ?? ""}`}
        {...props}
      />
    ),
    li: ({ className, ...props }) => <li className={`pl-1 ${className ?? ""}`} {...props} />,
    strong: ({ className, ...props }) => (
      <strong className={`font-semibold text-[var(--color-text)] ${className ?? ""}`} {...props} />
    ),
    a: ({ href = "#", className, ...props }) => (
      <Link href={href} className={`${textLinkClasses} ${className ?? ""}`} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={`mt-4 border-l-2 border-[var(--color-accent)] pl-4 text-[var(--color-text)] ${className ?? ""}`}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={`rounded border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-1.5 py-0.5 font-mono text-[0.95em] text-[var(--color-text)] ${className ?? ""}`}
        {...props}
      />
    ),
    ...components,
  };
}
