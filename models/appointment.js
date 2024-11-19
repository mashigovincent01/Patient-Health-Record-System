const db = require('../config/db');

// Appointment Model
const Appointment = {
  create: (appointmentData, callback) => {
    const { patient_id, doctor_id, appointment_date, status } = appointmentData;
    db.query('INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, ?)',
      [patient_id, doctor_id, appointment_date, status], callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM appointments WHERE id = ?', [id], callback);
  },

  getByPatientId: (patient_id, callback) => {
    db.query('SELECT * FROM appointments WHERE patient_id = ?', [patient_id], callback);
  },

  getByDoctorId: (doctor_id, callback) => {
    db.query('SELECT * FROM appointments WHERE doctor_id = ?', [doctor_id], callback);
  },

  update: (id, appointmentData, callback) => {
    const { status, appointment_date } = appointmentData;
    db.query('UPDATE appointments SET status = ?, appointment_date = ? WHERE id = ?',
      [status, appointment_date, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM appointments WHERE id = ?', [id], callback);
  }
};

module.exports = Appointment;

