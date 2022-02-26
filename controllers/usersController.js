// Export function for handling user request
const router = require('express').Router();
const { User, Thought } = require('../models');

// Add routes for Users
module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find({})
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      // create a new user
      createUser(req, res) {
      User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
     },

       // Delete a user and associated Thought
    deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
      
      !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.Thought } })
      )
      .then(() => res.json({ message: 'User and associated thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a USER
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId},
      { $set: req.body },
     { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
    // Add a friend to a User
    addFriend(req, res) {
      console.log('You are adding a friend');
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friend: req.body.friendId } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },


}
