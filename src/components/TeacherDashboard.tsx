import React, { useState, useEffect } from "react";
import { useLmsStore } from "../store/index";
import { profileAPI } from "../services/api";
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
  Edit3,
  X,
  ShieldCheck,
  MessageSquare,
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
      <div className="glass-glow-card p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-blue-600/10 dark:from-emerald-950/40 dark:via-teal-950/40 dark:to-blue-950/40 border border-emerald-500/30 shadow-2xl">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-emerald-500/20">
                Instructor Studio
              </span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-800/70 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                Coaching Institute Faculty
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight mt-1">
              Welcome, Instructor {profile.name}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Manage competitive exam programs, upload recorded lectures & notes, author question bank items, and evaluate candidate practice tests.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setView("admin-upload")}
              className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Material / Video</span>
            </button>
            <button
              onClick={() => setView("question-bank")}
              className="px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 text-slate-900 dark:text-slate-100 font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all hover:scale-105 shadow-md"
            >
              <Brain className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Question Bank</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div className="glass-glow-card p-5.5 rounded-2xl space-y-2 hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-extrabold uppercase tracking-wider">Active Candidates</span>
            <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Users className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight">184</p>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Across JEE & NEET Batches</p>
        </div>

        <div className="glass-glow-card p-5.5 rounded-2xl space-y-2 hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-extrabold uppercase tracking-wider">Materials Uploaded</span>
            <span className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
              <FileText className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">{notesCount || 14}</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">PDFs, Mind Maps & Notes</p>
        </div>

        <div className="glass-glow-card p-5.5 rounded-2xl space-y-2 hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-extrabold uppercase tracking-wider">Live Sessions</span>
            <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <Tv className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">{meetings.length || 3}</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">Scheduled / Completed</p>
        </div>

        <div className="glass-glow-card p-5.5 rounded-2xl space-y-2 hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-extrabold uppercase tracking-wider">Evaluations Pending</span>
            <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <PenTool className="w-5 h-5" />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
            {assignments.filter(a => a.status === "Pending" || a.status === "Submitted").length || 2}
          </p>
          <p className="text-[11px] text-amber-600 dark:text-amber-400 font-bold">Practice test evaluations</p>
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

      {/* Candidate Directory & Performance Auditor Console */}
      <CandidateAuditorSection />
    </div>
  );
};

