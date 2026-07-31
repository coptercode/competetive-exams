import React, { useState, useEffect, useRef } from "react";
import { useLmsStore } from "../store/index";
import type { QuizQuestion, Quiz, QuizResult } from "../store/types";
import {
  Trophy,
  Clock,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  BookOpen,
  Sparkles,
  Award,
  Target,
  BarChart3,
  TrendingUp,
  RotateCcw,
  Play,
} from "lucide-react";

export const QuizInterface: React.FC = () => {
  const {
    boards,
    quizzes,
    activeQuizId,
    setActiveQuiz,
    submitQuizResult,
    setView,
    profile,
  } = useLmsStore();

  const activeCategory =
    boards.find((b) => b.id === profile.selectedBoardId) || boards[0];

  // Test Type & Filter State
  const [selectedTestType, setSelectedTestType] = useState<string>("Full-Length Test");
  const [selectedBatchId, setSelectedBatchId] = useState<string>(
    profile.selectedClassId || activeCategory?.classes?.[0]?.id || ""
  );

  const testTypes = [
    "Full-Length Test",
    "Chapter Test",
    "Subject Test",
    "Daily Test",
    "Weekly Test",
    "Grand Test",
    "Previous Year Paper",
  ];

  // Demo Competitive Mock Tests
  const sampleMockTests: Quiz[] = [
    {
      id: "mock-jee-1",
      title: "JEE Main 2026 Full-Length Grand Mock Test 1",
      subjectId: "jee-physics",
      chapterId: "jee-phy-ch1",
      durationMinutes: 15,
      testType: "Full-Length Test",
      testCategory: "Engineering",
      negativeMarkingRate: 0.25,
      questions: [
        {
          id: "q-jee-1",
          question: "If A is a square matrix of order 3 and |A| = 5, what is the value of |adj A|?",
          options: ["5", "25", "125", "1"],
          correctAnswerIndex: 1,
          explanation: "For a square matrix of order n, |adj A| = |A|^(n-1). Here n=3, so |adj A| = 5^(3-1) = 25.",
          marks: 4,
          negativeMarks: 1,
          difficulty: "Medium",
        },
        {
          id: "q-jee-2",
          question: "Which of the following describes the force between two point charges?",
          options: ["Coulomb's Law", "Ohm's Law", "Faraday's Law", "Ampere's Law"],
          correctAnswerIndex: 0,
          explanation: "Coulomb's Law states F = k * (q1 * q2) / r^2 for point charges in electrostatic equilibrium.",
          marks: 4,
          negativeMarks: 1,
          difficulty: "Easy",
        },
        {
          id: "q-jee-3",
          question: "The integral of sin(x) with respect to x is:",
          options: ["cos(x) + C", "-cos(x) + C", "tan(x) + C", "-sin(x) + C"],
          correctAnswerIndex: 1,
          explanation: "∫ sin(x) dx = -cos(x) + C.",
          marks: 4,
          negativeMarks: 1,
          difficulty: "Easy",
        },
      ],
    },
    {
      id: "mock-neet-1",
      title: "NEET UG Biology & Chemistry Daily Practice Test",
      subjectId: "neet-biology",
      chapterId: "neet-bio-ch1",
      durationMinutes: 10,
      testType: "Daily Test",
      testCategory: "Medical",
      negativeMarkingRate: 0.25,
      questions: [
        {
          id: "q-neet-1",
          question: "Which organelle is known as the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
          correctAnswerIndex: 1,
          explanation: "Mitochondria generate most of the cell's supply of ATP used as chemical energy.",
          marks: 4,
          negativeMarks: 1,
          difficulty: "Easy",
        },
        {
          id: "q-neet-2",
          question: "What is the pH value of pure water at 25°C?",
          options: ["7.0", "1.0", "14.0", "0.0"],
          correctAnswerIndex: 0,
          explanation: "At 25°C, neutral pure water has equal concentration of H+ and OH- giving pH 7.",
          marks: 4,
          negativeMarks: 1,
          difficulty: "Easy",
        },
      ],
    },
    {
      id: "mock-upsc-1",
      title: "UPSC Prelims Indian Polity & Governance Previous Year Paper 2024",
      subjectId: "upsc-polity",
      chapterId: "upsc-pol-ch1",
      durationMinutes: 12,
      testType: "Previous Year Paper",
      testCategory: "Civil Services",
      negativeMarkingRate: 0.33,
      questions: [
        {
          id: "q-upsc-1",
          question: "Under which Article of the Constitution of India is the Finance Commission constituted?",
          options: ["Article 280", "Article 324", "Article 370", "Article 110"],
          correctAnswerIndex: 0,
          explanation: "Article 280 of the Indian Constitution empowers the President to constitute a Finance Commission.",
          marks: 2,
          negativeMarks: 0.66,
          difficulty: "Medium",
        },
        {
          id: "q-upsc-2",
          question: "Who presides over the joint sitting of the two Houses of Parliament?",
          options: ["President of India", "Speaker of Lok Sabha", "Chairman of Rajya Sabha", "Prime Minister"],
          correctAnswerIndex: 1,
          explanation: "Under Article 118(4), the Speaker of Lok Sabha presides over a joint sitting.",
          marks: 2,
          negativeMarks: 0.66,
          difficulty: "Medium",
        },
      ],
    },
  ];

  const globalQuiz = quizzes.find((q) => q.id === activeQuizId);
  const activeQuiz = globalQuiz || sampleMockTests.find((q) => q.id === activeQuizId) || null;

  // Active Test States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(600);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"Scorecard font-bold" | "Solutions" | "Leaderboard">("Scorecard font-bold");

  const [detailedQuestionBreakdown, setDetailedQuestionBreakdown] = useState<Array<{
    question: string;
    yourAnswer: string;
    correctAnswer: string;
    explanation: string;
    isCorrect: boolean;
    marksAwarded: number;
  }>>([]);

  const timerRef = useRef<number | null>(null);

  // Sync state when activeQuiz changes
  useEffect(() => {
    if (activeQuiz) {
      const durationMins = activeQuiz.durationMinutes || activeQuiz.duration || 10;
      setTimeLeftSeconds(durationMins * 60);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setIsSubmitted(false);
      setResult(null);
      setCountdown(3);
    }
  }, [activeQuizId, activeQuiz?.id]);

  // 3-2-1 Countdown before start
  useEffect(() => {
    if (countdown !== null) {
      const timer = setTimeout(() => {
        if (countdown > 1) {
          setCountdown(countdown - 1);
        } else if (countdown === 1) {
          setCountdown(0);
        } else {
          setCountdown(null);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Main Test Countdown Timer with Auto-Submit
  useEffect(() => {
    if (activeQuiz && !isSubmitted && countdown === null) {
      timerRef.current = window.setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleQuizSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [activeQuiz, isSubmitted, countdown]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex,
    });
  };

  const handleQuizSubmit = () => {
    if (!activeQuiz || isSubmitted) return;
    setIsSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);

    let totalMarksObtained = 0;
    let maxPossibleMarks = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const breakdown: typeof detailedQuestionBreakdown = [];

    activeQuiz.questions.forEach((q) => {
      const qMarks = q.marks || 4;
      const qNeg = q.negativeMarks || 1;
      maxPossibleMarks += qMarks;

      const selected = selectedAnswers[q.id];
      let marksForThisQ = 0;
      let isCorrect = false;

      if (selected !== undefined) {
        if (selected === q.correctAnswerIndex) {
          isCorrect = true;
          marksForThisQ = qMarks;
          correctCount++;
        } else {
          isCorrect = false;
          marksForThisQ = -qNeg;
          incorrectCount++;
        }
      } else {
        unattemptedCount++;
      }

      totalMarksObtained += marksForThisQ;

      const correctIdx = q.correctAnswerIndex ?? q.correctAnswer ?? 0;
      breakdown.push({
        question: q.question,
        yourAnswer: selected !== undefined ? (q.options[selected] || "Unattempted") : "Unattempted",
        correctAnswer: q.options[correctIdx] || "Option A",
        explanation: q.explanation || "Refer to subject theory for detailed proof.",
        isCorrect,
        marksAwarded: marksForThisQ,
      });
    });

    setDetailedQuestionBreakdown(breakdown);

    const durationMins = activeQuiz.durationMinutes || activeQuiz.duration || 10;
    const timeSpent = durationMins * 60 - timeLeftSeconds;
    const scorePct = maxPossibleMarks > 0 ? Math.max(0, Math.round((totalMarksObtained / maxPossibleMarks) * 100)) : 0;
    const percentile = Math.min(99.8, Number((92 + (scorePct * 0.075)).toFixed(1)));
    const estimatedRank = Math.max(1, Math.round(150 - scorePct * 1.3));

    const finalResult: QuizResult = {
      quizId: activeQuiz.id,
      title: activeQuiz.title,
      score: totalMarksObtained,
      totalQuestions: activeQuiz.questions.length,
      timeTakenSeconds: timeSpent,
      date: new Date().toLocaleDateString("en-IN"),
      percentile,
      rank: estimatedRank,
      accuracyPercentage: (correctCount + incorrectCount) > 0 ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) : 0,
      totalMarks: maxPossibleMarks,
      incorrectAnswersDetails: breakdown.filter(b => !b.isCorrect).map(b => ({
        question: b.question,
        yourAnswer: b.yourAnswer,
        correctAnswer: b.correctAnswer,
        explanation: b.explanation,
        recommendedTopicId: "general-topic"
      }))
    };

    setResult(finalResult);
    submitQuizResult(finalResult);
  };

  // Mock Test Selection Screen if no test active
  if (!activeQuiz) {
    const filteredTests = sampleMockTests.filter(
      (t) => selectedTestType === "All" || t.testType === selectedTestType
    );

    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 font-sans">
        {/* Header */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-brand-royal/10 to-brand-purple/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-royal/20 text-brand-royal dark:text-brand-royal-light text-xs font-black uppercase tracking-wider">
                Mock Test Portal
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Negative Marking & Auto-Submit System
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight mt-1">
              Competitive Mock Test Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              Attempt Chapter Tests, Subject Tests, Full-Length Grand Mocks, and Previous Year Papers with realistic exam timers and AIR rank predictions.
            </p>
          </div>
        </div>

        {/* Test Type Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {testTypes.map((tType) => (
            <button
              key={tType}
              onClick={() => setSelectedTestType(tType)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                selectedTestType === tType
                  ? "bg-brand-royal text-white border-brand-royal shadow-lg shadow-brand-royal/20"
                  : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {tType}
            </button>
          ))}
        </div>

        {/* Mock Tests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-brand-royal/40 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-brand-royal/10 text-brand-royal dark:text-brand-royal-light">
                    {test.testCategory || "Exam Program"}
                  </span>
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                    -{(test.negativeMarkingRate || 0.25) * 100}% Negative
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-royal transition-colors">
                  {test.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {test.durationMinutes} mins
                  </span>
                  <span className="flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" /> {test.questions.length} Questions
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveQuiz(test.id)}
                className="w-full py-3 rounded-2xl bg-brand-royal hover:bg-brand-royal-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-royal/20 transition-all hover:scale-102 mt-4"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Mock Test</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3-2-1 Countdown Modal
  if (countdown !== null) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md">
        <div className="text-center space-y-4 animate-scaleUp">
          <span className="text-xs font-black text-brand-royal uppercase tracking-widest block">
            Preparing Exam Environment
          </span>
          <div className="text-7xl font-black text-white font-display">
            {countdown > 0 ? countdown : "GO!"}
          </div>
          <p className="text-xs text-slate-400">Timer will auto-submit when time expires.</p>
        </div>
      </div>
    );
  }

  const currentQ = activeQuiz.questions[currentQuestionIndex];

  // Test Results & Instant Scorecard View
  if (isSubmitted && result) {
    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-6 font-sans">
        {/* Header Results Banner */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-brand-royal/15 to-purple-600/15 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase">
                Mock Test Result & Performance Scorecard
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white font-display mt-2">
                {activeQuiz.title}
              </h2>
            </div>

            <button
              onClick={() => setActiveQuiz(null)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-xs flex items-center gap-2 hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Back to Tests</span>
            </button>
          </div>

          {/* Key Result Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Test Score</span>
              <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                {result.score} / {result.totalMarks || 12}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Percentile</span>
              <p className="text-2xl font-black text-brand-royal dark:text-brand-royal-light mt-1">
                {result.percentile}%ile
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Estimated AIR Rank</span>
              <p className="text-2xl font-black text-amber-500 mt-1">
                AIR #{result.rank}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Accuracy Rate</span>
              <p className="text-2xl font-black text-emerald-500 mt-1">
                {result.accuracyPercentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Tab Selector: Detailed Solutions & Leaderboard */}
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-2">
          <button
            onClick={() => setActiveTab("Scorecard font-bold")}
            className={`px-4 py-2 rounded-xl text-xs font-bold ${
              activeTab === "Scorecard font-bold"
                ? "bg-brand-royal text-white"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Step-by-Step Solutions & Breakdown
          </button>
        </div>

        {/* Solutions List */}
        <div className="space-y-4">
          {detailedQuestionBreakdown.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card p-5 rounded-2xl border ${
                item.isCorrect
                  ? "border-emerald-500/30 bg-emerald-500/5"
                  : item.yourAnswer === "Unattempted font-bold"
                  ? "border-slate-200 dark:border-white/5"
                  : "border-rose-500/30 bg-rose-500/5"
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2 mb-3">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Question {idx + 1}
                </span>
                <span
                  className={`text-xs font-black ${
                    item.marksAwarded > 0
                      ? "text-emerald-600 dark:text-emerald-400"
                      : item.marksAwarded < 0
                      ? "text-rose-600 dark:text-rose-400"
                      : "text-slate-400"
                  }`}
                >
                  {item.marksAwarded > 0 ? `+${item.marksAwarded} Marks` : `${item.marksAwarded} Marks`}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed mb-3">
                {item.question}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Your Answer</span>
                  <span className={item.isCorrect ? "text-emerald-600 font-bold" : "text-rose-600 font-bold"}>
                    {item.yourAnswer}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase block mb-1">Correct Answer</span>
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold">
                    {item.correctAnswer}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-brand-royal dark:text-brand-royal-light block mb-1">Explanation:</strong>
                {item.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Active Mock Test Execution View
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Test Top Bar */}
      <div className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-black uppercase text-brand-royal dark:text-brand-royal-light">
            {activeQuiz.testCategory || "Mock Test"} • {activeQuiz.testType || "Full Test"}
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {activeQuiz.title}
          </h3>
        </div>

        {/* Live Timer */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black border ${
          timeLeftSeconds < 180
            ? "bg-rose-500/10 border-rose-500/30 text-rose-600 animate-pulse"
            : "bg-brand-royal/10 border-brand-royal/20 text-brand-royal dark:text-white"
        }`}>
          <Clock className="w-4 h-4" />
          <span>{formatTime(timeLeftSeconds)}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
          <span className="text-xs font-bold text-slate-500 uppercase">
            Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
          </span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
            +{currentQ.marks || 4} Marks | -{currentQ.negativeMarks || 1} Neg
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
          {currentQ.question}
        </h3>

        {/* Options Selection */}
        <div className="space-y-3">
          {currentQ.options.map((optionText, oIdx) => {
            const isSelected = selectedAnswers[currentQ.id] === oIdx;
            return (
              <div
                key={oIdx}
                onClick={() => handleOptionSelect(currentQ.id, oIdx)}
                className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? "bg-brand-royal/10 border-brand-royal text-brand-royal dark:text-white font-bold shadow-md"
                    : "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span>
                  ({String.fromCharCode(65 + oIdx)}) {optionText}
                </span>
                {isSelected && <CheckCircle className="w-5 h-5 text-brand-royal" />}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {currentQuestionIndex < activeQuiz.questions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="px-5 py-2.5 rounded-xl bg-brand-royal text-white text-xs font-bold flex items-center gap-1 shadow-md hover:bg-brand-royal-dark"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleQuizSubmit}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-600/20"
            >
              Submit Mock Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
