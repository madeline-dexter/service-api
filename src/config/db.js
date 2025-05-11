const path = require('path');
const { SQLITE_PATH } = require('./env');

// Define database configuration
const DB_DATABASE = process.env.DB_DATABASE || 'user';
const DB_USERNAME = process.env.DB_USERNAME || 'admin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_DIALECT = process.env.DB_DIALECT || 'sqlite';

const DB_STORAGE = path.join(__dirname, `../../${SQLITE_PATH}`);
const DB_CONFIG = { dialect: DB_DIALECT };

if (DB_DIALECT === 'sqlite') {
    DB_CONFIG.storage = DB_STORAGE
} else {
    DB_CONFIG.database = DB_DATABASE;
    DB_CONFIG.username = DB_USERNAME;
    DB_CONFIG.password = DB_PASSWORD;
    DB_CONFIG.host = DB_HOST;
    DB_CONFIG.port = DB_PORT;
};

// Define Sequelize database sync option
const DB_SYNC_OPTIONS = { force: true };

module.exports = { DB_CONFIG, DB_SYNC_OPTIONS };