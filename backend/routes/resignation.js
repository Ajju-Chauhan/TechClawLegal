const express = require("express");
const Resignation = require("../models/Resignation");
const nodemailer = require("nodemailer");

const router = express.Router();

// Submit Resignation
router.post("/", async (req, res) => {
  try {
    const { employeeId, lastWorkingDay, reason } = req.body;
    
    const resignation = new Resignation({ employeeId, lastWorkingDay, reason });
    await resignation.save();

    res.json({ message: "Resignation submitted successfully", resignation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Resignations (HR only)
router.get("/", async (req, res) => {
  try {
    const resignations = await Resignation.find().populate("employeeId", "username");
    res.json(resignations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

