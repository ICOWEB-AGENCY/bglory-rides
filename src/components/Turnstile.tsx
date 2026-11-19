"use client";

import { useEffect, useRef } from "react";
import { TURNSTILE_SITE_KEY } from "@/lib/site";

type TurnstileApi = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loading: Promise<void> | null = null;

/** Loads Cloudflare's Turnstile script once per page, for explicit rendering. */
function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  loading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = null;
      reject(new Error("Turnstile did not load"));
    };
    document.head.appendChild(script);
  });
  return loading;
}

/**
 * Cloudflare's bot check. Most visitors pass without doing anything; the
 * token it hands back goes with the form, and the API route verifies it.
 * Tokens work once: change resetKey after each submit to get a fresh one.
 */
export default function Turnstile({
  onToken,
  resetKey = 0,
  theme = "auto",
}: {
  onToken: (token: string | null) => void;
  resetKey?: number;
  theme?: "auto" | "light" | "dark";
}) {
  const box = useRef<HTMLDivElement>(null);
  const latest = useRef(onToken);

  useEffect(() => {
    latest.current = onToken;
  }, [onToken]);

  useEffect(() => {
    let id: string | undefined;
    let cancelled = false;
    latest.current(null);
    loadTurnstile()
      .then(() => {
        if (cancelled || !box.current || !window.turnstile) return;
        id = window.turnstile.render(box.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme,
          // Stays invisible unless Cloudflare needs the visitor to act, so forms show no test box.
          appearance: "interaction-only",
          callback: (token: string) => latest.current(token),
          "expired-callback": () => latest.current(null),
          "error-callback": () => latest.current(null),
        });
      })
      .catch(() => latest.current(null));
    return () => {
      cancelled = true;
      if (id && window.turnstile) window.turnstile.remove(id);
    };
  }, [resetKey, theme]);

  return <div ref={box} />;
}
