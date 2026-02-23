import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Business",
  description:
    "BGlory Rides corporate accounts. Centralized billing, employee management, usage reports, and priority pickup for your team.",
};

const benefits = [
  {
    title: "Centralized Billing",
    description:
      "One invoice for all rides across your organization. No more chasing receipts or expense reports from individual employees.",
  },
  {
    title: "Employee Management",
    description:
      "Add or remove team members in seconds. Set ride limits, approve trips, and control spending from a single dashboard.",
  },
  {
    title: "Usage Reports",
    description:
      "Detailed analytics on ride frequency, spending by department, peak usage times, and cost breakdowns. Export to CSV anytime.",
  },
  {
    title: "Priority Pickup",
    description:
      "Your team gets matched with nearby drivers faster. Shorter wait times mean less downtime and more productivity.",
  },
];

const steps = [
  {
    title: "Sign Up Your Company",
    description:
      "Create a business account with your company details. Takes less than 5 minutes to get started.",
  },
  {
    title: "Add Your Team",
    description:
      "Invite employees by email. They will receive a link to join your company account and start riding immediately.",
  },
  {
    title: "Start Riding",
    description:
      "Your team books rides as usual. All trips are billed to your company account with full visibility.",
  },
];

const plans = [
  {
    number: "01",
    name: "Startup",
    capacity: "Up to 10 employees",
    features: [
      "Centralized monthly billing",
      "Basic usage reports",
      "Email support",
      "Standard pickup times",
      "Single admin account",
    ],
  },
  {
    number: "02",
    name: "Growth",
    capacity: "Up to 50 employees",
    features: [
      "Everything in Startup",
      "Department-level reporting",
      "Ride approval workflows",
      "Priority pickup",
      "Dedicated account manager",
    ],
  },
  {
    number: "03",
    name: "Enterprise",
    capacity: "Unlimited employees",
    features: [
      "Everything in Growth",
      "Custom integrations (API access)",
      "Advanced analytics dashboard",
      "24/7 priority support",
      "Custom billing terms",
    ],
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        label="Business"
        title="Corporate rides, simplified."
        description="One account for your entire team. Centralized billing, real-time reporting, and priority service so your people can focus on what matters."
        breadcrumbs={[{ label: "Business" }]}
      />

      <main>
        {/* Why BGlory Business */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Why BGlory Business
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Built for teams that{" "}
                <span className="text-primary-400">move fast.</span>
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

        {/* How It Works */}
        <section className="py-20 sm:py-28 bg-dark-950 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                How It Works
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                Three steps to get your team moving.
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-hide">
              <div className="flex min-w-max sm:min-w-0 sm:grid sm:grid-cols-3 gap-0">
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

        {/* Plans */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Plans
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                A plan for every{" "}
                <span className="text-primary-400">team size.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-surface-200">
              {plans.map((plan, i) => (
                <AnimatedSection key={plan.name} delay={i * 0.1}>
                  <div
                    className={`py-8 sm:py-10 ${
                      i === 0
                        ? "lg:pr-10"
                        : i === plans.length - 1
                          ? "lg:pl-10"
                          : "lg:px-10"
                    } border-b lg:border-b-0 border-surface-200 ${
                      i < plans.length - 1 ? "lg:border-r" : ""
                    }`}
                  >
                    <span className="text-xs font-mono text-dark-300 tracking-widest">
                      {plan.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-900 mt-3">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-primary-500 font-medium mt-1">
                      {plan.capacity}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-dark-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 lg:py-36 bg-dark-950 border-t border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-4">
                  Get Started
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Ready to move your team?
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Tell us about your company and we will set up your business
                  account. Most teams are onboarded within 24 hours.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Contact Us
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
