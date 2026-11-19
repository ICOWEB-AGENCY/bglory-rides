import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Zyon | Ride-Hailing Company Nigeria",
  description:
    "Zyon is a ride-hailing app built for Nigeria: drivers checked by our team, the price before you book, and safety features on every ride.",
};

const values = [
  {
    title: "Safety on every ride",
    description:
      "Every driver's documents and car are checked by our team before their first trip. Every ride has a PIN, a live trip link you can share and an SOS button.",
  },
  {
    title: "The price before you book",
    description:
      "You see the fare before you confirm, busy-hour pricing included. It changes only if the trip turns out much longer than planned.",
  },
  {
    title: "Fair to drivers",
    description:
      "Drivers keep 80% of every fare, drive the hours they choose and withdraw their earnings to their own bank.",
  },
  {
    title: "Built for Nigeria",
    description:
      "Pickups at your exact spot, directions read out in a Nigerian voice, and cash, card or wallet, because that is how Nigeria pays.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Zyon"
        title="Ride-hailing built for Nigeria."
        description="Zyon is a ride-hailing app for Nigeria: one app for riders, one for drivers, and a team that checks every driver before their first trip."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <main>
        {/* Mission & Vision */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Why We Exist
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-3xl">
                You should never have to choose between{" "}
                <span className="text-primary-400">safe and affordable.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-0">
              <AnimatedSection>
                <div className="pb-8 md:pb-0 md:pr-12 md:border-r border-surface-200 dark:border-white/[0.06]">
                  <h3 className="text-lg sm:text-xl font-bold text-dark-900 dark:text-white mb-3">
                    Mission
                  </h3>
                  <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                    You open the app, you get a ride, you arrive safely, and you
                    can afford to do it again tomorrow. That is the standard we
                    hold every trip to.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="pt-8 md:pt-0 md:pl-12 border-t md:border-t-0 border-surface-200 dark:border-white/[0.06]">
                  <h3 className="text-lg sm:text-xl font-bold text-dark-900 dark:text-white mb-3">
                    Vision
                  </h3>
                  <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                    Cities across Nigeria where a safe, fairly priced ride is a tap away, and
                    driving for a living pays properly. We start here and grow
                    city by city.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-28 bg-surface-50 dark:bg-dark-900">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <AnimatedSection>
                  <p className="text-sm font-medium text-primary-400 mb-6">
                    What we stand for
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15]">
                    What you can{" "}
                    <span className="text-primary-400">count on.</span>
                  </h2>
                </AnimatedSection>
              </div>

              <div className="border-t border-surface-300 dark:border-white/[0.08]">
                {values.map((value, i) => (
                  <AnimatedSection key={value.title} delay={i * 0.08}>
                    <div className="py-7 sm:py-8 border-b border-surface-300 dark:border-white/[0.08]">
                      <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-dark-500 dark:text-dark-400 leading-relaxed text-sm sm:text-base">
                        {value.description}
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
                  Coming to the stores
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Be first to ride with Zyon.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Both apps are on their way to the App Store and Google Play.
                  Leave your email and we will tell you the day they are live.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button href="/#notify" variant="primary" size="lg">
                    Get the launch email
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
