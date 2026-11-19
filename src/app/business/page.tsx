import type { Metadata } from "next";
import { BarChart3, Users, Wallet } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import { Band, CtaCard, Heading } from "@/components/page/blocks";
import { Ruled } from "@/components/page/Ruled";

export const metadata: Metadata = {
  title: "Zyon for Business | Team Rides in Nigeria",
  description: "Team accounts for companies in Nigeria are coming to Zyon. Tell us how your people move around the city and what you need from a business account.",
};

/** Team accounts do not exist yet: this page collects interest, it does not sell plans. */
const questions = [
  { icon: Users, title: "How your team moves", text: "How many people ride, how often, and the trips they take most: the office, the airport, client sites." },
  { icon: Wallet, title: "How you want to pay", text: "One bill for the company, a budget per person, or rides people claim back later." },
  { icon: BarChart3, title: "What you need to see", text: "The reports your finance team asks for, and who should be able to approve rides." },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title="Team accounts"
        dim="are coming."
        description="Today every Zyon ride is booked and paid by the rider. We are building accounts for companies next, and we want to build them with the teams that will use them."
        breadcrumbs={[{ label: "Business" }]}
        actions={<Button href="/contact" size="lg">Talk to us about your team</Button>}
      />
      <main>
        <Band tone="white">
          <Heading title="What would your company" dim="need from Zyon?" />
          <div className="mt-14">
            <Ruled items={questions} />
          </div>
        </Band>
        <CtaCard title="Talk to us" dim="about your team." text="Send us a message with your company name and a line about your team. We will get back to you by email.">
          <Button href="/contact" size="lg">Contact us</Button>
        </CtaCard>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
