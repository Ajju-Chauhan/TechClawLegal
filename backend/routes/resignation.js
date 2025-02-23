import express from 'express';
import { submitResignation } from '../controllers/resignation.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/submit', authMiddleware, submitResignation);

export default router;
