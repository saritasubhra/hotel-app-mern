const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomname: {
      type: String,
      required: [true, "Room name is a required field."],
      trim: true,
      lowercase: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Description is a required field."],
    },
    price: {
      type: Number,
      required: [true, "Price is a required field."],
      min: [0, "Price can't be less than 0."],
    },
    area: {
      type: Number,
      required: [true, "Area is a required field."],
      min: [0, "Area can't be less than 0."],
    },
    bed: {
      type: Number,
      required: [true, "Bed is a required field."],
      min: [1, "There should be atleast 1 bed."],
    },
    capacity: {
      type: Number,
      required: [true, "Capacity is a required field."],
      min: [1, "Capacity can't be less than 1."],
    },
    image: {
      type: Number,
      required: [true, "Image is a required field."],
    },
    unavailableDates: [],
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
