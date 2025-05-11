const path = require('path');

// Application configuration
const NODE_ENV = 'test';
const APP_PORT = process.env.PORT || 3000;

// Database configuration
const DB_STORAGE = ':memory:';
const DB_DIALECT = 'sqlite';
const DB_CONFIG = {
  dialect: DB_DIALECT,
  storage: DB_STORAGE,
  logging: false,
};

// Database sync options
const DB_SYNC_OPTIONS = { force: true };

module.exports = {
  NODE_ENV,
  APP_PORT,
  DB_CONFIG,
  DB_SYNC_OPTIONS,
};
