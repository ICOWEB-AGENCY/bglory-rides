import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Blog | Zyon News, Ride-Hailing Insights Nigeria",
  description:
    "How Zyon works: the safety on every ride, how fares are worked out, and what it takes to drive with Zyon in Abuja.",
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
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Latest Posts
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-2xl">
                Read, learn,{" "}
                <span className="text-primary-400">ride smarter.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 border-t border-surface-200 dark:border-white/[0.06]">
              {blogPosts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block py-8 sm:py-10 border-b border-surface-200 dark:border-white/[0.06]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 lg:gap-16">
                      {/* Left: category and date */}
                      <p className="text-sm text-dark-500 dark:text-dark-400">
                        <span className="font-semibold text-primary-700 dark:text-lime">{post.category}</span> · {post.date}
                      </p>

                      {/* Right: title, excerpt and read more */}
                      <div>
                        <h3 className="text-lg font-bold text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
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
                  Get the launch email
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Be first to ride.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Leave your email and we will send you one message, the day
                  the apps are live.
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
