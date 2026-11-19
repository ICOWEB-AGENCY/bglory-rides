"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
/** What the visitor picked: a theme, or follow the phone or computer. */
export type ThemeChoice = Theme | "system";

interface ThemeContextType {
  theme: Theme;
  choice: ThemeChoice;
  setChoice: (choice: ThemeChoice) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  choice: "system",
  setChoice: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

// Key kept from before the Zyon name so visitors keep their saved choice.
const STORAGE_KEY = "bglory-theme";
const THEME_EVENT = "site-theme-change";

// The saved choice (or the system setting) lives outside React, so it is
// read as an external store. The server and hydration render see "light";
// the anti-flash script in layout.tsx has already set the <html> class, so
// the class only changes on a real change (toggle or system setting), never
// from a render.
// Used when storage is blocked (private mode), so the choice still holds
// for this page even though it cannot be saved.
let unsavedChoice: ThemeChoice = "system";

function readChoice(): ThemeChoice {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return unsavedChoice;
  }
}

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readTheme(): Theme {
  const choice = readChoice();
  return choice === "system" ? systemTheme() : choice;
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  // Another tab, this tab or the device setting changed: the page follows,
  // not only the switch's icon.
  const follow = () => {
    applyTheme(readTheme());
    onChange();
  };
  window.addEventListener("storage", follow);
  window.addEventListener(THEME_EVENT, follow);
  mq.addEventListener("change", follow);
  return () => {
    window.removeEventListener("storage", follow);
    window.removeEventListener(THEME_EVENT, follow);
    mq.removeEventListener("change", follow);
  };
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribe, readTheme, () => "light");
  const choice = useSyncExternalStore<ThemeChoice>(subscribe, readChoice, () => "system");

  const setChoice = useCallback((next: ThemeChoice) => {
    unsavedChoice = next;
    try {
      if (next === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not saved; unsavedChoice keeps it until the page reloads.
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  return <ThemeContext.Provider value={{ theme, choice, setChoice }}>{children}</ThemeContext.Provider>;
}
