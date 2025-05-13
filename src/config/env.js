// Define environment variables for export
const NODE_ENV = process.env.NODE_ENV || 'local';
const PORT = process.env.PORT || 3000;
const SQLITE_PATH = process.env.SQLITE_PATH || 'local.db';
const MODELS_PATH = process.env.DATA_PATH || './data/models';

module.exports = { NODE_ENV, PORT, SQLITE_PATH, MODELS_PATH };
