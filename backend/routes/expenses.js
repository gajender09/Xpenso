const express = require('express');
const multer = require('multer');
const axios = require('axios');
const Expense = require('../models/Expense');
const User = require('../models/User');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });


// router.use(require('./authMiddleware')); // Reuse authMiddleware

router.post('/submit', upload.single('receipt'), async (req, res) => {
  const { amount, currency, category, description, date } = req.body;
  try {
    const user = await User.findById(req.userId);
    const company = await User.findById(req.userId).populate('company');

    const { data } = await axios.get(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    const convertedAmount = parseFloat(amount) * (data.rates[company.company.currency] || 1);

    const expense = new Expense({
      user: req.userId,
      company: company.company._id,
      amount: parseFloat(amount),
      currency,
      convertedAmount,
      category,
      description,
      date,
      receipt: req.file ? req.file.path : null,
    });

    const rule = await require('../models/ApprovalRule').findOne({ company: company.company._id });
    if (rule) {
      let approvals = rule.approvers.map(a => ({ approver: a.user, status: 'Pending' }));
      if (user.isManagerApprover && user.manager) {
        approvals.unshift({ approver: user.manager, status: 'Pending' });
      }
      expense.approvals = approvals;
    }

    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/my-expenses', async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;