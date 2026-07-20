# Deploying to Dokploy

This app deploys to Dokploy as **one Docker Compose application** (`app` + `minio`) plus **one Dokploy-managed Postgres database**. The `app` container serves both the API and the built frontend from a single Express process — no separate static-site service needed.

Files involved:
- `Dockerfile` — multi-stage build (Vite frontend → `dist/client`, tsc backend → `dist/server`), final image just runs `node dist/server/index.js`.
- `docker-compose.dokploy.yml` — the stack Dokploy deploys (`app`, `minio`).
- `.dockerignore` — keeps the build context small (excludes the raw markdown note sources, dev scripts, etc.).

> The existing root `docker-compose.yml` is unrelated — that's a local-dev-only convenience for running Postgres/MinIO on your machine. Dokploy uses `docker-compose.dokploy.yml`.

---

## 1. Prerequisites

- A Dokploy instance you can log into, with a server that has enough RAM to build the frontend (the Vite build alone briefly uses a few hundred MB — 1GB+ free is comfortable).
- This repo pushed to a Git remote Dokploy can pull from (GitHub/GitLab/a Dokploy-connected Git provider).
- A LiveKit Cloud project (URL + API key/secret) if you want live classes to work — or leave those blank to ship without that feature.
- Gmail (or other SMTP) app-password if you want credential/OTP emails to actually send.
- A Gemini API key if you want the AI Tutor/Quiz generator to use real AI instead of the local mock fallback.

---

## 2. Create the Postgres database in Dokploy

In your Dokploy project: **Create → Database → PostgreSQL**.

- Name it something like `lms-db`.
- Pick a strong password (Dokploy will generate or let you set one).
- Deploy it.

Once it's running, open its **Connection** details. You'll see an **internal** connection string (something like `postgresql://user:pass@lms-db:5432/lms_db` — resolvable only from other containers in the same Dokploy project) and usually an option to expose an **external** host:port for connecting from outside.

- Use the **internal** URL for `DATABASE_URL` and `DIRECT_URL` in the app's environment (step 4) — the app talks to Postgres over Dokploy's internal Docker network, never over the public internet.
- You'll temporarily need **external** access once, in step 6, to push the schema and seed the admin user. Dokploy lets you toggle external access on/off per database — turn it off again afterward if you don't need ongoing external DB access.

---

## 3. Create the Compose application

In the same Dokploy project: **Create → Application → Docker Compose** (or "Compose" depending on your Dokploy version).

- Point it at this Git repo/branch.
- Set the **Compose file path** to `docker-compose.dokploy.yml`.
- Leave build context as the repo root.

Don't deploy yet — set environment variables first (next step), since `VITE_LIVEKIT_URL` is baked in at build time and won't take effect on a later redeploy without a rebuild.

---

## 4. Environment variables

