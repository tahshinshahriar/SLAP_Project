// routes/auth.js
const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/authController');

// Login route
router.post('/login', login);

// Logout route (in JWT, we just delete the token client-side)
router.post('/logout', logout);

module.exports = router;
