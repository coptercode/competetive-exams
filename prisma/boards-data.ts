import { tnsbBoardComplete } from './tnsb-data';
import { icseBoardComplete } from './icse-data';
import { cbseBoardComplete } from './cbse-data';

export const tnsbBoard = [
  {
    id: "tnsb",
    title: "Tamil Nadu State Board",
    classes: [
      {
        id: "class-12",
        title: "Class 12",
        subjects: [
          {
            id: "maths-12-v1",
            title: "Mathematics Volume 1",
            color: "from-sky-600 to-blue-700",
            chapters: [
              {
                id: "maths-12-v1-ch1",
                title: "Chapter 1: Applications of Matrices and Determinants",
                topics: [
                  {
                    id: "cl12-maths-v1-ch1-t1",
                    title: "Adjoint and Inverse",
                    content: "Adjoint calculation, properties of inverse, solving systems.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                  {
                    id: "cl12-maths-v1-ch1-t2",
                    title: "Rank of Matrix",
                    content: "Row echelon form, rank evaluation, consistency tests.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                  {
                    id: "cl12-maths-v1-ch1-t3",
                    title: "Cramer's & Gauss Rules",
                    content: "Determinants method, gaussian elimination back-substitution.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "class-11",
        title: "Class 11",
        subjects: [
          {
            id: "maths-11-v1",
            title: "Mathematics",
            chapters: [
              {
                id: "maths-11-ch1",
                title: "Chapter 1: Sets and Functions",
                topics: [
                  {
                    id: "cl11-maths-ch1-t1",
                    title: "Sets Basics",
                    content: "Introduction to sets and operations.",
                    duration: "10m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "class-10",
        title: "Class 10",
        subjects: [
          {
            id: "maths-10-v1",
            title: "Mathematics",
            chapters: [
              {
                id: "maths-10-ch1",
                title: "Chapter 1: Number Systems",
                topics: [
                  {
                    id: "cl10-maths-ch1-t1",
                    title: "Real Numbers",
                    content: "Fundamental number system concepts.",
                    duration: "10m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
          {
            id: "biology-10-v1",
            title: "Biology",
            chapters: [
              {
                id: "bio-10-ch1",
                title: "Chapter 1: Plant Anatomy and Plant Physiology",
                topics: [
                  {
                    id: "cl10-bio-ch1-t1",
                    title: "Nutrition in Plants",
                    content: "Learn about the various modes of nutrition in plants.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
          {
            id: "physics-10-v1",
            title: "Physics",
            chapters: [
              {
                id: "phy-10-ch1",
                title: "Chapter 1: Laws of Motion",
                topics: [
                  {
                    id: "cl10-phy-ch1-t1",
                    title: "Force and Motion",
                    content: "Introduction to Newton's laws of motion.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
          {
            id: "chemistry-10-v1",
            title: "Chemistry",
            chapters: [
              {
                id: "chem-10-ch1",
                title: "Chapter 1: Atoms and Molecules",
                topics: [
                  {
                    id: "cl10-chem-ch1-t1",
                    title: "Structure of Atom",
                    content: "Understanding the basic structure of an atom.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "class-9",
        title: "Class 9",
        subjects: [
          {
            id: "maths-9-v1",
            title: "Mathematics",
            chapters: [
              {
                id: "maths-9-ch1",
                title: "Chapter 1: Set Language",
                topics: [
                  {
                    id: "cl9-maths-ch1-t1",
                    title: "Introduction to Sets",
                    content: "Basic set theory concepts.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
              {
                id: "maths-9-ch2",
                title: "Chapter 2: Real Numbers",
                topics: [
                  {
                    id: "cl9-maths-ch2-t1",
                    title: "Rational Numbers",
                    content: "Rational numbers and properties.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
              {
                id: "maths-9-ch3",
                title: "Chapter 3: Algebra",
                topics: [
                  {
                    id: "cl9-maths-ch3-t1",
                    title: "Polynomials",
                    content: "Algebraic expressions and polynomials.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
              {
                id: "maths-9-ch4",
                title: "Chapter 4: Geometry",
                topics: [
                  {
                    id: "cl9-maths-ch4-t1",
                    title: "Geometry Basics",
                    content: "Basics of geometry.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                  {
                    id: "cl9-maths-ch4-t2",
                    title: "Triangles",
                    content: "Properties of triangles.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                  {
                    id: "cl9-maths-ch4-t3",
                    title: "Quadrilaterals",
                    content: "Properties of quadrilaterals.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                  {
                    id: "cl9-maths-ch4-t4",
                    title: "Circles",
                    content: "Properties of circles.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
              {
                id: "maths-9-ch5",
                title: "Chapter 5: Coordinate Geometry",
                topics: [
                  {
                    id: "cl9-maths-ch5-t1",
                    title: "Cartesian System",
                    content: "Understanding the Cartesian plane.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
              {
                id: "maths-9-ch6",
                title: "Chapter 6: Trigonometry",
                topics: [
                  {
                    id: "cl9-maths-ch6-t1",
                    title: "Trigonometric Ratios",
                    content: "Introduction to trigonometric ratios.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
              {
                id: "maths-9-ch7",
                title: "Chapter 7: Mensuration",
                topics: [
                  {
                    id: "cl9-maths-ch7-t1",
                    title: "Heron's Formula",
                    content: "Calculating the area of a triangle using Heron's formula.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
          {
            id: "science-9-v1",
            title: "Science",
            chapters: [
              {
                id: "sci-9-ch1",
                title: "Chapter 1: Measurement",
                topics: [
                  {
                    id: "cl9-sci-ch1-t1",
                    title: "Physical Quantities",
                    content: "Introduction to physical quantities and units.",
                    duration: "15m",
                    videoUrl: "https://www.w3schools.com/html/movie.mp4",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const cbseBoard = {
  id: "cbse",
  title: "CBSE Board",
  classes: [
    {
      id: "class-12",
      title: "Class 12",
      subjects: [
        {
          id: "maths-12-cbse",
          title: "Mathematics",
          chapters: [
            {
              id: "cbse-maths-12-ch1",
              title: "Chapter 1: Relations and Functions",
              topics: [
                {
                  id: "cbse-maths-12-ch1-t1",
                  title: "Relations and Functions",
                  content: "Domain and range of relations and functions.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "class-11",
      title: "Class 11",
      subjects: [
        {
          id: "maths-11-cbse",
          title: "Mathematics",
          chapters: [
            {
              id: "cbse-maths-11-ch1",
              title: "Chapter 1: Sets",
              topics: [
                {
                  id: "cbse-maths-11-ch1-t1",
                  title: "Introduction to Sets",
                  content: "Basic set theory concepts.",
                  duration: "12m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "biology-11-cbse",
          title: "Biology",
          chapters: [
            {
              id: "cbse-bio-11-ch1",
              title: "Chapter 1: The Living World",
              topics: [
                {
                  id: "cbse-bio-11-ch1-t1",
                  title: "Diversity in the Living World",
                  content: "What is living? Biodiversity, need for classification.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "physics-11-cbse",
          title: "Physics",
          chapters: [
            {
              id: "cbse-phy-11-ch1",
              title: "Chapter 1: Physical World",
              topics: [
                {
                  id: "cbse-phy-11-ch1-t1",
                  title: "Scope and Excitement of Physics",
                  content: "What is Physics? Scope and excitement.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "chemistry-11-cbse",
          title: "Chemistry",
          chapters: [
            {
              id: "cbse-chem-11-ch1",
              title: "Chapter 1: Some Basic Concepts of Chemistry",
              topics: [
                {
                  id: "cbse-chem-11-ch1-t1",
                  title: "Importance of Chemistry",
                  content: "General introduction and importance of Chemistry.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "class-10",
      title: "Class 10",
      subjects: [
        {
          id: "maths-10-cbse",
          title: "Mathematics",
          chapters: [
            {
              id: "cbse-maths-10-ch1",
              title: "Chapter 1: Number Systems",
              topics: [
                {
                  id: "cbse-maths-10-ch1-t1",
                  title: "Real Numbers",
                  content: "Real numbers and their properties.",
                  duration: "10m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "class-9",
      title: "Class 9",
      subjects: [
        {
          id: "maths-9-cbse",
          title: "Mathematics",
          chapters: [
            {
              id: "cbse-maths-9-ch1",
              title: "Chapter 1: Number Systems",
              topics: [
                {
                  id: "cbse-maths-9-ch1-t1",
                  title: "Rational and Irrational Numbers",
                  content: "Real numbers and their properties.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "science-9-cbse",
          title: "Science",
          chapters: [
            {
              id: "cbse-sci-9-ch1",
              title: "Chapter 1: Matter in Our Surroundings",
              topics: [
                {
                  id: "cbse-sci-9-ch1-t1",
                  title: "Physical Nature of Matter",
                  content: "Characteristics of particles of matter.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const icseBoard = {
  id: "icse",
  title: "ICSE Board",
  classes: [
    {
      id: "class-12",
      title: "Class 12",
      subjects: [
        {
          id: "maths-12-icse",
          title: "Mathematics",
          chapters: [
            {
              id: "icse-maths-12-ch1",
              title: "Chapter 1: Co-ordinate Geometry",
              topics: [
                {
                  id: "icse-maths-12-ch1-t1",
                  title: "Straight Lines",
                  content: "Slope and intercept of straight lines.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "physics-12-icse",
          title: "Physics",
          chapters: [
            {
              id: "icse-phy-12-ch1",
              title: "Chapter 1: Physical World",
              topics: [
                {
                  id: "icse-phy-12-ch1-t1",
                  title: "Scope and Excitement of Physics",
                  content: "What is Physics? Scope and excitement.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "chemistry-12-icse",
          title: "Chemistry",
          chapters: [
            {
              id: "icse-chem-12-ch1",
              title: "Chapter 1: Solid State",
              topics: [
                {
                  id: "icse-chem-12-ch1-t1",
                  title: "Introduction to Solid State",
                  content: "Characteristics of solid state.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "biology-12-icse",
          title: "Biology",
          chapters: [
            {
              id: "icse-bio-12-ch1",
              title: "Chapter 1: Reproduction",
              topics: [
                {
                  id: "icse-bio-12-ch1-t1",
                  title: "Reproduction in Organisms",
                  content: "Reproduction, a characteristic feature of all organisms.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "class-11",
      title: "Class 11",
      subjects: [
        {
          id: "maths-11-icse",
          title: "Mathematics",
          chapters: [
            {
              id: "icse-maths-11-ch1",
              title: "Chapter 1: Algebra",
              topics: [
                {
                  id: "icse-maths-11-ch1-t1",
                  title: "Polynomials",
                  content: "Polynomial basics and operations.",
                  duration: "12m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "physics-11-icse",
          title: "Physics",
          chapters: [
            {
              id: "icse-phy-11-ch1",
              title: "Chapter 1: Physical World",
              topics: [
                {
                  id: "icse-phy-11-ch1-t1",
                  title: "Scope and Excitement of Physics",
                  content: "What is Physics? Scope and excitement.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "chemistry-11-icse",
          title: "Chemistry",
          chapters: [
            {
              id: "icse-chem-11-ch1",
              title: "Chapter 1: Some Basic Concepts of Chemistry",
              topics: [
                {
                  id: "icse-chem-11-ch1-t1",
                  title: "Importance of Chemistry",
                  content: "General introduction and importance of Chemistry.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "biology-11-icse",
          title: "Biology",
          chapters: [
            {
              id: "icse-bio-11-ch1",
              title: "Chapter 1: The Living World",
              topics: [
                {
                  id: "icse-bio-11-ch1-t1",
                  title: "Diversity in the Living World",
                  content: "What is living? Biodiversity, need for classification.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "class-10",
      title: "Class 10",
      subjects: [
        {
          id: "maths-10-icse",
          title: "Mathematics",
          chapters: [
            {
              id: "icse-maths-10-ch1",
              title: "Chapter 1: Number Systems",
              topics: [
                {
                  id: "icse-maths-10-ch1-t1",
                  title: "Integers and Fractions",
                  content: "Basic number properties.",
                  duration: "10m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "biology-10-icse",
          title: "Biology",
          chapters: [
            {
              id: "icse-bio-10-ch1",
              title: "Chapter 1: Plant Anatomy and Plant Physiology",
              topics: [
                {
                  id: "icse-bio-10-ch1-t1",
                  title: "Nutrition in Plants",
                  content: "Learn about the various modes of nutrition in plants.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "physics-10-icse",
          title: "Physics",
          chapters: [
            {
              id: "icse-phy-10-ch1",
              title: "Chapter 1: Force and Work",
              topics: [
                {
                  id: "icse-phy-10-ch1-t1",
                  title: "Turning Forces",
                  content: "Moment of a force and equilibrium.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "chemistry-10-icse",
          title: "Chemistry",
          chapters: [
            {
              id: "icse-chem-10-ch1",
              title: "Chapter 1: Periodic Table",
              topics: [
                {
                  id: "icse-chem-10-ch1-t1",
                  title: "Periodic Properties",
                  content: "Trends in periodic properties.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "class-9",
      title: "Class 9",
      subjects: [
        {
          id: "maths-9-icse",
          title: "Mathematics",
          chapters: [
            {
              id: "icse-maths-9-ch1",
              title: "Chapter 1: Numbers",
              topics: [
                {
                  id: "icse-maths-9-ch1-t1",
                  title: "Number Systems",
                  content: "Integers, rational and irrational numbers.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
        {
          id: "science-9-icse",
          title: "Science",
          chapters: [
            {
              id: "icse-sci-9-ch1",
              title: "Chapter 1: Matter in Our Surroundings",
              topics: [
                {
                  id: "icse-sci-9-ch1-t1",
                  title: "Physical Nature of Matter",
                  content: "Characteristics of particles of matter.",
                  duration: "15m",
                  videoUrl: "https://www.w3schools.com/html/movie.mp4",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const initialBoards = [tnsbBoardComplete, cbseBoardComplete, icseBoardComplete];
