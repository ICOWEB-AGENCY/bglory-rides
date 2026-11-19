import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Help Center | Zyon Support",
  description:
    "Answers about Zyon: booking a ride, how fares work, paying with cash, card or wallet, trip safety, driving with Zyon and your account.",
};

/** Every answer describes what the apps do today. */
const helpTopics = [
  {
    title: "Getting started",
    questions: [
      { q: "How do I create an account?", a: "Open the Zyon app and sign up with your name, phone number, email and a password. We send a code to confirm your number, or to your email if you choose." },
      { q: "How do I pay?", a: "Cash to your driver at the end of the trip, a debit card, or your Zyon wallet. Pick one before you confirm a ride." },
      { q: "How do I add a card?", a: "Go to Wallet, tap Add card and follow the steps. Card payments run through Paystack." },
    ],
  },
  {
    title: "Rides",
    questions: [
      { q: "How do I book a ride?", a: "Type where you are going, pick Economy, Standard or Premium, check the price and tap Confirm." },
      { q: "Can I cancel?", a: "Yes. Cancel from the trip screen before your trip starts." },
      { q: "What is the ride PIN?", a: "A 4-digit number on your trip screen. Your driver enters it to start the trip, so you know you are in the right car. You can turn it off in your safety settings." },
    ],
  },
  {
    title: "Fares",
    questions: [
      { q: "How is my fare worked out?", a: "From the distance and time of your trip and the class you pick. At busy hours, or when few cars are near, the fare is higher. The price you see before you confirm already includes this." },
      { q: "Can my fare change?", a: "Only if the trip turns out much longer than planned, for example after a change of route. The fare is then worked out again for the distance actually driven." },
      { q: "Where is my receipt?", a: "Every trip has a receipt in your trip history." },
    ],
  },
  {
    title: "Safety",
    questions: [
      { q: "How do I share my trip?", a: "Tap Share on the trip screen and send the live link on WhatsApp or any app. You can also keep up to 5 emergency contacts in your safety settings." },
      { q: "What does SOS do?", a: "It alerts our team straight away with your trip and location, and tells your emergency contact. If you are in danger, call the police on 112 as well." },
      { q: "How do I report a problem?", a: "Open the trip in your history and report it, or write to us from Help in the app." },
    ],
  },
  {
    title: "Driving with Zyon",
    questions: [
      { q: "How do I become a driver?", a: "Download the Zyon Driver app, sign up, add your car and upload your documents. Our team checks them, and you can go online once you are approved." },
      { q: "What documents do I need?", a: "Your driver's licence (front and back), vehicle licence, proof of ownership, roadworthiness certificate, insurance, hackney permit, and photos of your car and of yourself." },
      { q: "How do I get paid?", a: "You keep 80% of every fare. Card and wallet earnings go to your Zyon wallet, and you withdraw them to your bank from ₦100 with your withdrawal PIN." },
    ],
  },
  {
    title: "Your account",
    questions: [
      { q: "How do I change my details?", a: "Open Account in the app to change your name, photo, phone number or email." },
      { q: "I forgot my password", a: "Tap Forgot password on the log in screen. We email you a code to set a new one." },
      { q: "How do I delete my account?", a: "Go to Account and choose Delete account. You confirm with your password." },
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        label="Help Center"
        title="How can we help you?"
        description="Answers to the questions riders and drivers ask most. For anything else, send us a message."
        breadcrumbs={[{ label: "Help Center" }]}
      />

      <main>
        {/* Browse Topics */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary-400 mb-6">
                Browse Topics
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15] max-w-2xl">
                Get answers{" "}
                <span className="text-primary-400">fast.</span>
              </h2>
            </AnimatedSection>

            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-surface-200 dark:border-white/[0.06]">
              {helpTopics.map((topic, i) => (
                <AnimatedSection key={topic.title} delay={i * 0.06}>
                  <div className="py-8 sm:py-10 border-b border-surface-200 dark:border-white/[0.06]">
                    <h3 className="text-lg sm:text-xl font-bold text-dark-900 dark:text-white ">
                      {topic.title}
                    </h3>
                    <dl className="mt-4 space-y-5">
                      {topic.questions.map(({ q, a }) => (
                        <div key={q}>
                          <dt className="text-sm font-semibold text-dark-900 dark:text-white">{q}</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-dark-500 dark:text-dark-400">{a}</dd>
                        </div>
                      ))}
                    </dl>
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
                  Send us a message. A person reads every one and replies by
                  email.
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
