const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const dbFile = './retropieExt.db';

const dbPromise = open({
    filename: dbFile,
    driver: sqlite3.Database
});

const formatQuery = (data) => {
    return `(${data.map(i => ` ${i}`).join(',')}) 
        VALUES (${data.map(i => ` ?`).join(',')} )`;
};

module.exports.setupDatabase = async () => {
    const db = await dbPromise;
    await db.migrate();
};

module.exports.addOne = async (table, data) => {
    const db = await dbPromise;

    const fields = Object.keys(data);
    const query = `INSERT INTO ${table} ${formatQuery(fields)}`;

    const result = await db.run(query, fields.map(i => data[i]));
};

module.exports.getData = async (table) => {
    const db = await dbPromise;
    const query = `SELECT * FROM ${table}`

    return await db.all(query);
}