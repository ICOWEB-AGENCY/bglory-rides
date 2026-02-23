"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import RideAnimation from "@/components/RideAnimation";
import {
  features,
  howItWorks,
  rideOptions,
  testimonials,
  stats,
  faqs,
} from "@/lib/data";

/* ──────────────────────── HERO ──────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-950 overflow-hidden">
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

      {/* Animated green bubble blobs */}
      <div className="absolute top-[10%] right-[5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-primary-400/20 rounded-full blur-[120px] animate-bubble-1" />
      <div className="absolute bottom-[15%] left-[0%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-primary-400/10 rounded-full blur-[100px] animate-bubble-2" />
      <div className="absolute top-[50%] left-[30%] w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] bg-primary-400/[0.07] rounded-full blur-[90px] animate-bubble-3" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12 py-32 sm:py-40">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-400/10 border border-primary-400/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-400">
                Launching soon
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Your Ride,{" "}
              <span className="text-primary-400">Your Way.</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-dark-400 leading-relaxed max-w-2xl">
              BGlory Rides is a smarter way to get around. Request a ride,
              get matched with a verified driver, and travel safely to your
              destination. Simple, affordable, reliable.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/#notify" variant="primary" size="lg">
                Get Notified at Launch
              </Button>
              <Button href="/drive" variant="outline" size="lg">
                Become a Driver
              </Button>
            </div>

            {/* Value props */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3">
              {[
                "Verified drivers",
                "Transparent pricing",
                "Real-time tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-dark-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Car pickup animation at bottom edge */}
      <RideAnimation />
    </section>
  );
}

/* ──────────────────────── STATS ──────────────────────── */
function Stats() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="bg-white rounded-2xl shadow-xl shadow-dark-950/5 border border-surface-200 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-dark-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-dark-500 mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── FEATURES ──────────────────────── */
function Features() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary-400 mb-6">
            Why BGlory Rides
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
            A better way to{" "}
            <span className="text-primary-400">get around.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-0 border-t border-surface-200">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.06}>
              <div className="py-7 sm:py-8 border-b border-surface-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-dark-300 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base font-bold text-dark-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── HOW IT WORKS ──────────────────────── */
function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-20">
          {/* Left - Sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-3">
                How It Works
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
                Get a ride in four simple steps
              </h2>
              <p className="mt-4 text-base text-dark-500 leading-relaxed">
                From opening the app to arriving at your destination, the whole
                process takes minutes, not hours.
              </p>
            </AnimatedSection>
          </div>

          {/* Right - Steps */}
          <div className="border-t border-dark-200">
            {howItWorks.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="py-6 sm:py-8 border-b border-dark-200">
                  <span className="text-xs font-medium text-dark-400 tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-dark-900 mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-dark-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── RIDE OPTIONS ──────────────────────── */
function RideOptions() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="Ride Options"
          title="Choose the ride that fits your needs"
          description="Whether you need an everyday ride or a premium experience, we have something for you."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {rideOptions.map((option, i) => (
            <AnimatedSection key={option.name} delay={i * 0.1}>
              <div
                className="group relative h-full rounded-2xl cursor-pointer"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty("--spot-x", `${x}px`);
                  card.style.setProperty("--spot-y", `${y}px`);
                }}
              >
                {/* Mouse spotlight */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(155,197,61,0.08), transparent 40%)",
                  }}
                />

                {/* Glow border on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary-400/0 via-primary-400/0 to-primary-400/0 group-hover:from-primary-400/40 group-hover:via-primary-400/15 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                {/* Card surface */}
                <div
                  className="relative h-full rounded-2xl border border-surface-200/80 bg-white group-hover:border-primary-400/40 p-6 sm:p-8 flex flex-col transition-[border-color] duration-500"
                >
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-dark-400 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium text-primary-600 bg-primary-400/10 px-2.5 py-1 rounded-full border border-primary-400/20 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      {option.capacity}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-dark-900 mb-2">
                    {option.name}
                  </h3>
                  <p className="text-sm text-dark-500 leading-relaxed flex-1">
                    {option.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 pt-5 border-t border-surface-200 flex items-center justify-between">
                    <span className="text-sm font-semibold text-dark-900">
                      {option.priceLabel}
                    </span>
                    <ArrowRight className="w-4 h-4 text-dark-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── TESTIMONIALS ──────────────────────── */
function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="What Riders Say"
          title="What early testers are saying"
          description="Feedback from riders and drivers who have been part of our pilot program."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-200 hover:shadow-lg hover:shadow-dark-950/5 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s < t.rating
                          ? "text-accent-400 fill-accent-400"
                          : "text-surface-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-dark-700 text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-400/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-500">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-dark-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── FAQ ──────────────────────── */
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-surface-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-sm sm:text-base font-medium text-dark-900 pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-dark-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`faq-content ${isOpen ? "open" : ""}`}>
        <div>
          <p className="pb-5 text-sm text-dark-500 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-3">FAQ</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
                Got questions? We have answers.
              </h2>
              <p className="mt-4 text-base text-dark-500 leading-relaxed">
                Everything you need to know about riding with BGlory. Can&apos;t
                find what you need?{" "}
                <Link
                  href="/contact"
                  className="text-primary-500 font-medium hover:underline"
                >
                  Contact us
                </Link>
                .
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1}>
            <div className="border-t border-surface-200">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── NOTIFY CTA ──────────────────────── */
function NotifyCTA() {
  return (
    <section id="notify" className="py-20 sm:py-28 lg:py-36 bg-dark-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <AnimatedSection>
            <p className="text-sm font-medium text-primary-400 mb-4">
              Coming Soon
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
              Be the first to ride with BGlory.
            </h2>
            <p className="mt-5 text-dark-400 text-base leading-relaxed max-w-lg">
              We are putting the finishing touches on the app. Leave your email
              and we will let you know the moment it goes live.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-dark-800 border border-dark-700 text-white text-sm placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-primary-400 text-white text-sm font-semibold hover:bg-primary-500 transition-colors shrink-0 cursor-pointer"
              >
                Notify Me
              </button>
            </form>

            <div className="mt-6 flex items-center gap-4 text-sm text-dark-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                No spam, ever
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                Unsubscribe anytime
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── PAGE ──────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <RideOptions />
        <Testimonials />
        <FAQSection />
        <NotifyCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
