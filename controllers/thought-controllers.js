const { User, Thought } = require("../models")

//write all necessary API calls for the Thoughts
const thoughtController = {
    getAllThought(req, res) {
            Thought.find({})
              .populate({
                path: "thoughts",
                select: "-__v",
              })
              .select("-__v")
              .sort({ _id: -1 })
              .then((dbThoughtData) => res.json(dbThoughtData))
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    getThoughtById(req, res) {
        Thought.findOne({ _id: params.id })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .select("-__v")
        .then((dbThoughtData) => {
          if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!" });
            return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      }); 
    },

    createThought(req, res) {
        Thought.create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true,
          })
            .then((dbThoughtData) => {
              if (!dbThoughtData) {
                res.status(404).json({ message: "No Thought found with this id!" });
                return;
              }
              res.json(dbThoughtData);
            })
            .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(500).json(err));
    },

    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { friends: params.friendsId } },
            { new: true }
          )
            .then((dbThoughtData) => {
              if (!dbThoughtData) {
                res.status(404).json({ message: "No Thought found with this id!" });
                return;
              }
              res.json(dbUserData);
            })
            .catch((err) => res.json(err));
    },

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendsId } },
            { new: true }
          )
            .then((dbThoughtData) => {
              if (!dbThoughtData) {
                res.status(404).json({ message: "No Thought found with this id!" });
                return;
              }
              res.json(dbThoughtData);
            })
            .catch((err) => res.json(err));
    },
};

module.exports = thoughtController;