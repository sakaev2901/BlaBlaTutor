const express = require('express');
const router = express.Router();
const users = require('./users');
const login = require('./login');

/* GET home page. */
router.use('/login', login);
//
// router.use(jwt({ secret: 'secret api key'}));

router.use('/users', users);

module.exports = router;
