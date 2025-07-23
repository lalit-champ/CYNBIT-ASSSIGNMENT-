const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Route: POST /api/register
router.post('/register', register);

// Route: POST /api/login
router.post('/login', login);

module.exports = router;
