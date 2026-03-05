import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { externalLinks } from "@/lib/links";
import { textLinkClassName } from "@/lib/uiClasses";

const trustLinks = [externalLinks.email, externalLinks.linkedin, externalLinks.github];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="flex flex-wrap items-center justify-end gap-4 text-sm text-[var(--color-text-muted)]">
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
      </Container>
    </footer>
  );
}
