import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Safety | Safe Ride-Hailing in Abuja | Zyon",
  description:
    "Safety built into every Zyon ride in Abuja: drivers checked by our team, a ride PIN, live trip sharing, an SOS button and night check-ins.",
};

const safetyFeatures = [
  {
    title: "Drivers checked by our team",
    description:
      "Before a driver takes a single trip, our team reviews their licence, vehicle licence, proof of ownership, roadworthiness certificate, insurance, hackney permit and photos of the car. You see their name, photo, car and plate before they arrive.",
  },
  {
    title: "A ride PIN",
    description:
      "You get a 4-digit PIN for each ride. Your driver enters it to start the trip, so you only ever get into the right car.",
  },
  {
    title: "Share your trip live",
    description:
      "Send your live trip link to anyone on WhatsApp or any app on your phone. They follow your ride on the map until you arrive.",
  },
  {
    title: "SOS in one tap",
    description:
      "Press SOS and our team sees the alert straight away, with your trip and location. Your emergency contact is told too.",
  },
  {
    title: "Night check-ins",
    description:
      "Late at night, if your car stops for a while, the app checks that you are fine. Turn it on in your safety settings.",
  },
  {
    title: "Ratings both ways",
    description:
      "You rate your driver after each trip and your driver rates you, with reasons.",
  },
];

const safetyPillars = [
  {
    title: "Before your ride",
    items: [
      "Your driver's documents and car were checked by our team",
      "You see your driver's name, photo, car and plate",
      "Your pickup pin is your exact spot",
    ],
  },
  {
    title: "During your ride",
    items: [
      "Your driver enters your ride PIN to start the trip",
      "Share your live trip with anyone you trust",
      "SOS reaches our team in one tap",
      "Calls and chat with your driver stay in the app",
    ],
  },
  {
    title: "After your ride",
    items: [
      "Rate your driver and say what went well or wrong",
      "Report a problem from the trip in the app",
      "See every trip and receipt in your history",
    ],
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        label="Safety"
        title="Safety built into every ride."
        description="From the driver checks before their first trip to the PIN, the live link and the SOS button during yours, here is what Zyon does to keep you safe."
        breadcrumbs={[{ label: "Safety" }]}
      />

      <main>
        {/* Safety Features */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Safety Features
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-2xl">
                Your protection is{" "}
                <span className="text-primary-400">built into every trip.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 border-t border-surface-200 dark:border-white/[0.06]">
              {safetyFeatures.map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.06}>
                  <div className="py-7 sm:py-8 border-b border-surface-200 dark:border-white/[0.06]">
                    <h3 className="text-base font-bold text-dark-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Pillars */}
        <section className="py-20 sm:py-28 bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                End-to-End Safety
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                Before, during and after every ride.
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
              {safetyPillars.map((pillar, i) => (
                <AnimatedSection key={pillar.title} delay={i * 0.1}>
                  <div className={`p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-none border border-white/[0.08] lg:border-0 bg-white/[0.02] lg:bg-transparent ${i === 0 ? "lg:pr-8" : i === safetyPillars.length - 1 ? "lg:pl-8" : "lg:px-8"} ${i < safetyPillars.length - 1 ? "lg:border-r lg:!border-white/[0.08]" : ""}`}>
                    <h3 className="text-lg font-bold text-white mt-3 mb-5">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-3">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-dark-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <AnimatedSection>
                <p className="text-sm font-medium text-red-500 mb-6">
                  Emergency Response
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15]">
                  If something goes wrong.
                </h2>
                <p className="mt-5 text-dark-500 dark:text-dark-400 leading-relaxed">
                  Press SOS on the trip screen. Here is what happens.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="border-t border-surface-200 dark:border-white/[0.06]">
                  {[
                    "Our team sees your alert at once, with your trip, your driver and where you are",
                    "Our support inbox gets an email about it too",
                    "Your emergency contact is told that you raised an alert",
                    "If you are in danger, call the police on 112 as well",
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="py-5 border-b border-surface-200 dark:border-white/[0.06] flex items-start gap-4"
                    >
                      <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 lg:py-36 bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-4">
                  Ride with Confidence
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Safe ride-hailing in Abuja starts here.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  The rider app is on its way to the App Store and Google Play. Leave your email and we will tell you the day it is live. Ride-hailing built around your protection.
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
