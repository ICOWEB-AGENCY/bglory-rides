"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import DeviceFrame from "./DeviceFrame";

/** Real screens from both apps, each with what it does. */
const slides = [
  { app: "Rider app", tag: "Book a ride", text: "Type where you are going. The home screen shows how soon a car can reach you before you commit to anything.", src: "/images/app/rider-home.webp", alt: "The rider home screen with Where to and recent places" },
  { app: "Rider app", tag: "See the price", text: "Economy, Standard and Premium side by side, each with its fare and how far the nearest car is.", src: "/images/app/rider-choose.webp", alt: "Choose a ride: Economy, Standard and Premium with prices" },
  { app: "Driver app", tag: "Go online", text: "Drivers go online in one tap and only get requests from riders inside the distance they choose.", src: "/images/app/driver-online.webp", alt: "The Zyon Driver app online and finding trips" },
  { app: "Driver app", tag: "Drive and earn", text: "Drivers keep 80% of every fare and withdraw to their own bank whenever they like.", src: "/images/app/driver-home.webp", alt: "The Zyon Driver app home screen" },
];

const DWELL = 6; // seconds on each screen before moving on

/** A list of what the apps do; the active item drives the phone, and the list moves on by itself unless the visitor is reading. */
export default function Showcase() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (reduce || held) return;
    const t = setTimeout(() => setI((n) => (n + 1) % slides.length), DWELL * 1000);
    return () => clearTimeout(t);
  }, [i, held, reduce]);

  return (
    <section className="relative overflow-hidden bg-mist py-24 text-ink sm:py-32" aria-label="Inside the Zyon apps">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)} onFocus={() => setHeld(true)} onBlur={() => setHeld(false)}>
          <h2 className="display max-w-[12ch] text-[clamp(2.4rem,5vw,4.6rem)]">
            Two apps, <span className="text-ink/35">one smooth trip.</span>
          </h2>
          <ul className="mt-12 border-t border-ink/10" role="tablist" aria-label="What the apps do">
            {slides.map((s, n) => {
              const active = n === i;
              return (
                <li key={s.tag} className="relative border-b border-ink/10">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setI(n)}
                    className="flex w-full flex-col items-start py-6 text-left"
                  >
                    <span className="flex w-full items-baseline justify-between gap-4">
                      <span className={`text-xl font-semibold tracking-tight transition-colors sm:text-2xl ${active ? "text-ink" : "text-ink/35 hover:text-ink/60"}`}>{s.tag}</span>
                      <span className={`text-xs font-medium transition-colors ${active ? "text-ink/55" : "text-ink/25"}`}>{s.app}</span>
                    </span>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.span
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="block overflow-hidden"
                        >
                          <span className="block max-w-md pt-3 text-base leading-relaxed text-ink/60">{s.text}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                  {/* Time left on this item; it pauses while the visitor reads. */}
                  {active && !reduce && (
                    <motion.span
                      key={`${n}-${held}`}
                      aria-hidden="true"
                      className="absolute bottom-[-1px] left-0 h-px origin-left bg-ink"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: held ? 0 : 1 }}
                      transition={{ duration: held ? 0.2 : DWELL, ease: "linear" }}
                      style={{ width: "100%" }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[2rem] bg-white">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(6,63,30,0.16),transparent_70%)]" />
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={slides[i].src}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[9%] w-[58%] -translate-x-1/2"
            >
              <DeviceFrame src={slides[i].src} alt={slides[i].alt} sizes="(min-width: 1024px) 330px, 58vw" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
