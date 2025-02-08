const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId is a required field."],
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: [true, "roomId is a required field."],
    },
    stripeSessionId: {
      type: String,
      unique: true,
    },
    checkInDate: {
      type: Date,
      required: [true, "checkInDate is a required field."],
    },
    checkOutDate: {
      type: Date,
      required: [true, "checkOutDate is a required field."],
    },
    guests: {
      type: Number,
      required: [true, "guests is a required field."],
    },
    totalAmount: {
      type: Number,
      required: [true, "totalAmount is a required field."],
      min: 0,
    },
    status: {
      type: String,
      enum: ["paid", "checked-in", "checked-out"],
      default: "paid",
    },
  },
  {
    timestamps: true,
  }
);

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "fullname",
  }).populate({
    path: "roomId",
    select: "roomname",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
