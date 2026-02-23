"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
    }
  };

  if (status === "success") {
    return (
      <div className="mt-8 animate-fade-in">
        <div className="flex items-center gap-2 text-primary-400 font-semibold text-sm">
          <span className="w-2 h-2 rounded-full bg-primary-400" />
          You are on the list.
        </div>
        <p className="mt-2 text-dark-400 text-sm">
          We will email you the moment BGlory goes live. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="flex-1 px-5 py-3.5 rounded-xl bg-dark-800 border border-dark-700 text-white text-sm placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 transition-all"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-3.5 rounded-xl bg-primary-400 text-white text-sm font-semibold hover:bg-primary-500 transition-colors shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-dark-500">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
          No spam, ever
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
          Unsubscribe anytime
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
          Priority access for early signups
        </div>
      </div>
    </>
  );
}
