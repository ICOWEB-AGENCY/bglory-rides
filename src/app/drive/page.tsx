import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Drive with Zyon in Nigeria | Keep 80% of Every Fare | Zyon",
  description:
    "Drive with Zyon in Nigeria. Sign up in the driver app, upload your documents, and go online once our team approves you. Keep 80% of every fare and withdraw to your bank.",
  keywords:
    "become a driver Nigeria, drive and earn Nigeria, driver app Nigeria, Zyon driver signup",
};

const benefits = [
  {
    title: "Keep 80% of every fare",
    description:
      "Zyon's share is 20%. On cash trips you collect the whole fare in hand, and you settle our share in the app.",
  },
  {
    title: "Withdraw when you want",
    description:
      "Card and wallet earnings land in your Zyon wallet. Send them to your Nigerian bank account from ₦100, protected by your own withdrawal PIN.",
  },
  {
    title: "Busy hours pay more",
    description:
      "Fares are higher at busy times, and you keep 80% of them.",
  },
  {
    title: "Drive when it suits you",
    description:
      "Go online for an hour or a whole day. Set how far you will travel to a pickup and only get requests inside that distance.",
  },
  {
    title: "Every turn read out loud",
    description:
      "Turn-by-turn directions in a clear Nigerian voice, so your eyes stay on the road.",
  },
  {
    title: "See what you earn",
    description:
      "Today, this week and this month, trip by trip, right in the app.",
  },
];

/** The documents the driver app asks for; our team checks each one before approval. */
const requirements = [
  "Driver's licence, front and back.",
  "Vehicle licence and proof of ownership.",
  "Roadworthiness certificate and vehicle insurance.",
  "Hackney permit.",
  "Five photos of your car: front, back, both sides and inside.",
  "A clear photo of yourself for your profile.",
];

const steps = [
  {
    title: "Sign up in the app",
    description: "Create your account with your phone number and email, then add your car.",
  },
  {
    title: "Upload your documents",
    description: "Take photos of your licence, car papers and car straight from your phone.",
  },
  {
    title: "We check them",
    description: "Our team reviews every document. You get a notification and an email the moment you are approved.",
  },
  {
    title: "Go online",
    description: "Set your pickup distance, go online and take your first request.",
  },
];

export default function DrivePage() {
  return (
    <>
      <PageHero
        label="Drive with Zyon"
        title="Drive with Zyon and keep 80% of every fare."
        description="Sign up in the driver app, upload your documents, and go online once our team approves you. Drive when it suits you and withdraw your earnings to your bank."
        breadcrumbs={[{ label: "Drive and Earn" }]}
      />

      <main>
        {/* Benefits */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Why drive with Zyon
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-2xl">
                Your car, your hours,{" "}
                <span className="text-primary-400">most of the fare.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-surface-200 dark:border-white/[0.06]">
              {benefits.map((b, i) => (
                <AnimatedSection key={b.title} delay={i * 0.06}>
                  <div className="py-7 sm:py-8 border-b border-surface-200 dark:border-white/[0.06]">
                    <h3 className="text-base font-bold text-dark-900 dark:text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join - horizontal steps on dark bg */}
        <section className="py-20 sm:py-28 bg-dark-950 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                How to start
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                From sign-up to your first request.
              </h2>
            </AnimatedSection>

            {/* Mobile: vertical steps */}
            <div className="mt-14 sm:mt-16 lg:hidden border-l border-white/[0.08] ml-3">
              {steps.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 0.1}>
                  <div className="relative pl-8 pb-10 last:pb-0">
                    <div className="absolute left-0 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary-400" />
                    <h3 className="text-base font-bold text-white mt-2 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-dark-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Desktop: horizontal steps */}
            <div className="mt-14 sm:mt-16 hidden lg:grid lg:grid-cols-4 gap-0">
              {steps.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 0.1}>
                  <div className="pr-8 last:pr-0">
                    <div className="flex items-center mt-3 mb-5">
                      <div className="w-2 h-2 rounded-full bg-primary-400 shrink-0 relative z-10" />
                      {i < steps.length - 1 && (
                        <div className="h-px flex-1 bg-white/[0.08]" />
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-dark-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-6">
                  Requirements
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15]">
                  What you need{" "}
                  <span className="text-primary-400">to sign up.</span>
                </h2>
                <p className="mt-5 text-dark-500 dark:text-dark-400 leading-relaxed">
                  Have these ready before you start. The app asks for each one,
                  and our team checks them all before your first trip. Not sure
                  about a document? Ask us.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="border-t border-surface-200 dark:border-white/[0.06]">
                  {requirements.map((req) => (
                    <div
                      key={req}
                      className="py-4 border-b border-surface-200 dark:border-white/[0.06] flex items-start gap-4"
                    >
                      <span className="text-sm text-dark-700 dark:text-dark-300">{req}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 lg:py-36 bg-dark-950 border-t border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-4">
                  Ready to drive?
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Get the Zyon Driver app.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  The driver app is on its way to the App Store and Google Play.
                  Leave your email and we will tell you the day it is live.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button href="/#notify" variant="primary" size="lg">
                    Tell me when it is live
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Ask a question
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
