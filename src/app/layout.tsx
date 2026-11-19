import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import MotionRoot from "@/components/MotionRoot";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display face: a tight grotesk for the big headlines, set with negative tracking.
const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // The browser bar matches the page's top bar in each theme.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f0d" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Zyon | Ride-Hailing Built for Nigeria",
    template: "%s | Zyon",
  },
  description:
    "Ride-hailing built for Nigeria. See the price before you book, ride with drivers our team has checked, and share your trip live. Get an email when the apps launch.",
  keywords: [
    "ride-hailing Nigeria",
    "book a ride Nigeria",
    "Lagos ride-hailing",
    "taxi app Nigeria",
    "Zyon",
    "ride-hailing app Africa",
    "become a driver Nigeria",
    "earn money driving Nigeria",
    "safe rides Nigeria",
  ],
  icons: {
    icon: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Zyon | Ride-Hailing Built for Nigeria",
    description:
      "See the price before you book, ride with drivers our team has checked, and share your trip live. Ride-hailing built for Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: "Zyon",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zyon - Ride-Hailing Built for Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyon | Ride-Hailing Built for Nigeria",
    description:
      "The price before you book. Drivers checked by our team. Your trip shared live. Ride-hailing built for Nigeria.",
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
        className={`${inter.variable} ${interTight.variable} antialiased bg-white dark:bg-ink text-dark-900 dark:text-dark-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <MotionRoot>{children}</MotionRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
