import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { randomUUID } from 'crypto';
import { getJwtSecret } from '../lib/env.js';
import { prisma } from '../lib/prisma.js';

export interface AuthPayload {
  userId: string;
  role: string;
  jti?: string;
  exp?: number;
}

declare global {
  namespace Express {
    interface Request {
      auth?: AuthPayload;
    }
  }
}

export function signToken(payload: Pick<AuthPayload, 'userId' | 'role'>) {
  return jwt.sign({ ...payload, jti: randomUUID() }, getJwtSecret(), { expiresIn: '7d' });
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    console.warn('requireAuth failed: Authorization header missing or does not start with Bearer');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const token = header.slice(7);
    const payload = jwt.verify(token, getJwtSecret()) as AuthPayload;
    if (payload.jti) {
      const revoked = await prisma.revokedToken.findUnique({ where: { jti: payload.jti } });
      if (revoked) {
        return res.status(401).json({ error: 'Token has been revoked' });
      }
    }
    req.auth = payload;
    next();
  } catch (err: any) {
    console.warn('requireAuth token verification failed:', err.message);
    return res.status(401).json({ error: 'Invalid token' });
  }
}

export function optionalAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (header?.startsWith('Bearer ')) {
    try {
      req.auth = jwt.verify(header.slice(7), getJwtSecret()) as AuthPayload;
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
