"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";
import DeviceFrame from "./DeviceFrame";

/** The last thing on the page: the launch email on one side, Lagos at night and the app on the other. */
export default function ClosingCta() {
  return (
    <section id="notify" className="scroll-mt-24 bg-white py-6 sm:py-8 dark:bg-ink">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden rounded-[2rem] bg-ink text-white lg:grid-cols-[1fr_1fr]"
        >
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <h2 className="display text-[clamp(2.4rem,4.6vw,4.2rem)]">
              Be first to ride <span className="text-white/45">with Zyon.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
              Both apps are on their way to Google Play and the App Store. Leave your email and we will send one message, the day they are live.
            </p>
            <div className="mt-8 max-w-md">
              <WaitlistForm />
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden">
            <Image src="/images/photos/bridge-night.webp" alt="Third Mainland Bridge, Lagos, lit up at night" fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="absolute left-1/2 top-[12%] w-[min(46%,260px)] -translate-x-1/2"
            >
              <DeviceFrame src="/images/app/rider-home.webp" alt="The Zyon rider app home screen" sizes="260px" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
