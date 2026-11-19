"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Banknote, LifeBuoy, ReceiptText } from "lucide-react";
import DeviceFrame from "./DeviceFrame";

const features = [
  { icon: Banknote, title: "Pay how you like", text: "Cash to your driver, a card, or your Zyon wallet. Pick before you confirm the ride." },
  { icon: ReceiptText, title: "A receipt for every trip", text: "Every ride lands in your trip history with its fare, route and receipt." },
  { icon: LifeBuoy, title: "Help from inside the app", text: "Open a past trip to report a problem, or write to us from Help in the app." },
];

const rise = { initial: { opacity: 0, y: 70 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } };

/** The official store badges (Google and Apple artwork). The apps are not listed yet, so they are not links. */
function StoreBadges() {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-3">
        <Image src="/images/badges/google-play.png" alt="Get it on Google Play" width={564} height={168} className="h-12 w-auto" />
        <Image src="/images/badges/app-store.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto" />
      </div>
      <p className="mt-3 text-xs text-dark-400 dark:text-white/45">Coming soon to both stores.</p>
    </div>
  );
}

export default function AppBand() {
  return (
    <section id="get-the-app" className="scroll-mt-24 bg-white py-6 sm:py-8 dark:bg-ink">
      <div className="shell">
        <div className="grid overflow-hidden rounded-[2rem] bg-mist lg:grid-cols-[1fr_1fr] dark:bg-ink-raised">
          <div className="p-8 sm:p-12 lg:p-16">
            <h2 className="display max-w-[12ch] text-[clamp(2.2rem,4.2vw,3.9rem)] text-dark-900 dark:text-white">
              Get the app <span className="text-dark-400 dark:text-white/40">first.</span>
            </h2>
            <ul className="mt-10 divide-y divide-dark-900/10 border-y border-dark-900/10 dark:divide-white/10 dark:border-white/10">
              {features.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-5 py-6">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-dark-900 dark:text-white" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white">{title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-dark-500 dark:text-white/55">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <StoreBadges />
          </div>

          {/* Two real screens standing side by side, cut by the panel's bottom edge. */}
          <div className="relative min-h-[460px] overflow-hidden lg:min-h-0">
            <motion.div {...rise} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="absolute left-[10%] top-[16%] w-[44%] max-w-[290px]">
              <DeviceFrame src="/images/app/rider-trips.webp" alt="Past trips with their fares in the Zyon app" sizes="290px" />
            </motion.div>
            <motion.div {...rise} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }} className="absolute right-[8%] top-[8%] w-[48%] max-w-[320px]">
              <DeviceFrame src="/images/app/rider-choose.webp" alt="Choose a ride in the Zyon app, with the price for each class" sizes="320px" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
