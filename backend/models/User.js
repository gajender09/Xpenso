const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Manager', 'Employee'], required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // For employees
  isManagerApprover: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);