"use client";

import { motion } from "framer-motion";

const points = [
  { title: "The price before you book", text: "Busy-hour pricing is already in the fare you see. It changes only if the trip turns out much longer than planned." },
  { title: "Your trip, shared live", text: "Send your trip link to anyone on WhatsApp. They follow your car on the map until you arrive." },
  { title: "Picked up where you stand", text: "Your pickup pin is your exact spot, not the middle of the road, so your driver comes straight to you." },
];

const rise = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } };

export default function Intro() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <motion.h2 {...rise} transition={{ duration: 0.7 }} className="display text-[clamp(2.6rem,6vw,5.4rem)]">
            Getting around, <span className="text-white/40">sorted.</span>
          </motion.h2>
          <motion.p {...rise} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-md text-base leading-relaxed text-white/55 lg:justify-self-end lg:pb-3">
            One app for riders and one for drivers, made for how Nigeria moves: cash or card, busy roads, and pickups that find you.
          </motion.p>
        </div>
        <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-8">
          {points.map((p, i) => (
            <motion.div key={p.title} {...rise} transition={{ duration: 0.6, delay: 0.08 * i }}>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
