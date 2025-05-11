// Load the config based on the environment
const NODE_ENV = process.env.NODE_ENV || 'local';
const config = require(`./configs/${NODE_ENV}`);

module.exports = config;
