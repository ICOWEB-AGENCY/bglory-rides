import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Drive with Us",
  description:
    "Become a BGlory Rides driver. Earn on your schedule, get weekly payouts, and join a community of verified drivers.",
};

const benefits = [
  {
    title: "Earn on Your Terms",
    description:
      "Set your own hours and drive when it works for you. No minimum hours, no rigid schedules.",
  },
  {
    title: "Weekly Payouts",
    description:
      "Get paid every week directly to your bank account. Cash out instantly when you need to.",
  },
  {
    title: "Insurance Coverage",
    description:
      "Every trip is covered by our comprehensive insurance policy. You and your passengers are protected.",
  },
  {
    title: "Easy-to-Use App",
    description:
      "Accept rides, navigate to pickups, and manage your earnings all in one place.",
  },
  {
    title: "Surge Bonuses",
    description:
      "Earn more during peak hours. The app shows you where demand is highest.",
  },
  {
    title: "Driver Rewards",
    description:
      "Top-rated drivers get priority matching, bonus incentives, and community recognition.",
  },
];

const requirements = [
  "Valid driver's license (at least 1 year old)",
  "Vehicle in good condition (2015 or newer)",
  "Clean driving record with no major violations",
  "Valid vehicle insurance and registration",
  "Smartphone with iOS 14+ or Android 10+",
  "Pass a background check and identity verification",
];

const steps = [
  {
    title: "Apply Online",
    description:
      "Upload your license, vehicle documents, and a recent photo. Takes less than 10 minutes.",
  },
  {
    title: "Get Verified",
    description:
      "Our team reviews your application and runs the required checks. Approved within 48 hours.",
  },
  {
    title: "Complete Training",
    description:
      "Short safety and best practices training. Learn the driver app inside out.",
  },
  {
    title: "Start Earning",
    description:
      "Go online whenever you are ready. Accept your first ride on your own schedule.",
  },
];

export default function DrivePage() {
  return (
    <>
      <PageHero
        label="Drive with BGlory"
        title="Your car can earn for you."
        description="Join our growing network of verified drivers. Flexible hours, weekly payouts, and a supportive community."
        breadcrumbs={[{ label: "Drive with Us" }]}
      />

      <main>
        {/* Benefits */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Why Drive with Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Benefits that make{" "}
                <span className="text-primary-400">a difference.</span>
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
                Getting Started
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                Four steps to your first ride.
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
                  What you need{" "}
                  <span className="text-primary-400">to get started.</span>
                </h2>
                <p className="mt-5 text-dark-500 leading-relaxed">
                  Make sure you meet these basic requirements before applying.
                  If you have questions, our support team is happy to help.
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
                  Ready to Earn?
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Start your application today.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Join our growing network of drivers earning with BGlory Rides.
                  The application takes less than 10 minutes.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button href="#" variant="primary" size="lg">
                    Apply Now
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
