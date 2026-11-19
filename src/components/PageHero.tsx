"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

/** The inner pages' banner: the same rounded brand-green block as the home page hero. */
export default function PageHero({ label, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <>
      <Navbar />
      <section className="bg-white px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 dark:bg-[#0b0f0d]">
        <motion.div
          className="mx-auto max-w-7xl rounded-[28px] bg-[linear-gradient(115deg,#063F1E_0%,#0a5229_55%,#0f6b36_100%)] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Breadcrumb items={breadcrumbs} variant="dark" />
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold text-[#9ACD32]">{label}</p>
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
            </div>
            <p className="text-base leading-relaxed text-white/75 sm:text-lg lg:pb-1">{description}</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
