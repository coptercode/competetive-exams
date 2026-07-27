import React, { useState } from "react";
import { Plus, Search, Filter, HelpCircle, CheckCircle2, Clock, Award, Tag, Sparkles, Trash2, Edit3, ShieldAlert } from "lucide-react";
import { useLmsStore } from "../store/index";
import type { QuizQuestion } from "../store/types";

export const QuestionBankManager: React.FC = () => {
  const { boards } = useLmsStore();

  const [questions, setQuestions] = useState<QuizQuestion[]>([
    {
      id: "qb-1",
      question: "If A is a square matrix of order 3 and |A| = 5, what is the value of |adj A|?",
      options: ["5", "25", "125", "1"],
      correctAnswerIndex: 1,
      explanation: "For a square matrix of order n, |adj A| = |A|^(n-1). Here n=3, so |adj A| = 5^(3-1) = 25.",
      marks: 4,
      negativeMarks: 1,
      difficulty: "Medium",
      examCategory: "Engineering",
      subject: "Mathematics",
      topic: "Matrices & Determinants",
      subtopic: "Adjoint and Inverse",
      isPYQ: true,
      pyqYear: 2024,
      source: "JEE Main 2024 Shift 1",
      tags: ["Matrices", "Determinants", "PYQ"],
      timeLimitSeconds: 60,
    },
    {
      question: "Which of the following is a non-coding RNA involved in protein synthesis?",
      options: ["tRNA", "mRNA", "cDNA", "gDNA"],
      correctAnswerIndex: 0,
      explanation: "Transfer RNA (tRNA) is a non-coding RNA adaptor molecule that decodes mRNA sequences into proteins.",
      marks: 4,
      negativeMarks: 1,
      difficulty: "Easy",
      examCategory: "Medical",
      subject: "Biology",
      topic: "Genetics & Molecular Biology",
      subtopic: "RNA Types",
      isPYQ: true,
      pyqYear: 2023,
      source: "NEET UG 2023",
      tags: ["Biology", "Genetics", "NEET"],
      timeLimitSeconds: 45,
      id: "qb-2"
    },
    {
      id: "qb-3",
      question: "Under which Article of the Constitution of India is the Finance Commission constituted?",
      options: ["Article 280", "Article 324", "Article 370", "Article 110"],
      correctAnswerIndex: 0,
      explanation: "Article 280 of the Indian Constitution outlines the constitution and duties of the Finance Commission.",
      marks: 2,
      negativeMarks: 0.66,
      difficulty: "Medium",
      examCategory: "Civil Services",
      subject: "Indian Polity",
      topic: "Constitutional Bodies",
      subtopic: "Finance Commission",
      isPYQ: true,
      pyqYear: 2022,
      source: "UPSC Prelims 2022",
      tags: ["Polity", "UPSC", "Constitutional Bodies"],
      timeLimitSeconds: 60,
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [showPyqOnly, setShowPyqOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for New Question
  const [newQuestion, setNewQuestion] = useState<Partial<QuizQuestion>>({
    question: "",
    options: ["", "", "", ""],
    correctAnswerIndex: 0,
    explanation: "",
    marks: 4,
    negativeMarks: 1,
    difficulty: "Medium",
    examCategory: "Engineering",
    subject: "Physics",
    topic: "Mechanics",
    subtopic: "",
    isPYQ: false,
    pyqYear: 2025,
    source: "",
    tags: ["Competitive Exam"],
    timeLimitSeconds: 60,
  });

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.question || !newQuestion.options || newQuestion.options.some((o) => !o)) {
      alert("Please complete the question text and all 4 options.");
      return;
    }

    const created: QuizQuestion = {
      id: `qb-${Date.now()}`,
      question: newQuestion.question || "",
      options: newQuestion.options || ["", "", "", ""],
      correctAnswerIndex: newQuestion.correctAnswerIndex || 0,
      explanation: newQuestion.explanation || "",
      marks: Number(newQuestion.marks) || 4,
      negativeMarks: Number(newQuestion.negativeMarks) || 1,
      difficulty: newQuestion.difficulty || "Medium",
      examCategory: newQuestion.examCategory || "Engineering",
      subject: newQuestion.subject || "General Studies",
      topic: newQuestion.topic || "General",
      subtopic: newQuestion.subtopic || "",
      isPYQ: Boolean(newQuestion.isPYQ),
      pyqYear: Number(newQuestion.pyqYear) || 2025,
      source: newQuestion.source || "",
      tags: newQuestion.tags || [],
      timeLimitSeconds: Number(newQuestion.timeLimitSeconds) || 60,
    };

    setQuestions([created, ...questions]);
    setIsModalOpen(false);
    alert("New Question added successfully to Question Bank!");
  };

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.topic && q.topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.subject && q.subject.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || q.examCategory?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesDifficulty =
      selectedDifficulty === "all" || q.difficulty?.toLowerCase() === selectedDifficulty.toLowerCase();

    const matchesPYQ = !showPyqOnly || q.isPYQ;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesPYQ;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Top Banner */}
      <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-brand-royal/10 text-brand-royal dark:text-brand-royal-light">
              <HelpCircle className="w-6 h-6" />
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white font-display">
              Coaching Institute Question Bank
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Author and organize questions with difficulty levels, negative marking, PYQ flags, time limits, and explanations.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-3 rounded-xl bg-brand-royal hover:bg-brand-royal-dark text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-brand-royal/20 transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Question</span>
        </button>
      </div>

      {/* Filter Controls */}
      <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search questions or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
        >
          <option value="all">All Exam Categories</option>
          <option value="Engineering">Engineering (JEE)</option>
          <option value="Medical">Medical (NEET)</option>
          <option value="Civil Services">Civil Services (UPSC)</option>
          <option value="Tamil Nadu Government">TN Government (TNPSC)</option>
          <option value="Banking">Banking (SBI/IBPS)</option>
          <option value="SSC">SSC (CGL/CHSL)</option>
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
        >
          <option value="all">All Difficulty Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* PYQ Toggle */}
        <label className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 font-semibold cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showPyqOnly}
            onChange={(e) => setShowPyqOnly(e.target.checked)}
            className="rounded border-slate-300 text-brand-royal focus:ring-brand-royal"
          />
          <span>PYQs Only (Previous Year Questions)</span>
        </label>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="glass-card p-12 text-center text-slate-400 dark:text-slate-500 rounded-xl">
            No questions match your current filters. Try resetting search or adding new questions.
          </div>
        ) : (
          filteredQuestions.map((q, idx) => (
            <div
              key={q.id || idx}
              className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-brand-royal/40 transition-all space-y-4"
            >
              {/* Question Meta Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase">
                  <span className="px-2.5 py-1 rounded-full bg-brand-royal/10 text-brand-royal dark:text-brand-royal-light">
                    {q.examCategory || "Competitive Exam"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {q.subject || "Subject"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {q.topic || "Topic"}
                  </span>
                  {q.isPYQ && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      PYQ {q.pyqYear}
                    </span>
                  )}
                  <span
                    className={`px-2.5 py-1 rounded-full text-white ${
                      q.difficulty === "Easy"
                        ? "bg-emerald-600"
                        : q.difficulty === "Hard"
                        ? "bg-rose-600"
                        : "bg-amber-600"
                    }`}
                  >
                    {q.difficulty || "Medium"}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                    +{q.marks || 4} Marks
                  </span>
                  <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400 font-bold">
                    -{q.negativeMarks || 1} Neg
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {q.timeLimitSeconds || 60}s
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                Q{idx + 1}. {q.question}
              </h4>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.correctAnswerIndex;
                  return (
                    <div
                      key={oIdx}
                      className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between ${
                        isCorrect
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold"
                          : "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <span>
                        ({String.fromCharCode(65 + oIdx)}) {opt}
                      </span>
                      {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              {q.explanation && (
                <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-xs text-slate-600 dark:text-slate-300">
                  <strong className="text-brand-royal dark:text-brand-royal-light block mb-1">Detailed Explanation:</strong>
                  {q.explanation}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Add Question Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 scrollbar-dark">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Add New Question to Bank
            </h3>

            <form onSubmit={handleAddQuestion} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  Question Text
                </label>
                <textarea
                  required
                  rows={3}
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                  placeholder="Enter the full question statement..."
                  className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              {/* 4 Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {newQuestion.options?.map((opt, oIdx) => (
                  <div key={oIdx}>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                      Option {String.fromCharCode(65 + oIdx)}
                    </label>
                    <input
                      type="text"
                      required
                      value={opt}
                      onChange={(e) => {
                        const updated = [...(newQuestion.options || ["", "", "", ""])];
                        updated[oIdx] = e.target.value;
                        setNewQuestion({ ...newQuestion, options: updated });
                      }}
                      className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              {/* Correct Answer Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    Correct Option
                  </label>
                  <select
                    value={newQuestion.correctAnswerIndex}
                    onChange={(e) =>
                      setNewQuestion({ ...newQuestion, correctAnswerIndex: Number(e.target.value) })
                    }
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value={0}>Option A</option>
                    <option value={1}>Option B</option>
                    <option value={2}>Option C</option>
                    <option value={3}>Option D</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    Marks (+)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={newQuestion.marks}
                    onChange={(e) => setNewQuestion({ ...newQuestion, marks: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    Negative Marks (-)
                  </label>
                  <input
                    type="number"
                    step="0.25"
                    value={newQuestion.negativeMarks}
                    onChange={(e) =>
                      setNewQuestion({ ...newQuestion, negativeMarks: Number(e.target.value) })
                    }
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Category, Difficulty & PYQ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    Exam Category
                  </label>
                  <input
                    type="text"
                    value={newQuestion.examCategory}
                    onChange={(e) => setNewQuestion({ ...newQuestion, examCategory: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    Difficulty
                  </label>
                  <select
                    value={newQuestion.difficulty}
                    onChange={(e) => setNewQuestion({ ...newQuestion, difficulty: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    Is Previous Year Question (PYQ)?
                  </label>
                  <select
                    value={newQuestion.isPYQ ? "true" : "false"}
                    onChange={(e) => setNewQuestion({ ...newQuestion, isPYQ: e.target.value === "true" })}
                    className="w-full p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="false font-normal">No</option>
                    <option value="true">Yes (PYQ)</option>
                  </select>
                </div>
              </div>

              {/* Explanation */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  Detailed Solution / Explanation
                </label>
                <textarea
                  rows={2}
                  value={newQuestion.explanation}
                  onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                  placeholder="Provide step-by-step solution for candidates..."
                  className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-brand-royal text-white font-bold hover:bg-brand-royal-dark shadow-md"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
