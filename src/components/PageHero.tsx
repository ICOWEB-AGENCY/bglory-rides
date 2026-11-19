"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Every inner page opens like the home page: dark, a two-tone display
 * headline, one line of context, and optionally the page's own picture.
 */
export default function PageHero({
  title,
  dim,
  description,
  breadcrumbs,
  media,
  actions,
}: {
  title: string;
  /** The quieter second half of the headline, in grey. */
  dim?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  media?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className={`shell grid gap-12 ${media ? "lg:grid-cols-[1.15fr_1fr] lg:items-end" : ""}`}>
          <div>
            <Breadcrumb items={breadcrumbs} />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="display max-w-[16ch] text-[clamp(2.6rem,6.4vw,5.8rem)]"
            >
              {title} {dim && <span className="text-white/40">{dim}</span>}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            >
              {description}
            </motion.p>
            {actions && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.2 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                {actions}
              </motion.div>
            )}
          </div>
          {media && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.15 }}>
              {media}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
