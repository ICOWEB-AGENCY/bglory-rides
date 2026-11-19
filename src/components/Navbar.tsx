"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

/** A dark pill that floats over every page, as in the references: logo, links, one call to action. */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu when the page changes. Adjusted during render (React's
  // pattern for state that follows a prop), not in an effect.
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setIsOpen(false);
  }

  // While the menu covers the page: no scrolling behind it, Tab stays in the
  // menu (the page behind is inert), and Escape closes it.
  const bar = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    // Everything outside the header, at every level up to <body>: the page
    // hero, main and footer, wherever a page renders them.
    const behind: Element[] = [];
    for (let el: Element | null = bar.current; el && el !== document.body; el = el.parentElement) {
      for (const sib of el.parentElement?.children ?? []) if (sib !== el) behind.push(sib);
    }
    document.body.style.overflow = "hidden";
    const opener = toggle.current;
    requestAnimationFrame(() => firstLink.current?.focus());
    behind.forEach((el) => el.setAttribute("inert", ""));
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", esc);
    // The menu is phone and tablet only: widening to desktop closes it.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const wide = () => desktop.matches && setIsOpen(false);
    desktop.addEventListener("change", wide);
    return () => {
      desktop.removeEventListener("change", wide);
      document.body.style.overflow = "";
      behind.forEach((el) => el.removeAttribute("inert"));
      document.removeEventListener("keydown", esc);
      opener?.focus();
    };
  }, [isOpen]);
  const close = () => setIsOpen(false);

  return (
    <header ref={bar} className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
      <nav
        aria-label="Main"
        className="relative z-[60] mx-auto flex h-14 max-w-[920px] items-center justify-between gap-4 rounded-full border border-white/10 bg-[#121614]/95 pl-5 pr-1.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.7)]"
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label="Zyon home">
          <Image src="/images/zyon-wordmark-light.svg" alt="Zyon" width={130} height={49} className="h-6 w-auto" priority />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "bg-white/10 font-medium text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <Link
            href="/#get-the-app"
            className="hidden rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-300 sm:inline-flex"
          >
            Get the app
          </Link>
          <button
            ref={toggle}
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-ink px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i, duration: 0.3 }}>
                  <Link
                    ref={i === 0 ? firstLink : undefined}
                    href={link.href}
                    onClick={close}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="display block py-2 text-[2.6rem] text-white aria-[current=page]:text-white/45"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3">
              <Link href="/#get-the-app" onClick={close} className="inline-flex w-full items-center justify-center rounded-full bg-lime px-6 py-4 text-sm font-semibold text-ink">
                Get the app
              </Link>
              <Link href="/drive" onClick={close} className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white">
                Drive with Zyon
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
