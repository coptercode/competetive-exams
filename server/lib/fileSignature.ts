// Validates that a file's actual content matches its declared MIME type by checking
// magic bytes, since multer's fileFilter only sees the client-supplied mimetype header
// (trivially spoofable) before the buffer is fully read.

type SignatureCheck = (buf: Buffer) => boolean;

const signatures: Record<string, SignatureCheck> = {
  'application/pdf': (buf) => buf.subarray(0, 4).toString('latin1') === '%PDF',
  'image/png': (buf) => buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])),
  'image/jpeg': (buf) => buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff,
  'image/webp': (buf) => buf.subarray(0, 4).toString('latin1') === 'RIFF' && buf.subarray(8, 12).toString('latin1') === 'WEBP',
  'application/zip': (buf) => {
    const sig = buf.subarray(0, 4);
    return sig.equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))
      || sig.equals(Buffer.from([0x50, 0x4b, 0x05, 0x06]))
      || sig.equals(Buffer.from([0x50, 0x4b, 0x07, 0x08]));
  },
  // Modern Office formats (.docx) are zip containers.
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': (buf) =>
    signatures['application/zip'](buf),
  // Legacy .doc uses the OLE Compound File Binary Format signature.
  'application/msword': (buf) =>
    buf.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])),
  // MP4/QuickTime containers store "ftyp" at byte offset 4.
  'video/mp4': (buf) => buf.subarray(4, 8).toString('latin1') === 'ftyp',
  'video/quicktime': (buf) => buf.subarray(4, 8).toString('latin1') === 'ftyp',
  // WebM/Matroska share the EBML header.
  'video/webm': (buf) => buf.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3])),
  'video/x-matroska': (buf) => buf.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3])),
};

/**
 * Returns true if the buffer's content matches the declared mimetype's magic bytes.
 * Falls back to true for mimetypes we don't have a signature for, so we never
 * block a legitimately allowed type we just haven't added a check for yet.
 */
export function matchesDeclaredType(buffer: Buffer, mimetype: string): boolean {
  const check = signatures[mimetype];
  if (!check) return true;
  try {
    return check(buffer);
  } catch {
    return false;
  }
}
