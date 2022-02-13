const express = require('express');

const router = express.Router();

router.get('/', ((_req, res,_) => {
    return res.status(200).send('Pong');
}));

module.exports = router;