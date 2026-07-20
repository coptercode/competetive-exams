import React, { useEffect } from "react";
import { useLmsStore } from "../store/index";
import { ArrowLeft, ShieldAlert, FileText, FileDown } from "lucide-react";
import { getPdfLinkForTopic } from "../utils/pdfLinks";
import ReactMarkdown from 'react-markdown';

export const SecureNotesPreview: React.FC = () => {
  const {
    boards,
    profile,
    activeSubjectId,
    activeChapterId,
    activeTopicId,
    setView,
  } = useLmsStore();

  const activeBoard =
    boards.find((b) => b.id === profile.selectedBoardId) || boards[0];
  const activeClass =
    activeBoard?.classes?.find((c) => c.id === profile.selectedClassId) ||
    activeBoard?.classes?.[0];

  const activeSubject =
    activeClass?.subjects.find((s) => s.id === activeSubjectId) ||
    activeClass?.subjects[0];
  const activeChapter =
    activeSubject?.chapters.find((c) => c.id === activeChapterId) ||
    activeSubject?.chapters[0];
  const activeTopic =
    activeChapter?.topics.find((t) => t.id === activeTopicId) ||
    activeChapter?.topics[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Cmd+S
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
      }
      // Prevent Ctrl+P, Cmd+P
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!activeBoard || !activeClass || !activeSubject || !activeChapter || !activeTopic) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-royal"></div>
      </div>
    );
  }

  // Helper to resolve the correct PDF path for preview
  const getTopicPdfInfo = () => {
    if (activeTopic?.pdfUrl && !activeTopic.pdfUrl.includes("dummy.pdf")) {
      return { url: activeTopic.pdfUrl, name: `${activeTopic.title} Notes` };
    }
    const drivePdfUrl = getPdfLinkForTopic(activeTopic?.title);
    if (drivePdfUrl) {
      return { url: drivePdfUrl, name: `${activeTopic?.title} Notes` };
    }
    return null;
  };

  // Read PDF from query parameter if redirected from direct access
  const getPdfUrlFromQuery = () => {
    try {
      const hash = window.location.hash;
      if (hash.includes("?")) {
        const queryStr = hash.substring(hash.indexOf("?"));
        const urlParams = new URLSearchParams(queryStr);
        const pdfParam = urlParams.get("pdf");
        if (pdfParam) {
          return decodeURIComponent(pdfParam);
        }
      }
    } catch (e) {
      console.error("Failed to parse query params:", e);
    }
    return null;
  };

  const pdfQueryUrl = getPdfUrlFromQuery();
  const pdfInfo = getTopicPdfInfo();

  const displayPdfUrl = pdfQueryUrl || pdfInfo?.url;
  const displayPdfName = pdfQueryUrl 
    ? pdfQueryUrl.substring(pdfQueryUrl.lastIndexOf("/") + 1) 
    : pdfInfo?.name || "No Notes Available";

  const [mdContent, setMdContent] = React.useState<string | null>(null);
  const [mdError, setMdError] = React.useState<boolean>(false);

  const isMarkdown = displayPdfUrl?.toLowerCase().endsWith(".md");

  useEffect(() => {
    if (isMarkdown && displayPdfUrl) {
      setMdError(false);
      fetch(displayPdfUrl)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load markdown");
          return res.text();
        })
        .then((text) => setMdContent(text))
        .catch(() => setMdError(true));
    }
  }, [displayPdfUrl, isMarkdown]);

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-950 text-white select-none relative overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            display: none !important;
          }
        }
      `}} />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-white/5 z-20 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setView("course-view")}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-bold active:scale-95 border border-white/5 hover:border-white/10 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Lecture</span>
          </button>
          <div className="h-6 w-px bg-white/10" />
          <div className="text-left">
            <h1 className="text-sm font-black text-white leading-none">
              {displayPdfName}
            </h1>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1.5">
              {activeSubject.title} • {activeChapter.title} • {activeTopic.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[9px] bg-amber-500/10 text-amber-400 font-black border border-amber-500/20 px-3.5 py-2 rounded-xl uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Secure Preview Only (Download Disabled)</span>
          </span>
        </div>
      </div>

      {/* PDF or Markdown View */}
      <div className="flex-1 w-full bg-slate-900/50 p-6 relative overflow-y-auto">
        <div className="w-full h-full max-w-6xl mx-auto bg-slate-800 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          {displayPdfUrl ? (
            isMarkdown ? (
              <div className="w-full h-full p-8 overflow-y-auto bg-slate-800 custom-scrollbar">
                {mdError ? (
                  <div className="flex flex-col items-center justify-center w-full h-full text-slate-400">
                    <FileText className="w-12 h-12 mb-4 opacity-50" />
                    <h3 className="text-xl font-bold text-white mb-2">Error Loading Notes</h3>
                    <p>Could not load the markdown notes. Please try again.</p>
                  </div>
                ) : mdContent ? (
                  <article className="prose prose-invert max-w-none prose-headings:text-brand-royal-300 prose-a:text-brand-royal-300 hover:prose-a:text-brand-royal-400 prose-strong:text-white prose-code:text-amber-300 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>{mdContent}</ReactMarkdown>
                  </article>
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-royal"></div>
                  </div>
                )}
              </div>
            ) : (
              <iframe
                src={`${displayPdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full border-0"
                title="Secure PDF Viewer"
              />
            )
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-slate-400">
              <FileText className="w-12 h-12 mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-white mb-2">No Notes Available</h3>
              <p>Study notes for this topic have not been added yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
