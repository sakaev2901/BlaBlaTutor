const express = require('express');
const logger = require('morgan');
const api = require('./api');
const mongoose = require('mongoose');
const passport = require('passport');
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/passport-tutorial', {useNewUrlParser: true});
mongoose.set('debug', true);
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize({}));
require('./passport');
app.use('/api', api);

app.use(function(err, req, res, next) {
    throw(err);
    res.status(501).send({error: err.name});
});

module.exports = app;
