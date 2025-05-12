const express = require('express');
const morgan = require('morgan');

const { sequelize } = require('./orm');
const { generateRoutes } = require('./routes');
const { errorMiddleware } = require('./middleware');

// Initialize the Express app
const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(errorMiddleware);

// Generate the Express routes
generateRoutes(app, sequelize);

module.exports = app;
