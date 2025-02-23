import mongoose from 'mongoose';

const resignationSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    reason: String,
    status: { type: String, default: 'Pending' },
});

export default mongoose.model('Resignation', resignationSchema);
