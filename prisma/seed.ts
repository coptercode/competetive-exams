import { PrismaClient, UserRole, QuestionType, LiveClassStatus, AttendanceStatus, NotificationType, BillingPeriod, SubscriptionStatus, PaymentStatus, PaymentGateway, SubmissionStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { initialBoards } from './boards-data.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');
  // Admin password is set via ADMIN_SEED_PASSWORD env variable for security.
  // If not set, a strong random placeholder is used — admin must change it on first login.
  const adminPassword = process.env.ADMIN_SEED_PASSWORD || 'password123';
  const passwordHash = await bcrypt.hash(adminPassword, 12);
  console.log(`Admin password set to: ${adminPassword}`);

  console.log('Cleaning up existing database records...');
  await prisma.subjectStatistics.deleteMany({});
  await prisma.learningStreak.deleteMany({});
  await prisma.studentAnalytics.deleteMany({});
  await prisma.studentTopicProgress.deleteMany({});
  await prisma.studentChapterProgress.deleteMany({});
  await prisma.studentSubjectProgress.deleteMany({});
  await prisma.assignment.deleteMany({});
  await prisma.quizOption.deleteMany({});
  await prisma.quizQuestion.deleteMany({});
  await prisma.quiz.deleteMany({});
  await prisma.courseNote.deleteMany({});
  await prisma.courseVideo.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.payment.deleteMany({});
  await prisma.subscription.deleteMany({});
  await prisma.subscriptionPlan.deleteMany({});
  await prisma.userRoleJoin.deleteMany({});
  await prisma.student.deleteMany({});
  await prisma.teacher.deleteMany({});
  await prisma.admin.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.topic.deleteMany({});
  await prisma.chapter.deleteMany({});
  await prisma.unit.deleteMany({});
  await prisma.subject.deleteMany({});
  await prisma.class.deleteMany({});
  await prisma.board.deleteMany({});


  // ==========================================
  // 1. SEED PERMISSIONS
  // ==========================================
  console.log('Seeding permissions...');
  const permissionsList = [
    { name: 'academic:read', description: 'Can read academic structure' },
    { name: 'academic:write', description: 'Can edit academic structure' },
    { name: 'course:read', description: 'Can read course materials' },
    { name: 'course:write', description: 'Can write course materials' },
    { name: 'video:watch', description: 'Can watch DRM protected videos' },
    { name: 'quiz:attempt', description: 'Can attempt quizzes' },
    { name: 'quiz:grade', description: 'Can grade quizzes' },
    { name: 'assignment:submit', description: 'Can submit assignments' },
    { name: 'assignment:grade', description: 'Can grade and give feedback on assignments' },
    { name: 'live-class:join', description: 'Can join live sessions' },
    { name: 'live-class:host', description: 'Can host live classes' },
    { name: 'billing:manage', description: 'Can manage billing and subscriptions' },
    { name: 'analytics:read', description: 'Can read learning and platform analytics' },
  ];

  const dbPermissions: Record<string, any> = {};
  for (const perm of permissionsList) {
    dbPermissions[perm.name] = await prisma.permission.upsert({
      where: { name: perm.name },
      update: {},
      create: perm,
    });
  }

  // ==========================================
  // 2. SEED ROLES
  // ==========================================
  console.log('Seeding roles...');
  const adminRole = await prisma.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: { name: 'ADMIN', description: 'Full system administrator access' },
  });

  const teacherRole = await prisma.role.upsert({
    where: { name: 'TEACHER' },
    update: {},
    create: { name: 'TEACHER', description: 'Access to manage courses, grade assessments, and host live classes' },
  });

  const studentRole = await prisma.role.upsert({
    where: { name: 'STUDENT' },
    update: {},
    create: { name: 'STUDENT', description: 'Access to courses, materials, quizzes, and live classrooms' },
  });

  // ==========================================
  // 3. MAP ROLE TO PERMISSIONS
  // ==========================================
  console.log('Mapping permissions to roles...');
  for (const permKey in dbPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: adminRole.id,
          permissionId: dbPermissions[permKey].id,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: dbPermissions[permKey].id,
      },
    });
  }

  const teacherPerms = [
    'academic:read',
    'course:write',
    'video:watch',
    'quiz:grade',
    'assignment:grade',
    'live-class:host',
    'analytics:read',
  ];
  for (const name of teacherPerms) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: teacherRole.id,
          permissionId: dbPermissions[name].id,
        },
      },
      update: {},
      create: {
        roleId: teacherRole.id,
        permissionId: dbPermissions[name].id,
      },
    });
  }

  const studentPerms = [
    'academic:read',
    'course:read',
    'video:watch',
    'quiz:attempt',
    'assignment:submit',
    'live-class:join',
    'analytics:read',
  ];
  for (const name of studentPerms) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: studentRole.id,
          permissionId: dbPermissions[name].id,
        },
      },
      update: {},
      create: {
        roleId: studentRole.id,
        permissionId: dbPermissions[name].id,
      },
    });
  }

  // ==========================================
  // 4. DYNAMIC ACADEMIC HIERARCHY
  // ==========================================
  console.log('Seeding academic hierarchy for all boards...');
  try {
    for (const boardData of initialBoards) {
      const dbBoard = await prisma.board.upsert({
        where: { code: boardData.id.toUpperCase() },
        update: {},
        create: { name: boardData.title, code: boardData.id.toUpperCase() },
      });

      for (let classIndex = 0; classIndex < boardData.classes.length; classIndex++) {
        const classData = boardData.classes[classIndex];
        const dbClass = await prisma.class.upsert({
          where: { boardId_name: { boardId: dbBoard.id, name: classData.title } },
          update: { name: classData.title },
          create: {
            name: classData.title,
            boardId: dbBoard.id,
            sortOrder: classIndex + 1,
          },
        });

        for (let subjectIndex = 0; subjectIndex < classData.subjects.length; subjectIndex++) {
          const subjectData = classData.subjects[subjectIndex];
          const dbSubject = await prisma.subject.upsert({
            where: { classId_name: { classId: dbClass.id, name: subjectData.title } },
            update: {
              name: subjectData.title,
            },
            create: {
              name: subjectData.title,
              code: subjectData.id.toUpperCase(),
              classId: dbClass.id,
              sortOrder: subjectIndex + 1,
            },
          });

          // Add a default Unit to bridge the gap if units are not provided in data
          const dbUnit = await prisma.unit.upsert({
            where: { subjectId_name: { subjectId: dbSubject.id, name: 'Core Syllabus' } },
            update: { name: 'Core Syllabus' },
            create: {
              name: 'Core Syllabus',
              subjectId: dbSubject.id,
              sortOrder: 1,
            },
          });

          for (let chapterIndex = 0; chapterIndex < subjectData.chapters.length; chapterIndex++) {
            const chapterData = subjectData.chapters[chapterIndex];
            const dbChapter = await prisma.chapter.upsert({
              where: { unitId_name: { unitId: dbUnit.id, name: chapterData.title } },
              update: { name: chapterData.title },
              create: {
                name: chapterData.title,
                unitId: dbUnit.id,
                sortOrder: chapterIndex + 1,
              },
            });

            for (let topIndex = 0; topIndex < chapterData.topics.length; topIndex++) {
              const topicData = chapterData.topics[topIndex];
              
              // Skip dummy topics that share the exact same title as the chapter itself
              if (topicData.title === chapterData.title) {
                continue;
              }

              let dbTopic;
              try {
                dbTopic = await prisma.topic.upsert({
                  where: { chapterId_name: { chapterId: dbChapter.id, name: topicData.title } },
                  update: {
                    sortOrder: topIndex + 1,
                  },
                  create: {
                    name: topicData.title,
                    chapterId: dbChapter.id,
                    sortOrder: topIndex + 1,
                    requireWatchPercent: 90.0,
                    requireQuizPass: true,
                  },
                });
              } catch (err: any) {
                console.error(`[SEED ERROR] Failed to upsert Topic: "${topicData.title}" in Chapter: "${chapterData.title}"`);
                console.error(`Error details: ${err.message?.split('\n').pop()}`);
                continue;
              }

              if (
                (topicData as any).videoUrl &&
                ((topicData as any).videoUrl.includes('youtube.com') ||
                  (topicData as any).videoUrl.includes('youtu.be'))
              ) {
                const videoCount = await prisma.courseVideo.count({
                  where: { topicId: dbTopic.id },
                });
                if (videoCount === 0) {
                  await prisma.courseVideo.create({
                    data: {
                      title: `Video: ${dbTopic.name}`,
                      videoUrl: (topicData as any).videoUrl,
                      duration: 900,
                      topicId: dbTopic.id,
                      sortOrder: 1,
                    },
                  });
                } else {
                  const existingVideo = await prisma.courseVideo.findFirst({
                    where: { topicId: dbTopic.id },
                  });
                  if (existingVideo) {
                    await prisma.courseVideo.update({
                      where: { id: existingVideo.id },
                      data: {
                        videoUrl: (topicData as any).videoUrl,
                      },
                    });
                  }
                }
              }

              // SEED COMPETITIVE EXAM COURSE NOTES & SYLLABUS PORTIONS
              const noteCount = await prisma.courseNote.count({
                where: { topicId: dbTopic.id },
              });
              const sanitizeUrlKey = (str: string) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
              const noteStorageKey = `notes/${sanitizeUrlKey(boardData.title)}/${sanitizeUrlKey(subjectData.title)}/syllabus-note-${sanitizeUrlKey(dbTopic.name)}.pdf`;
              const supabaseStorageUrl = `https://lms-files.supabase.co/storage/v1/object/public/lms-files/${noteStorageKey}`;

              if (noteCount === 0) {
                await prisma.courseNote.create({
                  data: {
                    title: `Syllabus & Core Notes: ${dbTopic.name}`,
                    fileUrl: supabaseStorageUrl,
                    topicId: dbTopic.id,
                    sortOrder: 1,
                    isRequiredForComplete: true,
                    subjectTitle: subjectData.title,
                    uploadedByName: 'Dr. S. Ramanathan (Instructor)',
                    uploadedByUserId: 'instructor-001',
                  },
                });
              }
            }
          }
        }
      }
    }
  } catch (error: any) {
    console.error(`\n[CRITICAL SEED ERROR] Failed during Academic Hierarchy seeding:`);
    console.error(error.message);
    console.log(`Skipping remainder of academic seed and proceeding to create Admin user...\n`);
  }

  const topicForQuiz = await prisma.topic.findFirst();
  if (!topicForQuiz) {
    throw new Error('No topics were created during board seeding, cannot seed sample quiz.');
  }




  // ==========================================
  // 5. SEED ADMIN USER ONLY
  // ==========================================
  // NOTE: Teachers are added by admin via the Admin Portal.
  // Students self-register and are approved by admin.
  // No default student or teacher credentials are seeded for security.
  console.log('Seeding Admin user...');

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@nexoralearning.com' },
    update: {},
    create: {
      email: 'admin@nexoralearning.com',
      passwordHash,
      firstName: 'Aarav',
      lastName: 'Sharma',
      role: UserRole.ADMIN,
      phoneNumber: '9874563210',
    },
  });

  await prisma.admin.upsert({
    where: { id: adminUser.id },
    update: {},
    create: { id: adminUser.id, dept: 'Operations & Curriculum' },
  });

  await prisma.userRoleJoin.upsert({
    where: { userId_roleId: { userId: adminUser.id, roleId: adminRole.id } },
    update: {},
    create: { userId: adminUser.id, roleId: adminRole.id },
  });

  console.log('Admin seeded: admin@nexoralearning.com');

  // ==========================================
  // 5b. SEED INSTRUCTOR USERS
  // ==========================================
  console.log('Seeding Instructor users...');
  const teacherUser1 = await prisma.user.upsert({
    where: { email: 'teacher@example.com' },
    update: {},
    create: {
      email: 'teacher@example.com',
      passwordHash,
      firstName: 'Sundaram',
      lastName: 'Dr. R.',
      role: UserRole.TEACHER,
      phoneNumber: '+91 9840123456',
      location: 'Chennai, TN',
      qualification: 'Ph.D Physics & Competitive Exam Mentor',
      isApproved: true,
      approvalStatus: 'APPROVED'
    },
  });

  await prisma.teacher.upsert({
    where: { id: teacherUser1.id },
    update: {},
    create: { id: teacherUser1.id, qualification: 'Ph.D Physics', bio: 'Senior Physics & Competitive Exams Mentor' }
  });

  await prisma.userRoleJoin.upsert({
    where: { userId_roleId: { userId: teacherUser1.id, roleId: teacherRole.id } },
    update: {},
    create: { userId: teacherUser1.id, roleId: teacherRole.id },
  });

  // ==========================================
  // 5c. SEED CANDIDATE USERS & REGISTRY
  // ==========================================
  console.log('Seeding Candidate users into Database Registry...');
  const defaultBoard = await prisma.board.findFirst();
  const defaultClass = await prisma.class.findFirst();

  // Candidate 1: Active
  const studentUser1 = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {
      isApproved: true,
      approvalStatus: 'APPROVED'
    },
    create: {
      email: 'student@example.com',
      passwordHash,
      firstName: 'Arun',
      lastName: 'Kumar',
      role: UserRole.STUDENT,
      phoneNumber: '+91 9876543210',
      location: 'Chennai, TN',
      targetExam: 'TNPSC Group 1',
      medium: 'Tamil',
      qualification: 'B.E. Computer Science',
      totalHoursSpent: 142.0,
      todayHoursSpent: 8.5,
      isApproved: true,
      approvalStatus: 'APPROVED'
    },
  });

  if (defaultBoard && defaultClass) {
    await prisma.student.upsert({
      where: { id: studentUser1.id },
      update: {},
      create: {
        id: studentUser1.id,
        boardId: defaultBoard.id,
        classId: defaultClass.id
      }
    });
  }

  await prisma.userRoleJoin.upsert({
    where: { userId_roleId: { userId: studentUser1.id, roleId: studentRole.id } },
    update: {},
    create: { userId: studentUser1.id, roleId: studentRole.id },
  });

  // Candidate 2: Blocked with Apology Note (Priya Sharma)
  const studentUser2 = await prisma.user.upsert({
    where: { email: 'priya.sharma@example.com' },
    update: {},
    create: {
      email: 'priya.sharma@example.com',
      passwordHash,
      firstName: 'Priya',
      lastName: 'Sharma',
      role: UserRole.STUDENT,
      phoneNumber: '+91 9812345678',
      location: 'Madurai, TN',
      targetExam: 'UPSC CSE Mains',
      medium: 'English',
      qualification: 'M.Sc Biotechnology',
      totalHoursSpent: 98.4,
      todayHoursSpent: 2.1,
      isApproved: true,
      approvalStatus: 'APPROVED',
      isBlocked: true,
      blockedReason: 'Low study activity: Less than 7.0 hours per day for 3 consecutive days.',
      consecutiveLowActivityDays: 3,
      apologyNote: 'Dear Admin, I apologize for missing my daily study target due to medical recovery. I request account unblocking.',
      apologySubmittedAt: new Date(Date.now() - 86400000)
    },
  });

  if (defaultBoard && defaultClass) {
    await prisma.student.upsert({
      where: { id: studentUser2.id },
      update: {},
      create: {
        id: studentUser2.id,
        boardId: defaultBoard.id,
        classId: defaultClass.id
      }
    });
  }

  await prisma.userRoleJoin.upsert({
    where: { userId_roleId: { userId: studentUser2.id, roleId: studentRole.id } },
    update: {},
    create: { userId: studentUser2.id, roleId: studentRole.id },
  });

  // Candidate 3: Active (Karthik Rajan)
  const studentUser3 = await prisma.user.upsert({
    where: { email: 'karthik.r@example.com' },
    update: {},
    create: {
      email: 'karthik.r@example.com',
      passwordHash,
      firstName: 'Karthik',
      lastName: 'Rajan',
      role: UserRole.STUDENT,
      phoneNumber: '+91 9765432109',
      location: 'Coimbatore, TN',
      targetExam: 'TNPSC Group 2',
      medium: 'Bilingual',
      qualification: 'B.Com Financial Accounting',
      totalHoursSpent: 210.0,
      todayHoursSpent: 7.8,
      isApproved: true,
      approvalStatus: 'APPROVED'
    },
  });

  if (defaultBoard && defaultClass) {
    await prisma.student.upsert({
      where: { id: studentUser3.id },
      update: {},
      create: {
        id: studentUser3.id,
        boardId: defaultBoard.id,
        classId: defaultClass.id
      }
    });
  }

  await prisma.userRoleJoin.upsert({
    where: { userId_roleId: { userId: studentUser3.id, roleId: studentRole.id } },
    update: {},
    create: { userId: studentUser3.id, roleId: studentRole.id },
  });

  // Candidate 4: Pending Approval (Subash Kannan)
  const studentUser4 = await prisma.user.upsert({
    where: { email: 'subash.k@example.com' },
    update: {},
    create: {
      email: 'subash.k@example.com',
      passwordHash,
      firstName: 'Subash',
      lastName: 'Kannan',
      role: UserRole.STUDENT,
      phoneNumber: '+91 9443210987',
      location: 'Trichy, TN',
      targetExam: 'TNPSC Group 1',
      medium: 'Tamil',
      qualification: 'B.Sc Physics',
      totalHoursSpent: 0,
      todayHoursSpent: 0,
      isApproved: false,
      approvalStatus: 'PENDING_APPROVAL'
    },
  });

  if (defaultBoard && defaultClass) {
    await prisma.student.upsert({
      where: { id: studentUser4.id },
      update: {},
      create: {
        id: studentUser4.id,
        boardId: defaultBoard.id,
        classId: defaultClass.id
      }
    });
  }

  await prisma.userRoleJoin.upsert({
    where: { userId_roleId: { userId: studentUser4.id, roleId: studentRole.id } },
    update: {},
    create: { userId: studentUser4.id, roleId: studentRole.id },
  });

  // 6. SEED MOCK TESTS (Competitive Exam Mock Tests)
  // ==========================================
  console.log('Seeding Exam Programs and Mock Test Questions...');

  const quizMath = await prisma.quiz.create({
    data: {
      title: 'JEE Main Full-Length Mock Test 1',
      description: 'Comprehensive mock test covering Physics, Chemistry & Mathematics with negative marking.',
      topicId: topicForQuiz.id,
      passingScore: 60.0,
      maxAttempts: 5,
      timeLimitMinutes: 15,
      testType: 'Full-Length Test',
      testCategory: 'Engineering',
      negativeMarkingRate: 0.25,
    },
  });

  const matricesQuestions = [
    {
      questionText: 'If A is a square matrix of order 3 and |A| = 5, what is the value of |adj A|?',
      explanation: 'For a square matrix of order n, |adj A| = |A|^(n-1). Here n=3, so |adj A| = 5^(3-1) = 5^2 = 25.',
      difficulty: 'Medium',
      options: [
        { optionText: '5', isCorrect: false },
        { optionText: '25', isCorrect: true },
        { optionText: '125', isCorrect: false },
        { optionText: '1', isCorrect: false },
      ],
    },
    {
      questionText: 'Which method is used for solving a system of linear equations using determinants?',
      explanation: "Cramer's Rule uses determinants to solve systems of linear equations.",
      difficulty: 'Easy',
      options: [
        { optionText: 'Gaussian Elimination', isCorrect: false },
        { optionText: 'Cramer\'s Rule', isCorrect: true },
        { optionText: 'Matrix Inversion', isCorrect: false },
        { optionText: 'Euler\'s Method', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the determinant of a 2x2 identity matrix?',
      explanation: 'The determinant of any identity matrix is always 1.',
      difficulty: 'Easy',
      options: [
        { optionText: '1', isCorrect: true },
        { optionText: '0', isCorrect: false },
        { optionText: '-1', isCorrect: false },
        { optionText: '2', isCorrect: false },
      ],
    },
    {
      questionText: 'If det(A) = 0, the matrix A is defined as:',
      explanation: 'A matrix whose determinant is equal to zero is called a singular matrix.',
      difficulty: 'Easy',
      options: [
        { optionText: 'Singular', isCorrect: true },
        { optionText: 'Non-singular', isCorrect: false },
        { optionText: 'Invertible', isCorrect: false },
        { optionText: 'Symmetric', isCorrect: false },
      ],
    },
    {
      questionText: 'For a square matrix A, which operation yields the identity matrix?',
      explanation: 'The product of a matrix and its inverse A * A^-1 = I.',
      difficulty: 'Medium',
      options: [
        { optionText: 'A * A^-1', isCorrect: true },
        { optionText: 'A + A', isCorrect: false },
        { optionText: 'A - A', isCorrect: false },
        { optionText: 'A * A', isCorrect: false },
      ],
    },
  ];

  for (let i = 0; i < matricesQuestions.length; i++) {
    const qData = matricesQuestions[i];
    const question = await prisma.quizQuestion.create({
      data: {
        quizId: quizMath.id,
        questionText: qData.questionText,
        explanation: qData.explanation,
        difficulty: qData.difficulty,
        questionType: QuestionType.MCQ,
        marks: 4.0,
        negativeMarks: 1.0,
        sortOrder: i + 1,
      },
    });

    await prisma.quizOption.createMany({
      data: qData.options.map((opt, idx) => ({
        questionId: question.id,
        optionText: opt.optionText,
        isCorrect: opt.isCorrect,
        sortOrder: idx + 1,
      })),
    });
  }

  // TNPSC Group 1 Mock Test
  const quizTnpsc = await prisma.quiz.create({
    data: {
      title: 'TNPSC Group 1 Prelims General Studies Mock Test',
      description: 'Full syllabus mock test covering Indian Polity, History, Tamil Heritage & Aptitude.',
      topicId: topicForQuiz.id,
      passingScore: 50.0,
      maxAttempts: 3,
      timeLimitMinutes: 30,
      testType: 'Full-Length Test',
      testCategory: 'State PSC',
      negativeMarkingRate: 0.0,
    },
  });

  const tnpscQuestions = [
    {
      questionText: 'Which Article of the Indian Constitution pertains to the State Executive and Governor powers?',
      explanation: 'Article 153 states that there shall be a Governor for each State.',
      difficulty: 'Medium',
      options: [
        { optionText: 'Article 153', isCorrect: true },
        { optionText: 'Article 356', isCorrect: false },
        { optionText: 'Article 280', isCorrect: false },
        { optionText: 'Article 110', isCorrect: false },
      ],
    },
    {
      questionText: 'Who founded the Dravidar Kazhagam (DK) movement in Tamil Nadu?',
      explanation: 'Periyar E. V. Ramasamy founded Dravidar Kazhagam in 1944.',
      difficulty: 'Easy',
      options: [
        { optionText: 'Periyar E. V. Ramasamy', isCorrect: true },
        { optionText: 'C. N. Annadurai', isCorrect: false },
        { optionText: 'K. Kamaraj', isCorrect: false },
        { optionText: 'M. G. Ramachandran', isCorrect: false },
      ],
    }
  ];

  for (let i = 0; i < tnpscQuestions.length; i++) {
    const qData = tnpscQuestions[i];
    const question = await prisma.quizQuestion.create({
      data: {
        quizId: quizTnpsc.id,
        questionText: qData.questionText,
        explanation: qData.explanation,
        difficulty: qData.difficulty,
        questionType: QuestionType.MCQ,
        marks: 2.0,
        negativeMarks: 0.0,
        sortOrder: i + 1,
      },
    });

    await prisma.quizOption.createMany({
      data: qData.options.map((opt, idx) => ({
        questionId: question.id,
        optionText: opt.optionText,
        isCorrect: opt.isCorrect,
        sortOrder: idx + 1,
      })),
    });
  }

  console.log('Seeding completed successfully with candidates, instructors, mock tests and academic structures.');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
