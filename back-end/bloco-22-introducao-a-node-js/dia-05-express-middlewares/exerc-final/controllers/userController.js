const express = require('express');
const checkInfo = require('../middlewares/checkInfo');
const checkLogin = require('../middlewares/checkLogin')

const router = express.Router();

router.post('/register',checkInfo);
router.post('/login', checkLogin);

module.exports = router