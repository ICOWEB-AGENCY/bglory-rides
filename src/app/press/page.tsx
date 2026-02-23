import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Press & Media | BGlory Rides Newsroom, Ride-Hailing News Port Harcourt",
  description:
    "Get the latest news from BGlory Rides. Press releases, media kits, brand assets, and press contacts for Africa's fastest-growing ride-hailing platform.",
};

const pressReleases = [
  {
    date: "Feb 2026",
    title: "BGlory Rides Goes Live Across Port Harcourt, Opens Doors to All Riders and Drivers",
    description:
      "After months of closed testing, BGlory Rides is now publicly available across Port Harcourt. Riders can book their first trip today, and thousands of verified drivers are already on the road.",
  },
  {
    date: "Jan 2026",
    title: "BGlory Hits 5,000 Verified Drivers Before Public Launch",
    description:
      "BGlory Rides has onboarded over 5,000 drivers, each cleared through background checks, vehicle inspections, and safety training. The milestone sets the stage for the largest verified driver network at launch in Nigeria.",
  },
  {
    date: "Dec 2025",
    title: "10,000 Pilot Trips Completed with 98% Rider Satisfaction",
    description:
      "BGlory Rides releases results from its closed pilot: 10,000+ trips, 98% satisfaction, and an average pickup time of just 4 minutes. The data signals strong product-market fit ahead of the public launch.",
  },
  {
    date: "Oct 2025",
    title: "New Ride-Hailing Challenger Launches in Port Harcourt with a Safety-First Approach",
    description:
      "BGlory Rides enters the market with a clear mission: make safe, reliable, and affordable rides accessible to every rider in Africa. Development begins alongside early driver recruitment.",
  },
];

const mediaResources = [
  {
    title: "Brand Assets",
    description:
      "Grab our logo, brand colors, and visual guidelines in print and web-ready formats. Everything you need to feature BGlory accurately in your publication.",
  },
  {
    title: "Media Kit",
    description:
      "Download our company fact sheet, founder bios, key growth metrics, and high-resolution product screenshots. Ready to drop into your story.",
  },
  {
    title: "Press Contact",
    description:
      "Need a quote, interview, or exclusive? Our communications team responds to journalists within 24 hours. Reach us at press@bgloryrides.com.",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        label="Press"
        title="BGlory Rides in the news."
        description="5,000+ verified drivers. 10,000+ pilot trips. 98% rider satisfaction. Here is what is happening at Port Harcourt's fastest-growing ride-hailing platform."
        breadcrumbs={[{ label: "Press" }]}
      />

      <main>
        {/* Press Releases */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Press Releases
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Latest announcements{" "}
                <span className="text-primary-400">from BGlory.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 border-t border-surface-200">
              {pressReleases.map((release, i) => (
                <AnimatedSection key={release.title} delay={i * 0.08}>
                  <div className="py-7 sm:py-8 border-b border-surface-200 grid grid-cols-1 md:grid-cols-[60px,160px,1fr] gap-3 md:gap-8 items-start">
                    <span className="text-xs font-mono text-dark-300 tracking-widest pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-mono text-dark-400 pt-1">
                      {release.date}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">
                        {release.title}
                      </h3>
                      <p className="text-dark-500 leading-relaxed">
                        {release.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20 sm:py-28 bg-surface-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Media Resources
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Everything you need{" "}
                <span className="text-primary-400">to cover BGlory.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-0">
              {mediaResources.map((resource, i) => (
                <AnimatedSection key={resource.title} delay={i * 0.1}>
                  <div
                    className={`py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 ${
                      i < mediaResources.length - 1
                        ? "border-b lg:border-b-0 lg:border-r border-surface-200"
                        : ""
                    }`}
                  >
                    <span className="text-xs font-mono text-dark-300 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-dark-900 mt-3 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-dark-500 leading-relaxed">
                      {resource.description}
                    </p>
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
                  Media Inquiries
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Writing about ride-hailing in Africa?
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  We make it easy for journalists. Get data, executive quotes,
                  and exclusive insights from our communications team. Fast
                  turnaround guaranteed.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Reach the Press Team
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
