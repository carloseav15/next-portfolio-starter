"use client";

import { type KeyboardEvent as ReactKeyboardEvent, useRef } from "react";
import { cn } from "@/lib/cn";
import type { ThemePreference } from "@/lib/theme";
import { applyThemePreference, setStoredPreference } from "@/lib/theme";

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

type ThemeDropdownProps = {
  panelId: string;
  preference: ThemePreference;
  onClose: () => void;
};

export function ThemeDropdown({ panelId, preference, onClose }: ThemeDropdownProps) {
  const optionRefs = useRef<Record<ThemePreference, HTMLButtonElement | null>>({
    system: null,
    light: null,
    dark: null,
  });

  const selectPreference = (value: ThemePreference, shouldClose = false) => {
    setStoredPreference(value);
    applyThemePreference(value);
    if (shouldClose) {
      onClose();
    }
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
    <div
      id={panelId}
      aria-label="Theme preference"
      className="absolute right-0 z-50 mt-2 w-60 origin-top-right rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-3)] p-2 shadow-dropdown transition-[opacity,transform] duration-200"
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
              className="focus-ring flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2.5 text-left transition hover:bg-[var(--color-subtle-bg)]"
            >
              <span>
                <span className="block text-sm font-semibold text-[var(--color-text)]">{option.label}</span>
                <span className="mt-0.5 block text-xs text-[var(--color-text-muted)]">{option.description}</span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "h-4 w-4 rounded-full border",
                  isActive
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                    : "border-[var(--color-border-strong)]",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
