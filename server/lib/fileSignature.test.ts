import { describe, it, expect } from 'vitest';
import { matchesDeclaredType } from './fileSignature.js';

describe('matchesDeclaredType', () => {
  it('accepts a real PDF buffer declared as application/pdf', () => {
    const buf = Buffer.from('%PDF-1.4\n%rest of file', 'latin1');
    expect(matchesDeclaredType(buf, 'application/pdf')).toBe(true);
  });

  it('rejects a non-PDF buffer declared as application/pdf', () => {
    const buf = Buffer.from('<html><body>not a pdf</body></html>', 'utf8');
    expect(matchesDeclaredType(buf, 'application/pdf')).toBe(false);
  });

  it('accepts a real PNG signature declared as image/png', () => {
    const buf = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00]);
    expect(matchesDeclaredType(buf, 'image/png')).toBe(true);
  });

  it('rejects a JPEG buffer declared as image/png', () => {
    const buf = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10]);
    expect(matchesDeclaredType(buf, 'image/png')).toBe(false);
  });

  it('accepts a zip signature declared as a docx', () => {
    const buf = Buffer.from([0x50, 0x4b, 0x03, 0x04, 0x00, 0x00]);
    expect(matchesDeclaredType(buf, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')).toBe(true);
  });

  it('falls back to true for mimetypes without a known signature', () => {
    const buf = Buffer.from([0x00, 0x01, 0x02]);
    expect(matchesDeclaredType(buf, 'application/octet-stream')).toBe(true);
  });
});
