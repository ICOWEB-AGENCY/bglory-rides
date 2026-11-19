import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions that govern your use of Zyon, our mobile application, and related services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By downloading, accessing, or using the Zyon application and any related services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use the platform.",
      "We reserve the right to update or modify these terms at any time. Continued use of the service after changes are posted constitutes your acceptance of the revised terms. We will notify users of material changes through the app or via email.",
    ],
  },
  {
    title: "The Service",
    content: [
      "Zyon is a technology platform that connects riders with independent, third-party transportation providers (drivers). We are not a transportation company, taxi service, or common carrier. We do not provide transportation services and are not responsible for the actions of any driver or rider.",
      "The availability of the platform does not guarantee the availability of a ride at any given time or location. Service coverage, features, and pricing may vary by region and are subject to change.",
    ],
  },
  {
    title: "User Accounts",
    content: [
      "You must be at least 18 years of age to create an account and use Zyon. By registering, you confirm that you meet this requirement.",
      "You agree to provide accurate, current, and complete information during registration and to keep your account information updated. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
      "Each person may maintain only one active account. Creating multiple accounts may result in suspension or termination of all associated accounts.",
    ],
  },
  {
    title: "Rides and Bookings",
    content: [
      "When you request a ride, an estimated fare will be displayed before you confirm the booking. Final fares may differ from estimates based on actual route, traffic conditions, tolls, or waiting time.",
      "Cancellation fees may apply if you cancel a ride after a driver has been dispatched or if you fail to appear at the pickup location within the designated waiting period.",
      "Zyon reserves the right to cancel any ride at any time for safety reasons, suspected fraudulent activity, or violations of these terms. In such cases, you will not be charged for the cancelled ride.",
    ],
  },
  {
    title: "Payments",
    content: [
      "By using Zyon, you agree to pay all fares and applicable fees charged to your selected payment method. You are responsible for ensuring your payment method is valid and has sufficient funds.",
      "A receipt will be sent to your registered email address or made available in the app after each completed ride. Receipts include a breakdown of the fare, fees, and any applicable taxes.",
      "If you believe a charge is incorrect, you must raise a dispute through the app or by contacting our support team within 30 days of the transaction. Disputes raised after this period may not be eligible for review.",
    ],
  },
  {
    title: "User Conduct",
    items: [
      "Do not harass, threaten, or behave aggressively toward drivers, other riders, or Zyon staff",
      "Do not use the platform for any illegal, fraudulent, or unauthorized purpose",
      "Do not cause damage to any vehicle used during a ride",
      "Wear a seatbelt at all times during the ride, as required by law",
      "Treat drivers with respect and courtesy",
      "Do not transport illegal substances, weapons, or hazardous materials",
      "Do not request rides on behalf of minors who will be unaccompanied",
    ],
    footer:
      "Violations of this conduct policy may result in warnings, temporary suspension, or permanent removal from the platform.",
  },
  {
    title: "Driver Terms",
    content: [
      "Drivers who use the Zyon platform are independent contractors, not employees, agents, or representatives of Zyon. Drivers are solely responsible for their own conduct, tax obligations, and compliance with all applicable laws.",
      "All drivers must maintain a valid driver's license, vehicle registration, and adequate insurance coverage as required by Nigerian law. Vehicles must meet Zyon's published safety and quality standards.",
      "Zyon reserves the right to deactivate any driver's account if they fail to meet these requirements, receive consistently poor ratings, or violate any provision of these terms.",
    ],
  },
  {
    title: "Safety",
    content: [
      "Zyon is committed to the safety of all users. We may suspend or permanently deactivate accounts involved in safety violations, including but not limited to dangerous driving, physical altercations, or threats of violence.",
      "The app includes emergency features designed to connect you with local emergency services and share your location with designated contacts. These features should be used responsibly and only in genuine emergencies. Misuse of emergency features may result in account suspension.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      'The Zyon name, logo, visual identity, app design, and all related trademarks, service marks, and copyrighted materials are the exclusive property of Zyon and its licensors. All rights are reserved.',
      "You may not copy, reproduce, modify, distribute, or create derivative works based on any part of the Zyon application or its content without prior written consent from Zyon.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      'The Zyon platform and all related services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.',
      "To the maximum extent permitted by applicable law, Zyon shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the platform.",
      "In no event shall our total liability to you for any claim arising from the use of the service exceed the amount you paid for the specific ride that gave rise to the claim.",
    ],
  },
  {
    title: "Termination",
    content: [
      "Zyon may suspend or terminate your account at any time, with or without notice, for conduct that we believe violates these terms, is harmful to other users, or is otherwise objectionable.",
      "You may delete your account at any time through the app settings or by contacting our support team. Upon deletion, your personal data will be handled in accordance with our Privacy Policy. Outstanding payments or obligations remain due even after account termination.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles.",
      "Any disputes arising from or relating to these terms or your use of Zyon shall be resolved through the courts of competent jurisdiction in Nigeria.",
    ],
  },
  {
    title: "Contact",
    content: [
      "If you have questions, concerns, or feedback regarding these Terms of Service, please reach out to our legal team.",
    ],
    contact: "legal@zyonrides.com",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms" dim="of service." description="Last updated: February 2026" breadcrumbs={[{ label: "Terms of Service" }]} />

      <main className="bg-white dark:bg-ink">
        <div className="shell py-16 sm:py-24">
          <div className="mx-auto max-w-2xl border-t border-ink/15 dark:border-white/15">
            {sections.map((section, i) => (
              <section key={section.title} className="border-b border-ink/15 py-10 dark:border-white/15">
                <h2 className="display text-[clamp(1.5rem,2.4vw,2rem)]">
                  {i + 1}. {section.title}
                </h2>
                {section.content && (
                  <div className="mt-4 space-y-3 leading-relaxed text-dark-600 dark:text-white/70">
                    {section.content.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.items && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-dark-600 marker:text-dark-400 dark:text-white/70">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.footer && <p className="mt-4 leading-relaxed text-dark-600 dark:text-white/70">{section.footer}</p>}
                {section.contact && (
                  <p className="mt-3 leading-relaxed text-dark-600 dark:text-white/70">
                    Email:{" "}
                    <a href={`mailto:${section.contact}`} className="font-semibold text-ink underline underline-offset-2 dark:text-white">
                      {section.contact}
                    </a>
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
