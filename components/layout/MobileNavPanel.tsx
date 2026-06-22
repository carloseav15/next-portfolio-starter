"use client";

import { FileText, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
];

type MobileNavPanelProps = {
  panelId: string;
  onLinkClick: () => void;
};

export function MobileNavPanel({ panelId, onLinkClick }: MobileNavPanelProps) {
  const pathname = usePathname();

  return (
    <div
      id={panelId}
      aria-label="Mobile navigation"
      className="mt-3 space-y-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3 shadow-[0_22px_40px_-28px_var(--color-shadow)] sm:hidden"
    >
      <nav aria-label="Mobile primary" className="grid gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              onClick={onLinkClick}
              className={cn(
                "focus-ring inline-flex min-h-11 items-center rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-[var(--color-text-soft)] transition hover:border-[var(--color-border)] hover:bg-[var(--color-subtle-bg)] hover:text-[var(--color-text)]",
                isActive && "border-[var(--color-border)] bg-[var(--color-subtle-bg)] text-[var(--color-text)]",
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
        data-cta="resume-mobile"
        onClick={onLinkClick}
        className="w-full justify-between"
      >
        Resume
        <FileText aria-hidden="true" size={16} className="h-4 w-4" />
        <span className="sr-only"> (opens in new tab)</span>
      </ButtonLink>

      <ButtonLink
        href="/#contact-section"
        variant="primary"
        size="sm"
        data-cta="talk-mobile"
        onClick={onLinkClick}
        className="w-full justify-between"
      >
        Let&apos;s Talk
        <MessageCircle aria-hidden="true" size={16} className="h-4 w-4" />
      </ButtonLink>

      <ThemeToggle showLabelOnMobile buttonClassName="w-full justify-between" />
    </div>
  );
}
