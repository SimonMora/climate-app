const argv = require('yargs').option({
    direction: {
        desc:'direction where to climate.',
        alias: 'd',
        demand: true
    }
}).argv;

module.exports = { argv };