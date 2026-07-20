export const youtubeLinks: Record<string, string> = {
  // Map your Topic titles to YouTube links here
  "Review of representation of natural numbers, in...": "https://www.youtube.com/watch?v=TVc-fEjmvjI&pp=ygUrUmV2aWV3IG9mIHJlcHJlc2VudGF0aW9uIG9mIG5hdHVyYWwgbnVtYmVycw%3D%3D"
};

export const getYoutubeLinkForTopic = (
  boardTitle?: string,
  chapterTitle?: string,
  topicTitle?: string
): string => {
  if (!topicTitle) return "";

  // Look for an exact (but case-insensitive) match
  const match = Object.keys(youtubeLinks).find(
    (key) => key.toLowerCase() === topicTitle.toLowerCase()
  );
  if (match) return youtubeLinks[match];

  // If not found, try a partial match
  const partialMatch = Object.keys(youtubeLinks).find((key) =>
    topicTitle.toLowerCase().includes(key.toLowerCase())
  );
  if (partialMatch) return youtubeLinks[partialMatch];

  // If no specific link is configured, generate a YouTube search link
  // incorporating board, chapter, and topic to get highly relevant results
  const searchTerms = [boardTitle, chapterTitle, topicTitle, "in tamil simple explanation"]
    .filter(Boolean)
    .join(" ");
    
  // Using DuckDuckGo's "I'm Feeling Lucky" (!ducky) feature restricted to youtube.com
  // This automatically redirects the user to the very first video result instead of a search page.
  const query = encodeURIComponent(`site:youtube.com ${searchTerms}`);
  return `https://duckduckgo.com/?q=!ducky+${query}`;
};
