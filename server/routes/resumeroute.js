const express = require('express');
const router = express.Router();
const Information = require('../models/resumemodel');

router.post('/resumemodel', async (req, res) => {
  try {
    const newInformation = new Information({
      name: req.body.name,
      title: req.body.title,
      linkedin: req.body.linkedin,
      github: req.body.github,
      phone: req.body.phone,
      email: req.body.email,
    });

    await newInformation.save();
    res.status(201).json({ message: 'Information saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save information' });
  }
});

module.exports = router;
