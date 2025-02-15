const express = require("express");
const {
  createRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");
const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(protect, restrictTo("admin"), createRoom)
  .get(getAllRooms);

router
  .route("/:roomId")
  .get(getRoom)
  .patch(protect, restrictTo("admin"), updateRoom)
  .delete(protect, restrictTo("admin"), deleteRoom);

module.exports = router;
