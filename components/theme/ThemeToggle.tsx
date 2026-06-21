"use client";

import { type FocusEvent, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ThemePreference } from "@/lib/theme";
import { getThemePreferenceServerSnapshot, getThemePreferenceSnapshot, subscribeThemePreference } from "@/lib/theme";
import { ThemeDropdown } from "@/components/theme/ThemeDropdown";

const labelMap: Record<ThemePreference, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

type ThemeToggleProps = {
  showLabelOnMobile?: boolean;
  buttonClassName?: string;
};

export function ThemeToggle({ showLabelOnMobile = false, buttonClassName }: ThemeToggleProps) {
  const preference = useSyncExternalStore(
    subscribeThemePreference,
    getThemePreferenceSnapshot,
    getThemePreferenceServerSnapshot,
  );

  const panelId = useId();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  const closeIfFocusLeaves = (event: FocusEvent<HTMLDivElement>) => {
    if (!open) return;
    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && rootRef.current?.contains(nextTarget)) return;
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative" onBlurCapture={closeIfFocusLeaves}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`Current theme: ${labelMap[preference]}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-3 text-sm font-semibold text-[var(--color-text-soft)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)] sm:px-4",
          buttonClassName,
        )}
      >
        <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
          <Sun
            className={cn(
              "absolute h-4 w-4 transition-all duration-200",
              preference === "light" ? "scale-100 opacity-100" : "scale-75 opacity-0",
            )}
          />
          <Moon
            className={cn(
              "absolute h-4 w-4 transition-all duration-200",
              preference === "dark" ? "scale-100 opacity-100" : "scale-75 opacity-0",
            )}
          />
          <Laptop
            className={cn(
              "absolute h-4 w-4 transition-all duration-200",
              preference === "system" ? "scale-100 opacity-100" : "scale-75 opacity-0",
            )}
          />
        </span>
        {showLabelOnMobile ? (
          <span>Theme</span>
        ) : (
          <>
            <span className={cn("hidden sm:inline")}>Theme</span>
            <span className="sr-only sm:hidden">Theme</span>
          </>
        )}
      </button>

      {open && <ThemeDropdown panelId={panelId} preference={preference} onClose={() => setOpen(false)} />}
    </div>
  );
}
