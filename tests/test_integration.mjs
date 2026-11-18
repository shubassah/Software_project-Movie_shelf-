// Run with: node tests/test_integration.mjs
// Boots the REAL Express app (server/app.js) with an in-memory Postgres, a captured mailer and a fake cache service,
// then walks the whole journey: login page -> sign up -> verify email -> log in -> movie app -> movie API -> log out.
import assert from "node:assert/strict";
import express from "express";
import { newDb } from "pg-mem";
import { createApp } from "../server/app.js";

let n = 0; const ok = (m) => console.log(`  ✓ ${++n}. ${m}`);

// fake FastAPI cache service
const fake = express();
fake.get("/api/movies/popular", (req, res) => res.json({ results: Array.from({ length: 8 }, (_, i) => ({ id: i + 1, title: `Movie ${i + 1}` })) }));
fake.get("/api/movies/:id", (req, res) => res.json({ id: Number(req.params.id), title: "Detail" }));
fake.get("/api/search", (req, res) => res.json({ results: [{ id: 9, title: req.query.q }] }));
fake.get("/api/health", (req, res) => res.json({ ok: true, missing: [], secret: "internal" }));
const fakeSrv = fake.listen(0);

async function boot(extraEnv = {}) {
  const pool = new (newDb().adapters.createPg().Pool)();
  const outbox = [];
  const mailer = { mode: "smtp", async send(m) { outbox.push(m); } };
  const env = { PORT: "8000", APP_URL: "http://localhost:8000", CORS_ORIGINS: "http://localhost:3000", CACHE_SERVICE_URL: `http://127.0.0.1:${fakeSrv.address().port}`, VITE_FIREBASE_API_KEY: "public-web-key", VITE_FIREBASE_AUTH_DOMAIN: "test.firebaseapp.com", VITE_FIREBASE_PROJECT_ID: "test-project", VITE_FIREBASE_STORAGE_BUCKET: "test.firebasestorage.app", VITE_FIREBASE_MESSAGING_SENDER_ID: "123456", VITE_FIREBASE_APP_ID: "1:123456:web:test", ...extraEnv };
  const server = createApp({ pool, mailer, env }).listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  let cookie = "";
  const req = async (path, { method = "GET", body, headers = {}, auth = true } = {}) => {
    const res = await fetch(base + path, { method, redirect: "manual", headers: { ...(body ? { "Content-Type": "application/json" } : {}), ...(auth && cookie ? { Cookie: cookie } : {}), ...headers }, body: body ? JSON.stringify(body) : undefined });
    const sc = res.headers.get("set-cookie");
    if (sc && path.includes("/login")) cookie = sc.split(";")[0].endsWith("=") ? "" : sc.split(";")[0];
    if (sc && path.includes("/logout")) cookie = "";
    const text = await res.text(); let json = null; try { json = JSON.parse(text); } catch {}
    return { status: res.status, headers: res.headers, text, json };
  };
  return { req, outbox, server, pool, clearCookie: () => (cookie = "") };
}

const A = await boot();
const u = { name: "Asha Verma", email: "asha@example.com", password: "Strong#Pass123" };

// ---------- anonymous visitor
let r = await A.req("/");
assert.equal(r.status, 200); assert.match(r.text, /Movie Shelf/); assert.match(r.text, /Continue to Movie Shelf/);
assert.equal(r.headers.get("x-content-type-options"), "nosniff"); assert.equal(r.headers.get("x-frame-options"), "DENY");
assert.match(r.headers.get("content-security-policy"), /frame-ancestors 'none'/); assert.equal(r.headers.get("x-powered-by"), null);
assert.equal(r.headers.get("cross-origin-opener-policy"), "same-origin-allow-popups");
assert.match(r.headers.get("content-security-policy"), /www\.gstatic\.com/);
ok("login page served with security headers (CSP, nosniff, frame deny, no x-powered-by)");
r = await A.req("/api/config/firebase", { auth: false });
assert.equal(r.status, 200); assert.equal(r.json.configured, true); assert.equal(r.json.firebaseConfig.projectId, "test-project");
assert.deepEqual(Object.keys(r.json.firebaseConfig).sort(), ["apiKey", "appId", "authDomain", "messagingSenderId", "projectId", "storageBucket"].sort());
ok("Firebase config endpoint returns only the public web-app configuration fields");
r = await A.req("/app"); assert.equal(r.status, 302); assert.equal(r.headers.get("location"), "/"); ok("/app redirects anonymous visitors to login");
r = await A.req("/welcome"); assert.equal(r.status, 302); assert.equal(r.headers.get("location"), "/"); ok("/welcome redirects anonymous visitors to login");
for (const p of ["/api/movies/popular", "/api/movies/5", "/api/search?q=x", "/api/posters/abc.jpg"]) {
  r = await A.req(p); assert.equal(r.status, 401, p);
}
ok("movie API + search + posters all return 401 without login");
for (const p of ["/.env", "/private/app.html", "/frontend/private/app.html", "/app.html", "/server/auth.js", "/%2e%2e/.env"]) {
  r = await A.req(p); assert.ok(!/Working Volumes|TMDB_API_KEY|DATABASE_URL/.test(r.text), p);
}
ok("secrets, source and the movie UI are not reachable as static files");

