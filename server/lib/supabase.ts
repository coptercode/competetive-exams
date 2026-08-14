import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

export const SUPABASE_STORAGE_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || 'lms-files';

let supabaseClientInstance: SupabaseClient | null = null;

if (supabaseUrl && supabaseKey && !supabaseUrl.includes('[YOUR-PROJECT-REF]')) {
  try {
    supabaseClientInstance = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
    });
    console.log('[supabase] ✅ Supabase Storage Client initialized successfully.');
  } catch (err: any) {
    console.warn('[supabase] ⚠️ Could not initialize Supabase client:', err.message);
  }
}

export function getSupabaseClient(): SupabaseClient | null {
  return supabaseClientInstance;
}

export function isSupabaseStorageEnabled(): boolean {
  return supabaseClientInstance !== null;
}

/**
 * Uploads a file buffer directly to Supabase Storage bucket and returns public access URL.
 */
export async function uploadToSupabaseStorage(
  buffer: Buffer,
  storagePath: string,
  contentType: string,
  bucketName: string = SUPABASE_STORAGE_BUCKET
): Promise<string> {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('Supabase client is not initialized. Please verify SUPABASE_URL and SUPABASE_KEY in .env');
  }

  // Ensure bucket exists or attempt upload
  const { data, error } = await client.storage
    .from(bucketName)
    .upload(storagePath, buffer, {
      contentType,
      upsert: true,
    });

  if (error) {
    console.error('[supabase-storage] Upload failed:', error.message);
    throw new Error(`Supabase Storage upload error: ${error.message}`);
  }

  // Get public access URL
  const { data: publicUrlData } = client.storage
    .from(bucketName)
    .getPublicUrl(data.path);

  console.log(`[supabase-storage] ✅ Uploaded file to bucket '${bucketName}':`, publicUrlData.publicUrl);
  return publicUrlData.publicUrl;
}

/**
 * Removes a file from Supabase Storage bucket by path.
 */
export async function deleteFromSupabaseStorage(
  storagePath: string,
  bucketName: string = SUPABASE_STORAGE_BUCKET
): Promise<void> {
  const client = getSupabaseClient();
  if (!client) return;

  const { error } = await client.storage
    .from(bucketName)
    .remove([storagePath]);

  if (error) {
    console.warn(`[supabase-storage] Failed deleting '${storagePath}' from bucket '${bucketName}':`, error.message);
  } else {
    console.log(`[supabase-storage] Deleted '${storagePath}' from bucket '${bucketName}'.`);
  }
}
