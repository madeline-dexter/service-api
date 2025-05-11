// Load constants from the config modules
const { NODE_ENV, PORT } = require('./config/env');
const { DB_CONFIG, DB_SYNC_OPTIONS } = require('./config/db');

// Load the Sequelize instance and models
const { sequelize } = require('./orm');

// Load the Express app instance
const app = require('./app');

// Sync the database and start the server
sequelize.sync(DB_SYNC_OPTIONS).then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
  });
});
