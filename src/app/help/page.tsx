import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Help Center | BGlory Rides Support",
  description:
    "Get quick answers about BGlory Rides. Help with booking rides, payments, driver sign-up, safety features, and account settings. Our ride-hailing support team responds within hours.",
};

const helpTopics = [
  {
    title: "Getting Started",
    description:
      "Ready to take your first ride? Follow these simple steps to create your BGlory account, set up your payment method, and book a ride in minutes.",
    questions: [
      "How to create a BGlory Rides account",
      "How to book your first ride on BGlory",
      "What payment methods does BGlory accept?",
      "How to add a debit card to your BGlory account",
    ],
  },
  {
    title: "Rides & Booking",
    description:
      "Booking a ride should be the easy part of your day. Here is how to request, schedule, cancel, and manage every trip.",
    questions: [
      "How to request a ride on BGlory",
      "Can I cancel a BGlory ride after booking?",
      "How to schedule a ride in advance on BGlory",
      "What happens if my BGlory driver cancels on me?",
    ],
  },
  {
    title: "Payments & Pricing",
    description:
      "No surprises when it comes to your fare. Learn how pricing works, manage your payment options, and download receipts for any trip.",
    questions: [
      "How is my BGlory ride fare calculated?",
      "Can I pay for a BGlory ride with cash?",
      "How to get a receipt for my BGlory ride",
      "Why was I charged a cancellation fee on BGlory?",
    ],
  },
  {
    title: "Safety & Security",
    description:
      "Your safety is built into every ride. Learn how to share your trip, use the emergency button, and report anything that does not feel right.",
    questions: [
      "How to share your BGlory trip location with family",
      "How does the BGlory emergency button work?",
      "How to report a safety issue on BGlory Rides",
    ],
  },
  {
    title: "Driver Questions",
    description:
      "Thinking about earning with BGlory? Here is everything you need to know about signing up, vehicle requirements, and how you get paid.",
    questions: [
      "How to become a BGlory driver in Abuja",
      "What are the vehicle requirements for BGlory drivers?",
      "How do BGlory driver earnings and payouts work?",
      "What documents do I need to sign up as a BGlory driver?",
    ],
  },
  {
    title: "Account & Settings",
    description:
      "Keep your account up to date and secure. Update your profile, adjust your notifications, and manage your privacy in just a few taps.",
    questions: [
      "How to update your BGlory profile information",
      "How to change notification settings on BGlory",
      "How to delete your BGlory Rides account",
      "How to reset your BGlory password",
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        label="Help Center"
        title="How can we help you?"
        description="You will find answers to the most common questions below. If you need anything else, our support team is just a message away."
        breadcrumbs={[{ label: "Help Center" }]}
      />

      <main>
        {/* Browse Topics */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Browse Topics
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15] max-w-2xl">
                Get answers{" "}
                <span className="text-primary-400">fast.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-surface-200">
              {helpTopics.map((topic, i) => (
                <AnimatedSection key={topic.title} delay={i * 0.06}>
                  <div className="py-8 sm:py-10 border-b border-surface-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-dark-300 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark-900 mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-dark-500 leading-relaxed mb-5">
                      {topic.description}
                    </p>
                    <ul className="space-y-2.5">
                      {topic.questions.map((question) => (
                        <li
                          key={question}
                          className="flex items-start gap-2.5 text-sm text-dark-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 lg:py-36 bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary-400 mb-4">
                  Contact Support
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                  Did not find your answer?
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Send us a message and our support team will get back to you
                  within a few hours. We are here to help you ride with confidence.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Contact Us
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
