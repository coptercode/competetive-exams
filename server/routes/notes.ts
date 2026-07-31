import { Router } from "express";

const router = Router();

// In-Memory Backend Store for Digital Notes
let notesDb: any[] = [
  {
    id: "note-01",
    title: "TNPSC Unit 8: Thirukkural 39 Chapters & Governance Mind Map",
    content: "Key Thirukkural chapters relating to Statecraft (அமைச்சு), Justice (நீதிமுறை), and Public Administration.",
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

// GET /api/notes - Retrieve notes
router.get("/notes", (req, res) => {
  res.json({ success: true, notes: notesDb });
});

// POST /api/notes/create - Save a new note
router.post("/notes/create", (req, res) => {
  const noteData = req.body;
  if (!noteData || !noteData.title) {
    res.status(400).json({ success: false, message: "Title is required" });
    return;
  }

  const newNote = {
    ...noteData,
    id: `pnote-${Date.now()}`,
    createdAt: new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  };

  notesDb.unshift(newNote);
  res.json({ success: true, note: newNote });
});

// DELETE /api/notes/:id - Delete a note
router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  notesDb = notesDb.filter((n) => n.id !== id);
  res.json({ success: true, message: "Note deleted successfully" });
});

export default router;
