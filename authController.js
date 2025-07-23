const pool = require('../db');       // DB connect
const bcrypt = require('bcrypt');    // Password secure karne ke liye

// Register Controller
exports.register = async (req, res) => {
  const { name, email, password, branch, year } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);  // password encrypt
    await pool.query(
      'INSERT INTO students (name, email, password, branch, year) VALUES ($1, $2, $3, $4, $5)',
      [name, email, hashed, branch, year]
    );
    res.status(201).send('Student registered');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM students WHERE email = $1', [email]);
    if (result.rows.length === 0) return res.status(404).send('User not found');

    const isMatch = await bcrypt.compare(password, result.rows[0].password);
    if (!isMatch) return res.status(401).send('Wrong password');

    req.session.userId = result.rows[0].id;  // session me store
    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
