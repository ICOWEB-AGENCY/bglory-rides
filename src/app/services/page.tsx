import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Ride Options in Nigeria | Economy, Standard, Premium | Zyon",
  description:
    "Three ways to ride with Zyon: Economy, Standard and Premium. See the price before you book, pay with cash, card or your Zyon wallet.",
};

/** The ride classes the app offers. A car's class is set from its make, model and year. */
const services = [
  {
    name: "Economy",
    description: "Everyday rides at the lowest fare. Good for the school run, the market and getting to work.",
    features: ["The lowest fare", "Ride PIN and live trip sharing"],
  },
  {
    name: "Standard",
    description: "A step up from Economy, for when you want a little more comfort on the way.",
    features: ["Class set by make, model and year", "Ride PIN and live trip sharing"],
  },
  {
    name: "Premium",
    description: "Our top class, for client meetings, airport runs and evenings out.",
    features: ["Class set by make, model and year", "Ride PIN and live trip sharing"],
  },
];

/** True of every class, every ride. */
const everyRide = [
  { title: "The price before you book", text: "Busy-hour pricing is included in the fare you see. It changes only if the trip turns out much longer than planned." },
  { title: "Pay how you like", text: "Cash, card or your Zyon wallet. Every trip gets a receipt in your history." },
  { title: "Your exact pickup", text: "Your pin is the spot you are standing on, so your driver comes straight to you." },
  { title: "Help in one tap", text: "Share your live trip, or press SOS and our team sees the alert straight away." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Pick the ride that fits the trip."
        description="Economy for every day, Standard for more room, Premium for the trips that matter. You see the price for each before you book."
        breadcrumbs={[{ label: "Services" }]}
      />

      <main>
        {/* Services List */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="border-t border-surface-200 dark:border-white/[0.06]">
              {services.map((service, i) => (
                <AnimatedSection key={service.name} delay={i * 0.06}>
                  <div id={service.name.toLowerCase()} className="scroll-mt-24 py-8 sm:py-10 border-b border-surface-200 dark:border-white/[0.06] grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6 lg:gap-16">
                    {/* Left: the class name */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">
                        {service.name}
                      </h3>
                    </div>

                    {/* Right: description and features */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-16">
                      <p className="text-dark-500 dark:text-dark-400 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      <div className="flex items-start gap-8 sm:gap-10 shrink-0">
                        <ul className="space-y-2">
                          {service.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300"
                            >
                              <span className="w-1 h-1 rounded-full bg-dark-300 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* On every ride */}
        <section className="py-20 sm:py-28 bg-surface-50 dark:bg-dark-900">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <SectionHeading label="Every class" title="What comes with every ride" />
            <div className="mt-12 grid gap-x-12 border-t border-surface-200 sm:grid-cols-2 dark:border-white/[0.06]">
              {everyRide.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.06}>
                  <div className="border-b border-surface-200 py-7 dark:border-white/[0.06]">
                    <h3 className="text-base font-bold text-dark-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-500 dark:text-dark-400">{item.text}</p>
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
                  Nigeria is about to ride better.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  The rider app is on its way to the App Store and Google Play. Leave your email and we will tell you the day it is live.
                </p>
                <div className="mt-8">
                  <Button href="/#notify" variant="primary" size="lg">
                    Get the launch email
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
