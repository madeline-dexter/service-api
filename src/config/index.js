const envConfig = require('./env');
const dbConfig = require('./db');

module.exports = {
  ...envConfig,
  ...dbConfig,
};
