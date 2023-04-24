const router = require("express").Router();

//make a variable that includes all the API calls for Thoughts
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controllers");

//bring them in through Router adds
router.route("/thoughts").get(getAllThought).post(createThought);

router.route("/users/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

router
  .route("/users/:userId/friends/:friendId")
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;