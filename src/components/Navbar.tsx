"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the page changes. Adjusted during render (React's
  // pattern for state that follows a prop), not in an effect.
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setIsOpen(false);
  }

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
          ? "bg-white dark:bg-dark-900"
          : scrolled
            ? "bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl shadow-lg shadow-dark-950/[0.04] dark:shadow-black/20 border-b border-surface-200/60 dark:border-white/[0.06]"
            : "bg-transparent"
      }`}
    >
      <div>
        <nav>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <Link href="/" className="relative z-[60] flex items-center shrink-0">
                <Image
                  src="/images/zyon-wordmark-light.svg"
                  alt="Zyon"
                  width={130}
                  height={49}
                  className={`h-7 sm:h-8 w-auto transition-all duration-500 ${
                    scrolled || isOpen ? "opacity-0 absolute dark:opacity-100 dark:relative" : "opacity-100"
                  }`}
                  priority
                />
                <Image
                  src="/images/zyon-wordmark.svg"
                  alt="Zyon"
                  width={130}
                  height={49}
                  className={`h-7 sm:h-8 w-auto transition-all duration-500 ${
                    scrolled || isOpen ? "opacity-100 dark:opacity-0 dark:absolute" : "opacity-0 absolute"
                  }`}
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <div
                className={`hidden lg:flex items-center gap-0.5 transition-all duration-500 ${
                  scrolled
                    ? "bg-surface-100/80 dark:bg-white/[0.06] rounded-full px-1.5 py-1"
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
                            ? "bg-white dark:bg-white/10 text-dark-900 dark:text-white shadow-sm dark:shadow-none"
                            : "bg-white/15 text-white"
                          : scrolled
                            ? "text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-2 shrink-0">
                <ThemeToggle variant="navbar" scrolled={scrolled} />
                <Link
                  href="/drive"
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                    scrolled
                      ? "text-dark-700 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white"
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
              <div className="lg:hidden flex items-center gap-1">
                <ThemeToggle variant="navbar" scrolled={scrolled} />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-[60] w-11 h-11 flex items-center justify-center rounded-full transition-colors cursor-pointer"
                  style={{
                    backgroundColor: isOpen || scrolled
                      ? "rgba(128,128,128,0.1)"
                      : "rgba(255,255,255,0.1)",
                  }}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? (
                    <X className="w-[18px] h-[18px] text-dark-900 dark:text-white" />
                  ) : (
                    <Menu
                      className={`w-[18px] h-[18px] transition-colors ${
                        scrolled ? "text-dark-900 dark:text-white" : "text-white"
                      }`}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-dark-900 lg:hidden overflow-y-auto transition-opacity duration-250 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between min-h-screen pt-20 pb-10 px-5 sm:px-6">
          <div className="space-y-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <div
                  key={link.href}
                  className="transition-all duration-300"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                    transitionDelay: isOpen ? `${i * 40}ms` : "0ms",
                  }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between py-3.5 border-b border-surface-100 dark:border-white/[0.06] text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary-500"
                        : "text-dark-800 dark:text-dark-200 hover:text-primary-500"
                    }`}
                  >
                    {link.label}
                    <ArrowRight
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "text-primary-400" : "text-dark-300 dark:text-dark-600"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          <div
            className="flex flex-col gap-3 transition-all duration-300"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: isOpen ? "250ms" : "0ms",
            }}
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
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-dark-200 hover:bg-surface-50 dark:hover:bg-white/5 transition-colors"
            >
              Drive with Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
