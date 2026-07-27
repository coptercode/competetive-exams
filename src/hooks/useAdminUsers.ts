import { useState, useEffect } from "react";
import { authAPI } from "../services/api";
import { useLmsStore } from "../store/index";

export const useAdminUsers = (activeView: string) => {
  const [usersList, setUsersList] = useState<any[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [usersError, setUsersError] = useState("");

  const fetchUsers = async () => {
    setLoadingUsers(true);
    setUsersError("");
    try {
      const data = await authAPI.getUsers();
      setUsersList(data);
    } catch (err: any) {
      setUsersError("Failed to fetch users from database.");
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    if (activeView === "admin-users" || activeView === "admin-teachers") {
      fetchUsers();
    }
  }, [activeView]);

  return {
    usersList,
    loadingUsers,
    usersError,
    setUsersError,
    fetchUsers
  };
};
