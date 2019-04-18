const express = require('express');
const logger = require('morgan');
const api = require('./api');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');

mongoose.promise = global.Promise;
mongoose.connect(config.mongo.uri, {useNewUrlParser: true, useCreateIndex: true});
mongoose.set('debug', config.mongo.debug);

const app = express();

app.use(logger(config.logging.format));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize({}));
require('./passport');

app.use('/api', api);

app.use(function (err, req, res) {
    if(config.logging.logErrors) {
        console.error(err);
    }
    res.status(err.status || 500).send({error: err.name});
});

module.exports = app;
