const express  = require('express');
const router   = express.Router();

const authentication = require('../controllers/authentication');
const users = require('../controllers/users');
const stories = require('../controllers/stories');

router.route('/register')
  .post(authentication.register);

router.route('/login')
  .post(authentication.login);

router.route('/stories')
  .get(stories.index)
  .post(stories.create);
router.route('/stories/:id')
  .get(stories.show);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);



module.exports = router;
