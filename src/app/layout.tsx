import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1419",
};

export const metadata: Metadata = {
  title: {
    default: "BGlory Rides | Affordable Ride-Hailing in Port Harcourt, Nigeria",
    template: "%s | BGlory Rides",
  },
  description:
    "Request a ride in Port Harcourt and get picked up in under 4 minutes. Verified drivers, upfront pricing, no surge fees. Join the waitlist for Nigeria's smarter ride-hailing app.",
  keywords: [
    "ride-hailing Port Harcourt",
    "ride-hailing Nigeria",
    "affordable rides Port Harcourt",
    "book a ride Port Harcourt",
    "taxi app Nigeria",
    "BGlory Rides",
    "ride-hailing app Africa",
    "become a driver Port Harcourt",
    "earn money driving Nigeria",
    "safe rides Port Harcourt",
  ],
  icons: {
    icon: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  metadataBase: new URL("https://bglory-rides.vercel.app"),
  openGraph: {
    title: "BGlory Rides | Affordable Ride-Hailing in Port Harcourt, Nigeria",
    description:
      "Get picked up in under 4 minutes. Verified drivers, upfront pricing, zero surge fees. Join the waitlist for Port Harcourt's smarter ride-hailing app.",
    type: "website",
    locale: "en_NG",
    siteName: "BGlory Rides",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "BGlory Rides - Affordable Ride-Hailing in Port Harcourt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BGlory Rides | Affordable Ride-Hailing in Port Harcourt",
    description:
      "Verified drivers. Upfront pricing. 4-minute pickups. Join the waitlist for Port Harcourt's smarter ride-hailing app.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
