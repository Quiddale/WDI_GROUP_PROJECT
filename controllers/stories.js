const Story = require('../models/story');
// const User = require('../models/story');


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

function storyShow(req, res) {
  console.log(req.params);
  Story
  .findById(req.params.id)
  .exec()
  .then(story => res.status(200).json(story))
  .catch(err => res.status(500).json(err));
  // , (err, story) => {
  //   if (err) return res.status(500).json({ message: 'Something went wrong.' });
  //   if (!story) return res.status(404).json({ message: 'Story not found.' });
  //   return res.status(200).json(story);

}

module.exports = {
  index: storyIndex,
  create: storyCreate,
  show: storyShow
};
