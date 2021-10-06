'use strict';

const express = require('express');
const router = express.Router();

const cars_controller = require('../controllers/carsController');

router.get('/', cars_controller.carList);
router.get('/*', cars_controller.carId);

module.exports = router;