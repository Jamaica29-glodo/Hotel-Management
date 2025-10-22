const Guest = require('../models/Guest');

exports.getAllGuests = async (req, res) => {
  const guests = await Guest.find();
  res.json(guests);
};

exports.createGuest = async (req, res) => {
  try {
    const newGuest = new Guest(req.body);
    await newGuest.save();
    res.status(201).json(newGuest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
