import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createAuthRouter } from "./auth.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/* ---------------------------------------------------------------- security headers */

const CSP_LOGIN = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.gstatic.com https://apis.google.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data:",
  "media-src 'self' https://d8j0ntlcm91z4.cloudfront.net",
  "connect-src 'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://www.googleapis.com",
  "frame-src 'self' https://*.firebaseapp.com https://*.web.app https://accounts.google.com",
  "frame-ancestors 'none'", "base-uri 'none'", "form-action 'self'", "object-src 'none'",
].join("; ");

const CSP_APP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://image.tmdb.org",
  "media-src 'self' data: blob:",
  "connect-src 'self'",
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
  "frame-ancestors 'none'", "base-uri 'none'", "form-action 'self'", "object-src 'none'",
].join("; ");

// The woven-cloth loading curtain is a decorative three.js page that /app embeds in a sandboxed iframe.
const CURTAIN_PATH = "/landing-pages/woven-cloth-washi.html";
const CSP_CURTAIN = [
  "default-src 'none'",
  "script-src 'unsafe-inline' https://cdn.jsdelivr.net",
  "style-src 'unsafe-inline'",
  "img-src data: blob:",
  "connect-src https://cdn.jsdelivr.net",
  "frame-ancestors 'self'", "base-uri 'none'", "form-action 'none'", "object-src 'none'",
].join("; ");

function securityHeaders({ isProd }) {
  return (req, res, next) => {
    const appPage = ["/app", "/app/", "/welcome", "/welcome/"].includes(req.path);
    const curtain = req.path === CURTAIN_PATH;
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", curtain ? "SAMEORIGIN" : "DENY");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
    res.setHeader("Cross-Origin-Opener-Policy", appPage ? "same-origin" : "same-origin-allow-popups");
    res.setHeader("Content-Security-Policy", curtain ? CSP_CURTAIN : appPage ? CSP_APP : CSP_LOGIN);
    if (isProd) res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    next();
  };
}

/** Per-key fixed-window limiter returning Express middleware. */
function rateLimit({ windowMs, max, key, message }) {
  const hits = new Map();
  setInterval(() => { const now = Date.now(); for (const [k, v] of hits) if (v.reset <= now) hits.delete(k); }, windowMs).unref();
  return (req, res, next) => {
    const k = key(req); const now = Date.now();
    let h = hits.get(k);
    if (!h || h.reset <= now) { h = { count: 0, reset: now + windowMs }; hits.set(k, h); }
    if (++h.count > max) {
      res.setHeader("Retry-After", Math.ceil((h.reset - now) / 1000));
      return res.status(429).json({ error: message || "Too many requests. Please slow down." });
    }
    next();
  };
}

/* -------------------------------------------------------------------------- the app */

