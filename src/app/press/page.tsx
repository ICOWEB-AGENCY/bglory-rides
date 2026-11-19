import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Press | Zyon",
  description: "Writing about Zyon, the ride-hailing app built for Nigeria? Ask us for facts, app screenshots and our logo at press@zyonrides.com.",
};

/** No press releases until there is news to release. */
const resources = [
  {
    title: "Facts about Zyon",
    text: "What the rider and driver apps do today, how fares work, and how we check drivers.",
  },
  {
    title: "App screenshots",
    text: "Real screens from the Zyon rider and driver apps, in light and dark.",
  },
  {
    title: "Logo and colours",
    text: "The Zyon wordmark for light and dark backgrounds, and our brand colours.",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        label="Press"
        title="Writing about Zyon?"
        description="Zyon is a ride-hailing app built for Nigeria, on its way to the App Store and Google Play. Write to press@zyonrides.com and we will send what you need."
        breadcrumbs={[{ label: "Press" }]}
      />

      <main>
        <section className="py-20 sm:py-28 bg-white dark:bg-ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-600 dark:text-lime mb-6">On request</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-2xl">
                What we can send you.
              </h2>
            </AnimatedSection>

            <div className="mt-12 grid gap-x-12 border-t border-surface-200 md:grid-cols-3 dark:border-white/[0.06]">
              {resources.map((r, i) => (
                <AnimatedSection key={r.title} delay={i * 0.06}>
                  <div className="border-b border-surface-200 py-7 dark:border-white/[0.06]">
                    <h3 className="text-base font-bold text-dark-900 dark:text-white">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-500 dark:text-dark-400">{r.text}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight">press@zyonrides.com</h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  For interviews, facts or images, email us or use the contact form.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button href="mailto:press@zyonrides.com" variant="primary" size="lg">
                    Email the press team
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Contact form
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
