import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how BGlory Rides collects, uses, and protects your personal information. Your privacy matters to us.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    paragraphs: [
      "When you create an account or use BGlory Rides, we collect information that helps us provide and improve our services. This includes personal details you provide directly, as well as data generated through your use of the platform.",
    ],
    items: [
      "Personal information such as your name, email address, phone number, and profile photo",
      "Payment information including card details, billing address, and transaction history (processed securely through our payment partners)",
      "Location data, including pickup and drop-off points, routes taken, and real-time GPS coordinates during active rides",
      "Device information such as your device model, operating system, unique device identifiers, and mobile network data",
      "Ride history, including dates, times, destinations, fare amounts, and driver ratings",
      "Communications between you and our support team, including in-app messages and emails",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information we collect to operate, maintain, and improve BGlory Rides. Every piece of data serves a clear purpose in delivering a safe and reliable experience.",
    ],
    items: [
      "Providing and managing ride services, including matching you with nearby drivers",
      "Processing payments and issuing receipts for completed rides",
      "Improving our algorithms for better route optimization, estimated arrival times, and fare calculations",
      "Ensuring safety through identity verification, fraud detection, and incident investigation",
      "Sending you ride confirmations, receipts, service updates, and account notifications",
      "Conducting internal analytics to understand usage patterns and improve the platform",
      "Complying with legal obligations and responding to lawful requests from authorities",
    ],
  },
  {
    number: "03",
    title: "Location Data",
    paragraphs: [
      "Location data is essential to how BGlory Rides works. We are transparent about when and how we access your location, and you remain in control.",
    ],
    items: [
      "We collect real-time location data while you have an active ride in progress. This is required to match you with drivers, calculate fares, and provide navigation",
      "Background location access is only used when you have explicitly granted permission. You can revoke this permission at any time through your device settings",
      "Location data is used for safety features, including trip sharing with your emergency contacts and our 24/7 safety monitoring",
      "We use aggregated, anonymized location data to identify high-demand areas and optimize driver availability across the city",
      "Your precise location history is never sold to third parties or used for advertising purposes",
    ],
  },
  {
    number: "04",
    title: "Information Sharing",
    paragraphs: [
      "We share your information only when necessary to provide the service, and only with the parties described below. We do not sell your personal data.",
    ],
    items: [
      "With drivers: your first name, pickup location, and drop-off location are shared when a ride is confirmed. Your phone number is masked through our in-app communication system",
      "With payment processors: transaction details are shared with our payment partners to process fares, refunds, and payouts securely",
      "With law enforcement: we may disclose information when required by law, court order, or governmental regulation, or when necessary to protect safety",
      "With service providers: we work with trusted partners for cloud hosting, analytics, and customer support. These partners are bound by strict data protection agreements",
      "Aggregated analytics: we may share anonymized, aggregated statistics that cannot be used to identify any individual user",
    ],
  },
  {
    number: "05",
    title: "Data Security",
    paragraphs: [
      "Protecting your data is a responsibility we take seriously. We implement industry-standard security measures and continuously work to strengthen our defenses.",
    ],
    items: [
      "All data is encrypted in transit using TLS 1.2 or higher, and at rest using AES-256 encryption",
      "Access to personal data is restricted to authorized personnel on a need-to-know basis, with role-based access controls",
      "We conduct regular security audits, penetration testing, and vulnerability assessments",
      "Payment information is handled in compliance with PCI DSS standards and is never stored on our servers in plain text",
      "We maintain an incident response plan and will notify affected users promptly in the event of a data breach",
    ],
  },
  {
    number: "06",
    title: "Your Rights",
    paragraphs: [
      "You have meaningful control over your personal data. We provide tools and processes to help you exercise your rights.",
    ],
    items: [
      "Access your data: you can request a copy of the personal information we hold about you at any time through the app or by contacting us",
      "Request deletion: you can ask us to delete your account and associated personal data. We will process deletion requests within 30 days",
      "Opt out of marketing: you can unsubscribe from promotional emails and push notifications through your account settings",
      "Data portability: you can request your data in a structured, commonly used, machine-readable format",
      "Correction: you can update or correct inaccurate personal information directly in your account settings or by contacting our support team",
      "Withdraw consent: where processing is based on your consent, you can withdraw it at any time without affecting the lawfulness of prior processing",
    ],
  },
  {
    number: "07",
    title: "Data Retention",
    paragraphs: [
      "We retain your data only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
    ],
    items: [
      "Active account data is kept for as long as your account remains open and active",
      "Ride history, receipts, and transaction records are retained for 3 years after the ride date for accounting and dispute resolution purposes",
      "When you delete your account, your personal data is purged from our active systems within 30 days. Backup copies are removed within 90 days",
      "Anonymized, aggregated data that cannot identify you may be retained indefinitely for analytical purposes",
      "Data required for legal compliance, fraud prevention, or ongoing disputes may be retained beyond these periods as permitted by law",
    ],
  },
  {
    number: "08",
    title: "Cookies and Tracking",
    paragraphs: [
      "Our mobile app and website use limited tracking technologies to ensure the platform functions correctly and to improve your experience.",
    ],
    items: [
      "App analytics: we use analytics tools to understand how you interact with the app, identify bugs, and improve performance",
      "Crash reporting: we collect crash logs and diagnostic data to identify and fix technical issues quickly",
      "Session management: cookies and similar technologies are used to keep you logged in and remember your preferences",
      "We do not use third-party advertising trackers. Your activity on BGlory Rides is not shared with ad networks",
      "You can manage cookie preferences for our website through your browser settings",
    ],
  },
  {
    number: "09",
    title: "Children's Privacy",
    paragraphs: [
      "BGlory Rides is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children.",
      "If we become aware that we have collected data from a user under 18, we will take steps to delete that information promptly. If you believe a child has provided us with their personal data, please contact us at privacy@bgloryrides.com.",
    ],
    items: [],
  },
  {
    number: "10",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this privacy policy from time to time to reflect changes in our practices, technology, or legal requirements. When we do, the updated policy will be posted on this page with a revised date.",
      "For significant changes that materially affect how we handle your personal data, we will notify you through the app, by email, or both. We encourage you to review this policy periodically to stay informed about how we protect your information.",
    ],
    items: [],
  },
  {
    number: "11",
    title: "Contact Us",
    paragraphs: [
      "If you have questions, concerns, or requests regarding this privacy policy or how we handle your data, please reach out to us. We are committed to addressing your concerns promptly.",
    ],
    items: [
      "Email: privacy@bgloryrides.com",
      "Response time: we aim to respond to all privacy-related inquiries within 5 business days",
      "For data access or deletion requests, please include your registered email address and a description of your request",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="Last updated: February 2026"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <main>
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm text-dark-600 leading-relaxed">
                At BGlory Rides, we respect your privacy and are committed to
                protecting the personal information you share with us. This
                policy explains what data we collect, how we use it, and the
                choices you have. By using BGlory Rides, you agree to the
                practices described below.
              </p>
            </AnimatedSection>

            <div className="mt-12">
              {sections.map((section, i) => (
                <AnimatedSection key={section.number} delay={i * 0.03}>
                  <div
                    className={`py-8 ${i < sections.length - 1 ? "border-b border-surface-200" : ""}`}
                  >
                    <span className="text-xs font-mono text-dark-300 tracking-widest">
                      {section.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-dark-900 mt-3 mb-3">
                      {section.title}
                    </h2>
                    {section.paragraphs.map((paragraph, pi) => (
                      <p
                        key={pi}
                        className="text-sm text-dark-600 leading-relaxed mb-3 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.items.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {section.items.map((item, ii) => (
                          <li
                            key={ii}
                            className="flex items-start gap-2.5 text-sm text-dark-600 leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary-400 mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