export function createApp({ pool, mailer, env = process.env, createAuth = createAuthRouter }) {
  const app = express();
  const port = Number(env.PORT || 8000);
  const isProd = env.NODE_ENV === "production";
  const cacheServiceUrl = (env.CACHE_SERVICE_URL || "http://127.0.0.1:8100").replace(/\/$/, "");
  const appUrl = (env.APP_URL || `http://localhost:${port}`).replace(/\/$/, "");
  const frontendDir = path.join(root, "frontend/movie-shelf-stack"); // public: login page only
  const privateDir = path.join(root, "frontend/private"); // movie UI, only via guarded /app
  const welcomeDir = path.join(root, "frontend/welcome-build"); // automatic post-login intro, only via guarded /welcome
  const firebaseConfig = {
    apiKey: env.VITE_FIREBASE_API_KEY || "",
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "",
    projectId: env.VITE_FIREBASE_PROJECT_ID || "",
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: env.VITE_FIREBASE_APP_ID || "",
  };
  const firebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
  const allowedOrigins = new Set((env.CORS_ORIGINS || "http://localhost:3000").split(",").map((v) => v.trim()).filter(Boolean));
  const trustedHosts = new Set([new URL(appUrl).host, ...[...allowedOrigins].map((o) => { try { return new URL(o).host; } catch { return ""; } })]);

  app.disable("x-powered-by");
  if (env.TRUST_PROXY) app.set("trust proxy", env.TRUST_PROXY === "true" ? 1 : env.TRUST_PROXY);
  app.use(securityHeaders({ isProd }));
  app.use(express.json({ limit: "20kb" }));

  // CORS: only explicitly allowed origins, with credentials.
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    res.setHeader("Vary", "Origin");
    if (origin && allowedOrigins.has(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Credentials", "true");
    }
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    if (req.method === "OPTIONS") return res.sendStatus(204);
    next();
  });

  // CSRF defence in depth (on top of SameSite=Lax cookies and JSON-only POSTs):
  // refuse state-changing requests that a browser says came from another site.
  app.use((req, res, next) => {
    if (!["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) return next();
    const site = req.headers["sec-fetch-site"];
    if (site === "cross-site") return res.status(403).json({ error: "Cross-site request blocked." });
    const origin = req.headers.origin;
    if (origin) {
      let host = ""; try { host = new URL(origin).host; } catch {}
      if (host !== req.headers.host && !trustedHosts.has(host)) return res.status(403).json({ error: "Cross-site request blocked." });
    }
    next();
  });

  // Firebase web configuration is public by design; return only the allowlisted client fields.
  app.get("/api/config/firebase", (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.json({ configured: firebaseConfigured, firebaseConfig: firebaseConfigured ? firebaseConfig : null });
  });

  /* ---- authentication ---- */
  let authRouter = null;
  if (pool) {
    authRouter = createAuth({ pool, mailer, appUrl, appName: env.APP_NAME || "Movie Shelf", secureCookies: isProd || appUrl.startsWith("https://"), firebaseProjectId: env.VITE_FIREBASE_PROJECT_ID, firebaseApiKey: env.VITE_FIREBASE_API_KEY });
    app.use("/api/auth", (req, res, next) => { res.setHeader("Cache-Control", "no-store"); next(); }, authRouter);
  } else {
    app.use("/api/auth", (req, res) => res.status(503).json({ error: "Authentication is unavailable: DATABASE_URL is not set." }));
  }
  // Fail closed: without a working auth layer nobody gets into the movie app or its data.
  const unavailable = (req, res) => res.status(503).json({ error: "Authentication is unavailable: DATABASE_URL is not set." });
  const requireApi = authRouter ? authRouter.requireAuth() : unavailable;
  const requirePage = authRouter ? authRouter.requireAuth({ page: true }) : unavailable;
  // Per signed-in user: protects your TMDB/YouTube quota from abuse.
  const perUser = rateLimit({ windowMs: 60_000, max: 240, key: (req) => `u${req.user?.id ?? req.ip}`, message: "You're sending requests too quickly. Please wait a moment." });
  app.use(["/api/search", "/api/movies", "/api/posters"], requireApi, perUser, (req, res, next) => { res.setHeader("Cache-Control", "private, no-store"); next(); });

  /* ---- account-scoped saved collection ---- */
  const collectionKey = (movie) => String(movie?.tmdb_id || movie?.id || movie?.title || "").trim().toLowerCase().slice(0, 160);
  const cleanMovie = (movie) => {
    const allowed = ["id", "tmdb_id", "title", "poster_url", "overview", "release_date", "ratingText"];
    const out = {};
    for (const field of allowed) if (movie && movie[field] !== undefined && movie[field] !== null) out[field] = String(movie[field]).slice(0, 4000);
    return out;
  };
  app.get("/api/collection", requireApi, async (req, res, next) => {
    try {
      const { rows } = await pool.query("SELECT movie_json FROM app_saved_movies WHERE user_id = $1 ORDER BY updated_at DESC", [req.user.id]);
      const movies = rows.flatMap((row) => { try { const movie = JSON.parse(row.movie_json); return collectionKey(movie) ? [movie] : []; } catch { return []; } });
      res.setHeader("Cache-Control", "private, no-store");
      res.json({ movies });
    } catch (error) { next(error); }
  });
  app.post("/api/collection", requireApi, async (req, res, next) => {
    try {
      const movie = cleanMovie(req.body?.movie);
      const key = collectionKey(movie);
      if (!key || !movie.title) return res.status(400).json({ error: "A movie with a title is required." });
      await pool.query(
        `INSERT INTO app_saved_movies (user_id, movie_key, movie_json, updated_at) VALUES ($1, $2, $3, now())
         ON CONFLICT (user_id, movie_key) DO UPDATE SET movie_json = EXCLUDED.movie_json, updated_at = now()`,
        [req.user.id, key, JSON.stringify(movie)],
      );
      res.setHeader("Cache-Control", "private, no-store");
      res.status(201).json({ ok: true, movie });
    } catch (error) { next(error); }
  });
  app.delete("/api/collection/:key", requireApi, async (req, res, next) => {
    try {
      const key = String(req.params.key || "").trim().toLowerCase().slice(0, 160);
      await pool.query("DELETE FROM app_saved_movies WHERE user_id = $1 AND movie_key = $2", [req.user.id, key]);
      res.setHeader("Cache-Control", "private, no-store");
      res.json({ ok: true });
    } catch (error) { next(error); }
  });
  app.delete("/api/collection", requireApi, async (req, res, next) => {
    try {
      await pool.query("DELETE FROM app_saved_movies WHERE user_id = $1", [req.user.id]);
      res.setHeader("Cache-Control", "private, no-store");
      res.json({ ok: true });
    } catch (error) { next(error); }
  });

  // The welcome flag is the automatic post-login opening; it redirects itself to /app when ready.
  app.use("/welcome/assets", requirePage, express.static(path.join(welcomeDir, "assets"), { dotfiles: "deny", maxAge: "1h" }));
  app.get(["/welcome", "/welcome/"], requirePage, (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.sendFile(path.join(welcomeDir, "index.html"), { dotfiles: "deny" });
  });
  app.get(CURTAIN_PATH, (req, res) => {
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.sendFile(path.join(root, "src/shaders/woven-cloth/woven-cloth-washi.html"), { dotfiles: "deny" });
  });

  app.get(["/app", "/app/"], requirePage, (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.sendFile(path.join(privateDir, "app.html"), { dotfiles: "deny" });
  });

  /* ---- proxy to the FastAPI cache service ---- */
  const CACHE_TTL = 10 * 60 * 1000; // fixed 10-minute in-memory interval
  const CACHE_MAX = 500; // bounded so arbitrary search strings can't exhaust memory
  const cache = new Map();
  const cacheGet = (key) => { const it = cache.get(key); return it && it.expires > Date.now() ? it.value : null; };
  const cacheSet = (key, value) => {
    if (cache.size >= CACHE_MAX) cache.delete(cache.keys().next().value);
    cache.set(key, { expires: Date.now() + CACHE_TTL, value });
  };

  async function cacheRequest(endpoint) {
    const response = await fetch(`${cacheServiceUrl}${endpoint}`, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(30_000) });
    const body = await response.text();
    if (!response.ok) { const error = new Error(body || `Cache service returned ${response.status}`); error.status = response.status; throw error; }
    return { status: response.status, body, contentType: response.headers.get("content-type") || "application/json" };
  }

  async function proxyJson(req, res, endpoint) {
    try {
      const hit = cacheGet(endpoint);
      if (hit) return res.status(hit.status).type(hit.contentType).send(hit.body);
      const result = await cacheRequest(endpoint);
      cacheSet(endpoint, result);
      res.status(result.status).type(result.contentType).send(result.body);
    } catch (error) {
      const status = error.status && error.status < 600 ? error.status : 502;
      // Internal details (upstream URLs, stack text) are only shown outside production.
      res.status(status).json({ error: "Cache service unavailable", ...(isProd ? {} : { detail: error.message }) });
    }
  }

  async function healthHandler(req, res) {
    try {
      const response = await fetch(`${cacheServiceUrl}/api/health`, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(5000) });
      const text = await response.text();
      if (isProd) return res.status(response.status).json({ ok: response.ok });
      res.status(response.status).type(response.headers.get("content-type") || "application/json").send(text);
    } catch (error) {
      res.status(502).json({ ok: false, error: "Cache service unavailable", ...(isProd ? {} : { detail: error.message }) });
    }
  }
  app.get("/health", healthHandler);
  app.get("/api/health", healthHandler);

  app.get("/api/search", (req, res) => {
    const q = String(req.query.q || "").trim().slice(0, 100);
    if (!q) return res.status(400).json({ error: "Missing search query." });
    const page = Math.min(Math.max(parseInt(req.query.page, 10) || 1, 1), 50);
    proxyJson(req, res, `/api/search?${new URLSearchParams({ q, page: String(page) })}`);
  });

  const pageNo = (req) => Math.min(Math.max(parseInt(req.query.page, 10) || 1, 1), 50);
  for (const list of ["popular", "now-playing", "upcoming", "top-rated"]) {
    app.get(`/api/movies/${list}`, (req, res) => proxyJson(req, res, `/api/movies/${list}?page=${pageNo(req)}`));
  }
  const validId = (req, res, next) => (/^\d{1,10}$/.test(req.params.id) ? next() : res.status(400).json({ error: "Invalid movie id." }));
  for (const suffix of ["full", "analysis", "reviews", "trailer"]) {
    app.get(`/api/movies/:id/${suffix}`, validId, (req, res) => proxyJson(req, res, `/api/movies/${req.params.id}/${suffix}`));
  }
  app.get("/api/movies/:id", validId, (req, res) => proxyJson(req, res, `/api/movies/${req.params.id}`));

  app.get("/api/posters/:filename", async (req, res) => {
    const filename = path.basename(req.params.filename);
    if (!/^[A-Za-z0-9_-]+\.(jpg|jpeg|png|webp)$/i.test(filename)) return res.sendStatus(400);
    try {
      const upstream = await fetch(`https://image.tmdb.org/t/p/w500/${filename}`, { signal: AbortSignal.timeout(15_000) });
      if (!upstream.ok) return res.sendStatus(upstream.status);
      res.setHeader("Content-Type", upstream.headers.get("content-type") || "image/jpeg");
      res.setHeader("Cache-Control", "private, max-age=2592000, immutable");
      res.send(Buffer.from(await upstream.arrayBuffer()));
    } catch { res.sendStatus(502); }
  });

  /* ---- public files: login page + its fonts ---- */
  app.use("/fonts/inter", express.static(path.join(root, "node_modules/@fontsource/inter/files"), { maxAge: "30d" }));
  app.use(express.static(frontendDir, { extensions: ["html"], dotfiles: "deny", index: "index.html" }));
  app.use("/api", (req, res) => res.status(404).json({ error: "Not found." }));
  app.get("/{*splat}", (req, res) => res.sendFile(path.join(frontendDir, "index.html"), { dotfiles: "deny" }));

  // Last-resort error handler: never leak stack traces.
  app.use((err, req, res, next) => {
    if (err?.type === "entity.too.large") return res.status(413).json({ error: "Request too large." });
    if (err?.type === "entity.parse.failed") return res.status(400).json({ error: "Invalid JSON." });
    console.error("[server]", err);
    res.status(500).json({ error: "Internal server error." });
  });

  return app;
}
