import express from 'express';
import { registerHR, loginHR, viewResignations } from '../controllers/hrController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerHR);
router.post('/login', loginHR);
router.get('/resignations', authMiddleware, viewResignations);

export default router;
