const { NODE_ENV, PORT } = require('./config/env');
const { DB_CONFIG, DB_SYNC_OPTIONS } = require('./config/db');
const { sequelize } = require('./orm');
const app = require('./app');

// Sync the database and start the server
sequelize.sync(DB_SYNC_OPTIONS).then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
  });
});
