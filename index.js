const { copyFilesAsync } = require('./src');

module.exports = new Promise((resolve, reject) => {
    resolve(copyFilesAsync())
});




