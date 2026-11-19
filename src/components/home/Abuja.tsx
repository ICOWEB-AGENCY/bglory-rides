"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ReceiptText, Volume2 } from "lucide-react";

const points = [
  {
    icon: ReceiptText,
    title: "The price before you book",
    text: "You see the fare, busy-hour pricing included, before you confirm. It changes only if the trip turns out much longer than planned.",
  },
  {
    icon: MapPin,
    title: "Picked up where you stand",
    text: "Your pickup pin is your exact spot, not the middle of the road, so your driver comes straight to you.",
  },
  {
    icon: Volume2,
    title: "Directions in a Nigerian voice",
    text: "Drivers hear every turn read out clearly, and it keeps talking under a bridge with no signal.",
  },
];

/** Licensed photos (credits in public/images/photos/CREDITS.md) and a real app screen. */
const collage = [
  { src: "/images/photos/abuja-highway.webp", alt: "A car on an Abuja highway under a cloudy sky", w: 1600, h: 1067, span: "row-span-2" },
  { src: "/images/app/rider-choose.webp", alt: "Choosing a ride and seeing the fare in the Zyon app", w: 720, h: 1564, span: "", screen: true },
  { src: "/images/photos/abuja-street.webp", alt: "An Abuja street with tall buildings", w: 1600, h: 1067, span: "" },
];

export default function Abuja() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-dark-900 sm:text-4xl dark:text-white">Made for Abuja roads</h2>
          <ul className="mt-10 space-y-8">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-lime">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-dark-900 dark:text-white">{title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-dark-500 dark:text-dark-300">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="grid h-[420px] grid-cols-2 grid-rows-2 gap-3 sm:h-[520px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {collage.map((c) => (
            <div
              key={c.src}
              className={`relative overflow-hidden rounded-2xl ${c.span} ${c.screen ? "bg-brand px-6 pt-6" : "bg-dark-100 dark:bg-dark-800"}`}
            >
              {c.screen ? (
                <div className="h-full overflow-hidden rounded-t-[1.4rem] border-x-[5px] border-t-[5px] border-ink">
                  <Image src={c.src} alt={c.alt} width={c.w} height={c.h} className="w-full" sizes="(min-width: 1024px) 260px, 45vw" />
                </div>
              ) : (
                <Image src={c.src} alt={c.alt} fill className="object-cover" sizes="(min-width: 1024px) 320px, 50vw" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
