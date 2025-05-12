const express = require('express');
const morgan = require('morgan');

// Load the Sequelize instance and models
const { sequelize } = require('./orm');

// Load the route generator function
const { generateRoutes } = require('./routes');

// Load the error handling middleware
const error = require('./middleware/error');

// Initialize and configure the Express app
const app = express();
app.use(morgan('tiny'));
app.use(express.json());

// Generate routers for each Sequelize model
generateRoutes(app, sequelize);

// Configure the app to use the error middleware
app.use(error);

module.exports = app;
