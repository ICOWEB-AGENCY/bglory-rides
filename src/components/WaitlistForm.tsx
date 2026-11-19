"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Turnstile from "@/components/Turnstile";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [checkRound, setCheckRound] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, turnstileToken: token }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to join. Please try again.");
      // A Turnstile token works once: get a fresh one for the next try.
      setCheckRound((n) => n + 1);
    }
  };

  if (status === "success") {
    return (
      <motion.div className="mt-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p className="text-sm font-semibold text-white">You are on the list.</p>
        <p className="mt-2 text-sm text-white/70">
          We will email you the moment Zyon goes live. Check your inbox for a confirmation.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col sm:flex-row gap-3 max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="flex-1 rounded-full border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-dark-400 transition-all focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20"
        />
        <button
          type="submit"
          disabled={status === "sending" || !token}
          className="w-full shrink-0 cursor-pointer rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-300 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {status === "sending" ? "Sending..." : "Email me at launch"}
        </button>
      </form>

      <div className="mt-3">
        <Turnstile onToken={setToken} resetKey={checkRound} theme="dark" />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-300">{errorMsg}</p>
      )}

    </>
  );
}
