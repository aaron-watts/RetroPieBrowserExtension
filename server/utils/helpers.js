module.exports.format = list => {
    return list.split('\n')
        .filter(file => file.length)
        .map(file => file.replace('/home/aaron/Downloads/', ''));
};