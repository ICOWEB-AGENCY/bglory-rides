import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Press",
  description:
    "BGlory Rides in the news. Read our latest press releases, download media resources, and get in touch with our communications team.",
};

const pressReleases = [
  {
    date: "Feb 2026",
    title: "BGlory Rides Announces Public Launch Across Lagos",
    description:
      "After months of testing and iteration, BGlory Rides is officially available to riders and drivers across Lagos. The public launch marks a new chapter for affordable, safe ride-hailing in Nigeria.",
  },
  {
    date: "Jan 2026",
    title: "BGlory Reaches 5,000 Verified Drivers on the Platform",
    description:
      "The company has onboarded over 5,000 verified drivers ahead of its public launch. Every driver has completed background checks, vehicle inspections, and safety training.",
  },
  {
    date: "Dec 2025",
    title: "Pilot Program Results: 98% Rider Satisfaction Rate",
    description:
      "BGlory Rides shares results from its closed pilot program. Over 10,000 trips were completed with a 98% rider satisfaction rate and an average pickup time of 4 minutes.",
  },
  {
    date: "Oct 2025",
    title: "BGlory Rides Founded to Transform Urban Mobility in Africa",
    description:
      "A new ride-hailing company launches with a mission to make safe, reliable, and affordable transportation accessible to everyone. BGlory Rides begins development and early driver recruitment.",
  },
];

const mediaResources = [
  {
    title: "Brand Assets",
    description:
      "Download the BGlory Rides logo, brand colors, and visual guidelines for editorial and media use.",
  },
  {
    title: "Media Kit",
    description:
      "Access our company fact sheet, executive bios, key statistics, and high-resolution product images.",
  },
  {
    title: "Press Contact",
    description:
      "For media inquiries, interviews, or story collaboration, reach our communications team at press@bgloryrides.com.",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        label="Press"
        title="BGlory Rides in the news."
        description="Read our latest announcements, access media resources, and connect with our communications team for coverage and inquiries."
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
                <span className="text-primary-400">to tell our story.</span>
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
                  Want to cover BGlory?
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  We would love to hear from you. Get in touch with our
                  communications team for interviews, data, or story
                  collaboration.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Contact Us
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
