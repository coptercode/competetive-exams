# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Nexora LMS — full-stack Learning Management System for Class 9–12 students (CBSE, ICSE, TN State Board). React/Vite frontend + Express/Prisma backend, single repo, no monorepo tooling.

## Commands

```bash
npm install
npm run db:setup      # starts embedded/local Postgres, pushes schema, seeds data — run once before first dev
npm run dev            # runs Vite (client) + tsx watch (server) concurrently
npm run dev:client     # Vite only, localhost:5173
npm run dev:server     # Express API only, localhost:3000/api
npm run db:push        # prisma db push (schema -> db, no migration files)
npm run db:seed        # tsx prisma/seed.ts
npm run db:studio      # Prisma Studio GUI
npm run build          # tsc --noEmit && vite build
```

No test runner or lint script is wired up in package.json (`eslint.config.js` exists but there is no `npm run lint`; run `npx eslint .` directly if needed). There is no single-test command — verify changes via `npm run build` (typecheck) and manual exercising through `npm run dev`.

Default admin login after seeding: `admin@nexoralearning.com` / `password123`.

## Architecture

**Two runtimes, one repo.** `src/` is the Vite/React SPA; `server/` is a standalone Express API (`server/index.ts`), started separately (or concurrently via `npm run dev`) and proxied by Vite under `/api` and `/uploads` (see `vite.config.ts`). They share the Prisma-generated client type but nothing else — there's no shared `common/` package.

**Database bootstrap is automatic.** `server/lib/db.ts` (`startDatabase()`, called at the top of `server/index.ts`) tries to connect to `DATABASE_URL` first; if unreachable and not a known remote host (Supabase/RDS), it spins up an `embedded-postgres` instance under `.pgdata/` and reconciles the password/database to match `.env`. Don't assume a system Postgres install — the embedded fallback is the default local dev path.

**Academic hierarchy (Prisma schema, `prisma/schema.prisma`) is a fixed 6-level tree:**
`Board -> Class -> Subject -> Unit -> Chapter -> Topic`. Almost everything else (courses, videos, notes, quizzes, assignments, progress) hangs off `Topic` or `Subject`. When adding content-related features, figure out which level of this tree it belongs to first.

**Progression/unlock system.** `StudentTopicProgress` / `StudentChapterProgress` / `StudentSubjectProgress` track per-student completion and an `unlocked` boolean at each level. A `Topic` has `requireWatchPercent`, `requireQuizPass`, `requireAssignSubmit`, `requireNotesViewed` flags plus an optional `prerequisiteTopicId` (self-referential) — unlock logic must be computed from these, not hardcoded. Route logic lives in `server/routes/progress.ts`; do not duplicate unlock rules elsewhere.

**DRM video pipeline.** Uploaded MP4s are processed by `server/lib/drm-processor.ts` into AES-128 encrypted HLS/DASH packages, uploaded to MinIO (`server/lib/minio.ts`, S3-compatible client, path-style, bucket from `MINIO_BUCKET`). Playback tokens are minted in `server/lib/playback-token.ts`. `CourseVideo.drmEnabled` gates whether a video goes through this pipeline vs. a plain `videoUrl`. Player-side: `src/components/DRMVideoPlayer.tsx` uses `shaka-player`.

**Auth.** JWT-based (`server/middleware/auth.ts`), `requireAuth` / `optionalAuth` / `requireAdmin` / `requireAdminOrTeacher` guards. Token payload is `{ userId, role }`, 7-day expiry, secret from `JWT_SECRET` env (falls back to a dev default — never rely on that fallback outside local dev). Frontend stores the token in `localStorage` under `auth_token` and reads it directly in `src/services/api.ts` and `src/store/index.ts` — there's no axios interceptor or auth context, every fetch call attaches the header manually.

**Frontend state.** Single Zustand store (`src/store/index.ts`, typed via `src/store/types.ts`) holds auth, active view/navigation (this is an SPA with hash-based view switching, not `react-router` route trees, despite `react-router-dom` being a dependency), curriculum data, assignments, quizzes, notifications, bookmarks. Several slices persist to `localStorage` (profile, completed topics, bookmarks, dark mode) via a `subscribe` call at the bottom of the file. `src/services/api.ts` is a thin fetch wrapper per resource (`authAPI`, etc.) — prefer extending that file over calling `fetch` ad hoc in components, though the store itself also calls `fetch` directly in places (inconsistent, follow whichever pattern the surrounding code already uses).

**API base URL resolution** (`src/utils/apiBase.ts`) prefers `window.location.origin` in the browser unless `VITE_API_URL` is explicitly set to a non-localhost domain — this makes the app work behind tunnels/port-forwarding without config changes. Don't hardcode `localhost:3000` in new frontend code.

**Board/curriculum static data.** `prisma/boards-data.ts`, `cbse-data*.ts`, `icse-data*.ts`, `tnsb-data*.ts` are large generated/curated datasets used by `prisma/seed.ts` to populate the academic hierarchy. The `cbse notes/`, `icse_ise notes/`, `stateboard notes/` directories at repo root are markdown source content these seeds are derived from; `scripts/` contains many one-off data-migration/cleanup scripts written against these datasets (parsing, deduplication, injection) — most are historical/one-shot, not part of a repeatable pipeline. `scratch/` similarly holds throwaway diagnostic/reset scripts (check users, reset passwords, test integrations) — treat both `scripts/` and `scratch/` as a grab-bag of one-off tools, not maintained library code.

**Uploads.** `uploads/notes` and `uploads/assignment` are served statically by Express at `/uploads` and are also where `multer` (`server/routes/upload.ts`) writes incoming files before/instead of MinIO, depending on route.

**Dev-only routes.** `server/index.ts` has several `/api/dev/*` endpoints (count, seed, user listing, debug) mixed directly into the main file rather than a router — these are debugging aids, not part of the product API surface.

## Conventions

- Prisma field names are `camelCase` in the client but `snake_case` in the actual Postgres columns (`@map(...)` on nearly every field) — when writing raw SQL or migrations, use the snake_case column names.
- All Prisma model IDs are `uuid()`; don't assume auto-increment integers anywhere.
- TypeScript strict mode is on (`tsconfig.json`); `noEmit` — the build step type-checks via `tsc --noEmit` separately from the Vite bundle step.
- No CSS-in-JS; styling is Tailwind (`tailwind.config.js`, `postcss.config.js`).
