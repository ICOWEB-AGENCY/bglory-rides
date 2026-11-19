"use client";

import { useState, FormEvent } from "react";
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
      <div className="mt-4 animate-fade-in">
        <div className="flex items-center gap-2 text-[#4b6616] dark:text-primary-400 font-semibold text-sm">
          <span className="w-2 h-2 rounded-full bg-primary-400" />
          You are on the list.
        </div>
        <p className="mt-2 text-dark-500 dark:text-dark-400 text-sm">
          We will email you the moment Zyon goes live. Check your inbox for a confirmation.
        </p>
      </div>
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
          className="flex-1 px-4 py-3.5 rounded-lg bg-white border border-dark-200 text-dark-900 text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-500 transition-all dark:bg-dark-800 dark:border-dark-700 dark:text-white dark:placeholder:text-dark-500"
        />
        <button
          type="submit"
          disabled={status === "sending" || !token}
          className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#063F1E] text-white text-sm font-semibold hover:bg-[#0a5229] transition-colors shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed dark:bg-[#9ACD32] dark:text-[#063F1E] dark:hover:bg-[#b4dc66]"
        >
          {status === "sending" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      <div className="mt-3">
        <Turnstile onToken={setToken} resetKey={checkRound} theme="dark" />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
      )}

    </>
  );
}
