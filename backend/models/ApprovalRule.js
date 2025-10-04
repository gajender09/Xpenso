const mongoose = require('mongoose');

const approvalRuleSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  threshold: { type: Number },
  approvers: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, sequence: Number }],
  conditional: {
    percentage: { type: Number },
    specificApprover: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    hybrid: { type: Boolean, default: false }
  },
});

module.exports = mongoose.model('ApprovalRule', approvalRuleSchema);