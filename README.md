# Movie Shelf Stack

Browser frontend -> Node/Express application layer -> FastAPI cache service -> Supabase PostgreSQL, TMDB and YouTube.
The refined Movie Shelf login is served from `frontend/movie-shelf-stack/index.html`; it calls the same-origin Express `/api/auth/*` routes. Successful sign-in opens a protected WovenCloth introduction at `/welcome`, then the existing scroll-led Movie Shelf app at `/app`. Provider/database credentials stay server-side in `.env` only.

## Layout

```
.env.example              copy to .env and fill in keys
frontend/movie-shelf-stack/index.html  refined login UI (public entrypoint)
frontend/welcome/                       React/Vite post-login opening page
frontend/welcome-build/                 generated static bundle served only at `/welcome`
frontend/private/app.html              authenticated movie-shelf UI (served only at `/app`)
src/shaders/                            hash-verified original ThreeUI WovenCloth sources
server/index.js           Express layer: proxies /api/* to FastAPI, fixed 10-minute in-memory cache
run_cache_service.py      starts FastAPI (Windows-safe event loop for psycopg async)
cache-service/
  main.py                 routes, loaders, persistence, single-flight de-duplication
  cache.py                cached(session, key, endpoint, ttl_seconds, fetcher), TTL policy
  db.py                   SQLAlchemy async models (api_cache, movie_records, youtube_comments)
  clients.py              TMDB (two API hosts) and YouTube clients
  analysis.py             lexicon sentiment, aspects, pros/cons, verdict
  config.py               settings / .env
tests/test_backend.py     self-test (SQLite + mocked TMDB/YouTube)
```

## Endpoints (Express and FastAPI expose the same paths)

`GET /api/health` · `/api/search?q=` · `/api/movies/popular|now-playing|upcoming|top-rated` ·
`/api/movies/{id}` · `/api/movies/{id}/analysis` · `/api/movies/{id}/full` · `/api/movies/{id}/reviews` · `/api/movies/{id}/trailer`

`/api/health` returns HTTP 503 and lists missing key names (`missing`) until `TMDB_API_KEY` and `YOUTUBE_API_KEY` are set.

## Cache policy (PostgreSQL table `api_cache`: key, endpoint, payload, expires_at, hit_count)

| Data | Interval |
|---|---|
| popular / now-playing / upcoming / top-rated lists | 6 hours |
| search results | 12 hours |
| movie details | 30 days base, dynamic |
| YouTube review analysis | 3 days base, dynamic |
| analysis, movie released within 2 days | cache bypassed |
| analysis, movie released within 3-7 days | 1 hour |
| bounds for every TTL | 30 minutes minimum, 90 days maximum |

Dynamic rule: new (<= 30 days) and popular titles get shorter intervals; old and unpopular titles get longer ones (always clamped).
Express keeps a separate fixed 10-minute in-memory interval (`t_expiry = Date.now() + 10 min`).

## Sentiment method

Deterministic lexicon classifier: sentence score = positive matches - negative matches; neutral sentences are not scored.
`P = 100 * N+ / (N+ + N-)`; `P >= 65` Mostly Positive, `P <= 35` Mostly Negative, otherwise Mixed, no scored sentences -> Not enough data.
Aspects: Acting, Story, Visuals, Music, Pacing (positive/negative counts, up to 3 examples each, pros and cons).

## Production notes

Rotate any TMDB/YouTube keys that were pasted into chat. Use a secret manager or server-only environment variables and never commit `.env`.

## Accounts & login (frontend/movie-shelf-stack/index.html)

Sign up -> verification email -> verify link -> log in. Routes (all under `/api/auth`, JSON):
`POST signup` · `GET verify?token=` · `POST resend-verification` · `POST login` · `GET me` · `POST logout` · `POST forgot` · `POST reset` (the refined login UI is wired to these exact endpoints)

- Users/sessions live in Postgres tables `app_users` and `app_sessions` (created automatically on first start).
- Passwords: scrypt + per-user salt. Verification/reset tokens are random, single-use, and only their SHA-256 hash is stored (24h / 1h expiry).
- Login is blocked until the email is verified. Sessions use an HttpOnly, SameSite=Lax cookie.
- Set `SMTP_*`, `MAIL_FROM` and `APP_URL` in `.env` to send real email. With `SMTP_HOST` empty, links are printed in the Node terminal instead.
- Test (no DB/SMTP needed): `node tests/test_auth.mjs`

