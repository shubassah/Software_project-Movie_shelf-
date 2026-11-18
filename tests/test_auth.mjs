// Run with: node tests/test_auth.mjs   (uses an in-memory Postgres, no network or SMTP needed)
import assert from "node:assert/strict";
import express from "express";
import { newDb } from "pg-mem";
import { createAuthRouter } from "../server/auth.js";

const db = newDb();
const { Pool } = db.adapters.createPg();
const pool = new Pool();
const outbox = [];
const mailer = { mode: "smtp", async send(m) { outbox.push(m); } };
const firebaseIdentities = new Map([
  ["mock-firebase-token-new-user-123456", { uid: "firebase-new-user", email: "google@example.com", emailVerified: true, name: "Google User" }],
  ["mock-firebase-token-existing-123456", { uid: "firebase-jane", email: "jane@example.com", emailVerified: true, name: "Jane Google" }],
  ["mock-firebase-token-unverified-123456", { uid: "firebase-pending", email: "unverified@example.com", emailVerified: false, name: "Pending User" }],
]);
const firebaseVerificationRequests = [];
const firebasePasswordSignIn = async ({ apiKey, email, password }) => {
  assert.equal(apiKey, "test-firebase-api-key");
  if (email === "jane@example.com" && password === "FirebasePass123") return { ok: true, data: { idToken: "mock-firebase-token-existing-123456" } };
  if (email === "unverified@example.com" && password === "PendingPass123") return { ok: true, data: { idToken: "mock-firebase-token-unverified-123456" } };
  return { ok: false, data: { error: { message: "INVALID_LOGIN_CREDENTIALS" } } };
};
const sendFirebaseVerification = async (request) => { firebaseVerificationRequests.push(request); return { ok: true }; };
const verifyFirebaseToken = async (token, projectId) => {
  assert.equal(projectId, "test-firebase-project");
  const identity = firebaseIdentities.get(token);
  if (!identity) throw new Error("Invalid test token.");
  return identity;
};

const app = express();
app.use(express.json());
const authRouter = createAuthRouter({ pool, mailer, appUrl: "http://test.local", appName: "TestApp", firebaseProjectId: "test-firebase-project", firebaseApiKey: "test-firebase-api-key", verifyFirebaseToken, firebasePasswordSignIn, sendFirebaseVerification });
app.use("/api/auth", authRouter);
app.use("/api/movies", authRouter.requireAuth(), (req, res) => res.json({ results: [], user: req.user.email }));
app.get("/app", authRouter.requireAuth({ page: true }), (req, res) => res.send("MOVIE-APP"));
const server = app.listen(0);
const base = `http://127.0.0.1:${server.address().port}`;

