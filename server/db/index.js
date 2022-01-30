const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const dbFile = './retropieExt.db';

const dbPromise = open({
    filename: dbFile,
    driver: sqlite3.Database
});

module.exports.setupDatabase = async () => {
    const db = await dbPromise;
    await db.migrate();
};

module.exports.addSource = async (source) => {
    const db = await dbPromise;
    const sql = 'INSERT INTO source (name, url) VALUES (?, ?);';
    return await db.run(sql, ['one', 'two']);
};