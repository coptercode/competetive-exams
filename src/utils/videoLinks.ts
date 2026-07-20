export const videoLinks: Record<string, string> = {
  // Map your Topic titles to Google Drive preview links here
  // Format: "Topic Title": "Google Drive Link"

  "Adjoint and inverse of a square matrix": "https://drive.google.com/file/d/1OGal5FoKjMpbzZETHRw6Tpcy4z1r7YzM/preview",
  "Biodiversity": "https://drive.google.com/file/d/1fizwSwSSIbAY8dq27YM28aHWVWjcxLWC/preview",
  "Types of relations: reflexive, symmetric, trans": "https://drive.google.com/file/d/1V3PxoPpqoECnx6iM9vwj3jH2XRHXvm0K/preview",
  "One-to-one (injective) and onto (surjective) fu...": "https://drive.google.com/file/d/1hzxXixH1CjeLIz-6OLxWf5_Qxa1i2LBx/preview",
  "Graphs of inverse trigonometric functions": "https://drive.google.com/file/d/1GSKfJtZpDqmI5r4fRiSzOp5dSkYKvkXP/preview",
  "Concept, notation, order, equality, and types o...": "https://drive.google.com/file/d/15PzzqqvSuX9HjrzWPVHSI1_xfzroGg2z/preview",
  "Types of vectors (equal, unit, zero, parallel, ...": "https://drive.google.com/file/d/18IBsJgsW1yB5QUkG1weZHn3MjY1rOq8_/preview",
  "AC generator and transformer.": "https://drive.google.com/file/d/1oe5LkVPMQLa23olCwrZaPEK1r3iTqozx/preview"
};

export const getVideoLinkForTopic = (topicTitle?: string): string | null => {
  if (!topicTitle) return null;

  // Look for an exact (but case-insensitive) match
  const match = Object.keys(videoLinks).find(key => key.toLowerCase() === topicTitle.toLowerCase());

  // If not found, try a partial match just in case
  const partialMatch = Object.keys(videoLinks).find(key =>
    topicTitle.toLowerCase().includes(key.toLowerCase())
  );

  return match ? videoLinks[match] : (partialMatch ? videoLinks[partialMatch] : null);
};
