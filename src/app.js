const express = require('express');
const morgan = require('morgan');

// Load the Sequelize instance and models
const { sequelize } = require('./orm');

// Load the error handling middleware
const error = require('./middleware/error');

// Load the router generator function
const generateRouters = require('./routers/generate');

// Generate routers for each Sequelize model
const routers = generateRouters(sequelize.models);

// Initialize and configure the Express app
const app = express();
app.use(morgan('tiny'));
app.use(express.json());

// Configure the app to use the generated routers
Object.entries(routers).forEach(([modelName, router]) => {
  app.use('/', router);
});

// Configure the app to use the error middleware
app.use(error);

module.exports = app;
