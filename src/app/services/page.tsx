import type { Metadata } from "next";
import { Banknote, KeyRound, MapPin, ReceiptText, Share2, Siren } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import DeviceFrame from "@/components/home/DeviceFrame";
import { Band, CtaCard, Heading } from "@/components/page/blocks";
import { Ruled } from "@/components/page/Ruled";

export const metadata: Metadata = {
  title: "Ride Options | Economy, Standard, Premium | Zyon",
  description: "Three ways to ride with Zyon in Nigeria: Economy, Standard and Premium. See the price before you book, pay with cash, card or your Zyon wallet.",
};

/** The ride classes the app offers. A car's class is set from its make, model and year. */
const classes = [
  { id: "economy", name: "Economy", line: "Everyday rides at the lowest fare.", text: "The school run, the market, getting to work. Economy is the class most trips start with, and the cheapest price on the Choose a ride screen.", fits: ["Up to 4 riders", "The lowest fare", "Every safety feature"] },
  { id: "standard", name: "Standard", line: "A step up for a little more comfort.", text: "When the trip is longer or you want a bit more room. The car's make, model and year put it in Standard.", fits: ["Up to 4 riders", "Class set by the car", "Every safety feature"] },
  { id: "premium", name: "Premium", line: "Our top class for the trips that matter.", text: "Client meetings, airport runs and evenings out. The cars that qualify on make, model and year drive Premium.", fits: ["Up to 4 riders", "Our top class", "Every safety feature"] },
];

const everyRide = [
  { icon: ReceiptText, title: "The price before you book", text: "Busy-hour pricing is already in the fare you see. It changes only if the trip turns out much longer than planned." },
  { icon: Banknote, title: "Pay how you like", text: "Cash to your driver, a card, or your Zyon wallet. Every trip gets a receipt in your history." },
  { icon: MapPin, title: "Your exact pickup", text: "Your pin is the spot you are standing on, so your driver comes straight to you." },
  { icon: KeyRound, title: "A PIN for every ride", text: "Your driver enters your 4-digit PIN to start the trip, so you only get into the right car." },
  { icon: Share2, title: "Your trip, shared live", text: "Send the live link on WhatsApp or any app. Whoever opens it follows the car until you arrive." },
  { icon: Siren, title: "Help in one tap", text: "Press SOS and our team sees the alert straight away, with your trip and where you are." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Pick the ride"
        dim="that fits the trip."
        description="Economy for every day, Standard for more room, Premium for the trips that matter. You see the price for each before you book."
        breadcrumbs={[{ label: "Services" }]}
        media={
          <div className="mx-auto w-[min(70vw,300px)] lg:mx-0 lg:ml-auto">
            <DeviceFrame src="/images/app/rider-choose.webp" alt="Choose a ride: Economy, Standard and Premium with prices" priority sizes="300px" />
          </div>
        }
      />

      <main>
        <Band tone="white">
          <ul className="border-t border-ink/15 dark:border-white/15">
            {classes.map((c) => (
              <li key={c.id} id={c.id} className="grid scroll-mt-28 gap-6 border-b border-ink/15 py-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 dark:border-white/15">
                <div>
                  <h2 className="display text-[clamp(2.4rem,5vw,4.4rem)]">{c.name}</h2>
                  <p className="mt-2 text-lg text-dark-500 dark:text-white/55">{c.line}</p>
                </div>
                <div className="flex flex-col justify-between gap-6 sm:flex-row lg:pt-3">
                  <p className="max-w-md leading-relaxed text-dark-600 dark:text-white/70">{c.text}</p>
                  <ul className="shrink-0 space-y-2 text-sm text-dark-500 dark:text-white/55">
                    {c.fits.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Band>

        <Band tone="mist">
          <Heading title="Every class," dim="every ride." />
          <div className="mt-14">
            <Ruled items={everyRide} />
          </div>
        </Band>

        <CtaCard title="Be first to ride" dim="with Zyon." text="The rider app is on its way to Google Play and the App Store. Leave your email and we will tell you the day it is live.">
          <Button href="/#notify" size="lg">Get the launch email</Button>
          <Button href="/blog/how-your-zyon-fare-is-worked-out" variant="outline" size="lg">How fares are worked out</Button>
        </CtaCard>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
