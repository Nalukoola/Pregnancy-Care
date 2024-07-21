const Patient = require('../models/patient');

exports.createPatient = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    medicalHistory,
    pregnancyDetails,
  } = req.body;

  const patient = new Patient({
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    medicalHistory,
    pregnancyDetails,
  });
  try {
    const result = await patient.save();
    res.send({ message: 'Patient created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error creating patient' });
  }
};

exports.getPatient = async (req, res) => {
  try {
    const id = req.params.id;
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).send({ message: 'Patient not found' });
    }
    res.send(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error retrieving patient' });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const id = req.params.id;
    const patient = await Patient.findByIdAndRemove(id);
    if (!patient) {
      return res.status(404).send({ message: 'Patient not found' });
    }
    res.send({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error deleting patient' });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const patient = await Patient.findByIdAndUpdate(id, updates, { new: true });
    if (!patient) {
      return res.status(404).send({ message: 'Patient not found' });
    }
    res.send(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error updating patient' });
  }
};