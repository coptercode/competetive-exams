import React, { useState, useRef, useEffect } from "react";
import { useLmsStore } from "../store/index";
import type { PersonalNote } from "../store/types";
import {
  Edit3,
  PenTool,
  Download,
  Share2,
  Trash2,
  Plus,
  Search,
  BookOpen,
  Send,
  User,
  Users,
  CheckCircle,
  FileText,
  Palette,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowLeft,
  X,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Type,
  Eye,
  List,
  ListOrdered,
  CheckSquare,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Quote,
  Code,
} from "lucide-react";

export const DigitalNotesStudio: React.FC = () => {
  const { profile, personalNotes, createPersonalNote, publishPersonalNote, deletePersonalNote, setView } =
    useLmsStore();

  const isInstructorOrAdmin = profile.role === "teacher" || profile.role === "admin" || profile.role === "super_admin" || profile.role === "instructor";

  // Tab & View States
  const [activeTab, setActiveTab] = useState<"library" | "editor">("library");
  const [filterType, setFilterType] = useState<"all" | "personal" | "broadcasts" | "targeted">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Editor Form States
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Unit 8: History & Culture of TN");
  const [tagsInput, setTagsInput] = useState("");
  const [content, setContent] = useState("");
  const [targetType, setTargetType] = useState<"personal" | "all_students" | "individual_student">("personal");
  const [targetStudentId, setTargetStudentId] = useState("candidate-001");
  const [targetStudentName, setTargetStudentName] = useState("Kavitha Rajan");
  const [canvasDataUrl, setCanvasDataUrl] = useState<string | null>(null);

  // Advanced Typography & Styling Controls (MS Word Options)
  const [fontFamily, setFontFamily] = useState<string>("calibri");
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right" | "justify">("left");
  const [noteTheme, setNoteTheme] = useState<"white" | "parchment" | "dark" | "emerald" | "mint">("white");
  const [textColor, setTextColor] = useState("#1e293b");

  // Modal View State
  const [viewingNote, setViewingNote] = useState<PersonalNote | null>(null);

  // Canvas Drawing States
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawColor, setDrawColor] = useState("#2563eb"); // Royal Blue default
  const [brushSize, setBrushSize] = useState(3);
  const [activeTool, setActiveTool] = useState<"pen" | "eraser">("pen");

  // Sample Demo Candidate List for Targeted Instructor Delivery
  const demoCandidates = [
    { id: "candidate-001", name: "Kavitha Rajan", email: "kavitha@example.com", stream: "TNPSC Group 1 Mains" },
    { id: "candidate-002", name: "Arun Kumar", email: "arun@example.com", stream: "UPSC CSE Mains" },
    { id: "candidate-003", name: "Priya Murugan", email: "priya@example.com", stream: "TNPSC Group 4" },
    { id: "candidate-004", name: "Anand S", email: "anand@example.com", stream: "IBPS PO Banking" },
    { id: "candidate-005", name: "Swetha R", email: "swetha@example.com", stream: "TNUSRB Police SI" },
  ];

  // MS Word Font CSS Mapping for Web UI
  const getFontFamilyCss = (font?: string) => {
    switch (font) {
      case "arial":
        return "'Arial', 'Helvetica', sans-serif";
      case "calibri":
        return "'Calibri', 'Carlito', sans-serif";
      case "times":
        return "'Times New Roman', 'Times', serif";
      case "georgia":
        return "'Georgia', 'Merriweather', serif";
      case "trebuchet":
        return "'Trebuchet MS', 'Lucida Sans', sans-serif";
      case "verdana":
        return "'Verdana', 'Geneva', sans-serif";
      case "courier":
        return "'Courier New', 'Courier', monospace";
      case "comic":
        return "'Comic Sans MS', 'Chalkboard SE', cursive";
      case "impact":
        return "'Impact', 'Arial Black', sans-serif";
      case "cambria":
        return "'Cambria', 'Georgia', serif";
      case "garamond":
        return "'Garamond', 'Baskerville', serif";
      case "tamil":
        return "'Mukta Malalar', 'Noto Sans Tamil', sans-serif";
      default:
        return "'Calibri', 'Segoe UI', system-ui, sans-serif";
    }
  };

  // Font Size CSS Helper
  const getFontSizeCss = (size?: string) => {
    switch (size) {
      case "sm":
        return "13px";
      case "lg":
        return "18px";
      case "xl":
        return "22px";
      default:
        return "15px";
    }
  };

  // Theme Background Helper
  const getThemeClasses = (theme?: string) => {
    switch (theme) {
      case "parchment":
        return "bg-amber-50/90 text-amber-950 border-amber-200";
      case "dark":
        return "bg-slate-900 text-slate-100 border-slate-700";
      case "emerald":
        return "bg-emerald-50/90 text-emerald-950 border-emerald-200";
      case "mint":
        return "bg-teal-50/90 text-teal-950 border-teal-200";
      default:
        return "bg-white text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-white/10";
    }
  };

  // Theme Background Inline Style for PDF Export
  const getThemeBgStyle = (theme?: string) => {
    switch (theme) {
      case "parchment":
        return "background-color: #fef3c7; color: #451a03;";
      case "dark":
        return "background-color: #0f172a; color: #f8fafc;";
      case "emerald":
        return "background-color: #ecfdf5; color: #064e3b;";
      case "mint":
        return "background-color: #f0fdf4; color: #14532d;";
      default:
        return "background-color: #ffffff; color: #0f172a;";
    }
  };

  // Insert Bullet / List Helper
  const insertFormatting = (prefix: string, suffix = "") => {
    setContent((prev) => `${prev}\n${prefix} ${suffix}`);
  };

  // Initialize & Clear Canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setCanvasDataUrl(null);
  };

  useEffect(() => {
    if (activeTab === "editor" && canvasRef.current) {
      clearCanvas();
    }
  }, [activeTab]);

  // Drawing Event Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.strokeStyle = activeTool === "eraser" ? "#ffffff" : drawColor;
    ctx.lineWidth = activeTool === "eraser" ? brushSize * 4 : brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      setCanvasDataUrl(canvas.toDataURL("image/png"));
    }
  };

  // Handle Note Submission
  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a note title");
      return;
    }

    const tags = tagsInput
      ? tagsInput.split(",").map((t) => t.trim()).filter(Boolean)
      : ["General Notes"];

    const canvasImg = canvasRef.current ? canvasRef.current.toDataURL("image/png") : undefined;

    createPersonalNote({
      title,
      content,
      canvasDataUrl: canvasImg,
      authorId: profile.id || "user-001",
      authorName: profile.name || "User",
      authorRole: profile.role || "student",
      targetType,
      targetStudentId: targetType === "individual_student" ? targetStudentId : undefined,
      targetStudentName: targetType === "individual_student" ? targetStudentName : undefined,
      subject,
      tags,
      fontFamily: fontFamily as any,
      fontSize,
      textAlign,
      noteTheme,
      textColor,
    });

    // Reset Form
    setTitle("");
    setContent("");
    setTagsInput("");
    setCanvasDataUrl(null);
    clearCanvas();
    setActiveTab("library");
  };

  // Export Note as Formatted Printable PDF Document
  const handleExportPDF = (note: PersonalNote) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const fontStyleCss = getFontFamilyCss(note.fontFamily);
    const fontSizeCss = getFontSizeCss(note.fontSize);
    const themeBgCss = getThemeBgStyle(note.noteTheme);
    const alignCss = note.textAlign || "left";
    const customTextColor = note.textColor || "#1e293b";

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${note.title} - Rohit Aspire Revision Note</title>
          <style>
            body { 
              font-family: ${fontStyleCss}; 
              font-size: ${fontSizeCss};
              padding: 40px; 
              ${themeBgCss} 
              color: ${customTextColor};
              line-height: 1.8;
            }
            .header { border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
            .brand { color: #2563eb; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; }
            .subtitle { color: #64748b; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-top: 4px; }
            .title { font-size: 28px; font-weight: 800; margin-top: 15px; text-align: ${alignCss}; }
            .meta { background: rgba(0,0,0,0.04); padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.08); margin-bottom: 25px; font-size: 12px; }
            .content { text-align: ${alignCss}; white-space: pre-wrap; margin-bottom: 30px; }
            .diagram-box { margin-top: 30px; text-align: center; border: 1px solid rgba(0,0,0,0.15); padding: 15px; border-radius: 16px; background: #fff; }
            .diagram-box img { max-width: 100%; height: auto; border-radius: 8px; }
            .footer { margin-top: 50px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 20px; font-size: 11px; text-align: center; opacity: 0.7; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="brand">Rohit Aspire — Digital Notes & Revision Studio</div>
            <div class="subtitle">Competitive Exam Learning Platform • TNPSC & UPSC Specialization</div>
            <div class="title">${note.title}</div>
          </div>
          <div class="meta">
            <strong>Subject / Module:</strong> ${note.subject} | 
            <strong>Author:</strong> ${note.authorName} (${note.authorRole === "teacher" ? "Faculty" : "Candidate"}) | 
            <strong>Date:</strong> ${note.createdAt}
          </div>
          <div class="content">${note.content}</div>
          ${
            note.canvasDataUrl
              ? `<div class="diagram-box">
                  <div style="font-weight:bold; font-size:12px; margin-bottom:10px; color:#475569;">Hand-Drawn Diagram / Sketch Attachment</div>
                  <img src="${note.canvasDataUrl}" alt="Canvas Diagram" />
                </div>`
              : ""
          }
          <div class="footer">
            Generated securely from Rohit Aspire Competitive Exam Workspace for Offline Study & Revision.
          </div>
          <script>
            window.onload = function() { window.print(); };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Download Note as Text / Markdown File (.txt)
  const handleDownloadTxt = (note: PersonalNote) => {
    const textBlob = new Blob(
      [
        `========================================\n`,
        `ROHIT ASPIRE COMPETITIVE EXAM NOTES\n`,
        `Title: ${note.title}\n`,
        `Subject: ${note.subject}\n`,
        `Author: ${note.authorName} (${note.authorRole})\n`,
        `Date: ${note.createdAt}\n`,
        `Font Style: ${note.fontFamily || "Calibri"} | Alignment: ${note.textAlign || "left"}\n`,
        `========================================\n\n`,
        `${note.content}\n\n`,
        `Tags: ${note.tags?.join(", ") || "None"}\n`
      ],
      { type: "text/plain;charset=utf-8" }
    );
    const element = document.createElement("a");
    element.href = URL.createObjectURL(textBlob);
    element.download = `${note.title.replace(/[^a-zA-Z0-9]/g, "_")}_Note.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Filter Notes List
  const visibleNotes = personalNotes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filterType === "personal") return note.targetType === "personal" && note.authorId === profile.id;
    if (filterType === "broadcasts") return note.targetType === "all_students";
    if (filterType === "targeted") return note.targetType === "individual_student" && (note.targetStudentId === profile.id || isInstructorOrAdmin);

    return true;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8 font-sans">
      {/* Top Banner Header */}
      <div className="glass-glow-card gradient-light-aurora p-6 sm:p-8 rounded-[36px] relative overflow-hidden border border-blue-500/30 shadow-2xl">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/30 border border-white/20">
                Digital Notes & Canvas Studio
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                MS Word Font Styles • Bullet Lists • Canvas Sketch • PDF Downloads
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
              In-Built Advanced Digital Notes App
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
              Write structured notes with MS Word fonts (Arial, Calibri, Times New Roman), bullet/numbered lists, checklists, font alignment, freehand canvas sketches, and export PDFs for offline revision.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab("library")}
              className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "library"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Notes Library ({personalNotes.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "editor"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
                  : "bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100"
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Create New Note / Sketch</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW TAB 1: NOTES LIBRARY */}
      {activeTab === "library" && (
        <div className="space-y-6">
          {/* Controls Bar: Search & Filter Pills */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 glass-card p-4 rounded-3xl border border-slate-200 dark:border-white/5">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search notes by title, subject, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setFilterType("all")}
                className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition-all shrink-0 ${
                  filterType === "all"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                All Notes
              </button>
              <button
                onClick={() => setFilterType("personal")}
                className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition-all shrink-0 ${
                  filterType === "personal"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                My Personal Notes
              </button>
              <button
                onClick={() => setFilterType("broadcasts")}
                className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition-all shrink-0 ${
                  filterType === "broadcasts"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                Faculty Broadcasts
              </button>
              <button
                onClick={() => setFilterType("targeted")}
                className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition-all shrink-0 ${
                  filterType === "targeted"
                    ? "bg-amber-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                Direct Targeted Notes
              </button>
            </div>
          </div>

          {/* Notes Grid */}
          {visibleNotes.length === 0 ? (
            <div className="glass-card p-12 rounded-[36px] text-center space-y-4 border border-slate-200 dark:border-white/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/15 text-blue-500 border border-blue-500/30 flex items-center justify-center mx-auto">
                <Edit3 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">
                No Notes Found
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No digital notes match your search or filter options. Create a new note or draw a diagram on the canvas!
              </p>
              <button
                onClick={() => setActiveTab("editor")}
                className="px-6 py-3 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider hover:bg-blue-700 shadow-md transition-all inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create First Note</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleNotes.map((note) => {
                const themeClasses = getThemeClasses(note.noteTheme);
                const alignStyle = note.textAlign ? `text-${note.textAlign}` : "text-left";
                const fontFamilyCss = getFontFamilyCss(note.fontFamily);

                return (
                  <div
                    key={note.id}
                    className={`p-6 rounded-[32px] border shadow-lg hover:shadow-xl transition-all space-y-4 relative flex flex-col justify-between ${themeClasses}`}
                  >
                    <div className="space-y-3">
                      {/* Badge & Target Indicator */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                          {note.subject}
                        </span>
                        {note.targetType === "all_students" ? (
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-600 border border-purple-500/30 flex items-center gap-1">
                            <Users className="w-3 h-3" /> Class Broadcast
                          </span>
                        ) : note.targetType === "individual_student" ? (
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 border border-amber-500/30 flex items-center gap-1">
                            <User className="w-3 h-3" /> Targeted to {note.targetStudentName || "Candidate"}
                          </span>
                        ) : (
                          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30">
                            Personal Note
                          </span>
                        )}
                      </div>

                      <h3
                        style={{ fontFamily: fontFamilyCss }}
                        className={`text-base font-black line-clamp-2 leading-snug ${alignStyle}`}
                      >
                        {note.title}
                      </h3>

                      <p
                        style={{ fontFamily: fontFamilyCss }}
                        className={`text-xs opacity-90 line-clamp-3 leading-relaxed whitespace-pre-wrap ${alignStyle}`}
                      >
                        {note.content}
                      </p>

                      {/* Canvas Thumbnail Preview if available */}
                      {note.canvasDataUrl && (
                        <div className="rounded-2xl border border-black/10 overflow-hidden bg-white p-2 text-center">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            Hand-Drawn Diagram Attached
                          </span>
                          <img
                            src={note.canvasDataUrl}
                            alt="Canvas sketch"
                            className="h-28 mx-auto object-contain rounded-lg"
                          />
                        </div>
                      )}

                      {/* Tags */}
                      {note.tags && note.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {note.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-bold opacity-75 bg-black/5 px-2 py-0.5 rounded-md"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Note Footer Controls */}
                    <div className="pt-4 border-t border-black/10 flex items-center justify-between mt-4">
                      <span className="text-[11px] font-bold opacity-70">
                        By {note.authorName} • {note.createdAt}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* Preview Modal Button */}
                        <button
                          onClick={() => setViewingNote(note)}
                          title="Read Full Note"
                          className="p-2 rounded-full bg-slate-500/15 text-slate-700 dark:text-slate-200 hover:bg-slate-600 hover:text-white transition-all shadow-sm"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Download PDF */}
                        <button
                          onClick={() => handleExportPDF(note)}
                          title="Download Note as Formatted PDF"
                          className="p-2 rounded-full bg-blue-500/15 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        >
                          <Download className="w-4 h-4" />
                        </button>

                        {/* Download TXT */}
                        <button
                          onClick={() => handleDownloadTxt(note)}
                          title="Download Note as Raw Text File (.txt)"
                          className="p-2 rounded-full bg-emerald-500/15 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                        >
                          <FileText className="w-4 h-4" />
                        </button>

                        {note.authorId === profile.id && (
                          <button
                            onClick={() => deletePersonalNote(note.id)}
                            title="Delete Note"
                            className="p-2 rounded-full bg-red-500/15 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* VIEW TAB 2: STUDIO NOTE & FREEHAND CANVAS EDITOR */}
      {activeTab === "editor" && (
        <form onSubmit={handleSaveNote} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT COLUMN: Note Metadata & MS Word Formatting Toolbar & Text Area */}
            <div className="glass-card p-6 sm:p-8 rounded-[36px] border border-slate-200 dark:border-white/5 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-black text-slate-900 dark:text-white font-display flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  MS Word Style Formatting & Note Details
                </h3>
                <span className="text-xs font-bold text-slate-400">Step 1 of 2</span>
              </div>

              <div>
                <label className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                  Note Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. TNPSC Unit 8: Thirukkural Governance & Statecraft Notes"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                    Subject / Exam Module
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  >
                    <option value="Unit 8: History & Culture of TN">Unit 8: History & Culture of TN</option>
                    <option value="Unit 9: Development Administration in TN">Unit 9: Development Administration in TN</option>
                    <option value="GS Paper I: Heritage & Geography">GS Paper I: Heritage & Geography</option>
                    <option value="GS Paper II: Polity & Governance">GS Paper II: Polity & Governance</option>
                    <option value="GS Paper III: Economy & Environment">GS Paper III: Economy & Environment</option>
                    <option value="GS Paper IV: Ethics & Aptitude">GS Paper IV: Ethics & Aptitude</option>
                    <option value="Quantitative Aptitude & Mental Ability">Quantitative Aptitude & Mental Ability</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Thirukkural, MindMap, Revision"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
              </div>

              {/* MS WORD STYLE TYPOGRAPHY & LIST FORMATTING TOOLBAR */}
              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                    MS Word Font Styles & List Formatting Toolbar
                  </span>
                </div>

                {/* Top Row: Font Family, Font Size, Alignment, Theme */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {/* Font Family (Complete MS Word List) */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Font Style</label>
                    <select
                      value={fontFamily}
                      onChange={(e) => setFontFamily(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-bold"
                    >
                      <option value="calibri">Calibri (Body)</option>
                      <option value="arial">Arial (Modern)</option>
                      <option value="times">Times New Roman (Classic)</option>
                      <option value="georgia">Georgia (Editorial)</option>
                      <option value="trebuchet">Trebuchet MS</option>
                      <option value="verdana">Verdana</option>
                      <option value="courier">Courier New (Code/Math)</option>
                      <option value="comic">Comic Sans MS (Script)</option>
                      <option value="impact">Impact (Bold Display)</option>
                      <option value="cambria">Cambria (Academic)</option>
                      <option value="garamond">Garamond (Serif)</option>
                      <option value="tamil">Noto Sans Tamil (தமிழ்)</option>
                    </select>
                  </div>

                  {/* Font Size */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Font Size</label>
                    <select
                      value={fontSize}
                      onChange={(e) => setFontSize(e.target.value as any)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-bold"
                    >
                      <option value="sm">Small (13px)</option>
                      <option value="base">Standard (15px)</option>
                      <option value="lg">Large (18px)</option>
                      <option value="xl">Extra Large (22px)</option>
                    </select>
                  </div>

                  {/* Alignment Pills */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Alignment</label>
                    <div className="flex bg-white dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-white/10 justify-between">
                      <button
                        type="button"
                        onClick={() => setTextAlign("left")}
                        title="Align Left"
                        className={`p-1 rounded ${textAlign === "left" ? "bg-blue-600 text-white" : "text-slate-500"}`}
                      >
                        <AlignLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextAlign("center")}
                        title="Align Center"
                        className={`p-1 rounded ${textAlign === "center" ? "bg-blue-600 text-white" : "text-slate-500"}`}
                      >
                        <AlignCenter className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextAlign("right")}
                        title="Align Right"
                        className={`p-1 rounded ${textAlign === "right" ? "bg-blue-600 text-white" : "text-slate-500"}`}
                      >
                        <AlignRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextAlign("justify")}
                        title="Justify"
                        className={`p-1 rounded ${textAlign === "justify" ? "bg-blue-600 text-white" : "text-slate-500"}`}
                      >
                        <AlignJustify className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Note Theme */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Note Theme</label>
                    <select
                      value={noteTheme}
                      onChange={(e) => setNoteTheme(e.target.value as any)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-bold"
                    >
                      <option value="white">Clean White</option>
                      <option value="parchment">Warm Parchment</option>
                      <option value="emerald">Pastel Emerald</option>
                      <option value="mint">Fresh Mint</option>
                      <option value="dark">Night Obsidian</option>
                    </select>
                  </div>
                </div>

                {/* Bottom Row: Bullets, Numbered Lists, Checklists, Formatting Quick Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200 dark:border-white/10">
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 mr-1">Insert Formatting:</span>

                  <button
                    type="button"
                    onClick={() => insertFormatting("•")}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all flex items-center gap-1"
                    title="Insert Bullet Point List"
                  >
                    <List className="w-3.5 h-3.5" /> Bullet
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("1.")}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all flex items-center gap-1"
                    title="Insert Numbered List"
                  >
                    <ListOrdered className="w-3.5 h-3.5" /> Numbered
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("[ ]")}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all flex items-center gap-1"
                    title="Insert Task Checklist"
                  >
                    <CheckSquare className="w-3.5 h-3.5" /> Checklist
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("**", "**")}
                    className="p-1.5 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-black text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all"
                    title="Bold (**Text**)"
                  >
                    <Bold className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("_", "_")}
                    className="p-1.5 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-black text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all"
                    title="Italic (_Text_)"
                  >
                    <Italic className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting("<u>", "</u>")}
                    className="p-1.5 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-black text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all"
                    title="Underline (<u>Text</u>)"
                  >
                    <Underline className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => insertFormatting(">", "")}
                    className="p-1.5 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-black text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all"
                    title="Quote Block (> Quote)"
                  >
                    <Quote className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Instructor Distribution Options */}
              {isInstructorOrAdmin && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                  <span className="text-xs font-black text-amber-700 dark:text-amber-300 uppercase tracking-wider block">
                    Faculty Publishing & Distribution Options
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                      <input
                        type="radio"
                        name="targetType"
                        value="personal"
                        checked={targetType === "personal"}
                        onChange={() => setTargetType("personal")}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>Personal Note</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                      <input
                        type="radio"
                        name="targetType"
                        value="all_students"
                        checked={targetType === "all_students"}
                        onChange={() => setTargetType("all_students")}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span>Broadcast All Candidates</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                      <input
                        type="radio"
                        name="targetType"
                        value="individual_student"
                        checked={targetType === "individual_student"}
                        onChange={() => setTargetType("individual_student")}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span>Target Individual Candidate</span>
                    </label>
                  </div>

                  {targetType === "individual_student" && (
                    <div className="pt-2">
                      <label className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                        Select Target Candidate
                      </label>
                      <select
                        value={targetStudentId}
                        onChange={(e) => {
                          const cand = demoCandidates.find((c) => c.id === e.target.value);
                          if (cand) {
                            setTargetStudentId(cand.id);
                            setTargetStudentName(cand.name);
                          }
                        }}
                        className="w-full px-4 py-2.5 rounded-full border border-amber-500/40 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold"
                      >
                        {demoCandidates.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name} ({c.stream})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}

              <div>
                <label className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                  Written Content & Formula Notes
                </label>
                <textarea
                  rows={8}
                  placeholder="Type your notes, formulas, Thirukkural couplets, or bullet points here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{
                    fontFamily: getFontFamilyCss(fontFamily),
                    fontSize: getFontSizeCss(fontSize),
                    color: textColor
                  }}
                  className={`w-full p-4 rounded-2xl border border-slate-200 dark:border-white/10 ${getThemeClasses(noteTheme)} text-${textAlign} font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 leading-relaxed`}
                  required
                />
              </div>
            </div>

            {/* RIGHT COLUMN: HTML5 Canvas Freehand Drawing Engine */}
            <div className="glass-card p-6 sm:p-8 rounded-[36px] border border-slate-200 dark:border-white/5 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white font-display flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-emerald-500" />
                    Freehand Sketch & Diagram Canvas
                  </h3>
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="text-xs font-bold text-rose-500 hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear Canvas</span>
                  </button>
                </div>

                {/* Canvas Controls Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 mb-3">
                  {/* Pen / Eraser Selection */}
                  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveTool("pen")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                        activeTool === "pen"
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <PenTool className="w-3 h-3" /> Pen
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTool("eraser")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                        activeTool === "eraser"
                          ? "bg-rose-600 text-white shadow-sm"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <RotateCcw className="w-3 h-3" /> Eraser
                    </button>
                  </div>

                  {/* Color Palette */}
                  <div className="flex items-center gap-2">
                    {["#2563eb", "#10b981", "#8b5cf6", "#ef4444", "#000000"].map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => {
                          setDrawColor(color);
                          setActiveTool("pen");
                        }}
                        className={`w-6 h-6 rounded-full border-2 transition-all ${
                          drawColor === color && activeTool === "pen"
                            ? "scale-125 border-white shadow-md"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Stroke Size Slider */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Size</span>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={brushSize}
                      onChange={(e) => setBrushSize(Number(e.target.value))}
                      className="w-20 accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* HTML5 Drawing Canvas Stage */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-white/10 bg-white shadow-inner">
                  <canvas
                    ref={canvasRef}
                    width={500}
                    height={320}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-72 touch-none cursor-crosshair"
                  />
                  <div className="absolute bottom-2 right-2 text-[9px] font-black uppercase tracking-wider text-slate-400 bg-slate-100/90 px-2 py-0.5 rounded-md pointer-events-none">
                    Freehand Canvas (Touch / Mouse / Pen)
                  </div>
                </div>
              </div>

              {/* Submit Button Bar */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab("library")}
                  className="px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-300 transition-all"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-xs font-black uppercase tracking-wider shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 border border-white/20 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Save & Publish Note</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* FULL NOTE READING MODAL */}
      {viewingNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div
            className={`w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-[36px] border shadow-2xl relative space-y-5 ${getThemeClasses(viewingNote.noteTheme)}`}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setViewingNote(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/10 hover:bg-black/20 text-slate-700 dark:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-blue-600 text-white">
                {viewingNote.subject}
              </span>
              <h2
                style={{ fontFamily: getFontFamilyCss(viewingNote.fontFamily) }}
                className={`text-2xl font-black text-${viewingNote.textAlign || "left"}`}
              >
                {viewingNote.title}
              </h2>
              <p className="text-xs opacity-75 font-bold">
                By {viewingNote.authorName} ({viewingNote.authorRole}) • {viewingNote.createdAt}
              </p>
            </div>

            <div
              style={{
                fontFamily: getFontFamilyCss(viewingNote.fontFamily),
                fontSize: getFontSizeCss(viewingNote.fontSize),
              }}
              className={`leading-relaxed whitespace-pre-wrap text-${viewingNote.textAlign || "left"}`}
            >
              {viewingNote.content}
            </div>

            {viewingNote.canvasDataUrl && (
              <div className="rounded-2xl border border-black/10 bg-white p-3 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">
                  Attached Hand-Drawn Sketch
                </span>
                <img
                  src={viewingNote.canvasDataUrl}
                  alt="Attached diagram"
                  className="max-h-80 mx-auto object-contain rounded-lg"
                />
              </div>
            )}

            {/* Modal Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-black/10">
              <button
                onClick={() => handleDownloadTxt(viewingNote)}
                className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download TXT</span>
              </button>

              <button
                onClick={() => handleExportPDF(viewingNote)}
                className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
