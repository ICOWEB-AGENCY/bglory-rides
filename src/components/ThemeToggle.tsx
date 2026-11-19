"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type ThemeChoice } from "./ThemeProvider";

const choices: { value: ThemeChoice; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "system", label: "System", Icon: Monitor },
  { value: "dark", label: "Dark", Icon: Moon },
];

/** A small circle in the footer showing the current theme; it opens Light, System and Dark. */
export default function ThemeToggle() {
  const { choice, setChoice } = useTheme();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const Current = choices.find((c) => c.value === choice)?.Icon ?? Monitor;

  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-controls="theme-choices"
        aria-expanded={open}
        aria-label="Change theme"
        className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
      >
        <Current className="h-4 w-4" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="theme-choices"
            role="radiogroup"
            aria-label="Theme"
            onKeyDown={(e) => {
              // Arrow keys move the choice, as in any radio group.
              const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
              if (!step) return;
              e.preventDefault();
              const at = choices.findIndex((c) => c.value === choice);
              const next = choices[(at + step + choices.length) % choices.length];
              setChoice(next.value);
              e.currentTarget.querySelector<HTMLButtonElement>(`[data-theme-choice="${next.value}"]`)?.focus();
            }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-11 left-1/2 flex -translate-x-1/2 gap-1 rounded-xl border border-white/10 bg-ink-raised p-1 shadow-xl"
          >
            {choices.map(({ value, label, Icon }) => (
              <button
                key={value}
                type="button"
                role="radio"
                data-theme-choice={value}
                tabIndex={choice === value ? 0 : -1}
                aria-checked={choice === value}
                aria-label={label}
                title={label}
                onClick={() => {
                  setChoice(value);
                  setOpen(false);
                }}
                className={`grid h-9 w-9 place-items-center rounded-lg transition-colors ${
                  choice === value ? "bg-lime text-brand" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
