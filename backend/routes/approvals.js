const express = require('express');
const Expense = require('../models/Expense');
const ApprovalRule = require('../models/ApprovalRule');
const User = require('../models/User');
const router = express.Router();

// router.use(require('./authMiddleware'));

router.post('/:expenseId/action', async (req, res) => {
  const { status, comment } = req.body;
  try {
    const expense = await Expense.findById(req.params.expenseId);
    const approvalIndex = expense.approvals.findIndex(a => a.approver.toString() === req.userId.toString() && a.status === 'Pending');
    if (approvalIndex === -1) return res.status(403).json({ error: 'Not your approval' });

    expense.approvals[approvalIndex].status = status;
    expense.approvals[approvalIndex].comment = comment;
    expense.approvals[approvalIndex].date = new Date();

    const rule = await ApprovalRule.findOne({ company: expense.company });
    if (status === 'Rejected') {
      expense.status = 'Rejected';
    } else {
      const approvedCount = expense.approvals.filter(a => a.status === 'Approved').length;
      const totalApprovers = expense.approvals.length;
      const percentageApproved = (approvedCount / totalApprovers) * 100;

      if (rule.conditional.specificApprover && expense.approvals.some(a => a.approver.toString() === rule.conditional.specificApprover.toString() && a.status === 'Approved')) {
        expense.status = 'Approved';
      } else if (rule.conditional.percentage && percentageApproved >= rule.conditional.percentage) {
        expense.status = 'Approved';
      } else if (rule.conditional.hybrid && (percentageApproved >= rule.conditional.percentage || expense.approvals.some(a => a.approver.toString() === rule.conditional.specificApprover.toString() && a.status === 'Approved'))) {
        expense.status = 'Approved';
      } else if (approvalIndex === expense.approvals.length - 1) {
        expense.status = 'Approved';
      }
    }

    await expense.save();
    res.json({ message: 'Approval updated', status: expense.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/pending', async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user.role === 'Employee') return res.status(403).json({ error: 'Unauthorized' });
    const expenses = await Expense.find({ 'approvals.approver': req.userId, 'approvals.status': 'Pending' });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;