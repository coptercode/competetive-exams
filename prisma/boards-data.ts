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
    id: "tnsb-board",
    title: "Tamil Nadu State Board (TNSB Samacheer Kalvi Class 9 to 12)",
    code: "TNSB",
    classes: [
      {
        id: "tnsb-class-9",
        title: "TNSB Class 9 Foundation",
        subjects: [
          {
            id: "tnsb-9-science",
            title: "Science Class 9 (Physics, Chemistry, Biology)",
            color: "from-teal-600 to-emerald-700",
            chapters: [
              {
                id: "tnsb-9-sci-ch1",
                title: "Measurement, Motion & Matter Around Us",
                topics: [
                  {
                    id: "tnsb-9-sci-t1",
                    title: "Measuring Instruments & Motion Equations",
                    content: "Vernier caliper, screw gauge, distance, displacement, speed-velocity curves.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-9-sci-t2",
                    title: "Atomic Structure & Periodic Classification",
                    content: "Thomson & Rutherford models, subatomic particles, periodic trends.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "tnsb-9-sci-ch2",
                title: "Plant & Animal Tissue Organisation",
                topics: [
                  {
                    id: "tnsb-9-sci-t3",
                    title: "Meristematic & Permanent Tissues",
                    content: "Xylem, phloem, epithelial tissue, connective tissue, organ systems.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-9-maths",
            title: "Mathematics Class 9",
            color: "from-blue-600 to-indigo-700",
            chapters: [
              {
                id: "tnsb-9-math-ch1",
                title: "Set Language, Algebra & Geometry",
                topics: [
                  {
                    id: "tnsb-9-math-t1",
                    title: "Set Operations & Venn Diagrams",
                    content: "Union, intersection, complement, cardinal number of sets.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-9-math-t2",
                    title: "Polynomials & Factorization",
                    content: "Degree of polynomial, remainder theorem, factor theorem, algebraic identities.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-9-social",
            title: "Social Science & Tamil Nadu History Class 9",
            color: "from-amber-600 to-orange-700",
            chapters: [
              {
                id: "tnsb-9-soc-ch1",
                title: "Ancient Tamil Civilization & Physical Geography",
                topics: [
                  {
                    id: "tnsb-9-soc-t1",
                    title: "Sangam Age Archaeology & Inscriptions",
                    content: "Keezhadi excavations, Kodumanal artifacts, Tamil-Brahmi script.",
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
        id: "tnsb-class-10",
        title: "TNSB Class 10 SSLC Board & Foundation",
        subjects: [
          {
            id: "tnsb-10-science",
            title: "Science Class 10 (SSLC)",
            color: "from-cyan-600 to-blue-700",
            chapters: [
              {
                id: "tnsb-10-sci-ch1",
                title: "Laws of Motion, Optics & Electricity",
                topics: [
                  {
                    id: "tnsb-10-sci-t1",
                    title: "Newton's Laws & Linear Momentum",
                    content: "Action-reaction, impulse, momentum conservation, gravitational law.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c10-phy-optics",
                    title: "Refraction of Light & Convex/Concave Lenses",
                    content: "Snell's law, lens formula, magnification, human eye power of accommodation.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "tnsb-10-sci-ch2",
                title: "Solutions, Carbon Compounds & Plant Anatomy",
                topics: [
                  {
                    id: "tnsb-10-sci-t3",
                    title: "Types of Solutions & Concentration Terms",
                    content: "Solubility, saturated-unsaturated solutions, mass percentage.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-10-sci-t4",
                    title: "Plant Anatomy & Internal Respiration",
                    content: "Monocot and dicot stem anatomy, transpiration pull, ATP yield.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-10-maths",
            title: "Mathematics Class 10 (SSLC)",
            color: "from-indigo-600 to-violet-700",
            chapters: [
              {
                id: "tnsb-10-math-ch1",
                title: "Relations, Functions & Sequences (AP/GP)",
                topics: [
                  {
                    id: "tnsb-10-math-t1",
                    title: "Arithmetic & Geometric Progressions",
                    content: "nth term formula, sum of n terms in AP and GP, applications.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-10-math-t2",
                    title: "Quadratic Equations & Matrices",
                    content: "Nature of roots, matrix addition, multiplication, transpose equations.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "tnsb-10-math-ch2",
                title: "Coordinate Geometry, Trigonometry & Mensuration",
                topics: [
                  {
                    id: "tnsb-10-math-t3",
                    title: "Section Formula & Line Equation",
                    content: "Midpoint, centroid, straight line equations, slope-intercept form.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-10-math-t4",
                    title: "Heights & Distances & Surface Areas",
                    content: "Trigonometric identities, angle of elevation, frustum of cone volume.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-10-social",
            title: "Social Science & Freedom Struggle (SSLC)",
            color: "from-red-600 to-rose-700",
            chapters: [
              {
                id: "tnsb-10-soc-ch1",
                title: "Freedom Struggle in Tamil Nadu & Constitution",
                topics: [
                  {
                    id: "tnsb-10-soc-t1",
                    title: "Poligar Rebellion & Early Uprisings",
                    content: "Puli Thevar, Kattabomman, Maruthu Brothers, Vellore Revolt 1806.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-10-soc-t2",
                    title: "Indian Constitution & Executive System",
                    content: "Preamble, Fundamental Rights, Governor, Chief Minister & High Court.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "tnsb-class-11",
        title: "TNSB Class 11 Higher Secondary",
        subjects: [
          {
            id: "tnsb-11-physics",
            title: "Physics Class 11 (TNSB)",
            color: "from-blue-600 to-sky-700",
            chapters: [
              {
                id: "tnsb-11-phy-ch1",
                title: "Nature of Physical World & Kinematics",
                topics: [
                  {
                    id: "tnsb-11-phy-t1",
                    title: "Errors in Measurement & Vector Algebra",
                    content: "Vector addition, scalar product, cross product, relative velocity.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "tnsb-11-phy-ch2",
                title: "Gravitation & Properties of Matter",
                topics: [
                  {
                    id: "tnsb-11-phy-t2",
                    title: "Elasticity, Surface Tension & Viscosity",
                    content: "Hooke's law, Young's modulus, Bernoulli's theorem, Stokes' law.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-11-chemistry",
            title: "Chemistry Class 11 (TNSB)",
            color: "from-emerald-600 to-teal-700",
            chapters: [
              {
                id: "tnsb-11-chem-ch1",
                title: "Basic Concepts & Quantum Mechanical Model",
                topics: [
                  {
                    id: "tnsb-11-chem-t1",
                    title: "Equivalent Mass & Redox Reactions",
                    content: "Oxidation numbers, balancing redox equations, mole calculations.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-11-maths",
            title: "Mathematics Class 11 (TNSB)",
            color: "from-purple-600 to-pink-700",
            chapters: [
              {
                id: "tnsb-11-math-ch1",
                title: "Matrices, Determinants & Trigonometry",
                topics: [
                  {
                    id: "tnsb-11-math-t1",
                    title: "Properties of Determinants & Inverse Matrix",
                    content: "Elementary transformations, rank of matrix, system of equations.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-11-biology",
            title: "Bio-Botany & Bio-Zoology Class 11 (TNSB)",
            color: "from-green-600 to-emerald-800",
            chapters: [
              {
                id: "tnsb-11-bio-ch1",
                title: "Taxonomy, Plant Anatomy & Human Physiology",
                topics: [
                  {
                    id: "tnsb-11-bio-t1",
                    title: "Plant Kingdom & Tissue Systems",
                    content: "Angiosperm classification, vascular bundles, secondary growth.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "tnsb-class-12",
        title: "TNSB Class 12 Higher Secondary (HSC)",
        subjects: [
          {
            id: "tnsb-12-physics",
            title: "Physics Class 12 (TNSB HSC)",
            color: "from-sky-600 to-blue-800",
            chapters: [
              {
                id: "tnsb-12-phy-ch1",
                title: "Electrostatics, Magnetism & Wave Optics",
                topics: [
                  {
                    id: "tnsb-12-phy-t1",
                    title: "Electric Field, Dipole & Gauss Law Applications",
                    content: "Field due to dipole, Van de Graaff generator, capacitance calculation.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-12-phy-t2",
                    title: "Electromagnetic Induction & Alternating Current",
                    content: "Self and mutual inductance, AC generator, transformer efficiency.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "tnsb-12-phy-ch2",
                title: "Atomic, Nuclear & Semiconductor Physics",
                topics: [
                  {
                    id: "tnsb-12-phy-t3",
                    title: "Photoelectric Effect & Nuclear Fission/Fusion",
                    content: "Einstein's photoelectric equation, mass defect, binding energy curve.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-12-phy-t4",
                    title: "Transistors & Digital Logic Gates",
                    content: "CE configuration, transistor as switch, AND, OR, NOT, NAND, NOR gates.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-12-chemistry",
            title: "Chemistry Class 12 (TNSB HSC)",
            color: "from-rose-600 to-red-700",
            chapters: [
              {
                id: "tnsb-12-chem-ch1",
                title: "Solid State, Electrochemistry & Organic Reactions",
                topics: [
                  {
                    id: "tnsb-12-chem-t1",
                    title: "Crystal Lattices & Unit Cell Density",
                    content: "SCC, BCC, FCC packing efficiency, Schottky and Frenkel defects.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-12-chem-t2",
                    title: "Carbonyl Compounds & Organic Nitrogen Compounds",
                    content: "Aldol, Cannizzaro, Kolbe's reaction, Reimer-Tiemann, Hofmann degradation.",
                    duration: "45m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-12-maths",
            title: "Mathematics Class 12 (TNSB HSC)",
            color: "from-indigo-600 to-violet-800",
            chapters: [
              {
                id: "tnsb-12-math-ch1",
                title: "Application of Matrices & Complex Numbers",
                topics: [
                  {
                    id: "tnsb-12-math-t1",
                    title: "Rank of Matrix & Gauss-Jordan Method",
                    content: "Solving linear equations using matrix inversion, Cramer's rule.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-12-math-t2",
                    title: "De Moivre's Theorem & Roots of Unity",
                    content: "Polar form of complex number, nth roots of unity, Argand plane.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "tnsb-12-math-ch2",
                title: "Differential Calculus & Vector Geometry",
                topics: [
                  {
                    id: "tnsb-12-math-t3",
                    title: "Taylor & Maclaurin Series & Differentials",
                    content: "Partial derivatives, Euler's theorem, linear approximation.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-12-math-t4",
                    title: "Vector Equation of Plane & Line",
                    content: "Parametric & non-parametric vector equations of planes.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "tnsb-12-biology",
            title: "Bio-Botany & Bio-Zoology Class 12 (TNSB HSC)",
            color: "from-emerald-600 to-green-800",
            chapters: [
              {
                id: "tnsb-12-bio-ch1",
                title: "Reproduction, Molecular Genetics & Human Health",
                topics: [
                  {
                    id: "tnsb-12-bio-t1",
                    title: "Asexual & Sexual Reproduction in Plants",
                    content: "Microsporogenesis, megasporogenesis, double fertilization, apomixis.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "tnsb-12-bio-t2",
                    title: "Human Immunity & Vaccine Types",
                    content: "Innate & acquired immunity, B-cells, T-cells, monoclonal antibodies.",
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
    id: "cbse-11",
    title: "CBSE Class 11 Board & Competitive Prep",
    code: "CBSE11",
    classes: [
      {
        id: "class-11-science",
        title: "Class 11 Science (PCM & PCB)",
        subjects: [
          {
            id: "c11-physics",
            title: "Physics Class 11",
            color: "from-blue-600 to-indigo-700",
            chapters: [
              {
                id: "c11-phy-ch1",
                title: "Units & Measurements and Kinematics",
                topics: [
                  {
                    id: "c11-phy-t1",
                    title: "Units, Dimensions & Errors",
                    content: "SI units, dimensional analysis, significant figures, error propagation.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-phy-t2",
                    title: "Motion in a Straight Line & Plane",
                    content: "Position-time graphs, velocity, acceleration, projectile motion equations.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c11-phy-ch2",
                title: "Laws of Motion, Work Energy & Power",
                topics: [
                  {
                    id: "c11-phy-t3",
                    title: "Newton's Laws & Friction",
                    content: "Inertia, momentum conservation, static and kinetic friction applications.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-phy-t4",
                    title: "Work-Energy Theorem & Collisions",
                    content: "Kinetic energy, potential energy curves, elastic and inelastic collisions.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c11-phy-ch3",
                title: "Thermodynamics, Waves & Oscillations",
                topics: [
                  {
                    id: "c11-phy-t5",
                    title: "Thermodynamics & Kinetic Theory",
                    content: "First and second laws of thermodynamics, heat engines, ideal gas laws.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-phy-t6",
                    title: "Simple Harmonic Motion & Waves",
                    content: "SHM equations, pendulum, wave propagation, Doppler effect.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "c11-chemistry",
            title: "Chemistry Class 11",
            color: "from-emerald-600 to-teal-700",
            chapters: [
              {
                id: "c11-chem-ch1",
                title: "Atomic Structure & Chemical Bonding",
                topics: [
                  {
                    id: "c11-chem-t1",
                    title: "Quantum Mechanical Model of Atom",
                    content: "Bohr's model, quantum numbers, Aufbau principle, Hund's rule.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-chem-t2",
                    title: "VSEPR Theory & Hybridization",
                    content: "Valence shell electron pair repulsion, sp, sp2, sp3 hybridization geometry.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c11-chem-ch2",
                title: "Organic Chemistry Principles & Hydrocarbons",
                topics: [
                  {
                    id: "c11-chem-t3",
                    title: "IUPAC Nomenclature & Isomerism",
                    content: "IUPAC rules for functional groups, structural and stereoisomerism.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-chem-t4",
                    title: "Alkanes, Alkenes & Aromatic Hydrocarbons",
                    content: "Preparation methods, electrophilic additions, Friedel-Crafts reaction.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "c11-maths",
            title: "Mathematics Class 11",
            color: "from-purple-600 to-indigo-700",
            chapters: [
              {
                id: "c11-math-ch1",
                title: "Sets, Functions & Trigonometry",
                topics: [
                  {
                    id: "c11-math-t1",
                    title: "Sets, Relations & Functions",
                    content: "Types of sets, domain, range, domain calculation of real functions.",
                    duration: "25m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-math-t2",
                    title: "Trigonometric Equations & Formulas",
                    content: "Compound angles, multiple angles, general solutions of trig equations.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c11-math-ch2",
                title: "Coordinate Geometry & Limits",
                topics: [
                  {
                    id: "c11-math-t3",
                    title: "Straight Lines & Conic Sections",
                    content: "Slope forms, distance formula, circle, parabola, ellipse equations.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-math-t4",
                    title: "Limits & First Principle Derivative",
                    content: "Evaluation of limits, standard limit theorems, differentiation rules.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "c11-biology",
            title: "Biology Class 11",
            color: "from-green-600 to-emerald-700",
            chapters: [
              {
                id: "c11-bio-ch1",
                title: "Cell Biology & Biomolecules",
                topics: [
                  {
                    id: "c11-bio-t1",
                    title: "Cell Structure & Organelles",
                    content: "Prokaryotic vs eukaryotic cells, membrane structure, endomembrane system.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-bio-t2",
                    title: "Enzymes & Biomolecules",
                    content: "Proteins, carbohydrates, lipids, nucleic acids, enzyme action mechanisms.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c11-bio-ch2",
                title: "Plant & Human Physiology",
                topics: [
                  {
                    id: "c11-bio-t3",
                    title: "Photosynthesis & Cellular Respiration",
                    content: "Light reactions, Calvin cycle, Krebs cycle, electron transport system.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c11-bio-t4",
                    title: "Neural Control & Chemical Coordination",
                    content: "Nerve impulse transmission, synapse, endocrine glands & hormones.",
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
    id: "cbse-12",
    title: "CBSE Class 12 Board & Competitive Prep",
    code: "CBSE12",
    classes: [
      {
        id: "class-12-science",
        title: "Class 12 Science (PCM & PCB)",
        subjects: [
          {
            id: "c12-physics",
            title: "Physics Class 12",
            color: "from-sky-600 to-blue-700",
            chapters: [
              {
                id: "c12-phy-ch1",
                title: "Electrostatics & Current Electricity",
                topics: [
                  {
                    id: "c12-phy-t1",
                    title: "Electric Fields & Gauss Law",
                    content: "Coulomb's law, electric dipole, flux calculation, Gauss theorem applications.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-phy-t2",
                    title: "Kirchhoff's Laws & Potentiometer",
                    content: "Ohm's law, Wheatstone bridge, meter bridge, internal resistance measurement.",
                    duration: "30m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c12-phy-ch2",
                title: "Optics & Semiconductor Electronics",
                topics: [
                  {
                    id: "c12-phy-t3",
                    title: "Ray & Wave Optics",
                    content: "Refraction through prisms, Young's double slit experiment, diffraction.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-phy-t4",
                    title: "p-n Junction Diodes & Solar Cells",
                    content: "Intrinsic and extrinsic semiconductors, diode rectifiers, LED, Zener diode.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "c12-chemistry",
            title: "Chemistry Class 12",
            color: "from-rose-600 to-pink-700",
            chapters: [
              {
                id: "c12-chem-ch1",
                title: "Solutions, Electrochemistry & Kinetics",
                topics: [
                  {
                    id: "c12-chem-t1",
                    title: "Colligative Properties & Raoult's Law",
                    content: "Vapor pressure, elevation of boiling point, osmotic pressure, van't Hoff factor.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-chem-t2",
                    title: "Nernst Equation & Rate Laws",
                    content: "Standard electrode potential, Kohlrausch's law, order of reaction, Arrhenius equation.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c12-chem-ch2",
                title: "Coordination Chemistry & Organic Reactions",
                topics: [
                  {
                    id: "c12-chem-t3",
                    title: "Werner's Theory & Crystal Field Theory",
                    content: "Ligands, IUPAC naming of complexes, CFT splitting in octahedral complexes.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-chem-t4",
                    title: "Aldehydes, Ketones & Amines",
                    content: "Nucleophilic addition, Aldol condensation, Cannizzaro reaction, Gabriel phthalimide synthesis.",
                    duration: "45m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "c12-maths",
            title: "Mathematics Class 12",
            color: "from-indigo-600 to-violet-700",
            chapters: [
              {
                id: "c12-math-ch1",
                title: "Differential & Integral Calculus",
                topics: [
                  {
                    id: "c12-math-t1",
                    title: "Continuity, Differentiability & Derivatives",
                    content: "Chain rule, implicit differentiation, Mean Value Theorems, maxima-minima.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-math-t2",
                    title: "Indefinite & Definite Integrals",
                    content: "Integration by parts, partial fractions, definite integral properties.",
                    duration: "45m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c12-math-ch2",
                title: "Vectors, 3D Geometry & Probability",
                topics: [
                  {
                    id: "c12-math-t3",
                    title: "Vector Algebra & 3D Lines/Planes",
                    content: "Dot product, cross product, shortest distance between skew lines.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-math-t4",
                    title: "Conditional Probability & Bayes Theorem",
                    content: "Independent events, Bayes' theorem, probability distribution.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              }
            ]
          },
          {
            id: "c12-biology",
            title: "Biology Class 12",
            color: "from-teal-600 to-emerald-700",
            chapters: [
              {
                id: "c12-bio-ch1",
                title: "Genetics, Evolution & Molecular Biology",
                topics: [
                  {
                    id: "c12-bio-t1",
                    title: "Molecular Basis of Inheritance",
                    content: "DNA structure, replication, transcription, translation, genetic code.",
                    duration: "40m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-bio-t2",
                    title: "Human Reproduction & Reproductive Health",
                    content: "Gametogenesis, menstrual cycle, fertilization, ART techniques.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  }
                ]
              },
              {
                id: "c12-bio-ch2",
                title: "Biotechnology & Ecology",
                topics: [
                  {
                    id: "c12-bio-t3",
                    title: "Recombinant DNA Technology & PCR",
                    content: "Restriction enzymes, cloning vectors, PCR amplification steps.",
                    duration: "35m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "c12-bio-t4",
                    title: "Organisms, Populations & Conservation",
                    content: "Population interactions, ecological pyramids, biodiversity hotspots.",
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
  },
  {
    id: "engineering",
    title: "Engineering Entrance Exams (JEE Main & Advanced)",
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
