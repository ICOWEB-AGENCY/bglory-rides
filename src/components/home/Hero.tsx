"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DeviceFrame from "./DeviceFrame";

const ease = [0.22, 1, 0.36, 1] as const;

/** The headline, word by word: each word rises out of its own line mask. */
const words: { text: string; dim?: boolean }[] = [
  { text: "Your" },
  { text: "ride," },
  { text: "priced" },
  { text: "before", dim: true },
  { text: "you", dim: true },
  { text: "book.", dim: true },
];

/** The thesis: a headline you read from across the room, and the real app rising right under the buttons. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 text-white sm:pt-40">
      {/* Zyon green light behind the phones; one soft source, no glow on the type. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(50%_65%_at_50%_100%,rgba(154,205,50,0.30)_0%,rgba(6,63,30,0.7)_38%,rgba(6,63,30,0.18)_62%,transparent_80%)]" />
      <div className="shell relative text-center">
        <h1 className="display mx-auto max-w-[14ch] text-[clamp(2.9rem,8.2vw,7.4rem)]" aria-label="Your ride, priced before you book.">
          {words.map((w, i) => (
            <span key={w.text} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={`inline-block ${w.dim ? "text-white/45" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease, delay: 0.08 + i * 0.07 }}
              >
                {w.text}
              </motion.span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Book in seconds, follow your driver on the map, and pay with cash, card or your Zyon wallet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.65 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link href="#get-the-app" className="inline-flex w-full items-center justify-center rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-300 sm:w-auto">
            Get the app
          </Link>
          <Link href="/drive" className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 sm:w-auto">
            Drive with Zyon
          </Link>
        </motion.div>

        {/* Three real screens pinned to the top of this band, right under the buttons; the section edge cuts them. */}
        <div className="relative mx-auto mt-8 h-[clamp(320px,44vw,560px)] max-w-[1000px] sm:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.75 }}
            className="absolute left-[2%] top-[14%] w-[30%]"
          >
            <DeviceFrame src="/images/app/rider-choose.webp" alt="Choosing Economy, Standard or Premium with each price shown" sizes="(min-width: 1024px) 300px, 30vw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.82 }}
            className="absolute right-[2%] top-[14%] w-[30%]"
          >
            <DeviceFrame src="/images/app/rider-trips.webp" alt="Past trips with their fares in the Zyon app" sizes="(min-width: 1024px) 300px, 30vw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.7 }}
            className="absolute left-1/2 top-0 w-[40%] -translate-x-1/2"
          >
            <DeviceFrame src="/images/app/rider-home.webp" alt="The Zyon rider app home screen" priority sizes="(min-width: 1024px) 400px, 40vw" />
          </motion.div>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
