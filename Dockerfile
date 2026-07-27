# ==========================================
# STAGE 1: Build Phase
# ==========================================
FROM node:20-alpine AS builder

# Install OpenSSL (required by Prisma on Alpine)
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies needed for build)
RUN npm install

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy all source files
COPY . .

# Build the frontend (creates dist/)
RUN npm run build:client

# ==========================================
# STAGE 2: Production Phase
# ==========================================
FROM node:20-alpine AS runner

# Install OpenSSL
RUN apk add --no-cache openssl

WORKDIR /app

# Copy package files and install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy Prisma schema and generated client from builder
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy built frontend
COPY --from=builder /app/dist ./dist

# Copy backend source, compiled server, and scripts
COPY --from=builder /app/server ./server
COPY --from=builder /app/dist-server ./dist-server
COPY --from=builder /app/scripts ./scripts

# Copy tsconfig files if needed
COPY tsconfig.json tsconfig.node.json tsconfig.server.json ./

# Expose port 3000
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start"]
