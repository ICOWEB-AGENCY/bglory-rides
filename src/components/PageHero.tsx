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

export default function PageHero({ label, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-dark-950 overflow-hidden">
      {/* Subtle diagonal lines instead of blobs */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(225deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Single focused glow */}
      <div className="absolute top-1/2 -right-20 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-primary-400/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <Navbar />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Breadcrumb items={breadcrumbs} variant="dark" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end">
            {/* Left: label + title */}
            <div>
              <p className="text-sm font-medium text-primary-400 mb-3">{label}</p>
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                {title}
              </h1>
            </div>

            {/* Right: description - aligned to bottom of title */}
            <div className="lg:pb-1">
              <p className="text-base sm:text-lg text-dark-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className="mt-10 sm:mt-12 h-px bg-white/[0.08]" />
        </motion.div>
      </div>
    </section>
  );
}
