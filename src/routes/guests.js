const express = require('express');
const router = express.Router();
const { getAllGuests, createGuest } = require('../controllers/guestsController');

router.get('/', getAllGuests);
router.post('/', createGuest);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);

module.exports = router;
