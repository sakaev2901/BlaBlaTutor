const express = require('express');
const logger = require('morgan');
const api = require('./api');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/tutor-db', {useNewUrlParser: true, useCreateIndex: true});
mongoose.set('debug', true);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize({}));
require('./passport');

app.use('/api', api);

app.use(function(err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send({error: err.name});
});

module.exports = app;
