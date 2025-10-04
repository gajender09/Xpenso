const express = require('express');
const ApprovalRule = require('../models/ApprovalRule');
const router = express.Router();

// router.use(require('./authMiddleware'));

router.post('/create', async (req, res) => {
  const { threshold, percentage, specificApprover, hybrid, approvers } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (user.role !== 'Admin') return res.status(403).json({ error: 'Unauthorized' });

    const rule = new ApprovalRule({
      company: user.company,
      threshold,
      conditional: { percentage, specificApprover, hybrid },
      approvers,
    });
    await rule.save();
    res.status(201).json(rule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;