const db = require('../db');

module.exports.get = (req, res) => res.render('source');

module.exports.post = async (req, res) => {
    const { source } = req.body;

    db.addOne('source', source);

    return res.redirect('/');
};