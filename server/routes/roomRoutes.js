const express = require("express");
const {
  createRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

const router = express.Router();

router.route("/").post(createRoom).get(getAllRooms);
router.route("/roomId").get(getRoom).patch(updateRoom).delete(deleteRoom);

module.exports = router;
