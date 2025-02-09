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
    currentDate = addDays(currentDate, 1).toISOString();
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
    console.log("rhg", checkInDate, checkOutDate);

    const dates = getDatesInRange(checkInDate, checkOutDate);
    console.log(dates);

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

const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().select(
      "checkInDate checkOutDate status"
    );

    if (!bookings) {
      return next(new AppError("No bookings found", 404));
    }

    res.status(200).json({
      status: "success",
      results: bookings.length,
      data: bookings,
    });
  } catch (err) {
    next(err);
  }
};

const getBooking = async (req, res, next) => {
  try {
    console.log(req.params.bookingId);

    const booking = await Booking.findById(req.params.bookingId).select(
      "-stripeSessionId"
    );

    if (!booking) {
      return next(new AppError("No booking found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: booking,
    });
  } catch (err) {
    next(err);
  }
};

const updateBooking = async (req, res, next) => {
  try {
    const { status, checkInDate, checkOutDate, roomId } = req.body;

    if (status === "checked-out") {
      const dates = getDatesInRange(checkInDate, checkOutDate);
      const room = await Room.findById(roomId);

      room.unavailableDates = room.unavailableDates.filter(
        (item) => !dates.includes(item)
      );

      await room.save({ validateBeforeSave: false });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.bookingId,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!booking) {
      return next(new AppError("No booking found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      message: "Booking updated successfully",
      data: booking,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCheckoutSession,
  checkoutSuccess,
  getAllBookings,
  updateBooking,
  getBooking,
};
