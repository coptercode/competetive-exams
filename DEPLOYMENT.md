# EduVerse Deployment Guide (Dokploy)

This guide walks you through deploying the EduVerse LMS onto a self-hosted Dokploy instance.

## Prerequisites
1. A server (VPS) running Dokploy (e.g. on Ubuntu).
2. Dokploy connected to your GitHub/GitLab/Bitbucket repository containing this codebase.
3. A Postgres database (you can easily create one using Dokploy's built-in "Databases" tab).

## Step 1: Create the Project
1. Log into your Dokploy dashboard.
2. Go to **Projects** and click **Create Project**. Name it `eduverse` (or similar).

## Step 2: Set up the Database (If not already external)
If you don't have an external database (like Supabase, AWS RDS, Neon):
1. In your new Dokploy project, go to **Databases** -> **Create Database** -> **PostgreSQL**.
2. Name it `eduverse-db`.
3. Once created, go to the database settings and copy the **Internal Connection String**. You'll need this for your environment variables.

## Step 3: Create the Application via Compose
This project uses a custom `docker-compose.dokploy.yml` to bundle your Node app with MinIO (for file storage).

1. In your Dokploy project, click **Create Service** -> **Compose**.
2. Give it a name (e.g., `eduverse-app`).
3. Connect it to your Git repository.
4. Set the **Compose Path** to: `docker-compose.dokploy.yml`
5. Go to the **Environment** tab and paste your `.env` variables. Make sure to include:

```env
DATABASE_URL="your-internal-postgres-url-here"
DIRECT_URL="your-internal-postgres-url-here"
JWT_SECRET="generate-a-secure-random-string"
NODE_ENV="production"
ALLOWED_ORIGINS="https://yourdomain.com"
GEMINI_API_KEY="your-gemini-key"
SMTP_USER="your-email"
SMTP_PASS="your-password"
SMTP_FROM="Your Name <your-email>"
LIVEKIT_URL="your-livekit-url"
LIVEKIT_API_KEY="your-livekit-api-key"
LIVEKIT_API_SECRET="your-livekit-secret"
MINIO_ACCESS_KEY="minioadmin"
MINIO_SECRET_KEY="minioadmin123"
```
*(Customize these as necessary)*

## Step 4: Deploy and Build
1. Click **Deploy**.
2. Dokploy will read the `docker-compose.dokploy.yml`, which points to the `Dockerfile`.
3. The multi-stage build will run automatically:
   - It runs `npm install`.
   - Generates the Prisma client.
   - Compiles the React frontend using Vite.
   - Boots up the backend on port `3000`.

## Step 5: Post-Deployment Setup
Once the app is running:
1. You may need to seed or push your initial database schema. You can do this by executing a terminal command directly inside your `eduverse-app` Dokploy container:
   `npm run db:push`
   `npm run db:seed`
2. Configure your domain mappings in Dokploy to point your public domain to the `eduverse-app` service on port `3000`.

Your EduVerse application should now be fully live!
