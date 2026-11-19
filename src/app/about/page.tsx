import type { Metadata } from "next";
import Image from "next/image";
import { HandCoins, MapPin, ReceiptText, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import DeviceFrame from "@/components/home/DeviceFrame";
import { Band, CtaCard, Heading } from "@/components/page/blocks";
import { Ruled } from "@/components/page/Ruled";

export const metadata: Metadata = {
  title: "About Zyon | Ride-Hailing Built for Nigeria",
  description: "Zyon is a ride-hailing app built for Nigeria: drivers checked by our team, the price before you book, and safety features on every ride.",
};

const values = [
  { icon: ShieldCheck, title: "Safety on every ride", text: "Every driver's documents and car are checked by our team before their first trip. Every ride has a PIN, a live trip link and an SOS button." },
  { icon: ReceiptText, title: "The price before you book", text: "You see the fare before you confirm, busy-hour pricing included. It changes only if the trip turns out much longer than planned." },
  { icon: HandCoins, title: "Fair to drivers", text: "Drivers keep 80% of every fare, drive the hours they choose and withdraw their earnings to their own bank." },
  { icon: MapPin, title: "Built for Nigeria", text: "Pickups at your exact spot, directions read out in a Nigerian voice, and cash, card or wallet, because that is how Nigeria pays." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Ride-hailing"
        dim="built for Nigeria."
        description="Zyon is one app for riders, one for drivers, and a team that checks every driver before their first trip."
        breadcrumbs={[{ label: "About" }]}
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src="/images/photos/bridge-night.webp" alt="Third Mainland Bridge, Lagos, lit up at night" fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
        }
      />

      <main>
        <Band tone="white">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="border-t border-ink/15 pt-8 dark:border-white/15">
              <h2 className="display text-[clamp(2rem,3.6vw,3rem)]">What we do</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-dark-600 dark:text-white/70">
                You open the app, you get a ride, you arrive safely, and you can afford to do it again tomorrow. That is the standard we hold every trip to.
              </p>
            </div>
            <div className="border-t border-ink/15 pt-8 dark:border-white/15">
              <h2 className="display text-[clamp(2rem,3.6vw,3rem)]">Where we are going</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-dark-600 dark:text-white/70">
                Cities across Nigeria where a safe, fairly priced ride is a tap away, and driving for a living pays properly.
              </p>
            </div>
          </div>
        </Band>

        <Band tone="mist">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Heading title="What we" dim="stand for." />
              <div className="mt-14">
                <Ruled items={values} cols={2} />
              </div>
            </div>
            <div className="mx-auto w-[min(72vw,320px)] [perspective:2200px]">
              <div className="[transform:rotateY(-16deg)_rotateX(8deg)_rotateZ(6deg)]">
                <DeviceFrame src="/images/app/rider-home.webp" alt="The Zyon rider app home screen" sizes="320px" />
              </div>
            </div>
          </div>
        </Band>

        <CtaCard title="Be first to ride" dim="with Zyon." text="Both apps are on their way to Google Play and the App Store. Leave your email and we will tell you the day they are live.">
          <Button href="/#notify" size="lg">Get the launch email</Button>
          <Button href="/drive" variant="outline" size="lg">Drive with Zyon</Button>
        </CtaCard>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
