const express = require('express');
const router = express.Router();
const { getAllGuests, createGuest } = require('../controllers/guestsController');

router.get('/', getAllGuests);
router.post('/', createGuest);

module.exports = router;
