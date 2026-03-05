export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export const THEME_PREFERENCE_STORAGE_KEY = "theme-preference";
export const LEGACY_THEME_STORAGE_KEY = "theme";
export const THEME_CHANGE_EVENT = "themechange";

let currentPreferenceSnapshot: ThemePreference = "system";

const nextPreferenceMap: Record<ThemePreference, ThemePreference> = {
  system: "light",
  light: "dark",
  dark: "system",
};

function isResolvedTheme(value: string | null | undefined): value is ResolvedTheme {
  return value === "light" || value === "dark";
}

export function isThemePreference(value: string | null | undefined): value is ThemePreference {
  return value === "system" || isResolvedTheme(value);
}

export function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const storedPreference = localStorage.getItem(THEME_PREFERENCE_STORAGE_KEY);

    if (isThemePreference(storedPreference)) {
      return storedPreference;
    }

    const legacyPreference = localStorage.getItem(LEGACY_THEME_STORAGE_KEY);

    if (isResolvedTheme(legacyPreference)) {
      localStorage.setItem(THEME_PREFERENCE_STORAGE_KEY, legacyPreference);
      return legacyPreference;
    }
  } catch {
    // Ignore storage access failures.
  }

  return "system";
}

export function setStoredPreference(preference: ThemePreference) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(THEME_PREFERENCE_STORAGE_KEY, preference);
  } catch {
    // Ignore storage access failures.
  }
}

export function getSystemPrefersDark() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function resolveTheme(
  preference: ThemePreference,
  systemPrefersDark = getSystemPrefersDark(),
): ResolvedTheme {
  if (preference === "system") {
    return systemPrefersDark ? "dark" : "light";
  }

  return preference;
}

function syncPreferenceSnapshotFromDom() {
  if (typeof document === "undefined") {
    return false;
  }

  const datasetPreference = document.documentElement.dataset.themePreference;

  if (!isThemePreference(datasetPreference) || datasetPreference === currentPreferenceSnapshot) {
    return false;
  }

  currentPreferenceSnapshot = datasetPreference;
  return true;
}

export function applyResolvedTheme(theme: ResolvedTheme, preference: ThemePreference) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  root.dataset.theme = theme;
  root.dataset.themePreference = preference;
  root.classList.add("theme-ready");

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(THEME_CHANGE_EVENT, {
        detail: { preference, theme },
      }),
    );
  }
}

export function applyThemePreference(preference: ThemePreference) {
  const resolvedTheme = resolveTheme(preference);

  applyResolvedTheme(resolvedTheme, preference);
  return resolvedTheme;
}

export function getNextThemePreference(preference: ThemePreference) {
  return nextPreferenceMap[preference];
}

export function subscribeThemePreference(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const syncAndNotify = () => {
    if (syncPreferenceSnapshotFromDom()) {
      onStoreChange();
    }
  };

  syncAndNotify();

  const handleThemeChange = () => {
    syncAndNotify();
  };

  const handleStorageChange = (event: StorageEvent) => {
    if (
      event.key !== null &&
      event.key !== THEME_PREFERENCE_STORAGE_KEY &&
      event.key !== LEGACY_THEME_STORAGE_KEY
    ) {
      return;
    }

    applyThemePreference(getStoredPreference());
  };

  const handleSystemThemeChange = () => {
    if (getStoredPreference() === "system") {
      applyThemePreference("system");
    }
  };

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleStorageChange);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleStorageChange);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

export function getThemePreferenceSnapshot() {
  return currentPreferenceSnapshot;
}

export function getThemePreferenceServerSnapshot(): ThemePreference {
  return "system";
}
