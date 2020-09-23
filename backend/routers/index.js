const router = require('express').Router();
const account = require('./account');
const register = require('./register');

router.use('/account',account);
router.use('/register',register);

module.exports = router;