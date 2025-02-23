import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, default: 'Employee' }
});

export default mongoose.model('Employee', employeeSchema);
