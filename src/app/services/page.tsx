import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore BGlory Rides services: everyday rides, premium comfort, group travel, business accounts, scheduled rides, and package delivery.",
};

const services = [
  {
    name: "BGlory Go",
    tag: "Most popular",
    description:
      "Our most popular option for everyday rides. Affordable, reliable, and available in minutes.",
    features: ["1-3 passengers", "Average 4 min pickup", "Affordable pricing"],
    priceRange: "₦1,500 - ₦8,000",
  },
  {
    name: "BGlory Comfort",
    tag: "Premium",
    description:
      "Upgrade your ride with premium vehicles, extra legroom, and top-rated drivers.",
    features: ["1-3 passengers", "Premium vehicles", "Top-rated drivers only"],
    priceRange: "₦3,000 - ₦15,000",
  },
  {
    name: "BGlory XL",
    tag: "Groups",
    description:
      "Spacious vehicles for groups and families. Room for up to 6 passengers and their luggage.",
    features: ["1-6 passengers", "SUVs and minivans", "Extra luggage space"],
    priceRange: "₦5,000 - ₦20,000",
  },
  {
    name: "BGlory Business",
    tag: "Corporate",
    description:
      "Corporate accounts with centralized billing, employee ride management, and priority pickup.",
    features: [
      "Centralized billing",
      "Employee management dashboard",
      "Priority matching",
    ],
    priceRange: "Custom pricing",
  },
  {
    name: "Scheduled Rides",
    tag: "Plan ahead",
    description:
      "Schedule rides up to 7 days in advance. A driver will be pre-assigned and ready at your pickup time.",
    features: [
      "Book up to 7 days ahead",
      "Pre-assigned driver",
      "Confirmation reminders",
    ],
    priceRange: "Same as standard",
  },
  {
    name: "BGlory Delivery",
    tag: "Packages",
    description:
      "Send packages across town quickly and securely. Track your delivery in real time.",
    features: [
      "Same-day delivery",
      "Real-time tracking",
      "Delivery confirmation",
    ],
    priceRange: "₦2,500 - ₦10,000",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Rides for every occasion."
        description="From daily commutes to group travel, business accounts to package delivery. BGlory has you covered."
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
              title="Find the right ride for you"
              align="center"
            />

            <AnimatedSection>
              <div className="-mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-hide">
                <table className="w-full min-w-[480px] text-left">
                  <thead>
                    <tr className="border-b border-surface-300">
                      <th className="pb-4 pr-4 text-xs sm:text-sm font-semibold text-dark-900">
                        Feature
                      </th>
                      <th className="pb-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-dark-900 text-center">
                        Go
                      </th>
                      <th className="pb-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-dark-900 text-center">
                        Comfort
                      </th>
                      <th className="pb-4 pl-2 sm:pl-4 text-xs sm:text-sm font-semibold text-dark-900 text-center">
                        XL
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm">
                    {[
                      { feature: "Max passengers", go: "3", comfort: "3", xl: "6" },
                      { feature: "Vehicle type", go: "Standard", comfort: "Premium", xl: "SUV / Minivan" },
                      { feature: "Avg. pickup time", go: "4 min", comfort: "5 min", xl: "6 min" },
                      { feature: "Driver rating req.", go: "4.5+", comfort: "4.8+", xl: "4.7+" },
                      { feature: "Extra luggage", go: "Limited", comfort: "Yes", xl: "Large" },
                      { feature: "Trip sharing", go: "Yes", comfort: "Yes", xl: "Yes" },
                    ].map((row) => (
                      <tr key={row.feature} className="border-b border-surface-200">
                        <td className="py-3.5 sm:py-4 pr-4 text-dark-700 font-medium">
                          {row.feature}
                        </td>
                        <td className="py-3.5 sm:py-4 px-2 sm:px-4 text-dark-500 text-center">{row.go}</td>
                        <td className="py-3.5 sm:py-4 px-2 sm:px-4 text-dark-500 text-center">
                          {row.comfort}
                        </td>
                        <td className="py-3.5 sm:py-4 pl-2 sm:pl-4 text-dark-500 text-center">{row.xl}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 lg:py-36 bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-4">
                  Start Riding
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Your next ride is waiting.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Join the waitlist and be among the first to ride with BGlory.
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
