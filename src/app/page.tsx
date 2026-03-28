"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Star,
  Clock,
  Shield,
  Wallet,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import WaitlistForm from "@/components/WaitlistForm";
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-400/10 border border-primary-400/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-400">
                Launching in Abuja, 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Get there faster.{" "}
              <span className="text-primary-400">Pay less.</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-dark-400 leading-relaxed max-w-2xl">
              BGlory Rides connects you with verified drivers in minutes.
              See your fare before you book. No surge pricing, no hidden
              fees. Just safe, affordable rides across Abuja.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/#notify" variant="primary" size="lg">
                Join the Waitlist
              </Button>
              <Button href="/drive" variant="outline" size="lg">
                Start Earning as a Driver
              </Button>
            </div>

            {/* Value props */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3">
              {[
                "4-minute average pickup",
                "Upfront pricing, always",
                "Background-checked drivers",
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
          </motion.div>
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
const featureIcons = [Clock, MapPin, Shield, Zap, Wallet, Phone];

function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        {/* Two-column editorial header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-16 sm:mb-20">
          <AnimatedSection>
            <p className="text-sm font-medium text-primary-400 mb-4">
              Why Riders Choose BGlory
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-dark-900 tracking-tight leading-[1.15]">
              Everything you need.{" "}
              <span className="text-primary-400">Nothing you don&apos;t.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-dark-500 leading-relaxed lg:pt-10">
              We stripped out everything that makes ride-hailing frustrating and
              kept what matters. Transparent pricing, fast pickups, real
              safety measures, and drivers you can trust. Every feature exists
              because riders asked for it.
            </p>
          </AnimatedSection>
        </div>

        {/* Feature rows - alternating large/small layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-surface-200">
          {features.map((feature, i) => {
            const Icon = featureIcons[i];
            const isOdd = i % 2 === 1;
            return (
              <AnimatedSection
                key={feature.title}
                delay={i * 0.06}
                className={`${isOdd ? "md:border-l md:pl-10 lg:pl-14" : "md:pr-10 lg:pr-14"} border-b border-surface-200`}
              >
                <div className="py-8 sm:py-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-400/8 border border-primary-400/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-[18px] h-[18px] text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-dark-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-dark-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── HOW IT WORKS ──────────────────────── */
function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-surface-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-20">
          {/* Left - Sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-3">
                How It Works
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
                Request a ride in under 60 seconds
              </h2>
              <p className="mt-4 text-base text-dark-500 leading-relaxed">
                Open the app, enter your destination, confirm your fare, and
                a verified driver is on the way. That is it.
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
    <section className="py-24 sm:py-32 bg-dark-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        {/* Left-aligned heading */}
        <AnimatedSection className="mb-14 sm:mb-16">
          <p className="text-sm font-medium text-primary-400 mb-3">
            Ride Options
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight max-w-xl">
            Three tiers. One promise: you see the fare before you ride.
          </h2>
        </AnimatedSection>

        {/* Cards - horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
          {rideOptions.map((option, i) => (
            <AnimatedSection key={option.name} delay={i * 0.12}>
              <div
                className={`group relative py-8 sm:py-10 ${i < 2 ? "md:border-r border-white/10" : ""} ${i > 0 ? "border-t md:border-t-0 border-white/10" : ""} ${i === 1 ? "md:px-8 lg:px-12" : i === 2 ? "md:pl-8 lg:pl-12" : "md:pr-8 lg:pr-12"}`}
              >
                {/* Badge for standard */}
                {i === 1 && (
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-primary-400 bg-primary-400/10 border border-primary-400/20 px-3 py-1 rounded-full mb-5">
                    Fastest
                  </span>
                )}
                {i === 0 && (
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-dark-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-5">
                    Budget
                  </span>
                )}
                {i === 2 && (
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-accent-400 bg-accent-400/10 border border-accent-400/20 px-3 py-1 rounded-full mb-5">
                    Premium
                  </span>
                )}

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {option.name}
                </h3>

                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                  {option.description}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div>
                    <p className="text-lg font-bold text-white">
                      {option.priceLabel}
                    </p>
                    <p className="text-xs text-dark-500 mt-0.5">
                      {option.capacity}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-400/10 group-hover:border-primary-400/30 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-dark-400 group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.3} className="mt-10">
          <p className="text-sm text-dark-500">
            All ride types include upfront pricing, verified drivers, real-time tracking, and trip sharing.{" "}
            <Link href="/services" className="text-primary-400 font-medium hover:underline">
              Compare all options
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ──────────────────────── TESTIMONIALS ──────────────────────── */
function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        {/* Editorial two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-14 sm:mb-16">
          <AnimatedSection>
            <p className="text-sm font-medium text-primary-400 mb-3">
              Real Feedback
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
              What our pilot riders and drivers had to say
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-dark-500 leading-relaxed lg:pt-10">
              We ran a closed pilot in Abuja before launch. Real trips, real
              feedback. These are unedited responses from people who tested
              BGlory first.
            </p>
          </AnimatedSection>
        </div>

        {/* Staggered masonry-style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {testimonials.map((t, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl border border-surface-200 hover:border-surface-300 transition-all duration-300 ${
                    isLarge
                      ? "p-8 sm:p-10 bg-surface-50"
                      : "p-6 sm:p-8 bg-white"
                  }`}
                >
                  {/* Quote */}
                  <p
                    className={`text-dark-700 leading-relaxed mb-8 ${
                      isLarge ? "text-base sm:text-lg" : "text-sm sm:text-base"
                    }`}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-dark-900 flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">
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

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s < t.rating
                              ? "text-accent-400 fill-accent-400"
                              : "text-surface-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
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
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-dark-500 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-surface-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-3">FAQ</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
                Questions riders and drivers ask us
              </h2>
              <p className="mt-4 text-base text-dark-500 leading-relaxed">
                Everything you need to know before you ride or drive with BGlory. Still have questions?{" "}
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
    <section id="notify" className="py-24 sm:py-32 lg:py-40 bg-dark-950 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-400/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Copy */}
          <AnimatedSection>
            <p className="text-sm font-medium text-primary-400 mb-4">
              Get Early Access
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
              Be first in line when we launch.
            </h2>
            <p className="mt-5 text-dark-400 text-base leading-relaxed max-w-lg">
              We are launching soon in Abuja. Drop your email and you will
              be the first to know when you can book your first ride.
              Early signups get priority access and exclusive launch offers.
            </p>

            <WaitlistForm />
          </AnimatedSection>

          {/* Right - Social proof callout */}
          <AnimatedSection delay={0.15}>
            <div className="lg:pl-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <p className="text-5xl sm:text-6xl font-bold text-white mb-2">
                  2,400+
                </p>
                <p className="text-dark-400 text-base mb-6">
                  riders already on the waitlist
                </p>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  {[
                    "Launch-day priority booking",
                    "Exclusive first-rider discounts",
                    "Early access to new features",
                  ].map((perk) => (
                    <div key={perk} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-400/15 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      </div>
                      <span className="text-sm text-dark-300">{perk}</span>
                    </div>
                  ))}
                </div>
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
