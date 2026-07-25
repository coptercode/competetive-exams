import { HelpCircle, Trophy, AlertCircle, Lock } from "lucide-react";
import { generateQuiz } from "../utils/quizGenerator";
import React, { useState, useRef, useEffect } from "react";
import { useLmsStore } from "../store/index";
import type { Topic, Chapter, Subject } from "../store/types";
import { getChapterContent, getSubjectType } from "../store/curriculumData";

import { getApiBaseUrl } from "../utils/apiBase";
import { useUiStore } from "../store/useUiStore";
import { DRMVideoPlayer } from "./DRMVideoPlayer";
import { CustomYouTubePlayer } from "./CustomYouTubePlayer";
import { quizAPI, chapterLockAPI } from "../services/api";

const getTopicThumbnail = (subjectName: string = "", chapterName: string = "", topicName: string = ""): string => {
  const subj = subjectName.toLowerCase();
  const chap = chapterName.toLowerCase();
  const top = topicName.toLowerCase();

  // 1. Chemistry (Science)
  if (chap.includes("chemical") || chap.includes("matter") || chap.includes("reaction") || chap.includes("element") || chap.includes("separation") || subj.includes("chem")) {
    return "https://images.unsplash.com/photo-1532187640683-9450c537ee4d?auto=format&fit=crop&q=80&w=800";
  }
  
  // 2. Biology (Science)
  if (chap.includes("cell") || chap.includes("organism") || chap.includes("plant") || chap.includes("animal") || chap.includes("life") || chap.includes("bio") || subj.includes("bio")) {
    return "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800";
  }

  // 3. Physics (Science)
  if (chap.includes("motion") || chap.includes("force") || chap.includes("light") || chap.includes("electricity") || chap.includes("heat") || chap.includes("sound") || chap.includes("magnet") || chap.includes("measure") || subj.includes("phys")) {
    return "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800";
  }

  // 4. Geometry & Mensuration (Mathematics)
  if (chap.includes("geometry") || chap.includes("mensuration") || chap.includes("trig") || chap.includes("coordinate") || chap.includes("triangle") || chap.includes("circle") || top.includes("geometric") || top.includes("dimension")) {
    return "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800";
  }

  // 5. Algebra & Numbers (Mathematics)
  if (chap.includes("algebra") || chap.includes("matrix") || chap.includes("determinant") || chap.includes("number") || chap.includes("equation") || chap.includes("polynomial")) {
    return "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800";
  }

  // 6. Statistics & Probability (Mathematics)
  if (chap.includes("stat") || chap.includes("probab") || chap.includes("mean") || chap.includes("median") || chap.includes("mode") || chap.includes("data")) {
    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
  }

  // 7. General Mathematics
  if (subj.includes("math")) {
    return "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800";
  }

  // 8. Social Science
  if (subj.includes("social") || subj.includes("history") || subj.includes("geo") || subj.includes("civics")) {
    return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
  }

  // 9. English / Languages
  if (subj.includes("eng") || subj.includes("lang") || subj.includes("gram") || subj.includes("lit")) {
    return "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800";
  }

  return "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800";
};

const getSubjectColor = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("math")) return "bg-blue-600";
  if (t.includes("science") && !t.includes("social"))
    return "bg-purple-600";
  if (t.includes("social")) return "bg-orange-600";
  if (t.includes("english")) return "bg-rose-600";
  if (t.includes("tamil")) return "bg-emerald-600";
  return "bg-slate-600";
};
import {
  Play,
  Pause,
  BookOpen,
  FileText,
  Bookmark,
  CheckCircle,
  Plus,
  Trash2,
  ArrowRight,
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Printer,
  Download,
  Search,
  RotateCw,
  ExternalLink,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Youtube
} from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm';
import { getVideoLinkForTopic } from "../utils/videoLinks";
import { getPdfLinkForTopic } from "../utils/pdfLinks";
import { getYoutubeLinkForTopic } from "../utils/youtubeLinks";

