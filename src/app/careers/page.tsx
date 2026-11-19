import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Careers at Zyon | Abuja",
  description:
    "Zyon is a small team building ride-hailing for Abuja. We have no open roles listed right now, but we want to hear from people who would like to help.",
};

/** No roles are listed until there are real ones to fill. */
const kinds = [
  {
    title: "On the road",
    text: "Driver support and operations in Abuja: getting drivers checked, on the road and paid.",
  },
  {
    title: "In the product",
    text: "The rider app, the driver app and the tools our team uses every day.",
  },
  {
    title: "With riders",
    text: "Support, partnerships and telling Abuja that Zyon is here.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Help us build ride-hailing for Abuja."
        description="We are a small team, and we have no open roles listed right now. If you want to be part of what comes next, we would like to hear from you."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <main>
        <section className="py-20 sm:py-28 bg-white dark:bg-ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-600 dark:text-lime mb-6">The work</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-2xl">
                Where we will need people as we grow.
              </h2>
            </AnimatedSection>

            <div className="mt-12 grid gap-x-12 border-t border-surface-200 md:grid-cols-3 dark:border-white/[0.06]">
              {kinds.map((k, i) => (
                <AnimatedSection key={k.title} delay={i * 0.06}>
                  <div className="border-b border-surface-200 py-7 dark:border-white/[0.06]">
                    <h3 className="text-base font-bold text-dark-900 dark:text-white">{k.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-500 dark:text-dark-400">{k.text}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight">Tell us about yourself.</h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Send a short note about what you do and what you would like to work on. We keep every message and write back when a role opens.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Contact us
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
