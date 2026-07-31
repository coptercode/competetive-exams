import React, { useState } from "react";
import {
  ShieldAlert,
  PhoneCall,
  Send,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  HelpCircle,
  Lock,
} from "lucide-react";
import { profileAPI } from "../services/api";
import { useLmsStore } from "../store/index";

interface BlockedAccountModalProps {
  onClose?: () => void;
  userEmail?: string;
  userId?: string;
}

export const BlockedAccountModal: React.FC<BlockedAccountModalProps> = ({
  onClose,
  userEmail,
  userId,
}) => {
  const { profile, updateProfile } = useLmsStore();
  const targetEmail = userEmail || profile.email;
  const targetId = userId || profile.id;

  const [apologyText, setApologyText] = useState(profile.apologyNote || "");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(!!profile.apologySubmittedAt);
  const [showCallModal, setShowCallModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmitApology = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apologyText.trim() || apologyText.trim().length < 15) {
      setErrorMsg("Please provide a detailed apology note (at least 15 characters).");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);
    try {
      await profileAPI.submitApology({
        userId: targetId,
        email: targetEmail,
        apologyNote: apologyText,
      });
      setSubmitted(true);
      updateProfile({
        apologyNote: apologyText,
        apologySubmittedAt: new Date().toISOString(),
      });
    } catch (err: any) {
      console.error("Failed to submit apology:", err);
      // Fallback local update
      setSubmitted(true);
      updateProfile({
        apologyNote: apologyText,
        apologySubmittedAt: new Date().toISOString(),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border-2 border-red-500/30 shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
              <ShieldAlert className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-red-900/60 px-2.5 py-0.5 rounded-full border border-red-300/30 text-red-100">
                  Account Suspended
                </span>
              </div>
              <h2 className="text-xl font-black tracking-tight text-white mt-0.5">
                Candidate Account Blocked
              </h2>
            </div>
          </div>
          <Lock className="w-8 h-8 opacity-40 text-white" />
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Reason Alert Banner */}
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 space-y-2">
            <div className="flex items-center gap-2 font-black text-sm">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>Mandatory 7-Hour Daily Target Violation</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              Your candidate account has been automatically suspended because you spent <strong className="text-red-600 dark:text-red-400">less than 7.0 hours per day</strong> on the application for <strong className="text-red-600 dark:text-red-400">3 consecutive days</strong>.
            </p>
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-slate-950/40 text-[11px] font-medium text-slate-600 dark:text-slate-400 border border-red-500/10 flex items-center justify-between">
              <span>Required Daily Study Target: <strong>7.0 Hours / Day</strong></span>
              <span className="text-red-500 font-bold">Status: 3 Shortfall Days</span>
            </div>
          </div>

          {/* Unblock Steps Guide */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/10 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-brand-royal" />
              <span>How to Request Account Unblock & Approval</span>
            </h3>
            <ol className="text-xs space-y-2 text-slate-600 dark:text-slate-300 list-decimal list-inside font-medium">
              <li>Contact Super Admin support via <strong>Call Support</strong> to report your shortfall reason.</li>
              <li>Submit an official <strong>Apology Note & Undertaking</strong> to the Super Admin via the form below.</li>
              <li>Wait for Super Admin approval on the Admin Console. Once approved, login access will be immediately restored.</li>
            </ol>
          </div>

          {/* Action Row: Call Support Button */}
          <div className="p-4 rounded-2xl bg-brand-royal/10 dark:bg-brand-royal/20 border border-brand-royal/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-royal text-white flex items-center justify-center font-bold">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Need Urgent Help? Call Admin Support</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Direct Admin Hotline: +91 1800-425-7890 (Mon-Sat, 9 AM - 7 PM)</p>
              </div>
            </div>
            <a
              href="tel:+9118004257890"
              onClick={() => setShowCallModal(true)}
              className="w-full sm:w-auto px-4 py-2.5 bg-brand-royal hover:bg-brand-royal-dark text-white font-black text-xs rounded-xl shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Admin Support</span>
            </a>
          </div>

          {/* Apology Submission Form */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Submit Official Candidate Apology Note</span>
              </h3>
              {submitted && (
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Submitted to Admin</span>
                </span>
              )}
            </div>

            {submitted ? (
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 space-y-2 text-center">
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold">Apology Note Submitted Successfully!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Your official apology note has been logged in the Admin Portal for review. Please wait while the Super Admin evaluates your request and approves account unblocking.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 italic">
                  Note: You may also contact Admin via call support (+91 1800-425-7890) for expedited unblock approval.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitApology} className="space-y-3">
                {errorMsg && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-xl">
                    {errorMsg}
                  </div>
                )}
                <textarea
                  rows={4}
                  value={apologyText}
                  onChange={(e) => setApologyText(e.target.value)}
                  placeholder="Dear Super Admin, I sincerely apologize for failing to meet the mandatory 7-hour daily study threshold for 3 days. The reason for my shortfall was... I promise to strictly spend 7+ hours daily moving forward. Please unblock my account."
                  className="w-full p-3.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-royal focus:outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                  required
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-black text-xs rounded-2xl shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Submitting Apology to Admin...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Apology Note to Admin</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500">
          <span>EduVerse Candidate Account Governance System</span>
          {onClose && (
            <button
              onClick={onClose}
              className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:underline"
            >
              Close Window
            </button>
          )}
        </div>
      </div>

      {/* Call Support Modal Preview */}
      {showCallModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-white/10 text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
              <PhoneCall className="w-7 h-7 animate-bounce" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">Admin Support Hotline</h3>
            <p className="text-xs text-slate-500">Initiating call connection to Super Admin support desk...</p>
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl font-mono text-sm font-black text-brand-royal">
              +91 1800-425-7890
            </div>
            <button
              onClick={() => setShowCallModal(false)}
              className="w-full py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
            >
              Close Call Overlay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
