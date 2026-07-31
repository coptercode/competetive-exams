import React, { useState } from "react";
import { useLmsStore } from "../store/index";
import { useUiStore } from "../store/useUiStore";
import { profileAPI } from "../services/api";
import {
  Award,
  Calendar,
  ShieldCheck,
  CreditCard,
  Sparkles,
  CheckCircle,
  Flame,
  Zap,
  Trophy,
  User,
  Edit3,
  Clock,
  BarChart3,
  TrendingUp,
  MessageSquare,
  BadgeCheck,
  X,
  Camera,
  Check,
  FileText,
  AlertCircle,
  BookOpen,
  UserCheck,
  Upload,
} from "lucide-react";

const PRESET_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
];

export const StudentProfile: React.FC = () => {
  const { profile, updateProfile, boards, quizResults, completedTopicIds } = useLmsStore();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "activity" | "performance" | "remarks" | "validation">("overview");

  // Form State for Required Fields Editing
  const [formData, setFormData] = useState({
    firstName: profile.firstName || profile.name.split(" ")[0] || "Karthik",
    lastName: profile.lastName || profile.name.split(" ").slice(1).join(" ") || "Subramanian",
    email: profile.email || "karthik.subramanian@aspire.edu",
    phoneNumber: profile.phoneNumber || "+91 98765 43210",
    location: profile.location || "Chennai, Tamil Nadu",
    age: profile.age || "21",
    qualification: profile.qualification || "B.Tech Electrical / Class 12 Scholar",
    targetExam: profile.targetExam || "TNPSC Group 1 & JEE Main 2026",
    preferredExamCategory: profile.preferredExamCategory || "TNPSC Government Exams",
    medium: profile.medium || "Bilingual",
    avatarUrl: profile.avatarUrl || PRESET_AVATARS[0],
  });

  const activeBoard = boards.find((b) => b.id === profile.selectedBoardId) || boards[0];
  const activeClass = activeBoard?.classes?.find((c) => c.id === profile.selectedClassId) || activeBoard?.classes?.[0];

  const handleImageFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('Please select a valid image file (.jpg, .jpeg, .png, .webp).');
      return;
    }

    try {
      const res = await profileAPI.uploadAvatar(file);
      const newAvatarUrl = res.avatarUrl;
      setFormData((prev) => ({ ...prev, avatarUrl: newAvatarUrl }));
      updateProfile({ avatarUrl: newAvatarUrl });
    } catch {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const dataUrl = reader.result as string;
          setFormData((prev) => ({ ...prev, avatarUrl: dataUrl }));
          updateProfile({ avatarUrl: dataUrl });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      firstName: formData.firstName,
      lastName: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      location: formData.location,
      age: formData.age,
      qualification: formData.qualification,
      targetExam: formData.targetExam,
      preferredExamCategory: formData.preferredExamCategory as any,
      medium: formData.medium as any,
      avatarUrl: formData.avatarUrl,
    });
    setIsEditing(false);
    useUiStore.getState().showAlert("Candidate Profile updated successfully!");
  };

  // Performance calculations
  const totalQuizzes = quizResults.length || 8;
  const avgScore = quizResults.length > 0
    ? Math.round(quizResults.reduce((acc, curr) => acc + (curr.score || 0), 0) / quizResults.length)
    : 89;
  const totalTopicsFinished = completedTopicIds.length || 18;
  const totalHours = profile.totalHoursSpent || 34.5;
  const todayHours = profile.todayHoursSpent || 2.8;

  // Validation Metrics
  const validationsList = profile.validations || [];
  const validatedCount = validationsList.filter((v) => v.isValidated).length;
  const totalValidations = validationsList.length || 5;
  const validationPercent = Math.round((validatedCount / (totalValidations || 1)) * 100);

  const dailyLogs = profile.dailyActivity || [
    { date: "2026-07-24", dayName: "Fri", hoursSpent: 3.5, quizzesCompleted: 2, topicsCompleted: 5, scorePercentage: 88 },
    { date: "2026-07-25", dayName: "Sat", hoursSpent: 4.2, quizzesCompleted: 3, topicsCompleted: 6, scorePercentage: 92 },
    { date: "2026-07-26", dayName: "Sun", hoursSpent: 2.0, quizzesCompleted: 1, topicsCompleted: 3, scorePercentage: 85 },
    { date: "2026-07-27", dayName: "Mon", hoursSpent: 5.0, quizzesCompleted: 4, topicsCompleted: 8, scorePercentage: 95 },
    { date: "2026-07-28", dayName: "Tue", hoursSpent: 3.8, quizzesCompleted: 2, topicsCompleted: 4, scorePercentage: 90 },
    { date: "2026-07-29", dayName: "Wed", hoursSpent: 4.5, quizzesCompleted: 3, topicsCompleted: 7, scorePercentage: 94 },
    { date: "2026-07-30", dayName: "Thu", hoursSpent: 2.8, quizzesCompleted: 2, topicsCompleted: 4, scorePercentage: 89 },
  ];

  const maxHoursInWeek = Math.max(...dailyLogs.map((d) => d.hoursSpent), 6);

  return (
    <div className="space-y-6 font-sans text-left pb-12">
      {/* Upper Profile Banner */}
      <div className="glass-card p-6 border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/80 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden rounded-[32px] shadow-xl">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-brand-violet/15 blur-[90px] rounded-full pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          {/* Avatar with Photo or Fallback */}
          <div className="relative group">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-20 h-20 rounded-3xl object-cover border-2 border-brand-royal shadow-xl shadow-brand-royal/20"
              />
            ) : (
              <div className="w-20 h-20 rounded-3xl bg-brand-royal flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-brand-royal/20">
                {profile.name[0]}
              </div>
            )}
            <button
              onClick={() => setIsEditing(true)}
              className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white border border-slate-700 hover:bg-brand-royal transition-all shadow-md"
              title="Edit Profile Photo & Required Fields"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-xl sm:text-3xl font-black font-display text-slate-900 dark:text-white tracking-tight">
                {profile.name}
              </h2>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <BadgeCheck className="w-3 h-3" /> {validationPercent}% Validated Candidate
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {profile.email} • {profile.phoneNumber || "+91 98765 43210"} • {profile.location || "Tamil Nadu"}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-royal/10 text-brand-royal dark:text-brand-royal-light border border-brand-royal/20">
                Target: {profile.targetExam || "TNPSC & Entrance"}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Medium: {profile.medium || "Bilingual"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button & Quick Analytics */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="grid grid-cols-3 gap-3 w-full sm:w-auto">
            <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl text-center">
              <Flame className="w-5 h-5 text-orange-500 mx-auto fill-orange-500/20" />
              <span className="text-sm font-extrabold text-slate-900 dark:text-white block mt-1">
                {profile.streak || 14} Days
              </span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">
                Streak
              </span>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl text-center">
              <Clock className="w-5 h-5 text-blue-500 mx-auto" />
              <span className="text-sm font-extrabold text-slate-900 dark:text-white block mt-1">
                {totalHours}h
              </span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">
                Total Hours
              </span>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl text-center">
              <Trophy className="w-5 h-5 text-violet-500 mx-auto fill-violet-500/20" />
              <span className="text-sm font-extrabold text-slate-900 dark:text-white block mt-1">
                {avgScore}%
              </span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">
                Avg Score
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-brand-royal hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-royal/20 transition-all"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-2 overflow-x-auto">
        {[
          { id: "overview", label: "Profile Overview", icon: User },
          { id: "activity", label: "Daily Activity & Hours", icon: BarChart3 },
          { id: "performance", label: "Exam Performance", icon: TrendingUp },
          { id: "remarks", label: "Instructor Remarks", icon: MessageSquare },
          { id: "validation", label: "Total Validation", icon: ShieldCheck },
        ].map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                isActive
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <IconComp className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.id === "validation" && (
                <span className="ml-1 text-[9px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-black">
                  {validatedCount}/{totalValidations}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: Overview */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Required Candidate Fields & Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-brand-royal" />
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                    Candidate Profile & Required Fields
                  </h3>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-xs font-bold text-brand-royal dark:text-brand-violet-light hover:underline flex items-center gap-1"
                >
                  <Edit3 className="w-3.5 h-3.5" /> Edit Fields
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">First Name</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {profile.firstName || profile.name.split(" ")[0]}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Last Name</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {profile.lastName || profile.name.split(" ").slice(1).join(" ") || "Subramanian"}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Registered Email</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5 truncate">
                    {profile.email}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Contact Phone</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {profile.phoneNumber || "+91 98765 43210"}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Target Exam / Goal</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {profile.targetExam || "TNPSC Group 1 & JEE Main 2026"}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Academic Qualification</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {profile.qualification || "B.Tech Electrical / Class 12 Scholar"}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Location / State</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {profile.location || "Chennai, Tamil Nadu"}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Instruction Medium</span>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {profile.medium || "Bilingual (Tamil & English)"}
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements & Certificates */}
            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/5 pb-3">
                <Award className="w-5 h-5 text-brand-royal" />
                <h3 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-widest">
                  Certifications & Badges
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-2 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-royal" />
                    <span className="text-[9px] text-brand-royal font-black uppercase tracking-wider">
                      Academic Credential
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                    <div className="flex justify-between items-center text-[10px] bg-white dark:bg-slate-950 p-2 rounded-xl border border-slate-200 dark:border-white/5">
                      <span>Grade: <strong className="text-emerald-600 dark:text-emerald-400">{cert.grade}</strong></span>
                      <span className="text-slate-500">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats & Remarks Summary */}
          <div className="space-y-6">
            {/* Hours Spent Summary Card */}
            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-4 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Study Hours Counter
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Timer Active" />
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-3xl font-black text-slate-900 dark:text-white font-display">
                    {totalHours} <span className="text-xs font-bold text-slate-500">hrs</span>
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold mt-0.5">
                    Total Time Spent on Platform
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200 dark:border-white/10 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/5">
                    <span className="text-[9px] text-slate-500 font-bold uppercase block">Today's Study</span>
                    <span className="font-extrabold text-slate-900 dark:text-white">{todayHours} hrs</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/5">
                    <span className="text-[9px] text-slate-500 font-bold uppercase block">Daily Average</span>
                    <span className="font-extrabold text-slate-900 dark:text-white">3.6 hrs/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Validation Status Card */}
            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Total Validation
                </span>
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {validationPercent}% Validated
                </span>
              </div>

              <div className="space-y-2">
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${validationPercent}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500 text-right font-bold">
                  {validatedCount} of {totalValidations} Requirements Verified
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {validationsList.slice(0, 3).map((val) => (
                  <div key={val.id} className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                    <span className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[180px]">
                      {val.title}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Validated
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveTab("validation")}
                className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              >
                View Full Validation Status
              </button>
            </div>

            {/* Latest Remarks Widget */}
            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-violet-500" /> Instructor Remarks
                </span>
                <span className="text-[10px] font-bold text-slate-50">{(profile.remarks || []).length} Notes</span>
              </div>

              {(profile.remarks || []).slice(0, 2).map((rem) => (
                <div key={rem.id} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-900 dark:text-white text-[11px]">{rem.instructorName}</span>
                    <span className="text-[9px] text-slate-500">{rem.date}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-normal">{rem.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: Daily Activity & Hours */}
      {activeTab === "activity" && (
        <div className="space-y-6">
          <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-brand-royal" /> Daily Study Activity & Hours Graph
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Track your daily study time, completed practice tests, and topic coverage over the last 7 days.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-xs text-slate-500 font-bold block">Total Time Tracked</span>
                  <span className="text-lg font-black text-brand-royal dark:text-brand-violet-light font-display">
                    {totalHours} Hours
                  </span>
                </div>
              </div>
            </div>

            {/* 7-Day Bar Chart */}
            <div className="space-y-3">
              <div className="h-56 flex items-end justify-between gap-2 sm:gap-4 pt-6 pb-2 px-4 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-white/5">
                {dailyLogs.map((log, idx) => {
                  const barHeight = Math.min(100, Math.max(15, Math.round((log.hoursSpent / maxHoursInWeek) * 100)));
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-extrabold text-slate-700 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-2 py-0.5 rounded-full">
                        {log.hoursSpent}h
                      </span>
                      <div
                        className="w-full max-w-[48px] bg-gradient-to-t from-blue-600 via-indigo-600 to-violet-500 rounded-2xl transition-all duration-500 group-hover:scale-105 shadow-md shadow-blue-500/20"
                        style={{ height: `${barHeight}%` }}
                      />
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">
                        {log.dayName}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Day Breakdown Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-4">
                {dailyLogs.map((log, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{log.dayName} ({log.date.slice(8)})</span>
                    <p className="text-base font-black text-slate-900 dark:text-white font-display">{log.hoursSpent} hrs</p>
                    <div className="text-[9px] text-slate-500 space-y-0.5">
                      <p>Quizzes: <strong>{log.quizzesCompleted}</strong></p>
                      <p>Topics: <strong>{log.topicsCompleted}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: Exam Performance */}
      {activeTab === "performance" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-2 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto" />
              <span className="text-2xl font-black text-slate-900 dark:text-white font-display block">{avgScore}%</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Average Test Score</span>
            </div>

            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-2 text-center">
              <FileText className="w-8 h-8 text-blue-500 mx-auto" />
              <span className="text-2xl font-black text-slate-900 dark:text-white font-display block">{totalQuizzes}</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tests Attempted</span>
            </div>

            <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-2 text-center">
              <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
              <span className="text-2xl font-black text-slate-900 dark:text-white font-display block">{totalTopicsFinished}</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Topics Mastered</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: Instructor Remarks */}
      {activeTab === "remarks" && (
        <div className="space-y-6">
          <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-violet-500" /> Instructor Evaluation Remarks & Notes
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Official remarks, test feedback, and guidance notes submitted by faculty members.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {(profile.remarks || []).map((rem) => (
                <div
                  key={rem.id}
                  className="p-4 sm:p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-2 text-left relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${
                    rem.type === "positive" ? "bg-emerald-500" : rem.type === "warning" ? "bg-amber-500" : "bg-blue-500"
                  }`} />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900 dark:text-white text-sm">{rem.instructorName}</span>
                      <span className="text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {rem.category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">{rem.date}</span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    "{rem.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: Total Validation */}
      {activeTab === "validation" && (
        <div className="space-y-6">
          <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" /> Total Validation & Audit Console
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete candidate credential validation checklist verified by administrators and faculty.
                </p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-extrabold text-sm flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" />
                <span>{validationPercent}% Total Validation Score ({validatedCount}/{totalValidations})</span>
              </div>
            </div>

            <div className="space-y-3">
              {validationsList.map((val) => (
                <div
                  key={val.id}
                  className={`p-4 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    val.isValidated
                      ? "bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-500/30"
                      : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-white/5"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`p-1.5 rounded-full ${val.isValidated ? "bg-emerald-500 text-white" : "bg-slate-300 dark:bg-slate-700 text-slate-500"}`}>
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{val.title}</h4>
                      <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {val.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 pl-7">{val.description}</p>
                  </div>

                  <div className="pl-7 sm:pl-0 text-left sm:text-right shrink-0">
                    {val.isValidated ? (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">
                        Verified by {val.validatedBy || "Academic Authority"}
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-amber-500 block">Verification Pending</span>
                    )}
                    {val.validatedAt && (
                      <span className="text-[10px] text-slate-500 block">{val.validatedAt}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PROFILE EDIT MODAL */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-[32px] p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <h3 className="text-xl font-black text-slate-900 dark:text-white font-display flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-brand-royal" /> Edit Candidate Profile & Required Fields
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-5">
              {/* Profile Photo Picker */}
              <div className="space-y-3">
                <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                  Profile Photo / Avatar
                </label>
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {PRESET_AVATARS.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Avatar option"
                      onClick={() => setFormData({ ...formData, avatarUrl: url })}
                      className={`w-14 h-14 rounded-2xl object-cover cursor-pointer transition-all border-2 ${
                        formData.avatarUrl === url
                          ? "border-brand-royal scale-105 shadow-md shadow-brand-royal/30"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>

                <div className="space-y-2 pt-1">
                  <label className="text-slate-500 uppercase text-[10px] block font-bold">
                    Upload Profile Photo (.JPG, .JPEG, .PNG)
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleImageFileUpload}
                    className="w-full px-3 py-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 file:mr-3 file:py-1 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand-royal file:text-white hover:file:bg-brand-royal-dark cursor-pointer"
                  />
                  <input
                    type="url"
                    placeholder="Or enter custom image URL"
                    value={formData.avatarUrl}
                    onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold"
                  />
                </div>
              </div>

              {/* Required Name & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">Target Exam / Program *</label>
                  <input
                    type="text"
                    required
                    value={formData.targetExam}
                    onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">Academic Qualification</label>
                  <input
                    type="text"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">Location / State</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-500 uppercase text-[10px] mb-1 block">Instruction Medium</label>
                  <select
                    value={formData.medium}
                    onChange={(e) => setFormData({ ...formData, medium: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold"
                  >
                    <option value="Tamil">Tamil Medium</option>
                    <option value="English">English Medium</option>
                    <option value="Bilingual">Bilingual (Tamil & English)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-royal hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-brand-royal/30"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
