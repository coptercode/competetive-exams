import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';
import { randomUUID } from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'eduverse-dev-secret';

if (process.env.NODE_ENV === 'production') {
  if (!process.env.JWT_SECRET || JWT_SECRET === 'eduverse-dev-secret' || JWT_SECRET === 'eduverse-dev-secret-change-in-production') {
    throw new Error('FATAL: A strong JWT_SECRET must be provided in production');
  }
  if (!process.env.DATABASE_URL) {
    throw new Error('FATAL: DATABASE_URL must be provided in production');
  }
} else if (JWT_SECRET === 'eduverse-dev-secret' || JWT_SECRET === 'eduverse-dev-secret-change-in-production') {
  console.warn("⚠️ WARNING: Using default JWT_SECRET. Do not use this in production!");
}

export interface AuthPayload {
  userId: string;
  role: string;
  jti?: string;
}

declare global {
  namespace Express {
    interface Request {
      auth?: AuthPayload;
    }
  }
}

export function signToken(payload: AuthPayload) {
  const jti = randomUUID();
  return jwt.sign({ ...payload, jti }, JWT_SECRET, { expiresIn: '7d' });
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    console.warn('requireAuth failed: Authorization header missing or does not start with Bearer');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const token = header.slice(7);
    const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload;
    
    if (decoded.jti) {
      const revoked = await prisma.revokedToken.findUnique({
        where: { jti: decoded.jti }
      });
      if (revoked) {
        return res.status(401).json({ error: 'Token has been revoked' });
      }
    }
    
    req.auth = decoded;
    next();
  } catch (err: any) {
    console.warn('requireAuth token verification failed:', err.message);
    return res.status(401).json({ error: 'Invalid token' });
  }
}

export async function optionalAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (header?.startsWith('Bearer ')) {
    try {
      const token = header.slice(7);
      const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload;
      
      if (decoded.jti) {
        const revoked = await prisma.revokedToken.findUnique({
          where: { jti: decoded.jti }
        });
        if (!revoked) {
          req.auth = decoded;
        }
      } else {
        req.auth = decoded;
      }
    } catch {
      // ignore invalid token for public routes
    }
  }
  next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.auth) {
    console.warn('requireAdmin failed: no req.auth');
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.auth.role !== 'ADMIN') {
    console.warn(`requireAdmin failed: user role is ${req.auth.role}, not ADMIN`);
    return res.status(403).json({ error: 'Forbidden: Admin access required' });
  }
  next();
}

export function requireAdminOrTeacher(req: Request, res: Response, next: NextFunction) {
  if (!req.auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.auth.role !== 'ADMIN' && req.auth.role !== 'TEACHER') {
    return res.status(403).json({ error: 'Forbidden: Admin or Teacher access required' });
  }
  next();
}
