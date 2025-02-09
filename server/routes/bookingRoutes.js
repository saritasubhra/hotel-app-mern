const express = require("express");
const {
  createCheckoutSession,
  checkoutSuccess,
  getAllBookings,
  updateBooking,
  getBooking,
} = require("../controllers/bookingsController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.use(protect);

router.route("/create-checkout-session").post(createCheckoutSession);
router.route("/checkout-success").post(checkoutSuccess);
router.route("/").get(getAllBookings);
router.route("/:bookingId").get(getBooking).patch(updateBooking);

module.exports = router;
