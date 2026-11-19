import type { Metadata } from "next";
import { FileText, Image as ImageIcon, Smartphone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import { Band, CtaCard, Heading } from "@/components/page/blocks";
import { Ruled } from "@/components/page/Ruled";

export const metadata: Metadata = {
  title: "Press | Zyon",
  description: "Writing about Zyon, the ride-hailing app built for Nigeria? Ask us for facts, app screenshots and our logo at press@zyonrides.com.",
};

/** No press releases until there is news to release. */
const resources = [
  { icon: FileText, title: "Facts about Zyon", text: "What the rider and driver apps do today, how fares work, and how we check drivers." },
  { icon: Smartphone, title: "App screenshots", text: "Real screens from the Zyon rider and driver apps, in light and dark." },
  { icon: ImageIcon, title: "Logo and colours", text: "The Zyon wordmark for light and dark backgrounds, and our brand colours." },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        title="Writing"
        dim="about Zyon?"
        description="Zyon is a ride-hailing app built for Nigeria, on its way to Google Play and the App Store. Write to press@zyonrides.com and we will send what you need."
        breadcrumbs={[{ label: "Press" }]}
        actions={<Button href="mailto:press@zyonrides.com" size="lg">Email the press team</Button>}
      />
      <main>
        <Band tone="white">
          <Heading title="What we" dim="can send you." />
          <div className="mt-14">
            <Ruled items={resources} />
          </div>
        </Band>
        <CtaCard title="press@zyonrides.com" text="For interviews, facts or images, email us or use the contact form.">
          <Button href="mailto:press@zyonrides.com" size="lg">Email the press team</Button>
          <Button href="/contact" variant="outline" size="lg">Contact form</Button>
        </CtaCard>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
