"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "./visuals";

export default function Hero() {
  return (
    <section className="px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-brand-hero text-white">
        <div className="relative grid items-center gap-10 px-6 pb-0 pt-12 sm:px-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-14 lg:pt-0">
          <div className="lg:py-24">
            <p className="text-sm font-semibold text-lime">Now riding in Abuja</p>
            <h1 className="mt-4 text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Rides across Abuja, at a <span className="text-lime">fair price</span>.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              Book in seconds, watch your car arrive, and pay how you like. You see the price before you book.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#get-the-app"
                className="inline-flex w-full items-center justify-center rounded-lg bg-lime px-6 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-primary-300 sm:w-auto"
              >
                Get the app
              </Link>
              <Link
                href="/drive"
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Drive with Zyon
              </Link>
            </div>
          </div>

          {/* Two real screens: home, then choosing a ride. They rise into the frame and are cut by its bottom edge. */}
          <div className="relative mx-auto h-[380px] w-full max-w-[460px] sm:h-[460px] lg:h-[560px]">
            <motion.div
              className="absolute bottom-[-120px] left-[4%] w-[52%] sm:bottom-[-150px]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Phone src="/images/app/rider-choose.webp" alt="Choosing a ride in the Zyon app: Economy, Standard and Premium with fares" />
            </motion.div>
            <motion.div
              className="absolute bottom-[-60px] right-[4%] w-[56%] sm:bottom-[-80px]"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Phone src="/images/app/rider-home.webp" alt="The Zyon rider app home screen showing when a car can arrive" priority />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
