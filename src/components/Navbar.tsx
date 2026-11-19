"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

/** A solid bar in both themes; a hairline appears once the page scrolls under it. */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
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

  // While the menu covers the page: no scrolling behind it, Tab stays in the
  // menu (the page behind is inert), and Escape closes it.
  useEffect(() => {
    if (!isOpen) return;
    const behind = [document.querySelector("main"), document.querySelector("footer")];
    document.body.style.overflow = "hidden";
    behind.forEach((el) => el?.setAttribute("inert", ""));
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => el?.removeAttribute("inert"));
      document.removeEventListener("keydown", esc);
    };
  }, [isOpen]);
  const close = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 dark:bg-ink ${
        scrolled && !isOpen ? "shadow-[0_1px_0_rgba(15,20,25,0.08)] dark:shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link href="/" className="relative z-[60] flex shrink-0 items-center" aria-label="Zyon home">
          <Image src="/images/zyon-wordmark.svg" alt="Zyon" width={130} height={49} className="h-7 w-auto sm:h-8 dark:hidden" priority />
          <Image src="/images/zyon-wordmark-light.svg" alt="Zyon" width={130} height={49} className="hidden h-7 w-auto sm:h-8 dark:block" priority />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  active
                    ? "font-semibold text-dark-900 dark:text-white"
                    : "font-medium text-dark-500 hover:bg-mist hover:text-dark-900 dark:text-dark-300 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link href="/drive" className="rounded-lg px-3.5 py-2 text-sm font-semibold text-dark-900 hover:bg-mist dark:text-white dark:hover:bg-white/5">
            Drive with Zyon
          </Link>
          <Link
            href="/#get-the-app"
            className="rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-mid dark:bg-lime dark:text-brand dark:hover:bg-primary-300"
          >
            Get the app
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="relative z-[60] grid h-11 w-11 place-items-center rounded-lg text-dark-900 hover:bg-mist lg:hidden dark:text-white dark:hover:bg-white/5"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 flex flex-col justify-between overflow-y-auto bg-white px-4 pb-8 pt-4 sm:px-6 lg:hidden dark:bg-ink">
          <ul className="divide-y divide-dark-100 dark:divide-dark-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="block py-4 text-xl font-semibold text-dark-900 dark:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/#get-the-app"
              onClick={close}
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white dark:bg-lime dark:text-brand"
            >
              Get the app
            </Link>
            <Link
              href="/drive"
              onClick={close}
              className="inline-flex w-full items-center justify-center rounded-lg border border-dark-200 px-6 py-3.5 text-sm font-semibold text-dark-900 dark:border-dark-700 dark:text-white"
            >
              Drive with Zyon
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
