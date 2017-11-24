const express = require('express');
const routerContacts = require('./routes/contacts');

const app = express();

app.use('/api/contacts', routerContacts);

module.exports = app;