export const CourseLearningPage: React.FC = () => {
  const {
    boards,
    profile,
    activeSubjectId,
    activeChapterId,
    activeTopicId,
    completeTopic,
    completedTopicIds,
    bookmarks,
    addBookmark,
    deleteBookmark,
    setActiveCourseContext,
    setView,
    setActiveQuiz,
    quizzes,
  } = useLmsStore();

  const [activeTab, setActiveTab] = useState<
    "pdf" | "bookmarks" | "quiz" | "youtube"
  >("pdf");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration] = useState(1200); // 20 mins mock duration in seconds
  const [bookmarkText, setBookmarkText] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const getYouTubeId = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleToggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  const activeBoard = boards.find((b) => b.id === profile.selectedBoardId) || boards[0];
  const activeClass = activeBoard?.classes?.find((c) => c.id === profile.selectedClassId) || activeBoard?.classes?.[0];
  const activeSubject = activeClass?.subjects.find((s) => s.id === activeSubjectId) || activeClass?.subjects[0];
  const activeChapter = activeSubject?.chapters.find((c) => c.id === activeChapterId) || activeSubject?.chapters[0];
  const activeTopic = activeChapter?.topics.find((t) => t.id === activeTopicId) || activeChapter?.topics[0];

  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  // ── Chapter access state (server-resolved effective access per student) ──
  const [chapterAccessMap, setChapterAccessMap] = useState<Record<string, boolean>>({});

  // Fetch chapter access on mount and whenever the active subject changes
  useEffect(() => {
    const subjectId = activeSubject?.id;
    if (!subjectId || profile?.role?.toLowerCase() !== 'student') {
      // For non-students (teachers/admins), all chapters are accessible
      setChapterAccessMap({});
      return;
    }
    chapterLockAPI.getStudentChapterAccess(subjectId)
      .then(data => {
        const map: Record<string, boolean> = {};
        data.chapters.forEach(ch => { map[ch.id] = ch.isUnlocked; });
        setChapterAccessMap(map);
      })
      .catch(err => {
        console.warn('[chapter-lock] Failed to fetch chapter access:', err.message);
        // On error, don't lock anything — fail open so students aren't blocked
        setChapterAccessMap({});
      });
  }, [activeSubject?.id, profile?.role]);

  useEffect(() => {
    if (activeChapterId) {
      setExpandedChapterId(activeChapterId);
    }
  }, [activeChapterId]);

  if (!activeBoard || !activeClass) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-royal"></div>
      </div>
    );
  }

  const youtubeId = getYouTubeId(activeTopic?.videoUrl);
  const useDrmPlayer = activeTopic?.drmEnabled === true && !!activeTopic?.videoId;
  const hasVideo = !!(
    youtubeId || 
    useDrmPlayer || 
    getVideoLinkForTopic(activeTopic?.title) || 
    (activeTopic?.videoUrl && activeTopic.videoUrl !== "https://www.w3schools.com/html/movie.mp4")
  );



  const getTopicPdfInfo = (chapterTitle: string = "", topicPdfUrl?: string) => {
    const pdfUrl = topicPdfUrl || activeTopic?.pdfUrl;
    if (pdfUrl && !pdfUrl.includes("dummy.pdf")) {
      return { url: pdfUrl, name: `${activeTopic?.title || chapterTitle} Notes` };
    }
    const drivePdfUrl = getPdfLinkForTopic(activeTopic?.title);
    if (drivePdfUrl) {
      return { url: drivePdfUrl, name: `${activeTopic?.title || chapterTitle} Notes` };
    }
    return null;
  };

  const currentPdfInfo = getTopicPdfInfo(activeChapter?.title || "", activeTopic?.pdfUrl);
  const isMarkdown = currentPdfInfo?.url?.toLowerCase().endsWith(".md");

  const [mdContent, setMdContent] = useState<string | null>(null);
  const [mdError, setMdError] = useState<boolean>(false);

  useEffect(() => {
    if (isMarkdown && currentPdfInfo?.url) {
      setMdError(false);
      fetch(currentPdfInfo.url)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load markdown");
          return res.text();
        })
        .then((text) => setMdContent(text))
        .catch(() => setMdError(true));
    }
  }, [currentPdfInfo?.url, isMarkdown]);

  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);



  const handleStartQuiz = async () => {
    if (!activeTopic) return;
    setIsLoadingQuiz(true);
    try {
      const fetched = await quizAPI.getQuizzesByTopic(activeTopic.id);
      if (fetched && fetched.length > 0) {
        const quiz = fetched[0];
        const existingQuizzes = useLmsStore.getState().quizzes || [];
        const updatedQuizzes = [
          ...existingQuizzes.filter((q) => q.id !== quiz.id),
          quiz,
        ];
        useLmsStore.setState({ quizzes: updatedQuizzes });
        setActiveQuiz(quiz.id);
        setView("quiz-view");
      } else {
        // Fallback: seed/generate a quiz on frontend
        const fallbackQuiz = generateQuiz(
          activeSubject?.title || "Subject",
          activeChapter?.title || "Chapter",
          activeTopic?.title || "Topic",
        );
        const quizId = `quiz-gen-${activeTopic.id}`;
        const mappedFallbackQuiz = {
          id: quizId,
          title: `${activeTopic.title} Assessment`,
          subjectId: activeTopic.id,
          chapterId: activeTopic.id,
          durationMinutes: 10,
          questions: fallbackQuiz.map((q: any, i: number) => ({
            id: `q-${quizId}-${i}`,
            question: q.question,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
            explanation: q.explanation || "Review the lesson material for a detailed explanation.",
          })),
        };
        const existingQuizzes = useLmsStore.getState().quizzes || [];
        const updatedQuizzes = [
          ...existingQuizzes.filter((q) => q.id !== mappedFallbackQuiz.id),
          mappedFallbackQuiz,
        ];
        useLmsStore.setState({ quizzes: updatedQuizzes });
        setActiveQuiz(mappedFallbackQuiz.id);
        setView("quiz-view");
      }
    } catch (err) {
      console.error("Failed to load quiz, using fallback generation", err);
      try {
        const fallbackQuiz = generateQuiz(
          activeSubject?.title || "Subject",
          activeChapter?.title || "Chapter",
          activeTopic?.title || "Topic",
        );
        const quizId = `quiz-gen-${activeTopic.id}`;
        const mappedFallbackQuiz = {
          id: quizId,
          title: `${activeTopic.title} Assessment`,
          subjectId: activeTopic.id,
          chapterId: activeTopic.id,
          durationMinutes: 10,
          questions: fallbackQuiz.map((q: any, i: number) => ({
            id: `q-${quizId}-${i}`,
            question: q.question,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
            explanation: q.explanation || "Review the lesson material for a detailed explanation.",
          })),
        };
        const existingQuizzes = useLmsStore.getState().quizzes || [];
        const updatedQuizzes = [
          ...existingQuizzes.filter((q) => q.id !== mappedFallbackQuiz.id),
          mappedFallbackQuiz,
        ];
        useLmsStore.setState({ quizzes: updatedQuizzes });
        setActiveQuiz(mappedFallbackQuiz.id);
        setView("quiz-view");
      } catch (innerErr) {
        console.error("Fallback generation failed", innerErr);
        useUiStore.getState().showAlert("Failed to load or generate quiz.");
      }
    } finally {
      setIsLoadingQuiz(false);
    }
  };

  const timerRef = useRef<number | null>(null);

  // Playback Simulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= videoDuration) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);

            // Auto-complete topic when video ends
            if (
              activeSubject &&
              activeChapter &&
              activeTopic &&
              !(activeTopic.isCompleted || completedTopicIds.includes(activeTopic.id))
            ) {
              completeTopic(
                activeBoard.id,
                activeClass.id,
                activeSubject.id,
                activeChapter.id,
                activeTopic.id,
              );
              useLmsStore
                .getState()
                .addNotification(
                  "Topic Completed",
                  `You have successfully completed "${activeTopic.title}"!`,
                  "success",
                );
            }
            return videoDuration;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [
    isPlaying,
    videoDuration,
    activeBoard.id,
    activeClass.id,
    activeSubject,
    activeChapter,
    activeTopic,
    completeTopic,
    completedTopicIds
  ]);

  // Formatter for time display
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  const handleMarkAsCompleted = () => {
    if (activeSubject && activeChapter && activeTopic) {
      completeTopic(
        activeBoard.id,
        activeClass.id,
        activeSubject.id,
        activeChapter.id,
        activeTopic.id,
      );
      // Trigger notification
      useLmsStore
        .getState()
        .addNotification(
          "Topic Completed!",
          `You have successfully mastered "${activeTopic.title}" and gained 200 XP!`,
          "success",
        );
        
      // Auto navigate to next topic
      let allTopics: { chapterId: string, topic: any }[] = [];
      activeSubject.chapters.forEach(c => {
        c.topics.forEach(t => allTopics.push({ chapterId: c.id, topic: t }));
      });
      const currentIdx = allTopics.findIndex(t => t.topic.id === activeTopic.id);
      if (currentIdx !== -1 && currentIdx < allTopics.length - 1) {
        const next = allTopics[currentIdx + 1];
        setActiveCourseContext(activeSubject.id, next.chapterId, next.topic.id);
      }
    }
  };

  const handleAddBookmarkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookmarkText || !activeTopic || !activeChapter || !activeSubject)
      return;

    addBookmark(
      {
        topicId: activeTopic.id,
        topicTitle: activeTopic.title,
        chapterTitle: activeChapter.title,
        subjectTitle: activeSubject.title,
        note: bookmarkText,
      },
      formatTime(currentTime),
    );

    setBookmarkText("");
  };

  const jumpToBookmarkTime = (timestamp: string) => {
    const parts = timestamp.split(":");
    let secs = 0;
    if (parts.length === 2) {
      secs = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    } else if (parts.length === 3) {
      secs = parseInt(parts[0], 10) * 3600 + parseInt(parts[1], 10) * 60 + parseInt(parts[2], 10);
    }
    setCurrentTime(secs);
    setIsPlaying(true);
  };

  const isTopicUnlocked = (topicId: string) => {
    if (!activeSubject) return false;
    const allTopics = activeSubject.chapters
      .filter((c) => !c.title.startsWith("#"))
      .flatMap(chapter => {
        const cleanTopics = chapter.topics.filter(t => t.title !== chapter.title && !t.title.startsWith('#'));
        return cleanTopics.length > 0 ? cleanTopics : chapter.topics;
      });
      
    const currentIndex = allTopics.findIndex(t => t.id === topicId);
    if (currentIndex <= 0) return true;
    
    const previousTopic = allTopics[currentIndex - 1];
    return previousTopic.isCompleted || completedTopicIds.includes(previousTopic.id);
  };

  if (!activeSubject) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6 bg-slate-900 rounded-2xl border border-white/5">
        <h3 className="text-lg font-bold text-white mb-2">
          No Courses Enrolled
        </h3>
        <p className="text-xs text-slate-400">
          Please choose boards/subjects in your profile wizard.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
      {/* Left Column: Player & Tabs */}
      <div className="lg:col-span-2 space-y-6">
        {/* Custom Mock/YouTube Video Player */}
        <div
          ref={playerContainerRef}
          className="relative aspect-[16/9] w-full rounded-2xl bg-black border border-white/10 shadow-2xl overflow-hidden group video-glow-container"
          style={isFullscreen ? { aspectRatio: "auto", height: "100%", width: "100%" } : {}}
        >
          {youtubeId ? (
            <CustomYouTubePlayer 
              url={`https://www.youtube.com/watch?v=${youtubeId}`} 
              title={activeTopic?.title}
              onTimeUpdate={(t) => setCurrentTime(Math.floor(t))}
              onEnded={handleMarkAsCompleted}
            />
          ) : useDrmPlayer ? (
            <DRMVideoPlayer
              videoId={activeTopic!.videoId!}
              title={activeTopic?.title}
              containerRef={playerContainerRef}
              onTimeUpdate={(t) => {
                setCurrentTime(Math.floor(t));
              }}
              onEnded={handleMarkAsCompleted}
            />
          ) : (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Board: {activeBoard?.title} | Class: {activeClass?.title} | Subject: {activeSubject?.title} | Chapter: {activeChapter?.title} | Topic: {activeTopic?.title} */}
                {getVideoLinkForTopic(activeTopic?.title) ? (
                  <iframe 
                    src={getVideoLinkForTopic(activeTopic?.title) as string} 
                    className="w-full h-full absolute inset-0 border-0 z-10" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen
                  />
                ) : activeTopic?.videoUrl && activeTopic.videoUrl !== "https://www.w3schools.com/html/movie.mp4" ? (
                  <video 
                    src={activeTopic.videoUrl} 
                    className="w-full h-full absolute inset-0 z-10 bg-black"
                    controls
                    onEnded={handleMarkAsCompleted}
                  />
                ) : (
                  <div className="text-white text-lg font-medium z-10">Video is not added</div>
                )}
                
                {/* Context Watermark */}
                <div className="absolute top-4 left-4 text-[9px] text-white/50 select-none font-mono tracking-widest z-20 pointer-events-none mix-blend-difference">
                  NEXORA LEARNING SECURE STREAM // IP: 192.168.1.1
                </div>
              </div>
            </>
          )}
        </div>

        {/* Video Description & Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-6 text-left">
          <div>
            <span className="text-xs text-brand-violet dark:text-brand-violet-light font-bold tracking-wider uppercase">
              {activeSubject.title} • {activeChapter?.title || "Chapter"}
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              {activeTopic?.title || "Introductory Topic"}
            </h2>
          </div>
          
          <div>
            {!(activeTopic?.isCompleted || (activeTopic && completedTopicIds.includes(activeTopic.id))) ? (
              <button
                onClick={handleMarkAsCompleted}
                disabled={hasVideo}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg ${
                  hasVideo 
                    ? "bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed shadow-none" 
                    : "bg-brand-royal hover:bg-brand-royal/90 text-white shadow-brand-royal/20"
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                {hasVideo ? "Watch Video to Complete" : "Mark as Completed"}
              </button>
            ) : (
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-200 dark:border-emerald-500/20">
                <CheckCircle className="w-4 h-4 fill-emerald-600 dark:fill-emerald-400 text-white dark:text-slate-900" />
                Completed
              </div>
            )}
          </div>
        </div>

        {/* Lower Workspace Tabs (Content explanation, Bookmarks, PDFs) */}
        <div className="space-y-4">
          <div className="flex border-b border-slate-200 dark:border-white/5 gap-4">
            {[
              { id: "pdf", label: "Notes & Worksheets", icon: FileText },
              { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
              { id: "quiz", label: "Topic Quiz", icon: HelpCircle },
              { id: "youtube", label: "YouTube Link", icon: Youtube },
            ].map((tab) => {
              const Icon = tab.icon;

              if (tab.id === "youtube") {
                const ytLink = getYoutubeLinkForTopic(
                  activeBoard?.title,
                  activeChapter?.title,
                  activeTopic?.title
                );
                if (!ytLink) return null;
                
                return (
                  <a
                    key={tab.id}
                    href={ytLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pb-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-all border-transparent text-slate-550 hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </a>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-brand-royal text-brand-royal dark:text-white font-bold"
                      : "border-transparent text-slate-550 hover:text-slate-900 dark:hover:text-slate-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-1">
            {/* Tab: PDF notes */}
            {activeTab === "pdf" && (
              <div className="space-y-4 font-sans text-left animate-fade-in-up">
                <style dangerouslySetInnerHTML={{__html: `
                  @media print {
                    body {
                      display: none !important;
                    }
                  }
                `}} />
                
                {(() => {
                  const pdfInfo = getTopicPdfInfo(activeChapter?.title || "", activeTopic?.pdfUrl);
                  
                  if (!pdfInfo) {
                    return (
                      <div className="flex flex-col items-center justify-center h-[400px] border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
                        <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4">
                          <FileText className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Notes Available</h3>
                        <p className="text-sm text-slate-500 text-center max-w-sm">
                          Study notes for this topic have not been added yet. Please check back later.
                        </p>
                      </div>
                    );
                  }

                  return (
                    <>
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-2">
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                            {pdfInfo.name}
                          </h4>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            Standard syllabus study note handbook
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setView("secure-note-preview")}
                            className="px-3.5 py-1.5 bg-brand-royal hover:bg-brand-royal/90 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-brand-royal/10 active:scale-95 cursor-pointer"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>View Fullscreen</span>
                          </button>
                          <span className="text-[9px] bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                            Preview Only (Protected)
                          </span>
                        </div>
                      </div>

                      <div 
                        className="relative w-full h-[650px] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-slate-950 select-none shadow-inner"
                        onContextMenu={(e) => e.preventDefault()}
                      >
                        {isMarkdown ? (
                          <div className="w-full h-full p-8 overflow-y-auto bg-white dark:bg-slate-800 custom-scrollbar text-left text-slate-900 dark:text-white">
                            {mdError ? (
                              <div className="flex flex-col items-center justify-center w-full h-full text-slate-400">
                                <FileText className="w-12 h-12 mb-4 opacity-50" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Error Loading Notes</h3>
                                <p>Could not load the markdown notes. Please try again.</p>
                              </div>
                            ) : mdContent ? (
                              <article className="prose dark:prose-invert max-w-none prose-headings:text-brand-royal dark:prose-headings:text-brand-royal-300 prose-a:text-brand-royal dark:prose-a:text-brand-royal-300 hover:prose-a:text-brand-royal/80 dark:hover:prose-a:text-brand-royal-400 prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-amber-600 dark:prose-code:text-amber-300 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-white/10">
                                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{mdContent}</ReactMarkdown>
                              </article>
                            ) : (
                              <div className="flex items-center justify-center w-full h-full">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-royal"></div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <iframe
                            src={`${pdfInfo.url}#toolbar=0&navpanes=0&scrollbar=1`}
                            className="w-full h-full border-0"
                            title="Notes Preview"
                          />
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Tab: Quiz Center */}
            {activeTab === "quiz" && (
              <div className="space-y-4">
                <div className="flex flex-col items-center text-center space-y-6 py-8 px-4">
                  <div className="w-20 h-20 rounded-full bg-brand-royal flex items-center justify-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-royal to-brand-violet opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    <HelpCircle className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      Topic Assessment
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {activeTopic?.title || "Current Topic"}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    {[
                      [
                        "10",
                        "Questions",
                        "text-brand-royal dark:text-blue-300",
                      ],
                      [
                        "10",
                        "Minutes",
                        "text-emerald-600 dark:text-emerald-300",
                      ],
                      ["MCQ", "Format", "text-amber-600 dark:text-amber-300"],
                    ].map(([val, lbl, cls], i) => (
                      <div
                        key={i}
                        className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 border border-slate-200 dark:border-white/5 text-center"
                      >
                        <p className={"text-xl font-black " + cls}>{val}</p>
                        <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                          {lbl}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 border border-slate-200 dark:border-white/5 text-left w-full max-w-sm space-y-2">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Instructions
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                      <li>• 10 questions (4 Easy, 4 Medium, 2 Hard)</li>
                      <li>• Timer: 10 minutes — auto-submits on timeout</li>
                      <li>• Select one option per question</li>
                      <li>• Results with explanations shown after</li>
                    </ul>
                  </div>
                  <button
                    onClick={handleStartQuiz}
                    disabled={isLoadingQuiz}
                    className="premium-btn-primary px-8 py-3 text-sm font-bold flex items-center gap-2 rounded-xl shadow-lg hover:shadow-brand-royal/20 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isLoadingQuiz ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Loading Quiz...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" /> Start Quiz
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Tab: Bookmarks */}
            {activeTab === "bookmarks" && (
              <div className="space-y-4">
                <form onSubmit={handleAddBookmarkSubmit} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter short bookmark note..."
                    value={bookmarkText}
                    onChange={(e) => setBookmarkText(e.target.value)}
                    className="premium-input text-xs"
                    required
                  />
                  <button
                    type="submit"
                    className="premium-btn-primary px-4 py-2 text-xs flex items-center gap-1 flex-shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Save Note</span>
                  </button>
                </form>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {bookmarks.filter((b) => b.chapterTitle === activeChapter?.title && b.subjectTitle === activeSubject?.title && b.profileId === (profile?.id || "guest"))
                    .length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-500">
                      No bookmarks saved in this chapter.
                    </div>
                  ) : (
                    bookmarks
                      .filter((b) => b.chapterTitle === activeChapter?.title && b.subjectTitle === activeSubject?.title && b.profileId === (profile?.id || "guest"))
                      .map((bm) => (
                        <div
                          key={bm.id}
                          className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5 flex items-center justify-between hover:border-slate-300 dark:hover:border-white/10 transition-colors"
                        >
                          <div className="text-left">
                            <span className="text-[10px] font-bold text-brand-royal uppercase tracking-wider bg-brand-royal/10 px-2 py-0.5 rounded-md">
                              {bm.topicTitle}
                            </span>
                            <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-2">
                              {bm.note}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => jumpToBookmarkTime(bm.timestamp)}
                              className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-brand-royal/30 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                            >
                              Jump
                            </button>
                            <button
                              onClick={() => deleteBookmark(bm.id)}
                              className="p-1 text-slate-500 hover:text-red-400"
                              title="Delete bookmark"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Dynamic Course Navigation Sidebar */}
      <div className="space-y-6">
        {/* Subject Selection Tabs */}
        <div className="glass-card p-5 border-slate-200 dark:border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-150 dark:border-white/5 pb-3">
            <BookOpen className="w-4 h-4 text-brand-violet dark:text-brand-violet-light" />
            <h3 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
              Select Subject
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {(activeClass?.subjects || []).map((sub) => {
              const isActive = activeSubject?.id === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    const firstChapter = sub.chapters[0];
                    const cleanTopics = firstChapter?.topics.filter(t => t.title !== firstChapter.title) || [];
                    const firstTopic = cleanTopics.length > 0 ? cleanTopics[0] : firstChapter?.topics[0];
                    setActiveCourseContext(
                      sub.id,
                      firstChapter?.id || null,
                      firstTopic?.id || null,
                    );
                  }}
                  className={`py-2 px-3 rounded-none border text-center transition-all duration-300 font-bold text-xs flex items-center justify-center gap-2 ${
                    isActive
                      ? "border-brand-royal bg-brand-royal/10 text-brand-royal dark:text-blue-300 shadow-md"
                      : "border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${getSubjectColor(sub.title)}`}
                  />
                  <span>{sub.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Curriculums Navigation Card */}
        <div className="glass-card p-5 border-slate-200 dark:border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-150 dark:border-white/5 pb-3">
            <BookOpen className="w-4 h-4 text-brand-royal" />
            <h3 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
              Course Curriculum
            </h3>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[500px] pr-1">
            {activeSubject.chapters.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-4">
                No content exists. Create chapters inside teacher dashboard.
              </p>
            ) : (
              activeSubject.chapters
                .filter((c) => !c.title.startsWith("#"))
                .map((chapter, index) => {
                  const isChapterActive = activeChapterId === chapter.id;
                  const isExpanded = expandedChapterId === chapter.id;

                  // Determine chapter-level lock state:
                  // - If we have server-resolved data use it
                  // - If map is empty (API not called yet) or chapter not in map, use default
                  // Default: Teachers see everything (true). Students see only the first chapter by default, others are locked.
                  const hasServerData = Object.keys(chapterAccessMap).length > 0;
                  const defaultUnlocked = profile?.role?.toLowerCase() === "student" ? index === 0 : true;
                  const isChapterUnlocked = hasServerData
                    ? (chapterAccessMap[chapter.id] ?? defaultUnlocked)
                    : defaultUnlocked;

                  return (
                    <div key={chapter.id} className="space-y-1">
                      {/* Chapter Header Row */}
                      {isChapterUnlocked ? (
                        <button
                          onClick={() => {
                            if (isExpanded) {
                              setExpandedChapterId(null);
                            } else {
                              setExpandedChapterId(chapter.id);
                            }
                          }}
                          className={`w-full py-2.5 px-3 rounded-none text-left text-xs transition-all border flex items-center justify-between gap-2 font-bold ${
                            isChapterActive
                              ? "border-brand-royal bg-brand-royal/10 text-brand-royal dark:text-blue-300"
                              : "border-transparent text-slate-700 dark:text-slate-300 hover:text-brand-royal hover:bg-brand-royal/5 dark:hover:bg-brand-royal/10"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <BookOpen className="w-3.5 h-3.5 flex-shrink-0 opacity-70" />
                            <span className="truncate">{chapter.title}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${isExpanded ? "rotate-90 text-brand-royal" : "text-slate-400"}`} />
                        </button>
                      ) : (
                        /* Locked chapter — not clickable, shows lock icon + tooltip */
                        <div
                          title="Locked — ask your teacher to unlock this chapter."
                          className="w-full py-2.5 px-3 rounded-none text-left text-xs border border-transparent flex items-center justify-between gap-2 font-bold opacity-50 cursor-not-allowed select-none text-slate-500 dark:text-slate-500"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Lock className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                            <span className="truncate">{chapter.title}</span>
                          </div>
                          <Lock className="w-3 h-3 flex-shrink-0 text-slate-400" />
                        </div>
                      )}

                      {/* Topics list - only shown when chapter is expanded AND unlocked */}
                      {isExpanded && isChapterUnlocked && (
                        <div className="space-y-0.5 ml-3 border-l border-brand-royal/20 pl-2">
                          {(() => {
                            const cleanTopics = chapter.topics.filter(t => t.title !== chapter.title && !t.title.startsWith('#'));
                            const displayTopics = cleanTopics.length > 0 ? cleanTopics : chapter.topics;
                            
                            return displayTopics.map((topic) => {
                              const isTopicActive = activeTopic?.id === topic.id;
                              const isUnlocked = isTopicUnlocked(topic.id);
                              return (
                                <button
                                  key={topic.id}
                                  disabled={!isUnlocked}
                                  onClick={() => {
                                    if (isUnlocked) {
                                      setActiveCourseContext(
                                        activeSubject.id,
                                        chapter.id,
                                        topic.id,
                                      );
                                    }
                                  }}
                                  className={`w-full py-2 px-2.5 rounded-none text-left text-xs transition-all border flex items-center justify-between gap-2 ${
                                    !isUnlocked 
                                      ? "opacity-50 cursor-not-allowed border-transparent text-slate-500" 
                                      : isTopicActive
                                        ? "border-brand-royal bg-brand-royal/10 text-brand-royal dark:text-blue-300 font-semibold"
                                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                                  }`}
                                >
                                  <div className="flex items-center gap-2 truncate">
                                    {!isUnlocked ? (
                                      <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                    ) : (topic.isCompleted || completedTopicIds.includes(topic.id)) ? (
                                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                    ) : (
                                      <div className="w-3.5 h-3.5 rounded-full border border-slate-400 dark:border-slate-600 flex-shrink-0" />
                                    )}
                                    <span className="truncate">{topic.title}</span>
                                  </div>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-500 font-mono font-medium flex-shrink-0">
                                    {topic.duration}
                                  </span>
                                </button>
                              );
                            });
                          })()}
                        </div>
                      )}
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
