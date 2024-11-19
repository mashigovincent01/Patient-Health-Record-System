const db = require('../config/db');

// Doctor Model
const Doctor = {
  create: (doctorData, callback) => {
    const { user_id, name, specialization, contact_info } = doctorData;
    db.query('INSERT INTO doctors (user_id, name, specialization, contact_info) VALUES (?, ?, ?, ?)',
      [user_id, name, specialization, contact_info], callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM doctors WHERE id = ?', [id], callback);
  },

  update: (id, doctorData, callback) => {
    const { name, specialization, contact_info } = doctorData;
    db.query('UPDATE doctors SET name = ?, specialization = ?, contact_info = ? WHERE id = ?',
      [name, specialization, contact_info, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM doctors WHERE id = ?', [id], callback);
  }
};

module.exports = Doctor;
