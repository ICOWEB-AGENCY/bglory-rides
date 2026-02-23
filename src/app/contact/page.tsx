"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";

const contactChannels = [
  {
    label: "Email",
    value: "hello@bgloryrides.com",
    href: "mailto:hello@bgloryrides.com",
    note: "Most inquiries answered within 2 hours",
  },
  {
    label: "Phone",
    value: "+234 (0) 800 123 4567",
    href: "tel:+2348001234567",
    note: "Speak to a real person, Monday to Friday",
  },
  {
    label: "Office",
    value: "Victoria Island, Lagos",
    href: "#",
    note: "Walk in and meet the team on weekdays",
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="We would love to hear from you."
        description="Whether you want to ride, drive, or partner with us, our team is ready to help. Reach out and get a response within hours, not days."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <main>
        {/* Contact Channels */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
            {/* Channels as editorial rows */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-surface-200">
              {contactChannels.map((channel, i) => (
                <AnimatedSection key={channel.label} delay={i * 0.1}>
                  <a
                    href={channel.href}
                    className={`group block py-8 ${i === 0 ? "lg:pr-10" : i === contactChannels.length - 1 ? "lg:pl-10" : "lg:px-10"} border-b lg:border-b-0 border-surface-200 ${i < contactChannels.length - 1 ? "lg:border-r" : ""}`}
                  >
                    <span className="text-xs font-mono text-dark-300 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-dark-500 mt-3 mb-1">
                      {channel.label}
                    </p>
                    <p className="text-base font-bold text-dark-900 group-hover:text-primary-500 transition-colors">
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
                    Get a Fast Response
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight leading-[1.15]">
                    Tell us what you need.
                  </h2>
                  <p className="mt-5 text-dark-500 leading-relaxed">
                    Drop us a message and a real team member will get back to you
                    within hours. Riders, drivers, and partners all get priority
                    support.
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-dark-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      Average response time: under 2 hours
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      Available 24/7, including weekends
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.1}>
                {submitted ? (
                  <div className="py-16 sm:py-20 text-center animate-fade-in">
                    <p className="text-xs font-mono text-primary-400 tracking-widest mb-4">
                      SENT
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-3">
                      Message received.
                    </h3>
                    <p className="text-dark-500 text-sm mb-8 max-w-sm mx-auto">
                      Thank you for reaching out. A team member will respond
                      within a few hours.
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
                          className="block text-sm font-medium text-dark-700 mb-2"
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
                          className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-dark-900 text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-dark-700 mb-2"
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
                          className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-dark-900 text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-dark-700 mb-2"
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-dark-900 text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark-700 mb-2"
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-dark-900 text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all resize-none"
                        placeholder="Tell us how we can help you ride, drive, or partner with BGlory..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-400 text-white text-sm font-semibold hover:bg-primary-500 transition-colors cursor-pointer"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
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
