const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controllers");

router.route("/thoughts").get(getAllThought).post(createThought);

router.route("/users/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

router
  .route("/users/:userId/friends/:friendId")
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;