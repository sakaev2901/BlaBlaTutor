const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/UserModel');

/* GET users listing. */
router.post('/', function(req, res, next) {
  UserModel.create({username: req.body.username, password: req.body.password})
      .then((user) => {
          user.save().then(() => {
              res.send({user});
          })

      })
      .catch((err) => res.status(500).send({err}))
});

router.get('/', function (req, res, next) {
  passport.authorize('jwt', {session: false}, (err, user, info) => {
    if(err) {
      res.status(403).send({error: 'Auth failed'});
    }
    else{
      res.send(user);
    }

  })(req, res, next);
});

module.exports = router;
