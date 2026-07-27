import React, { useState } from "react";
import { Search, X, BookOpen, Award, Users, FileText, HelpCircle, ArrowRight } from "lucide-react";
import { useLmsStore } from "../store/index";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const { boards, setView, setSelectedBoard, setSelectedClass, setSelectedSubject } = useLmsStore();
  const [query, setQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  if (!isOpen) return null;

  const searchResults: Array<{
    type: "Exam" | "Exam Program" | "Instructor" | "Subject" | "Topic" | "Question" | "Candidate";
    title: string;
    subtitle: string;
    badge: string;
    action: () => void;
  }> = [];

  const qLower = query.trim().toLowerCase();

  if (qLower.length >= 2) {
    // 1. Search Exams & Exam Programs from boards state
    boards.forEach((category) => {
      if (category.title.toLowerCase().includes(qLower)) {
        searchResults.push({
          type: "Exam",
          title: category.title,
          subtitle: `Exam Category (${category.classes.length} Batches)`,
          badge: "Category",
          action: () => {
            setSelectedBoard(category);
            setView("student-dash");
            onClose();
          },
        });
      }

      category.classes.forEach((batch) => {
        if (batch.title.toLowerCase().includes(qLower)) {
          searchResults.push({
            type: "Exam",
            title: batch.title,
            subtitle: `Under ${category.title}`,
            badge: "Exam Batch",
            action: () => {
              setSelectedBoard(category);
              setSelectedClass(batch);
              setView("student-dash");
              onClose();
            },
          });
        }

        batch.subjects.forEach((subject) => {
          if (subject.title.toLowerCase().includes(qLower)) {
            searchResults.push({
              type: "Exam Program",
              title: subject.title,
              subtitle: `Exam Program in ${batch.title}`,
              badge: "Exam Program",
              action: () => {
                setSelectedBoard(category);
                setSelectedClass(batch);
                setSelectedSubject(subject);
                setView("course-view");
                onClose();
              },
            });
          }

          subject.chapters?.forEach((chapter) => {
            if (chapter.title.toLowerCase().includes(qLower)) {
              searchResults.push({
                type: "Subject",
                title: chapter.title,
                subtitle: `Subject Unit in ${subject.title}`,
                badge: "Subject",
                action: () => {
                  setSelectedBoard(category);
                  setSelectedClass(batch);
                  setSelectedSubject(subject);
                  setView("course-view");
                  onClose();
                },
              });
            }

            chapter.topics?.forEach((topic) => {
              if (topic.title.toLowerCase().includes(qLower)) {
                searchResults.push({
                  type: "Topic",
                  title: topic.title,
                  subtitle: `Topic under ${chapter.title}`,
                  badge: "Topic",
                  action: () => {
                    setSelectedBoard(category);
                    setSelectedClass(batch);
                    setSelectedSubject(subject);
                    setView("course-view");
                    onClose();
                  },
                });
              }
            });
          });
        });
      });
    });

    // 2. Instructors & Candidates static/dynamic matches
    const mockUsers = [
      { name: "Dr. Rajesh Sharma", role: "Instructor", type: "Instructor" as const, dept: "Physics Expert" },
      { name: "Prof. Ananya Sen", role: "Instructor", type: "Instructor" as const, dept: "Organic Chemistry" },
      { name: "Siddharth Verma", role: "Candidate", type: "Candidate" as const, dept: "JEE Advanced 2026 Batch" },
      { name: "Priya Murugan", role: "Candidate", type: "Candidate" as const, dept: "TNPSC Group 1 Batch" },
    ];

    mockUsers.forEach((usr) => {
      if (usr.name.toLowerCase().includes(qLower) || usr.dept.toLowerCase().includes(qLower)) {
        searchResults.push({
          type: usr.type,
          title: usr.name,
          subtitle: `${usr.role} - ${usr.dept}`,
          badge: usr.role,
          action: () => {
            setView(usr.role === "Instructor" ? "teacher-dash" : "student-dash");
            onClose();
          },
        });
      }
    });

    // 3. Question Bank items
    const sampleQuestions = [
      "If A is a square matrix of order 3 and |A| = 5, what is |adj A|?",
      "Which law describes the force between two stationary electrical point charges?",
      "Who was the president of the Indian National Congress during the Quit India movement?",
      "What is the maximum strength of Lok Sabha prescribed by the Constitution of India?",
    ];

    sampleQuestions.forEach((qText) => {
      if (qText.toLowerCase().includes(qLower)) {
        searchResults.push({
          type: "Question",
          title: qText,
          subtitle: "Question Bank / Mock Test Item",
          badge: "Question",
          action: () => {
            setView("quiz-view");
            onClose();
          },
        });
      }
    });
  }

  const filteredResults = filterCategory === "all" 
    ? searchResults 
    : searchResults.filter((r) => r.type.toLowerCase() === filterCategory.toLowerCase());

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-slate-200 dark:border-white/10 flex items-center gap-3 bg-slate-50/50 dark:bg-slate-950/50">
          <Search className="w-5 h-5 text-brand-royal dark:text-brand-royal-light shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Exams, Programs, Instructors, Subjects, Topics, Questions, Candidates..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-bold"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 border-b border-slate-100 dark:border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          {["all", "Exam", "Exam Program", "Instructor", "Subject", "Topic", "Question", "Candidate"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-full font-semibold capitalize whitespace-nowrap transition-colors ${
                filterCategory === cat
                  ? "bg-brand-royal text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1 scrollbar-dark">
          {query.trim().length < 2 ? (
            <div className="py-12 text-center text-slate-400 dark:text-slate-500 text-sm">
              Type at least 2 characters to search across all coaching institute modules...
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
              No results found for &quot;<span className="font-semibold">{query}</span>&quot;
            </div>
          ) : (
            filteredResults.map((res, index) => (
              <div
                key={index}
                onClick={res.action}
                className="p-3 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-brand-royal/10 dark:hover:bg-brand-royal/20 hover:border-brand-royal/30 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-brand-royal/10 text-brand-royal dark:text-brand-royal-light uppercase">
                      {res.badge}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-royal dark:group-hover:text-brand-royal-light">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{res.subtitle}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-royal dark:group-hover:text-brand-royal-light group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
