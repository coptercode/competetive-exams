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
} from "lucide-react";
import { getISTDate } from "../utils/dateUtils";

export const TeacherDashboard: React.FC = () => {
  const { assignments, gradeAssignment, setView, boards, profile, fetchAssignments } = useLmsStore();
  const [gradingAssignId, setGradingAssignId] = useState<string | null>(null);
  const [generatedRoomCode, setGeneratedRoomCode] = useState("");



  // Meetings schedule state initialized with mocks, updated by DB
  const [meetings, setMeetings] = useState<any[]>([]);
  const [notesCount, setNotesCount] = useState(0);

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
  const todayFormatted = `${todayDay.toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`;

  const [selectedDay, setSelectedDay] = useState(todayDay);

  const [formData, setFormData] = useState({
    classLevel: "Class 12",
    date: todayFormatted,
    type: "Live Class",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    title: "",
    description: "",
    sendLink: true,
  });

  const handleDaySelect = (dayNum: number) => {
    setSelectedDay(dayNum);
    const formattedDay = dayNum.toString().padStart(2, "0");
    setFormData((prev) => ({
      ...prev,
      date: `${formattedDay}/06/2026`,
    }));
  };

  const handleCreateMeeting = async (e: React.FormEvent) => {
    e.preventDefault();

    const dateParts = formData.date.split("/");
    const dbDate =
      dateParts.length === 3
          ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
          : `2026-06-${selectedDay.toString().padStart(2, "0")}`;

    const token = localStorage.getItem("auth_token");
    if (!token) return;

    try {
      const res = await fetch(`${getApiBaseUrl()}/api/live-classes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: formData.title,
          classLevel: formData.classLevel,
          date: dbDate,
          startTime: formData.startTime,
          endTime: formData.endTime,
          type: formData.type,
          description: formData.description,
        })
      });

      if (res.ok) {
        const data = await res.json();
        const autoCode = data?.liveClass?.meetingUrl || "";
        setGeneratedRoomCode(autoCode);
        fetchMeetings();
        setFormData((prev) => ({
          ...prev,
          title: "",
          description: "",
        }));
        useLmsStore.getState().addNotification(
          "Meeting Scheduled",
          `Meeting "${formData.title}" scheduled! Join Code: ${autoCode}`,
          "success"
        );
      }
    } catch (err) {
      console.warn("Failed to schedule meeting:", err);
    }
  };

  const handleGoLive = async (m: any) => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;

    try {
      const res = await fetch(`${getApiBaseUrl()}/api/live-class/${m.id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: "Live" })
      });

      if (res.ok) {
        // Configure global mock variables for video call identity mapping
        (window as any)._activeTeacherSubject = m.subjectTitle || "General Lecture";
        (window as any)._activeTeacherClass = m.classLevel;

        useLmsStore.getState().joinLiveRoom({
          roomName: m.roomName,
          participantName: profile.name,
          isTeacher: true
        });
        setView("webrtc-live");
      }
    } catch (err) {
      console.warn("Failed to transition status to live:", err);
    }
  };

  const handleCompleteMeeting = async (m: any) => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;

    try {
      const res = await fetch(`${getApiBaseUrl()}/api/live-class/${m.id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: "Completed" })
      });

      if (res.ok) {
        fetchMeetings();
      }
    } catch (err) {
      console.warn("Failed to complete live class:", err);
    }
  };

  // Derive counts
  const liveCount = meetings.filter((m) => m.status === "Live").length;
  const upcomingCount = meetings.filter((m) => m.status === "Upcoming").length;
  const completedCount = meetings.filter((m) => m.status === "Completed").length;

  const teacherSubject = React.useMemo(() => {
    if (profile.subjectArea) return profile.subjectArea;
    for (const board of boards) {
      for (const classLevel of board.classes) {
        for (const sub of classLevel.subjects) {
          if (sub.id === profile.optedSubjectId) {
            return sub.title;
          }
        }
      }
    }
    return "Mathematics";
  }, [boards, profile.optedSubjectId, profile.subjectArea]);

  // Grading form states
  const [score, setScore] = useState("45");
  const [feedback, setFeedback] = useState(
    "Great analytical work. Make sure to detail the boundary conditions in your next electrochemistry graph.",
  );

  const submittedAssignments = assignments.filter(
    (a) => a.status === "Submitted",
  );

  const handleGradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gradingAssignId) return;

    gradeAssignment(gradingAssignId, `${score}/100`, feedback);

    // Add notification to student
    useLmsStore
      .getState()
      .addNotification(
        "Assignment Graded",
        `Your submission has been graded: ${score}/100. Check feedback details.`,
        "success",
      );

    setGradingAssignId(null);
  };

  const kpis = [
    {
      label: "Overall Notes Uploaded",
      value: String(notesCount),
      subtitle: notesCount === 1 ? "Note" : "Notes",
      icon: BookOpen,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      label: "Pending Grading Assignments",
      value: String(submittedAssignments.length),
      subtitle: submittedAssignments.length === 1 ? "Assignment" : "Assignments",
      icon: FileText,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      label: "Scheduled Sessions",
      value: String(meetings.filter((m) => m.status === "Live" || m.status === "Upcoming").length),
      subtitle: meetings.filter((m) => m.status === "Live" || m.status === "Upcoming").length === 1 ? "Session" : "Sessions",
      icon: Calendar,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
    {
      label: "Graded Submissions",
      value: String(assignments.filter((a) => a.status === "Graded").length),
      subtitle: assignments.filter((a) => a.status === "Graded").length === 1 ? "Submission" : "Submissions",
      icon: GraduationCap,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  ];

  // Current hour greeting
  const hour = getISTDate().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="space-y-6 font-sans text-left">
      {/* Welcome Header */}
      <div className="glass-card rounded-none p-6 border-slate-200 dark:border-white/5 bg-gradient-to-r from-brand-royal/5 via-brand-violet/5 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {greeting}, {profile.name} ({teacherSubject} Professor)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Here's your teaching overview for today.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{getISTDate().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short", year: "numeric" })}</span>
          </div>
        </div>
      </div>

      {/* Instructor Details Card */}
      <div className="glass-card rounded-xl p-5 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950/20 shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Full Name</span>
            <span className="font-semibold text-slate-900 dark:text-white block truncate">{profile.name}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Academic Email</span>
            <span className="font-semibold text-slate-900 dark:text-white block truncate">{profile.email}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Contact Phone</span>
            <span className="font-semibold text-slate-900 dark:text-white block font-mono">{profile.phoneNumber || "Not provided"}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Subject Specialization</span>
            <span className="font-semibold text-slate-900 dark:text-white block">{teacherSubject}</span>
          </div>
        </div>
      </div>


          {/* KPI Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-none p-5 border-slate-200 dark:border-white/5 flex flex-col gap-3"
                >
                  <div className={`w-9 h-9 rounded-none ${kpi.bg} ${kpi.border} border flex items-center justify-center ${kpi.color}`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white block leading-none">
                      {kpi.value}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-500 font-semibold mt-0.5 block">
                      {kpi.subtitle}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    {kpi.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Main Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: Quick Actions (3/5 width) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Section Header */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-royal" />
                <h3 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                  Quick Actions
                </h3>
              </div>

              {/* Quick Creator shortcuts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-none p-5 border-slate-200 dark:border-white/5 bg-brand-royal/5 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="w-10 h-10 rounded-none bg-brand-royal/10 border border-brand-royal/20 flex items-center justify-center">
                      <Upload className="w-5 h-5 text-brand-royal" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-3">
                      Upload Material
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Publish HD lectures, PDFs, and textbook chapters.
                    </p>
                  </div>
                  <button
                    onClick={() => setView("admin-upload")}
                    className="mt-4 py-2.5 rounded-none bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/5 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-950 hover:border-brand-royal/30 text-xs font-semibold flex items-center justify-center gap-1 transition-all active:scale-95"
                  >
                    <span>Open upload center</span>
                    <ChevronRight className="w-4 h-4 text-brand-royal" />
                  </button>
                </div>

                <div className="glass-card rounded-none p-5 border-slate-200 dark:border-white/5 bg-emerald-500/5 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="w-10 h-10 rounded-none bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-3">
                      View Submissions
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Review and grade homework submissions by class level.
                    </p>
                  </div>
                  <button
                    onClick={() => setView("submissions")}
                    className="mt-4 py-2.5 rounded-none bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/5 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-950 hover:border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1 transition-all active:scale-95"
                  >
                    <span>View submissions</span>
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Homework Submissions Review Tray (2/5 width) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Section Header */}
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-500" />
                <h3 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                  Grading Queue
                </h3>
              </div>

              {/* Homework Action Panel */}
              <div className="glass-card rounded-none p-5 border-slate-200 dark:border-white/5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-royal" />
                    <h3 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-widest">
                      Submissions
                    </h3>
                  </div>
                  {submittedAssignments.length > 0 && (
                    <span className="text-[9px] bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold px-2.5 py-1 rounded-none">
                      {submittedAssignments.length} {submittedAssignments.length === 1 ? "Paper" : "Papers"}
                    </span>
                  )}
                </div>

                {submittedAssignments.length === 0 ? (
                  <div className="text-center py-10">
                    <FileText className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                    <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                      No homework sheets awaiting review.
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-600 mt-1">
                      Submissions will appear here once students submit.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {submittedAssignments.map((a) => (
                      <div
                        key={a.id}
                        className="p-4 rounded-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-xs text-left space-y-3 hover:border-slate-300 dark:hover:border-white/10 transition-colors"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-white truncate">
                              {a.title}
                            </h4>
                            <span className="text-[10px] text-slate-500 dark:text-slate-500 mt-0.5 block">
                              {a.subjectTitle} • Submitted by {a.studentName || "Prathamesh"}
                            </span>
                          </div>
                          <span className="text-[9px] text-brand-royal dark:text-brand-royal-300 font-mono font-bold bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded-none border border-slate-300 dark:border-white/5 flex-shrink-0">
                            .pdf
                          </span>
                        </div>

                        {gradingAssignId === a.id ? (
                          <form
                            onSubmit={handleGradeSubmit}
                            className="space-y-3 border-t border-slate-200 dark:border-white/5 pt-3 animate-fade-in-up"
                          >
                            <div className="space-y-1">
                              <label className="text-[9px] font-bold text-slate-600 dark:text-slate-500 uppercase">
                                Score / Grade
                              </label>
                              <input
                                type="text"
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
                                className="premium-input rounded-none text-[11px] py-1.5"
                                required
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[9px] font-bold text-slate-600 dark:text-slate-500 uppercase">
                                Feedback
                              </label>
                              <textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="premium-input rounded-none text-[11px] py-1.5 h-20 resize-none"
                                required
                              />
                            </div>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => setGradingAssignId(null)}
                                className="w-1/3 py-2 rounded-none bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/5 text-[10px] text-slate-700 dark:text-slate-400 font-bold hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="w-2/3 premium-btn-primary rounded-none py-2 text-[10px]"
                              >
                                Submit Grade
                              </button>
                            </div>
                          </form>
                        ) : (
                          <button
                            onClick={() => {
                              setGradingAssignId(a.id);
                              setScore("92");
                              setFeedback("Superb conceptual breakdown of cells.");
                            }}
                            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-300 dark:border-white/5 hover:border-brand-royal/30 text-slate-800 dark:text-white rounded-none text-[10px] font-bold transition-all flex items-center justify-center gap-1.5"
                          >
                            <span>Evaluate Paper</span>
                            <ArrowRight className="w-3.5 h-3.5 text-brand-royal" />
                          </button>
                        )}
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
