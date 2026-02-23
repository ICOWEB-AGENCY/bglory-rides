import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find answers to common questions about BGlory Rides. Get help with your account, rides, payments, safety, and more.",
};

const helpTopics = [
  {
    title: "Getting Started",
    description:
      "New to BGlory? Here is everything you need to know to create your account, book your first ride, and set up your preferred payment method.",
    questions: [
      "How do I create a BGlory account?",
      "How do I book my first ride?",
      "What payment methods are accepted?",
      "How do I add a payment card to my account?",
    ],
  },
  {
    title: "Rides & Booking",
    description:
      "Learn how to request rides, cancel bookings, schedule trips in advance, and get the most out of every journey.",
    questions: [
      "How do I request a ride?",
      "Can I cancel a ride after booking?",
      "How do I schedule a ride in advance?",
      "What happens if my driver cancels?",
    ],
  },
  {
    title: "Payments & Pricing",
    description:
      "Understand how fares are calculated, manage your payment methods, and access your ride receipts and transaction history.",
    questions: [
      "How is my fare calculated?",
      "Can I pay with cash?",
      "How do I get a receipt for my ride?",
      "Why was I charged a cancellation fee?",
    ],
  },
  {
    title: "Safety & Security",
    description:
      "Your safety matters. Learn about trip sharing, the emergency button, how to report incidents, and the steps we take to protect you.",
    questions: [
      "How do I share my trip with someone?",
      "How does the emergency button work?",
      "How do I report a safety concern?",
    ],
  },
  {
    title: "Driver Questions",
    description:
      "Interested in driving with BGlory? Find out about requirements, the sign-up process, how earnings work, and how to get started.",
    questions: [
      "How do I become a BGlory driver?",
      "What are the vehicle requirements?",
      "How do driver earnings and payouts work?",
      "What documents do I need to sign up?",
    ],
  },
  {
    title: "Account & Settings",
    description:
      "Manage your profile, update notification preferences, control your privacy settings, and keep your account secure.",
    questions: [
      "How do I update my profile information?",
      "How do I change my notification preferences?",
      "How do I delete my account?",
      "How do I reset my password?",
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        label="Help Center"
        title="How can we help you?"
        description="Find answers to common questions, learn how to get the most out of BGlory Rides, and get the support you need."
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
                Find what you are{" "}
                <span className="text-primary-400">looking for.</span>
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
                  Still need help?
                </h2>
                <p className="mt-5 text-dark-400 text-base leading-relaxed">
                  Our support team is here for you. Reach out and we will get
                  back to you as soon as possible.
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
