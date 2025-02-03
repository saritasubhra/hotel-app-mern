const express = require("express");
const {
  createCheckoutSession,
  checkoutSuccess,
} = require("../controllers/bookingsController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.route("/create-checkout-session").post(protect, createCheckoutSession);
router.route("/checkout-success").post(protect, checkoutSuccess);

module.exports = router;
