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
    { id: "assignment-view", label: "Practice Tests Portal", icon: FileText },
    { id: "notes-resources", label: "Study Material & PYQs", icon: Notebook },
    { id: "webrtc-live", label: "Live Classes & Chat", icon: Tv },
    { id: "ai-tutor", label: "AI Exam Prep Assistant", icon: Brain },
  ];

  const instructorLinks = [
    { id: "teacher-dash", label: "Instructor Dashboard", icon: LayoutDashboard },
    { id: "admin-upload", label: "Program Content Studio", icon: Upload },
    { id: "question-bank", label: "Question Bank Manager", icon: Brain },
    { id: "quiz-builder", label: "Mock Test Builder", icon: PenTool },
    { id: "submissions", label: "Practice Test Evaluations", icon: FileText },
    { id: "webrtc-live", label: "Schedule Live Class", icon: Tv },
  ];

  const superAdminLinks = [
    { id: "admin-analytics", label: "Super Admin Control", icon: BarChart3 },
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
          <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-white/5">
            <div
              onClick={() => handleLinkClick("landing")}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <PlanetLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <span className="font-extrabold font-display text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors whitespace-nowrap">
                Coaching Prep
              </span>
            </div>

            <button
              onClick={onClose}
              className="md:hidden p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="px-4 pt-6 pb-6">
            <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-4 px-3">
              {getPortalLabel()}
            </span>
            <nav className="space-y-1">
              {getActiveLinks().map((link) => {
                const IconComponent = link.icon;
                const isActive = activeView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-3 font-medium border text-left ${
                      isActive
                        ? "bg-brand-royal/10 border-brand-royal/20 text-brand-royal dark:text-white font-semibold shadow-lg shadow-brand-royal/5"
                        : "bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-brand-royal" : ""}`}
                    />
                    <span className="text-left">{link.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* User Role Quick Info & Sign Out */}
        <div className="p-4 border-t border-slate-100 dark:border-white/5">
          <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-none p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                System Active
              </span>
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-500">
              Logged in as{" "}
              <span className="text-slate-800 dark:text-slate-300 font-semibold">
                {profile.name}
              </span>
            </div>
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="mt-1 w-full py-2 rounded-none bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Back to Landing</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
