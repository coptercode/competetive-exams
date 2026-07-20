const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkAssignments() {
  try {
    const assignments = await prisma.assignment.findMany({
      include: {
        topic: {
          include: {
            chapter: {
              include: {
                unit: {
                  include: {
                    subject: {
                      include: {
                        class: true
                      }
                    }
                  }
                }
              }
            }
          }
        },
        submissions: {
          include: {
            feedback: {
              include: {
                teacher: {
                  include: {
                    user: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: { deadline: 'asc' }
    });

    assignments.forEach(a => {
      const className = a.topic?.chapter?.unit?.subject?.class?.name;
      console.log('Assignment:', a.id, 'Class:', className);
    });
    
    console.log('Assignments check passed.');
  } catch (err) {
    console.error('Assignments error:', err);
  }

  try {
    const notes = await prisma.courseNote.findMany({
      include: {
        topic: {
          include: {
            chapter: {
              include: {
                unit: {
                  include: {
                    subject: { select: { name: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    
    notes.forEach(n => {
      const subjectTitle = n.subjectTitle || n.topic?.chapter?.unit?.subject?.name || 'General';
      console.log('Note:', n.id, 'Subject:', subjectTitle);
    });

    console.log('Notes check passed.');
  } catch (err) {
    console.error('Notes error:', err);
  }
  
  process.exit(0);
}

checkAssignments();
