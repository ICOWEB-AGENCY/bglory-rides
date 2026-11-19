import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, KeyRound, MoonStar, Share2, Siren, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import { Band, CtaCard, Heading } from "@/components/page/blocks";
import { Ruled } from "@/components/page/Ruled";

export const metadata: Metadata = {
  title: "Safety | Safe Ride-Hailing in Nigeria | Zyon",
  description: "Safety built into every Zyon ride: drivers checked by our team, a ride PIN, live trip sharing, an SOS button and night check-ins.",
};

const features = [
  { icon: BadgeCheck, title: "Drivers checked by our team", text: "Before a driver takes a single trip, our team reviews their licence, vehicle licence, proof of ownership, roadworthiness certificate, insurance, hackney permit and photos of the car." },
  { icon: KeyRound, title: "A ride PIN", text: "You get a 4-digit PIN for each ride. Your driver enters it to start the trip, so you only ever get into the right car." },
  { icon: Share2, title: "Share your trip live", text: "Send your live trip link to anyone on WhatsApp or any app. They follow your ride on the map until you arrive." },
  { icon: Siren, title: "SOS in one tap", text: "Press SOS and our team sees the alert straight away, with your trip and location. Your emergency contact is told too." },
  { icon: MoonStar, title: "Night check-ins", text: "Late at night, if your car stops for a while, the app checks that you are fine. Turn it on in your safety settings." },
  { icon: Star, title: "Ratings both ways", text: "You rate your driver after each trip and your driver rates you, with reasons." },
];

const moments = [
  { title: "Before your ride", items: ["Your driver's documents and car were checked by our team", "You see your driver's name, photo, car and plate", "Your pickup pin is your exact spot"] },
  { title: "During your ride", items: ["Your driver enters your ride PIN to start the trip", "Share your live trip with anyone you trust", "SOS reaches our team in one tap", "Calls and chat with your driver stay in the app"] },
  { title: "After your ride", items: ["Rate your driver and say what went well or wrong", "Report a problem from the trip in the app", "See every trip and receipt in your history"] },
];

/** What the server does when a rider presses SOS, in order. */
const sos = [
  "Our team sees your alert at once, with your trip, your driver and where you are.",
  "Our support inbox gets an email about it too.",
  "Your emergency contact is told that you raised an alert.",
  "If you are in danger, call the police on 112 as well.",
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        title="Safety built"
        dim="into every ride."
        description="From the checks a driver passes before their first trip to the PIN, the live link and the SOS button during yours."
        breadcrumbs={[{ label: "Safety" }]}
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src="/images/photos/lekki.webp" alt="Lekki-Ikoyi Link Bridge, Lagos" fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
        }
      />

      <main>
        <Band tone="white">
          <Heading title="What keeps" dim="you safe." />
          <div className="mt-14">
            <Ruled items={features} />
          </div>
        </Band>

        <Band tone="mist">
          <Heading title="Before, during" dim="and after every ride." />
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {moments.map((m) => (
              <div key={m.title} className="border-t border-ink/15 pt-6 dark:border-white/15">
                <h3 className="text-lg font-semibold tracking-tight">{m.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-dark-500 dark:text-white/60">
                  {m.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Band>

        <Band tone="white">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <Heading title="If something" dim="goes wrong." />
              <p className="mt-5 max-w-sm leading-relaxed text-dark-500 dark:text-white/55">Press SOS on the trip screen. Here is what happens next.</p>
            </div>
            <ol className="border-t border-ink/15 dark:border-white/15">
              {sos.map((s) => (
                <li key={s} className="border-b border-ink/15 py-5 leading-relaxed text-dark-700 dark:border-white/15 dark:text-white/75">
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </Band>

        <CtaCard title="Ride with" dim="confidence." text="The rider app is on its way to Google Play and the App Store. Leave your email and we will tell you the day it is live.">
          <Button href="/#notify" size="lg">Get the launch email</Button>
          <Button href="/blog/7-safety-layers-on-every-zyon-ride" variant="outline" size="lg">Read the 7 safety layers</Button>
        </CtaCard>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
