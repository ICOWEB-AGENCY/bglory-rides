"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, KeyRound, MoonStar, Share2, Siren } from "lucide-react";

/** Lagos photos from Wikimedia Commons; credits in public/images/photos/CREDITS.md. */
const cards = [
  { icon: BadgeCheck, title: "Checked drivers", text: "Every driver's licence, car papers and insurance are reviewed by our team before their first trip.", photo: "/images/photos/bridge-day.webp", alt: "Third Mainland Bridge, Lagos, under a blue sky" },
  { icon: KeyRound, title: "A PIN for every ride", text: "Your driver enters your 4-digit PIN to start the trip, so you only get into the right car.", photo: "/images/photos/lekki.webp", alt: "Lekki-Ikoyi Link Bridge, Lagos" },
  { icon: Share2, title: "Your trip, shared live", text: "Send the live link on WhatsApp or any app. Whoever opens it follows your ride until you arrive.", photo: "/images/photos/bridge-night.webp", alt: "Third Mainland Bridge, Lagos, lit up at night" },
  { icon: Siren, title: "SOS in one tap", text: "Press SOS and our team sees the alert straight away, with your trip and where you are.", photo: "/images/photos/lagos-island.webp", alt: "Lagos Island skyline" },
  { icon: MoonStar, title: "Night check-ins", text: "Late at night, if your car stops for a while, the app checks that you are fine.", photo: "/images/photos/bridge-night.webp", alt: "Lagos at night" },
];

function Card({ icon: Icon, title, text, photo, alt }: (typeof cards)[number]) {
  return (
    <li className="group relative h-[min(62vh,520px)] w-[min(80vw,420px)] shrink-0 overflow-hidden rounded-[1.75rem] bg-ink">
      <Image src={photo} alt={alt} fill sizes="420px" draggable={false} className="object-cover transition-transform duration-700 group-hover:scale-105" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <Icon className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">{text}</p>
      </div>
    </li>
  );
}

function Heading() {
  return (
    <div className="shell">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="display text-[clamp(2.4rem,5.6vw,5rem)] text-dark-900 dark:text-white">
          Ride with <span className="text-dark-400 dark:text-white/40">confidence.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-dark-500 dark:text-white/55">
          Safety is part of every trip, from the checks a driver passes before their first ride to the button you can press during yours.
        </p>
      </div>
    </div>
  );
}

/**
 * The cards run the full width of the screen. While the section is pinned,
 * scrolling down slides the row to the left until the last card is in view.
 * With reduced motion it is a plain row you swipe or scroll sideways.
 */
export default function Confidence() {
  const reduce = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const rail = useRef<HTMLUListElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => rail.current && setDistance(Math.max(0, rail.current.scrollWidth - window.innerWidth));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  const railClass = "flex w-max gap-4 px-[clamp(1.25rem,4.5vw,4.5rem)]";

  if (reduce) {
    return (
      <section className="bg-white py-24 sm:py-32 dark:bg-ink">
        <Heading />
        <div className="mt-14 overflow-x-auto pb-4">
          <ul className={railClass}>
            {cards.map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section ref={section} className="relative bg-white dark:bg-ink" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-12 overflow-hidden pt-24">
        <Heading />
        <motion.ul ref={rail} style={{ x }} className={railClass}>
          {cards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
