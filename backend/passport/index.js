const passport = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
const UserModel = require('../models/UserModel');
const config = require('../config');

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, cb) {

        return UserModel.findOne({username})
            .then(user => {
                if (!user || !user.validatePassword(password)) {
                    return cb(null, false, {message: 'Incorrect username or password.'});
                }

                return cb(null, user, {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secretCode
    },
    function (jwtPayload, cb) {

        //find the user in db if needed
        return UserModel.findOne({_id: jwtPayload.id})
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));