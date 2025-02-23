require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
require('dotenv').config(); // Load environment variables

const mongoURI = process.env.MONGO_URI; // Ensure this is defined
console.log('MongoDB URI:', mongoURI);


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
// Routes
const authRoutes = require("./routes/auth");
const resignationRoutes = require("./routes/resignation");

app.use("/api/auth", authRoutes);
app.use("/api/resignations", resignationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
