import mongoose from 'mongoose';

const resignationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    submittedAt: { type: Date, default: Date.now }
});

// Check if model already exists before defining it again
const Resignation = mongoose.models.Resignation || mongoose.model('Resignation', resignationSchema);

export default Resignation;
