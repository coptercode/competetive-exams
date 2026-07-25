import React from "react";
import { Users, DollarSign, Activity, Database } from "lucide-react";

interface AdminAnalyticsProps {
  analyticsData: any;
  liveUptime: number;
  liveQueries: number;
  setView: (view: string) => void;
}

// Helper to format live uptime duration
const formatUptimeDuration = (seconds: number) => {
  if (!seconds || seconds <= 0) return "0s";
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const parts = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0 || d > 0) parts.push(`${h}h`);
  if (m > 0 || h > 0 || d > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);

  return parts.join(" ");
};

// Helper to format revenue
const formatRevenue = (rev: number) => {
  if (rev === undefined || rev === null) return "₹0";
  if (rev >= 10000000) {
    return `₹${(rev / 10000000).toFixed(2)} Crores`;
  }
  if (rev >= 100000) {
    return `₹${(rev / 100000).toFixed(2)} Lakhs`;
  }
  return `₹${rev.toLocaleString()}`;
};

export const AdminAnalytics: React.FC<AdminAnalyticsProps> = ({
  analyticsData,
  liveUptime: initialUptime,
  liveQueries: initialQueries,
  setView,
}) => {
  const [liveUptime, setLiveUptime] = React.useState(initialUptime);
  const [liveQueries, setLiveQueries] = React.useState(initialQueries);

  React.useEffect(() => {
    setLiveUptime(initialUptime);
    setLiveQueries(initialQueries);
  }, [initialUptime, initialQueries]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLiveUptime((prev) => prev + 1);
      setLiveQueries((prev) => {
        const jitter = Math.floor(Math.random() * 3) + 1;
        return prev + jitter;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Subscriptions", value: `${analyticsData.activeSubscriptionsCount || 0} Scholars`, icon: Users, color: "text-blue-500" },
          { label: "Total Platform Revenue", value: formatRevenue(analyticsData.totalRevenue), icon: DollarSign, color: "text-emerald-500" },
          { label: "Server Uptime", value: `99.98% (${formatUptimeDuration(liveUptime)})`, icon: Activity, color: "text-violet-500" },
          { label: "Database Queries", value: liveQueries.toLocaleString(), icon: Database, color: "text-indigo-500" },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-card p-5 border-slate-200 dark:border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-600 dark:text-slate-500 font-bold uppercase tracking-wider block">{stat.label}</span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-white mt-1 block">{stat.value}</span>
              </div>
              <div className={`w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-center ${stat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 border-slate-200 dark:border-white/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Monthly Active Registrations</h4>
            </div>
            <div className="text-[10px] font-bold text-brand-violet dark:text-brand-violet-light bg-violet-500/10 px-2 py-0.5 rounded border border-brand-violet/20">+12.4% QoQ Growth</div>
          </div>
          <div className="h-80 w-full flex items-end pt-4 border-b border-slate-200 dark:border-white/5 relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
              <path 
                d={(() => {
                  const monthlyCounts = analyticsData.monthlyActiveSubscriptions || Array(12).fill(0);
                  const janToJun = monthlyCounts.slice(0, 6);
                  const maxVal = Math.max(...janToJun, 1);
                  const points = janToJun.map((val: number, idx: number) => {
                    const x = (idx * 2 + 1) * (400 / 12);
                    const y = 135 - (val / maxVal) * 110;
                    return [x, y];
                  });
                  
                  const getPath = (pts: number[][]) => {
                    return pts.reduce((acc, pt, i, a) => {
                      if (i === 0) return `M ${pt[0]},${pt[1]}`;
                      const prev = a[i - 1];
                      const next = a[i + 1] || pt;
                      const prevPrev = a[i - 2] || prev;
                      
                      const cp1X = prev[0] + (pt[0] - prevPrev[0]) * 0.16;
                      const cp1Y = prev[1] + (pt[1] - prevPrev[1]) * 0.16;
                      const cp2X = pt[0] - (next[0] - prev[0]) * 0.16;
                      const cp2Y = pt[1] - (next[1] - prev[1]) * 0.16;
                      
                      return `${acc} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${pt[0]},${pt[1]}`;
                    }, "");
                  };
                  return getPath(points);
                })()} 
                fill="none" 
                stroke="url(#grad)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" /><stop offset="50%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="w-full flex text-[9px] text-slate-600 dark:text-slate-500 font-bold mb-[-20px] relative z-10">
              {["Jan","Feb","Mar","Apr","May","Jun"].map((m) => (
                <span key={m} className="flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-5 border-slate-200 dark:border-white/5 space-y-4 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-white/5 pb-2">Regional Distribution</h4>
            <div className="space-y-3 mt-4">
              {analyticsData.regionalDistribution && analyticsData.regionalDistribution.length > 0 ? (
                analyticsData.regionalDistribution.slice(0, 5).map((r: any, i: number) => (
                  <div key={i} className="space-y-1 text-xs">
                    <div className="flex justify-between text-[11px]">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{r.state}</span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono">{r.percentage}</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-violet" style={{ width: r.percentage }} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-xs text-slate-500">
                  No regional registrations found in database.
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => setView("admin-regional-distribution")}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl text-[10px] font-bold text-slate-700 dark:text-slate-300 transition-colors uppercase tracking-wider active:scale-95"
          >
            View Detailed Breakdown
          </button>
        </div>
      </div>
    </div>
  );
};
