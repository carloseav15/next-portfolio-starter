"use client";

import { FileText, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (!headerRef.current?.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-header-bg)] backdrop-blur-sm"
    >
      <Container className="py-2.5 sm:py-3">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="max-w-[8.8rem] truncate rounded-md text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:max-w-none sm:text-sm"
          >
            Carlos Arancibia
          </Link>

          <div className="ml-auto hidden items-center justify-end gap-1.5 sm:flex sm:gap-2">
            <nav aria-label="Primary" className="flex items-center justify-end gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-full border border-transparent px-3 py-2 text-sm font-semibold text-[var(--color-text-soft)] transition hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:px-3.5",
                      isActive &&
                        "border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text)]",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <ButtonLink
              href="/resume/carlos-arancibia-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              data-cta="resume-secondary"
              className="min-h-11 gap-2 px-3.5 sm:px-4"
            >
              Resume
              <FileText aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only"> (opens in new tab)</span>
            </ButtonLink>

            <ButtonLink
              href="/contact"
              variant="primary"
              data-cta="talk-primary"
              className="min-h-11 gap-2 px-4 sm:px-5"
            >
              Let&apos;s Talk
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <ThemeToggle />
          </div>

          <div className="ml-auto flex items-center gap-2 sm:hidden">
            <ButtonLink href="/contact" variant="primary" data-cta="talk-primary" className="min-h-11 gap-2 px-3.5">
              Let&apos;s Talk
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls={panelId}
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text-soft)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id={panelId}
            aria-label="Mobile navigation"
            className="mt-3 space-y-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3 shadow-[0_22px_40px_-28px_var(--color-shadow)] sm:hidden"
          >
            <nav aria-label="Mobile primary" className="grid gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-[var(--color-text-soft)] transition hover:border-[var(--color-border)] hover:bg-[var(--color-subtle-bg)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
                      isActive &&
                        "border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text)]",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <ButtonLink
              href="/resume/carlos-arancibia-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              data-cta="resume-mobile"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-between gap-2 rounded-xl px-3.5"
            >
              Resume PDF
              <FileText aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only"> (opens in new tab)</span>
            </ButtonLink>

            <ThemeToggle showLabelOnMobile buttonClassName="w-full justify-between rounded-xl px-3.5" />
          </div>
        )}
      </Container>
    </header>
  );
}
