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
    fetchDbMeetings();
    const interval = setInterval(fetchDbMeetings, 5000);
    return () => clearInterval(interval);
  }, [activeBatch?.title]);

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
      {/* Welcome Banner */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-gradient-to-r from-brand-royal/10 via-brand-purple/10 to-brand-royal/5">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-royal/20 text-brand-royal dark:text-brand-royal-light text-xs font-black uppercase tracking-wider">
                Candidate Prep Hub
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Batch: {activeBatch?.title || "JEE Main 2026 Batch"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Welcome back, {profile.name}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Your targeted preparation for <strong className="text-brand-royal dark:text-brand-royal-light">{activeCategory?.title || "Competitive Exams"}</strong> is on track. Review today&apos;s study plan and attempt upcoming mock tests.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setView("quiz-view")}
              className="px-5 py-3 rounded-2xl bg-brand-royal hover:bg-brand-royal-dark text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-brand-royal/25 transition-all hover:scale-105"
            >
              <Trophy className="w-4 h-4" />
              <span>Start Mock Test</span>
            </button>
            <button
              onClick={() => setView("ai-tutor")}
              className="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-brand-royal/40 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
            >
              <Brain className="w-4 h-4 text-brand-royal dark:text-brand-royal-light" />
              <span>AI Exam Assistant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Candidate Key Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Estimated Rank */}
        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Predicted Rank
            </span>
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
              <Trophy className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
            AIR #{estimatedRank}
          </p>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> Top 2% among 14,500 candidates
          </p>
        </div>

        {/* Accuracy Rate */}
        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Accuracy Rate
            </span>
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
              <Target className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
            {accuracyPercentage}%
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Based on {totalAttemptedMockTests || 4} mock tests
          </p>
        </div>

        {/* Study Time Spent */}
        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Time Spent Studying
            </span>
            <span className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
              <Clock className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
            {timeSpentStudyingHours} hrs
          </p>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
            +4.5 hrs this week
          </p>
        </div>

        {/* Completed Topics */}
        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Topics Mastered
            </span>
            <span className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
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

      {/* Main Content Area Grid: Today's Plan & Performance Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Today's Study Plan & Enrolled Exam Programs */}
        <div className="lg:col-span-2 space-y-6">
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