### After login
Log in -> redirected to protected `/welcome`, which uses the official `@designcodeio/threeui` WovenCloth component (`variant="washi"`) as an animated opening. Choose **Enter Movie Shelf** or **Skip opening** to continue to `/app`, which serves the original movie shelf (`frontend/private/app.html`) unchanged. `/welcome`, `/app` and the data routes (`/api/search`, `/api/movies/*`, `/api/posters/*`) require a signed-in session; visitors are sent to the login page (pages) or get `401` (API). `frontend/private/` and the generated welcome HTML are not served publicly.

## Security checklist (what is protected and how)

| Area | Protection |
|---|---|
| Passwords | scrypt with per-user salt; min 8 chars with a letter and a number; constant-time compare |
| Email verification | Firebase Auth email/password accounts stay out of the app database and cannot get a session until Firebase verifies the email |
| Password reset | Firebase Auth sends password-reset links; legacy app reset tokens are single-use and expire after 1h |
| Sessions | random token (hash stored), HttpOnly + SameSite=Lax cookie, `Secure` over HTTPS, expired rows purged hourly |
| Brute force / abuse | six failed password attempts per IP+email per 15min; Google sign-in and movie API are rate-limited |
| CSRF | SameSite cookies + JSON-only POSTs + Origin / Sec-Fetch-Site checks |
| Access control | `/app`, `/api/search`, `/api/movies/*`, `/api/posters/*` need a session; fails closed if auth/DB is down |
| Headers | CSP (separate for login and app), HSTS (production), nosniff, frame deny, referrer + permissions policy, no `X-Powered-By` |
| Data exposure | movie UI and secrets are not static files; error details and health info hidden in production; auth + app responses are `no-store` |
| Input limits | 20 KB JSON bodies, numeric movie ids only, 100-char search, bounded in-memory cache |

For production set `NODE_ENV=production`, `APP_URL=https://your-domain`, `TRUST_PROXY=true` (behind a proxy/load balancer) and serve over HTTPS.
Tests: `node tests/test_auth.mjs` and `node tests/test_integration.mjs` (no database, SMTP or API keys needed).


## Setup with the merged login

1. Copy `.env.example` to `.env` and replace each placeholder locally. Use a newly rotated Supabase database password and rotated TMDB/YouTube keys; do not paste credentials into source files or commit `.env`.
2. Install Node/Python dependencies as described in `RUN-IN-VSCODE.md`. Start the FastAPI cache service on port `8100`, then start Express on port `8000`.
3. Run `npm start`. The ZIP includes the built welcome bundle, so Express can serve it without Vite installed in production. If you edit `frontend/welcome/`, run `npm run build:welcome` before restarting. Open `http://localhost:8000`, sign in, and the protected `/welcome` opening appears before the original `/app` experience.

The Express process expects `CACHE_SERVICE_URL` (default `http://127.0.0.1:8100`); it does not read `CINEMA_SERVICE_URL`.

## Firebase sign-in and email verification

Create-account, email/password sign-in, email verification, password reset, and the Google button use Firebase Authentication. Email/password signup sends a Firebase verification link; until the user clicks it, there is no Movie Shelf database account or app session. A password sign-in for an unverified email sends another Firebase verification email and remains blocked. Firebase ID tokens are verified by Express against Google's published signing keys before verified users are linked by email and given the same HttpOnly Postgres-backed session cookie. Six consecutive failed password attempts for the same IP/email are blocked for 15 minutes. No Firebase service-account private key is required. `/api/config/firebase` returns only the public Firebase web-app configuration fields.

The Firebase web configuration is included in `.env.example` under `VITE_FIREBASE_*`; these client values are public configuration, not private server credentials. In Firebase Console, enable **Authentication → Sign-in method → Email/Password** and **Google**, and make sure `localhost` (and your deployed hostname when applicable) is listed under **Authentication → Settings → Authorized domains**. The project still needs a working database for the app session.
