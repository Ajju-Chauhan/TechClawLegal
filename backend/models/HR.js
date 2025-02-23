import mongoose from 'mongoose';

const hrSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, default: 'HR' }
});

export default mongoose.model('HR', hrSchema);
