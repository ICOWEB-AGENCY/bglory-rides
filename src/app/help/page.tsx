import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Button from "@/components/Button";
import { Band, CtaCard } from "@/components/page/blocks";

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
      { q: "How do I pay?", a: "Cash to your driver at the end of the trip, a card, or your Zyon wallet. Pick one before you confirm a ride." },
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
        title="How can"
        dim="we help?"
        description="Answers to the questions riders and drivers ask most. For anything else, send us a message."
        breadcrumbs={[{ label: "Help Center" }]}
      />

      <main>
        <Band tone="white">
          <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2">
            {helpTopics.map((topic) => (
              <section key={topic.title} aria-labelledby={`help-${topic.title}`} className="border-t border-ink/15 pt-8 dark:border-white/15">
                <h2 id={`help-${topic.title}`} className="display text-[clamp(1.8rem,3vw,2.6rem)]">{topic.title}</h2>
                <dl className="mt-8 space-y-7">
                  {topic.questions.map(({ q, a }) => (
                    <div key={q}>
                      <dt className="font-semibold">{q}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-dark-500 dark:text-white/60">{a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </Band>

        <CtaCard title="Did not find" dim="your answer?" text="Send us a message and we will reply by email.">
          <Button href="/contact" size="lg">Contact us</Button>
        </CtaCard>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
