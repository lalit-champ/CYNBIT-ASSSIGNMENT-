const pool = require('../db');

exports.getAllStudents = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send('Login first');
  }
  try {
    const result = await pool.query('SELECT id, name, email, branch, year FROM students');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
