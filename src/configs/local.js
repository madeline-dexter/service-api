const path = require('path');
const { Sequelize } = require('sequelize');

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const DB_STORAGE = path.join(__dirname, '../../local.db');
const DB_LOGGING = NODE_ENV !== 'test' ? console.log : false;

const db = new Sequelize({
  dialect: 'sqlite',
  storage: DB_STORAGE,
  logging: DB_LOGGING,
});

const dbSyncOptions = { force: true };

module.exports = { db, dbSyncOptions, PORT };
