import { Router } from "express";

const router = Router();

// In-Memory Backend Store for Digital Notes & Syllabus Summaries
let notesDb: any[] = [
  {
    id: "note-01",
    title: "TNPSC Group 1/2: Unit 8 Thirukkural & Tamil Society Governance",
    content: "Detailed breakdown of 39 Thirukkural chapters on Statecraft (அமைச்சு), Justice (நீதிமுறை), and Administration.",
    fileUrl: "https://lms-files.supabase.co/storage/v1/object/public/lms-files/notes/tnpsc-exams/unit-8/thirukkural-governance.pdf",
    authorId: "instructor-001",
    authorName: "Dr. S. Ramanathan",
    authorRole: "teacher",
    targetType: "all_students",
    subject: "Unit 8: History & Culture of TN",
    tags: ["TNPSC", "Thirukkural", "Unit 8", "Tamil Society"],
    createdAt: "26 July 2026, 11:00 AM"
  },
  {
    id: "note-02",
    title: "UPSC CSE GS-II: Constitutional Amendments & Judicial Precedents",
    content: "Key constitutional amendments from 73rd/74th Panchayati Raj to 106th Nari Shakti Vandan Adhiniyam.",
    fileUrl: "https://lms-files.supabase.co/storage/v1/object/public/lms-files/notes/upsc-exams/gs-2/constitutional-amendments.pdf",
    authorId: "instructor-002",
    authorName: "Prof. Ananya Sen",
    authorRole: "teacher",
    targetType: "all_students",
    subject: "GS Paper II: Indian Polity & Governance",
    tags: ["UPSC", "Polity", "GS-II", "Constitution"],
    createdAt: "27 July 2026, 09:15 AM"
  },
  {
    id: "note-03",
    title: "JEE Main & Advanced: Physics High-Yield Formula Sheet & Mechanics",
    content: "Rotational Dynamics, Moment of Inertia formulas, Work-Energy Theorems, and Wave Optics shortcuts.",
    fileUrl: "https://lms-files.supabase.co/storage/v1/object/public/lms-files/notes/engineering/physics/jee-physics-mechanics.pdf",
    authorId: "instructor-001",
    authorName: "Dr. S. Ramanathan",
    authorRole: "teacher",
    targetType: "all_students",
    subject: "Physics: Mechanics & Electrodynamics",
    tags: ["JEE Main", "JEE Advanced", "Physics", "Formulas"],
    createdAt: "28 July 2026, 10:30 AM"
  },
  {
    id: "note-04",
    title: "NEET UG Biology: Human Physiology & Genetics Core Summary",
    content: "Comprehensive NCERT diagrams, Cardiac Cycle steps, DNA Replication mechanisms, and Mendelian Genetics ratios.",
    fileUrl: "https://lms-files.supabase.co/storage/v1/object/public/lms-files/notes/medical/biology/neet-biology-physiology.pdf",
    authorId: "instructor-003",
    authorName: "Dr. Meenakshi Sundaram",
    authorRole: "teacher",
    targetType: "all_students",
    subject: "Biology: Human Physiology & Genetics",
    tags: ["NEET UG", "Biology", "NCERT", "Physiology"],
    createdAt: "29 July 2026, 02:45 PM"
  },
  {
    id: "note-05",
    title: "Banking PO & Clerk: Quantitative Aptitude & Data Interpretation",
    content: "Data Interpretation pie charts, Quadratic equations shortcuts, Speed Math tricks, and Profit & Loss formulas.",
    fileUrl: "https://lms-files.supabase.co/storage/v1/object/public/lms-files/notes/banking/quant/banking-quant-di.pdf",
    authorId: "instructor-002",
    authorName: "Prof. Ananya Sen",
    authorRole: "teacher",
    targetType: "all_students",
    subject: "Quantitative Aptitude & Reasoning",
    tags: ["Banking", "SBI PO", "IBPS", "Quant"],
    createdAt: "30 July 2026, 04:00 PM"
  },
  {
    id: "note-06",
    title: "SSC CGL & CHSL: General Intelligence & English Grammar Rules",
    content: "120 Rules of English Grammar, Error Spotting patterns, Coding-Decoding tricks, and General Awareness overview.",
    fileUrl: "https://lms-files.supabase.co/storage/v1/object/public/lms-files/notes/ssc/english/ssc-cgl-grammar-rules.pdf",
    authorId: "instructor-001",
    authorName: "Dr. S. Ramanathan",
    authorRole: "teacher",
    targetType: "all_students",
    subject: "English Language & General Intelligence",
    tags: ["SSC CGL", "Grammar", "Reasoning", "SSC"],
    createdAt: "31 July 2026, 08:30 AM"
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
