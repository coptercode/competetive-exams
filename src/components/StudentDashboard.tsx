import React, { useState, useEffect } from "react";
import { useLmsStore } from "../store/index";
import {
  Sparkles,
  Play,
  Calendar,
  AlertCircle,
  ArrowRight,
  Brain,
  Clock,
  ChevronRight,
  BookOpen,
  Trophy,
  Target,
  BarChart3,
  TrendingUp,
  Award,
  Zap,
  Bookmark,
  Bell,
  CheckCircle,
  Tv,
  FileText,
  MessageSquare,
} from "lucide-react";
import { getISTDate } from "../utils/dateUtils";
import { getApiBaseUrl } from "../utils/apiBase";

const getMeetingStatus = (date: string, startTime: string, endTime: string): "Live" | "Upcoming" | "Ended" => {
  const now = getISTDate();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const currentDateStr = `${year}-${month}-${day}`;

  const parseTimeToMinutes = (timeStr: string) => {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) {
      const parts = timeStr.split(':').map(Number);
      return (parts[0] || 0) * 60 + (parts[1] || 0);
    }
    let h = parseInt(match[1], 10);
    const m = parseInt(match[2], 10);
    const ap = match[3].toUpperCase();
    if (ap === "PM" && h < 12) h += 12;
    if (ap === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);

  if (date > currentDateStr) return "Upcoming";
  if (date < currentDateStr) return "Ended";

  if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
    return "Live";
  } else if (currentMinutes >= endMinutes) {
    return "Ended";
  } else {
    return "Upcoming";
  }
};

