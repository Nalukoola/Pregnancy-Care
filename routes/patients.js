router.delete('/:id', async (req, res) => {
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
  });