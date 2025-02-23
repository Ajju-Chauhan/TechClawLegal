const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Hardcoded HR credentials
const HR_CREDENTIALS = { username: "admin", password: "admin", role: "HR" };

// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === HR_CREDENTIALS.username && password === HR_CREDENTIALS.password) {
    const token = jwt.sign({ username, role: "HR" }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token, role: "HR" });
  }

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, role: user.role });
});

module.exports = router;
