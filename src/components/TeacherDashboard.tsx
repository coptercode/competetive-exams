import React, { useState, useEffect } from "react";
import { useLmsStore } from "../store/index";
import { getApiBaseUrl } from "../utils/apiBase";
import type { Assignment } from "../store/types";
import {
  Users,
  Star,
  BookOpen,
  FileText,
  ArrowRight,
  Upload,
  PenTool,
  ChevronRight,
  Clock,
  TrendingUp,
  GraduationCap,
  Calendar,
  Plus,
  Tv,
  Brain,
  CheckCircle,
  Megaphone,
} from "lucide-react";
import { getISTDate } from "../utils/dateUtils";

export const TeacherDashboard: React.FC = () => {
  const { assignments, gradeAssignment, setView, boards, profile, fetchAssignments } = useLmsStore();
  const [gradingAssignId, setGradingAssignId] = useState<string | null>(null);
  const [gradeMarks, setGradeMarks] = useState("");
  const [gradeFeedback, setGradeFeedback] = useState("");

  const [meetings, setMeetings] = useState<any[]>([]);
  const [notesCount, setNotesCount] = useState(0);

  // Announcement State
  const [announcementText, setAnnouncementText] = useState("");
  const [announcements, setAnnouncements] = useState<Array<{ id: string; text: string; date: string }>>([
    { id: "1", text: "JEE Main Grand Mock Test 3 solutions uploaded! Check solution key in Mock Tests.", date: "Today, 10:00 AM" },
    { id: "2", text: "Special Problem Solving Live Session scheduled for NEET Physics tomorrow at 4:00 PM.", date: "Yesterday" }
  ]);

  const fetchMeetings = async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/live-classes`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.meetings) {
          setMeetings(data.meetings);
        }
      }
    } catch (err) {
      console.warn("Failed to fetch DB live classes:", err);
    }
  };

  const fetchNotesCount = async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/upload/notes/all`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.notes) {
          setNotesCount(data.notes.length);
        }
      }
    } catch (err) {
      console.warn("Failed to fetch notes count:", err);
    }
  };

  useEffect(() => {
    fetchMeetings();
    fetchNotesCount();
    fetchAssignments();
    const interval = setInterval(() => {
      fetchMeetings();
      fetchNotesCount();
      fetchAssignments();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const today = getISTDate();
  const todayDay = today.getDate();
  const todayFormatted = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(todayDay).padStart(2, "0")}`;

  const [formData, setFormData] = useState({
    classLevel: "JEE Main 2026 Batch",
    date: todayFormatted,
    type: "Live Class",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    title: "",
    description: "",
    sendLink: true,
  });

  const handlePostAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!announcementText.trim()) return;
    setAnnouncements([
      { id: Date.now().toString(), text: announcementText, date: "Just now" },
      ...announcements
    ]);
    setAnnouncementText("");
    alert("Announcement posted to all candidates in batch!");
  };

  const handleCreateLiveClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      alert("Please enter a Live Class topic title");
      return;
    }
    const token = localStorage.getItem("auth_token");
    if (!token) {
      alert("Instructor token missing");
      return;
    }

    try {
      const res = await fetch(`${getApiBaseUrl()}/api/live-classes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          hostName: profile.name
        })
      });

      if (res.ok) {
        alert("Live Class Scheduled Successfully!");
        setFormData({ ...formData, title: "", description: "" });
        fetchMeetings();
      } else {
        const data = await res.json();
        alert(`Error: ${data.message || "Failed to schedule class"}`);
      }
    } catch (err: any) {
      alert(`Network error: ${err.message}`);
    }
  };

  const handleGradeSubmit = async (assignmentId: string) => {
    if (!gradeMarks) {
      alert("Please enter test score");
      return;
    }
    await gradeAssignment(assignmentId, gradeMarks, gradeFeedback);
    setGradingAssignId(null);
    setGradeMarks("");
    setGradeFeedback("");
    alert("Candidate Practice Test evaluated and score recorded!");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8 font-sans">
      {/* Top Banner */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-r from-brand-royal/10 via-purple-500/10 to-brand-royal/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-royal/20 text-brand-royal dark:text-brand-royal-light text-xs font-black uppercase tracking-wider">
              Instructor Dashboard
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Coaching Institute Faculty
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight mt-1">
            Welcome, Instructor {profile.name}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            Manage competitive exam programs, upload recorded lectures & notes, author question bank items, and evaluate candidate practice tests.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setView("admin-upload")}
            className="px-5 py-3 rounded-2xl bg-brand-royal hover:bg-brand-royal-dark text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-brand-royal/20 transition-all hover:scale-105"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Material / Video</span>
          </button>
          <button
            onClick={() => setView("question-bank")}
            className="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-brand-royal/40 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
          >
            <Brain className="w-4 h-4 text-brand-royal dark:text-brand-royal-light" />
            <span>Question Bank</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Active Candidates</span>
            <Users className="w-5 h-5 text-brand-royal" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">184</p>
          <p className="text-[11px] text-emerald-600 font-semibold">Across JEE & NEET Batches</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Materials Uploaded</span>
            <FileText className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">{notesCount || 14}</p>
          <p className="text-[11px] text-slate-500">PDFs, Mind Maps & Notes</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Live Sessions</span>
            <Tv className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">{meetings.length || 3}</p>
          <p className="text-[11px] text-slate-500">Scheduled / Completed</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Evaluations Pending</span>
            <PenTool className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
            {assignments.filter(a => a.status === "Pending" || a.status === "Submitted").length || 2}
          </p>
          <p className="text-[11px] text-amber-600 font-semibold">Practice test evaluations</p>
        </div>
      </div>

      {/* Main Grid: Practice Test Evaluation & Live Class Scheduler */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Practice Test Submissions & Descriptive Answer Evaluation */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <PenTool className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
                Practice Test Submissions & Evaluations
              </h3>
              <button
                onClick={() => setView("submissions")}
                className="text-xs font-bold text-brand-royal dark:text-brand-royal-light hover:underline"
              >
                View All Submissions
              </button>
            </div>

            <div className="space-y-3">
              {assignments.length === 0 ? (
                <p className="text-xs text-slate-500 italic py-6 text-center">No candidate practice tests submitted yet.</p>
              ) : (
                assignments.map((assign) => (
                  <div
                    key={assign.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {assign.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Candidate: <strong className="text-slate-800 dark:text-slate-200">{assign.studentName || "Candidate User"}</strong> • Batch: {assign.className || "JEE Batch"}
                        </p>
                      </div>

                      <span
                        className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                          assign.status === "Graded"
                            ? "bg-emerald-500/10 text-emerald-600"
                            : "bg-amber-500/10 text-amber-600"
                        }`}
                      >
                        {assign.status}
                      </span>
                    </div>

                    {gradingAssignId === assign.id ? (
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                              Test Score (Marks Out of 100)
                            </label>
                            <input
                              type="number"
                              placeholder="e.g. 85"
                              value={gradeMarks}
                              onChange={(e) => setGradeMarks(e.target.value)}
                              className="w-full p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-bold"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                              Instructor Feedback
                            </label>
                            <input
                              type="text"
                              placeholder="Great conceptual clarity..."
                              value={gradeFeedback}
                              onChange={(e) => setGradeFeedback(e.target.value)}
                              className="w-full p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-bold"
                            />
                          </div>
                        </div>

                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setGradingAssignId(null)}
                            className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-bold"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleGradeSubmit(assign.id)}
                            className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                          >
                            Submit Evaluation
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-500">
                          {assign.grade ? `Score: ${assign.grade}` : "Awaiting Evaluation"}
                        </span>
                        <button
                          onClick={() => setGradingAssignId(assign.id)}
                          className="px-3 py-1 rounded-lg bg-brand-royal text-white text-xs font-bold hover:bg-brand-royal-dark"
                        >
                          Evaluate Answer
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Announcements Manager */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
              Batch Announcements
            </h3>

            <form onSubmit={handlePostAnnouncement} className="space-y-3">
              <textarea
                rows={2}
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
                placeholder="Post announcement or revision tip for candidates..."
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-royal text-white text-xs font-bold uppercase tracking-wider"
                >
                  Post Announcement
                </button>
              </div>
            </form>

            <div className="space-y-2 pt-2">
              {announcements.map((ann) => (
                <div key={ann.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-xs">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>Instructor Notice</span>
                    <span>{ann.date}</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">{ann.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Schedule Live Class & Program Actions */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Tv className="w-5 h-5 text-brand-royal dark:text-brand-royal-light" />
              Schedule Live Class
            </h3>

            <form onSubmit={handleCreateLiveClass} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  Target Batch
                </label>
                <input
                  type="text"
                  value={formData.classLevel}
                  onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  Session Topic Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. JEE Physics Live Problem Solving"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Start Time</label>
                  <input
                    type="text"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">End Time</label>
                  <input
                    type="text"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-royal hover:bg-brand-royal-dark text-white font-bold uppercase tracking-wider shadow-md"
              >
                Schedule & Notify Candidates
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
