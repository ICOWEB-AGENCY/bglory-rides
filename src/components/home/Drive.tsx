"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock3, Navigation, Wallet } from "lucide-react";
import { Phone, Sedan } from "./art";

const points = [
  { icon: Clock3, title: "Drive when it suits you", text: "Go online for an hour or a whole day. Requests come from riders close by." },
  { icon: Wallet, title: "See what you earn first", text: "Every request shows your earnings before you accept, so you choose the trips worth taking." },
  { icon: Navigation, title: "Turn by turn, out loud", text: "Clear directions in a Nigerian voice, on the map that turns with your car." },
];

export default function Drive() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* The driver's real screen over a block of brand green, with the car pulling in. */}
        <div className="relative order-2 mx-auto h-[440px] w-full max-w-[480px] lg:order-1 lg:h-[520px]">
          <div className="absolute inset-y-10 left-[18%] right-0 rounded-[28px] bg-[#9ACD32]" />
          <motion.div
            className="absolute left-[30%] top-0 w-[46%] sm:w-[42%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Phone src="/images/app/driver-online.webp" alt="The Zyon driver app online and finding trips nearby" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-[58%]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Sedan bodyClass="fill-[#063F1E]" className="w-full drop-shadow-[0_18px_18px_rgba(0,0,0,0.25)]" />
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tight text-dark-900 sm:text-4xl dark:text-white">Earn with Zyon, on your hours</h2>
          <ul className="mt-10 space-y-7">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#4b6616] dark:text-[#9ACD32]" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-dark-900 dark:text-white">{title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-dark-500 dark:text-dark-300">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/drive"
            className="mt-10 inline-flex w-full items-center justify-center rounded-lg bg-dark-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-dark-800 sm:w-auto dark:bg-white dark:text-dark-900 dark:hover:bg-dark-100"
          >
            Become a driver
          </Link>
        </div>
      </div>
    </section>
  );
}
