import type { LucideIcon } from "lucide-react";
import { Reveal } from "./blocks";

export type RuledItem = { title: string; text: string; icon?: LucideIcon };

/**
 * Points in columns under one rule each: the list style used across the site.
 * A server component, so pages can hand it icon components directly.
 */
export function Ruled({ items, cols = 3 }: { items: RuledItem[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid gap-x-10 gap-y-12 ${grid}`}>
      {items.map(({ title, text, icon: Icon }, i) => (
        <li key={title}>
          <Reveal delay={0.06 * i} className="border-t border-current/15 pt-6">
            {Icon && <Icon className="mb-5 h-6 w-6" strokeWidth={1.6} aria-hidden="true" />}
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed opacity-60">{text}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
