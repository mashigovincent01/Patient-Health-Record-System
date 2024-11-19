

const db = require('../config/db');

// Patient Model
const Patient = {
  create: (patientData, callback) => {
    const { user_id, name, date_of_birth, gender, contact_info, address } = patientData;
    db.query('INSERT INTO patients (user_id, name, date_of_birth, gender, contact_info, address) VALUES (?, ?, ?, ?, ?, ?)', 
      [user_id, name, date_of_birth, gender, contact_info, address], callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM patients WHERE id = ?', [id], callback);
  },

  update: (id, patientData, callback) => {
    const { name, date_of_birth, gender, contact_info, address } = patientData;
    db.query('UPDATE patients SET name = ?, date_of_birth = ?, gender = ?, contact_info = ?, address = ? WHERE id = ?',
      [name, date_of_birth, gender, contact_info, address, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM patients WHERE id = ?', [id], callback);
  }
};

module.exports = Patient;

