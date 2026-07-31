import { create } from "zustand";
import { getApiBaseUrl } from "../utils/apiBase";
import { profileAPI, authAPI } from "../services/api";
import type {
  LMSStore,
  Board,
  ClassLevel,
  Subject,
  Topic,
  AuthState,
  Profile,
  Notification,
  Assignment,
  Quiz,
  QuizResult,
  Bookmark,
  RemarkItem,
  DailyActivity,
  ValidationItem,
  MainsAnswerSubmission,
  PersonalNote,
} from "./types";
import { initialBoards } from "../../prisma/boards-data";

const makeId = (prefix: string) => {
  if (prefix === "candidate" || prefix === "instructor" || prefix === "user") {
    return typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${prefix}-${Math.random().toString(36).slice(2, 8)}-${Date.now()}`;
  }
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}-${Date.now()}`;
};

const defaultDailyActivity = [
  { date: "2026-07-24", dayName: "Fri", hoursSpent: 3.5, quizzesCompleted: 2, topicsCompleted: 5, scorePercentage: 88 },
  { date: "2026-07-25", dayName: "Sat", hoursSpent: 4.2, quizzesCompleted: 3, topicsCompleted: 6, scorePercentage: 92 },
  { date: "2026-07-26", dayName: "Sun", hoursSpent: 2.0, quizzesCompleted: 1, topicsCompleted: 3, scorePercentage: 85 },
  { date: "2026-07-27", dayName: "Mon", hoursSpent: 5.0, quizzesCompleted: 4, topicsCompleted: 8, scorePercentage: 95 },
  { date: "2026-07-28", dayName: "Tue", hoursSpent: 3.8, quizzesCompleted: 2, topicsCompleted: 4, scorePercentage: 90 },
  { date: "2026-07-29", dayName: "Wed", hoursSpent: 4.5, quizzesCompleted: 3, topicsCompleted: 7, scorePercentage: 94 },
  { date: "2026-07-30", dayName: "Thu", hoursSpent: 2.8, quizzesCompleted: 2, topicsCompleted: 4, scorePercentage: 89 },
];

const defaultRemarks = [
  {
    id: "rem-1",
    instructorName: "Dr. R. Sundaram (Physics Lead)",
    date: "July 28, 2026",
    text: "Excellent conceptual clarity in Electrostatics & Capacitance mock test. Keep up the high speed and accuracy rate!",
    category: "Performance" as const,
    type: "positive" as const,
  },
  {
    id: "rem-2",
    instructorName: "Prof. K. Anitha (TNPSC / UPSC Mentor)",
    date: "July 26, 2026",
    text: "Mains answer formatting has improved significantly. Focus on adding more flowchart diagrams in Polity & Constitution answers.",
    category: "Assignment" as const,
    type: "info" as const,
  },
  {
    id: "rem-3",
    instructorName: "Er. Vignesh Kumar (Aptitude Mentor)",
    date: "July 24, 2026",
    text: "Great attendance and active participation in the live problem solving session for Data Interpretation.",
    category: "Attendance" as const,
    type: "positive" as const,
  },
];

const defaultValidations = [
  {
    id: "val-1",
    title: "Candidate Identity Verification",
    description: "Government ID & Official Photograph verified against registry records.",
    isValidated: true,
    category: "Identity" as const,
    validatedBy: "Super Admin Registrar",
    validatedAt: "July 15, 2026",
  },
  {
    id: "val-2",
    title: "Exam Batch Enrollment Validation",
    description: "Successfully assigned and verified for JEE Main / TNPSC Group 1 Exam Batch.",
    isValidated: true,
    category: "Enrollment" as const,
    validatedBy: "Academic Director",
    validatedAt: "July 16, 2026",
  },
  {
    id: "val-3",
    title: "Curriculum Prerequisites Validation",
    description: "Verified completion of standard Class 12 / Graduate level foundational criteria.",
    isValidated: true,
    category: "Academic" as const,
    validatedBy: "Faculty Evaluation Board",
    validatedAt: "July 18, 2026",
  },
  {
    id: "val-4",
    title: "Minimum Mock Performance Benchmark",
    description: "Candidate consistently scores above the 80% passing threshold in diagnostic tests.",
    isValidated: true,
    category: "Examination" as const,
    validatedBy: "Chief Educator",
    validatedAt: "July 25, 2026",
  },
  {
    id: "val-5",
    title: "Subscription Mandate Verification",
    description: "Rohit Aspire Elite Scholar membership payment and access privileges verified.",
    isValidated: true,
    category: "Payment" as const,
    validatedBy: "Finance & Accounts Department",
    validatedAt: "July 20, 2026",
  },
];

const defaultProfile: Profile = {
  id: "cand-std-101",
  name: "Karthik Subramanian",
  firstName: "Karthik",
  lastName: "Subramanian",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
  username: "karthik_s",
  password: "",
  email: "karthik.subramanian@aspire.edu",
  role: "student",
  selectedBoardId: "",
  selectedClassId: "",
  optedSubjectId: "",
  age: "21",
  location: "Chennai, Tamil Nadu",
  phoneNumber: "+91 98765 43210",
  targetExam: "TNPSC Group 1 & JEE Main 2026",
  qualification: "B.Tech Electrical / Class 12 Scholar",
  medium: "Bilingual",
  preferredExamCategory: "TNPSC Government Exams",
  xp: 1450,
  level: 4,
  coins: 320,
  streak: 14,
  achievements: [
    { id: "ach-1", title: "Polity Master", description: "Scored 100% on 5 Polity tests", icon: "🏛️", unlockedAt: "July 12, 2026" },
    { id: "ach-2", title: "Daily Streak Champion", description: "Maintained 14-day study streak", icon: "🔥", unlockedAt: "July 25, 2026" },
    { id: "ach-3", title: "Speed Demon", description: "Finished 30-min quiz in 12 mins", icon: "⚡", unlockedAt: "July 28, 2026" },
  ],
  certificates: [
    { id: "cert-1", title: "Advanced Indian Constitution & Governance", grade: "A+ Distinction", issuer: "Rohit Aspire Board", date: "July 20, 2026" },
    { id: "cert-2", title: "Physics Electrostatics Mastery", grade: "A Grade", issuer: "Rohit Aspire Physics Faculty", date: "July 10, 2026" },
  ],
  totalHoursSpent: 34.5,
  todayHoursSpent: 2.8,
  dailyActivity: defaultDailyActivity,
  remarks: defaultRemarks,
  validations: defaultValidations,
};

export const defaultBoards: Board[] = (initialBoards as any[]).map(board => ({
  ...board,
  classes: board.classes.map((cls: any) => ({
    ...cls,
    subjects: cls.subjects.map((sub: any) => {
      let color = sub.color;
      if (color && color.startsWith('from-')) {
        color = '#4f46e5';
      }
      return {
        ...sub,
        color
      };
    })
  }))
}));

const defaultAssignments: Assignment[] = [];
const defaultQuizzes: Quiz[] = [];
const defaultNotifications: Notification[] = [
  {
    id: makeId("notif"),
    title: "Welcome!",
    message: "Your Rohit Aspire workspace is ready. Explore lessons, quizzes and assignments.",
    type: "info",
    read: false,
    time: new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

const getStoredProfile = (): Profile => {
  const stored = localStorage.getItem("lms_user_profile");
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Profile;
      return {
        ...defaultProfile,
        ...parsed,
        dailyActivity: parsed.dailyActivity || defaultDailyActivity,
        remarks: parsed.remarks || defaultRemarks,
        validations: parsed.validations || defaultValidations,
        totalHoursSpent: parsed.totalHoursSpent ?? 34.5,
        todayHoursSpent: parsed.todayHoursSpent ?? 2.8,
      };
    } catch {
      return defaultProfile;
    }
  }
  return defaultProfile;
};



const getStoredCompletedTopics = (profileId?: string): string[] => {
  if (!profileId) return [];
  const stored = localStorage.getItem(`lms_completed_topics_${profileId}`);
  if (stored) {
    try {
      return JSON.parse(stored) as string[];
    } catch {
      return [];
    }
  }
  return [];
};

const getStoredBookmarks = (): Bookmark[] => {
  const stored = localStorage.getItem("lms_bookmarks");
  if (stored) {
    try {
      return JSON.parse(stored) as Bookmark[];
    } catch {
      return [];
    }
  }
  return [];
};

const initialProfile = getStoredProfile();
const initialCompletedTopics = getStoredCompletedTopics(initialProfile.id);

export const useLmsStore = create<LMSStore>((set, get) => ({
  auth: {
    isAuthenticated: !!localStorage.getItem("auth_token") && !!localStorage.getItem("lms_user_profile"),
    user: initialProfile.id ? initialProfile : null,
    token: localStorage.getItem("auth_token") || null,
    loading: false,
    error: null,
  },
  
  loadProfileData: (profileId: string) => {
    set({ completedTopicIds: getStoredCompletedTopics(profileId) });
  },

  setAuth: (authUpdate: Partial<AuthState>) =>
    set((state) => ({ auth: { ...state.auth, ...authUpdate } })),

  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("lms_user_profile");
    window.location.hash = "/landing";
    set({
      auth: {
        isAuthenticated: false,
        user: null,
        token: null,
        loading: false,
        error: null,
      },
      profile: defaultProfile,
      activeView: "landing",
      notifications: defaultNotifications,
      completedTopicIds: [],
    });
  },

  activeView: "landing",
  setView: (view: string) => set({ activeView: view }),

  isDarkMode: localStorage.getItem("darkMode") === "true",
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", String(newDarkMode));
      return { isDarkMode: newDarkMode };
    }),
  setTheme: (value: boolean) => {
    localStorage.setItem("darkMode", String(value));
    set({ isDarkMode: value });
  },

  selectedBoard: null,
  selectedClass: null,
  selectedSubject: null,
  setSelectedBoard: (board: Board) => set({ selectedBoard: board }),
  setSelectedClass: (classLevel: ClassLevel) =>
    set({ selectedClass: classLevel }),
  setSelectedSubject: (subject: Subject) => set({ selectedSubject: subject }),

  currentTopic: null,
  setCurrentTopic: (topic: Topic) => set({ currentTopic: topic }),

  profile: initialProfile,
  setProfile: (profile) => set({ profile }),
  boards: [],
  setBoards: (boards) => set({ boards }),
  assignments: defaultAssignments,
  quizzes: defaultQuizzes,
  activeQuizId: null,
  quizResults: [],
  notifications: defaultNotifications,
  bookmarks: getStoredBookmarks(),
  notes: [],
  liveRoomState: null,
  activeSubjectId: initialProfile.optedSubjectId || "",
  activeChapterId: "",
  activeTopicId: "",
  completedTopicIds: initialCompletedTopics,

  submitAssignment: async (assignmentId, file) => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`${getApiBaseUrl()}/api/assignments/${assignmentId}/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      if (res.ok) {
        await get().fetchAssignments();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit assignment");
      }
    } catch (err: any) {
      console.warn("Failed to submit assignment:", err);
      throw err;
    }
  },

  gradeAssignment: async (assignmentId, grade, feedback) => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      let submissionId = assignmentId;
      if (assignmentId.includes("_")) {
        submissionId = assignmentId.split("_")[1];
      }
      const match = grade.match(/(\d+)\/100/);
      const marksObtained = match ? match[1] : "100";
      const res = await fetch(`${getApiBaseUrl()}/api/assignments/submissions/${submissionId}/grade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ marksObtained, comment: feedback })
      });
      if (res.ok) {
        await get().fetchAssignments();
      }
    } catch (err) {
      console.warn("Failed to grade assignment:", err);
    }
  },

  fetchAssignments: async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/assignments`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        set({ assignments: data.assignments || [] });
      }
    } catch (err) {
      console.warn("Failed to fetch assignments:", err);
    }
  },

  fetchNotes: async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/upload/notes/all`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        set({ notes: data.notes || [] });
      }
    } catch (err) {
      console.warn("Failed to fetch notes:", err);
    }
  },

  setActiveQuiz: (quizId) => set({ activeQuizId: quizId }),

  submitQuizResult: (result) =>
    set((state) => ({ quizResults: [...state.quizResults, result] })),

  addNotification: (title, message, type) =>
    set((state) => ({
      notifications: [
        {
          id: makeId("notif"),
          title,
          message,
          type,
          read: false,
          time: new Date().toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        ...state.notifications,
      ],
    })),

  readAllNotifications: async () => {
    set((state) => ({
      notifications: state.notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    }));
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      await fetch(`${getApiBaseUrl()}/api/notifications/read`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (err) {
      console.warn("Failed to sync read status with server:", err);
    }
  },

  fetchNotifications: async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/notifications`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        const incoming = data.notifications || [];
        const currentNotifications = get().notifications;
        const localOnly = currentNotifications.filter((n) => n.id.startsWith("notif-"));
        set({ notifications: [...localOnly, ...incoming] });
      }
    } catch (err) {
      console.warn("Failed to fetch notifications:", err);
    }
  },

  addBookmark: (bookmark, timestamp) =>
    set((state) => ({
      bookmarks: [
        {
          id: makeId("bookmark"),
          timestamp,
          profileId: state.profile?.id || "guest",
          ...bookmark,
        },
        ...state.bookmarks,
      ],
    })),

  deleteBookmark: (bookmarkId) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter(
        (bookmark) => bookmark.id !== bookmarkId,
      ),
    })),

  setActiveCourseContext: (subjectId, chapterId, topicId) =>
    set((state) => ({
      activeSubjectId: subjectId === null ? "" : subjectId,
      activeChapterId: chapterId === null ? "" : chapterId,
      activeTopicId: topicId === null ? "" : topicId,
    })),

  completeTopic: (boardId, classId, subjectId, chapterId, topicId) =>
    set((state) => {
      if (state.completedTopicIds.includes(topicId)) return state;
      return {
        boards: state.boards.map((board) =>
        board.id !== boardId
          ? board
          : {
              ...board,
              classes: board.classes.map((classLevel) =>
                classLevel.id !== classId
                  ? classLevel
                  : {
                      ...classLevel,
                      subjects: classLevel.subjects.map((subject) =>
                        subject.id !== subjectId
                          ? subject
                          : {
                              ...subject,
                              chapters: subject.chapters.map((chapter) =>
                                chapter.id !== chapterId
                                  ? chapter
                                  : {
                                      ...chapter,
                                      topics: chapter.topics.map((topic) =>
                                        topic.id !== topicId
                                          ? topic
                                          : { ...topic, isCompleted: true },
                                      ),
                                    },
                              ),
                            },
                      ),
                    },
              ),
            },
      ),
      completedTopicIds: [...new Set([...state.completedTopicIds, topicId])],
      profile: {
        ...state.profile,
        xp: state.profile.xp + 50,
        coins: state.profile.coins + 10,
        streak: state.profile.streak + 1,
      },
    };
  }),

  joinLiveRoom: (state) => set({ liveRoomState: state }),

  addBoard: (title) =>
    set((state) => ({
      boards: [
        ...state.boards,
        {
          id: makeId("board"),
          title,
          classes: [],
        },
      ],
    })),

  addClass: (boardId, classTitle) =>
    set((state) => ({
      boards: state.boards.map((board) =>
        board.id !== boardId
          ? board
          : {
              ...board,
              classes: [
                ...board.classes,
                {
                  id: makeId("class"),
                  title: classTitle,
                  subjects: [],
                },
              ],
            },
      ),
    })),

  addSubject: (boardId, classId, subjectTitle, subjectColor) =>
    set((state) => ({
      boards: state.boards.map((board) =>
        board.id !== boardId
          ? board
          : {
              ...board,
              classes: board.classes.map((classLevel) =>
                classLevel.id !== classId
                  ? classLevel
                  : {
                      ...classLevel,
                      subjects: [
                        ...classLevel.subjects,
                        {
                          id: makeId("subject"),
                          title: subjectTitle,
                          color: subjectColor,
                          imageUrl: undefined,
                          chapters: [],
                        },
                      ],
                    },
              ),
            },
      ),
    })),
  pendingUsers: (() => {
    try {
      const stored = localStorage.getItem("lms_pending_users");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  })(),

  registerUser: async (userData: Partial<Profile>) => {
    const newId = makeId(userData.role === "teacher" ? "instructor" : "candidate");
    const formattedUser: Profile = {
      id: newId,
      name: userData.name || "Aspirant",
      username: userData.username || (userData.email ? userData.email.split("@")[0] : "aspirant"),
      email: userData.email || "",
      password: userData.password || "password123",
      role: userData.role || "student",
      phoneNumber: userData.phoneNumber || "",
      selectedBoardId: "engineering",
      selectedClassId: "jee-main-2026",
      optedSubjectId: "jee-physics",
      targetExam: userData.targetExam || "JEE Main 2026",
      subjectArea: userData.subjectArea || userData.specialization || "Physics & Mathematics",
      qualification: userData.qualification || "Graduate",
      xp: 0,
      level: 1,
      coins: 100,
      streak: 1,
      achievements: [],
      certificates: [],
      isApproved: false,
      approvalStatus: "PENDING_APPROVAL",
      registeredAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    useLmsStore.setState((state) => {
      const updatedPending = [...state.pendingUsers, formattedUser];
      localStorage.setItem("lms_pending_users", JSON.stringify(updatedPending));
      return { pendingUsers: updatedPending };
    });

    // Sync registration with backend database
    try {
      const nameParts = (userData.name || "").trim().split(" ");
      const firstName = nameParts[0] || "Aspirant";
      const lastName = nameParts.slice(1).join(" ") || "User";
      await authAPI.signup(
        formattedUser.email,
        formattedUser.password || "password123",
        firstName,
        lastName,
        formattedUser.role.toUpperCase(),
        "engineering",
        "jee-main-2026",
        "Tamil Nadu"
      );
    } catch (err: any) {
      console.warn("[store] Background signup DB sync notice:", err?.message || err);
    }

    // Notify Super Admin
    const { addNotification } = useLmsStore.getState();
    addNotification(
      `New ${formattedUser.role === "teacher" ? "Instructor" : "Candidate"} Registration Pending`,
      `${formattedUser.name} (${formattedUser.email}) requested account approval.`,
      "alert"
    );

    return {
      success: true,
      message: "Registration submitted successfully! Your account is currently awaiting Super Admin approval.",
    };
  },

  approveUser: (userId: string) => {
    useLmsStore.setState((state) => {
      const targetUser = state.pendingUsers.find((u) => u.id === userId);
      if (!targetUser) return state;

      const approvedUser: Profile = {
        ...targetUser,
        isApproved: true,
        role: targetUser.role,
      };

      // Store in approved list
      const approvedUsers = (() => {
        try {
          const stored = localStorage.getItem("lms_approved_users");
          return stored ? JSON.parse(stored) : [];
        } catch {
          return [];
        }
      })();

      const updatedApproved = [...approvedUsers, approvedUser];
      localStorage.setItem("lms_approved_users", JSON.stringify(updatedApproved));

      const updatedPending = state.pendingUsers.filter((u) => u.id !== userId);
      localStorage.setItem("lms_pending_users", JSON.stringify(updatedPending));

      return { pendingUsers: updatedPending };
    });

    const { addNotification } = useLmsStore.getState();
    addNotification("Account Approved", `User registration approved successfully.`, "success");
  },

  rejectUser: (userId: string) => {
    useLmsStore.setState((state) => {
      const updatedPending = state.pendingUsers.filter((u) => u.id !== userId);
      localStorage.setItem("lms_pending_users", JSON.stringify(updatedPending));
      return { pendingUsers: updatedPending };
    });

    const { addNotification } = useLmsStore.getState();
    addNotification("Registration Declined", `Account registration request removed.`, "info");
  },

  // TNPSC & UPSC Specific State & Actions
  currentAffairs: [
    {
      id: "ca-tn-01",
      title: "Tamil Nadu Pudhumai Penn & Tamil Pudhalvan Scheme 2026 Rollout",
      titleTamil: "புதுமைப் பெண் & தமிழ் புதல்வன் திட்டம் 2026 விரிவாக்கம்",
      category: "Tamil Nadu State Affairs",
      date: "July 27, 2026",
      summary: "Tamil Nadu Government expands monthly financial assistance of ₹1,000 for government school graduates pursuing higher education.",
      fullContent: "The Tamil Nadu Department of Higher Education announced the expansion of monthly grant initiatives to boost Gross Enrollment Ratio (GER) in competitive exam hubs across 38 districts.",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      quizQuestions: [
        {
          question: "What is the monthly grant provided under the Pudhumai Penn Scheme?",
          options: ["₹500", "₹1,000", "₹1,500", "₹2,000"],
          answer: 1
        }
      ]
    },
    {
      id: "ca-upsc-01",
      title: "UPSC GS-II Strategy: Federalism, Governor Functions & Constitutional Rulings",
      titleTamil: "கூட்டாட்சி தத்துவம் மற்றும் இந்திய அரசியலமைப்பு பிரிவுகள்",
      category: "UPSC National & IR",
      date: "July 26, 2026",
      summary: "Comprehensive analytical breakdown of landmark Supreme Court constitutional bench decisions for UPSC CSE Mains GS Paper 2.",
      fullContent: "This article evaluates Article 200, Governor assent timelines, and federal balance between Union and State Governments.",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      quizQuestions: [
        {
          question: "Which article of the Indian Constitution deals with the Assent to Bills by the Governor?",
          options: ["Article 161", "Article 200", "Article 213", "Article 226"],
          answer: 1
        }
      ]
    }
  ],

  mainsSubmissions: [
    {
      id: "mains-01",
      candidateId: "candidate-001",
      candidateName: "Kavitha Rajan",
      examType: "TNPSC Group 1 Mains",
      questionTitle: "Examine the role of Dravidian Movement and Social Reformers in shaping modern Tamil Nadu education policy.",
      subject: "Unit 8: History, Culture & Heritage of TN",
      submittedAt: "25 July 2026, 14:30",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      status: "Evaluated",
      score: 18,
      maxScore: 25,
      evaluatorNotes: "Excellent historical timeline and Thirukkural references. Include statistics on Gross Enrollment Ratio (GER) in TN for top marks.",
      modelAnswerPdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      id: "mains-02",
      candidateId: "candidate-002",
      candidateName: "Arun Kumar",
      examType: "UPSC CSE Mains",
      questionTitle: "Discuss the constitutional implications of Article 356 and federal balance of power in India.",
      subject: "GS Paper II: Polity & Governance",
      submittedAt: "26 July 2026, 10:15",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      status: "Pending Review",
      maxScore: 15
    }
  ],

  submitMainsAnswer: (submissionData) => {
    const newSubmission: MainsAnswerSubmission = {
      ...submissionData,
      id: makeId("mains"),
      submittedAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      status: "Pending Review"
    };

    useLmsStore.setState((state) => ({
      mainsSubmissions: [newSubmission, ...state.mainsSubmissions]
    }));

    const { addNotification } = useLmsStore.getState();
    addNotification("Mains Answer Submitted", `Your answer PDF for "${submissionData.questionTitle}" was submitted for evaluator review.`, "success");
  },

  evaluateMainsAnswer: (id, score, evaluatorNotes, modelAnswerPdfUrl) => {
    useLmsStore.setState((state) => ({
      mainsSubmissions: state.mainsSubmissions.map((sub) =>
        sub.id === id
          ? {
              ...sub,
              status: "Evaluated",
              score,
              evaluatorNotes,
              modelAnswerPdfUrl
            }
          : sub
      )
    }));

    const { addNotification } = useLmsStore.getState();
    addNotification("Mains Evaluation Published", `Mains answer sheet evaluated with score ${score}.`, "success");
  },

  // Digital Notes & Canvas Studio State & Actions
  personalNotes: (() => {
    try {
      const stored = localStorage.getItem("lms_personal_notes");
      if (stored) return JSON.parse(stored);
    } catch {
      // Fallback
    }
    return [
      {
        id: "note-01",
        title: "TNPSC Unit 8: Thirukkural 39 Chapters & Governance Mind Map",
        content: "Key Thirukkural chapters relating to Statecraft (அமைச்சு), Justice (நீதிமுறை), and Public Administration. Thirukkural 383 highlights the 6 essential elements of a successful kingdom.",
        authorId: "instructor-001",
        authorName: "Dr. S. Ramanathan",
        authorRole: "teacher",
        targetType: "all_students",
        subject: "Unit 8: History & Culture of TN",
        tags: ["Thirukkural", "MindMap", "TNPSC Group 1"],
        createdAt: "26 July 2026, 11:00 AM"
      },
      {
        id: "note-02",
        title: "UPSC GS-II Constitutional Amendments Summary Note",
        content: "Important constitutional amendments from 73rd/74th Panchayati Raj to 106th Nari Shakti Vandan Adhiniyam.",
        authorId: "student-001",
        authorName: "Kavitha Rajan",
        authorRole: "student",
        targetType: "personal",
        subject: "GS Paper II: Polity",
        tags: ["Constitutional Amendments", "Polity", "Revision"],
        createdAt: "27 July 2026, 09:15 AM"
      }
    ];
  })(),

  createPersonalNote: (noteData) => {
    const formattedDate = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newNote: PersonalNote = {
      ...noteData,
      id: makeId("pnote"),
      createdAt: formattedDate
    };

    useLmsStore.setState((state) => {
      const updatedNotes = [newNote, ...state.personalNotes];
      localStorage.setItem("lms_personal_notes", JSON.stringify(updatedNotes));
      return { personalNotes: updatedNotes };
    });

    const { addNotification } = useLmsStore.getState();
    addNotification(
      "Note Saved Successfully",
      `"${newNote.title}" saved to Digital Notes Studio.`,
      "success"
    );
  },

  publishPersonalNote: (noteId, targetType, targetStudentId, targetStudentName) => {
    useLmsStore.setState((state) => {
      const updatedNotes = state.personalNotes.map((n) =>
        n.id === noteId
          ? {
              ...n,
              targetType,
              targetStudentId,
              targetStudentName,
              updatedAt: new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }
          : n
      );
      localStorage.setItem("lms_personal_notes", JSON.stringify(updatedNotes));
      return { personalNotes: updatedNotes };
    });

    const { addNotification } = useLmsStore.getState();
    const targetMsg =
      targetType === "all_students"
        ? "Officially published to all candidates in batch."
        : `Sent directly to candidate ${targetStudentName || "individual user"}.`;
    addNotification("Note Published", targetMsg, "success");
  },

  deletePersonalNote: (noteId) => {
    useLmsStore.setState((state) => {
      const updatedNotes = state.personalNotes.filter((n) => n.id !== noteId);
      localStorage.setItem("lms_personal_notes", JSON.stringify(updatedNotes));
      return { personalNotes: updatedNotes };
    });

    const { addNotification } = useLmsStore.getState();
    addNotification("Note Deleted", "Note removed from workspace.", "info");
  },

  updateProfile: (updatedFields) => {
    useLmsStore.setState((state) => {
      const newFirstName = updatedFields.firstName !== undefined ? updatedFields.firstName : (state.profile.firstName || "");
      const newLastName = updatedFields.lastName !== undefined ? updatedFields.lastName : (state.profile.lastName || "");
      const derivedName = (newFirstName || newLastName) 
        ? `${newFirstName} ${newLastName}`.trim() 
        : (updatedFields.name || state.profile.name);

      const updatedProfile: Profile = {
        ...state.profile,
        ...updatedFields,
        name: derivedName,
        firstName: newFirstName,
        lastName: newLastName,
      };

      localStorage.setItem("lms_user_profile", JSON.stringify(updatedProfile));

      // Synchronize with local approved users storage if present
      try {
        const storedApproved = localStorage.getItem("lms_approved_users");
        if (storedApproved) {
          const approvedUsers = JSON.parse(storedApproved);
          const updatedApproved = approvedUsers.map((u: any) =>
            u.id === updatedProfile.id || (u.email && u.email.toLowerCase() === updatedProfile.email?.toLowerCase())
              ? { ...u, ...updatedProfile }
              : u
          );
          localStorage.setItem("lms_approved_users", JSON.stringify(updatedApproved));
        }
      } catch (e) {}

      const updatedAuth = state.auth.isAuthenticated
        ? { ...state.auth, user: updatedProfile }
        : state.auth;

      // Sync with database if token is available
      if (localStorage.getItem("auth_token")) {
        profileAPI.updateProfile(updatedFields).catch((err) => {
          console.warn("[store] Background profile DB update notice:", err?.message || err);
        });
      }

      return {
        profile: updatedProfile,
        auth: updatedAuth,
      };
    });
  },

  addStudentRemark: (studentId, remarkData) => {
    useLmsStore.setState((state) => {
      const newRemark: RemarkItem = {
        id: makeId("rem"),
        ...remarkData,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      };
      const currentRemarks = state.profile.remarks || [];
      const updatedRemarks = [newRemark, ...currentRemarks];
      const updatedProfile = { ...state.profile, remarks: updatedRemarks };
      localStorage.setItem("lms_user_profile", JSON.stringify(updatedProfile));

      // Sync remark with DB
      if (localStorage.getItem("auth_token")) {
        profileAPI.addRemark({ studentId, ...remarkData }).catch((err) => {
          console.warn("[store] Background remark DB insert notice:", err?.message || err);
        });
      }

      return { profile: updatedProfile };
    });
  },

  toggleStudentValidation: (studentId, validationId, isValidated, validatorName) => {
    useLmsStore.setState((state) => {
      const currentValidations = state.profile.validations || defaultValidations;
      const updatedValidations = currentValidations.map((v) =>
        v.id === validationId
          ? {
              ...v,
              isValidated,
              validatedBy: isValidated ? (validatorName || "Instructor / Administrator") : undefined,
              validatedAt: isValidated ? new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : undefined,
            }
          : v
      );
      const updatedProfile = { ...state.profile, validations: updatedValidations };
      localStorage.setItem("lms_user_profile", JSON.stringify(updatedProfile));

      // Sync validation with DB
      if (localStorage.getItem("auth_token")) {
        profileAPI.toggleValidation({ validationId, isValidated, validatorName }).catch((err) => {
          console.warn("[store] Background validation DB update notice:", err?.message || err);
        });
      }

      return { profile: updatedProfile };
    });
  },

  incrementHoursSpent: (minutes = 1) => {
    useLmsStore.setState((state) => {
      const hoursToAdd = minutes / 60;
      const totalHoursSpent = Math.round(((state.profile.totalHoursSpent || 34.5) + hoursToAdd) * 100) / 100;
      const todayHoursSpent = Math.round(((state.profile.todayHoursSpent || 2.8) + hoursToAdd) * 100) / 100;

      const todayStr = new Date().toISOString().split("T")[0];
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const currentDayName = dayNames[new Date().getDay()];

      let dailyActivity = state.profile.dailyActivity || defaultDailyActivity;
      const existingTodayIdx = dailyActivity.findIndex((d) => d.date === todayStr);

      if (existingTodayIdx >= 0) {
        dailyActivity = dailyActivity.map((item, idx) =>
          idx === existingTodayIdx
            ? { ...item, hoursSpent: Math.round((item.hoursSpent + hoursToAdd) * 10) / 10 }
            : item
        );
      } else {
        dailyActivity = [
          ...dailyActivity.slice(1),
          {
            date: todayStr,
            dayName: currentDayName,
            hoursSpent: Math.round(hoursToAdd * 10) / 10,
            quizzesCompleted: 1,
            topicsCompleted: 2,
            scorePercentage: 90,
          },
        ];
      }

      const updatedProfile = {
        ...state.profile,
        totalHoursSpent,
        todayHoursSpent,
        dailyActivity,
      };

      // Sync hours with DB
      if (localStorage.getItem("auth_token")) {
        profileAPI.logHours(minutes).catch((err) => {
          console.warn("[store] Background study hours DB log notice:", err?.message || err);
        });
      }

      return { profile: updatedProfile };
    });
  }
}));

useLmsStore.subscribe((state) => {
  if (state.profile && state.profile.id !== "student-001") {
    localStorage.setItem("lms_user_profile", JSON.stringify(state.profile));
    if (state.profile.id) {
      localStorage.setItem(`lms_completed_topics_${state.profile.id}`, JSON.stringify(state.completedTopicIds || []));
    }
  }
  localStorage.setItem("lms_bookmarks", JSON.stringify(state.bookmarks || []));
});

export type { LMSStore } from "./types";
