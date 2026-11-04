import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

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
    default: "Zyon | Affordable Ride-Hailing in Abuja, Nigeria",
    template: "%s | Zyon",
  },
  description:
    "Request a ride in Abuja and get picked up in under 4 minutes. Verified drivers, upfront pricing, no surge fees. Join the waitlist for Nigeria's smarter ride-hailing app.",
  keywords: [
    "ride-hailing Abuja",
    "ride-hailing Nigeria",
    "affordable rides Abuja",
    "book a ride Abuja",
    "taxi app Nigeria",
    "Zyon",
    "ride-hailing app Africa",
    "become a driver Abuja",
    "earn money driving Nigeria",
    "safe rides Abuja",
  ],
  icons: {
    icon: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Zyon | Affordable Ride-Hailing in Abuja, Nigeria",
    description:
      "Get picked up in under 4 minutes. Verified drivers, upfront pricing, zero surge fees. Join the waitlist for Abuja's smarter ride-hailing app.",
    type: "website",
    locale: "en_NG",
    siteName: "Zyon",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zyon - Affordable Ride-Hailing in Abuja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyon | Affordable Ride-Hailing in Abuja",
    description:
      "Verified drivers. Upfront pricing. 4-minute pickups. Join the waitlist for Abuja's smarter ride-hailing app.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Inline script to prevent flash of wrong theme
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('bglory-theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} antialiased bg-white dark:bg-dark-950 text-dark-900 dark:text-dark-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
