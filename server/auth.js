import crypto from "node:crypto";
import { promisify } from "node:util";
import express from "express";
import nodemailer from "nodemailer";
import pg from "pg";
import { createRemoteJWKSet, jwtVerify } from "jose";

const scrypt = promisify(crypto.scrypt);

const SESSION_COOKIE = "ms_session";
const VERIFY_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const RESET_TTL_MS = 60 * 60 * 1000; // 1 hour
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const SESSION_TTL_REMEMBER_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const RESEND_COOLDOWN_MS = 60 * 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FIREBASE_JWKS = createRemoteJWKSet(new URL("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"));

export async function verifyFirebaseIdToken(idToken, projectId) {
  const { payload } = await jwtVerify(idToken, FIREBASE_JWKS, {
    audience: projectId,
    issuer: `https://securetoken.google.com/${projectId}`,
  });
  const now = Math.floor(Date.now() / 1000);
  if (typeof payload.sub !== "string" || payload.sub.length < 1 || payload.sub.length > 128 ||
      typeof payload.iat !== "number" || typeof payload.exp !== "number" ||
      typeof payload.auth_time !== "number" || payload.auth_time > now + 300 ||
      typeof payload.email !== "string" || typeof payload.email_verified !== "boolean") {
    throw new Error("Firebase identity claims are incomplete.");
  }
  return { uid: payload.sub, email: payload.email, emailVerified: payload.email_verified, name: payload.name };
}

async function firebaseIdentityToolkit(apiKey, method, body) {
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/${method}?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(12000),
  });
  const data = await response.json().catch(() => ({}));
  return { ok: response.ok, data };
}

async function defaultFirebasePasswordSignIn({ apiKey, email, password }) {
  return firebaseIdentityToolkit(apiKey, "accounts:signInWithPassword", { email, password, returnSecureToken: true });
}

async function defaultSendFirebaseVerification({ apiKey, idToken, continueUrl }) {
  return firebaseIdentityToolkit(apiKey, "accounts:sendOobCode", { requestType: "VERIFY_EMAIL", idToken, continueUrl });
}

/* ------------------------------------------------------------------ helpers */

const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const newToken = () => crypto.randomBytes(32).toString("base64url");
const normalizeEmail = (value) => String(value || "").trim().toLowerCase();
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const key = await scrypt(password, salt, 64);
  return `scrypt$${salt.toString("base64")}$${key.toString("base64")}`;
}

async function verifyPassword(password, stored) {
  const [scheme, saltB64, keyB64] = String(stored || "").split("$");
  if (scheme !== "scrypt" || !saltB64 || !keyB64) return false;
  const expected = Buffer.from(keyB64, "base64");
  const actual = await scrypt(password, Buffer.from(saltB64, "base64"), expected.length);
  return crypto.timingSafeEqual(expected, actual);
}

function validatePassword(password) {
  if (typeof password !== "string" || password.length < 8) return "Password must be at least 8 characters.";
  if (password.length > 128) return "Password must be 128 characters or fewer.";
  if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) return "Password must contain at least one letter and one number.";
  return null;
}

function parseCookies(header) {
  const out = {};
  for (const part of String(header || "").split(";")) {
    const idx = part.indexOf("=");
    if (idx < 0) continue;
    out[part.slice(0, idx).trim()] = decodeURIComponent(part.slice(idx + 1).trim());
  }
  return out;
}

/** Tiny in-memory rate limiter (per key, sliding window). */
function createLimiter({ windowMs, max }) {
  const hits = new Map();
  return (key) => {
    const now = Date.now();
    const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
    if (recent.length >= max) {
      hits.set(key, recent);
      return false;
    }
    recent.push(now);
    hits.set(key, recent);
    return true;
  };
}

