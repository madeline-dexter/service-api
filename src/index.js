// Load variables from the config module
const { DB_SYNC_OPTIONS, APP_PORT } = require('./config');

// Load the Sequelize instance and models
const { sequelize } = require('./orm');

// Load the Express app
const app = require('./app');

// Sync the database and start the server
sequelize.sync(DB_SYNC_OPTIONS).then(() => {
  app.listen(APP_PORT, () => {
    console.log('Server is running on PORT:', APP_PORT);
  });
});
