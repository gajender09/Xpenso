const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Company = require('../models/Company'); // Assuming you have a Company model
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
  try {
    const { email, password, country } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create company if needed (demo logic)
    let company = await Company.findOne({ country });
    if (!company) {
      company = await Company.create({ country });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      role: 'Admin',
      company: company._id,
    });

    // Respond with token (demo, not secure)
    res.json({ token: 'demo-token', userId: user._id });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
});

module.exports = router;