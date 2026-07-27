import React from "react";
import { ArrowLeft, Activity, Users } from "lucide-react";

interface AdminRegionalDistributionProps {
  analyticsData: any;
  setView: (view: string) => void;
}

export const AdminRegionalDistribution: React.FC<AdminRegionalDistributionProps> = ({
  analyticsData,
  setView,
}) => {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setView("admin-analytics")}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Regional Student Distribution</h2>
          <p className="text-xs text-slate-500">State-wise student registration statistics and percentages</p>
        </div>
      </div>

      <div className="glass-card p-6 border-slate-200 dark:border-white/5 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
          <h4 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Activity className="w-4 h-4 text-brand-royal" />
            <span>Geographical Breakdown</span>
          </h4>
          <span className="text-xs text-slate-500 font-medium">Total Registered States: {analyticsData.regionalDistribution?.length || 0}</span>
        </div>

        {analyticsData.regionalDistribution && analyticsData.regionalDistribution.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analyticsData.regionalDistribution.map((r: any, i: number) => (
              <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl space-y-3 hover:border-slate-300 dark:hover:border-white/10 transition-all">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">{r.state}</span>
                  <span className="text-xs font-bold text-brand-violet dark:text-brand-violet-light font-mono bg-violet-500/10 px-2.5 py-1 rounded-lg border border-brand-violet/20">
                    {r.percentage}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-royal to-brand-violet rounded-full transition-all duration-500" style={{ width: r.percentage }} />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold block text-right">{r.students} Active Scholars</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            <Users className="w-12 h-12 mx-auto mb-3 text-slate-300 dark:text-slate-750 animate-pulse" />
            <p className="text-xs font-semibold">No registered student states found in database console.</p>
          </div>
        )}
      </div>
    </div>
  );
};
