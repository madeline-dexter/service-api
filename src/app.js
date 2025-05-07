const morgan = require('morgan');
const express = require('express');

const routes = require('./routes/user.js');
const { db } = require('./configs/local.js');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use('/', routes);

module.exports = app;
