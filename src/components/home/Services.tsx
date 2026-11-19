"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Receipt, ShieldCheck, Share2 } from "lucide-react";
import { Sedan } from "./visuals";

/** flush: the art sits on the tile's bottom edge (a phone rising from below). */
type Tile = { title: string; line: string; href: string; art: React.ReactNode; flush?: boolean };

const tiles: Tile[] = [
  {
    title: "Economy",
    line: "Everyday rides at the lowest fare.",
    href: "/services#economy",
    art: <Sedan bodyClass="fill-[#11161b] dark:fill-dark-500" className="w-32 sm:w-36" />,
  },
  {
    title: "Standard",
    line: "More room, newer cars.",
    href: "/services#standard",
    art: <Sedan bodyClass="fill-dark-200" className="w-32 sm:w-36" />,
  },
  {
    title: "Premium",
    line: "Our nicest cars, for when it counts.",
    href: "/services#premium",
    art: <Sedan bodyClass="fill-brand dark:fill-[#2f7a46]" className="w-32 sm:w-36" />,
  },
  {
    title: "Zyon for Business",
    line: "Team accounts are coming. Talk to us.",
    href: "/business",
    art: (
      <div className="flex items-end gap-2" aria-hidden="true">
        <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand text-lime">
          <Briefcase className="h-7 w-7" />
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-dark-900 shadow-sm dark:bg-dark-800 dark:text-white">
          <Receipt className="h-5 w-5" />
        </span>
      </div>
    ),
  },
  {
    title: "Drive with Zyon",
    line: "Earn on your own hours.",
    href: "/drive",
    flush: true,
    art: (
      <div className="relative h-24 w-24 overflow-hidden rounded-t-2xl border-x-4 border-t-4 border-ink sm:h-28 sm:w-28" aria-hidden="true">
        <Image src="/images/app/driver-online.webp" alt="" width={720} height={1564} className="w-full" sizes="112px" />
      </div>
    ),
  },
  {
    title: "Safety on every trip",
    line: "Share your trip, call for help in a tap.",
    href: "/safety",
    art: (
      <div className="flex items-end gap-2" aria-hidden="true">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-dark-900 shadow-sm dark:bg-dark-800 dark:text-white">
          <Share2 className="h-5 w-5" />
        </span>
        <span className="grid h-14 w-14 place-items-center rounded-xl bg-lime text-brand">
          <ShieldCheck className="h-7 w-7" />
        </span>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-dark-900 sm:text-4xl dark:text-white">What you can do with Zyon</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={t.href}
                className="group relative flex h-44 flex-col overflow-hidden rounded-2xl bg-mist p-6 transition-colors hover:bg-[#ebefed] dark:bg-ink-raised dark:hover:bg-[#1a221e]"
              >
                <span className="text-lg font-semibold text-dark-900 dark:text-white">{t.title}</span>
                <span className="mt-1 max-w-[60%] text-sm leading-snug text-dark-500 dark:text-dark-300">{t.line}</span>
                <span className={`absolute right-5 transition-transform duration-300 group-hover:-translate-y-1 ${t.flush ? "bottom-0" : "bottom-5"}`}>{t.art}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
