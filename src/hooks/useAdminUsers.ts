import { useState, useEffect } from "react";
import { authAPI } from "../services/api";
import { useLmsStore } from "../store/index";

const MOCK_USERS_FALLBACK = [
  {
    id: "cand-1",
    email: "student@example.com",
    firstName: "Arun",
    lastName: "Kumar",
    role: "STUDENT",
    phoneNumber: "+91 9876543210",
    location: "Chennai, TN",
    targetExam: "TNPSC Group 1",
    medium: "Tamil",
    isBlocked: false,
    todayHoursSpent: 8.5,
    totalHoursSpent: 142.0,
    studentProfile: {
      subscriptions: [{ status: "ACTIVE" }],
      class: { name: "TNPSC Group 1 Batch" }
    }
  },
  {
    id: "cand-2",
    email: "priya.sharma@example.com",
    firstName: "Priya",
    lastName: "Sharma",
    role: "STUDENT",
    phoneNumber: "+91 9812345678",
    location: "Madurai, TN",
    targetExam: "UPSC CSE Mains",
    medium: "English",
    isBlocked: true,
    blockedReason: "Low study time: Less than 7.0 hours/day for 3 consecutive days.",
    consecutiveLowActivityDays: 3,
    apologyNote: "Dear Admin, I sincerely apologize for missing my daily 7-hour study target due to illness. I assure you I will spend 8+ hours every day.",
    apologySubmittedAt: "2026-07-30T10:15:00Z",
    todayHoursSpent: 2.1,
    totalHoursSpent: 98.4,
    studentProfile: {
      subscriptions: [{ status: "ACTIVE" }],
      class: { name: "UPSC CSE Batch" }
    }
  },
  {
    id: "cand-3",
    email: "karthik.r@example.com",
    firstName: "Karthik",
    lastName: "Rajan",
    role: "STUDENT",
    phoneNumber: "+91 9765432109",
    location: "Coimbatore, TN",
    targetExam: "TNPSC Group 2",
    medium: "Bilingual",
    isBlocked: false,
    todayHoursSpent: 7.8,
    totalHoursSpent: 210.0,
    studentProfile: {
      subscriptions: [{ status: "ACTIVE" }],
      class: { name: "TNPSC Group 2 Batch" }
    }
  },
  {
    id: "cand-pending-1",
    email: "subash.k@example.com",
    firstName: "Subash",
    lastName: "Kannan",
    role: "STUDENT",
    phoneNumber: "+91 9443210987",
    location: "Trichy, TN",
    targetExam: "TNPSC Group 1",
    medium: "Tamil",
    isApproved: false,
    approvalStatus: "PENDING_APPROVAL",
    todayHoursSpent: 0,
    totalHoursSpent: 0,
    studentProfile: {
      subscriptions: [{ status: "PENDING" }],
      class: { name: "TNPSC Group 1 Batch" }
    }
  },
  {
    id: "inst-pending-1",
    email: "dr.meena@example.com",
    firstName: "Dr. Meena",
    lastName: "Krishnan",
    role: "TEACHER",
    phoneNumber: "+91 9841098765",
    location: "Coimbatore, TN",
    qualification: "Ph.D Chemistry & UPSC Mentor",
    isApproved: false,
    approvalStatus: "PENDING_APPROVAL"
  }
];

export const useAdminUsers = (activeView: string) => {
  const [usersList, setUsersList] = useState<any[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [usersError, setUsersError] = useState("");

  const fetchUsers = async () => {
    setLoadingUsers(true);
    setUsersError("");
    try {
      const data = await authAPI.getUsers();
      const storePending = useLmsStore.getState().pendingUsers || [];
      const storeApproved = (() => {
        try {
          const stored = localStorage.getItem("lms_approved_users");
          return stored ? JSON.parse(stored) : [];
        } catch {
          return [];
        }
      })();

      const baseList = Array.isArray(data) && data.length > 0 ? data : MOCK_USERS_FALLBACK;
      const existingEmails = new Set(baseList.map((u: any) => (u.email || "").toLowerCase()));
      
      const extraPending = storePending.filter((pu: any) => !existingEmails.has((pu.email || "").toLowerCase()));
      const extraApproved = storeApproved
        .filter((au: any) => !existingEmails.has((au.email || "").toLowerCase()))
        .map((au: any) => ({
          ...au,
          firstName: au.firstName || au.name?.split(" ")[0] || "Candidate",
          lastName: au.lastName || au.name?.split(" ").slice(1).join(" ") || "",
          role: au.role === "student" ? "STUDENT" : au.role === "teacher" ? "TEACHER" : au.role,
          isApproved: true,
          approvalStatus: "APPROVED",
          studentProfile: au.studentProfile || {
            subscriptions: [{ status: "ACTIVE" }],
            class: { name: au.targetExam || "TNPSC Group 1 Batch" }
          }
        }));

      setUsersList([...extraApproved, ...extraPending, ...baseList]);
    } catch (err: any) {
      console.warn("Failed to fetch users from backend database, using candidate fallback registry:", err);
      const storePending = useLmsStore.getState().pendingUsers || [];
      const storeApproved = (() => {
        try {
          const stored = localStorage.getItem("lms_approved_users");
          return stored ? JSON.parse(stored) : [];
        } catch {
          return [];
        }
      })();

      const existingEmails = new Set(MOCK_USERS_FALLBACK.map((u: any) => (u.email || "").toLowerCase()));
      const extraPending = storePending.filter((pu: any) => !existingEmails.has((pu.email || "").toLowerCase()));
      const extraApproved = storeApproved
        .filter((au: any) => !existingEmails.has((au.email || "").toLowerCase()))
        .map((au: any) => ({
          ...au,
          firstName: au.firstName || au.name?.split(" ")[0] || "Candidate",
          lastName: au.lastName || au.name?.split(" ").slice(1).join(" ") || "",
          role: au.role === "student" ? "STUDENT" : au.role === "teacher" ? "TEACHER" : au.role,
          isApproved: true,
          approvalStatus: "APPROVED",
          studentProfile: au.studentProfile || {
            subscriptions: [{ status: "ACTIVE" }],
            class: { name: au.targetExam || "TNPSC Group 1 Batch" }
          }
        }));

      setUsersList([...extraApproved, ...extraPending, ...MOCK_USERS_FALLBACK]);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [activeView]);

  return {
    usersList,
    loadingUsers,
    usersError,
    setUsersError,
    fetchUsers
  };
};
