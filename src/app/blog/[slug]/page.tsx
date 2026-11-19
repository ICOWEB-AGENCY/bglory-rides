import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { CtaCard } from "@/components/page/blocks";
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
    title: `${post.title} | Zyon Blog`,
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
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <main className="bg-white dark:bg-ink">
        <article className="shell py-16 sm:py-24">
          <div className="mx-auto max-w-2xl">
            <p className="border-b border-ink/15 pb-6 text-sm text-dark-500 dark:border-white/15 dark:text-white/55">
              {post.category} · {post.date} · {Math.ceil(post.content.join(" ").split(" ").length / 200)} min read
            </p>
            <div className="mt-10 space-y-6">
              {post.content.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "text-xl leading-relaxed text-dark-800 dark:text-white/85" : "text-lg leading-[1.8] text-dark-600 dark:text-white/70"}>
                  {paragraph}
                </p>
              ))}
            </div>

            <nav aria-label="More posts" className="mt-16 grid gap-4 border-t border-ink/15 pt-10 sm:grid-cols-2 dark:border-white/15">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group rounded-[1.5rem] bg-mist p-6 dark:bg-ink-raised">
                  <span className="text-xs text-dark-500 dark:text-white/50">Previous</span>
                  <span className="mt-2 block font-semibold leading-snug group-hover:underline">{prevPost.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group rounded-[1.5rem] bg-mist p-6 sm:text-right dark:bg-ink-raised">
                  <span className="text-xs text-dark-500 dark:text-white/50">Next</span>
                  <span className="mt-2 block font-semibold leading-snug group-hover:underline">{nextPost.title}</span>
                </Link>
              )}
            </nav>

            <Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All posts
            </Link>
          </div>
        </article>

        <CtaCard title="Be first to ride" dim="with Zyon." text="Leave your email and we will send you one message, the day the apps are live.">
          <Button href="/#notify" size="lg">Get the launch email</Button>
        </CtaCard>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
