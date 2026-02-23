import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the BGlory Rides team. We are building the future of urban mobility and looking for talented people to help us get there.",
};

const benefits = [
  {
    title: "Mission-Driven Work",
    description:
      "Every line of code, every campaign, every decision moves us closer to making safe, affordable transportation a reality for millions of people.",
  },
  {
    title: "Early Stage Impact",
    description:
      "We are still small enough that your work shapes the product directly. No layers of bureaucracy. Your ideas ship fast and reach real users.",
  },
  {
    title: "Growth Opportunities",
    description:
      "Join now and grow with us. Early team members get outsized responsibility, mentorship, and the chance to build their career as the company scales.",
  },
  {
    title: "Flexible Culture",
    description:
      "We care about results, not hours at a desk. Work remotely, set your own schedule, and take the time you need to do your best work.",
  },
];

const positions = [
  {
    role: "Senior Mobile Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    role: "Backend Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    role: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    role: "Operations Manager",
    department: "Operations",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    role: "Marketing Lead",
    department: "Marketing",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    role: "Community Manager",
    department: "Growth",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build the future of mobility."
        description="We are assembling a team of builders, thinkers, and operators who believe transportation can be better. If that sounds like you, we want to hear from you."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <main>
        {/* Why Join Us */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Why Join Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                More than a job.{" "}
                <span className="text-primary-400">A mission.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 border-t border-surface-200">
              {benefits.map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.08}>
                  <div className="py-7 sm:py-8 border-b border-surface-200 grid grid-cols-1 md:grid-cols-[60px,1fr,1.5fr] gap-3 md:gap-8 items-start">
                    <span className="text-xs font-mono text-dark-300 tracking-widest pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-dark-900">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 sm:py-28 bg-surface-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Open Positions
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Find your role{" "}
                <span className="text-primary-400">at BGlory.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 border-t border-surface-200">
              {positions.map((position, i) => (
                <AnimatedSection key={position.role} delay={i * 0.06}>
                  <div className="group py-7 sm:py-8 border-b border-surface-200 grid grid-cols-1 md:grid-cols-[60px,1fr,auto] gap-3 md:gap-8 items-start md:items-center cursor-pointer">
                    {/* Number */}
                    <span className="text-xs font-mono text-dark-300 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Role info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h3 className="text-lg font-bold text-dark-900 group-hover:text-primary-500 transition-colors">
                        {position.role}
                      </h3>
                      <span className="text-[11px] font-medium text-primary-600 bg-primary-400/10 px-2.5 py-1 rounded-full border border-primary-400/20 w-fit">
                        {position.department}
                      </span>
                    </div>

                    {/* Location + type */}
                    <div className="flex items-center gap-4 text-sm text-dark-500">
                      <span>{position.location}</span>
                      <span className="w-1 h-1 rounded-full bg-dark-300 shrink-0" />
                      <span>{position.type}</span>
                    </div>
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
                  Don&apos;t See Your Role?
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  We are always looking for great people.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  If you are passionate about building the future of mobility
                  and think you can contribute, reach out. We would love to
                  hear from you.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Get in Touch
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
