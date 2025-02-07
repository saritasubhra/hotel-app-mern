const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { addDays, isBefore } = require("date-fns");
const Booking = require("../models/bookingModel");
const AppError = require("../utils/appError");
const Room = require("../models/roomModel");

function getDatesInRange(startDate, endDate) {
  const dates = [];
  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || currentDate === endDate) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  return dates;
}

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
    console.log(session);
    console.log(checkInDate);

    const dates = getDatesInRange(checkInDate, checkOutDate);

    const newBooking = await Booking.create({
      stripeSessionId: sessionId,
      userId,
      roomId,
      checkInDate,
      checkOutDate,
      guests,
      totalAmount: session.amount_total / 100,
    });

    const room = await Room.findById(roomId);
    room.unavailableDates.push(...dates);
    await room.save({ validateBeforeSave: false });

    await res.status(201).json({
      status: "success",
      newBooking,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCheckoutSession, checkoutSuccess };
