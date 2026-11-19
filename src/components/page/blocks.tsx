"use client";

import { motion } from "framer-motion";

const rise = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } } as const;

const tones = {
  white: "bg-white text-ink dark:bg-ink dark:text-white",
  mist: "bg-mist text-ink dark:bg-ink-raised dark:text-white",
  ink: "bg-ink text-white",
} as const;

/** A full-width band of the page; inner pages alternate white and mist like the home page. */
export function Band({ tone = "white", id, children, className = "" }: { tone?: keyof typeof tones; id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

/** A two-tone display heading: the point in full colour, the rest quieter. */
export function Heading({ title, dim, className = "", as: Tag = "h2" }: { title: string; dim?: string; className?: string; as?: "h2" | "h3" }) {
  return (
    <motion.div {...rise} transition={{ duration: 0.7 }}>
      <Tag className={`display max-w-[18ch] text-[clamp(2.2rem,4.8vw,4.2rem)] ${className}`}>
        {title} {dim && <span className="opacity-40">{dim}</span>}
      </Tag>
    </motion.div>
  );
}

/** Fades and lifts its children in once, when scrolled into view. */
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div {...rise} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

/** The closing card on each page: one ask, one main button. */
export function CtaCard({ title, dim, text, children }: { title: string; dim?: string; text: string; children: React.ReactNode }) {
  return (
    <section className="bg-white py-6 sm:py-8 dark:bg-ink">
      <div className="shell">
        <motion.div {...rise} transition={{ duration: 0.7 }} className="rounded-[2rem] bg-ink p-8 text-white sm:p-12 lg:p-16">
          <h2 className="display max-w-[16ch] text-[clamp(2.2rem,4.6vw,4rem)]">
            {title} {dim && <span className="text-white/45">{dim}</span>}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
