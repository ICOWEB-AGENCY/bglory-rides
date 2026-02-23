"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isOpen
          ? "bg-white"
          : scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-dark-950/[0.04] border-b border-surface-200/60"
            : "bg-transparent"
      }`}
    >
      <div>
        <nav>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo - swap between light and dark versions */}
              <Link href="/" className="relative z-[60] flex items-center shrink-0">
                {/* Light logo (for dark/transparent background) */}
                <Image
                  src="/images/logo.png"
                  alt="BGlory Rides"
                  width={130}
                  height={36}
                  className={`h-7 sm:h-8 w-auto transition-all duration-500 ${
                    scrolled || isOpen ? "opacity-0 absolute" : "opacity-100"
                  }`}
                  priority
                />
                {/* Dark logo (for white/scrolled background) */}
                <Image
                  src="/images/logo-dark.png"
                  alt="BGlory Rides"
                  width={130}
                  height={36}
                  className={`h-7 sm:h-8 w-auto transition-all duration-500 ${
                    scrolled || isOpen ? "opacity-100" : "opacity-0 absolute"
                  }`}
                  priority
                />
              </Link>

              {/* Desktop Nav - pill container */}
              <div
                className={`hidden lg:flex items-center gap-0.5 transition-all duration-500 ${
                  scrolled
                    ? "bg-surface-100/80 rounded-full px-1.5 py-1"
                    : "bg-white/[0.08] backdrop-blur-sm rounded-full px-1.5 py-1"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                        isActive
                          ? scrolled
                            ? "bg-white text-dark-900 shadow-sm"
                            : "bg-white/15 text-white"
                          : scrolled
                            ? "text-dark-600 hover:text-dark-900 hover:bg-white/60"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-2.5 shrink-0">
                <Link
                  href="/drive"
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                    scrolled
                      ? "text-dark-700 hover:text-dark-900"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Drive with Us
                </Link>
                <Link
                  href="/#notify"
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold bg-primary-400 text-white hover:bg-primary-500 transition-all duration-200 hover:shadow-lg hover:shadow-primary-400/25"
                >
                  Join Waitlist
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-[60] w-11 h-11 flex items-center justify-center rounded-full transition-colors cursor-pointer"
                style={{
                  backgroundColor: isOpen || scrolled
                    ? "rgba(0,0,0,0.05)"
                    : "rgba(255,255,255,0.1)",
                }}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="w-[18px] h-[18px] text-dark-900" />
                ) : (
                  <Menu
                    className={`w-[18px] h-[18px] transition-colors ${
                      scrolled ? "text-dark-900" : "text-white"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col justify-between min-h-screen pt-20 pb-10 px-5 sm:px-6">
              {/* Nav links */}
              <div className="space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-3.5 border-b border-surface-100 text-base font-medium transition-colors ${
                          isActive
                            ? "text-primary-500"
                            : "text-dark-800 hover:text-primary-500"
                        }`}
                      >
                        {link.label}
                        <ArrowRight
                          className={`w-4 h-4 transition-colors ${
                            isActive ? "text-primary-400" : "text-dark-300"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="flex flex-col gap-3"
              >
                <Link
                  href="/#notify"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-primary-400 text-white hover:bg-primary-500 transition-colors"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/drive"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border border-dark-200 text-dark-800 hover:bg-surface-50 transition-colors"
                >
                  Drive with Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
