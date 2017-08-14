const mongoose  = require('mongoose');
// const bcrypt    = require('bcrypt');
// const validator = require('validator');

const storySchema = new mongoose.Schema({
  title: { type: String, require: true },
  genre: { type: String , require: true  },
  rules: {type: Object, require: true},
  contributions: { type: Array, required: true },
  userContribution: {type: String}
});

module.exports = mongoose.model('Story', storySchema);
