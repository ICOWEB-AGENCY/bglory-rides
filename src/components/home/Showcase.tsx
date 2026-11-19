"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DeviceFrame from "./DeviceFrame";

/** Real screens from both apps, one at a time, each with what it does. */
const slides = [
  {
    tag: "Book a ride",
    text: "Type where you are going. The home screen tells you how soon a car can reach you, before you commit to anything.",
    src: "/images/app/rider-home.webp",
    alt: "The rider home screen with Where to and recent places",
  },
  {
    tag: "See the price",
    text: "Economy, Standard and Premium side by side, each with its fare and how far the nearest car is. Pick one and confirm.",
    src: "/images/app/rider-choose.webp",
    alt: "Choose a ride: Economy, Standard and Premium with prices",
  },
  {
    tag: "Go online",
    text: "Drivers go online in one tap and only get requests from riders close by, inside the distance they choose.",
    src: "/images/app/driver-online.webp",
    alt: "The Zyon Driver app online and finding trips",
  },
  {
    tag: "Drive and earn",
    text: "Drivers keep 80% of every fare, see their earnings trip by trip, and withdraw to their bank whenever they like.",
    src: "/images/app/driver-home.webp",
    alt: "The Zyon Driver app home screen",
  },
];

export default function Showcase() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const left = i % 2 === 0;
  return (
    <section className="relative overflow-hidden bg-mist py-24 text-ink sm:py-32" aria-roledescription="carousel" aria-label="Inside the Zyon apps">
      <div className="shell">
        <div className="text-center">
          <h2 className="display mx-auto max-w-[18ch] text-[clamp(2.4rem,5.6vw,5rem)]">
            Two apps, <span className="text-ink/35">one smooth trip.</span>
          </h2>
        </div>

        <div className="relative mt-16 grid min-h-[620px] items-center gap-10 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 40, rotate: left ? -4 : 4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`mx-auto w-[min(78vw,330px)] [perspective:2200px] ${left ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className={left ? "[transform:rotateY(18deg)_rotateX(8deg)_rotateZ(-9deg)]" : "[transform:rotateY(-18deg)_rotateX(8deg)_rotateZ(9deg)]"}>
                <DeviceFrame src={s.src} alt={s.alt} sizes="330px" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={`max-w-md ${left ? "lg:order-2 lg:justify-self-start" : "lg:order-1 lg:justify-self-end"}`}>
            <button
              type="button"
              onClick={() => setI((n) => (n + 1) % slides.length)}
              className="group flex flex-col items-start gap-2 text-xs text-ink/55"
              aria-label={`Next screen: ${slides[(i + 1) % slides.length].tag}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 bg-white transition-colors group-hover:border-ink">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              Next
            </button>
            <AnimatePresence mode="wait">
              <motion.div key={s.tag} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="mt-24" aria-live="polite">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm text-ink shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                  {s.tag}
                </span>
                <p className="mt-5 text-xl leading-relaxed text-ink/70 sm:text-2xl sm:leading-relaxed">{s.text}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex gap-2" role="tablist" aria-label="Screens">
              {slides.map((x, n) => (
                <button
                  key={x.tag}
                  type="button"
                  role="tab"
                  aria-selected={n === i}
                  aria-label={x.tag}
                  onClick={() => setI(n)}
                  className={`h-1.5 rounded-full transition-all ${n === i ? "w-10 bg-ink" : "w-5 bg-ink/15 hover:bg-ink/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
