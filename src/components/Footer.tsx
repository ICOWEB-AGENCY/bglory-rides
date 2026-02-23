import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
  ],
  product: [
    { label: "Ride Options", href: "/services" },
    { label: "Safety", href: "/safety" },
    { label: "Drive with Us", href: "/drive" },
    { label: "Business", href: "/business" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-14 sm:py-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.webp"
                alt="BGlory Rides"
                width={140}
                height={40}
                className="h-9 w-auto brightness-110"
              />
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed max-w-sm mb-6">
              Affordable rides across Abuja with verified drivers and
              upfront pricing. No surge fees, no surprises. Request a ride
              and get where you need to go.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@bgloryrides.com"
                className="flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@bgloryrides.com
              </a>
              <a
                href="tel:+2348063376181"
                className="flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                0806 337 6181
              </a>
              <p className="flex items-center gap-2 text-sm text-dark-400">
                <MapPin className="w-4 h-4 shrink-0" />
                Abuja, Nigeria
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            &copy; {new Date().getFullYear()} BGlory Rides. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-dark-500 hover:text-primary-400 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
