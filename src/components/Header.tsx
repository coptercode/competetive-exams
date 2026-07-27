import React, { useState } from "react";
import { useLmsStore } from "../store/index";
import {
  Sun,
  Moon,
  BookOpen,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Bell,
} from "lucide-react";

interface HeaderProps {
  onToggleSidebar?: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onOpenSearch }) => {
  const {
    activeView,
    setView,
    profile,
    notifications,
    readAllNotifications,
    isDarkMode,
    setTheme,
    logout,
  } = useLmsStore();
  const [showNotifMenu, setShowNotifMenu] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const viewTitles: Record<string, string> = {
    "student-dash": "Candidate Portal",
    "course-view": "Exam Program Portal",
    "quiz-view": "Mock Test Engine",
    "assignment-view": "Practice Test Portal",
    "profile-view": "Candidate Profile",
    "teacher-dash": "Instructor Dashboard",
    "admin-upload": "Program Content Studio",
    "quiz-builder": "Mock Test Builder",
    "admin-structure": "Exam Categories & Batches",
    "admin-analytics": "Super Admin Analytics & Reports",
    "webrtc-live": "Live Classroom Portal",
    "ai-tutor": "AI Exam Prep Assistant",
    "question-bank": "Question Bank Manager",
    "drm-security": "DRM Video Protection",
    "parent-portal": "Parent & Performance Monitor",
  };

  const handleNotifClick = () => {
    setShowNotifMenu(!showNotifMenu);
    if (!showNotifMenu) {
      readAllNotifications();
    }
  };

  const displayRoleName = () => {
    if (profile.role === "admin" || profile.role === "super_admin") return "Super Admin";
    if (profile.role === "teacher" || profile.role === "instructor") return "Instructor";
    return "Candidate";
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-card border-none rounded-none border-b border-white/5 dark:border-white/5 py-4 px-6 flex items-center justify-between font-sans">
      {/* Mobile Sidebar Trigger & Breadcrumb */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <div>
          <h1 className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            {viewTitles[activeView] || "Coaching Prep Portal"}
          </h1>
        </div>
      </div>

      {/* Top Navigation Options / Badges */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Global Search Button Trigger */}
        {onOpenSearch && (
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-brand-royal/40 text-slate-600 dark:text-slate-300 text-xs font-semibold transition-all hover:scale-105"
          >
            <BookOpen className="w-4 h-4 text-brand-royal dark:text-brand-royal-light" />
            <span className="hidden sm:inline">Search Platform</span>
          </button>
        )}

        {/* Notifications Bell Dropdown */}
        <div className="relative">
          <button
            onClick={handleNotifClick}
            className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-brand-royal/40 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-all active:scale-95 flex items-center justify-center"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-950 animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifMenu && (
            <div className="absolute right-0 mt-3.5 w-80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden z-50">
              <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Alerts ({notifications.length})
                </span>
                {unreadCount > 0 && (
                  <span className="text-[9px] bg-brand-royal/10 text-brand-royal dark:text-brand-royal-light font-black px-2 py-0.5 rounded-full uppercase">
                    New
                  </span>
                )}
              </div>
              <div className="max-h-64 overflow-y-auto divide-y divide-slate-100 dark:divide-white/5 scrollbar-dark">
                {notifications.length === 0 ? (
                  <p className="text-[11px] text-slate-500 py-6 text-center italic">
                    No alerts available.
                  </p>
                ) : (
                  notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-3.5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-white/5 ${
                        !notif.read ? "bg-brand-royal/[0.03]" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white leading-normal">
                          {notif.title}
                        </span>
                        <span className="text-[9px] text-slate-500 select-none shrink-0">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                        {notif.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Card Dropdown (Quick exit to Landing) */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-white/10">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
              {profile.name}
            </p>
            <p className="text-[10px] text-brand-royal dark:text-brand-royal-light font-bold capitalize">
              {displayRoleName()}
            </p>
          </div>
          <button
            onClick={logout}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-royal text-white font-bold text-xs shadow-md shadow-brand-royal/10 hover:shadow-brand-royal/25 transition-all hover:scale-105"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
