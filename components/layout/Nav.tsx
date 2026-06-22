"use client";

import { FileText, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { MobileNavPanel } from "@/components/layout/MobileNavPanel";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
];

function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableSelector = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    const focusables = Array.from(container.querySelectorAll(focusableSelector)) as HTMLElement[];
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const activeElement = document.activeElement;
      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, containerRef]);
}

export function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelContainerRef = useRef<HTMLDivElement>(null);

  useFocusTrap(panelContainerRef, mobileMenuOpen);

  useEffect(() => {
    if (!mobileMenuOpen) return;

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
            className="focus-ring flex items-center gap-2.5 max-w-[14rem] truncate rounded-md text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text)] sm:max-w-none sm:text-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)] font-outfit text-sm font-bold text-[var(--color-on-accent)] print:hidden">
              CA
            </span>
            <span>Carlos Arancibia</span>
          </Link>

          <div className="ml-auto hidden items-center justify-end gap-1.5 sm:flex sm:gap-2">
            <nav aria-label="Primary" className="flex items-center justify-end gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "focus-ring inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-text-soft)] transition hover:text-[var(--color-text)] sm:px-3.5",
                      isActive && "bg-[var(--color-subtle-bg)] text-[var(--color-text)]",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <ButtonLink
              href="/resume/print"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              data-cta="resume-secondary"
            >
              Resume
              <FileText aria-hidden="true" size={16} className="h-4 w-4" />
              <span className="sr-only"> (opens in new tab)</span>
            </ButtonLink>

            <ButtonLink href="/#contact-section" variant="primary" size="sm" data-cta="talk-primary">
              Let&apos;s Talk
              <MessageCircle aria-hidden="true" size={16} className="h-4 w-4" />
            </ButtonLink>
            <ThemeToggle />
          </div>

          <div className="ml-auto flex items-center gap-2 sm:hidden">
            <ButtonLink href="/#contact-section" variant="primary" size="sm" data-cta="talk-primary">
              Let&apos;s Talk
              <MessageCircle aria-hidden="true" size={16} className="h-4 w-4" />
            </ButtonLink>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls={panelId}
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text-soft)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div ref={panelContainerRef}>
          {mobileMenuOpen && <MobileNavPanel panelId={panelId} onLinkClick={() => setMobileMenuOpen(false)} />}
        </div>
      </Container>
    </header>
  );
}
