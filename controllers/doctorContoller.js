const Doctor = require('../models/doctor');

exports.createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: 'Doctor created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating doctor' });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json({ message: 'All doctors', doctors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting doctors' });
  }
};

exports.getDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ message: 'Doctor found', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting doctor' });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ message: 'Doctor updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating doctor' });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    await Doctor.findByIdAndRemove(id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting doctor' });
  }
};