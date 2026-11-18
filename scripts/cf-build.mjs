#!/usr/bin/env node
// Cloudflare build wrapper. OpenNext bakes EVERY .env* file in the app dir
// into the Worker bundle (.open-next/cloudflare/next-env.mjs), and a Worker
// script is readable by anyone with Workers Scripts Read on the account.
// Secrets therefore never go through env files here: they live in Workers
// secrets (`wrangler secret`). This script
//   1. refuses to build if .env.production holds anything but public values,
//      or a public key with an empty value (a missing CI secret would
//      otherwise ship a site with blank public settings),
//   2. hides every other env file (.env, .env.local, .env.test, ...) for the
//      duration of the build: OpenNext writes production, development AND
//      test env sets into the bundle, so a .env.test secret ships too,
//   3. verifies the emitted next-env.mjs holds only public keys.
//
// Keep this guard: the Worker bundle must never carry a secret.
import { existsSync, readdirSync, readFileSync, renameSync } from "node:fs";
import { spawnSync } from "node:child_process";

const isPublic = (key) => key.startsWith("NEXT_PUBLIC_");
// Env files only (.env, .env.local, ...), never .envrc (direnv), the
// production file this build reads, or a committed .example.
const HIDE = readdirSync(".").filter(
  (f) => /^\.env(\..+)?$/.test(f) && f !== ".env.production" && !f.endsWith(".cf-hold") && !f.endsWith(".example")
);

/** [key, value] pairs, for any key case so a lowercase secret cannot slip past. */
function envEntries(file) {
  if (!existsSync(file)) return [];
  return readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/))
    .filter(Boolean)
    .map((m) => [m[1], m[2].trim().replace(/^(["'])(.*)\1$/, "$2")]);
}

function run(cmd, args) {
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: process.platform === "win32" });
  if (res.status !== 0) throw new Error(`${cmd} ${args.join(" ")} exited ${res.status}`);
}

// A missing .env.production means "no public values", which is valid for a
// site that reads none.
const entries = envEntries(".env.production");
const leaked = entries.filter(([k]) => !isPublic(k)).map(([k]) => k);
if (leaked.length) {
  console.error(`cf-build: .env.production holds non-public keys, move them to \`wrangler secret\`: ${leaked.join(", ")}`);
  process.exit(1);
}
const empty = entries.filter(([, v]) => v === "").map(([k]) => k);
if (empty.length) {
  console.error(`cf-build: .env.production has empty values (a missing secret?): ${empty.join(", ")}`);
  process.exit(1);
}

const hidden = HIDE.filter((f) => existsSync(f));
const restore = () => {
  for (const f of hidden) {
    if (existsSync(`${f}.cf-hold`)) renameSync(`${f}.cf-hold`, f);
  }
};
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => { restore(); process.exit(1); });

try {
  for (const f of hidden) renameSync(f, `${f}.cf-hold`);
  // A custom worker entry, if one is added, is type-checked here.
  if (existsSync("tsconfig.worker.json")) run("npx", ["tsc", "--noEmit", "-p", "tsconfig.worker.json"]);
  run("npx", ["opennextjs-cloudflare", "build"]);
} finally {
  restore();
}

const emitted = readFileSync(".open-next/cloudflare/next-env.mjs", "utf8");
const bad = [...emitted.matchAll(/"([A-Za-z_][A-Za-z0-9_]*)":/g)].map((m) => m[1]).filter((k) => !isPublic(k));
if (bad.length) {
  console.error(`cf-build: bundle would ship non-public env keys: ${[...new Set(bad)].join(", ")}`);
  process.exit(1);
}
console.log("cf-build: bundle holds public env keys only.");
