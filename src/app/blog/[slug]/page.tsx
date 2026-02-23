import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | BGlory Rides Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;
  const prevPost = blogPosts[currentIndex - 1] || null;

  return (
    <>
      <PageHero
        label={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <main>
        {/* Article Content */}
        <article className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-8">
            {/* Meta bar */}
            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-surface-200">
                <span className="text-[11px] font-medium text-primary-600 bg-primary-400/10 px-2.5 py-1 rounded-full border border-primary-400/20">
                  {post.category}
                </span>
                <span className="text-sm font-mono text-dark-400">
                  {post.date}
                </span>
                <span className="text-sm text-dark-400">
                  {Math.ceil(post.content.join(" ").split(" ").length / 200)} min
                  read
                </span>
              </div>
            </AnimatedSection>

            {/* Body */}
            <AnimatedSection delay={0.1}>
              <div className="mt-10 sm:mt-12 space-y-6">
                {post.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-dark-600 leading-[1.8] ${
                      i === 0
                        ? "text-lg sm:text-xl text-dark-800 font-medium leading-[1.7]"
                        : "text-base"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Back link */}
            <AnimatedSection delay={0.15}>
              <div className="mt-12 pt-8 border-t border-surface-200">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all posts
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </article>

        {/* Prev / Next Navigation */}
        {(prevPost || nextPost) && (
          <section className="py-16 sm:py-20 bg-surface-50">
            <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-8">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-8">
                  Keep Reading
                </p>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {prevPost && (
                  <AnimatedSection delay={0.06}>
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group block p-6 bg-white rounded-2xl border border-surface-200 hover:border-primary-400/30 transition-colors"
                    >
                      <span className="text-xs font-mono text-dark-300 tracking-widest">
                        Previous
                      </span>
                      <h3 className="mt-3 text-sm font-bold text-dark-900 group-hover:text-primary-500 transition-colors leading-snug">
                        {prevPost.title}
                      </h3>
                      <span className="inline-block mt-2 text-[11px] font-medium text-primary-600 bg-primary-400/10 px-2 py-0.5 rounded-full">
                        {prevPost.category}
                      </span>
                    </Link>
                  </AnimatedSection>
                )}
                {nextPost && (
                  <AnimatedSection delay={0.12}>
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group block p-6 bg-white rounded-2xl border border-surface-200 hover:border-primary-400/30 transition-colors"
                    >
                      <span className="text-xs font-mono text-dark-300 tracking-widest">
                        Next
                      </span>
                      <h3 className="mt-3 text-sm font-bold text-dark-900 group-hover:text-primary-500 transition-colors leading-snug">
                        {nextPost.title}
                      </h3>
                      <span className="inline-block mt-2 text-[11px] font-medium text-primary-600 bg-primary-400/10 px-2 py-0.5 rounded-full">
                        {nextPost.category}
                      </span>
                    </Link>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>
        )}

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
