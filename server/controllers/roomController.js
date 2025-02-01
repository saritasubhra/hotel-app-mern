/* eslint-disable camelcase */
const Room = require("../models/roomModel");
const AppError = require("../utils/appError");
const cloudinary = require("../lib/cloudinary");

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find().select("roomname image capacity price");

    if (!rooms) {
      return next(new AppError("No rooms found", 404));
    }

    res.status(200).json({
      status: "success",
      results: rooms.length,
      data: rooms,
    });
  } catch (err) {
    next(err);
  }
};

const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return next(new AppError("No room found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: room,
    });
  } catch (err) {
    next(err);
  }
};

const createRoom = async (req, res, next) => {
  try {
    const { roomname, description, price, area, bed, capacity, image } =
      req.body;

    const { secure_url } = await cloudinary.uploader.upload(image, {
      folder: "harmony",
    });

    if (!secure_url) {
      return next(new AppError("Failed to upload image"));
    }

    const newRoom = await Room.create({
      roomname,
      description,
      price,
      area,
      bed,
      capacity,
      image: secure_url,
    });

    res.status(201).json({
      status: "success",
      message: "Room created successfully",
      data: newRoom,
    });
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!room) {
      return next(new AppError("No room found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      message: "Room updated successfully",
      room,
    });
  } catch (err) {
    next(err);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.roomId);

    if (!room) {
      return next(new AppError("No room found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      message: "Room deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllRooms, getRoom, createRoom, updateRoom, deleteRoom };
