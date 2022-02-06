module.exports.formatQuery = (data) => {
    return `(${data.map(i => ` ${i}`).join(',')}) 
        VALUES (${data.map(i => ` ?`).join(',')} )`;
};