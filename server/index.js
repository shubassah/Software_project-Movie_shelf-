import { createApp } from "./app.js";
import { createMailer, createPool } from "./auth.js";

const port = Number(process.env.PORT || 8000);
const pool = createPool();
if (!pool) console.warn("[server] DATABASE_URL is not set: login is disabled and the movie app stays locked.");
const mailer = createMailer();
if (mailer.mode === "console") console.warn("[server] SMTP_HOST is not set: emails are printed here instead of being sent.");

const app = createApp({ pool, mailer });
app.listen(port, () => console.log(`Movie shelf Express layer listening on http://localhost:${port}`));
