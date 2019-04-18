const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');

const {Schema} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

function hash(password, callback) {
    crypto.pbkdf2(password, config.salt, 1000, 20, 'sha512', callback)
}

UserSchema.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, config.salt, 1000, 20, 'sha512').toString('hex');
    return this.password === hash;
};


UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        username: this.username,
        id: this._id,
        exp: Math.round(expirationDate.getTime() / 1000),
    }, config.secretCode);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        username: this.username,
        token: this.generateJWT(),
    };
};

UserSchema.methods.getSafeData = function () {
    return {_id: this._id, username: this.username}
};

UserSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // hash the password using our new salt
    hash(user.password, function (err, hash) {
        if (err) return next(err);

        user.password = hash.toString('hex');
        next();
    });
});


module.exports = mongoose.model('Users', UserSchema);