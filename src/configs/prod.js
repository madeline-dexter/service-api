const { Sequelize } = require('sequelize');

// Application configuration
const NODE_ENV = 'prod';
const APP_PORT = process.env.PORT || 3000;

// Database configuration
const DB_DATABASE = process.env.DB_DATABASE || 'user';
const DB_USERNAME = process.env.DB_USERNAME || 'admin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_DIALECT = process.env.DB_DIALECT || 'mysql';
const DB_CONFIG = {
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
};

// Database sync options
const DB_SYNC_OPTIONS = { alter: true };

module.exports = {
  NODE_ENV,
  APP_PORT,
  DB_CONFIG,
  DB_SYNC_OPTIONS,
};
