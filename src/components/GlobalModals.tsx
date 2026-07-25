import React from "react";
import { useUiStore } from "../store/useUiStore";
import { AlertCircle, HelpCircle } from "lucide-react";

export const GlobalModals: React.FC = () => {
  const { alertMessage, confirmMessage, closeAlert, closeConfirm } = useUiStore();

  return (
    <>
      {/* Alert Modal */}
      {alertMessage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-white/10 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-brand-royal" />
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Alert</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
              {alertMessage}
            </p>
            <div className="flex items-center justify-end">
              <button 
                onClick={closeAlert}
                className="px-6 py-2 rounded-xl text-sm font-bold bg-brand-royal hover:bg-brand-royal-600 text-white transition-colors shadow-lg shadow-brand-royal/20"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {confirmMessage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-white/10 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-brand-royal" />
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Please Confirm</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
              {confirmMessage}
            </p>
            <div className="flex items-center justify-end gap-3">
              <button 
                onClick={() => closeConfirm(false)}
                className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => closeConfirm(true)}
                className="px-6 py-2 rounded-xl text-sm font-bold bg-brand-royal hover:bg-brand-royal-600 text-white transition-colors shadow-lg shadow-brand-royal/20"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
