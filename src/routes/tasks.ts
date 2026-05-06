import { Router, Response } from 'express';
import Task from '../models/Task';
import { protect, AuthRequest } from '../middleware/authMiddleware';

const router = Router();


router.use(protect);

// GET TASK
router.get('/', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

// CREATE TASK
router.post('/', async (req: AuthRequest, res: Response): Promise<void> => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400).json({ message: 'Title is required' });
    return;
  }

  try {
    const task = await Task.create({ userId: req.userId, title, description });
    res.status(201).json(task);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE TASK
router.patch('/:id', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: req.body },
      { new: true }
    );
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.json(task);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE TASK
router.delete('/:id', async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.json({ message: 'Task deleted' });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;