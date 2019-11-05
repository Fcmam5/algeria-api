const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'algeriaApiApp' });

module.exports = logger;
