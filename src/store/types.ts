// ========================================
// DATABASE-ALIGNED TYPES FOR COMPETITIVE EXAM PLATFORM
// ========================================

export type UserRole = "student" | "teacher" | "admin" | "candidate" | "instructor" | "super_admin";
export type NotificationType = "success" | "info" | "alert";
export type AssignmentStatus = "Pending" | "Submitted" | "Graded";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface Certificate {
  id: string;
  title: string;
  grade: string;
  issuer: string;
  date: string;
}

export interface DailyActivity {
  date: string; // e.g., "2026-07-30"
  dayName: string; // e.g., "Mon", "Tue"
  hoursSpent: number; // e.g., 3.5
  quizzesCompleted: number;
  topicsCompleted: number;
  scorePercentage: number;
}

export interface RemarkItem {
  id: string;
  instructorId?: string;
  instructorName: string;
  date: string;
  text: string;
  category: "Performance" | "Attendance" | "Assignment" | "General" | "Encouragement";
  type: "positive" | "warning" | "info";
}

export interface ValidationItem {
  id: string;
  title: string;
  description: string;
  isValidated: boolean;
  category: "Identity" | "Academic" | "Enrollment" | "Payment" | "Examination";
  validatedBy?: string;
  validatedAt?: string;
}

export interface Profile {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  username: string;
  password: string;
  email: string;
  role: UserRole;
  selectedBoardId: string;
  selectedClassId: string;
  optedSubjectId: string;
  age?: string;
  location?: string;
  xp: number;
  level: number;
  coins: number;
  streak: number;
  achievements: Achievement[];
  certificates: Certificate[];
  subjectArea?: string;
  phoneNumber?: string;
  targetExam?: string;
  batchName?: string;
  qualification?: string;
  specialization?: string;
  isApproved?: boolean;
  approvalStatus?: "PENDING_APPROVAL" | "APPROVED" | "REJECTED";
  registeredAt?: string;
  medium?: "Tamil" | "English" | "Bilingual";
  preferredExamCategory?: "TNPSC Government Exams" | "UPSC Civil Services" | "Banking & Insurance" | "SSC & Railways" | "Engineering/Medical Entrance";
  tnpscRegNo?: string;
  upscRollNo?: string;
  attemptYear?: string;
  // Dashboard Analytics & Validation Fields
  totalHoursSpent?: number;
  todayHoursSpent?: number;
  isBlocked?: boolean;
  blockedReason?: string;
  consecutiveLowActivityDays?: number;
  apologyNote?: string;
  apologySubmittedAt?: string;
  dailyActivity?: DailyActivity[];
  remarks?: RemarkItem[];
  validations?: ValidationItem[];
}

export interface CurrentAffairsArticle {
  id: string;
  title: string;
  titleTamil?: string;
  category: "Tamil Nadu State Affairs" | "UPSC National & IR" | "Economy & Policy" | "Science & Tech";
  date: string;
  summary: string;
  fullContent: string;
  pdfUrl?: string;
  quizQuestions?: {
    question: string;
    options: string[];
    answer: number;
  }[];
}

export interface PersonalNote {
  id: string;
  title: string;
  content: string;
  canvasDataUrl?: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  targetType: "personal" | "all_students" | "individual_student";
  targetStudentId?: string;
  targetStudentName?: string;
  subject: string;
  tags?: string[];
  createdAt: string;
  updatedAt?: string;
  pdfUrl?: string;
  fontFamily?: "arial" | "calibri" | "times" | "georgia" | "trebuchet" | "verdana" | "courier" | "comic" | "impact" | "cambria" | "garamond" | "tamil" | "sans" | "serif" | "mono";
  fontSize?: "sm" | "base" | "lg" | "xl";
  textAlign?: "left" | "center" | "right" | "justify";
  noteTheme?: "white" | "parchment" | "dark" | "emerald" | "mint";
  textColor?: string;
}

export interface MainsAnswerSubmission {
  id: string;
  candidateId: string;
  candidateName: string;
  examType: "TNPSC Group 1 Mains" | "UPSC CSE Mains" | "TNPSC Group 2 Mains";
  questionTitle: string;
  subject: string;
  submittedAt: string;
  pdfUrl: string;
  status: "Pending Review" | "Evaluated";
  score?: number;
  maxScore: number;
  evaluatorNotes?: string;
  modelAnswerPdfUrl?: string;
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  duration: string;
  pdfUrl?: string;
  videoUrl?: string;
  videoId?: string;
  drmEnabled?: boolean;
  isCompleted?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  imageUrl?: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  color: string;
  imageUrl?: string;
  chapters: Chapter[];
}

