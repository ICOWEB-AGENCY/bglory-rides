import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Blog | BGlory Rides News, Ride-Hailing Insights Nigeria",
  description:
    "Get insider insights on ride-hailing in Abuja, safety tips for riders and drivers, product updates, and the story behind BGlory Rides. New posts every week.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Stories from the road."
        description="Practical tips for riders and drivers, product deep dives, and the real story behind building a ride-hailing platform in Abuja. Written for you, not investors."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <main>
        {/* Latest Posts */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Latest Posts
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Read, learn,{" "}
                <span className="text-primary-400">ride smarter.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 border-t border-surface-200">
              {blogPosts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block py-8 sm:py-10 border-b border-surface-200"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 lg:gap-16">
                      {/* Left: number + category + date */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-mono text-dark-300 tracking-widest">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[11px] font-medium text-primary-600 bg-primary-400/10 px-2.5 py-1 rounded-full border border-primary-400/20">
                            {post.category}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-dark-300 tracking-wide">
                          {post.date}
                        </span>
                      </div>

                      {/* Right: title + excerpt + read more */}
                      <div>
                        <h3 className="text-lg font-bold text-dark-900 group-hover:text-primary-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-dark-500 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <span className="inline-block mt-4 text-sm font-semibold text-primary-500 group-hover:text-primary-600 transition-colors">
                          Read more
                        </span>
                      </div>
                    </div>
                  </Link>
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
                  Join the Waitlist
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Be first to ride.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Join the BGlory waitlist and get early access, launch updates,
                  and new posts before anyone else. No spam, just the things
                  that matter.
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
