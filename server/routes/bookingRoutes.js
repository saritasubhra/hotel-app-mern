const express = require("express");
const {
  createCheckoutSession,
  checkoutSuccess,
  getAllBookings,
  updateBooking,
} = require("../controllers/bookingsController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.route("/create-checkout-session").post(protect, createCheckoutSession);
router.route("/checkout-success").post(protect, checkoutSuccess);
router.route("/").get(protect, getAllBookings);
router.route("/:bookingId").patch(protect, updateBooking);

module.exports = router;