// ---------- sign up -> email -> verify -> login
r = await A.req("/api/auth/signup", { method: "POST", body: u });
assert.equal(r.status, 201); assert.equal(A.outbox.length, 1); assert.equal(r.headers.get("cache-control"), "no-store"); ok("signup sends verification email; auth responses are no-store");
r = await A.req("/api/auth/login", { method: "POST", body: u }); assert.equal(r.status, 403); ok("cannot log in before verifying");
const link = new URL(A.outbox[0].text.match(/https?:\/\/\S+/)[0]);
r = await A.req(link.pathname + link.search); assert.equal(r.headers.get("location"), "/?verify=success"); ok("verification link activates the account");
r = await A.req("/api/auth/login", { method: "POST", body: u }); assert.equal(r.status, 200); ok("login succeeds after verification");

// ---------- logged in: /welcome serves the automatic VibeCheck Cinema flag intro
r = await A.req("/welcome");
assert.equal(r.status, 200); assert.match(r.text, /\/welcome\/assets\/index-[^"']+\.(?:js|css)/); assert.match(r.text, /Opening/);
assert.equal(r.headers.get("cache-control"), "no-store");
ok("/welcome serves the automatic VibeCheck Cinema intro");
r = await A.req("/landing-pages/woven-cloth-washi.html", { auth: false });
assert.equal(r.status, 200); assert.match(r.text, /three@0\.159\.0/);
assert.equal(r.headers.get("x-frame-options"), "SAMEORIGIN");
assert.match(r.headers.get("content-security-policy"), /frame-ancestors 'self'/);
assert.match(r.headers.get("content-security-policy"), /cdn\.jsdelivr\.net/);
ok("the WovenCloth loading curtain is served (embeddable by the app only, own CSP)");
r = await A.req("/app");
assert.equal(r.status, 200); assert.match(r.text, /Working Volumes/); assert.match(r.text, /acct-logout/); assert.match(r.text, /woven-cloth-transition__surface/);
assert.equal(r.headers.get("cache-control"), "no-store"); assert.match(r.headers.get("content-security-policy"), /cdn\.jsdelivr\.net/); assert.match(r.headers.get("content-security-policy"), /youtube\.com/);
ok("logged-in user gets the movie shelf (with its own CSP, no-store)");
r = await A.req("/api/movies/popular"); assert.equal(r.status, 200); assert.equal(r.json.results.length, 8); assert.match(r.headers.get("cache-control"), /private/); ok("movie list flows through Express to the cache service");
r = await A.req("/api/movies/7"); assert.equal(r.json.id, 7); ok("movie details work");
r = await A.req("/api/search?q=matrix"); assert.equal(r.json.results[0].title, "matrix"); ok("search works");
r = await A.req("/api/movies/abc"); assert.equal(r.status, 400); r = await A.req("/api/movies/1%2F..%2Fx"); assert.ok([400, 404].includes(r.status)); ok("non-numeric movie ids rejected");
r = await A.req("/api/search?q="); assert.equal(r.status, 400); ok("empty search rejected");

// ---------- account-scoped saved collection
const savedMovie = { id: 42, tmdb_id: 42, title: "The Persisted Film", poster_url: "https://image.tmdb.org/t/p/w500/poster.jpg", release_date: "2026-01-01", ratingText: "8.2 / 10" };
r = await A.req("/api/collection"); assert.equal(r.status, 200); assert.deepEqual(r.json.movies, []); ok("new account starts with an empty saved collection");
r = await A.req("/api/collection", { method: "POST", body: { movie: savedMovie } }); assert.equal(r.status, 201); ok("saved movie is accepted for the signed-in account");
r = await A.req("/api/collection"); assert.equal(r.status, 200); assert.equal(r.json.movies[0].title, savedMovie.title); ok("saved movie persists through a fresh collection read");
r = await A.req("/api/collection/42", { method: "DELETE" }); assert.equal(r.status, 200); r = await A.req("/api/collection"); assert.deepEqual(r.json.movies, []); ok("saved movie can be removed and no longer appears");
r = await A.req("/api/collection", { method: "POST", body: { movie: savedMovie } }); assert.equal(r.status, 201);

// ---------- CSRF / origin checks
r = await A.req("/api/auth/login", { method: "POST", body: { email: u.email, password: "x" }, headers: { Origin: "https://evil.example" } }); assert.equal(r.status, 403);
r = await A.req("/api/auth/login", { method: "POST", body: { email: u.email, password: "x" }, headers: { "Sec-Fetch-Site": "cross-site" } }); assert.equal(r.status, 403);
r = await A.req("/api/auth/logout", { method: "POST", body: {}, headers: { Origin: "https://evil.example" } }); assert.equal(r.status, 403);
r = await A.req("/api/auth/login", { method: "POST", body: { email: u.email, password: "x" }, headers: { Origin: "http://localhost:8000" } }); assert.equal(r.status, 401);
ok("cross-site POSTs blocked; same-site POSTs allowed");
r = await A.req("/api/auth/login", { method: "POST", body: { email: u.email, password: "x".repeat(30000) } }); assert.equal(r.status, 413); ok("oversized bodies rejected (413)");
r = await A.req("/api/auth/login", { method: "POST", body: undefined, headers: { "Content-Type": "application/json" } }); assert.ok(r.status < 500); ok("empty JSON body doesn't crash the server");

// ---------- health doesn't need login but production hides internals (checked below); dev shows detail
r = await A.req("/api/health", { auth: false }); assert.equal(r.status, 200); ok("health endpoint reachable");

// ---------- per-user rate limit
let last; for (let i = 0; i < 245; i++) last = await A.req("/api/movies/popular");
assert.equal(last.status, 429); assert.ok(last.headers.get("retry-after")); ok("per-user rate limit (240/min) protects the TMDB/YouTube quota");

// ---------- logout locks everything again
await A.req("/api/auth/logout", { method: "POST", body: {} });
r = await A.req("/app"); assert.equal(r.status, 302); r = await A.req("/api/movies/popular"); assert.equal(r.status, 401); ok("after logout the app and API are locked again");

// ---------- production mode
const P = await boot({ NODE_ENV: "production", APP_URL: "https://movies.example.com", CACHE_SERVICE_URL: "http://127.0.0.1:1" });
await P.req("/api/auth/signup", { method: "POST", body: u });
const l2 = new URL(P.outbox[0].text.match(/https?:\/\/\S+/)[0]); await P.req(l2.pathname + l2.search);
r = await P.req("/api/auth/login", { method: "POST", body: u, headers: { Origin: "https://movies.example.com", Host: "movies.example.com" } });
assert.equal(r.status, 200); assert.match(r.headers.get("set-cookie"), /Secure/); assert.match(r.headers.get("set-cookie"), /HttpOnly/); assert.match(r.headers.get("set-cookie"), /SameSite=Lax/); ok("production cookie is Secure + HttpOnly + SameSite");
r = await P.req("/"); assert.match(r.headers.get("strict-transport-security"), /max-age=31536000/); ok("HSTS enabled in production");
r = await P.req("/api/movies/popular"); assert.equal(r.status, 502); assert.equal(r.json.detail, undefined); assert.ok(!/127\.0\.0\.1/.test(r.text)); ok("upstream error details hidden in production");
r = await P.req("/api/health", { auth: false }); assert.deepEqual(r.json, { ok: false, error: "Cache service unavailable" }); ok("production health output is minimal");

console.log(`\nAll ${n} integration checks passed.`);
A.server.close(); P.server.close(); fakeSrv.close(); process.exit(0);
