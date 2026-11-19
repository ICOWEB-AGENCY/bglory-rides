"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Turnstile from "@/components/Turnstile";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Band } from "@/components/page/blocks";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@zyonrides.com",
    href: "mailto:contact@zyonrides.com",
    note: "Write to us about anything, from a trip to a partnership",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0806 337 6181",
    href: "tel:+2348063376181",
    note: "Call us about a trip, your account or driving with Zyon",
  },
  {
    icon: MessageCircle,
    label: "In the app",
    value: "Help and support",
    href: "/help",
    note: "Report a problem with a trip straight from your history",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [checkRound, setCheckRound] = useState(0);
  const [checkFailed, setCheckFailed] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, turnstileToken: token }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSending(false);
      // A Turnstile token works once: get a fresh one for the next send.
      setCheckRound((n) => n + 1);
    }
  };

  return (
    <>
      <PageHero
        title="Talk to"
        dim="a person at Zyon."
        description="Whether you ride, drive or want to work with us, send us a message. We reply to the email you give us."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <main>
        <Band tone="white">
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {contactChannels.map(({ icon: Icon, label, value, href, note }) => (
              <li key={label} className="border-t border-ink/15 pt-6 dark:border-white/15">
                <a href={href} className="group block">
                  <Icon className="h-6 w-6 text-ink dark:text-white" strokeWidth={1.6} aria-hidden="true" />
                  <p className="mt-5 text-sm text-dark-500 dark:text-white/55">{label}</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline dark:text-white">{value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-dark-500 dark:text-white/55">{note}</p>
                </a>
              </li>
            ))}
          </ul>
        </Band>

        <Band tone="mist">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <h2 className="display max-w-[12ch] text-[clamp(2.2rem,4.4vw,3.8rem)]">
                Send a <span className="opacity-40">message.</span>
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-dark-500 dark:text-white/55">
                Riders, drivers and companies all write to the same team. Leave your email so we can reply.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 sm:p-10 dark:bg-ink">
              {submitted ? (
                <div className="py-10 text-center">
                  <h3 className="display text-3xl">Message received.</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm text-dark-500 dark:text-white/55">Thank you for writing. We will reply to the email you gave us.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold hover:border-ink dark:border-white/25">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">Your name</label>
                      <input id="name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-dark-400 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10 dark:border-white/10 dark:bg-ink dark:text-white" placeholder="Ada Okafor" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                      <input id="email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-dark-400 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10 dark:border-white/10 dark:bg-ink dark:text-white" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</label>
                    <input id="subject" type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-dark-400 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10 dark:border-white/10 dark:bg-ink dark:text-white" placeholder="What is it about?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                    <textarea id="message" required rows={6} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-dark-400 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10 dark:border-white/10 dark:bg-ink dark:text-white resize-none" placeholder="Tell us what you need." />
                  </div>
                  <Turnstile onToken={setToken} onFail={() => setCheckFailed(true)} resetKey={checkRound} />
                  {checkFailed && (
                    <p className="text-sm text-dark-500 dark:text-white/55">
                      We could not check this browser.{" "}
                      <button
                        type="button"
                        className="font-semibold text-ink underline underline-offset-2 dark:text-white"
                        onClick={() => {
                          setCheckFailed(false);
                          setCheckRound((n) => n + 1);
                        }}
                      >
                        Try again
                      </button>
                    </p>
                  )}
                  {error && <p className="text-sm font-medium text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending || !token}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-300 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {sending ? "Sending..." : "Send message"}
                    {!sending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Band>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
