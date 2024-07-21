const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/patientController');

router.post('/doctors', patientController.createPatient);
router.get('/doctors', patientController.getPatient);
router.get('/doctors/:id', patientController.getPatients);
router.patch('/doctors/:id', patientController.updatePatient);
router.delete('/doctors/:id', patientController.deletePatient);

module.exports = router;