let cookie = "";
async function call(method, path, body, { redirect } = {}) {
  const res = await fetch(base + "/api/auth" + path, {
    method, redirect: redirect || "manual",
    headers: { ...(body ? { "Content-Type": "application/json" } : {}), ...(cookie ? { Cookie: cookie } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const sc = res.headers.get("set-cookie");
  if (sc) cookie = sc.split(";")[0].endsWith("=") ? "" : sc.split(";")[0];
  let data = null; try { data = await res.json(); } catch {}
  return { status: res.status, data, headers: res.headers };
}
const tokenFrom = (mail, key) => new URL(mail.text.match(/https?:\/\/\S+/)[0]).searchParams.get(key);
let n = 0; const ok = (name) => console.log(`  ✓ ${++n}. ${name}`);

const u = { name: "Jane Doe", email: "Jane@Example.com", password: "hunter2hunter2" };

// --- sign up validation
assert.equal((await call("POST", "/signup", { ...u, password: "short" })).status, 400); ok("rejects short password");
assert.equal((await call("POST", "/signup", { ...u, password: "allletters" })).status, 400); ok("rejects password without number");
assert.equal((await call("POST", "/signup", { ...u, email: "nope" })).status, 400); ok("rejects bad email");
assert.equal((await call("POST", "/signup", { ...u, name: "" })).status, 400); ok("rejects missing name");

// --- sign up success + verification email
let r = await call("POST", "/signup", u);
assert.equal(r.status, 201); assert.equal(r.data.emailSent, true);
assert.equal(outbox.length, 1); assert.equal(outbox[0].to, "jane@example.com");
assert.match(outbox[0].subject, /TestApp/); assert.match(outbox[0].html, /Verify my email/);
ok("creates account and sends verification email (email lowercased)");
const stored = (await pool.query("SELECT * FROM app_users")).rows[0];
assert.ok(stored.password_hash.startsWith("scrypt$")); assert.ok(!stored.password_hash.includes(u.password));
assert.notEqual(stored.verify_token_hash, tokenFrom(outbox[0], "token"));
ok("password hashed with scrypt; verification token stored only as a hash");

// --- duplicate unverified signup re-sends (respecting cooldown)
r = await call("POST", "/signup", u);
assert.equal(r.status, 200); assert.equal(r.data.emailSent, false); assert.equal(outbox.length, 1);
ok("re-signup of unverified account inside cooldown doesn't spam");

// --- login blocked until verified
r = await call("POST", "/login", { email: u.email, password: u.password });
assert.equal(r.status, 403); assert.equal(r.data.code, "EMAIL_NOT_VERIFIED"); ok("login blocked before verification");
assert.equal((await call("POST", "/resend-verification", { email: u.email })).status, 429); ok("resend honours 60s cooldown");
await pool.query("UPDATE app_users SET verify_sent_at = now() - interval '2 minutes'");
r = await call("POST", "/resend-verification", { email: u.email });
assert.equal(r.status, 200); assert.equal(outbox.length, 2); ok("resend works after cooldown");

// --- verify
r = await call("GET", "/verify?token=bogus");
assert.equal(r.headers.get("location"), "/?verify=invalid"); ok("bad token -> invalid");
const oldTok = tokenFrom(outbox[0], "token");
assert.equal((await call("GET", "/verify?token=" + oldTok)).headers.get("location"), "/?verify=invalid"); ok("older token is invalidated by the resend");
const tok = tokenFrom(outbox[1], "token");
await pool.query("UPDATE app_users SET verify_expires_at = now() - interval '1 minute'");
assert.match((await call("GET", "/verify?token=" + tok)).headers.get("location"), /verify=expired/); ok("expired token -> expired");
await pool.query("UPDATE app_users SET verify_expires_at = now() + interval '1 day'");
assert.equal((await call("GET", "/verify?token=" + tok)).headers.get("location"), "/?verify=success"); ok("valid token verifies the account");
assert.equal((await call("GET", "/verify?token=" + tok)).headers.get("location"), "/?verify=invalid"); ok("token is single-use");

// --- login
assert.equal((await call("POST", "/login", { email: u.email, password: "wrongpass1" })).status, 401); ok("wrong password rejected");
assert.equal((await call("POST", "/login", { email: "ghost@example.com", password: "wrongpass1" })).status, 401); ok("unknown user gets same error");
assert.equal((await call("GET", "/me")).status, 401); ok("/me unauthenticated -> 401");
r = await call("POST", "/login", { email: "JANE@example.com", password: u.password });
assert.equal(r.status, 200); assert.equal(r.data.user.name, "Jane Doe"); assert.ok(cookie.startsWith("ms_session=")); ok("login succeeds (case-insensitive email), sets cookie");
assert.match(r.headers.get("set-cookie"), /HttpOnly/); ok("session cookie is HttpOnly");
r = await call("GET", "/me"); assert.equal(r.status, 200); assert.equal(r.data.user.email, "jane@example.com"); ok("/me returns the signed-in user");
await call("POST", "/logout", {}); assert.equal((await call("GET", "/me")).status, 401); ok("logout ends the session");

// --- duplicate verified signup
assert.equal((await call("POST", "/signup", u)).status, 409); ok("duplicate verified email -> 409");

// --- Firebase Google sign-in uses verified claims and the same app session
r = await call("POST", "/firebase", { idToken: "invalid-firebase-token-123456" });
assert.equal(r.status, 401); ok("rejects invalid Firebase ID token");
r = await call("POST", "/firebase", { idToken: "mock-firebase-token-new-user-123456" });
assert.equal(r.status, 200); assert.equal(r.data.user.email, "google@example.com"); assert.ok(cookie.startsWith("ms_session="));
let googleUser = (await pool.query("SELECT * FROM app_users WHERE email = $1", ["google@example.com"])).rows[0];
assert.equal(googleUser.email_verified, true); assert.ok(googleUser.password_hash.startsWith("scrypt$"));
ok("Firebase sign-in creates a verified account and issues the app session cookie");
await call("POST", "/logout", {});
const originalPasswordHash = stored.password_hash;
r = await call("POST", "/firebase", { idToken: "mock-firebase-token-existing-123456" });
assert.equal(r.status, 200); assert.equal(r.data.user.id, stored.id);
googleUser = (await pool.query("SELECT * FROM app_users WHERE email = $1", ["jane@example.com"])).rows[0];
assert.equal(googleUser.password_hash, originalPasswordHash);
ok("Firebase sign-in links a verified matching email without replacing its password");
await call("POST", "/logout", {});
r = await call("POST", "/firebase/password-login", { email: "unverified@example.com", password: "PendingPass123" });
assert.equal(r.status, 403); assert.equal(r.data.code, "EMAIL_NOT_VERIFIED");
assert.equal(firebaseVerificationRequests.length, 1); assert.equal(firebaseVerificationRequests[0].continueUrl, "http://test.local/?firebaseVerify=1");
assert.equal((await pool.query("SELECT * FROM app_users WHERE email = $1", ["unverified@example.com"])).rows.length, 0);
assert.equal((await call("GET", "/me")).status, 401);
ok("unverified Firebase account receives Firebase verification mail and gets no database account or app session");
r = await call("POST", "/firebase/password-login", { email: "jane@example.com", password: "FirebasePass123", remember: true });
assert.equal(r.status, 200); assert.equal(r.data.user.id, stored.id); assert.ok(cookie.startsWith("ms_session="));
ok("verified Firebase email/password sign-in creates the normal app session");
await call("POST", "/logout", {});
for (let i = 0; i < 6; i++) r = await call("POST", "/firebase/password-login", { email: "lockout@example.com", password: "WrongPass123" });
assert.equal(r.status, 429); assert.equal(r.data.code, "LOGIN_ATTEMPTS_EXHAUSTED");
r = await call("POST", "/firebase/password-login", { email: "lockout@example.com", password: "WrongPass123" });
assert.equal(r.status, 429); ok("Firebase password login locks after six failures for the 15-minute window");

// --- password reset
const before = outbox.length;
r = await call("POST", "/forgot", { email: "ghost@example.com" });
assert.equal(r.status, 200); assert.equal(outbox.length, before); ok("forgot for unknown email: same response, no mail");
r = await call("POST", "/forgot", { email: u.email });
assert.equal(outbox.length, before + 1); const rt = tokenFrom(outbox.at(-1), "reset"); assert.ok(rt); ok("forgot sends reset email");
await call("POST", "/login", { email: u.email, password: u.password });
assert.equal((await call("POST", "/reset", { token: "nope", password: "newpass123" })).status, 400); ok("reset with bad token rejected");
assert.equal((await call("POST", "/reset", { token: rt, password: "short" })).status, 400); ok("reset enforces password rules");
assert.equal((await call("POST", "/reset", { token: rt, password: "newpass123" })).status, 200); ok("reset with valid token succeeds");
assert.equal((await call("GET", "/me")).status, 401); ok("reset signs out existing sessions");
assert.equal((await call("POST", "/reset", { token: rt, password: "another123" })).status, 400); ok("reset token is single-use");
assert.equal((await call("POST", "/login", { email: u.email, password: u.password })).status, 401); ok("old password no longer works");
assert.equal((await call("POST", "/login", { email: u.email, password: "newpass123" })).status, 200); ok("new password works");

// --- protected movie app + data routes
await call("POST", "/logout", {});
let g = await fetch(base + "/app", { redirect: "manual" });
assert.equal(g.status, 302); assert.equal(g.headers.get("location"), "/"); ok("/app redirects anonymous visitors to the login page");
g = await fetch(base + "/api/movies/popular");
assert.equal(g.status, 401); ok("movie API returns 401 when not logged in");
await call("POST", "/login", { email: u.email, password: "newpass123" });
g = await fetch(base + "/app", { headers: { Cookie: cookie } });
assert.equal(g.status, 200); assert.equal(await g.text(), "MOVIE-APP"); ok("/app opens for a logged-in user");
g = await fetch(base + "/api/movies/popular", { headers: { Cookie: cookie } });
assert.equal(g.status, 200); assert.equal((await g.json()).user, "jane@example.com"); ok("movie API works for a logged-in user");

// --- misc
r = await fetch(base + "/api/auth/login", { method: "POST", headers: { "Content-Type": "text/plain" }, body: "x" });
assert.equal(r.status, 415); ok("non-JSON POST rejected (CSRF hardening)");
for (let i = 0; i < 12; i++) r = await call("POST", "/login", { email: u.email, password: "badbadbad1" });
assert.equal(r.status, 429); ok("login brute-force rate limit kicks in");

console.log(`\nAll ${n} auth checks passed.`);
server.close(); process.exit(0);
