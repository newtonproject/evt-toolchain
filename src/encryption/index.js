const call = require('./call')

module.exports = function(fn, args) {
    call[fn](...args)
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
}
