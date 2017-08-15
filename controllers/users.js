module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};

const User  = require('../models/user');
const Story = require('../models/story');

function usersIndex(req, res) {
  User.find((err, users) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(users);
  });
}

function usersShow(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    Story.find({ createdBy: user.id }, (err, authored) => {
      user.authored = authored
      return res.status(200).json(user);
    });


    // Story.find({ contributor: user.id }, (err, contributed) => {
    //   user.contributed = contributed
    //   return res.status(200).json(user);
    // });
})
};

function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body.user, { new: true },  (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    return res.status(200).json(user);
  });
}

function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    return res.sendStatus(204);
  });
}
