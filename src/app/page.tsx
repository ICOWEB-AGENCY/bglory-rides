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

/* ──────────────────────── HERO BOOKING CARD ──────────────────────── */
function HeroBookingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -4 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      {/* Glow behind card */}
      <div className="absolute -inset-8 bg-primary-400/[0.06] rounded-3xl blur-[60px] pointer-events-none" />

      <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden">
        {/* Card header */}
        <div className="px-6 pt-5 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-widest text-dark-500">
              Your ride
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-[11px] text-primary-400 font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* Route */}
        <div className="px-6 py-5">
          <div className="flex gap-3">
            {/* Route line */}
            <div className="flex flex-col items-center pt-1.5">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-primary-400 bg-primary-400/20" />
              <div className="w-px h-10 border-l border-dashed border-white/15 my-1" />
              <div className="w-2.5 h-2.5 rounded-full border-2 border-accent-400 bg-accent-400/20" />
            </div>

            {/* Locations */}
            <div className="flex-1 space-y-5">
              <div>
                <p className="text-[11px] text-dark-500 mb-0.5">Pickup</p>
                <p className="text-sm font-medium text-white">Wuse 2, Abuja</p>
              </div>
              <div>
                <p className="text-[11px] text-dark-500 mb-0.5">Destination</p>
                <p className="text-sm font-medium text-white">Nnamdi Azikiwe Int&apos;l Airport</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fare + ride type */}
        <div className="px-6 py-4 border-t border-white/[0.06] flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white tracking-tight">₦4,200</p>
            <p className="text-[11px] text-dark-500 mt-0.5">Fixed fare, no surprises</p>
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-primary-400 bg-primary-400/10 border border-primary-400/20 px-3 py-1.5 rounded-full">
            Standard
          </span>
        </div>

        {/* Driver match */}
        <div className="px-6 py-4 border-t border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">A</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-primary-400 border-2 border-dark-950 flex items-center justify-center">
                <span className="text-[6px] font-bold text-white">✓</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-white">Adamu K.</p>
                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 text-accent-400 fill-accent-400" />
                  <span className="text-xs text-dark-400">4.9</span>
                </div>
              </div>
              <p className="text-[11px] text-dark-500">Toyota Corolla · ABJ-234-KL</p>
            </div>
            <div className="text-right">
              <motion.p
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-sm font-bold text-primary-400"
              >
                3 min
              </motion.p>
              <p className="text-[10px] text-dark-500">away</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────── HERO ──────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-950 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero-driving.mp4" type="video/mp4" />
      </video>

      {/* Layered overlay for readability */}
      {/* Base dark wash */}
      <div className="absolute inset-0 bg-dark-950/70" />
      {/* Gradient: heavier on left (text side), lighter on right (card side) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,20,25,0.85) 0%, rgba(15,20,25,0.6) 50%, rgba(15,20,25,0.45) 100%)",
        }}
      />
      {/* Bottom fade to solid for clean transition to Stats section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(15,20,25,1) 0%, rgba(15,20,25,0) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,1fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-sm font-medium text-primary-400 mb-5 tracking-wide">
              Launching in Abuja, 2026
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white tracking-tight leading-[1.08]">
              Your ride is
              <br />
              <span className="text-primary-400">3 minutes away.</span>
            </h1>

            <div className="w-12 h-px bg-primary-400/40 mt-6 mb-6" />

            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-lg">
              See your fare before you book. No surge pricing, no hidden fees.
              Verified drivers, real-time tracking, and rides that actually
              show up. Built for Abuja.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/#notify" variant="primary" size="lg">
                Join the Waitlist
              </Button>
              <Button href="/drive" variant="outline" size="lg">
                Start Earning as a Driver
              </Button>
            </div>

            {/* Inline stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/[0.08] pt-8">
              {[
                { value: "4 min", label: "Avg. pickup" },
                { value: "₦0", label: "Hidden fees" },
                { value: "100%", label: "Verified drivers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-white/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Live booking card */}
          <div className="hidden lg:block">
            <HeroBookingCard />
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
