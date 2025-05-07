const { Sequelize } = require('sequelize');

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const DB_DATABASE = process.env.DB_DATABASE || 'user';
const DB_USERNAME = process.env.DB_USERNAME || 'admin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_DIALECT = process.env.DB_DIALECT || 'mysql';
const DB_LOGGING = NODE_ENV !== 'test' ? console.log : false;

const db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: DB_LOGGING,
});

const dbSyncOptions = { alter: true };

module.exports = { db, PORT };
