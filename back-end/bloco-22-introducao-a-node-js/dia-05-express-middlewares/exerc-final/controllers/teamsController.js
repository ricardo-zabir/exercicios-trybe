const express = require('express');
const postTeam = require('../middlewares/postTeam');
const getTeams = require('../middlewares/getTeams');
const router = express.Router();

router.post('/',postTeam);
router.get('/',getTeams)

module.exports = router;