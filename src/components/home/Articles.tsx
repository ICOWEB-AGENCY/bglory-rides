import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

/** The site's own posts: the newest is featured, the next two are listed beside it. */
export default function Articles() {
  const [lead, ...rest] = blogPosts;
  if (!lead) return null;
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-dark-900 sm:text-4xl dark:text-white">From the Zyon blog</h2>
          <Link href="/blog" className="hidden text-sm font-semibold text-dark-900 underline-offset-4 hover:underline sm:block dark:text-white">
            All posts
          </Link>
        </div>
        <div className="mt-10 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <Link
            href={`/blog/${lead.slug}`}
            className="group flex min-h-72 flex-col justify-between rounded-2xl bg-brand p-7 text-white sm:p-9"
          >
            <span className="text-xs font-semibold text-lime">
              {lead.category} · {lead.date}
            </span>
            <div>
              <h3 className="max-w-lg text-2xl font-semibold leading-tight sm:text-3xl">{lead.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">{lead.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-lime">
                Read the post <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
          <div className="divide-y divide-dark-100 rounded-2xl border border-dark-100 dark:divide-dark-800 dark:border-dark-800">
            {rest.slice(0, 2).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block p-7 transition-colors hover:bg-mist dark:hover:bg-ink-raised">
                <span className="text-xs font-semibold text-dark-400">
                  {p.category} · {p.date}
                </span>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-dark-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-dark-500 dark:text-dark-300">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
        <Link
          href="/blog"
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-dark-200 px-6 py-3.5 text-sm font-semibold text-dark-900 sm:hidden dark:border-dark-700 dark:text-white"
        >
          All posts
        </Link>
      </div>
    </section>
  );
}
