import type { Metadata } from "next";
import Image from "next/image";
import { CalendarClock, ChartNoAxesColumn, Coins, Landmark, Navigation, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import DeviceFrame from "@/components/home/DeviceFrame";
import { Band, CtaCard, Heading } from "@/components/page/blocks";
import { Ruled } from "@/components/page/Ruled";

export const metadata: Metadata = {
  title: "Drive with Zyon in Nigeria | Keep 80% of Every Fare | Zyon",
  description:
    "Drive with Zyon in Nigeria. Sign up in the driver app, upload your documents, and go online once our team approves you. Keep 80% of every fare and withdraw to your bank.",
  keywords: "become a driver Nigeria, drive and earn Nigeria, driver app Nigeria, Zyon driver signup",
};

const benefits = [
  { icon: Coins, title: "Keep 80% of every fare", text: "Zyon's share is 20%. On cash trips you collect the whole fare in hand, and you settle our share in the app." },
  { icon: Landmark, title: "Withdraw when you want", text: "Card and wallet earnings land in your Zyon wallet. Send them to your Nigerian bank account from ₦100, protected by your own withdrawal PIN." },
  { icon: TrendingUp, title: "Busy hours pay more", text: "Fares are higher at busy times, and you keep 80% of them." },
  { icon: CalendarClock, title: "Drive when it suits you", text: "Go online for an hour or a whole day. Set how far you will travel to a pickup and only get requests inside it." },
  { icon: Navigation, title: "Every turn read out loud", text: "Turn-by-turn directions in a clear Nigerian voice, so your eyes stay on the road." },
  { icon: ChartNoAxesColumn, title: "See what you earn", text: "Today, this week and this month, trip by trip, right in the app." },
];

/** In this order: the app walks a new driver through it. */
const steps = [
  { title: "Sign up in the app", text: "Create your account with your phone number and email, then add your car." },
  { title: "Upload your documents", text: "Take photos of your licence, car papers and car straight from your phone." },
  { title: "We check them", text: "Our team reviews every document. You get a notification and an email the moment you are approved." },
  { title: "Go online", text: "Set your pickup distance, go online and take your first request." },
];

/** The documents the driver app asks for; our team checks each one before approval. */
const documents = [
  "Driver's licence, front and back",
  "Vehicle licence and proof of ownership",
  "Roadworthiness certificate",
  "Vehicle insurance",
  "Hackney permit",
  "Five photos of your car: front, back, both sides and inside",
  "A clear photo of yourself for your profile",
];

export default function DrivePage() {
  return (
    <>
      <PageHero
        title="Drive with Zyon,"
        dim="keep 80% of every fare."
        description="Sign up in the driver app, upload your documents, and go online once our team approves you. Drive when it suits you and withdraw your earnings to your bank."
        breadcrumbs={[{ label: "Drive" }]}
        actions={
          <>
            <Button href="/#notify" size="lg">Tell me when it is live</Button>
            <Button href="/contact" variant="outline" size="lg">Ask a question</Button>
          </>
        }
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src="/images/photos/bridge-day.webp" alt="Third Mainland Bridge, Lagos, under a blue sky" fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
        }
      />

      <main>
        <Band tone="white">
          <Heading title="Your car, your hours," dim="most of the fare." />
          <div className="mt-14">
            <Ruled items={benefits} />
          </div>
        </Band>

        <Band tone="mist">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Heading title="From sign-up" dim="to your first request." />
              <ol className="mt-12 border-t border-ink/15 dark:border-white/15">
                {steps.map((s) => (
                  <li key={s.title} className="border-b border-ink/15 py-6 dark:border-white/15">
                    <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-dark-500 dark:text-white/55">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mx-auto w-[min(72vw,320px)] [perspective:2200px]">
              <div className="[transform:rotateY(-16deg)_rotateX(8deg)_rotateZ(6deg)]">
                <DeviceFrame src="/images/app/driver-online.webp" alt="The Zyon Driver app online and finding trips" sizes="320px" />
              </div>
            </div>
          </div>
        </Band>

        <Band tone="white">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <Heading title="What you need" dim="to sign up." />
              <p className="mt-5 max-w-sm leading-relaxed text-dark-500 dark:text-white/55">
                Have these ready before you start. The app asks for each one, and our team checks them all before your first trip.
              </p>
            </div>
            <ul className="border-t border-ink/15 dark:border-white/15">
              {documents.map((d) => (
                <li key={d} className="border-b border-ink/15 py-4 text-dark-700 dark:border-white/15 dark:text-white/75">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Band>

        <CtaCard title="Get the Zyon Driver app." text="The driver app is on its way to Google Play and the App Store. Leave your email and we will tell you the day it is live.">
          <Button href="/#notify" size="lg">Tell me when it is live</Button>
          <Button href="/contact" variant="outline" size="lg">Ask a question</Button>
        </CtaCard>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
