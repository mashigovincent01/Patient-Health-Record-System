const db = require('../config/db');

// Medical Record Model
const MedicalRecord = {
  create: (recordData, callback) => {
    const { patient_id, doctor_id, diagnosis, treatment, notes, record_date } = recordData;
    db.query('INSERT INTO medical_records (patient_id, doctor_id, diagnosis, treatment, notes, record_date) VALUES (?, ?, ?, ?, ?, ?)',
      [patient_id, doctor_id, diagnosis, treatment, notes, record_date], callback);
  },

  getByPatientId: (patient_id, callback) => {
    db.query('SELECT * FROM medical_records WHERE patient_id = ?', [patient_id], callback);
  },

  getByDoctorId: (doctor_id, callback) => {
    db.query('SELECT * FROM medical_records WHERE doctor_id = ?', [doctor_id], callback);
  },

  update: (id, recordData, callback) => {
    const { diagnosis, treatment, notes, record_date } = recordData;
    db.query('UPDATE medical_records SET diagnosis = ?, treatment = ?, notes = ?, record_date = ? WHERE id = ?',
      [diagnosis, treatment, notes, record_date, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM medical_records WHERE id = ?', [id], callback);
  }
};

module.exports = MedicalRecord;
