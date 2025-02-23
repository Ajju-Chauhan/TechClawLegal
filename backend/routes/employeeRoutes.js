import express from 'express';
import { registerEmployee, loginEmployee, submitResignation } from '../controllers/employeeController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerEmployee);
router.post('/login', loginEmployee);
router.post('/resignation', authMiddleware, submitResignation);

export default router;
