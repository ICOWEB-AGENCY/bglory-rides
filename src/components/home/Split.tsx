"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, KeyRound, Layers } from "lucide-react";

const rise = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } };

/** Two panels side by side: what makes a ride safe, and the classes you can book over a Lagos photo. */
export default function Split() {
  return (
    <section className="bg-white py-6 sm:py-8 dark:bg-ink">
      <div className="shell grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        <motion.div {...rise} transition={{ duration: 0.7 }} className="flex flex-col justify-between rounded-[2rem] bg-mist p-8 sm:p-12 dark:bg-ink-raised">
          <h2 className="display max-w-[16ch] text-[clamp(2.2rem,4.2vw,3.9rem)] text-dark-900 dark:text-white">
            A safer ride starts <span className="text-dark-400 dark:text-white/40">before you get in.</span>
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-dark-900 shadow-sm dark:bg-white/10 dark:text-white">
                <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-dark-900 dark:text-white">Drivers checked by our team</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-500 dark:text-white/55">Licence, car papers, insurance and photos of the car, reviewed before a driver takes a single trip.</p>
            </div>
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-dark-900 shadow-sm dark:bg-white/10 dark:text-white">
                <KeyRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-dark-900 dark:text-white">A PIN for every ride</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-500 dark:text-white/55">Your driver enters your 4-digit PIN to start the trip, so you only ever get into the right car.</p>
            </div>
          </div>
        </motion.div>

        <motion.div {...rise} transition={{ duration: 0.7, delay: 0.1 }} className="relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[2rem] bg-ink p-8 sm:p-12">
          <Image
            src="/images/photos/bridge-day.webp"
            alt="Third Mainland Bridge, Lagos, under a blue sky"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="relative text-white">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink">
              <Layers className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">Economy, Standard or Premium</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">Pick by price. Each car&apos;s class comes from its make, model and year.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
