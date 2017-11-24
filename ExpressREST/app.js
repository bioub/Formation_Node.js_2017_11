const express = require('express');
const morgan = require('morgan');
const routerContacts = require('./routes/contacts');
const notFound = require('./middlewares/not-found');

const app = express();

app.use(morgan('combined'));
app.use('/api/contacts', routerContacts);

app.use(notFound);

module.exports = app;