export interface ClassLevel {
  id: string;
  title: string;
  subjects: Subject[];
}

export interface Board {
  id: string;
  title: string;
  code?: string;
  classes: ClassLevel[];
}

// Aliases for Competitive Exam Terminology
export type ExamCategory = Board;
export type ExamBatch = ClassLevel;
export type ExamProgram = Subject;

export interface Bookmark {
  id: string;
  topicId: string;
  topicTitle: string;
  chapterTitle: string;
  subjectTitle: string;
  note?: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  time: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: AssignmentStatus;
  grade?: string;
  feedback?: string;
  pdfUrl?: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  duration: number; // in minutes
  totalMarks: number;
  questions: Question[];
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalMarks: number;
  completedAt: string;
  answers: Record<string, number>;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Profile | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LMSStore {
  auth: AuthState;
  setAuth: (auth: Partial<AuthState>) => void;
  loadProfileData: (profileId: string) => void;
  logout: () => void;

  activeView: string;
  setView: (view: string) => void;

  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setTheme: (isDarkMode: boolean) => void;

  selectedBoard: Board | null;
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  setSelectedBoard: (board: Board) => void;
  setSelectedClass: (classLevel: ClassLevel) => void;
  setSelectedSubject: (subject: Subject) => void;

  currentTopic: Topic | null;
  setCurrentTopic: (topic: Topic) => void;

  profile: Profile;
  setProfile: (profile: Profile) => void;
  boards: Board[];
  setBoards: (boards: Board[]) => void;
  assignments: Assignment[];
  submitAssignment: (assignmentId: string, file: File) => Promise<void>;
  gradeAssignment: (
    assignmentId: string,
    grade: string,
    feedback: string,
  ) => Promise<void>;
  fetchAssignments: () => Promise<void>;

  quizzes: Quiz[];
  activeQuizId: string | null;
  quizResults: QuizResult[];
  setActiveQuiz: (quizId: string | null) => void;
  submitQuizResult: (result: QuizResult) => void;

  notifications: Notification[];
  addNotification: (
    title: string,
    message: string,
    type: NotificationType,
  ) => void;
  readAllNotifications: () => Promise<void>;
  fetchNotifications: () => Promise<void>;

  bookmarks: Bookmark[];
  notes: any[];
  fetchNotes: () => Promise<void>;
  addBookmark: (
    bookmark: Omit<Bookmark, "id" | "timestamp">,
    timestamp: string,
  ) => void;
  deleteBookmark: (bookmarkId: string) => void;

  activeSubjectId: string;
  activeChapterId: string;
  activeTopicId: string;
  setActiveCourseContext: (
    subjectId: string | null,
    chapterId: string | null,
    topicId: string | null,
  ) => void;

  completeTopic: (
    boardId: string,
    classId: string,
    subjectId: string,
    chapterId: string,
    topicId: string,
  ) => void;

  liveRoomState: { roomName: string; participantName: string; isTeacher: boolean; } | null;
  joinLiveRoom: (state: { roomName: string; participantName: string; isTeacher: boolean; } | null) => void;

  addBoard: (title: string) => void;
  addClass: (boardId: string, classTitle: string) => void;
  addSubject: (
    boardId: string,
    classId: string,
    subjectTitle: string,
    subjectColor: string,
  ) => void;

  completedTopicIds: string[];

  videoUrl?: string;
  videoId?: string;
  drmEnabled?: boolean;
  isCompleted?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  imageUrl?: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  color: string;
  imageUrl?: string;
  chapters: Chapter[];
}

export interface ClassLevel {
  id: string;
  title: string;
  subjects: Subject[];
}

export interface Board {
  id: string;
  title: string;
  code?: string;
  classes: ClassLevel[];
}



export interface Bookmark {
  id: string;
  topicId: string;
  topicTitle: string;
  chapterTitle: string;
  subjectTitle: string;
  note?: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  time: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  deadline?: Date | string;
  status: AssignmentStatus;
  grade?: string;
  feedback?: string;
  pdfUrl?: string;
  subjectTitle?: string;
  teacherName?: string;
  className?: string;
  studentName?: string;
  submittedAt?: string;
  rawDeadline?: string;
  submissionFile?: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer?: number;
  correctAnswerIndex?: number;
  explanation: string;
  subject?: string;
  difficulty?: "Easy" | "Medium" | "Hard" | string;
  marks?: number;
  negativeMarks?: number;
  examCategory?: string;
  topic?: string;
  subtopic?: string;
  isPYQ?: boolean;
  pyqYear?: number;
  source?: string;
  tags?: string[];
  timeLimitSeconds?: number;
}

export type QuizQuestion = Question;

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  duration: number; // in minutes
  durationMinutes?: number;
  totalMarks: number;
  questions: Question[];
  testType?: string;
  testCategory?: string;
  negativeMarkingRate?: number;
}

