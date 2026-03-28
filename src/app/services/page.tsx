import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Ride Options Abuja | Book a Ride in Nigeria | BGlory Rides",
  description:
    "Discover affordable ride options in Abuja. From daily commutes to group travel and corporate accounts, BGlory gives you reliable ride-hailing services across Nigeria.",
};

const services = [
  {
    name: "Economy",
    tag: "Budget-friendly",
    description:
      "Tired of waiting 20 minutes for a ride that costs too much? Economy gets you moving in under 5 minutes at prices that actually make sense for your daily commute.",
    features: ["Up to 4 passengers", "Average 4 min pickup", "Lowest fares"],
    priceRange: "₦1,500 - ₦8,000",
  },
  {
    name: "Standard",
    tag: "Most popular",
    description:
      "The fastest option on the road. Comfortable sedans with drivers who know every shortcut in Abuja. The sweet spot between price and speed for riders who value their time.",
    features: ["Up to 4 passengers", "Shorter wait times", "Comfortable sedans"],
    priceRange: "₦2,500 - ₦12,000",
  },
  {
    name: "Premium",
    tag: "Top tier",
    description:
      "You deserve more than cramped backseats and awkward small talk. Stretch out in a premium vehicle with a top-rated driver who knows when to talk and when to let you ride in peace.",
    features: ["Up to 4 passengers", "Premium vehicles", "Top-rated drivers only"],
    priceRange: "₦4,000 - ₦18,000",
  },
  {
    name: "Scheduled Rides",
    tag: "Plan ahead",
    description:
      "Early morning flight? Important meeting across town? Book your ride up to 7 days ahead and stop worrying. Your driver will be waiting before you even step outside.",
    features: [
      "Book up to 7 days ahead",
      "Pre-assigned driver",
      "Confirmation reminders",
    ],
    priceRange: "Same as standard fares",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="The right ride, right when you need it."
        description="Whether you need affordable rides in Abuja for your daily commute, a premium car for a client meeting, or a group ride to the airport, you will always find a BGlory option that fits."
        breadcrumbs={[{ label: "Services" }]}
      />

      <main>
        {/* Services List */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="border-t border-surface-200">
              {services.map((service, i) => (
                <AnimatedSection key={service.name} delay={i * 0.06}>
                  <div className="group py-8 sm:py-10 border-b border-surface-200 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6 lg:gap-16 cursor-pointer">
                    {/* Left: number + name + tag */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-dark-300 tracking-widest">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[11px] font-medium text-primary-600 bg-primary-400/10 px-2.5 py-1 rounded-full border border-primary-400/20">
                          {service.tag}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-dark-900 group-hover:text-primary-500 transition-colors">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-primary-500">
                        {service.priceRange}
                      </p>
                    </div>

                    {/* Right: description + features + arrow */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-16">
                      <p className="text-dark-500 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      <div className="flex items-start gap-8 sm:gap-10 shrink-0">
                        <ul className="space-y-2">
                          {service.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 text-sm text-dark-600"
                            >
                              <span className="w-1 h-1 rounded-full bg-dark-300 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        <ArrowRight className="w-5 h-5 text-dark-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all mt-0.5 shrink-0" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 sm:py-28 bg-surface-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <SectionHeading
              label="Compare"
              title="See exactly what you get with each ride"
              align="center"
            />

            {/* Desktop table */}
            <AnimatedSection className="hidden sm:block">
              <div className="overflow-x-auto scrollbar-hide">
                <table className="w-full min-w-[480px] text-left">
                  <thead>
                    <tr className="border-b border-surface-300">
                      <th className="pb-4 pr-4 text-sm font-semibold text-dark-900">Feature</th>
                      <th className="pb-4 px-4 text-sm font-semibold text-dark-900 text-center">Economy</th>
                      <th className="pb-4 px-4 text-sm font-semibold text-dark-900 text-center">Standard</th>
                      <th className="pb-4 pl-4 text-sm font-semibold text-dark-900 text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { feature: "Max passengers", economy: "4", standard: "4", premium: "4" },
                      { feature: "Vehicle type", economy: "Compact", standard: "Sedan", premium: "Premium sedan" },
                      { feature: "Avg. pickup time", economy: "6 min", standard: "4 min", premium: "8 min" },
                      { feature: "Driver rating req.", economy: "4.5+", standard: "4.6+", premium: "4.8+" },
                      { feature: "A/C guaranteed", economy: "Yes", standard: "Yes", premium: "Yes" },
                      { feature: "Trip sharing", economy: "Yes", standard: "Yes", premium: "Yes" },
                    ].map((row) => (
                      <tr key={row.feature} className="border-b border-surface-200">
                        <td className="py-4 pr-4 text-dark-700 font-medium">{row.feature}</td>
                        <td className="py-4 px-4 text-dark-500 text-center">{row.economy}</td>
                        <td className="py-4 px-4 text-dark-500 text-center">{row.standard}</td>
                        <td className="py-4 pl-4 text-dark-500 text-center">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            {/* Mobile: stacked cards instead of table */}
            <div className="sm:hidden space-y-4">
              {[
                { name: "Economy", specs: ["4 passengers", "Compact", "6 min pickup", "4.5+ rating", "A/C", "Trip sharing"] },
                { name: "Standard", specs: ["4 passengers", "Sedan", "4 min pickup", "4.6+ rating", "A/C", "Trip sharing"] },
                { name: "Premium", specs: ["4 passengers", "Premium sedan", "8 min pickup", "4.8+ rating", "A/C", "Trip sharing"] },
              ].map((tier, i) => (
                <AnimatedSection key={tier.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-surface-200 bg-white p-5">
                    <h3 className="text-base font-bold text-dark-900 mb-3">{tier.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tier.specs.map((spec) => (
                        <span key={spec} className="text-xs text-dark-500 bg-surface-50 border border-surface-200 px-2.5 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 lg:py-36 bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-4">
                  Launching Soon
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Abuja is about to ride better.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Spots on the early access list are filling fast. Get in now and be the first to book a ride when we go live.
                </p>
                <div className="mt-8">
                  <Button href="/#notify" variant="primary" size="lg">
                    Join the Waitlist
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
