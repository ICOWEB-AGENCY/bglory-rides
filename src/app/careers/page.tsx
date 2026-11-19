import type { Metadata } from "next";
import { Code2, Headphones, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import { Band, CtaCard, Heading } from "@/components/page/blocks";
import { Ruled } from "@/components/page/Ruled";

export const metadata: Metadata = {
  title: "Careers at Zyon | Nigeria",
  description: "Zyon is a small team building ride-hailing for Nigeria. We have no open roles listed right now, but we want to hear from people who would like to help.",
};

/** No roles are listed until there are real ones to fill. */
const kinds = [
  { icon: Truck, title: "On the road", text: "Driver support and operations across Nigeria: getting drivers checked, on the road and paid." },
  { icon: Code2, title: "In the product", text: "The rider app, the driver app and the tools our team uses every day." },
  { icon: Headphones, title: "With riders", text: "Support, partnerships and telling Nigeria that Zyon is here." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Help us build"
        dim="ride-hailing for Nigeria."
        description="We are a small team, and we have no open roles listed right now. If you want to be part of what comes next, we would like to hear from you."
        breadcrumbs={[{ label: "Careers" }]}
      />
      <main>
        <Band tone="white">
          <Heading title="Where we will need people" dim="as we grow." />
          <div className="mt-14">
            <Ruled items={kinds} />
          </div>
        </Band>
        <CtaCard title="Tell us" dim="about yourself." text="Send a short note about what you do and what you would like to work on.">
          <Button href="/contact" size="lg">Contact us</Button>
        </CtaCard>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
