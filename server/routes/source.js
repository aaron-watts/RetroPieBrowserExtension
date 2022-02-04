const express = require('express');
const router = express.Router();
const helpers = require('../controllers/source');

router.route('/')
    .get(helpers.get)
    .post(helpers.post);

router.route('/edit')
    .get((req, res) => res.send('Edit a Source'))

module.exports = router;