export const youtubeLinks: Record<string, string> = {
  // Topic Title -> YouTube Watch Video URL
  "Review of representation of natural numbers, in...": "https://www.youtube.com/watch?v=TVc-fEjmvjI",
  "Adjoint and inverse of a square matrix": "https://www.youtube.com/watch?v=01c12o4068s",
  "Biodiversity": "https://www.youtube.com/watch?v=b6Ua_zWDH6U",
  "Types of relations: reflexive, symmetric, trans": "https://www.youtube.com/watch?v=Vl3r3M85gZg",
  "One-to-one (injective) and onto (surjective) fu...": "https://www.youtube.com/watch?v=O123sKlj123",
  "Graphs of inverse trigonometric functions": "https://www.youtube.com/watch?v=71_k1P6S2a4",
  "Concept, notation, order, equality, and types o...": "https://www.youtube.com/watch?v=01c12o4068s",
  "Types of vectors (equal, unit, zero, parallel, ...": "https://www.youtube.com/watch?v=ml4NSsn-KxI",
  "AC generator and transformer.": "https://www.youtube.com/watch?v=gQ4ZJ92uE8k",
  "Electrostatics": "https://www.youtube.com/watch?v=8V9B_5k1x6Q",
  "Chemical Bonding": "https://www.youtube.com/watch?v=QXIwz61860c",
  "Thermodynamics": "https://www.youtube.com/watch?v=8N1Bxl8Y9cE",
  "Indian Constitution & Preamble": "https://www.youtube.com/watch?v=8n_898X7p3c",
  "Ancient Indian History": "https://www.youtube.com/watch?v=33u2s1P9_9I",
  "Percentage & Ratio Analysis": "https://www.youtube.com/watch?v=vV7w_88P8sY",
  "Logical Reasoning & Syllogisms": "https://www.youtube.com/watch?v=11B8V9b8_9k"
};

export const extractYoutubeVideoId = (url?: string): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const getEmbedUrlFromYoutubeUrl = (url?: string): string => {
  if (!url) return "";
  const videoId = extractYoutubeVideoId(url);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;
  }
  if (url.includes('youtube.com/embed/')) return url;
  return url;
};

export const getYoutubeLinkForTopic = (
  boardTitle?: string,
  chapterTitle?: string,
  topicTitle?: string
): string => {
  if (!topicTitle) return "https://www.youtube.com";

  // 1. Look for an exact (case-insensitive) match
  const match = Object.keys(youtubeLinks).find(
    (key) => key.toLowerCase() === topicTitle.toLowerCase()
  );
  if (match) return youtubeLinks[match];

  // 2. Try a partial match
  const partialMatch = Object.keys(youtubeLinks).find((key) =>
    topicTitle.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(topicTitle.toLowerCase())
  );
  if (partialMatch) return youtubeLinks[partialMatch];

  // 3. Fallback direct YouTube video search query for topic
  const query = encodeURIComponent(`${boardTitle || ''} ${chapterTitle || ''} ${topicTitle} full lecture`.trim());
  return `https://www.youtube.com/results?search_query=${query}`;
};
