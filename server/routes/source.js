const express = require('express');
const router = express.Router();
const source = require('../controllers/source');

router.route('/')
    .get(source.get)
    .post(source.post);

router.route('/:id')
    .get(source.getEdit)
    .put(source.update);

module.exports = router;