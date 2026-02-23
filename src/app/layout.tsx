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
    default: "BGlory Rides - Your Ride, Your Way",
    template: "%s | BGlory Rides",
  },
  description:
    "BGlory Rides is the smart, safe, and affordable ride-hailing service. Request a ride in seconds, travel in comfort, and arrive on time. Available 24/7.",
  keywords: [
    "ride hailing",
    "taxi",
    "transportation",
    "BGlory Rides",
    "car service",
    "ride sharing",
  ],
  icons: {
    icon: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  metadataBase: new URL("https://bglory-rides.vercel.app"),
  openGraph: {
    title: "BGlory Rides - Your Ride, Your Way",
    description:
      "BGlory Rides is the smart, safe, and affordable ride-hailing service. Request a ride in seconds, travel in comfort, and arrive on time.",
    type: "website",
    locale: "en_US",
    siteName: "BGlory Rides",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "BGlory Rides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BGlory Rides - Your Ride, Your Way",
    description:
      "Smart, safe, and affordable ride-hailing. Request a ride in seconds.",
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