In the application's **Environment** tab, set:

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | Yes | Internal connection string from step 2 |
| `DIRECT_URL` | Yes | Same as `DATABASE_URL` unless you're pooling through something like pgbouncer |
| `JWT_SECRET` | Yes | Long random string. **The app refuses to start in production without this.** Generate one with `openssl rand -base64 48` |
| `ALLOWED_ORIGINS` | Yes | Your public domain(s), comma-separated, e.g. `https://lms.yourdomain.com`. **Without this, the app blocks all cross-origin requests in production** — see troubleshooting below if you're testing across domains |
| `MINIO_ACCESS_KEY` | Yes | Pick a value — becomes MinIO's root user |
| `MINIO_SECRET_KEY` | Yes | Pick a strong value — becomes MinIO's root password |
| `MINIO_BUCKET` | No | Defaults to `lms-files` |
| `VITE_LIVEKIT_URL` | Only if using live classes | **Build-time.** Baked into the frontend bundle — changing it later requires a rebuild, not just a restart |
| `LIVEKIT_URL` / `LIVEKIT_API_KEY` / `LIVEKIT_API_SECRET` | Only if using live classes | Runtime — from your LiveKit Cloud project |
| `GEMINI_API_KEY` | No | Falls back to a public third-party AI (pollinations.ai) or a local canned response if unset — see `ENABLE_PUBLIC_AI_FALLBACK` below |
| `ENABLE_PUBLIC_AI_FALLBACK` | No | Defaults to `false` in production. Set to `true` only if you're OK with student questions/attachments being sent to an unauthenticated public API when Gemini is unavailable |
| `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | No | Gmail app-password recommended. Without these, teacher/admin account creation and password-reset emails silently fail to send (the app logs it, doesn't crash) |

A couple of things worth internalizing before you fill these in:

- **Build-time vs. runtime**: only `VITE_LIVEKIT_URL` matters at *build* time (it's read via `import.meta.env` and compiled into the JS bundle). Everything else is read at container *start*. This is why the compose file passes it through `build.args` instead of just `environment`.
- **You don't need `VITE_API_URL`.** The frontend auto-detects the API origin from `window.location.origin` at runtime, since the same container serves both — this only matters if you ever split the frontend onto a different domain than the API.

---

## 5. First deploy

Deploy the application. Watch the build logs — the image build runs the full `npm run build` (frontend + backend), so the first build takes a few minutes. Once it's up, the container's healthcheck hits `/api/health` internally.

Set a **Domain** in Dokploy pointing at service `app`, port `3000`. (Optional: a second domain pointed at service `minio`, port `9001`, if you want to browse the MinIO console — otherwise leave MinIO unexposed to the public internet.)

At this point the app is reachable, but the database has no schema or data yet — `GET /api/health` will work, but everything else will fail against an empty database.

---

## 6. Push the schema and seed the admin user

The production image deliberately doesn't ship the Prisma CLI or dev tooling (kept out of the runtime image on purpose — smaller image, smaller attack surface). Run the schema push and seed from your own machine instead, pointed at the production database:

1. In Dokploy, temporarily enable **external access** on the `lms-db` database (step 2) and copy the external connection string it gives you.
2. On your machine, in this repo:
   ```bash
   DATABASE_URL="<external connection string>" DIRECT_URL="<same>" npx prisma db push
   DATABASE_URL="<external connection string>" DIRECT_URL="<same>" npx prisma db seed
   ```
3. Confirm you see `Admin seeded: admin@nexoralearning.com` in the seed output.
4. Turn external access back off on the database if you don't need it ongoing.

You now have an admin login: `admin@nexoralearning.com` / `password123` (change this password on first login — it's a documented default, not a secret).

Whenever you change `prisma/schema.prisma` later, repeat step 2 (`prisma db push`) the same way before/after deploying the new app version.

---

## 7. Verify

- `https://<your-domain>/api/health` → `{"status":"ok","service":"eduverse-api"}`
- `https://<your-domain>/` → the app shell loads
- Log in as the seeded admin, create a teacher account, confirm an email actually sends (if SMTP is configured) or check the app logs for a "Failed to send" warning (if not).
- Upload a note/video as a teacher/admin and confirm it appears — this exercises the MinIO connection.

---

## 8. Updating

- **Code/env changes that aren't `VITE_LIVEKIT_URL`**: redeploy from Dokploy as normal.
- **Changing `VITE_LIVEKIT_URL`**: update the env var, then trigger a rebuild (not just a restart) — it's a build arg.
- **Schema changes**: `prisma db push` against production (step 6) before or right after deploying the new version, depending on whether the change is backward-compatible with the currently-running code.

---

## Troubleshooting

- **Container exits immediately on deploy, log says `JWT_SECRET environment variable is required in production`** — you haven't set `JWT_SECRET`. This is intentional (see the security hardening pass this app went through): the app refuses to run on a guessable default secret in production.
- **Container exits, log says `DATABASE_URL environment variable is required in production` or `Cannot reach DATABASE_URL`** — check the internal connection string and that the `lms-db` database is actually running in the same Dokploy project.
- **Frontend loads but every API call fails / browser console shows CORS errors** — `ALLOWED_ORIGINS` doesn't include the domain you're browsing from. It must match exactly (scheme + host), comma-separated for multiple domains.
- **File uploads work but MinIO uploads silently fall back to local disk** (check app logs for `MinIO upload failed`) — verify `MINIO_ACCESS_KEY`/`MINIO_SECRET_KEY` match between the `app` and `minio` service env vars (the compose file wires them from the same Dokploy env vars, so this should only happen if you edited one without the other).
- **Live classes don't connect** — `VITE_LIVEKIT_URL` needs a rebuild after being set (see above), and `LIVEKIT_API_KEY`/`LIVEKIT_API_SECRET` need to be from the same LiveKit project as `LIVEKIT_URL`.
- **Uploaded files disappear after a redeploy** — confirm the `uploads_data` volume in `docker-compose.dokploy.yml` is actually a named/persistent volume in Dokploy's view (it should be, by default, but double check it wasn't recreated as ephemeral).
