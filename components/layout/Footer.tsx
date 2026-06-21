import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { externalLinks } from "@/lib/links";
import { textLinkClassName } from "@/lib/uiClasses";

const trustLinks = [externalLinks.email, externalLinks.linkedin, externalLinks.github];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {currentYear} Carlos Arancibia
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
            {trustLinks.map((link) => {
              if (!link.href) {
                return null;
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={`${textLinkClassName} no-underline`}
                >
                  {link.label}
                  {!link.href.startsWith("mailto:") && <span className="sr-only"> (opens in new tab)</span>}
                </Link>
              );
            })}
          </div>

          <a
            href="#site-top"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            Back to top
            <ArrowUp aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
