const Story = require('../models/story');


function storyIndex(req, res) {
  Story
    .find()
    .populate('createdBy')
    .exec()
    .then(stories => res.status(200).json(stories))
    .catch(err => res.status(500).json(err));
}

function storyCreate(req, res) {
  req.body.createdBy = req.user.id;
  // console.log(req.body);
  Story
    .create(req.body)
    .then(story => res.status(201).json(story))
    .catch(err => res.status(500).json(err));
}

function storyShow(req, res) {
  // console.log(req.params);
  Story
  .findById(req.params.id)
  .populate('createdBy')
  .populate('contributions.contributor')
  .exec()
  .then(story => res.status(200).json(story))
  .catch(err => res.status(500).json(err));
}

function storyUpdate(req, res) {

  Story
  .findById(req.params.id)
  .exec()
  .then(story => {
    if(!story) return res.status(404).json({ message: 'No story found!'});
    if (req.body.image) {
      story.image = req.body.image;
    }


    console.log(req.body.contributions, '<----------------------------- REQ.BODY');
    // console.log(story.contributions, '<--------------------- STORY CONTRIBUTIONS');
    // for (var i = 0; i < story.contributions.length; i++) {
    //   story.contributions[i].contributor = req.body.contributions[i].contributor._id;
    // }
    if (req.body.contributions){
      story.contributions = req.body.contributions;
    }

    // for (var i = 0; i < story.contributions.length; i++) {
    //   console.log(story.contributions[i], 'BEFORE');
    //   story.contributions[i].contributor = story.contributions[i].contributor.id;
    //   console.log(story.contributions[i], 'AFTER');
    // }

    // story.contributions = req.body.contributions;
    story.save();
  })
  .then(story => res.status(200).json(story))
  .catch(err=> res.status(500).json(err));
}

module.exports = {
  index: storyIndex,
  create: storyCreate,
  show: storyShow,
  update: storyUpdate
};
