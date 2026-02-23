import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates, insights, and behind-the-scenes stories from the BGlory Rides team. Follow our journey as we build the future of urban transportation.",
};

const posts = [
  {
    category: "Safety",
    date: "Feb 12, 2026",
    title: "A deep dive into how BGlory keeps every ride safe",
    excerpt:
      "From real-time trip monitoring to driver background checks, here is a detailed look at the systems we built to protect riders and drivers on every trip.",
  },
  {
    category: "Product",
    date: "Jan 28, 2026",
    title: "How BGlory pricing works, and why we keep it transparent",
    excerpt:
      "We believe you should know exactly what you are paying for before you confirm a ride. Here is how our pricing model works and the principles behind it.",
  },
  {
    category: "Operations",
    date: "Jan 15, 2026",
    title: "Behind the driver verification process",
    excerpt:
      "Every driver on BGlory goes through a multi-step verification before their first trip. We walk through the full process and explain why each step matters.",
  },
  {
    category: "Engineering",
    date: "Dec 20, 2025",
    title: "Building a ride-hailing platform for Lagos traffic",
    excerpt:
      "Lagos moves differently. Our engineering team shares how we designed routing, ETAs, and surge logic for one of the most dynamic cities on the planet.",
  },
  {
    category: "Community",
    date: "Dec 5, 2025",
    title: "What our pilot riders taught us",
    excerpt:
      "We ran a closed pilot with a small group of riders in Lagos. Their feedback changed our product in ways we did not expect. Here are the biggest lessons.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Stories from the road."
        description="Updates, insights, and behind-the-scenes stories from the team building BGlory Rides."
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
                <span className="text-primary-400">stay informed.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 border-t border-surface-200">
              {posts.map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 0.06}>
                  <div className="group py-8 sm:py-10 border-b border-surface-200 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 lg:gap-16">
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
                      <Link
                        href="/blog"
                        className="inline-block mt-4 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        Read more
                      </Link>
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
                  Stay in the Loop
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Stay in the loop.
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Get product updates, city launch announcements, and new blog
                  posts delivered to your inbox. No spam, just the good stuff.
                </p>
                <div className="mt-8">
                  <Button href="/#notify" variant="primary" size="lg">
                    Get Notified
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