// Candidate Directory & Auditor Sub-Component
const CandidateAuditorSection: React.FC = () => {
  const { profile, addStudentRemark, toggleStudentValidation, updateProfile } = useLmsStore();
  const [selectedCandidate, setSelectedCandidate] = useState<any | null>(null);
  const [showInstructorProfileModal, setShowInstructorProfileModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // New Remark Form State
  const [remarkText, setRemarkText] = useState("");
  const [remarkCategory, setRemarkCategory] = useState<"Performance" | "Attendance" | "Assignment" | "General">("Performance");
  const [remarkType, setRemarkType] = useState<"positive" | "warning" | "info">("positive");

  // Instructor Profile Form State
  const [instForm, setInstForm] = useState({
    name: profile.name || "Dr. R. Sundaram",
    email: profile.email || "sundaram.physics@aspire.edu",
    phoneNumber: profile.phoneNumber || "+91 94440 12345",
    subjectArea: profile.subjectArea || "Physics & TNPSC Polity Faculty",
    qualification: profile.qualification || "Ph.D. Quantum Mechanics / Senior Educator",
    avatarUrl: profile.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
  });

  // Sample Enrolled Candidates list
  const candidatesList = [
    {
      id: profile.id || "cand-101",
      name: profile.name || "Karthik Subramanian",
      email: profile.email || "karthik.subramanian@aspire.edu",
      phoneNumber: profile.phoneNumber || "+91 98765 43210",
      avatarUrl: profile.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      batch: "JEE Main & TNPSC Group 1",
      totalHoursSpent: profile.totalHoursSpent || 34.5,
      todayHoursSpent: profile.todayHoursSpent || 2.8,
      avgScore: 89,
      validations: profile.validations || [],
      remarks: profile.remarks || [],
      dailyActivity: profile.dailyActivity || [],
    },
    {
      id: "cand-102",
      name: "Divya Ramesh",
      email: "divya.ramesh@aspire.edu",
      phoneNumber: "+91 97890 12345",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
      batch: "NEET Medical 2026 Batch",
      totalHoursSpent: 42.0,
      todayHoursSpent: 3.5,
      avgScore: 94,
      validations: [
        { id: "val-1", title: "Candidate Identity Verification", description: "Government ID Verified", isValidated: true, category: "Identity", validatedBy: "Dr. R. Sundaram", validatedAt: "July 20, 2026" },
        { id: "val-2", title: "Exam Batch Enrollment Validation", description: "Enrolled in NEET Medical Batch", isValidated: true, category: "Enrollment", validatedBy: "Dr. R. Sundaram", validatedAt: "July 20, 2026" },
        { id: "val-3", title: "Curriculum Prerequisites Validation", description: "Class 12 PCB Criteria Verified", isValidated: true, category: "Academic", validatedBy: "Dr. R. Sundaram", validatedAt: "July 20, 2026" },
      ],
      remarks: [
        { id: "rem-101", instructorName: "Dr. R. Sundaram", date: "July 29, 2026", text: "Top performer in NEET Biology diagnostic mock test.", category: "Performance", type: "positive" },
      ],
      dailyActivity: [],
    },
    {
      id: "cand-103",
      name: "Anitha Paul",
      email: "anitha.p@aspire.edu",
      phoneNumber: "+91 98400 98765",
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
      batch: "UPSC Civil Services Mains Batch",
      totalHoursSpent: 28.4,
      todayHoursSpent: 1.2,
      avgScore: 82,
      validations: [
        { id: "val-1", title: "Candidate Identity Verification", description: "Aadhaar Card Verified", isValidated: true, category: "Identity", validatedBy: "Registrar Office", validatedAt: "July 18, 2026" },
      ],
      remarks: [],
      dailyActivity: [],
    },
  ];

  const filteredCandidates = candidatesList.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.batch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePostRemarkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!remarkText.trim()) return;
    addStudentRemark(selectedCandidate?.id || profile.id, {
      instructorName: profile.name || "Instructor Dr. R. Sundaram",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      text: remarkText,
      category: remarkCategory,
      type: remarkType,
    });
    setRemarkText("");
    alert("Instructor Remark officially recorded and published to candidate profile!");
  };

  const handleInstructorImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('Please select a valid image file (.jpg, .jpeg, .png, .webp).');
      return;
    }

    try {
      const res = await profileAPI.uploadAvatar(file);
      const newAvatarUrl = res.avatarUrl;
      setInstForm((prev) => ({ ...prev, avatarUrl: newAvatarUrl }));
      updateProfile({ avatarUrl: newAvatarUrl });
    } catch {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const dataUrl = reader.result as string;
          setInstForm((prev) => ({ ...prev, avatarUrl: dataUrl }));
          updateProfile({ avatarUrl: dataUrl });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveInstructorProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: instForm.name,
      email: instForm.email,
      phoneNumber: instForm.phoneNumber,
      subjectArea: instForm.subjectArea,
      qualification: instForm.qualification,
      avatarUrl: instForm.avatarUrl,
    });
    setShowInstructorProfileModal(false);
    alert("Instructor Profile updated successfully!");
  };

  return (
    <div className="space-y-6 pt-4">
      {/* Directory & Instructor Profile Banner Header */}
      <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-950/80 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-emerald-400" />
            <div>
              <h2 className="text-xl font-black font-display text-white">Candidates Directory & Performance Auditor</h2>
              <p className="text-xs text-slate-400">Inspect candidate daily activity, study hours, post evaluation remarks, and manage total validations.</p>
            </div>
          </div>

          <button
            onClick={() => setShowInstructorProfileModal(true)}
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Edit3 className="w-4 h-4" /> Edit Instructor Profile
          </button>
        </div>

        {/* Search Bar & Candidate Cards */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2.5 rounded-2xl">
          <input
            type="text"
            placeholder="Search candidates by name or batch..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none font-medium px-2"
          />
        </div>

        {/* Candidate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {filteredCandidates.map((cand) => {
            const valList = cand.validations || [];
            const valCount = valList.filter((v) => v.isValidated).length;
            const valPercent = Math.round((valCount / (valList.length || 5)) * 100);

            return (
              <div
                key={cand.id}
                onClick={() => setSelectedCandidate(cand)}
                className="p-5 rounded-3xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer space-y-3 group hover:scale-[1.02] shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <img src={cand.avatarUrl} alt={cand.name} className="w-12 h-12 rounded-2xl object-cover border-2 border-emerald-500/40" />
                  <div>
                    <h3 className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">{cand.name}</h3>
                    <p className="text-[10px] text-slate-400">{cand.batch}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-[10px] pt-2 border-t border-white/10">
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="text-slate-400 uppercase block">Study Hours</span>
                    <strong className="text-xs text-white">{cand.totalHoursSpent} hrs</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="text-slate-400 uppercase block">Validation</span>
                    <strong className="text-xs text-emerald-400">{valPercent}% Verified</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CANDIDATE AUDIT MODAL */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-[32px] p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 animate-fade-in-up text-left">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <img src={selectedCandidate.avatarUrl} alt={selectedCandidate.name} className="w-12 h-12 rounded-2xl object-cover border-2 border-emerald-500" />
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">{selectedCandidate.name}</h3>
                  <p className="text-xs text-slate-500">{selectedCandidate.email} • {selectedCandidate.batch}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCandidate(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Candidate Audit Stats Row */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Total Hours Spent</span>
                <span className="text-base font-black text-slate-900 dark:text-white font-display">{selectedCandidate.totalHoursSpent} hrs</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Average Score</span>
                <span className="text-base font-black text-slate-900 dark:text-white font-display">{selectedCandidate.avgScore}%</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Remarks Logged</span>
                <span className="text-base font-black text-slate-900 dark:text-white font-display">{(selectedCandidate.remarks || []).length}</span>
              </div>
            </div>

            {/* Total Validation Management */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Manage Candidate Total Validation
              </h4>

              <div className="space-y-2">
                {(selectedCandidate.validations || []).map((val: any) => (
                  <div key={val.id} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">{val.title}</span>
                      <span className="text-[10px] text-slate-500">{val.description}</span>
                    </div>

                    <button
                      onClick={() => {
                        const newStatus = !val.isValidated;
                        toggleStudentValidation(selectedCandidate.id, val.id, newStatus, profile.name || "Instructor Dr. R. Sundaram");
                        // Local state sync
                        setSelectedCandidate({
                          ...selectedCandidate,
                          validations: selectedCandidate.validations.map((v: any) => v.id === val.id ? { ...v, isValidated: newStatus } : v)
                        });
                      }}
                      className={`px-3 py-1.5 rounded-xl font-extrabold text-[10px] uppercase tracking-wider transition-all ${
                        val.isValidated
                          ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {val.isValidated ? "✓ Validated" : "Mark Validated"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Post New Instructor Remark Form */}
            <form onSubmit={handlePostRemarkSubmit} className="space-y-3 pt-2 border-t border-slate-200 dark:border-white/10">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-violet-500" /> Post Official Instructor Remark
              </h4>

              <textarea
                required
                rows={3}
                placeholder="Write remark or guidance notes for candidate..."
                value={remarkText}
                onChange={(e) => setRemarkText(e.target.value)}
                className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none"
              />

              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <select
                    value={remarkCategory}
                    onChange={(e) => setRemarkCategory(e.target.value as any)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-bold"
                  >
                    <option value="Performance">Performance</option>
                    <option value="Assignment">Assignment</option>
                    <option value="Attendance">Attendance</option>
                    <option value="General">General</option>
                  </select>

                  <select
                    value={remarkType}
                    onChange={(e) => setRemarkType(e.target.value as any)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-bold"
                  >
                    <option value="positive">Positive Badge</option>
                    <option value="warning">Warning Badge</option>
                    <option value="info">Info Badge</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-brand-royal hover:bg-blue-600 text-white font-black uppercase text-xs tracking-wider"
                >
                  Publish Remark
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* INSTRUCTOR PROFILE EDIT MODAL */}
      {showInstructorProfileModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-[32px] p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-5 animate-fade-in-up text-left">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Edit Instructor Profile</h3>
              <button onClick={() => setShowInstructorProfileModal(false)} className="p-1 rounded-full text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveInstructorProfile} className="space-y-4 text-xs font-bold">
              <div>
                <label className="text-slate-500 uppercase text-[10px] block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={instForm.name}
                  onChange={(e) => setInstForm({ ...instForm, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-slate-500 uppercase text-[10px] block mb-1">Faculty Subject Area</label>
                <input
                  type="text"
                  required
                  value={instForm.subjectArea}
                  onChange={(e) => setInstForm({ ...instForm, subjectArea: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-slate-500 uppercase text-[10px] block mb-1">Qualification / Designation</label>
                <input
                  type="text"
                  value={instForm.qualification}
                  onChange={(e) => setInstForm({ ...instForm, qualification: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-500 uppercase text-[10px] block mb-1">
                  Upload Instructor Profile Photo (.JPG, .JPEG, .PNG)
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleInstructorImageUpload}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer"
                />
                <input
                  type="url"
                  placeholder="Or enter custom image URL"
                  value={instForm.avatarUrl}
                  onChange={(e) => setInstForm({ ...instForm, avatarUrl: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setShowInstructorProfileModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-black uppercase"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
