"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Turnstile from "@/components/Turnstile";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";

const contactChannels = [
  {
    label: "Email",
    value: "contact@zyonrides.com",
    href: "mailto:contact@zyonrides.com",
    note: "Write to us about anything, from a trip to a partnership",
  },
  {
    label: "Phone",
    value: "0806 337 6181",
    href: "tel:+2348063376181",
    note: "Speak to a real person, Monday to Friday",
  },
  {
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
        label="Contact"
        title="We would love to hear from you."
        description="Whether you ride, drive or want to work with us, write to us. A person reads every message."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <main>
        {/* Contact Channels */}
        <section className="py-20 sm:py-28 bg-white dark:bg-dark-950">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            {/* Channels as editorial rows */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-surface-200 dark:border-white/[0.06]">
              {contactChannels.map((channel, i) => (
                <AnimatedSection key={channel.label} delay={i * 0.1}>
                  <a
                    href={channel.href}
                    className={`group block py-8 ${i === 0 ? "lg:pr-10" : i === contactChannels.length - 1 ? "lg:pl-10" : "lg:px-10"} border-b lg:border-b-0 border-surface-200 dark:border-white/[0.06] ${i < contactChannels.length - 1 ? "lg:border-r" : ""}`}
                  >
                    <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">
                      {channel.label}
                    </p>
                    <p className="text-base font-bold text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">
                      {channel.value}
                    </p>
                    <p className="text-xs text-dark-400 mt-2">
                      {channel.note}
                    </p>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Form Section */}
            <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <AnimatedSection>
                  <p className="text-sm font-medium text-primary-400 mb-6">
                    Send a message
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white tracking-tight leading-[1.15]">
                    Tell us what you need.
                  </h2>
                  <p className="mt-5 text-dark-500 dark:text-dark-400 leading-relaxed">
                    Riders, drivers and companies all write to the same team.
                    A person reads every message and replies by email.
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-surface-200 dark:border-white/[0.06] bg-surface-50 dark:bg-dark-900 p-6 sm:p-8 lg:p-10">
                  {submitted ? (
                    <div className="py-10 sm:py-14 text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-3">
                        Message received.
                      </h3>
                      <p className="text-dark-500 dark:text-dark-400 text-sm mb-8 max-w-sm mx-auto">
                        Thank you for writing. A member of the team will reply
                        to your email.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-sm font-medium text-primary-500 hover:underline cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-surface-200 dark:border-dark-700 text-dark-900 dark:text-white text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-surface-200 dark:border-dark-700 text-dark-900 dark:text-white text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({ ...formState, subject: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-surface-200 dark:border-dark-700 text-dark-900 dark:text-white text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-surface-200 dark:border-dark-700 text-dark-900 dark:text-white text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all resize-none"
                          placeholder="Tell us how we can help you ride, drive, or partner with Zyon..."
                        />
                      </div>

                      <Turnstile onToken={setToken} resetKey={checkRound} />

                      {error && (
                        <p className="text-sm text-red-500">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={sending || !token}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-400 text-white text-sm font-semibold hover:bg-primary-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sending ? "Sending..." : "Send Message"}
                        {!sending && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </form>
                  )}
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
