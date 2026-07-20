export const pdfLinks: Record<string, string> = {
  // Map your Topic or Chapter titles to Google Drive preview links here
  "Review of representation of natural numbers, in...": "https://drive.google.com/file/d/1AJISicMvyg2hVpYu1AQUJ9mR9PQDqFVD/preview",
  "Basic properties of definite integrals and eval...": "https://drive.google.com/file/d/1AJISicMvyg2hVpYu1AQUJ9mR9PQDqFVD/preview",
  "Electric charges, conservation of charge, and C...": "https://drive.google.com/file/d/1AJISicMvyg2hVpYu1AQUJ9mR9PQDqFVD/preview",
  "Electric field, electric field due to a point c...": "https://drive.google.com/file/d/1AJISicMvyg2hVpYu1AQUJ9mR9PQDqFVD/perview"
}

export const getPdfLinkForTopic = (topicTitle?: string): string | null => {
  if (!topicTitle) return null;

  // Look for an exact (but case-insensitive) match
  const match = Object.keys(pdfLinks).find(
    (key) => key.toLowerCase() === topicTitle.toLowerCase()
  );
  if (match) return pdfLinks[match];

  // If not found, try a partial match
  const partialMatch = Object.keys(pdfLinks).find((key) =>
    topicTitle.toLowerCase().includes(key.toLowerCase())
  );
  if (partialMatch) return pdfLinks[partialMatch];

  return null;
};
