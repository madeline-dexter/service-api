const app = require('./app');
const { db, dbSyncOptions, PORT } = require('./configs/local.js');

db.sync(dbSyncOptions).then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
  });
});
