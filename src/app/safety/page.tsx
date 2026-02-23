import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Your safety is our top priority. Learn about the measures BGlory Rides takes to ensure every ride is secure.",
};

const safetyFeatures = [
  {
    title: "Verified Drivers",
    description:
      "Every driver passes a comprehensive background check, vehicle inspection, and identity verification before joining BGlory.",
  },
  {
    title: "Real-Time Trip Tracking",
    description:
      "Share your trip with family and friends. They can follow your ride live on the map from start to finish.",
  },
  {
    title: "Emergency Button",
    description:
      "One tap connects you to emergency services and shares your live location. Your safety is always one button away.",
  },
  {
    title: "In-App Reporting",
    description:
      "Report any concern directly in the app. Our safety team reviews every report and takes action within 24 hours.",
  },
  {
    title: "Two-Way Ratings",
    description:
      "Both riders and drivers rate each other after every trip. This keeps the community accountable and the experience great.",
  },
  {
    title: "24/7 Safety Team",
    description:
      "A dedicated safety team monitors rides around the clock. If something seems off, they can intervene in real time.",
  },
];

const safetyPillars = [
  {
    title: "Before the Ride",
    items: [
      "Multi-step driver background checks",
      "Vehicle inspection and registration verification",
      "Identity verification with photo matching",
      "Mandatory safety training for all drivers",
    ],
  },
  {
    title: "During the Ride",
    items: [
      "Real-time GPS tracking on every trip",
      "Share your trip with family and friends",
      "In-app emergency button with live location",
      "Audio recording option for accountability",
    ],
  },
  {
    title: "After the Ride",
    items: [
      "Two-way rating system for accountability",
      "24-hour incident reporting and response",
      "Insurance coverage on every ride",
      "Dedicated safety team reviews all reports",
    ],
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        label="Safety"
        title="Your safety is not negotiable."
        description="We have built multiple layers of protection into every ride. From the moment you request to the moment you arrive, you are covered."
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
                Built-in protection{" "}
                <span className="text-primary-400">at every step.</span>
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
                Before, during, and after.
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
                  Emergency
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15]">
                  In an emergency, help is one tap away.
                </h2>
                <p className="mt-5 text-dark-500 leading-relaxed">
                  Here is what happens when you press the emergency button.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="border-t border-surface-200">
                  {[
                    "Your live location is immediately shared with emergency services",
                    "Our safety team is alerted and begins monitoring your ride",
                    "Your emergency contacts receive a notification with your location",
                    "The driver is notified that an emergency alert has been triggered",
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
                  Your safety is our promise.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Join the waitlist and experience transportation you can trust.
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
