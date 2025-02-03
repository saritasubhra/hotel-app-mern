const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Booking = require("../models/bookingModel");
const AppError = require("../utils/appError");

const createCheckoutSession = async (req, res, next) => {
  try {
    const { product } = req.body;
    const {
      roomId,
      roomname,
      image,
      totalAmount,
      checkInDate,
      checkOutDate,
      guests,
    } = product;

    const lineItems = [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: roomname,
            images: [image],
          },
          unit_amount: totalAmount * 100,
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url:
        "http://localhost:5173/purchase-success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/purchase-cancel",
      metadata: {
        userId: req.user._id.toString(),
        roomId,
        checkInDate,
        checkOutDate,
        guests,
      },
    });

    res.status(201).json({
      status: "success",
      session,
    });
  } catch (error) {
    next(error);
  }
};

const checkoutSuccess = async (req, res, next) => {
  try {
    const { sessionId } = req.body;

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return next(new AppError("Booking failed", 400));
    }

    const { userId, roomId, checkInDate, checkOutDate, guests } =
      session.metadata;

    const newBooking = await Booking.create({
      stripeSessionId: sessionId,
      userId,
      roomId,
      checkInDate,
      checkOutDate,
      guests,
      totalAmount: session.amount_total / 100,
    });

    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCheckoutSession, checkoutSuccess };
