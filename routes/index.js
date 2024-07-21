const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', (req, res) => {
    res.send('Welcome to the Comprehensive Health Management System API');
  });
router.post('/patients', patientController.createPatient);
router.get('/patients', patientController.getPatients);

module.exports = router;