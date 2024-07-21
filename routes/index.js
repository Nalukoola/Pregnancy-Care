const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const doctorController = require('../controllers/doctorController');

router.get('/', (req, res) => {
  res.send('Welcome to the Comprehensive Health Management System API');
});

router.post('/patients', patientController.createPatient);
router.get('/patients', patientController.getPatients);
router.post('/doctors', doctorController.createDoctor);
router.get('/doctors', doctorController.getDoctors);

module.exports = router;