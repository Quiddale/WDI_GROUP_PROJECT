const mongoose  = require('mongoose');

const contribSchema = new mongoose.Schema({
  contributor: {type: mongoose.Schema.ObjectId, ref: 'User'},
  contribution: {type: String, require: true}
});

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String , required: true  },
  rules: {type: Object, required: true},
  authorContribution: {type: String},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  contributions: [contribSchema]
});

module.exports = mongoose.model('Story', storySchema);
