const express = require('express');
const morgan = require('morgan');
const routerContacts = require('./routes/contacts');
const notFound = require('./middlewares/not-found');
const error = require('./middlewares/error');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = Promise;

const app = express();

app.use(morgan('combined'));
app.use('/api/contacts', routerContacts);

app.use(notFound); // next()
app.use(error); // next(err)


module.exports = app;
