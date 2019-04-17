const express = require('express');
const router = express.Router();
const UsersController = require('./controllers/users');

/* GET users listing. */
router.post('/', function(req, res, next) {
  UsersController.create(req.body.username, req.body.password)
      .then((user) => res.send({user}))
      .catch((err) => res.status(500).send({err}))
});

module.exports = router;
