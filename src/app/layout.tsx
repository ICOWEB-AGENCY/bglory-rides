import type { Metadata } from "next";
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
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
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
