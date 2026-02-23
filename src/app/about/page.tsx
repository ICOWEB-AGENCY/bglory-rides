import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BGlory Rides, our mission to transform urban transportation, and the team behind the movement.",
};

const values = [
  {
    title: "Safety First",
    description:
      "Every decision we make starts with the safety of our riders and drivers. From background checks to real-time monitoring, we never compromise.",
  },
  {
    title: "Community Driven",
    description:
      "We are more than a ride-hailing service. We are a community of riders and drivers working together to make cities more connected.",
  },
  {
    title: "Accessible to All",
    description:
      "Transportation should not be a luxury. We keep our prices fair and our service available so everyone can get where they need to go.",
  },
  {
    title: "Always Improving",
    description:
      "We listen to feedback, study the data, and constantly evolve. Every update is driven by real rider and driver experiences.",
  },
];

const milestones = [
  { year: "2024", title: "The Idea", description: "BGlory Rides was born from a simple frustration: getting around the city should not be this hard. We set out to build something better." },
  { year: "2024", title: "Team Assembled", description: "We brought together engineers, designers, and operations people who shared the vision. Development began in earnest." },
  { year: "2025", title: "Pilot Program", description: "We launched a closed pilot in Lagos with a small group of riders and drivers. The feedback shaped every feature in the app." },
  { year: "2025", title: "Driver Onboarding", description: "We opened driver registration and started building our network of verified drivers across multiple cities." },
  { year: "2026", title: "Public Launch", description: "We are preparing to launch BGlory Rides to the public. Join the waitlist and be among the first to ride." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Moving people forward, one ride at a time."
        description="BGlory Rides was founded on a belief that getting around your city should be safe, affordable, and reliable. Here is our story."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <main>
        {/* Mission & Vision */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Who We Are
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-3xl">
                We believe mobility is a right,{" "}
                <span className="text-primary-400">not a privilege.</span>
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
                    To provide safe, reliable, and affordable transportation for
                    everyone. We are building technology to make that real for
                    millions of people across Nigeria and beyond.
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
                    A world where anyone can get from point A to point B safely
                    and affordably, without owning a car. Cities with less
                    congestion, cleaner air, and more connected communities.
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
                Our Values
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                What drives us{" "}
                <span className="text-primary-400">every day.</span>
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
                From idea to launch.
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
                  Want to be part of the BGlory story?
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Whether you want to ride with us or drive with us, there is a
                  place for you at BGlory.
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
