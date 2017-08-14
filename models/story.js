const mongoose  = require('mongoose');


const contribSchema = new mongoose.Schema({
  contributer: {type: mongoose.Schema.ObjectId, ref: 'User'},
  contribution: {type: String, require: true}
});

const storySchema = new mongoose.Schema({
  title: { type: String, require: true },
  genre: { type: String , require: true  },
  rules: {type: Object, require: true},
  userContribution: {type: String},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User' },
  contributions: [contribSchema]
});

module.exports = mongoose.model('Story', storySchema);
