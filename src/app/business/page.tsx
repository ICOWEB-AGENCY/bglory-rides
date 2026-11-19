import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Zyon for Business | Team Rides in Abuja",
  description:
    "Team accounts for companies in Abuja are coming to Zyon. Tell us how your people move around the city and what you need from a business account.",
};

/** Team accounts do not exist yet: this page collects interest, it does not sell plans. */
const questions = [
  {
    title: "How your team moves",
    text: "How many people ride, how often, and the trips they take most: the office, the airport, client sites.",
  },
  {
    title: "How you want to pay",
    text: "One bill for the company, a budget per person, or rides people claim back later.",
  },
  {
    title: "What you need to see",
    text: "The reports your finance team asks for, and who should be able to approve rides.",
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        label="Zyon for Business"
        title="Team accounts are coming."
        description="Today every Zyon ride is booked and paid by the rider. We are building accounts for companies next, and we want to build them with the teams that will use them."
        breadcrumbs={[{ label: "Business" }]}
      />

      <main>
        <section className="py-20 sm:py-28 bg-white dark:bg-ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-600 dark:text-lime mb-6">Tell us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-2xl">
                What would your company need from Zyon?
              </h2>
            </AnimatedSection>

            <div className="mt-12 grid gap-x-12 border-t border-surface-200 md:grid-cols-3 dark:border-white/[0.06]">
              {questions.map((q, i) => (
                <AnimatedSection key={q.title} delay={i * 0.06}>
                  <div className="border-b border-surface-200 py-7 dark:border-white/[0.06]">
                    <h3 className="text-base font-bold text-dark-900 dark:text-white">{q.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-500 dark:text-dark-400">{q.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight">Talk to us about your team.</h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Send us a message with your company name and a line about your team. We will get back to you by email.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Contact us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
