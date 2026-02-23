import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Safety | Safe Ride-Hailing in Port Harcourt | BGlory Rides",
  description:
    "Feel protected on every trip with verified drivers in Port Harcourt, real-time tracking, and 24/7 safety support. BGlory Rides is the safe ride-hailing choice in Nigeria.",
};

const safetyFeatures = [
  {
    title: "Verified Drivers",
    description:
      "You only ride with drivers who have passed thorough background checks, vehicle inspections, and identity verification. Every driver on BGlory is screened before they can accept a single trip.",
  },
  {
    title: "Real-Time Trip Tracking",
    description:
      "You can share your trip with family and friends so they follow your ride live on the map. From pickup to drop-off, someone always knows where you are.",
  },
  {
    title: "Emergency Button",
    description:
      "You are never more than one tap away from help. Press the emergency button and your live location is instantly shared with emergency services and your chosen contacts.",
  },
  {
    title: "In-App Reporting",
    description:
      "You can report any concern directly in the app and expect a response. Our safety team reviews every single report and takes action within 24 hours.",
  },
  {
    title: "Two-Way Ratings",
    description:
      "You rate your driver, and your driver rates you. This two-way accountability keeps standards high and ensures a respectful experience on every trip.",
  },
  {
    title: "24/7 Safety Team",
    description:
      "You have a dedicated safety team watching over your rides around the clock. If anything seems off, they step in immediately. No waiting, no delays.",
  },
];

const safetyPillars = [
  {
    title: "Before Your Ride",
    items: [
      "Your driver has cleared a multi-step background check",
      "The vehicle you enter has been inspected and registered",
      "Your driver's identity is photo-verified, so you always know who is picking you up",
      "Every driver completes mandatory safety training before accepting rides",
    ],
  },
  {
    title: "During Your Ride",
    items: [
      "Your trip is GPS-tracked in real time from start to finish",
      "You can share your live route with anyone you trust",
      "You have a one-tap emergency button that shares your exact location",
      "Optional audio recording gives you an extra layer of protection",
    ],
  },
  {
    title: "After Your Ride",
    items: [
      "You rate your driver and hold them accountable",
      "You can report any incident and get a response within 24 hours",
      "Every ride you take is covered by insurance",
      "Our dedicated safety team personally reviews every report",
    ],
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        label="Safety"
        title="You deserve to feel safe on every ride."
        description="Every layer of BGlory is built to protect you. From the moment you request a ride to the moment you step out, you are covered by verified drivers, real-time tracking, and a safety team that never sleeps."
        breadcrumbs={[{ label: "Safety" }]}
      />

      <main>
        {/* Safety Features */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Safety Features
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Your protection is{" "}
                <span className="text-primary-400">built into every trip.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 border-t border-surface-200">
              {safetyFeatures.map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.06}>
                  <div className="py-7 sm:py-8 border-b border-surface-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-dark-300 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-dark-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-dark-500 leading-relaxed">
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
                You are protected before, during, and after every ride.
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-0">
              {safetyPillars.map((pillar, i) => (
                <AnimatedSection key={pillar.title} delay={i * 0.1}>
                  <div className={`py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 ${i < safetyPillars.length - 1 ? "border-b lg:border-b-0 lg:border-r border-white/[0.08]" : ""}`}>
                    <span className="text-xs font-mono text-dark-500 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-5">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-3">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-dark-400"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary-400 mt-2 shrink-0" />
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
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <AnimatedSection>
                <p className="text-sm font-medium text-red-500 mb-6">
                  Emergency Response
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15]">
                  If something goes wrong, you are never alone.
                </h2>
                <p className="mt-5 text-dark-500 leading-relaxed">
                  One tap on the emergency button triggers an immediate, coordinated response. Here is exactly what happens.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="border-t border-surface-200">
                  {[
                    "Your live location is instantly shared with emergency services so help can reach you fast",
                    "Our safety team is alerted within seconds and begins actively monitoring your ride",
                    "Your emergency contacts receive an immediate notification with your real-time location",
                    "Your driver is notified that an emergency response is underway",
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="py-5 border-b border-surface-200 flex items-start gap-4"
                    >
                      <span className="text-xs font-mono text-dark-300 tracking-widest pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-dark-600 leading-relaxed">
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
                  Safe ride-hailing in Port Harcourt starts here.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Thousands of riders across Nigeria are waiting for a safer way to move. Join the waitlist and be the first to experience ride-hailing built around your protection.
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
