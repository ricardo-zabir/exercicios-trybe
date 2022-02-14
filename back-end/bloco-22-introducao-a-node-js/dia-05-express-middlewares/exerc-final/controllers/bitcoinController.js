const express = require('express');
const getBTCPrice = require('../middlewares/getBTCPrice');

const router = express.Router();

router.get('/price', getBTCPrice);

module.exports = router;