export const StudentDashboard: React.FC = () => {
  const { setView, profile, boards, assignments, quizResults, setActiveCourseContext, joinLiveRoom, completedTopicIds, bookmarks } =
    useLmsStore();

  const activeCategory =
    boards.find((b) => b.id === profile.selectedBoardId) || boards[0];
  const activeBatch =
    activeCategory?.classes?.find((c) => c.id === profile.selectedClassId) ||
    activeCategory?.classes?.[0];

  const [dbMeetings, setDbMeetings] = useState<any[]>([]);
  const [recentNotes, setRecentNotes] = useState<any[]>([]);
  const [recentVideos, setRecentVideos] = useState<any[]>([]);
  const [availableQuizzes, setAvailableQuizzes] = useState<any[]>([]);
  const [detailedReport, setDetailedReport] = useState<any | null>(null);

  const fetchDetailedReport = async () => {
    const token = localStorage.getItem("auth_token");
    if (!token || !profile.id) return;
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/students/${profile.id}/detailed-report`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.report) setDetailedReport(data.report);
      }
    } catch (e) {
      console.warn("Failed fetching student report", e);
    }
  };

  const handleToggleTask = async (taskId: string, currentCompleted: boolean) => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      await fetch(`${getApiBaseUrl()}/api/tasks/${taskId}/complete`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: !currentCompleted }),
      });
      fetchDetailedReport();
    } catch (e) {
      console.warn("Failed to toggle task", e);
    }
  };

  useEffect(() => {
    const fetchDbMeetings = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) return;
      try {
        const res = await fetch(`${getApiBaseUrl()}/api/live-classes`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          if (data.meetings) {
            const filtered = data.meetings.filter(
              (m: any) => m.classLevel.toLowerCase() === activeBatch?.title?.toLowerCase()
            );
            setDbMeetings(filtered);
          }
        }
      } catch (err) {
        console.warn("Failed fetching db live classes for candidate:", err);
      }
    };

    const fetchMaterials = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) return;
      fetch(`${getApiBaseUrl()}/api/upload/notes/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => r.json())
        .then((d) => setRecentNotes(d.notes || []))
        .catch(() => {});

      fetch(`${getApiBaseUrl()}/api/upload/videos/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => r.json())
        .then((d) => setRecentVideos(d.videos || []))
        .catch(() => {});

      fetch(`${getApiBaseUrl()}/api/quizzes/candidate/available`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => r.json())
        .then((d) => setAvailableQuizzes(d.quizzes || []))
        .catch(() => {});
    };

    fetchDbMeetings();
    fetchMaterials();
    fetchDetailedReport();
    const interval = setInterval(fetchDbMeetings, 5000);
    return () => clearInterval(interval);
  }, [activeBatch?.title, profile.id]);

  // Derived Candidate Performance Stats
  const totalAttemptedMockTests = quizResults.length;
  const averageScore = totalAttemptedMockTests > 0
    ? Math.round(quizResults.reduce((acc, curr) => acc + (curr.score || 0), 0) / totalAttemptedMockTests)
    : 84;
  
  const estimatedRank = totalAttemptedMockTests > 0 ? Math.max(1, 120 - Math.floor(averageScore * 1.1)) : 42;
  const accuracyPercentage = totalAttemptedMockTests > 0 ? Math.min(98, Math.round(averageScore * 0.95)) : 88;
  const timeSpentStudyingHours = Math.round((completedTopicIds.length * 45) / 60) || 28;

  // Weak & Strong Topics Analysis
  const strongTopics = [
    "Matrices & Determinants",
    "Newton's Laws & Momentum",
    "Indian Polity & Fundamental Rights",
  ];
  const weakTopics = [
    "Electrostatics & Capacitance",
    "Organic GOC Reaction Mechanisms",
    "Data Interpretation & Puzzles",
  ];

  // Today's Study Plan
  const todaysStudyPlan = [
    { time: "09:00 AM", title: "JEE Main Physics: Electrostatics Practice Test", type: "Practice Test", duration: "45m" },
    { time: "11:30 AM", title: "Live Problem Solving: Organic Chemistry Reactions", type: "Live Class", duration: "60m" },
    { time: "03:00 PM", title: "Full-Length Grand Mock Test 3", type: "Mock Test", duration: "180m" },
    { time: "07:00 PM", title: "Formula Sheet Revision & Mind Maps", type: "Revision", duration: "30m" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8 font-sans">
      {/* Welcome Banner with Multi-Color Gradient Lights */}
      <div className="glass-glow-card gradient-light-aurora p-6 sm:p-8 rounded-[36px] relative overflow-hidden border border-blue-500/30 shadow-2xl">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-gradient-to-tr from-emerald-500/15 via-teal-500/15 to-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/30 border border-white/20">
                Candidate Prep Hub
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                Batch: {activeBatch?.title || "JEE Main 2026 Batch"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
              Welcome back, <span className="text-gradient-hero">{profile.name}</span>!
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
              Your targeted preparation for <strong className="text-blue-600 dark:text-blue-400 font-extrabold">{activeCategory?.title || "Competitive Exams"}</strong> is on track. Review today&apos;s study plan and attempt upcoming mock tests.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setView("quiz-view")}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 border border-white/20"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Start Mock Test</span>
            </button>
            <button
              onClick={() => setView("ai-tutor")}
              className="px-6 py-3.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 text-slate-900 dark:text-slate-100 font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all hover:scale-105 shadow-md"
            >
              <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>AI Exam Assistant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Candidate Key Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Estimated Rank */}
        <div className="glass-glow-card box-backlight-amber p-6 rounded-[32px] space-y-2.5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent blur-sm" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Predicted Rank
            </span>
            <span className="p-2.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 shadow-md">
              <Trophy className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight">
            AIR #{estimatedRank}
          </p>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> Top 2% among 14,500 candidates
          </p>
        </div>

        {/* Accuracy Rate */}
        <div className="glass-glow-card box-backlight-emerald p-6 rounded-[32px] space-y-2.5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-sm" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Accuracy Rate
            </span>
            <span className="p-2.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 shadow-md">
              <Target className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight">
            {accuracyPercentage}%
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Based on {totalAttemptedMockTests || 4} mock tests
          </p>
        </div>

        {/* Study Time Spent */}
        <div className="glass-glow-card box-backlight-blue p-6 rounded-[32px] space-y-2.5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Time Spent Studying
            </span>
            <span className="p-2.5 rounded-full bg-blue-500/15 text-blue-500 border border-blue-500/30 shadow-md">
              <Clock className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight">
            {profile.totalHoursSpent || timeSpentStudyingHours} hrs
          </p>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
            Today: {profile.todayHoursSpent || 2.8} hrs spent
          </p>
        </div>

        {/* Completed Topics */}
        <div className="glass-glow-card box-backlight-purple p-6 rounded-[32px] space-y-2.5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Topics Mastered
            </span>
            <span className="p-2.5 rounded-full bg-purple-500/15 text-purple-500 border border-purple-500/30 shadow-md">
              <BookOpen className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
            {completedTopicIds.length || 18} / 45
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Syllabus progress: 40%
          </p>
        </div>
      </div>

      {/* Daily 7-Hour Study Target Alert Notification Banner */}
      {((profile.todayHoursSpent || 2.8) < 7.0) && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-500 flex-shrink-0">
              <Clock className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-600 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Daily Target Warning Alert
                </span>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                  {profile.todayHoursSpent || 2.8} / 7.0 Hours Spent Today
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                Minimum <strong>7.0 hours/day</strong> required. Spending under 7.0 hours for 3 consecutive days will automatically suspend candidate account access.
              </p>
            </div>
          </div>
          <button
            onClick={() => setView("profile-view")}
            className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-sm transition-transform hover:scale-105 flex-shrink-0"
          >
            View Daily Activity
          </button>
        </div>
      )}

      {/* Candidate Profile, Daily Activity & Validation Hub Card */}
      <div className="glass-card p-6 rounded-[32px] border border-slate-200 dark:border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-950/90 text-white space-y-5 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-4">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-royal" />
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-brand-royal flex items-center justify-center font-black text-xl text-white">
                {profile.name[0]}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black font-display text-white">{profile.name}</h3>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {(profile.validations || []).filter((v) => v.isValidated).length}/{(profile.validations || []).length || 5} Validated
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {profile.email} • Phone: {profile.phoneNumber || "+91 98765 43210"} • Target: {profile.targetExam || "TNPSC / Entrance"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setView("profile-view")}
            className="px-5 py-2.5 rounded-full bg-brand-royal hover:bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            Manage Candidate Profile & Daily Activity
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-extrabold uppercase text-slate-400">Total Hours Spent</span>
            <p className="text-2xl font-black text-white font-display">{profile.totalHoursSpent || 34.5} hrs</p>
            <p className="text-[11px] text-emerald-400 font-semibold">Today: {profile.todayHoursSpent || 2.8} hrs spent</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-extrabold uppercase text-slate-400">Instructor Remarks</span>
            <p className="text-sm font-extrabold text-white line-clamp-2">
              "{profile.remarks?.[0]?.text || "Excellent conceptual clarity in mock tests. Keep up the high speed!"}"
            </p>
            <span className="text-[9px] text-slate-400 block">— {profile.remarks?.[0]?.instructorName || "Faculty Lead"}</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-extrabold uppercase text-slate-400">Total Validation Checklist</span>
            <div className="flex items-center justify-between font-bold text-white">
              <span>Status: Verified Candidate</span>
              <span className="text-emerald-400 font-black">100%</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Uploaded Study Notes & Recorded Video Lectures for Candidate */}
      <div className="glass-card p-6 rounded-[32px] border border-slate-200 dark:border-white/10 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-brand-royal/10 text-brand-royal dark:text-blue-400 border border-brand-royal/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Batch Video Lectures & Study Notes
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Uploaded by your faculty and program admins for {activeBatch?.title || "your batch"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setView("teacher-uploaded-notes")}
            className="text-xs font-extrabold text-brand-royal dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>View All Materials</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Notes Card List */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-500" />
                Latest Study Notes & PDFs ({recentNotes.length})
              </span>
            </div>
            {recentNotes.length === 0 ? (
              <p className="text-xs text-slate-500 italic py-4 text-center">No study notes uploaded yet for your class.</p>
            ) : (
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {recentNotes.slice(0, 10).map((note) => (
                  <div key={note.id} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-white/5 flex items-center justify-between gap-3 shadow-sm">
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{note.title}</p>
                        {note.boardName && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-black uppercase">
                            {note.boardName.split(' ')[0]} {note.className || ''}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500">By {note.uploadedByName || "Faculty"} • {note.subjectTitle}</p>
                    </div>
                    <a
                      href={note.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-[10px] whitespace-nowrap shrink-0 shadow-sm"
                    >
                      Open PDF
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Videos Card List */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Tv className="w-4 h-4 text-brand-royal" />
                Recorded Video Lectures ({recentVideos.length})
              </span>
            </div>
            {recentVideos.length === 0 ? (
              <p className="text-xs text-slate-500 italic py-4 text-center">No video lectures uploaded yet for your class.</p>
            ) : (
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {recentVideos.slice(0, 10).map((vid) => (
                  <div key={vid.id} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-white/5 flex items-center justify-between gap-3 shadow-sm">
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{vid.title}</p>
                        {vid.boardName && (
                          <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase">
                            {vid.boardName.split(' ')[0]} {vid.className || ''}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500">{vid.subjectTitle} • {Math.round((vid.duration || 600) / 60)} mins</p>
                    </div>
                    {vid.videoUrl && vid.videoUrl.startsWith("http") ? (
                      <a
                        href={vid.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-brand-royal text-white font-bold text-[10px] hover:bg-blue-700 whitespace-nowrap shrink-0 shadow-sm"
                      >
                        Watch Video
                      </a>
                    ) : (
                      <button
                        onClick={() => setView("course-view")}
                        className="px-3 py-1.5 rounded-lg bg-brand-royal text-white font-bold text-[10px] hover:bg-blue-700 whitespace-nowrap shrink-0 shadow-sm"
                      >
                        Watch Video
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area Grid: Today's Plan & Performance Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Today's Study Plan & Enrolled Exam Programs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Detailed Performance & Academic Analysis Report */}
          {detailedReport && (
            <div className="glass-glow-card box-backlight-purple p-6 sm:p-7 rounded-[32px] border border-purple-500/30 space-y-5 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">
                      Detailed Academic &amp; Performance Report
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      Instructor Assessment, Daily Activity &amp; Assignment Evaluations
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 text-[11px] font-black uppercase tracking-wider border border-purple-500/20">
                  Target: {detailedReport.candidateInfo?.targetExam || 'JEE Main & TNPSC'}
                </span>
              </div>

              {/* Grid 1: Performance Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Tests Attempted</span>
                  <p className="text-lg font-black text-slate-900 dark:text-white">{detailedReport.performanceMetrics?.totalTestsAttempted || 0}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Accuracy Rate</span>
                  <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{detailedReport.performanceMetrics?.accuracyRate || 90}%</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Estimated AIR</span>
                  <p className="text-lg font-black text-amber-600 dark:text-amber-400">#{detailedReport.performanceMetrics?.estimatedAIR || 120}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase">Total Study Time</span>
                  <p className="text-lg font-black text-blue-600 dark:text-blue-400">{detailedReport.candidateInfo?.totalHoursSpent || 34.5} hrs</p>
                </div>
              </div>

              {/* Instructor Daily Tasks & Assigned Tests */}
              {detailedReport.assignedTasks && detailedReport.assignedTasks.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-purple-500" /> Instructor Assigned Daily Tests &amp; Tasks
                    </span>
                  </div>
                  <div className="space-y-2">
                    {detailedReport.assignedTasks.map((t: any) => (
                      <div key={t.id} className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 flex items-center justify-between gap-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={t.isCompleted}
                            onChange={() => handleToggleTask(t.id, t.isCompleted)}
                            className="w-4 h-4 rounded text-purple-600 cursor-pointer"
                          />
                          <div>
                            <p className={`text-xs font-bold ${t.isCompleted ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>{t.title}</p>
                            <p className="text-[10px] text-slate-500">{t.taskType} • Assigned by {t.instructorName} • Due {t.dueDate}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${t.isCompleted ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
                          {t.isCompleted ? 'Completed' : 'Pending'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Remarks & Feedback */}
              {detailedReport.instructorRemarks && detailedReport.instructorRemarks.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-blue-500" /> Faculty Reviews &amp; Recommendations
                  </span>
                  <div className="space-y-2">
                    {detailedReport.instructorRemarks.slice(0, 3).map((r: any, idx: number) => (
                      <div key={idx} className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 text-xs space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-extrabold text-brand-royal dark:text-blue-400">{r.instructorName || 'Faculty Mentor'}</span>
                          <span className="text-slate-400">{r.date}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Today's Study Plan Widget */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Today&apos;s Study Plan
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-500">
                {new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}
              </span>
            </div>

            <div className="space-y-3">
              {todaysStudyPlan.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-brand-royal/5 transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-royal/10 text-brand-royal font-black text-xs shrink-0">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.type} • {item.duration}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (item.type === "Mock Test") setView("quiz-view");
                      else if (item.type === "Live Class") setView("webrtc-live");
                      else setView("course-view");
                    }}
                    className="p-2 rounded-xl bg-brand-royal/10 hover:bg-brand-royal text-brand-royal hover:text-white transition-colors shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Current Affairs & News Bulletin (TNPSC & UPSC Dedicated) */}
          <div className="glass-glow-card box-backlight-emerald p-6 sm:p-8 rounded-[36px] border border-emerald-500/30 relative overflow-hidden space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white font-display tracking-tight">
                    Daily TN & National Current Affairs Digest
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    Updated Daily for TNPSC Group 1/2/4 & UPSC Civil Services
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 font-black text-[11px] uppercase tracking-wider border border-emerald-500/30">
                July 27, 2026 Edition
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* TN State Article */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400">
                    Tamil Nadu State Affairs
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">Dinamani & TN Govt Gazette</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  Tamil Nadu Pudhumai Penn & Tamil Pudhalvan Scheme 2026 Rollout
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Monthly financial grant of ₹1,000 expanded to boost Gross Enrollment Ratio (GER) in higher education across 38 districts.
                </p>
                <div className="flex items-center justify-between pt-1">
                  <a
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download TN Digest PDF</span>
                  </a>
                  <button
                    onClick={() => setView("quiz-view")}
                    className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider hover:bg-emerald-700 transition-all"
                  >
                    Take 5-Q Quiz
                  </button>
                </div>
              </div>

              {/* UPSC Article */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400">
                    UPSC National & IR
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">The Hindu & PIB Delhi</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  UPSC GS-II Strategy: Federalism & Landmark Constitutional Bench Rulings
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Analytical breakdown of Article 200, Governor assent timelines, and state autonomy balance for GS Paper 2.
                </p>
                <div className="flex items-center justify-between pt-1">
                  <a
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download UPSC Summary PDF</span>
                  </a>
                  <button
                    onClick={() => setView("quiz-view")}
                    className="px-3 py-1 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider hover:bg-purple-700 transition-all"
                  >
                    Take 5-Q Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* UPSC Mains & TNPSC Group 1 Answer Sheet Review Hub */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Mains Descriptive Answer Evaluation Hub
                </h3>
              </div>
              <button
                onClick={() => setView("assignments")}
                className="px-3.5 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-black uppercase tracking-wider hover:bg-indigo-700 transition-all shadow-md"
              >
                Upload Answer Sheet
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-700 dark:text-emerald-400">
                    TNPSC Group 1 Mains: Unit 8 Essay
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black">
                    Evaluated Score: 18 / 25
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  &ldquo;Examine the role of Dravidian Movement and Social Reformers in shaping modern Tamil Nadu education policy.&rdquo;
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 italic bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-emerald-500/20">
                  Evaluator Feedback: &ldquo;Excellent historical timeline and Thirukkural references. Include statistics on Gross Enrollment Ratio (GER) in TN for top marks.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Enrolled Exam Programs */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
                Enrolled Exam Programs
              </h3>
              <button
                onClick={() => setView("course-view")}
                className="text-xs font-bold text-brand-royal dark:text-brand-royal-light hover:underline flex items-center gap-1"
              >
                <span>View All Programs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeBatch?.subjects?.map((sub) => (
                <div
                  key={sub.id}
                  onClick={() => {
                    setActiveCourseContext(sub.id, sub.chapters?.[0]?.id || null, null);
                    setView("course-view");
                  }}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 hover:border-brand-royal/40 transition-all cursor-pointer space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-brand-royal/10 text-brand-royal dark:text-brand-royal-light uppercase">
                      {sub.title}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold">
                      {sub.chapters?.length || 0} Modules
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-royal dark:group-hover:text-brand-royal-light transition-colors">
                    {sub.title} Program
                  </h4>

                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-brand-royal h-full rounded-full transition-all"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                    <span>Progress: 45%</span>
                    <span>12 Topics Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Weak/Strong Topics, Upcoming Mock Tests, Bookmarks */}
        <div className="space-y-6">
          {/* Weak & Strong Topics Card */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
              Topic Performance Insights
            </h3>

            {/* Strong Topics */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                Strong Topics (High Accuracy)
              </span>
              <div className="space-y-1.5">
                {strongTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weak Topics */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                Weak Topics (Needs Practice)
              </span>
              <div className="space-y-1.5">
                {weakTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-700 dark:text-rose-300 flex items-center gap-2"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Live Classes & Meetings */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Tv className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
              Live Learning Portal
            </h3>

            {dbMeetings.length === 0 ? (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic py-2">
                No live classes scheduled for this batch right now.
              </p>
            ) : (
              dbMeetings.map((m) => {
                const status = getMeetingStatus(m.date, m.startTime, m.endTime);
                return (
                  <div
                    key={m.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {m.title}
                      </span>
                      <span
                        className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                          status === "Live"
                            ? "bg-red-500 text-white animate-pulse"
                            : "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">Instructor: {m.hostName}</p>
                    {status === "Live" && (
                      <button
                        onClick={() => {
                          joinLiveRoom({
                            roomName: m.title,
                            participantName: profile.name,
                            isTeacher: false,
                          });
                          setView("webrtc-live");
                        }}
                        className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase"
                      >
                        Join Live Class Now
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Bookmarks & Quick Notes */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
              Saved Bookmarks ({bookmarks.length})
            </h3>
            {bookmarks.length === 0 ? (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic py-2">
                No bookmarked topics yet. Save key formulas and notes during revision.
              </p>
            ) : (
              <div className="space-y-2">
                {bookmarks.slice(0, 3).map((bm) => (
                  <div
                    key={bm.id}
                    onClick={() => setView("course-view")}
                    className="p-3 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-brand-royal/5 cursor-pointer text-xs"
                  >
                    <h5 className="font-bold text-slate-900 dark:text-white">{bm.topicTitle}</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5">{bm.subjectTitle}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
