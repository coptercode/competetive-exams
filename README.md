# 🎓 Nexora LMS — Learning Management System

Nexora LMS is a comprehensive, modern full-stack Learning Management System tailored for Class 9–12 scholars and educators, featuring AI tutoring, interactive quizzes, video streaming, and robust administrator management.

---

## 🚀 Quick Start

Follow these simple commands to get the application up and running locally:

```bash
# 1. Install dependencies
npm install

# 2. Automatically initialize embedded PostgreSQL, apply migrations, and seed data
npm run db:setup

# 3. Start development server (Frontend + Backend concurrent)
npm run dev
```

- **Frontend Application:** [http://localhost:5173](http://localhost:5173)
- **Backend API Endpoint:** [http://localhost:3000/api](http://localhost:3000/api)

---

## 🔑 Default Administrator Credentials

After running `npm run db:setup` or `npx prisma db seed`, you can log into the **Educator / Admin Portal**:

| Portal Role | Academic Email | Password |
|---|---|---|
| **Administrator** | `admin@nexoralearning.com` | `password123` |

*(Note: Educators/Teachers are registered via the Admin Portal. Scholars self-register or are registered by admins).*

---

## 🛠️ Key Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs both Vite frontend and Express server concurrently |
| `npm run dev:client` | Runs frontend Vite server only (`localhost:5173`) |
| `npm run dev:server` | Runs backend Express API server only (`localhost:3000`) |
| `npm run db:setup` | Automates embedded PostgreSQL startup, schema synchronization, and seeding |
| `npm run db:studio` | Launches Prisma Studio GUI to view and edit database tables |
| `npm run build` | Builds production artifacts |

---

## 🗄️ Database Setup

Nexora LMS includes an **Embedded PostgreSQL** instance (`.pgdata`) that automatically runs locally on port `5432` without requiring a pre-installed standalone PostgreSQL server.

### Embedded PostgreSQL Fallback
If local PostgreSQL is not installed on the system, the application automatically uses an **Embedded PostgreSQL** instance (`.pgdata`) which initializes, configures user/password (`postgres` / `postgres`), creates `lms_db` on port **5432**, and starts up alongside the application.

### Manual PostgreSQL Configuration (Optional)
If you prefer using an external PostgreSQL server or Docker container:
1. Ensure PostgreSQL (v14+) is running on port **5432**.
2. Create a database named `lms_db`.
3. Configure your `DATABASE_URL` in `.env`.
4. Alternatively, launch the external services:
   ```bash
   docker compose up -d
   ```

---

## ⚙️ Environment Variables Configuration

Create a `.env` file in the project root directory and configure your variables:

```env
# Database URL (Port 5432)
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5432/lms_db"

# Backend Server Port
PORT=3000

# Authentication Secret
JWT_SECRET="eduverse-dev-secret-change-in-production"

# Frontend API Endpoint
VITE_API_URL="http://localhost:3000/api"

# Default Admin Seed Password
ADMIN_SEED_PASSWORD="password123"

# AI Tutor Integration (Optional)
GEMINI_API_KEY="your-gemini-api-key-here"

# LiveKit Classroom Integration (Optional)
LIVEKIT_URL="your-livekit-url"
LIVEKIT_API_KEY="your-livekit-key"
LIVEKIT_API_SECRET="your-livekit-secret"
VITE_LIVEKIT_URL="your-livekit-url"

# ─── Gmail SMTP Configuration (Optional for email dispatch) ───────────────────
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-16-character-gmail-app-password"
SMTP_FROM="Nexora Learning <your-email@gmail.com>"

# ─── MinIO (S3-compatible local object storage) ──────────────────────────────
MINIO_ENDPOINT="localhost"
MINIO_PORT=9000
MINIO_ACCESS_KEY="minioadmin"
MINIO_SECRET_KEY="minioadmin123"
MINIO_BUCKET="lms-files"
MINIO_USE_SSL=false
```

---

## 💻 Tech Stack

- **Frontend:** React, TypeScript, Vite, TailwindCSS, Lucide Icons, Zustand
- **Backend:** Node.js, Express, TypeScript, Prisma ORM, Nodemailer (Gmail SMTP)
- **Database:** PostgreSQL (with embedded local fallback support)
- **Integrations:** LiveKit (Interactive Classrooms), Google Gemini AI (AI Tutor)
