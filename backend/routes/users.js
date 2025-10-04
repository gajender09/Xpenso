const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.userId = decoded.userId;
    next();
  });
};

router.use(authMiddleware);

router.post('/create', async (req, res) => {
  const { email, password, role, managerId } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (user.role !== 'Admin') return res.status(403).json({ error: 'Unauthorized' });

    const hashedPw = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashedPw, role, company: user.company, manager: managerId });
    await newUser.save();
    res.status(201).json({ message: 'User created', user: { email, role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;