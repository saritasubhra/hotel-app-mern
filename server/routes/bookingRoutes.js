const express = require("express");
const { createCheckoutSession } = require("../controllers/bookingsController");

const router = express.Router();

router.route("/create-checkout-session").post(createCheckoutSession);

module.exports = router;
