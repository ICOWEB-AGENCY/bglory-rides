import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About BGlory Rides | Ride-Hailing Company Nigeria",
  description:
    "BGlory Rides is a ride-hailing company in Nigeria building safe, affordable transportation for Port Harcourt and beyond. Discover why thousands are joining the movement.",
};

const values = [
  {
    title: "Your Safety, Non-Negotiable",
    description:
      "You deserve to feel safe every time you open the app. That is why every driver passes thorough background checks, every ride is tracked in real time, and every trip comes with built-in safety features. No exceptions.",
  },
  {
    title: "You Belong Here",
    description:
      "BGlory Rides is not just a ride-hailing company in Nigeria. It is a growing community of riders and drivers building something bigger together. When you ride or drive with us, you move your city forward.",
  },
  {
    title: "Affordable for Everyone",
    description:
      "Getting around Port Harcourt or any city should never drain your wallet. You get transparent pricing, no surge surprises, and fares that respect your budget. Reliable transportation is for everyone, not just those who can afford to overpay.",
  },
  {
    title: "Built on Your Feedback",
    description:
      "Every feature in the BGlory Rides app exists because a real rider or driver asked for it. You shape the product. We listen, we build, we ship. Your voice drives every update.",
  },
];

const milestones = [
  { year: "2024", title: "The Spark", description: "One too many cancelled rides, one too many overpriced fares. BGlory Rides started because getting around Nigerian cities deserved a better answer." },
  { year: "2024", title: "The Team", description: "Engineers, designers, and operators who live the same commute frustrations came together. Building started fast because the mission was personal." },
  { year: "2025", title: "Port Harcourt Pilot", description: "Real riders and drivers in Port Harcourt tested every feature and told us exactly what worked and what did not. Their feedback became the product." },
  { year: "2025", title: "Drivers Joining", description: "Verified drivers across multiple cities signed up, passed screening, and started earning. The BGlory network grew city by city." },
  { year: "2026", title: "Your Turn", description: "Public launch is coming. Join the waitlist now and be among the first to experience ride-hailing in Port Harcourt the way it should be." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About BGlory Rides"
        title="Your city deserves a ride-hailing company that puts you first."
        description="BGlory Rides exists for one reason: to give you safe, affordable, and reliable rides wherever you need to go. This is the story of how we are making ride-hailing in Port Harcourt and across Nigeria work for you."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <main>
        {/* Mission & Vision */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Why We Exist
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-3xl">
                You should never have to choose between{" "}
                <span className="text-primary-400">safe and affordable.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-0">
              <AnimatedSection>
                <div className="pb-8 md:pb-0 md:pr-12 md:border-r border-surface-200">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-mono text-dark-300 tracking-widest">
                      01
                    </span>
                    <div className="h-px flex-1 bg-surface-200" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-dark-900 mb-3">
                    Mission
                  </h3>
                  <p className="text-dark-500 leading-relaxed">
                    To end the daily transportation struggle for millions of
                    people in Nigeria. You open the app, you get a ride, you
                    arrive safely, and you can afford to do it again tomorrow.
                    That is the standard we are building toward.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="pt-8 md:pt-0 md:pl-12 border-t md:border-t-0 border-surface-200">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-mono text-dark-300 tracking-widest">
                      02
                    </span>
                    <div className="h-px flex-1 bg-surface-200" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-dark-900 mb-3">
                    Vision
                  </h3>
                  <p className="text-dark-500 leading-relaxed">
                    Picture a Port Harcourt where you never wait more than minutes for a
                    safe, affordable ride. Fewer cars on the road, cleaner air,
                    and a city that actually moves. That is the future BGlory
                    Rides is building, and it starts with you.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-28 bg-surface-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Our Promises
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                What you can{" "}
                <span className="text-primary-400">count on.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 border-t border-surface-300">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 0.08}>
                  <div className="py-7 sm:py-8 border-b border-surface-300 grid grid-cols-1 md:grid-cols-[60px,1fr,1.5fr] gap-3 md:gap-8 items-start">
                    <span className="text-xs font-mono text-dark-300 tracking-widest pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-dark-900">
                      {value.title}
                    </h3>
                    <p className="text-dark-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 sm:py-28 bg-dark-950 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Our Journey
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                From frustration to the future of ride-hailing in Nigeria.
              </h2>
            </AnimatedSection>

            {/* Horizontal timeline */}
            <div className="mt-14 sm:mt-16 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-hide">
              <div className="flex min-w-max sm:min-w-0 sm:grid sm:grid-cols-5 gap-0">
                {milestones.map((m, i) => (
                  <AnimatedSection key={m.title} delay={i * 0.1}>
                    <div className="w-[220px] sm:w-auto pr-6 sm:pr-8 last:pr-0">
                      {/* Year */}
                      <span className="text-xs font-mono text-primary-400 tracking-widest">
                        {m.year}
                      </span>

                      {/* Dot + connector line */}
                      <div className="flex items-center mt-3 mb-5">
                        <div className="w-2 h-2 rounded-full bg-primary-400 shrink-0 relative z-10" />
                        {i < milestones.length - 1 && (
                          <div className="h-px flex-1 bg-white/[0.08]" />
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-base font-bold text-white mb-2">
                        {m.title}
                      </h3>
                      <p className="text-sm text-dark-400 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 lg:py-36 bg-dark-950 border-t border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-4">
                  Join the Movement
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  The waitlist is filling up. Get your spot now.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Ride or drive with BGlory Rides. Early members get first
                  access when we launch. Do not miss it.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button href="/#notify" variant="primary" size="lg">
                    Join the Waitlist
                  </Button>
                  <Button href="/drive" variant="outline" size="lg">
                    Become a Driver
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
