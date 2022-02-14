const express = require('express');
const getPostsById = require('../middlewares/getPostsById');
const getPosts = require('../middlewares/getPosts');

const router = express.Router();

router.get('/:id',getPostsById);
router.get('/',getPosts);

module.exports = router;