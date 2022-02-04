const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => res.send('New Source'));

router.route('/edit')
    .get((req, res) => res.send('Edit a Source'))

module.exports = router;