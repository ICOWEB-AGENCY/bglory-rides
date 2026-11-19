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

/**
 * A list of what the apps do; the chosen item drives one phone, standing free on
 * the page at an angle. The list moves on by itself until the visitor picks an
 * item, and waits while a mouse rests on it.
 */
export default function Showcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [picked, setPicked] = useState(false);
  const auto = !reduce && !picked;
  const paused = hovering || !auto;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((n) => (n + 1) % slides.length), DWELL * 1000);
    return () => clearTimeout(t);
  }, [active, paused]);

  const slide = slides[active];
  return (
    <section className="relative overflow-hidden bg-mist py-24 text-ink sm:py-32" aria-label="Inside the Zyon apps">
      <div className="shell grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div
          onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHovering(false)}
        >
          <h2 className="display max-w-[12ch] text-[clamp(2.4rem,5vw,4.6rem)]">
            Two apps, <span className="text-ink/35">one smooth trip.</span>
          </h2>
          <ul className="mt-12 border-t border-ink/10">
            {slides.map((s, n) => {
              const on = n === active;
              return (
                <li key={s.tag} className="relative border-b border-ink/10">
                  <button
                    type="button"
                    aria-current={on ? "true" : undefined}
                    onClick={() => {
                      setActive(n);
                      setPicked(true);
                    }}
                    className="flex w-full flex-col items-start py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    <span className="flex w-full items-baseline justify-between gap-4">
                      <span className={`text-xl font-semibold tracking-tight transition-colors sm:text-2xl ${on ? "text-ink" : "text-ink/35 hover:text-ink/60"}`}>{s.tag}</span>
                      <span className={`text-xs font-medium transition-colors ${on ? "text-ink/55" : "text-ink/25"}`}>{s.app}</span>
                    </span>
                    <AnimatePresence initial={false}>
                      {on && (
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
                  {/* Time left on this item while the list moves by itself. */}
                  {on && auto && (
                    <motion.span
                      key={`${n}-${hovering}`}
                      aria-hidden="true"
                      className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-ink"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hovering ? 0 : 1 }}
                      transition={{ duration: hovering ? 0.2 : DWELL, ease: "linear" }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* The phone stands free on the page, tilted, with its shadow on the floor; no box around it. */}
        <div className="relative mx-auto h-[min(118vw,680px)] w-full max-w-[560px] [perspective:2400px]">
          <div aria-hidden="true" className="absolute bottom-[4%] left-1/2 h-[7%] w-[58%] -translate-x-1/2 rounded-[50%] bg-ink/25 blur-2xl" />
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={slide.src}
              initial={{ opacity: 0, x: 60, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -60, rotate: -4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[2%] w-[60%] max-w-[340px] -translate-x-1/2"
            >
              <div className="[transform:rotateY(-20deg)_rotateX(10deg)_rotateZ(8deg)] [transform-style:preserve-3d]">
                <DeviceFrame src={slide.src} alt={slide.alt} sizes="(min-width: 1024px) 340px, 60vw" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