export interface QuizResult {
  quizId: string;
  title?: string;
  score: number;
  totalMarks: number;
  completedAt: string;
  date?: string;
  timeTakenSeconds?: number;
  totalQuestions?: number;
  percentile?: number;
  rank?: number;
  accuracyPercentage?: number;
  answers: Record<string, number>;
  incorrectAnswersDetails?: any[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Profile | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LMSStore {
  auth: AuthState;
  setAuth: (auth: Partial<AuthState>) => void;
  loadProfileData: (profileId: string) => void;
  logout: () => void;

  activeView: string;
  setView: (view: string) => void;

  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setTheme: (isDarkMode: boolean) => void;

  selectedBoard: Board | null;
  selectedClass: ClassLevel | null;
  selectedSubject: Subject | null;
  setSelectedBoard: (board: Board) => void;
  setSelectedClass: (classLevel: ClassLevel) => void;
  setSelectedSubject: (subject: Subject) => void;

  currentTopic: Topic | null;
  setCurrentTopic: (topic: Topic) => void;

  profile: Profile;
  setProfile: (profile: Profile) => void;
  boards: Board[];
  setBoards: (boards: Board[]) => void;
  assignments: Assignment[];
  submitAssignment: (assignmentId: string, file: File) => Promise<void>;
  gradeAssignment: (
    assignmentId: string,
    grade: string,
    feedback: string,
  ) => Promise<void>;
  fetchAssignments: () => Promise<void>;

  quizzes: Quiz[];
  activeQuizId: string | null;
  quizResults: QuizResult[];
  setActiveQuiz: (quizId: string | null) => void;
  submitQuizResult: (result: QuizResult) => void;

  notifications: Notification[];
  addNotification: (
    title: string,
    message: string,
    type: NotificationType,
  ) => void;
  readAllNotifications: () => Promise<void>;
  fetchNotifications: () => Promise<void>;

  bookmarks: Bookmark[];
  notes: any[];
  fetchNotes: () => Promise<void>;
  addBookmark: (
    bookmark: Omit<Bookmark, "id" | "timestamp">,
    timestamp: string,
  ) => void;
  deleteBookmark: (bookmarkId: string) => void;

  activeSubjectId: string;
  activeChapterId: string;
  activeTopicId: string;
  setActiveCourseContext: (
    subjectId: string | null,
    chapterId: string | null,
    topicId: string | null,
  ) => void;

  completeTopic: (
    boardId: string,
    classId: string,
    subjectId: string,
    chapterId: string,
    topicId: string,
  ) => void;

  liveRoomState: { roomName: string; participantName: string; isTeacher: boolean; } | null;
  joinLiveRoom: (state: { roomName: string; participantName: string; isTeacher: boolean; } | null) => void;

  addBoard: (title: string) => void;
  addClass: (boardId: string, classTitle: string) => void;
  addSubject: (
    boardId: string,
    classId: string,
    subjectTitle: string,
    subjectColor: string,
  ) => void;

  completedTopicIds: string[];

  pendingUsers: Profile[];
  registerUser: (userData: Partial<Profile>) => Promise<{ success: boolean; message: string }>;
  approveUser: (userId: string) => void;
  rejectUser: (userId: string) => void;

  // TNPSC & UPSC Specific State
  currentAffairs: CurrentAffairsArticle[];
  mainsSubmissions: MainsAnswerSubmission[];
  submitMainsAnswer: (submission: Omit<MainsAnswerSubmission, "id" | "submittedAt" | "status">) => void;
  evaluateMainsAnswer: (id: string, score: number, evaluatorNotes: string, modelAnswerPdfUrl?: string) => void;

  // Digital Notes & Canvas Studio State
  personalNotes: PersonalNote[];
  createPersonalNote: (noteData: Omit<PersonalNote, "id" | "createdAt">) => void;
  publishPersonalNote: (noteId: string, targetType: "all_students" | "individual_student", targetStudentId?: string, targetStudentName?: string) => void;
  deletePersonalNote: (noteId: string) => void;

  // Profile, Remarks, Validation & Study Time Actions
  updateProfile: (updatedFields: Partial<Profile>) => void;
  addStudentRemark: (studentId: string, remark: Omit<RemarkItem, "id">) => void;
  toggleStudentValidation: (studentId: string, validationId: string, isValidated: boolean, validatorName?: string) => void;
  incrementHoursSpent: (minutes?: number) => void;
}
