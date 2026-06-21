import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/Link";
import { externalLinks } from "@/lib/links";

const trustLinks = [externalLinks.email, externalLinks.linkedin, externalLinks.github];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">&copy; {currentYear} Carlos Arancibia</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
            {trustLinks.map((link) => {
              if (!link.href) {
                return null;
              }

              return (
                <TextLink
                  key={link.id}
                  href={link.href}
                  className="no-underline"
                  external={!link.href.startsWith("mailto:")}
                >
                  {link.label}
                </TextLink>
              );
            })}
            <span className="text-[var(--color-border)] select-none" aria-hidden="true">
              |
            </span>
            <TextLink href="/ui-kit" className="no-underline">
              UI Kit
            </TextLink>
          </div>

          <a
            href="#site-top"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
          >
            Back to top
            <ArrowUp aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
