import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Payment received",
  description: "Your payment went through. Go back to the Zyon app to carry on.",
  robots: { index: false, follow: false },
};

// Paystack sends a rider here after paying outside the app. In the app the
// payment screen catches this address and closes itself, so most riders
// never see the page.
export default function PaymentCompletePage() {
  return (
    <>
      <PageHero
        label="Payment"
        title="Payment received."
        description="You can close this page and go back to the Zyon app. Your wallet or trip updates there in a moment."
        breadcrumbs={[{ label: "Payment" }]}
      />
      <main className="py-16 sm:py-24 bg-white dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
          <p className="max-w-xl text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed">
            If the app does not show the payment within a few minutes,{" "}
            <Link href="/contact" className="font-semibold text-dark-900 dark:text-white underline underline-offset-4">
              write to us
            </Link>{" "}
            with the time you paid and we will check it.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
