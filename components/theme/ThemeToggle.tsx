"use client";

import {
  type FocusEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ThemePreference } from "@/lib/theme";
import {
  applyThemePreference,
  getThemePreferenceServerSnapshot,
  getThemePreferenceSnapshot,
  setStoredPreference,
  subscribeThemePreference,
} from "@/lib/theme";

const options: Array<{
  value: ThemePreference;
  label: string;
  description: string;
}> = [
  { value: "system", label: "System", description: "Follow your OS preference" },
  { value: "light", label: "Light", description: "Always use light mode" },
  { value: "dark", label: "Dark", description: "Always use dark mode" },
];

const optionOrder: ThemePreference[] = ["system", "light", "dark"];

function getNextOption(current: ThemePreference, direction: 1 | -1) {
  const currentIndex = optionOrder.indexOf(current);
  const nextIndex = (currentIndex + direction + optionOrder.length) % optionOrder.length;
  return optionOrder[nextIndex];
}

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
  const optionRefs = useRef<Record<ThemePreference, HTMLButtonElement | null>>({
    system: null,
    light: null,
    dark: null,
  });

  const selectPreference = (value: ThemePreference, shouldClose = false) => {
    setStoredPreference(value);
    applyThemePreference(value);

    if (shouldClose) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

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

  useEffect(() => {
    if (!open) {
      return;
    }

    optionRefs.current[preference]?.focus();
  }, [open, preference]);

  const closeIfFocusLeaves = (event: FocusEvent<HTMLDivElement>) => {
    if (!open) {
      return;
    }

    const nextTarget = event.relatedTarget as Node | null;

    if (nextTarget && rootRef.current?.contains(nextTarget)) {
      return;
    }

    setOpen(false);
  };

  const handleGroupKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = getNextOption(preference, 1);
      selectPreference(next);
      optionRefs.current[next]?.focus();
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const previous = getNextOption(preference, -1);
      selectPreference(previous);
      optionRefs.current[previous]?.focus();
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      selectPreference("system");
      optionRefs.current.system?.focus();
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      selectPreference("dark");
      optionRefs.current.dark?.focus();
    }
  };

  return (
    <div ref={rootRef} className="relative" onBlurCapture={closeIfFocusLeaves}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`Theme preference: ${preference}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-3 sm:px-4 text-sm font-semibold text-[var(--color-text-soft)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
          buttonClassName,
        )}
      >
        <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
          <Sun
            className={cn(
              "absolute h-4 w-4 transition-all duration-300",
              preference === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0",
            )}
          />
          <Moon
            className={cn(
              "absolute h-4 w-4 transition-all duration-300",
              preference === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0",
            )}
          />
          <Laptop
            className={cn(
              "absolute h-4 w-4 transition-all duration-300",
              preference === "system" ? "scale-100 opacity-100" : "scale-50 opacity-0",
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

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Theme preference"
          className="absolute right-0 z-40 mt-2 w-60 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] p-2 shadow-[0_20px_40px_-28px_var(--color-shadow)]"
        >
          <div role="radiogroup" aria-label="Theme mode" className="space-y-1" onKeyDown={handleGroupKeyDown}>
            {options.map((option) => {
              const isActive = preference === option.value;

              return (
                <button
                  key={option.value}
                  ref={(node) => {
                    optionRefs.current[option.value] = node;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectPreference(option.value, true)}
                  className="flex min-h-11 w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition hover:bg-[var(--color-subtle-bg)] focus-visible:bg-[var(--color-subtle-bg)] focus-visible:outline-none"
                >
                  <span>
                    <span className="block text-sm font-semibold text-[var(--color-text)]">{option.label}</span>
                    <span className="mt-0.5 block text-xs text-[var(--color-text-muted)]">
                      {option.description}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-4 w-4 rounded-full border ${
                      isActive
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                        : "border-[var(--color-border-strong)]"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
