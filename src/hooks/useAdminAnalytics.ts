import { useState, useEffect } from "react";
import { authAPI } from "../services/api";

export const useAdminAnalytics = (activeView: string) => {
  const [analyticsData, setAnalyticsData] = useState<any>({
    activeSubscriptionsCount: 0,
    monthlyActiveSubscriptions: Array(12).fill(0),
    regionalDistribution: [],
    totalRevenue: 45000000,
    serverUptime: 0,
    databaseQueries: 145000
  });
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);
  const [liveUptime, setLiveUptime] = useState<number>(0);
  const [liveQueries, setLiveQueries] = useState<number>(145000);

  const fetchAnalytics = async () => {
    try {
      setLoadingAnalytics(true);
      const data = await authAPI.getAdminAnalytics();
      setAnalyticsData(data);
      if (data.serverUptime !== undefined) setLiveUptime(data.serverUptime);
      if (data.databaseQueries !== undefined) setLiveQueries(data.databaseQueries);
    } catch (err) {
      console.warn("Failed to fetch admin analytics:", err);
    } finally {
      setLoadingAnalytics(false);
    }
  };

  useEffect(() => {
    if (activeView === "admin-analytics" || activeView === "admin-users" || activeView === "admin-regional-distribution") {
      fetchAnalytics();
    }
  }, [activeView]);


  useEffect(() => {
    if (activeView !== "admin-analytics" && activeView !== "admin-users" && activeView !== "admin-regional-distribution") return;

    const pollInterval = setInterval(() => {
      authAPI.getAdminAnalytics().then((data) => {
        setAnalyticsData(data);
        if (data.serverUptime !== undefined) setLiveUptime(data.serverUptime);
        if (data.databaseQueries !== undefined) setLiveQueries(data.databaseQueries);
      }).catch((err) => console.warn("Background analytics poll failed:", err));
    }, 20000); // Poll every 20 seconds

    return () => clearInterval(pollInterval);
  }, [activeView]);

  return {
    analyticsData,
    loadingAnalytics,
    liveUptime,
    liveQueries,
    fetchAnalytics
  };
};
