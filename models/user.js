const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Model
const User = {
  register: (userData, callback) => {
    const { username, password, role } = userData;
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role], callback);
  },
  
  login: (username, password, callback) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
      if (err) {
        return callback(err);
      }
      if (result.length === 0) {
        return callback(null, false); // User not found
      }
      const user = result[0];
      bcrypt.compare(password, user.password, (err, match) => {
        if (err || !match) {
          return callback(null, false); // Incorrect password
        }
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        callback(null, { user, token });
      });
    });
  },

  findById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  }
};

module.exports = User;