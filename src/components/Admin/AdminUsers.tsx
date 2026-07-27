import React, { useState } from "react";
import { Users, Search, RefreshCw, Pencil, Trash2, ChevronDown, Lock, Unlock } from "lucide-react";
import { authAPI } from "../../services/api";
import { useUiStore } from "../../store/useUiStore";

interface AdminUsersProps {
  usersList: any[];
  loadingUsers: boolean;
  usersError: string;
  fetchUsers: () => void;
  setView: (view: string) => void;
}

export const AdminUsers: React.FC<AdminUsersProps> = ({
  usersList,
  loadingUsers,
  usersError,
  fetchUsers,
  setView
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All Grades");
  const [subFilter, setSubFilter] = useState("All Subscriptions");

  const handleDeleteUser = async (id: string) => {
    if (!(await useUiStore.getState().showConfirm("Are you sure you want to delete this user?"))) return;
    try {
      await authAPI.deleteUser(id);
      fetchUsers();
    } catch (err: any) {
      console.error("Failed to delete user.", err);
    }
  };

  const studentsOnly = usersList.filter((u) => u.role === "STUDENT");
  const filteredStudents = studentsOnly.filter((student) => {
    const nameMatch = `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = (student.email || "").toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = (student.location || "").toLowerCase().includes(searchQuery.toLowerCase());
    
    const sub = student.studentProfile?.subscriptions?.[0];
    const subStatus = sub?.status || "PENDING";
    
    const gradeVal = student.studentProfile?.class?.name || "Class 12";
    const matchesGrade = gradeFilter === "All Grades" || gradeVal === gradeFilter;

    const matchesSub = subFilter === "All Subscriptions" ||
      (subFilter === "Active" && subStatus === "ACTIVE") ||
      (subFilter === "Pending" && subStatus === "PENDING") ||
      (subFilter === "Expired" && subStatus === "EXPIRED");

    return (nameMatch || emailMatch || locationMatch) && matchesGrade && matchesSub;
  });

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-royal/10 dark:bg-brand-royal/20 text-brand-royal dark:text-blue-300 rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Students info</h2>
          </div>
        </div>
        
        {/* We omitted the add student modal logic here for brevity, usually handled in AdminPortal or a separate component */}
        <button
          onClick={() => {}} // Hooked up in wrapper later
          className="premium-btn-primary px-4 py-2 text-xs font-bold flex items-center gap-1.5 rounded-xl shadow-md hover:shadow-brand-royal/15 self-start sm:self-auto"
        >
          <span>Add Student (Modal Wrapper)</span>
        </button>
      </div>


      {/* Filter row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, email, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full premium-input pl-9 text-xs py-3 h-11"
          />
        </div>
        <div className="relative">
          <select
            value={gradeFilter}
            onChange={(e) => setGradeFilter(e.target.value)}
            className="w-full premium-input text-xs appearance-none pr-8 py-2.5 h-11 bg-white dark:bg-slate-950"
          >
            <option value="All Grades">All Grades</option>
            {["Class 9", "Class 10", "Class 11", "Class 12"].map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-4 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
        </div>
        <div className="relative">
          <select
            value={subFilter}
            onChange={(e) => setSubFilter(e.target.value)}
            className="w-full premium-input text-xs appearance-none pr-8 py-2.5 h-11 bg-white dark:bg-slate-950"
          >
            <option value="All Subscriptions">All Subscriptions</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Pending">Pending</option>
          </select>
          <ChevronDown className="absolute right-3 top-4 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {usersError && (
        <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold rounded-xl text-center">
          {usersError}
        </div>
      )}

      {/* Student list card table */}
      <div className="glass-card border-slate-200 dark:border-white/5 overflow-hidden">
        {loadingUsers && usersList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500">
            <RefreshCw className="w-8 h-8 animate-spin mb-3 text-slate-350" />
            <p className="text-xs">Fetching postgres users...</p>
          </div>
        ) : (
          filteredStudents.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <Users className="w-10 h-10 mx-auto mb-3 text-slate-300 dark:text-slate-755" />
              <p className="text-xs font-semibold">No scholars found matching the active filters.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="px-5 pt-5 flex justify-between items-center">
                <span className="text-[10px] text-slate-600 dark:text-slate-500 font-bold uppercase tracking-wider">
                  Showing {filteredStudents.length} of {studentsOnly.length} students
                </span>
                <button onClick={fetchUsers} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500">
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingUsers ? "animate-spin" : ""}`} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/5 text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400 font-extrabold bg-slate-50/50 dark:bg-slate-950/20">
                      <th className="py-4 px-6">Student</th>
                      <th className="py-4 px-6">Grade</th>
                      <th className="py-4 px-6">State</th>
                      <th className="py-4 px-6">Subscription</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {filteredStudents.map((student) => {
                      const sub = student.studentProfile?.subscriptions?.[0];
                      const subStatus = sub?.status || "PENDING";

                      return (
                        <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-royal/10 to-brand-violet/10 dark:from-brand-royal/20 dark:to-brand-violet/20 border border-brand-royal/10 text-brand-royal dark:text-brand-royal-300 font-bold flex items-center justify-center text-xs">
                                {(student.firstName?.[0] || "S").toUpperCase()}
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                  {student.firstName} {student.lastName}
                                </p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate">
                                  {student.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            {student.studentProfile?.class?.name || "Class 12"}
                          </td>
                          <td className="py-4 px-6 text-xs text-slate-700 dark:text-slate-300 font-medium">
                            {student.location || "Not Specified"}
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center gap-1 text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${
                              subStatus === "ACTIVE"
                                ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                : subStatus === "PENDING"
                                ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                : "bg-rose-500/10 text-rose-600 border-rose-500/20"
                            }`}>
                              {subStatus === "ACTIVE" ? "Active" : subStatus === "PENDING" ? "Pending" : "Expired"}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => handleDeleteUser(student.id)}
                              className="p-2 rounded-lg border border-transparent hover:border-red-500/20 text-slate-400 hover:text-red-500 hover:bg-red-500/5 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
