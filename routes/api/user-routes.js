const router = require("express").Router();

//make a variable that includes all the API calls for User
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controllers");

//bring them in through Router adds
router.route("/users").get(getAllUser).post(createUser);

router.route("/users/:id").get(getUserById).put(updateUser).delete(deleteUser);

router
  .route("/users/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
