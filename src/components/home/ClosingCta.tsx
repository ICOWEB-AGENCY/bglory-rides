"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";

/** The last thing on the page: a Lagos photo card with the launch email, as in the references' closing card. */
export default function ClosingCta() {
  return (
    <section id="notify" className="scroll-mt-24 bg-white py-6 sm:py-8 dark:bg-ink">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-ink"
        >
          <Image src="/images/photos/bridge-night.webp" alt="Third Mainland Bridge, Lagos, lit up at night" fill sizes="(min-width: 1520px) 1400px, 100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
          <div className="relative max-w-xl p-8 text-white sm:p-12 lg:p-16">
            <h2 className="display text-[clamp(2.4rem,5vw,4.4rem)]">
              Be first to ride <span className="text-white/45">with Zyon.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Both apps are on their way to Google Play and the App Store. Leave your email and we will send one message, the day they are live.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
