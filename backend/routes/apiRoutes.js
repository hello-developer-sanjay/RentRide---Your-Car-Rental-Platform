const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
