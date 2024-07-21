const Patient = require('../models/patient');

exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().exec();
    res.send(patients);
  } catch (error) {
    res.status(500).send(error);
  }
};