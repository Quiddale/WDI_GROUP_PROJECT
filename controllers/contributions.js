const Story = require('../models/story');


function contribCreate(req, res) {
  console.log('LOGGED');
  Story
  .findById(req.params.id)
  .exec()
  .then(story => {
    if(!story) return res.status(404).json({ message: 'No story found!'});
    story.contributions.push(req.body);
    console.log(story, '---------------------------_STORY');
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
    story.contributions.splice(story.contributions);
    console.log(story, '---------------------------_STORY');
    story.save();
  })
  .then(story => res.status(200).json(story))
  .catch(err => res.status(500).json(err));
}

module.exports = {
  create: contribCreate,
  delete: contributionsDelete
};
