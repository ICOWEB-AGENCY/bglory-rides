import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title:
    "Become a Driver in Port Harcourt | Earn Up to ₦15,000/Day | BGlory Rides",
  description:
    "Drive and earn in Nigeria with BGlory Rides. Apply today, start earning in 48 hours. Weekly payouts, flexible hours, and launch bonuses for early drivers in Port Harcourt.",
  keywords:
    "become a driver Port Harcourt, earn money driving Nigeria, driver app Port Harcourt, drive and earn Nigeria, ride hailing driver Port Harcourt, BGlory driver signup",
};

const benefits = [
  {
    title: "Earn Up to ₦15,000 Daily",
    description:
      "Full-time drivers on BGlory are taking home serious money every single day. The more you drive, the more you earn. Your income has no ceiling.",
  },
  {
    title: "Get Paid Every Week",
    description:
      "Your earnings hit your bank account weekly, guaranteed. Need cash sooner? Instant withdrawals are available anytime, no waiting around.",
  },
  {
    title: "Keep More of What You Earn",
    description:
      "Our commission rates are lower than every other platform in Port Harcourt. You did the driving, you should keep the money. Simple.",
  },
  {
    title: "Earn Extra During Peak Hours",
    description:
      "Surge pricing means your fares multiply during rush hours, rain, and weekends. Smart drivers plan around peak times and double their daily take-home.",
  },
  {
    title: "Get Free Insurance on Every Trip",
    description:
      "You and your passengers are fully covered on every ride at zero cost to you. Drive with peace of mind knowing your vehicle and your income are protected.",
  },
  {
    title: "Get Rewarded for Great Service",
    description:
      "Top-rated drivers unlock priority ride matching, cash bonuses, and exclusive incentives. The better your ratings, the more money you make.",
  },
];

const requirements = [
  "Valid driver's license (at least 1 year old). Most drivers already qualify.",
  "Vehicle in good condition (2015 or newer). Sedans, SUVs, and minivans all accepted.",
  "Clean driving record with no major violations. A good record works in your favour.",
  "Valid vehicle insurance and registration. Standard documents you already have.",
  "Smartphone with iOS 14+ or Android 10+. Any recent phone will do.",
  "Pass a background check and identity verification. Quick and straightforward.",
];

const steps = [
  {
    title: "Apply in 10 Minutes",
    description:
      "Upload your license, vehicle documents, and a recent photo. The whole application takes less than 10 minutes from your phone.",
  },
  {
    title: "Get Approved Fast",
    description:
      "Our team reviews your documents and verifies your identity. Most drivers are approved within 48 hours, not weeks.",
  },
  {
    title: "Learn the App",
    description:
      "A quick training walkthrough shows you how to accept rides, navigate, and track your earnings. You will be ready in under an hour.",
  },
  {
    title: "Start Earning Immediately",
    description:
      "Go online and accept your first ride. There is no waiting period. From approval to your first fare, it happens the same day.",
  },
];

export default function DrivePage() {
  return (
    <>
      <PageHero
        label="Become a Driver in Port Harcourt"
        title="Earn up to ₦15,000 a day driving with BGlory."
        description="Thousands of ride requests go unfilled every day in Port Harcourt. Your car is sitting idle while other drivers are cashing out. Apply now, get approved in 48 hours, and start earning this week."
        breadcrumbs={[{ label: "Drive and Earn" }]}
      />

      <main>
        {/* Benefits */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Why Drivers Choose BGlory
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                More money in your pocket,{" "}
                <span className="text-primary-400">every single week.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-surface-200">
              {benefits.map((b, i) => (
                <AnimatedSection key={b.title} delay={i * 0.06}>
                  <div className="py-7 sm:py-8 border-b border-surface-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-dark-300 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-dark-900 mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-dark-500 leading-relaxed">
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
                Start Earning in 48 Hours
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                From application to your first fare. Two days.
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-hide">
              <div className="flex min-w-max sm:min-w-0 sm:grid sm:grid-cols-4 gap-0">
                {steps.map((s, i) => (
                  <AnimatedSection key={s.title} delay={i * 0.1}>
                    <div className="w-[220px] sm:w-auto pr-6 sm:pr-8 last:pr-0">
                      <span className="text-xs font-mono text-primary-400 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>

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
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-6">
                  Requirements
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15]">
                  You probably{" "}
                  <span className="text-primary-400">already qualify.</span>
                </h2>
                <p className="mt-5 text-dark-500 leading-relaxed">
                  Most applicants meet every requirement on this list. If you
                  have a car and a license, you are closer to earning than you
                  think. Not sure about something? Our team will walk you through it.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="border-t border-surface-200">
                  {requirements.map((req, i) => (
                    <div
                      key={req}
                      className="py-4 border-b border-surface-200 flex items-start gap-4"
                    >
                      <span className="text-xs font-mono text-dark-300 tracking-widest pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-dark-700">{req}</span>
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
                  Limited Early Driver Spots
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Every day you wait is money left on the table.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  We are onboarding a limited number of launch drivers in Port Harcourt
                  right now. Early drivers lock in the lowest commission rates
                  and get first access to the highest-demand zones. Spots are
                  filling fast. The application takes less than 10 minutes.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button href="#" variant="primary" size="lg">
                    Apply Now and Start Earning
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Have Questions?
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
