const Room = require("../models/Room");
const { v4: uuidv4 } = require("uuid");

// Create Room
const createRoom = async (req, res) => {
  try {
    const { roomName } = req.body;

    const room = await Room.create({
      roomId: uuidv4(),
      roomName,
    });

    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Room By Room ID
const getRoom = async (req, res) => {
  try {
    const room = await Room.findOne({
      roomId: req.params.roomId,
    });

    if (!room) {
      return res.status(404).json({
        message: "Room not found",
      });
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRoom,
  getRoom,
};