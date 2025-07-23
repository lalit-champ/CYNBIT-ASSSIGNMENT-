const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../controllers/studentController');

// Route: GET /api/students
router.get('/students', getAllStudents);

module.exports = router;
