import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import fs from 'fs';
import path from 'path';

const endpointHost = process.env.MINIO_ENDPOINT || 'localhost';
const endpointPort = process.env.MINIO_PORT;
const useSSL = process.env.MINIO_USE_SSL === 'true';
const protocol = useSSL ? 'https' : 'http';

// If MINIO_ENDPOINT already contains http/https, use it directly (for Supabase/AWS)
let endpoint = endpointHost;
if (!endpoint.startsWith('http')) {
  // Legacy MinIO format
  endpoint = `${protocol}://${endpointHost}${endpointPort ? `:${endpointPort}` : ''}`;
}

const accessKeyId = process.env.MINIO_ACCESS_KEY || '';
const secretAccessKey = process.env.MINIO_SECRET_KEY || '';
const bucketName = process.env.MINIO_BUCKET || 'lms-files';
const region = process.env.MINIO_REGION || 'us-east-1';

export const minioClient = new S3Client({
  region,
  endpoint,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  forcePathStyle: true, // Required for MinIO/Supabase local connection
});

export const MINIO_BUCKET = bucketName;

const extensionToContentType: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.mkv': 'video/x-matroska',
  '.zip': 'application/zip',
  '.m3u8': 'application/vnd.apple.mpegurl',
  '.ts': 'video/mp2t',
  '.md': 'text/markdown',
  '.mpd': 'application/dash+xml',
  '.key': 'application/octet-stream',
  '.json': 'application/json',
};

export function getContentTypeFromKey(key: string): string {
  const ext = path.extname(key).toLowerCase();
  return extensionToContentType[ext] || 'application/octet-stream';
}

/**
 * Upload a file buffer to MinIO
 */
export async function uploadToMinio(
  key: string,
  body: Buffer,
  contentType: string,
): Promise<string> {
  try {
    await minioClient.send(
      new PutObjectCommand({
        Bucket: MINIO_BUCKET,
        Key: key,
        Body: body,
        ContentType: contentType,
      }),
    );
    // Return the public access URL for the uploaded file
    let publicEndpoint = endpoint;
    if (endpoint.includes('.supabase.co') && endpoint.endsWith('/s3')) {
      publicEndpoint = endpoint.replace('/s3', '/object/public');
    }
    const encodedKey = key.split('/').map(encodeURIComponent).join('/');
    return `${publicEndpoint}/${MINIO_BUCKET}/${encodedKey}`;
  } catch (err) {
    console.warn('MinIO upload failed, using local disk fallback:', err);
    const localPath = path.join(process.cwd(), 'uploads', key);
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localPath, body);
    return `/uploads/${key}`;
  }
}

export async function uploadToMinioKey(
  key: string,
  body: Buffer,
  contentType: string,
): Promise<string> {
  await minioClient.send(
    new PutObjectCommand({
      Bucket: MINIO_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
  return key;
}

/**
 * Delete a file from MinIO
 */
export async function deleteFromMinio(key: string): Promise<void> {
  try {
    await minioClient.send(
      new DeleteObjectCommand({
        Bucket: MINIO_BUCKET,
        Key: key,
      }),
    );
  } catch (err) {
    console.warn('MinIO delete failed, using local disk fallback:', err);
    const localPath = path.join(process.cwd(), 'uploads', key);
    if (fs.existsSync(localPath)) {
      fs.unlinkSync(localPath);
    }
  }
}

/**
 * Stream a file from MinIO
 */
export async function getObjectFromMinio(key: string) {
  return minioClient.send(
    new GetObjectCommand({
      Bucket: MINIO_BUCKET,
      Key: key,
    }),
  );
}

/**
 * Generate a signed download URL (expires in 1 hour)
 */
export async function getSignedDownloadUrl(key: string, expiresIn = 3600): Promise<string> {
  try {
    const command = new GetObjectCommand({ Bucket: MINIO_BUCKET, Key: key });
    return await getSignedUrl(minioClient, command, { expiresIn });
  } catch (err) {
    console.warn('MinIO getSignedDownloadUrl failed, using local link fallback:', err);
    return `/uploads/${key}`;
  }
}

/**
 * Derive storage key from upload context
 */
export function buildStorageKey(
  type: 'notes' | 'assignment' | 'video',
  classTitle: string,
  subjectTitle: string,
  filename: string,
): string {
  const sanitize = (s: string) =>
    s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `${type}/${sanitize(classTitle)}/${sanitize(subjectTitle)}/${Date.now()}-${filename}`;
}
