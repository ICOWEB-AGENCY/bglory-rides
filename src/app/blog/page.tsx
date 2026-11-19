import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import { Band, CtaCard } from "@/components/page/blocks";

export const metadata: Metadata = {
  title: "Blog | How Zyon Works",
  description: "How Zyon works: the safety on every ride, how fares are worked out, and what it takes to drive with Zyon in Nigeria.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="How Zyon"
        dim="works."
        description="The safety on every ride, how fares are worked out, and what it takes to drive with Zyon."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <main>
        <Band tone="white">
          <ul className="border-t border-ink/15 dark:border-white/15">
            {blogPosts.map((post) => (
              <li key={post.slug} className="border-b border-ink/15 dark:border-white/15">
                <Link href={`/blog/${post.slug}`} className="group grid gap-4 py-10 lg:grid-cols-[1fr_2fr_auto] lg:items-start lg:gap-12">
                  <p className="text-sm text-dark-500 dark:text-white/55">
                    {post.category} · {post.date}
                  </p>
                  <div>
                    <h2 className="display text-[clamp(1.7rem,3vw,2.6rem)] group-hover:underline group-hover:underline-offset-4">{post.title}</h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-dark-500 dark:text-white/60">{post.excerpt}</p>
                  </div>
                  <ArrowUpRight className="hidden h-6 w-6 text-dark-400 transition-colors group-hover:text-ink lg:block dark:group-hover:text-white" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Band>

        <CtaCard title="Be first to ride" dim="with Zyon." text="Leave your email and we will send you one message, the day the apps are live.">
          <Button href="/#notify" size="lg">Get the launch email</Button>
        </CtaCard>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
