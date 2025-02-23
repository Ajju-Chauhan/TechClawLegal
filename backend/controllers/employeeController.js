import Employee from '../models/Employee.js';
import Resignation from '../models/Resignation.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerEmployee = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const employee = new Employee({ username, password: hashedPassword });
        await employee.save();
        res.status(201).json({ message: 'Employee registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed' });
    }
};

export const loginEmployee = async (req, res) => {
    try {
        const { username, password } = req.body;
        const employee = await Employee.findOne({ username });
        if (!employee || !(await bcrypt.compare(password, employee.password)))
            return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: employee._id, role: 'Employee' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, role: 'Employee' });
    } catch (error) {
        res.status(500).json({ message: 'Login failed' });
    }
};

export const submitResignation = async (req, res) => {
    try {
        const resignation = new Resignation({ employeeId: req.user.id, reason: req.body.reason });
        await resignation.save();
        res.status(201).json({ message: 'Resignation submitted' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting resignation' });
    }
};
