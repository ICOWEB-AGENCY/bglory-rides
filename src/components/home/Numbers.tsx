"use client";

import { motion } from "framer-motion";

/** Numbers the apps enforce today. No user counts until there are real ones. */
const numbers = [
  { label: "Driver share", value: "80%", text: "of every fare goes to the driver." },
  { label: "Ride PIN", value: "4", text: "digits stand between you and the wrong car." },
  { label: "Trusted contacts", value: "5", text: "people can be on your emergency list." },
  { label: "Ride classes", value: "3", text: "Economy, Standard and Premium, each priced up front." },
];

export default function Numbers() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <div className="shell grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {numbers.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 * i }}
          >
            <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">{n.label}</span>
            <p className="display mt-5 text-[clamp(3.4rem,6vw,5.2rem)]">{n.value}</p>
            <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-white/50">{n.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
