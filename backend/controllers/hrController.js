import Resignation from '../models/Resignation.js';
import HR from '../models/HR.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerHR = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const hr = new HR({ username, password: hashedPassword });
        await hr.save();
        res.status(201).json({ message: 'HR registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed' });
    }
};

export const loginHR = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hr = await HR.findOne({ username });
        if (!hr || !(await bcrypt.compare(password, hr.password)))
            return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: hr._id, role: 'HR' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, role: 'HR' });
    } catch (error) {
        res.status(500).json({ message: 'Login failed' });
    }
};

export const viewResignations = async (req, res) => {
    try {
        const resignations = await Resignation.find().populate('employeeId', 'username');
        res.json(resignations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resignations' });
    }
};
