const db = require('../db');

module.exports.get = (req, res) => res.render('source', { source:null });

module.exports.post = async (req, res) => {
    const { source } = req.body;

    db.addOne('source', source);

    return res.redirect('/');
};

module.exports.getEdit = async (req, res) => {
    const { id } = req.params;

    const source = await db.getOne('source', id);

    res.render('source', { source });
};

module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { source } = req.body;

    const data = {
        id,
        ...source
    };

    const updated = await db.updateOne('source', data);
    
    return res.redirect('/');
}