"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  variant?: "navbar" | "default";
  scrolled?: boolean;
}

export default function ThemeToggle({ variant = "default", scrolled = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  if (variant === "navbar") {
    return (
      <button
        onClick={toggleTheme}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
          scrolled
            ? "text-dark-600 hover:text-dark-900 hover:bg-surface-100 dark:text-dark-400 dark:hover:text-white dark:hover:bg-white/10"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? (
          <Sun className="w-[18px] h-[18px]" />
        ) : (
          <Moon className="w-[18px] h-[18px]" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full text-dark-500 hover:text-primary-400 transition-colors cursor-pointer dark:text-dark-400 dark:hover:text-primary-400"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}
