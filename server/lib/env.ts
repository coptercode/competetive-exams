const DEV_JWT_SECRET = 'eduverse-dev-secret';

let cachedJwtSecret: string | null = null;

export function getJwtSecret(): string {
  if (cachedJwtSecret) return cachedJwtSecret;

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('JWT_SECRET environment variable is required in production');
    }
    console.warn('[server] JWT_SECRET not set — using an insecure development-only secret. Set JWT_SECRET before deploying.');
    cachedJwtSecret = DEV_JWT_SECRET;
    return cachedJwtSecret;
  }

  cachedJwtSecret = secret;
  return cachedJwtSecret;
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

// Pollinations.ai is a public, unauthenticated third-party endpoint used as a free AI fallback.
// Student questions/attachments would leave the platform to an external service with no
// data-processing agreement, so this must be an explicit opt-in in production.
export function isPublicAiFallbackEnabled(): boolean {
  if (process.env.ENABLE_PUBLIC_AI_FALLBACK !== undefined) {
    return process.env.ENABLE_PUBLIC_AI_FALLBACK === 'true';
  }
  return !isProduction();
}
