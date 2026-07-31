import React from "react";
import { useLmsStore } from "../store/index";
import { PlanetLogo } from "./PlanetLogo";
import {
  Sparkles,
  LayoutDashboard,
  BookOpen,
  FileText,
  Trophy,
  User,
  Users,
  Brain,
  Tv,
  Lock,
  ShieldAlert,
  BarChart3,
  Upload,
  PenTool,
  Settings,
  LogOut,
  ChevronRight,
  X,
  Notebook,
  Edit3,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { activeView, setView, profile, logout } = useLmsStore();

  const candidateLinks = [
    { id: "student-dash", label: "Candidate Dashboard", icon: LayoutDashboard },
    { id: "course-view", label: "Exam Programs", icon: BookOpen },
    { id: "quiz-view", label: "Mock Tests Engine", icon: Trophy },
    { id: "digital-notes", label: "Digital Notes & Canvas", icon: Edit3 },
    { id: "assignment-view", label: "Practice Tests Portal", icon: FileText },
    { id: "notes-resources", label: "Study Material & PYQs", icon: Notebook },
    { id: "webrtc-live", label: "Live Classes & Chat", icon: Tv },
    { id: "ai-tutor", label: "AI Exam Prep Assistant", icon: Brain },
  ];

  const instructorLinks = [
    { id: "teacher-dash", label: "Instructor Dashboard", icon: LayoutDashboard },
    { id: "digital-notes", label: "Digital Notes & Canvas", icon: Edit3 },
    { id: "admin-upload", label: "Program Content Studio", icon: Upload },
    { id: "question-bank", label: "Question Bank Manager", icon: Brain },
    { id: "quiz-builder", label: "Mock Test Builder", icon: PenTool },
    { id: "submissions", label: "Practice Test Evaluations", icon: FileText },
    { id: "webrtc-live", label: "Schedule Live Class", icon: Tv },
  ];

  const superAdminLinks = [
    { id: "admin-analytics", label: "Super Admin Control", icon: BarChart3 },
    { id: "digital-notes", label: "Digital Notes & Canvas", icon: Edit3 },
    { id: "admin-structure", label: "Exam Categories & Batches", icon: BookOpen },
    { id: "admin-users", label: "Candidates Registry", icon: Users },
    { id: "admin-teachers", label: "Instructors Directory", icon: Users },
    { id: "question-bank", label: "Question Bank Control", icon: Brain },
    { id: "drm-security", label: "DRM Protection Console", icon: Lock },
  ];

  const getActiveLinks = () => {
    if (profile.role === "teacher" || profile.role === "instructor") {
      return instructorLinks;
    }
    if (profile.role === "admin" || profile.role === "super_admin") {
      return superAdminLinks;
    }
    return candidateLinks;
  };

  const getPortalLabel = () => {
    if (profile.role === "admin" || profile.role === "super_admin") return "Super Admin Portal";
    if (profile.role === "teacher" || profile.role === "instructor") return "Instructor Portal";
    return "Candidate Portal";
  };

  const handleLinkClick = (id: string) => {
    setView(id);
    onClose();
  };

  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar Navigation Panel */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-[#EBF3FC]/95 dark:bg-slate-950/85 backdrop-blur-2xl border-r border-slate-200 dark:border-white/5 flex flex-col justify-between font-sans transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Branding */}
        <div>
          <div className="p-6 flex items-center justify-between border-b border-slate-200/80 dark:border-white/10">
            <div
              onClick={() => handleLinkClick("landing")}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <PlanetLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <span className="font-black font-display text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                Rohit Aspire
              </span>
            </div>

            <button
              onClick={onClose}
              className="md:hidden p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="px-3.5 pt-6 pb-6">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3 px-3">
              {getPortalLabel()}
            </span>
            <nav className="space-y-1.5">
              {getActiveLinks().map((link) => {
                const IconComponent = link.icon;
                const isActive = activeView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full py-2.5 px-4 rounded-full text-xs sm:text-sm transition-all flex items-center gap-3 font-bold border text-left relative overflow-hidden ${
                      isActive
                        ? "bg-brand-royal text-white border-brand-royal shadow-lg shadow-brand-royal/25 font-bold scale-[1.02]"
                        : "bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-white/5"
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-white animate-bounce-short" : "text-slate-500"}`}
                    />
                    <span className="text-left flex-1">{link.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-white/80 shrink-0" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* User Role Quick Info & Sign Out */}
        <div className="p-4 border-t border-slate-200/80 dark:border-white/10">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[28px] p-4 flex flex-col gap-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Live Sync Active
                </span>
              </div>
              <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 rounded-full">
                v2.4
              </span>
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              Signed in as{" "}
              <span className="text-slate-900 dark:text-white font-extrabold block truncate mt-0.5">
                {profile.name}
              </span>
            </div>
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="mt-1 w-full py-2.5 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-red-600 dark:hover:bg-red-600 border border-slate-800 dark:border-slate-700 text-white transition-all text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out Workspace</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
