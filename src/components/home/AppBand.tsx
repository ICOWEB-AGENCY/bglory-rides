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

/** The official store badges (Google and Apple artwork). The apps are not listed yet, so they are not links. */
function StoreBadges() {
  return (
    <div className="mt-12">
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
        <div className="relative grid overflow-hidden rounded-[2rem] bg-mist lg:grid-cols-2 dark:bg-ink-raised">
          <div className="p-8 sm:p-12 lg:py-20">
            <h2 className="display max-w-[14ch] text-[clamp(2.2rem,4.2vw,3.9rem)] text-dark-900 dark:text-white">
              Get the app <span className="text-dark-400 dark:text-white/40">first.</span>
            </h2>
            <ul className="mt-12 space-y-8">
              {features.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ink shadow-sm dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white">{title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-dark-500 dark:text-white/55">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <StoreBadges />
          </div>
          <div className="relative min-h-[420px] [perspective:2200px] lg:min-h-0">
            <div className="absolute bottom-[-18%] left-1/2 w-[min(64%,340px)] -translate-x-1/2 lg:bottom-[-12%]">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* The tilt sits on its own element: Framer Motion owns the transform of the animated one. */}
                <div className="[transform:rotateY(-14deg)_rotateX(6deg)_rotateZ(6deg)]">
                  <DeviceFrame src="/images/app/rider-choose.webp" alt="Choose a ride in the Zyon app, with the price for each class" sizes="340px" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
