const util = require('util');
const exec = util.promisify(require('child_process').exec);
const config = require('../../config.json');

const user = config.user;
const home = `${config.home}/${user}/`;

module.exports.ls = async (dir='Downloads/', filetype='*.zip') => {
    console.log('begin ls');
    const { stdout=undefined, stderr=undefined } = await exec(`ls ${home}${dir}${filetype}`)
        .catch(err => err);

    return { stdout, stderr };
};