# Run Movie Shelf in VS Code (Windows PowerShell)

Open the `movie-shelf-stack` folder in VS Code, then Terminal > New Terminal (PowerShell).

## One-time setup
```powershell
Copy-Item .env.example .env          # then fill the rotated TMDB_API_KEY, YOUTUBE_API_KEY, and DATABASE_URL
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r cache-service\requirements.txt
npm install
```

## Every time: Terminal 1 (FastAPI cache service)
```powershell
.\.venv\Scripts\python.exe run_cache_service.py
```

## Every time: Terminal 2 (click + in the terminal panel; Node/Express)
```powershell
npm start
```
The project ZIP includes the built WovenCloth page, so `npm start` serves it directly. After editing files under `frontend\welcome`, run `npm run build:welcome` before restarting.

## Firebase setup before testing sign-up

Keep the `VITE_FIREBASE_*` entries in `.env` (copy them from `.env.example` if `.env` was created before the latest update). In Firebase Console, enable **Authentication → Sign-in method → Email/Password** and **Google**, and add `localhost` under **Authentication → Settings → Authorized domains**. New accounts cannot access Movie Shelf until the Firebase verification email link is clicked. The app blocks password sign-in after six failed attempts for the same email/IP for 15 minutes.

## Open / check
- Login: http://localhost:8000
- After successful sign-in: the protected opening page at `/welcome`; choose **Enter Movie Shelf** to continue to the original `/app` experience.
- Health: http://localhost:8000/api/health  (database, tmdb, youtube should all be true; 503 lists what is missing)

## Optional: run the backend self-test
```powershell
.\.venv\Scripts\python.exe -m pip install aiosqlite
.\.venv\Scripts\python.exe tests\test_backend.py
```

## Database URL
Supabase > Project Settings > Database > Connection string (URI). A plain `postgresql://...` URL is fine; the service converts it.
Tables are created automatically on startup.
