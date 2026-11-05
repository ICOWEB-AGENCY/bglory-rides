import { SITE_URL } from "./site";

/**
 * Emails sent by the website (contact form and waitlist). They use the same
 * frame as the emails the Zyon apps send: deep green header with the
 * wordmark, white body, quiet footer. Table layout and inline styles only,
 * because that is what every mail client renders the same way.
 *
 * Every helper escapes the text it is given. The frame copies the API's
 * internal/notify/templates.go: keep the two in step when either changes.
 */

export const EMAIL_FROM = "Zyon <noreply@bgloryrides.com>";
export const TEAM_INBOX = "contact@bgloryrides.com";

const LOGO_URL = `${SITE_URL}/images/email/zyon-wordmark-light.png`;
const C = {
  brand: "#063F1E",
  ink: "#0F1A14",
  text: "#3A4540",
  muted: "#6B7570",
  line: "#E6E9E4",
  surface: "#F4F6F2",
  page: "#EEF1EC",
};
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const block = {
  text: (s: string) =>
    `<p style="margin:0 0 16px;font-size:15px;line-height:24px;color:${C.text};">${escapeHtml(s)}</p>`,
  rows: (rows: [string, string][]) => {
    const body = rows
      .filter(([, v]) => v.trim() !== "")
      .map(
        ([k, v]) =>
          `<tr><td style="padding:12px 0;border-top:1px solid ${C.line};font-size:14px;line-height:20px;color:${C.muted};">${escapeHtml(k)}</td>` +
          `<td align="right" style="padding:12px 0 12px 16px;border-top:1px solid ${C.line};font-size:14px;line-height:20px;color:${C.ink};font-weight:600;">${escapeHtml(v)}</td></tr>`,
      )
      .join("");
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;border-bottom:1px solid ${C.line};">${body}</table>`;
  },
  quote: (s: string) =>
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:4px 0 20px;"><tr>` +
    `<td style="padding:2px 0 2px 16px;border-left:3px solid ${C.line};font-size:15px;line-height:24px;color:${C.ink};white-space:pre-line;">${escapeHtml(s)}</td></tr></table>`,
  small: (s: string) =>
    `<p style="margin:4px 0 0;font-size:13px;line-height:20px;color:${C.muted};">${escapeHtml(s)}</p>`,
};

/** Wraps body blocks in the Zyon frame. */
export function layout(opts: { title: string; preheader: string; body: string; footer: string }): string {
  const { title, preheader, body, footer } = opts;
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:${C.page};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;font-size:0;line-height:0;mso-hide:all;">${escapeHtml(preheader)}&#8203;&#847;&#8203;&#847;&#8203;&#847;&#8203;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.page};font-family:${FONT};"><tr><td align="center" style="padding:32px 16px 40px;">
<!--[if mso]><table role="presentation" width="560" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
<tr><td style="background:${C.brand};border-radius:16px 16px 0 0;padding:22px 32px;">
<img src="${LOGO_URL}" width="88" height="33" alt="Zyon" style="display:block;border:0;outline:none;text-decoration:none;height:33px;width:88px;color:#FFFFFF;font-family:${FONT};font-size:22px;font-weight:700;">
</td></tr>
<tr><td style="background:#FFFFFF;border-radius:0 0 16px 16px;padding:36px 32px 32px;">
<h1 style="margin:0 0 20px;font-size:24px;line-height:32px;font-weight:600;letter-spacing:-0.3px;color:${C.ink};">${escapeHtml(title)}</h1>
${body}
</td></tr>
<tr><td style="padding:24px 32px 0;font-size:12px;line-height:18px;color:${C.muted};">${escapeHtml(footer)}<br>Zyon, Abuja, Nigeria</td></tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr></table></body></html>`;
}

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

/** A trimmed, lower-cased email address, or null when it is not one. */
export function cleanEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const e = raw.trim().toLowerCase();
  return e.length <= 254 && EMAIL_RE.test(e) ? e : null;
}

/** A trimmed string, or null when it is empty or not text. */
export function cleanText(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const s = raw.trim();
  return s === "" ? null : s;
}

/** One line of text: control characters and line breaks become spaces. */
export function oneLine(s: string): string {
  return s.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
}

/** The parsed JSON body when it is a plain object, else null. */
export async function jsonObject(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const body: unknown = await request.json();
    return body !== null && typeof body === "object" && !Array.isArray(body) ? (body as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
