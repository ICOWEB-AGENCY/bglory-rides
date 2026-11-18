/** Cloudflare's always-pass test secret, paired with the dev site key in site.ts. */
const DEV_SECRET = "1x0000000000000000000000000000000AA";

/**
 * Server-side Turnstile check for the website forms. False on anything but a
 * clear pass from Cloudflare: no token, no secret configured, or siteverify
 * unreachable. The forms send mail to the team, so they fail closed.
 */
export async function passedTurnstile(token: unknown, ip: string | null): Promise<boolean> {
  const secret =
    process.env.TURNSTILE_SECRET_KEY || (process.env.NODE_ENV === "development" ? DEV_SECRET : "");
  if (!secret || typeof token !== "string" || token === "" || token.length > 2048) return false;
  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const data = (await res.json()) as { success?: unknown };
    return data.success === true;
  } catch {
    return false;
  }
}
