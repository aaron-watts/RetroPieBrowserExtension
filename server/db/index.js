const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const { formatQuery } = require('./utils');

/*
SQLite NodeJS Docs: https://github.com/kriasoft/node-sqlite#readme
*/

const dbFile = './retropieExt.db';

const dbPromise = open({
    filename: dbFile,
    driver: sqlite3.Database
});

module.exports.setupDatabase = async () => {
    const db = await dbPromise;
    await db.migrate();
};

module.exports.addOne = async (table, data) => {
    const db = await dbPromise;

    const fields = Object.keys(data);
    const query = /* sql */`INSERT INTO ${table} ${formatQuery(fields)}`;

    return await db.run(query, fields.map(i => data[i]));
};

module.exports.getAll = async (table) => {
    const db = await dbPromise;
    const query = /* sql */`SELECT * FROM ${table}`

    return await db.all(query);
};

module.exports.getOne = async (table, id) => {
    const db = await dbPromise;
    const query = /* sql */`
        SELECT * FROM ${table} 
        WHERE id = :id
    `;

    return await db.get(query, {':id' : id});
};

module.exports.updateOne = async (table, _data) => {
    const db = await dbPromise;
    const data = {
        ':id' : _data.id,
        ':name' : _data.name,
        ':url' : _data.url
    };
    const query = /* sql */`
        UPDATE ${table} 
        SET name = :name, url = :url 
        WHERE id = :id
    `;

    return await db.run(query, data);;
};

module.exports.deleteOne = async (table, id) => {
    const db = await dbPromise;
    const query = /* sql */`
        DELETE FROM ${table}
        WHERE id = :id
    `;

    return await db.run(query, { ':id' : id });
};