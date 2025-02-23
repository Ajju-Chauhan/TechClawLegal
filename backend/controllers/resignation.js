import Resignation from '../models/resignationmodel.js';

export const submitResignation = async (req, res) => {
    try {
        const { reason, lastWorkingDay } = req.body;
        const userId = req.user.id; // Extracted from JWT token

        if (!reason || !lastWorkingDay) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const resignation = new Resignation({
            userId,
            reason,
            lastWorkingDay
        });

        await resignation.save();
        res.status(201).json({ message: "Resignation submitted successfully." });

    } catch (error) {
        console.error("Resignation Submission Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
