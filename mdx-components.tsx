import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { textLinkClasses } from "@/components/ui/Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: ({ src, alt, className }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ""}
        className={`my-8 block w-full rounded-xl border border-[var(--color-border)] shadow-sm aspect-[16/10] object-cover ${className ?? ""}`}
        loading="lazy"
      />
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
