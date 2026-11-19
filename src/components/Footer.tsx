import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const columns = [
  {
    title: "Ride",
    links: [
      { label: "Ride options", href: "/services" },
      { label: "Safety", href: "/safety" },
      { label: "Zyon for Business", href: "/business" },
    ],
  },
  {
    title: "Drive",
    links: [
      { label: "Drive with Zyon", href: "/drive" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-white dark:border-t dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 text-center sm:text-left lg:grid-cols-[1.3fr_2fr]">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" aria-label="Zyon home">
              <Image src="/images/zyon-wordmark-light.svg" alt="Zyon" width={130} height={49} className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">Rides across Nigeria, priced before you book.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-sm font-semibold text-white">{col.title}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 border-t border-white/10 py-7 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <a href="/images/photos/CREDITS.md" className="hover:text-white">
              Photo credits
            </a>
            <ThemeToggle />
          </div>
          <p className="text-center text-xs text-white/45">
            &copy; {new Date().getFullYear()} Zyon. All rights reserved. Built by{" "}
            <a href="https://www.icowebagency.com" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-white hover:underline">
              ICOWEB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
