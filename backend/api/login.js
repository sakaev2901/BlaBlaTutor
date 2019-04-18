const router = require('express').Router();
const passport = require('passport');

router.post('/', function (req, res, next) {  // login and get token

    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }

            const token = user.generateJWT();

            return res.json({user, token});
        });
    })(req, res, next);

});

module.exports = router;