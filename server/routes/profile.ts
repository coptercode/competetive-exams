import { Router } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// GET candidate profile details from database
router.get('/profile', requireAuth, async (req, res) => {
  try {
    const userId = (req as any).user?.userId;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        studentProfile: true,
        teacherProfile: true,
        dailyActivityLogs: {
          orderBy: { createdAt: 'desc' },
          take: 30,
        },
        instructorRemarks: {
          orderBy: { createdAt: 'desc' },
        },
        candidateValidations: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    return res.json({
      success: true,
      profile: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        name: `${user.firstName} ${user.lastName}`.trim(),
        phoneNumber: user.phoneNumber || '',
        location: user.location || '',
        avatarUrl: user.avatarUrl || '',
        medium: user.medium || 'Bilingual',
        targetExam: user.targetExam || 'TNPSC Group 1 & JEE Main 2026',
        qualification: user.qualification || 'B.Tech Electrical / Class 12 Scholar',
        totalHoursSpent: (user as any).totalHoursSpent || 34.5,
        todayHoursSpent: (user as any).todayHoursSpent || 2.8,
        isBlocked: (user as any).isBlocked || false,
        blockedReason: (user as any).blockedReason || null,
        consecutiveLowActivityDays: (user as any).consecutiveLowActivityDays || 0,
        apologyNote: (user as any).apologyNote || null,
        apologySubmittedAt: (user as any).apologySubmittedAt || null,
        dailyActivity: user.dailyActivityLogs || [],
        remarks: user.instructorRemarks || [],
        validations: user.candidateValidations || [],
      },
    });
  } catch (err: any) {
    console.error('[server] Failed to fetch candidate profile:', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

// POST submit candidate apology note & call support request
router.post('/profile/apology', async (req, res) => {
  try {
    const { userId, email, apologyNote } = req.body;
    if (!apologyNote) {
      return res.status(400).json({ error: 'Apology note text is required' });
    }

    let targetUser;
    if (userId) {
      targetUser = await prisma.user.findUnique({ where: { id: userId } });
    } else if (email) {
      targetUser = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    }

    if (!targetUser) {
      return res.status(404).json({ error: 'Candidate account not found' });
    }

    const updated = await prisma.user.update({
      where: { id: targetUser.id },
      data: {
        apologyNote,
        apologySubmittedAt: new Date(),
      } as any,
    });

    return res.json({
      success: true,
      message: 'Apology note & call support request submitted to Super Admin for unblock review.',
      user: updated,
    });
  } catch (err: any) {
    console.error('[server] Failed to submit apology note:', err);
    return res.status(500).json({ error: err.message || 'Failed to submit apology note' });
  }
});

// PUT Admin approve & unblock candidate account
router.put('/admin/unblock-user', requireAuth, async (req, res) => {
  try {
    const { userId, adminName } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'Target userId required' });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        isBlocked: false,
        blockedReason: null,
        consecutiveLowActivityDays: 0,
        unblockedBy: adminName || 'Super Admin',
        unblockedAt: new Date(),
      } as any,
    });

    return res.json({
      success: true,
      message: 'Candidate account approved and unblocked successfully by Admin.',
      user: updatedUser,
    });
  } catch (err: any) {
    console.error('[server] Failed to unblock user:', err);
    return res.status(500).json({ error: err.message || 'Failed to unblock user' });
  }
});

// PUT update candidate profile fields & photo avatar in database
router.put('/profile', requireAuth, async (req, res) => {
  try {
    const userId = (req as any).user?.userId;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const {
      firstName,
      lastName,
      phoneNumber,
      location,
      avatarUrl,
      medium,
      targetExam,
      qualification,
    } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(phoneNumber !== undefined && { phoneNumber }),
        ...(location !== undefined && { location }),
        ...(avatarUrl !== undefined && { avatarUrl }),
        ...(medium !== undefined && { medium }),
        ...(targetExam !== undefined && { targetExam }),
        ...(qualification !== undefined && { qualification }),
      },
    });

    return res.json({
      success: true,
      user: updatedUser,
      message: 'Profile updated in database successfully',
    });
  } catch (err: any) {
    console.error('[server] Failed to update profile:', err);
    return res.status(500).json({ error: err.message || 'Failed to update profile' });
  }
});

// POST add new instructor remark for candidate in database
router.post('/profile/remarks', requireAuth, async (req, res) => {
  try {
    const { studentId, instructorName, text, category, type } = req.body;
    const targetUserId = studentId || (req as any).user?.userId;

    if (!targetUserId || !text) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const remark = await (prisma as any).instructorRemark.create({
      data: {
        userId: targetUserId,
        instructorName: instructorName || 'Faculty Mentor',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        text,
        category: category || 'Performance',
        type: type || 'positive',
      },
    });

    return res.json({ success: true, remark });
  } catch (err: any) {
    console.error('[server] Failed to add instructor remark:', err);
    return res.status(500).json({ error: err.message || 'Failed to add remark' });
  }
});

// PUT toggle candidate validation item status in database
router.put('/profile/validations', requireAuth, async (req, res) => {
  try {
    const { validationId, isValidated, validatorName } = req.body;

    if (!validationId) {
      return res.status(400).json({ error: 'Validation ID required' });
    }

    const updated = await (prisma as any).candidateValidation.update({
      where: { id: validationId },
      data: {
        isValidated,
        validatedBy: isValidated ? (validatorName || 'Instructor / Administrator') : null,
        validatedAt: isValidated ? new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : null,
      },
    });

    return res.json({ success: true, validation: updated });
  } catch (err: any) {
    console.error('[server] Failed to update validation status:', err);
    return res.status(500).json({ error: err.message || 'Failed to update validation' });
  }
});

// POST increment study time and log daily activity in database
router.post('/profile/hours', requireAuth, async (req, res) => {
  try {
    const userId = (req as any).user?.userId;
    const minutes = Number(req.body.minutes) || 1;
    const hoursToAdd = minutes / 60;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newTotal = ((user as any).totalHoursSpent || 34.5) + hoursToAdd;
    const newToday = ((user as any).todayHoursSpent || 2.8) + hoursToAdd;

    await prisma.user.update({
      where: { id: userId },
      data: {
        totalHoursSpent: newTotal,
        todayHoursSpent: newToday,
      } as any,
    });

    const todayStr = new Date().toISOString().split('T')[0];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = dayNames[new Date().getDay()];

    await (prisma as any).dailyActivityLog.upsert({
      where: {
        userId_date: {
          userId,
          date: todayStr,
        },
      },
      update: {
        hoursSpent: { increment: hoursToAdd },
      },
      create: {
        userId,
        date: todayStr,
        dayName,
        hoursSpent: hoursToAdd,
        quizzesCompleted: 1,
        topicsCompleted: 2,
        scorePercentage: 90,
      },
    });

    return res.json({ success: true, totalHoursSpent: newTotal, todayHoursSpent: newToday });
  } catch (err: any) {
    console.error('[server] Failed to log study hours:', err);
    return res.status(500).json({ error: err.message || 'Failed to log hours' });
  }
});

export default router;
