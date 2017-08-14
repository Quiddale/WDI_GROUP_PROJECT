const Story = require('../models/story');
// const User = require('../models/user');


function storyIndex(req, res) {
  Story
    .find()
    .exec()
    .then(stories => res.status(200).json(stories))
    .catch(err => res.status(500).json(err));
}

function storyCreate(req, res) {
  req.body.createdBy = req.user.id;
  console.log(req.body);
  Story
    .create(req.body)
    .then(story => res.status(201).json(story))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  index: storyIndex,
  create: storyCreate
};