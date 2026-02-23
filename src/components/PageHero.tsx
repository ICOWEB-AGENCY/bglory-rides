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
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Animated bubble */}
      <div className="absolute top-1/2 -right-32 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-primary-400/15 rounded-full blur-[100px] animate-bubble-1" />

      <Navbar />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <Breadcrumb items={breadcrumbs} variant="dark" />
          <p className="text-sm font-medium text-primary-400 mb-3">{label}</p>
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-dark-400 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
