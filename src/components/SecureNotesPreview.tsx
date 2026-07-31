import React, { useEffect } from "react";
import { useLmsStore } from "../store/index";
import { ArrowLeft, ShieldAlert, FileText, FileDown } from "lucide-react";
import { getPdfLinkForTopic } from "../utils/pdfLinks";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm';
// @ts-ignore
import html2pdf from 'html2pdf.js';

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
    <div className="w-screen h-screen flex flex-col bg-slate-50 text-slate-900 select-none relative overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            display: none !important;
          }
        }
      `}} />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 z-20 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setView("course-view")}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all text-xs font-bold active:scale-95 border border-slate-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Lecture</span>
          </button>
          <div className="h-6 w-px bg-slate-200" />
          <div className="text-left">
            <h1 className="text-sm font-black text-slate-900 leading-none">
              {displayPdfName}
            </h1>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1.5">
              {activeSubject.title} • {activeChapter.title} • {activeTopic.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {displayPdfUrl && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("printable-note");
                if (element && activeTopic) {
                  // We clone the element so we can force styling without affecting the UI
                  const opt = {
                    margin:       [15, 15, 15, 15] as [number, number, number, number],
                    filename:     `${activeTopic.title.replace(/\s+/g, '_')}_Notes.pdf`,
                    image:        { type: 'jpeg' as const, quality: 0.98 },
                    html2canvas:  { scale: 2, useCORS: true, letterRendering: true, backgroundColor: '#ffffff' },
                    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
                    pagebreak:    { mode: 'css', avoid: 'h1, h2, h3, h4, h5, h6, p, pre, li, table, tr, blockquote' }
                  };
                  
                  const clone = element.cloneNode(true) as HTMLElement;
                  
                  // Remove dark mode prose class so it renders as light mode!
                  clone.classList.remove("prose-invert");
                  
                  // Forcing black text and light backgrounds on the clone before printing
                  clone.style.color = "black";
                  clone.style.backgroundColor = "white";
                  
                  const allElements = clone.querySelectorAll('*');
                  allElements.forEach((el) => {
                    const htmlEl = el as HTMLElement;
                    htmlEl.style.color = "black";
                    
                    // Prevent page breaks inside block elements to fix chopped text!
                    const avoidBreakTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'code', 'blockquote', 'li', 'table', 'tr', 'td', 'th'];
                    if (avoidBreakTags.includes(htmlEl.tagName.toLowerCase())) {
                      htmlEl.style.pageBreakInside = "avoid";
                      htmlEl.style.breakInside = "avoid";
                    }
                    
                    // If it's a pre block, make it light gray so we can read black text on it
                    if (htmlEl.tagName.toLowerCase() === 'pre' || htmlEl.tagName.toLowerCase() === 'code') {
                      htmlEl.style.backgroundColor = "#f1f5f9"; // slate-100
                      htmlEl.style.borderColor = "#e2e8f0"; // slate-200
                    }
                  });
                  
                  html2pdf().set(opt).from(clone).save();
                }
              }}
              className="flex items-center gap-1.5 text-[10px] bg-brand-royal/10 hover:bg-brand-royal/20 text-brand-royal-300 hover:text-brand-royal-400 font-black border border-brand-royal/20 px-4 py-2 rounded-xl uppercase tracking-wider transition-colors cursor-pointer print:hidden"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          )}
        </div>
      </div>

      {/* PDF or Markdown View */}
      <div className="flex-1 w-full bg-slate-100 p-6 relative overflow-y-auto">
        <div className="w-full h-full max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-200">
          {displayPdfUrl ? (
            isMarkdown ? (
              <div className="w-full h-full p-8 overflow-y-auto bg-white custom-scrollbar">
                {mdError ? (
                  <div className="flex flex-col items-center justify-center w-full h-full text-slate-500">
                    <FileText className="w-12 h-12 mb-4 opacity-50" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Error Loading Notes</h3>
                    <p>Could not load the markdown notes. Please try again.</p>
                  </div>
                ) : mdContent ? (
                  <article id="printable-note" className="prose max-w-none prose-headings:text-brand-royal-700 prose-a:text-brand-royal-600 hover:prose-a:text-brand-royal-700 prose-strong:text-slate-900 prose-code:text-amber-700 prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200">
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {(() => {
                        // 1. Break concatenated rows (|| or | |) into proper newlines
                        let fixed = mdContent.replace(/\|[\s\u200B]*\|/g, '|\n|');
                        
                        // 2. Ensure a blank line before the table starts so remark-gfm parses it
                        // We find any line that does NOT start with a pipe, followed by a line that DOES start with a pipe
                        // and inject a blank line between them.
                        const lines = fixed.split('\n');
                        for (let i = 1; i < lines.length; i++) {
                          const prevLine = lines[i-1].trim();
                          const currentLine = lines[i].trim();
                          // If current line is a table row, but previous line is text (not a table row and not empty)
                          if (currentLine.startsWith('|') && prevLine !== '' && !prevLine.startsWith('|')) {
                            // Insert a blank line
                            lines.splice(i, 0, '');
                            i++; // skip the newly inserted blank line
                          }
                        }
                        return lines.join('\n');
                      })()}
                    </ReactMarkdown>
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
