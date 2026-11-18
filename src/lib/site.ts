/** The live site address, for the sitemap, robots and link previews. */
export const SITE_URL = "https://www.zyonrides.com";

/**
 * Cloudflare Turnstile site key for the contact and waitlist forms (public by
 * design). Local dev uses Cloudflare's always-pass test key, because the real
 * widget only answers on zyonrides.com.
 */
export const TURNSTILE_SITE_KEY =
  process.env.NODE_ENV === "development" ? "1x00000000000000000000AA" : "0x4AAAAAAGHWgpvJK6iDmESt";
