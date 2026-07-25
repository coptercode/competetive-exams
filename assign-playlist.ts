import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const url = 'https://www.youtube.com/playlist?list=PLX31vVXlvlmA';
  console.log('Fetching playlist from YouTube...');
  const res = await fetch(url);
  const html = await res.text();

  const match = html.match(/ytInitialData = (.*);<\/script>/);
  if (!match) {
    console.log('Failed to parse YouTube playlist.');
    return;
  }

  const data = JSON.parse(match[1]);

  const videos: { title: string, videoId: string }[] = [];
  function findVideos(obj: any) {
    if (!obj) return;
    if (Array.isArray(obj)) {
      for (const item of obj) findVideos(item);
    } else if (typeof obj === 'object') {
      if (obj.playlistVideoRenderer) {
        videos.push({
          title: obj.playlistVideoRenderer.title?.runs?.[0]?.text || 'Video',
          videoId: obj.playlistVideoRenderer.videoId
        });
      } else {
        for (const key in obj) findVideos(obj[key]);
      }
    }
  }

  findVideos(data);

  if (videos.length === 0) {
    console.log('Could not find videos in playlist');
    return;
  }

  console.log(`Found ${videos.length} videos in the playlist.`);

  const topics = [
    "Introduction to Sets",
    "Set Operations",
    "Properties of Set Operations",
    "Cardinality of Sets"
  ];

  const chapterName = "Chapter 1: Set Language";

  for (let i = 0; i < Math.min(topics.length, videos.length); i++) {
    const topic = topics[i];
    const videoUrl = `https://youtu.be/${videos[i].videoId}`;
    console.log(`Assigning ${videoUrl} to '${topic}'...`);

    const dbTopic = await prisma.topic.findFirst({
      where: {
        name: topic,
        chapter: { name: chapterName }
      }
    });

    if (!dbTopic) {
      console.log(`❌ Topic '${topic}' not found!`);
      continue;
    }

    const existingVideo = await prisma.courseVideo.findFirst({
      where: { topicId: dbTopic.id }
    });

    if (existingVideo) {
      await prisma.courseVideo.update({
        where: { id: existingVideo.id },
        data: { videoUrl: videoUrl, title: `Video: ${topic}` }
      });
      console.log(`✅ Successfully updated video for '${topic}'`);
    } else {
      await prisma.courseVideo.create({
        data: {
          title: `Video: ${topic}`,
          videoUrl: videoUrl,
          duration: 900,
          topicId: dbTopic.id,
          sortOrder: 1,
        }
      });
      console.log(`✅ Successfully assigned video to '${topic}'`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