function createFailedAttemptStore({ windowMs, max }) {
  const attempts = new Map();
  const active = (key) => {
    const record = attempts.get(key);
    if (record && record.resetAt <= Date.now()) attempts.delete(key);
    return attempts.get(key);
  };
  return {
    isBlocked(key) { return (active(key)?.count || 0) >= max; },
    fail(key) {
      const record = active(key) || { count: 0, resetAt: Date.now() + windowMs };
      record.count += 1;
      attempts.set(key, record);
      if (attempts.size > 10000) {
        const now = Date.now();
        for (const [entryKey, value] of attempts) if (value.resetAt <= now) attempts.delete(entryKey);
      }
      return record.count;
    },
    clear(key) { attempts.delete(key); },
  };
}

/* -------------------------------------------------------------------- setup */

export function createPool(connectionString = process.env.DATABASE_URL) {
  if (!connectionString) return null;
  const needsSsl = /supabase\.(co|com)|sslmode=require/i.test(connectionString);
  // Strip sslmode from the URL (pg would otherwise override the ssl object below).
  const cleaned = connectionString.replace(/([?&])sslmode=[^&]*&?/i, "$1").replace(/[?&]$/, "");
  return new pg.Pool({
    connectionString: cleaned,
    ssl: needsSsl ? { rejectUnauthorized: false } : undefined,
    max: 5,
    connectionTimeoutMillis: 10000,
  });
}

export function createMailer(env = process.env) {
  const from = env.MAIL_FROM || env.SMTP_USER || "Movie Shelf <no-reply@movieshelf.local>";
  if (!env.SMTP_HOST) {
    // Development fallback: nothing is delivered, the message is printed to the server console.
    const transport = nodemailer.createTransport({ jsonTransport: true });
    return {
      mode: "console",
      async send({ to, subject, text }) {
        await transport.sendMail({ from, to, subject, text });
        console.log(`\n[mail:dev] To: ${to}\n[mail:dev] Subject: ${subject}\n${text}\n`);
      },
    };
  }
  const port = Number(env.SMTP_PORT || 587);
  const transport = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port,
    secure: env.SMTP_SECURE ? env.SMTP_SECURE === "true" : port === 465,
    auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined,
  });
  return {
    mode: "smtp",
    async send({ to, subject, text, html }) {
      await transport.sendMail({ from, to, subject, text, html });
    },
  };
}

