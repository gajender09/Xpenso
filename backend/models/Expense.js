const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  convertedAmount: { type: Number },
  category: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  receipt: { type: String }, // URL or path to receipt
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  approvals: [{
    approver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'] },
    comment: { type: String },
    date: { type: Date }
  }],
});

module.exports = mongoose.model('Expense', expenseSchema);