# syntax=docker/dockerfile:1

# ---- Builder ----------------------------------------------------------
# Installs full deps (incl. devDeps needed for the Vite/tsc build), builds
# both the frontend (dist/client) and backend (dist/server), then strips
# devDependencies back out of node_modules before handing off to runtime.
FROM node:20-alpine AS builder
WORKDIR /app

# LiveKit URL is baked into the frontend bundle at build time (import.meta.env),
# so it must be supplied as a build arg, not a runtime env var.
ARG VITE_LIVEKIT_URL
ENV VITE_LIVEKIT_URL=$VITE_LIVEKIT_URL

# Prisma's postinstall (`prisma generate`) needs the schema present before `npm ci` runs.
COPY package.json package-lock.json ./
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npm ci

COPY . .
RUN npm run build

# Drop devDependencies (vite, typescript, tsx, embedded-postgres, etc.) — the
# generated Prisma client lives under node_modules/@prisma and node_modules/.prisma,
# both regular dependencies, so `npm prune` (no reinstall) leaves them intact.
RUN npm prune --omit=dev

# ---- Runtime ------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Local-disk fallback for uploads when MinIO is briefly unreachable — mount a
# volume here in production so it survives container restarts (see compose file).
RUN mkdir -p uploads

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --spider -q http://127.0.0.1:3000/api/health || exit 1

CMD ["node", "dist/server/index.js"]
