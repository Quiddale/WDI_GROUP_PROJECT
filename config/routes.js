const express  = require('express');
const router   = express.Router();

const authentication = require('../controllers/authentication');
const users = require('../controllers/users');
const stories = require('../controllers/stories');

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

router.route('/stories')
  .get(stories.index)
  .post(stories.create);
router.route('/stories/:id')
  .get(stories.show)
  .put(stories.update)
  .patch(stories.update);


module.exports = router;
