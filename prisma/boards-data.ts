// Competitive Exam Categories and Exam Programs Data

export interface ExamTopic {
  id: string;
  title: string;
  content: string;
  duration: string;
  videoUrl?: string;
  pdfUrl?: string;
}

export interface ExamChapter {
  id: string;
  title: string;
  topics: ExamTopic[];
}

export interface ExamSubject {
  id: string;
  title: string;
  color?: string;
  chapters: ExamChapter[];
}

export interface ExamBatch {
  id: string;
  title: string;
  subjects: ExamSubject[];
}

export interface ExamCategory {
  id: string;
  title: string;
  code?: string;
  classes: ExamBatch[];
}

export const initialBoards: ExamCategory[] = [
  {
    id: "engineering",
    title: "Engineering Entrance Exams",
    code: "ENGG",
    classes: [
      {
        id: "jee-main",
        title: "JEE Main 2026 Batch",
        subjects: [
          {
            id: "jee-physics",
            title: "Physics",
            color: "from-blue-600 to-indigo-700",
            chapters: [
              {
                id: "jee-phy-ch1",
                title: "Mechanics & Kinematics",
                topics: [
                  {
                    id: "jee-phy-ch1-t1",
                    title: "Laws of Motion & Friction",
                    content: "Newton's laws, impulse, momentum conservation, static and kinetic friction equations.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "jee-phy-ch1-t2",
                    title: "Work, Power & Energy",
                    content: "Work-energy theorem, conservative forces, potential energy curves, elastic collisions.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "jee-phy-ch1-t3",
                    title: "Rotational Motion & Gravitation",
                    content: "Torque, moment of inertia, angular momentum, Kepler's laws, orbital velocity.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "jee-phy-ch2",
                title: "Electrodynamics & Magnetism",
                topics: [
                  {
                    id: "jee-phy-ch2-t1",
                    title: "Electrostatics & Capacitance",
                    content: "Coulomb's law, Gauss theorem, electric potential, parallel plate capacitors.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "jee-phy-ch2-t2",
                    title: "Magnetic Effects of Current & EMI",
                    content: "Biot-Savart law, Ampere's circuital law, Faraday's law of induction, Lenz's law.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "jee-chemistry",
            title: "Chemistry",
            color: "from-emerald-600 to-teal-700",
            chapters: [
              {
                id: "jee-chem-ch1",
                title: "Physical Chemistry",
                topics: [
                  {
                    id: "jee-chem-ch1-t1",
                    title: "Mole Concept & Stoichiometry",
                    content: "Atomic mass, molarity, molality, limiting reagent numericals.",
                    duration: "20m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "jee-chem-ch1-t2",
                    title: "Chemical Equilibrium & Thermodynamics",
                    content: "Le Chatelier's principle, Enthalpy, Entropy, Gibbs free energy, Spontaneity.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "jee-chem-ch2",
                title: "Organic Chemistry",
                topics: [
                  {
                    id: "jee-chem-ch2-t1",
                    title: "General Organic Chemistry (GOC)",
                    content: "Inductive effect, resonance, hyperconjugation, reaction intermediates.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "jee-chem-ch2-t2",
                    title: "Hydrocarbons & Reaction Mechanisms",
                    content: "Electrophilic additions, SN1 and SN2 mechanisms, aromaticity rules.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "jee-mathematics",
            title: "Mathematics",
            color: "from-rose-600 to-pink-700",
            chapters: [
              {
                id: "jee-math-ch1",
                title: "Calculus & Functions",
                topics: [
                  {
                    id: "jee-math-ch1-t1",
                    title: "Limits, Continuity & Differentiability",
                    content: "L'Hopital's rule, continuity conditions, derivative rules.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "jee-math-ch1-t2",
                    title: "Definite Integration & Area Under Curves",
                    content: "Fundamental theorem of calculus, substitution methods, area between curves.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "jee-math-ch2",
                title: "Algebra & Matrices",
                topics: [
                  {
                    id: "jee-math-ch2-t1",
                    title: "Matrices & Determinants",
                    content: "Cramer's rule, inverse of matrix, adjoint, system of linear equations.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "jee-advanced",
        title: "JEE Advanced Target Batch",
        subjects: [
          {
            id: "jee-adv-physics",
            title: "Advanced Physics",
            color: "from-purple-600 to-indigo-800",
            chapters: [
              {
                id: "jee-adv-phy-ch1",
                title: "Rotational Dynamics & Optics",
                topics: [
                  {
                    id: "jee-adv-phy-t1",
                    title: "Torque & Moment of Inertia",
                    content: "Parallel axis theorem, rolling without slipping, angular momentum conservation.",
                    duration: "45m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "medical",
    title: "Medical Entrance Exams",
    code: "MED",
    classes: [
      {
        id: "neet-ug",
        title: "NEET UG Super Batch",
        subjects: [
          {
            id: "neet-biology",
            title: "Biology (Botany & Zoology)",
            color: "from-green-600 to-emerald-700",
            chapters: [
              {
                id: "neet-bio-ch1",
                title: "Human Physiology & Genetics",
                topics: [
                  {
                    id: "neet-bio-t1",
                    title: "Principles of Inheritance & Variation",
                    content: "Mendelian genetics, pedigree analysis, chromosomal disorders.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "neet-bio-t2",
                    title: "Molecular Basis of Inheritance",
                    content: "DNA structure, replication, transcription, translation, Lac Operon model.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "neet-bio-ch2",
                title: "Ecology & Plant Physiology",
                topics: [
                  {
                    id: "neet-bio-ch2-t1",
                    title: "Photosynthesis & Respiration in Plants",
                    content: "Calvin cycle, C4 pathway, Glycolysis, Krebs cycle, ATP synthesis.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "neet-physics",
            title: "Physics for Medical",
            color: "from-sky-600 to-blue-700",
            chapters: [
              {
                id: "neet-phy-ch1",
                title: "Ray Optics & Modern Physics",
                topics: [
                  {
                    id: "neet-phy-t1",
                    title: "Refraction & Lenses",
                    content: "Snell's law, lens formula, optical instruments, total internal reflection.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "civil_services",
    title: "Civil Services (UPSC)",
    code: "UPSC",
    classes: [
      {
        id: "upsc-prelims",
        title: "UPSC Prelims GS & CSAT",
        subjects: [
          {
            id: "upsc-polity",
            title: "Indian Polity & Governance",
            color: "from-amber-600 to-orange-700",
            chapters: [
              {
                id: "upsc-pol-ch1",
                title: "Constitutional Framework",
                topics: [
                  {
                    id: "upsc-pol-t1",
                    title: "Preamble & Fundamental Rights",
                    content: "Articles 12 to 35, basic structure doctrine, landmark judicial rulings.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "upsc-pol-t2",
                    title: "Directive Principles & Fundamental Duties",
                    content: "DPSP classification, Article 51A duties, enforcement mechanisms.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "upsc-pol-ch2",
                title: "Parliament & Executive",
                topics: [
                  {
                    id: "upsc-pol-ch2-t1",
                    title: "President, Prime Minister & Cabinet",
                    content: "Executive powers, ordinance making powers, parliamentary procedures.",
                    duration: "45m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "upsc-history",
            title: "Modern History & Indian Culture",
            color: "from-red-600 to-rose-700",
            chapters: [
              {
                id: "upsc-hist-ch1",
                title: "Indian National Movement",
                topics: [
                  {
                    id: "upsc-hist-t1",
                    title: "Freedom Movement (1857-1947)",
                    content: "Revolt of 1857, Moderate and Extremist phases, Non-Cooperation Movement.",
                    duration: "45m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "upsc-mains",
        title: "UPSC Mains Answer Writing Batch",
        subjects: [
          {
            id: "upsc-gs3",
            title: "General Studies Paper III",
            color: "from-indigo-600 to-violet-700",
            chapters: [
              {
                id: "upsc-gs3-ch1",
                title: "Economy & Security",
                topics: [
                  {
                    id: "upsc-gs3-t1",
                    title: "Indian Economic Growth & Budgeting",
                    content: "Fiscal deficit, monetary policy, infrastructure development models.",
                    duration: "50m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tnpsc",
    title: "Tamil Nadu Public Service Commission",
    code: "TNPSC",
    classes: [
      {
        id: "tnpsc-group-1",
        title: "TNPSC Group 1 Officer Batch",
        subjects: [
          {
            id: "tnpsc-general-studies",
            title: "General Studies & Aptitude",
            color: "from-cyan-600 to-blue-700",
            chapters: [
              {
                id: "tnpsc-gs-ch1",
                title: "Tamil Nadu History, Culture & Heritage",
                topics: [
                  {
                    id: "tnpsc-gs-t1",
                    title: "Sangam Age to Modern Tamil Nadu",
                    content: "Sangam literature, Dravidian movement, socio-cultural reforms, Thirukkural ethics.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnpsc-gs-t2",
                    title: "Role of Tamil Nadu in Freedom Struggle",
                    content: "Veerapandiya Kattabomman, V.O. Chidambaranar, Subramania Bharati, Velu Nachiyar.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "tnpsc-gs-ch2",
                title: "Aptitude & Mental Ability",
                topics: [
                  {
                    id: "tnpsc-gs-ch2-t1",
                    title: "HCF, LCM, Percentages & Compound Interest",
                    content: "Shortcut techniques, logical reasoning, data interpretation for Group 1 Prelims.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "tnpsc-group-2",
        title: "TNPSC Group 2 / 2A Executive Batch",
        subjects: [
          {
            id: "tnpsc-p2-gs",
            title: "General Tamil & General Studies",
            color: "from-teal-600 to-green-700",
            chapters: [
              {
                id: "tnpsc-p2-ch1",
                title: "Development Administration in TN",
                topics: [
                  {
                    id: "tnpsc-p2-t1",
                    title: "Human Development Indicators in TN",
                    content: "State welfare schemes, e-governance initiatives in Tamil Nadu.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "tnpsc-group-4-vao",
        title: "TNPSC Group 4 & VAO Integrated Batch",
        subjects: [
          {
            id: "tnpsc-g4-aptitude",
            title: "Mental Ability & General Studies",
            color: "from-purple-600 to-indigo-700",
            chapters: [
              {
                id: "tnpsc-g4-ch1",
                title: "Simplification & Percentage",
                topics: [
                  {
                    id: "tnpsc-g4-t1",
                    title: "HCF, LCM & Ratio Problems",
                    content: "Shortcuts for competitive mental ability questions.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "banking",
    title: "Banking Exams",
    code: "BANK",
    classes: [
      {
        id: "sbi-ibps-po",
        title: "SBI & IBPS PO / Clerk Achievers Batch",
        subjects: [
          {
            id: "bank-quant",
            title: "Quantitative Aptitude",
            color: "from-yellow-600 to-amber-700",
            chapters: [
              {
                id: "bank-quant-ch1",
                title: "Data Interpretation & Arithmetic",
                topics: [
                  {
                    id: "bank-quant-t1",
                    title: "Pie Charts, Tables & Caselets",
                    content: "Fast DI techniques, approximation tricks, quadratic equations.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "bank-quant-t2",
                    title: "Number Series & Quadratic Inequalities",
                    content: "Missing number series, pattern recognition, quadratic roots comparisons.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "bank-reasoning",
            title: "Reasoning Ability",
            color: "from-violet-600 to-purple-700",
            chapters: [
              {
                id: "bank-reas-ch1",
                title: "Puzzles & Seating Arrangement",
                topics: [
                  {
                    id: "bank-reas-t1",
                    title: "Circular & Floor Based Puzzles",
                    content: "Linear, circular, matrix puzzles, syllogisms and blood relations.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ssc",
    title: "Staff Selection Commission (SSC)",
    code: "SSC",
    classes: [
      {
        id: "ssc-cgl-chsl",
        title: "SSC CGL / CHSL / MTS Target Batch",
        subjects: [
          {
            id: "ssc-maths",
            title: "Quantitative Ability (Advanced Maths)",
            color: "from-blue-600 to-cyan-700",
            chapters: [
              {
                id: "ssc-math-ch1",
                title: "Geometry & Trigonometry",
                topics: [
                  {
                    id: "ssc-math-t1",
                    title: "Triangle Properties & Heights-Distances",
                    content: "Centroid, circumcenter, incenter theorems, trigonometric ratios.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "ssc-english",
            title: "English Language & Comprehension",
            color: "from-emerald-600 to-teal-700",
            chapters: [
              {
                id: "ssc-eng-ch1",
                title: "Grammar & Vocabulary",
                topics: [
                  {
                    id: "ssc-eng-t1",
                    title: "Error Spotting & Cloze Test",
                    content: "Subject-verb agreement, idioms, phrases, reading comprehension.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "railway",
    title: "Railway Recruitment Board",
    code: "RRB",
    classes: [
      {
        id: "rrb-ntpc-group-d",
        title: "RRB NTPC & Group D Batch",
        subjects: [
          {
            id: "rrb-science",
            title: "General Science & Awareness",
            color: "from-rose-600 to-red-700",
            chapters: [
              {
                id: "rrb-sci-ch1",
                title: "Physics & Chemistry Fundamentals",
                topics: [
                  {
                    id: "rrb-sci-t1",
                    title: "Periodic Table & Electricity",
                    content: "Elements, Ohm's law, circuits, key general science questions.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "defence",
    title: "Defence Exams",
    code: "DEFENCE",
    classes: [
      {
        id: "nda-cds-afcat",
        title: "NDA / CDS / AFCAT Warriors Batch",
        subjects: [
          {
            id: "def-gat",
            title: "General Ability Test & Military Awareness",
            color: "from-slate-700 to-zinc-900",
            chapters: [
              {
                id: "def-gat-ch1",
                title: "Current Affairs & Strategic Knowledge",
                topics: [
                  {
                    id: "def-gat-t1",
                    title: "Indian Defence Forces & Exercises",
                    content: "Joint military exercises, missile systems, international defense pacts.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const tnsbBoard = initialBoards;
export const tnsbBoardComplete = initialBoards[3];
export const cbseBoardComplete = initialBoards[0];
export const icseBoardComplete = initialBoards[1];