function emailTemplate({ heading, intro, buttonLabel, link, footer }) {
  const text = `${heading}\n\n${intro}\n\n${buttonLabel}: ${link}\n\n${footer}`;
  const html = `<!doctype html><html><body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="480" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:16px;padding:36px;">
<tr><td style="font-size:22px;font-weight:700;color:#111;">${escapeHtml(heading)}</td></tr>
<tr><td style="padding:14px 0 26px;font-size:15px;line-height:1.55;color:#444;">${escapeHtml(intro)}</td></tr>
<tr><td><a href="${escapeHtml(link)}" style="display:inline-block;background:#283139;color:#ffffff;text-decoration:none;padding:13px 26px;border-radius:999px;font-size:15px;font-weight:600;">${escapeHtml(buttonLabel)}</a></td></tr>
<tr><td style="padding-top:26px;font-size:12.5px;line-height:1.5;color:#777;">If the button doesn't work, paste this link into your browser:<br><span style="word-break:break-all;color:#2b6cb0;">${escapeHtml(link)}</span></td></tr>
<tr><td style="padding-top:18px;font-size:12.5px;color:#999;">${escapeHtml(footer)}</td></tr>
</table></td></tr></table></body></html>`;
  return { text, html };
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS app_users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  email_verified BOOLEAN NOT NULL DEFAULT FALSE,
  verify_token_hash TEXT,
  verify_expires_at TIMESTAMPTZ,
  verify_sent_at TIMESTAMPTZ,
  reset_token_hash TEXT,
  reset_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS app_sessions (
  token_hash TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES app_users(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS app_saved_movies (
  user_id INTEGER NOT NULL REFERENCES app_users(id) ON DELETE CASCADE,
  movie_key TEXT NOT NULL,
  movie_json TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, movie_key)
);
`;

/* ------------------------------------------------------------------- router */

export function createAuthRouter({ pool, mailer, appUrl, appName = "Movie Shelf", secureCookies = false, firebaseProjectId = process.env.VITE_FIREBASE_PROJECT_ID, firebaseApiKey = process.env.VITE_FIREBASE_API_KEY, verifyFirebaseToken = verifyFirebaseIdToken, firebasePasswordSignIn = defaultFirebasePasswordSignIn, sendFirebaseVerification = defaultSendFirebaseVerification }) {
  const router = express.Router();
  const publicUser = (u) => ({ id: u.id, name: u.name, email: u.email, emailVerified: u.email_verified });
  // Create tables on first use; if the database is unreachable, retry on the next request instead of crashing.
  let schemaReady = null;
  const ready = () => {
    if (!schemaReady) {
      schemaReady = pool.query(SCHEMA).catch((err) => {
        schemaReady = null;
        console.error("[auth] could not create tables:", err.message);
        throw err;
      });
    }
    return schemaReady;
  };
  ready().catch(() => {}); // warm up at startup; failures are logged above
  // Housekeeping: drop expired sessions hourly so the table can't grow forever.
  setInterval(() => { pool.query("DELETE FROM app_sessions WHERE expires_at < $1", [new Date()]).catch(() => {}); }, 60 * 60 * 1000).unref();

  const legacyPasswordFailures = createFailedAttemptStore({ windowMs: 15 * 60 * 1000, max: 6 });
  const firebaseLimiter = createLimiter({ windowMs: 15 * 60 * 1000, max: 20 });
  const firebasePasswordFailures = createFailedAttemptStore({ windowMs: 15 * 60 * 1000, max: 6 });
  const signupLimiter = createLimiter({ windowMs: 60 * 60 * 1000, max: 10 });
  const mailLimiter = createLimiter({ windowMs: 60 * 60 * 1000, max: 5 });

  const wrap = (fn) => (req, res) =>
    ready().then(() => fn(req, res)).catch((err) => {
      console.error("[auth]", err);
      res.status(500).json({ error: "Something went wrong on our side. Please try again." });
    });

  // State-changing requests must be JSON (blocks plain cross-site form posts).
  router.use((req, res, next) => {
    if (req.method === "POST" && !req.is("application/json")) return res.status(415).json({ error: "Content-Type must be application/json." });
    next();
  });

  function setSessionCookie(res, token, ttlMs) {
    const parts = [`${SESSION_COOKIE}=${token}`, "Path=/", "HttpOnly", "SameSite=Lax", `Max-Age=${Math.floor(ttlMs / 1000)}`];
    if (secureCookies) parts.push("Secure");
    res.setHeader("Set-Cookie", parts.join("; "));
  }
  function clearSessionCookie(res) {
    res.setHeader("Set-Cookie", `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secureCookies ? "; Secure" : ""}`);
  }

  async function startSession(res, userId, remember) {
    const token = newToken();
    const ttl = remember ? SESSION_TTL_REMEMBER_MS : SESSION_TTL_MS;
    await pool.query("INSERT INTO app_sessions (token_hash, user_id, expires_at) VALUES ($1, $2, $3)", [sha256(token), userId, new Date(Date.now() + ttl)]);
    setSessionCookie(res, token, ttl);
  }

  async function currentUser(req) {
    const token = parseCookies(req.headers.cookie)[SESSION_COOKIE];
    if (!token) return null;
    const { rows } = await pool.query(
      `SELECT u.* FROM app_sessions s JOIN app_users u ON u.id = s.user_id WHERE s.token_hash = $1 AND s.expires_at > $2`,
      [sha256(token), new Date()],
    );
    return rows[0] || null;
  }

  async function createOrLinkFirebaseUser(identity) {
    const email = normalizeEmail(identity?.email);
    if (!identity?.emailVerified || !EMAIL_RE.test(email) || email.length > 254) return null;
    let user = (await pool.query("SELECT * FROM app_users WHERE email = $1", [email])).rows[0];
    if (user && !user.email_verified) {
      user = (await pool.query(
        "UPDATE app_users SET email_verified = TRUE, verify_token_hash = NULL, verify_expires_at = NULL WHERE id = $1 RETURNING *",
        [user.id],
      )).rows[0];
    }
    if (!user) {
      const name = String(identity.name || "").trim().replace(/\s+/g, " ").slice(0, 80) || email.split("@")[0] || "Movie Shelf User";
      const passwordHash = await hashPassword(`firebase-only-${newToken()}-9a`);
      try {
        user = (await pool.query(
          "INSERT INTO app_users (email, name, password_hash, email_verified) VALUES ($1, $2, $3, TRUE) RETURNING *",
          [email, name, passwordHash],
        )).rows[0];
      } catch (err) {
        if (err.code !== "23505") throw err;
        user = (await pool.query("SELECT * FROM app_users WHERE email = $1", [email])).rows[0];
        if (user && !user.email_verified) {
          user = (await pool.query(
            "UPDATE app_users SET email_verified = TRUE, verify_token_hash = NULL, verify_expires_at = NULL WHERE id = $1 RETURNING *",
            [user.id],
          )).rows[0];
        }
      }
    }
    return user || null;
  }

  async function sendVerificationEmail(user) {
    const token = newToken();
    await pool.query("UPDATE app_users SET verify_token_hash = $1, verify_expires_at = $2, verify_sent_at = $3 WHERE id = $4", [
      sha256(token),
      new Date(Date.now() + VERIFY_TTL_MS),
      new Date(),
      user.id,
    ]);
    const link = `${appUrl}/api/auth/verify?token=${encodeURIComponent(token)}`;
    const body = emailTemplate({
      heading: `Verify your email, ${user.name.split(" ")[0]}`,
      intro: `Welcome to ${appName}! Confirm your email address to activate your account. This link is valid for 24 hours.`,
      buttonLabel: "Verify my email",
      link,
      footer: "If you didn't create this account, you can safely ignore this email.",
    });
    await mailer.send({ to: user.email, subject: `Verify your ${appName} account`, ...body });
  }

  async function sendResetEmail(user) {
    const token = newToken();
    await pool.query("UPDATE app_users SET reset_token_hash = $1, reset_expires_at = $2 WHERE id = $3", [sha256(token), new Date(Date.now() + RESET_TTL_MS), user.id]);
    const link = `${appUrl}/?reset=${encodeURIComponent(token)}`;
    const body = emailTemplate({
      heading: "Reset your password",
      intro: `We received a request to reset your ${appName} password. This link is valid for 1 hour.`,
      buttonLabel: "Choose a new password",
      link,
      footer: "If you didn't request this, you can safely ignore this email — your password won't change.",
    });
    await mailer.send({ to: user.email, subject: `Reset your ${appName} password`, ...body });
  }

  /** Middleware: lets only signed-in users through. `{ page: true }` redirects browsers to the login page instead of returning JSON. */
  router.requireAuth = ({ page = false } = {}) => async (req, res, next) => {
    try {
      await ready();
      const user = await currentUser(req);
      if (user) { req.user = user; return next(); }
      if (page) return res.redirect("/");
      return res.status(401).json({ error: "Please log in to continue.", code: "AUTH_REQUIRED" });
    } catch (err) {
      console.error("[auth] guard error:", err.message);
      return res.status(503).json({ error: "Authentication service is unavailable right now." });
    }
  };

  const delivery = () => (mailer.mode === "console" ? "console" : "smtp");

  /* ---- sign up ---- */
  router.post("/signup", wrap(async (req, res) => {
    if (!signupLimiter(req.ip)) return res.status(429).json({ error: "Too many sign-up attempts. Please try again later." });
    const name = String(req.body?.name || "").trim().replace(/\s+/g, " ");
    const email = normalizeEmail(req.body?.email);
    const password = req.body?.password;
    if (name.length < 2 || name.length > 80) return res.status(400).json({ error: "Please enter your name (2–80 characters).", field: "name" });
    if (!EMAIL_RE.test(email) || email.length > 254) return res.status(400).json({ error: "Please enter a valid email address.", field: "email" });
    const pwError = validatePassword(password);
    if (pwError) return res.status(400).json({ error: pwError, field: "password" });

    const existing = (await pool.query("SELECT * FROM app_users WHERE email = $1", [email])).rows[0];
    if (existing) {
      if (!existing.email_verified) {
        // Account was created but never confirmed: let them finish instead of locking the address.
        const cooledDown = !existing.verify_sent_at || Date.now() - new Date(existing.verify_sent_at).getTime() > RESEND_COOLDOWN_MS;
        let emailSent = false;
        if (cooledDown && mailLimiter(email)) {
          try { await sendVerificationEmail(existing); emailSent = true; } catch (err) { console.error("[auth] mail failed:", err.message); }
        }
        return res.status(200).json({ ok: true, pending: true, emailSent, delivery: delivery(), message: "This email is already registered but not verified yet. We've sent a fresh verification link." });
      }
      return res.status(409).json({ error: "An account with this email already exists. Try logging in instead.", field: "email" });
    }

    const passwordHash = await hashPassword(password);
    let user;
    try {
      user = (await pool.query("INSERT INTO app_users (email, name, password_hash) VALUES ($1, $2, $3) RETURNING *", [email, name, passwordHash])).rows[0];
    } catch (err) {
      if (err.code === "23505") return res.status(409).json({ error: "An account with this email already exists. Try logging in instead.", field: "email" });
      throw err;
    }
    let emailSent = false;
    try {
      await sendVerificationEmail(user);
      emailSent = true;
    } catch (err) {
      console.error("[auth] verification mail failed:", err.message);
    }
    res.status(201).json({
      ok: true,
      pending: true,
      emailSent,
      delivery: delivery(),
      message: emailSent ? "Account created! Check your inbox for the verification link." : "Account created, but we couldn't send the verification email. Use “Resend” to try again.",
    });
  }));

  /* ---- verify email (opened from the link in the email) ---- */
  router.get("/verify", wrap(async (req, res) => {
    const token = String(req.query.token || "");
    if (!token) return res.redirect("/?verify=invalid");
    const { rows } = await pool.query("SELECT * FROM app_users WHERE verify_token_hash = $1", [sha256(token)]);
    const user = rows[0];
    if (!user) return res.redirect("/?verify=invalid");
    if (user.email_verified) return res.redirect("/?verify=already");
    if (!user.verify_expires_at || new Date(user.verify_expires_at).getTime() < Date.now()) return res.redirect(`/?verify=expired&email=${encodeURIComponent(user.email)}`);
    await pool.query("UPDATE app_users SET email_verified = TRUE, verify_token_hash = NULL, verify_expires_at = NULL WHERE id = $1", [user.id]);
    res.redirect("/?verify=success");
  }));

  /* ---- resend verification ---- */
  router.post("/resend-verification", wrap(async (req, res) => {
    const email = normalizeEmail(req.body?.email);
    const generic = { ok: true, delivery: delivery(), message: "If that account exists and isn't verified yet, a new verification link is on its way." };
    if (!EMAIL_RE.test(email)) return res.status(400).json({ error: "Please enter a valid email address.", field: "email" });
    if (!mailLimiter(email)) return res.status(429).json({ error: "Too many emails requested. Please wait a while and try again." });
    const user = (await pool.query("SELECT * FROM app_users WHERE email = $1", [email])).rows[0];
    if (user && !user.email_verified) {
      if (user.verify_sent_at && Date.now() - new Date(user.verify_sent_at).getTime() < RESEND_COOLDOWN_MS) {
        return res.status(429).json({ error: "A verification email was just sent. Please wait a minute before requesting another." });
      }
      try { await sendVerificationEmail(user); } catch (err) { console.error("[auth] mail failed:", err.message); return res.status(502).json({ error: "We couldn't send the email right now. Please try again shortly." }); }
    }
    res.json(generic);
  }));

  /* ---- log in ---- */
  router.post("/login", wrap(async (req, res) => {
    const email = normalizeEmail(req.body?.email);
    const password = req.body?.password;
    if (!EMAIL_RE.test(email) || typeof password !== "string" || !password) return res.status(400).json({ error: "Enter your email and password." });
    const attemptKey = `${req.ip || "unknown"}|${email}`;
    if (legacyPasswordFailures.isBlocked(attemptKey)) return res.status(429).json({ error: "Six sign-in attempts have failed. Try again in 15 minutes." });
    const user = (await pool.query("SELECT * FROM app_users WHERE email = $1", [email])).rows[0];
    // Always run a hash comparison so timing doesn't reveal whether the account exists.
    const ok = await verifyPassword(password, user ? user.password_hash : "scrypt$AAAAAAAAAAAAAAAAAAAAAA==$" + Buffer.alloc(64).toString("base64"));
    if (!user || !ok) {
      const failures = legacyPasswordFailures.fail(attemptKey);
      if (failures >= 6) return res.status(429).json({ error: "Six sign-in attempts have failed. Try again in 15 minutes." });
      return res.status(401).json({ error: "Incorrect email or password.", attemptsRemaining: 6 - failures });
    }
    legacyPasswordFailures.clear(attemptKey);
    if (!user.email_verified) return res.status(403).json({ error: "Please verify your email before logging in. Check your inbox for the link.", code: "EMAIL_NOT_VERIFIED", email: user.email });
    await startSession(res, user.id, Boolean(req.body?.remember));
    res.json({ ok: true, user: publicUser(user) });
  }));

  /* ---- Firebase password sign-in: six failed tries per email/IP in a 15-minute window ---- */
  router.post("/firebase/password-login", wrap(async (req, res) => {
    if (!firebaseProjectId || !firebaseApiKey) return res.status(503).json({ error: "Firebase email sign-in is not configured on this server." });
    const email = normalizeEmail(req.body?.email);
    const password = req.body?.password;
    if (!EMAIL_RE.test(email) || email.length > 254 || typeof password !== "string" || !password || password.length > 128) {
      return res.status(400).json({ error: "Enter a valid email address and password." });
    }
    const attemptKey = `${req.ip || "unknown"}|${email}`;
    if (firebasePasswordFailures.isBlocked(attemptKey)) {
      return res.status(429).json({ error: "Six sign-in attempts have failed. Try again in 15 minutes." });
    }
    let signIn;
    try { signIn = await firebasePasswordSignIn({ apiKey: firebaseApiKey, email, password }); }
    catch { return res.status(502).json({ error: "Firebase sign-in is temporarily unavailable. Please try again." }); }
    if (!signIn?.ok || typeof signIn.data?.idToken !== "string") {
      const firebaseCode = String(signIn?.data?.error?.message || "");
      if (["INVALID_LOGIN_CREDENTIALS", "EMAIL_NOT_FOUND", "INVALID_PASSWORD", "INVALID_EMAIL", "USER_DISABLED"].includes(firebaseCode)) {
        const failures = firebasePasswordFailures.fail(attemptKey);
        if (failures >= 6) return res.status(429).json({ error: "Six sign-in attempts have failed. Try again in 15 minutes.", code: "LOGIN_ATTEMPTS_EXHAUSTED" });
        return res.status(401).json({ error: "Incorrect email or password.", attemptsRemaining: 6 - failures });
      }
      return res.status(502).json({ error: "Firebase could not complete sign-in. Check the Firebase Authentication setup." });
    }

    let identity;
    try { identity = await verifyFirebaseToken(signIn.data.idToken, firebaseProjectId); }
    catch { return res.status(401).json({ error: "Firebase sign-in could not be verified. Please try again." }); }
    if (normalizeEmail(identity?.email) !== email) return res.status(401).json({ error: "Firebase sign-in could not be verified. Please try again." });
    firebasePasswordFailures.clear(attemptKey);

    if (!identity.emailVerified) {
      try {
        const sent = await sendFirebaseVerification({
          apiKey: firebaseApiKey,
          idToken: signIn.data.idToken,
          continueUrl: `${appUrl}/?firebaseVerify=1`,
        });
        if (!sent?.ok) throw new Error("Firebase did not send the verification email.");
      } catch {
        return res.status(502).json({ error: "Your email is not verified yet, and Firebase could not send a verification email. Please try again." });
      }
      return res.status(403).json({ code: "EMAIL_NOT_VERIFIED", error: "Firebase sent a verification link. Click it before signing in; no Movie Shelf account session has been created yet." });
    }

    const user = await createOrLinkFirebaseUser(identity);
    if (!user) return res.status(401).json({ error: "Firebase sign-in requires a verified email address." });
    await startSession(res, user.id, Boolean(req.body?.remember));
    res.json({ ok: true, user: publicUser(user) });
  }));

  /* ---- Firebase Google sign-in; verify the ID token, then issue our own session cookie ---- */
  router.post("/firebase", wrap(async (req, res) => {
    if (!firebaseProjectId) return res.status(503).json({ error: "Google sign-in is not configured on this server." });
    const idToken = req.body?.idToken;
    if (typeof idToken !== "string" || idToken.length < 20 || idToken.length > 12000) {
      return res.status(400).json({ error: "A valid Firebase ID token is required." });
    }
    if (!firebaseLimiter(req.ip)) return res.status(429).json({ error: "Too many Google sign-in attempts. Please try again later." });
    let identity;
    try { identity = await verifyFirebaseToken(idToken, firebaseProjectId); }
    catch { return res.status(401).json({ error: "Google sign-in could not be verified. Please try again." }); }
    const user = await createOrLinkFirebaseUser(identity);
    if (!user) return res.status(401).json({ error: "Google sign-in requires a verified email address." });
    await startSession(res, user.id, false);
    res.json({ ok: true, user: publicUser(user) });
  }));

  /* ---- session ---- */
  router.get("/me", wrap(async (req, res) => {
    const user = await currentUser(req);
    if (!user) return res.status(401).json({ error: "Not signed in." });
    res.json({ user: publicUser(user) });
  }));

  router.post("/logout", wrap(async (req, res) => {
    const token = parseCookies(req.headers.cookie)[SESSION_COOKIE];
    if (token) await pool.query("DELETE FROM app_sessions WHERE token_hash = $1", [sha256(token)]);
    clearSessionCookie(res);
    res.json({ ok: true });
  }));

  /* ---- forgot / reset password ---- */
  router.post("/forgot", wrap(async (req, res) => {
    const email = normalizeEmail(req.body?.email);
    if (!EMAIL_RE.test(email)) return res.status(400).json({ error: "Please enter a valid email address.", field: "email" });
    if (!mailLimiter(`reset|${email}`)) return res.status(429).json({ error: "Too many requests. Please wait a while and try again." });
    const user = (await pool.query("SELECT * FROM app_users WHERE email = $1", [email])).rows[0];
    if (user) {
      try { await sendResetEmail(user); } catch (err) { console.error("[auth] reset mail failed:", err.message); }
    }
    res.json({ ok: true, delivery: delivery(), message: "If an account exists for that email, a password reset link is on its way." });
  }));

  router.post("/reset", wrap(async (req, res) => {
    const token = String(req.body?.token || "");
    const pwError = validatePassword(req.body?.password);
    if (pwError) return res.status(400).json({ error: pwError, field: "password" });
    const user = token ? (await pool.query("SELECT * FROM app_users WHERE reset_token_hash = $1", [sha256(token)])).rows[0] : null;
    if (!user || !user.reset_expires_at || new Date(user.reset_expires_at).getTime() < Date.now()) {
      return res.status(400).json({ error: "This reset link is invalid or has expired. Please request a new one.", code: "RESET_INVALID" });
    }
    const passwordHash = await hashPassword(req.body.password);
    // Having read the email proves ownership of the address, so mark it verified too.
    await pool.query("UPDATE app_users SET password_hash = $1, reset_token_hash = NULL, reset_expires_at = NULL, email_verified = TRUE WHERE id = $2", [passwordHash, user.id]);
    await pool.query("DELETE FROM app_sessions WHERE user_id = $1", [user.id]); // sign out everywhere
    res.json({ ok: true, message: "Password updated. You can log in with your new password." });
  }));

  router.use((req, res) => res.status(404).json({ error: "Not found." }));
  return router;
}
