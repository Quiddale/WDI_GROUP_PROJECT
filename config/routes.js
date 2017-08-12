const express  = require('express');
const router   = express.Router();

const authentication = require('../controllers/authentication');
const users = require('../controllers/users');

router.route('/register')
  .post(authentication.register);

router.route('/login')
  .post(authentication.login);

router.route('/users')
  .get(users.index);


router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

module.exports = router;
