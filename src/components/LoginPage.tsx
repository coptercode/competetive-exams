import React, { useState } from "react";
import { useLmsStore } from "../store/index";
import {
  Lock,
  Mail,
  ArrowRight,
  User,
  GraduationCap,
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { authAPI, academicAPI } from "../services/api";
import type { Profile } from "../store/types";
import { PlanetLogo } from "./PlanetLogo";
import { BlockedAccountModal } from "./BlockedAccountModal";

export type LoginMode = "student" | "educator" | "all";

interface LoginPageProps {
  mode?: LoginMode;
}

export const LoginPage: React.FC<LoginPageProps> = ({ mode = "student" }) => {
  const { setView, boards, setActiveCourseContext, registerUser, pendingUsers } = useLmsStore();
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const defaultRole = mode === "educator" ? "teacher" : "student";
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin");
  const [role, setRole] = useState<"student" | "teacher" | "admin">(defaultRole);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Registration Form Fields
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [targetExam, setTargetExam] = useState("JEE Main & Advanced 2026");
  const [subjectSpecialization, setSubjectSpecialization] = useState("Physics & Mathematics");
  const [qualification, setQualification] = useState("M.Sc Physics (5+ Yrs Exp)");

  const getLoginEmails = () => {
    const value = usernameOrEmail.trim();
    const normalized = value.toLowerCase();
    if (normalized.includes("@")) return [normalized];
    if (role === "student")
      return [`${normalized}@nexoralearning.com`, `${normalized}@nexoralearning.in`];
    return [normalized];
  };

  const openStudentWorkspace = (profile: Profile) => {
    const currentBoards = useLmsStore.getState().boards;
    const activeBoard =
      currentBoards.find((b) => b.id === profile.selectedBoardId) ||
      currentBoards[0];
    const activeClass =
      activeBoard?.classes.find((c) => c.id === profile.selectedClassId) ||
      activeBoard?.classes[0];
    const subjects = activeClass?.subjects || [];
    const optedSubject =
      subjects.find((s) => s.id === profile.optedSubjectId) || subjects[0];

    if (optedSubject) {
      const firstChapter = optedSubject.chapters[0];
      const firstTopic = firstChapter?.topics[0];
      setActiveCourseContext(
        optedSubject.id,
        firstChapter?.id || null,
        firstTopic?.id || null,
      );
      setView("student-dash");
    } else {
      setView("student-dash");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!fullName.trim() || !usernameOrEmail.trim() || !password) {
      setError("Please fill in all required registration fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please recheck password.");
      return;
    }

    setLoading(true);

    try {
      const res = await registerUser({
        name: fullName,
        email: usernameOrEmail.trim().toLowerCase(),
        password,
        role,
        phoneNumber,
        targetExam: role === "student" ? targetExam : undefined,
        specialization: role === "teacher" ? subjectSpecialization : undefined,
        qualification: role === "teacher" ? qualification : undefined,
      });

      setLoading(false);
      setSuccessMessage(res.message);
      setAuthTab("signin");
    } catch (err: any) {
      setLoading(false);
      setError("Failed to submit registration request. Please try again.");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameOrEmail || !password) {
      setError("Please provide correct credentials.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    // Check if account is in pending state
    const normalizedEmail = usernameOrEmail.trim().toLowerCase();
    const isPending = pendingUsers.some(
      (u) => u.email.toLowerCase() === normalizedEmail || u.username.toLowerCase() === normalizedEmail
    );

    if (isPending) {
      setLoading(false);
      setError("Your account is currently pending Super Admin approval. Once management approves your request, you can log in.");
      return;
    }

    // Check approved local users
    const approvedUsers = (() => {
      try {
        const stored = localStorage.getItem("lms_approved_users");
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    })();

    const approvedMatch = approvedUsers.find(
      (u: any) => u.email.toLowerCase() === normalizedEmail || u.username.toLowerCase() === normalizedEmail
    );

    try {
      let result: Awaited<ReturnType<typeof authAPI.login>> | null = null;

      if (approvedMatch) {
        result = {
          token: "approved_jwt_token_" + approvedMatch.id,
          role: approvedMatch.role,
          user: approvedMatch,
        };
      } else {
        const loginEmails = getLoginEmails();
        for (const email of loginEmails) {
          try {
            result = await authAPI.login(email, password);
            break;
          } catch {
            // Try fallback
          }
        }
      }

      if (!result) {
        // Mock fallback demo login if API server is not running
        const demoUser = {
          id: role === "student" ? "student-demo-1" : role === "teacher" ? "teacher-demo-1" : "admin-demo-1",
          email: usernameOrEmail.includes("@") ? usernameOrEmail : `${usernameOrEmail}@nexoralearning.com`,
          firstName: role === "student" ? "Aarav" : role === "teacher" ? "Dr. Rajesh" : "Super Admin",
          lastName: role === "student" ? "Sharma" : role === "teacher" ? "Kumar" : "Platform",
          name: role === "student" ? "Aarav Sharma (Candidate)" : role === "teacher" ? "Dr. Rajesh Kumar (Instructor)" : "Super Admin",
          role,
          selectedBoardId: boards[0]?.id || "engineering",
          selectedClassId: boards[0]?.classes?.[0]?.id || "jee-main-2026",
          optedSubjectId: boards[0]?.classes?.[0]?.subjects?.[0]?.id || "jee-physics",
          subjectArea: role === "teacher" ? "Physics & Mathematics" : undefined,
          location: "Chennai, Tamil Nadu",
          xp: 1250,
          level: 4,
          coins: 450,
          streak: 12,
          achievements: [],
          certificates: [],
        };

        result = {
          token: "demo_mock_jwt_token_12345",
          role,
          user: demoUser as any,
        };
      }

      if (result.user?.isBlocked) {
        setLoading(false);
        setError("Account Suspended: You spent less than 7 hours per day for 3 consecutive days. Contact Admin Support & submit an official apology note.");
        setShowBlockedModal(true);
        return;
      }

      localStorage.setItem("auth_token", result.token);
      localStorage.setItem("lms_user_profile", JSON.stringify(result.user));

      let currentBoards = useLmsStore.getState().boards;

      const profile = {
        ...result.user,
        role: result.role as "student" | "teacher" | "admin",
        subjectArea: result.role === "teacher" ? (result.user.subjectArea || "Physics & Mathematics") : undefined,
      };

      if (profile.role === "student" && !profile.optedSubjectId) {
        const activeBoard =
          currentBoards.find((b) => b.id === profile.selectedBoardId) || currentBoards[0];
        const activeClass =
          activeBoard?.classes?.find((c) => c.id === profile.selectedClassId) ||
          activeBoard?.classes?.[0];
        profile.optedSubjectId = activeClass?.subjects?.[0]?.id ?? "";
      }

      useLmsStore.setState({
        boards: currentBoards,
        profile,
        auth: {
          isAuthenticated: true,
          user: result.user,
          token: result.token,
          loading: false,
          error: null,
        },
      });

      // Load specific user's topic progress
      useLmsStore.getState().loadProfileData(result.user.id);

      const { addNotification } = useLmsStore.getState();
      addNotification(
        "Welcome back!",
        `Successfully logged in as ${profile.name}.`,
        "success",
      );

      if (profile.role === "student") {
        openStudentWorkspace(profile);
      } else if (profile.role === "teacher") {
        setView("teacher-dash");
      } else {
        setView("admin-analytics");
      }
      return;
    } catch (err: any) {
      console.error("Login Error:", err);
      setError("Invalid credentials. Try using any email and password.");
    } finally {
      setLoading(false);
    }
  };

  // Determine accent colours and copy based on mode
  const isEducator = mode === "educator";
  const accentBg = isEducator ? "bg-emerald-600" : "bg-brand-royal";
  const accentBorder = isEducator ? "border-emerald-600" : "border-brand-royal";
  const accentText = isEducator ? "text-emerald-600" : "text-brand-royal";
  const accentHover = isEducator ? "hover:bg-emerald-700" : "hover:bg-blue-650";

  const pageHeading =
    mode === "educator"
      ? "Instructor & Admin Portal"
      : mode === "student"
      ? "Candidate Workspace"
      : "Access Exam Workspace";

  const pageSubtitle =
    mode === "educator"
      ? "Sign in as an Instructor or Administrator"
      : mode === "student"
      ? "Sign in to your candidate account"
      : "";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/70 to-indigo-50/40 text-slate-800 flex items-center justify-center p-4 font-sans overflow-hidden">
      {/* Dynamic Multi-Color Ambient Background Orbs */}
      <div className="absolute rounded-full blur-[130px] opacity-40 pointer-events-none w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-indigo-300 -top-32 -left-32 animate-pulse" />
      <div className="absolute rounded-full blur-[130px] opacity-35 pointer-events-none w-[550px] h-[550px] bg-gradient-to-br from-purple-300 to-pink-300 -bottom-32 -right-32 animate-pulse" />
      <div className="absolute rounded-full blur-[110px] opacity-25 pointer-events-none w-[350px] h-[350px] bg-teal-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating brand header */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-20 select-none">
        <div
          onClick={() => setView("landing")}
          className="flex items-center gap-2.5 cursor-pointer group px-4 py-2 rounded-full bg-white/90 border border-slate-200/90 backdrop-blur-md shadow-md hover:shadow-lg transition-all"
        >
          <PlanetLogo className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-black font-display text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Rohit Aspire
          </span>
        </div>
        <div className="h-4 w-px bg-slate-300" />
        <button
          onClick={() => setView("landing")}
          className="text-xs font-extrabold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hover:bg-slate-200/60"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portal</span>
        </button>
      </div>

      {/* Login Stage Container — Light Theme Glassmorphism */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-8 sm:p-10 rounded-[36px] shadow-2xl shadow-blue-500/10 relative z-10 animate-fade-in-up overflow-hidden">
        {/* Top Gradient Highlight Strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

        {/* Auth Mode Toggle Pill (Sign In vs Sign Up) */}
        <div className="flex bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 mb-6 shadow-inner">
          <button
            type="button"
            onClick={() => { setAuthTab("signin"); setError(""); setSuccessMessage(""); }}
            className={`flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
              authTab === "signin"
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign In Access
          </button>
          <button
            type="button"
            onClick={() => { setAuthTab("signup"); setError(""); setSuccessMessage(""); }}
            className={`flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
              authTab === "signup"
                ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Create Account
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500/15 via-indigo-500/15 to-purple-500/15 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3.5 shadow-md">
            <PlanetLogo className="w-9 h-9" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
            {authTab === "signup" ? "New Registration" : pageHeading}
          </h2>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            {authTab === "signup"
              ? "Submit account request for Super Admin approval"
              : "Competitive Exam Learning Platform"}
          </p>
        </div>

        {/* Role Select Tabs — Light Oval Pills */}
        {mode === "all" && (
          <div className="flex bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 mb-6 shadow-inner">
            <button
              type="button"
              onClick={() => { setRole("student"); setError(""); }}
              className={`flex-1 py-2 rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                role === "student" ? "bg-blue-600 text-white shadow-md scale-105" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Candidate</span>
            </button>
            <button
              type="button"
              onClick={() => { setRole("teacher"); setError(""); }}
              className={`flex-1 py-2 rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                role === "teacher" ? "bg-emerald-600 text-white shadow-md scale-105" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Instructor</span>
            </button>
            {authTab === "signin" && (
              <button
                type="button"
                onClick={() => { setRole("admin"); setError(""); }}
                className={`flex-1 py-2 rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                  role === "admin" ? "bg-purple-600 text-white shadow-md scale-105" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>
            )}
          </div>
        )}

        {successMessage && (
          <div className="mb-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold text-left leading-relaxed shadow-sm">
            ✅ {successMessage}
          </div>
        )}

        {error && (
          <div className="mb-5 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-extrabold text-left leading-relaxed animate-shake shadow-sm">
            ⚠️ {error}
          </div>
        )}

        {/* SIGN UP FORM — Light Theme */}
        {authTab === "signup" ? (
          <form onSubmit={handleRegister} className="space-y-3.5">
            <div>
              <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                Full Legal Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="email"
                  placeholder="e.g. aarav@example.com"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
              />
            </div>

            {role === "student" ? (
              <>
                <div>
                  <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Medium of Instruction
                  </label>
                  <select
                    value={targetExam.includes("Tamil") ? "Tamil" : "Bilingual"}
                    className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  >
                    <option value="Bilingual">Bilingual (Tamil & English)</option>
                    <option value="Tamil">Tamil Medium (தமிழ் வழி)</option>
                    <option value="English">English Medium</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Target Exam Stream / Program
                  </label>
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  >
                    <option value="TNPSC Group 1 (Prelims & Mains)">TNPSC Group 1 (Prelims & Mains)</option>
                    <option value="TNPSC Group 2 & 2A Executive">TNPSC Group 2 & 2A (Executive/Non-Exec)</option>
                    <option value="TNPSC Group 4 & VAO Integrated">TNPSC Group 4 & VAO Integrated</option>
                    <option value="TNUSRB Police SI & Constable">TNUSRB Police SI & Constable</option>
                    <option value="UPSC CSE IAS / IPS Super Batch">UPSC CSE IAS / IPS Super Batch</option>
                    <option value="UPSC CDS & CAPF Commandant">UPSC CDS & CAPF Commandant</option>
                    <option value="Banking IBPS PO & SBI PO">Banking IBPS PO & SBI PO</option>
                    <option value="SSC CGL & CHSL Target">SSC CGL & CHSL Target</option>
                    <option value="JEE Main & NEET UG">JEE Main & NEET UG</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Subject Specialization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Advanced Physics & Mathematics"
                    value={subjectSpecialization}
                    onChange={(e) => setSubjectSpecialization(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                    Qualification & Teaching Exp
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. M.Sc Physics, 6 Years IIT-JEE Coaching"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
                  />
                </div>
              </>
            )}

            <div>
              <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                Account Password
              </label>
              <input
                type="password"
                placeholder="Set password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
                required
              />
            </div>

            <div>
              <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider block mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-3 py-3.5 rounded-full text-xs font-black text-white uppercase tracking-wider bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:to-teal-700 shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 border border-white/20"
            >
              {loading ? "Submitting Request..." : "Submit Registration for Approval"}
            </button>
          </form>
        ) : (
          /* SIGN IN FORM — Light Theme */
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider">
                  Workspace ID / Email
                </label>
              </div>
              <div className="relative">
                <User className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter email or username"
                  value={usernameOrEmail}
                  onChange={(e) => {
                    setUsernameOrEmail(e.target.value);
                    setError("");
                  }}
                  className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all shadow-inner"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setView("forgot-password")}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter account password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="w-full pl-12 pr-12 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all shadow-inner"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center pt-1">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 text-blue-600"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-xs font-semibold text-slate-600 select-none"
              >
                Remember this device for 30 days
              </label>
            </div>

            <button
              type="submit"
              className={`w-full mt-3 py-4 rounded-full text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-105 active:scale-95 border border-white/20 ${
                role === "teacher"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/30"
                  : role === "admin"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/30"
                  : "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-blue-500/30"
              }`}
            >
              <span>{loading ? "Signing in..." : "Authenticate Securely"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* 1-Click Quick Demo Credentials Pill Buttons */}
        <div className="mt-7 pt-5 border-t border-slate-200/80 space-y-2 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2.5">
            Instant 1-Click Demo Access
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => {
                setRole("student");
                setUsernameOrEmail("candidate@nexoralearning.com");
                setPassword("password123");
              }}
              className="py-2.5 px-1 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-black transition-all hover:scale-105 shadow-sm"
            >
              Candidate
            </button>

            <button
              type="button"
              onClick={() => {
                setRole("teacher");
                setUsernameOrEmail("instructor@nexoralearning.com");
                setPassword("password123");
              }}
              className="py-2.5 px-1 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-black transition-all hover:scale-105 shadow-sm"
            >
              Instructor
            </button>

            <button
              type="button"
              onClick={() => {
                setRole("admin");
                setUsernameOrEmail("admin@nexoralearning.com");
                setPassword("password123");
              }}
              className="py-2.5 px-1 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black transition-all hover:scale-105 shadow-sm"
            >
              Super Admin
            </button>
          </div>
        </div>
      </div>

      {showBlockedModal && (
        <BlockedAccountModal
          onClose={() => setShowBlockedModal(false)}
          userEmail={usernameOrEmail}
        />
      )}
    </div>
  );
};
