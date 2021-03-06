const Story = require('../models/story');


function contribCreate(req, res) {
  Story
  .findById(req.params.id)
  .exec()
  .then(story => {
    if(!story) return res.status(404).json({ message: 'No story found!'});
    story.contributions.push(req.body);
    story.save();
  })
  .then(story => res.status(200).json(story))
  .catch(err => res.status(500).json(err));
}

function contributionsDelete(req, res){

  Story
  .findById(req.params.id)
  .exec()
  .then(story => {
    if(!story) return res.status(404).json({ message: 'No story found!'});
    story.contributions.pop();
    story.save();
  })
  .then(story => res.status(200).json(story))
  .catch(err => res.status(500).json(err));
}

module.exports = {
  create: contribCreate,
  delete: contributionsDelete
};
