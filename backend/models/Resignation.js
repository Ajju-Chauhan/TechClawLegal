const mongoose = require("mongoose");

const ResignationSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lastWorkingDay: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
  exitInterviewCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Resignation", ResignationSchema);
