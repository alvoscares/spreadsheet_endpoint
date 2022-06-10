const express = require('express');

const app = express();

app.use(require('./routes/routes'));

module.exports = app;