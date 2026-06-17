const activeRooms = {};

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    // Join Room
    socket.on("join-room", ({ roomId, username }) => {
      socket.join(roomId);

      if (!activeRooms[roomId]) {
        activeRooms[roomId] = [];
      }

      activeRooms[roomId].push({
        socketId: socket.id,
        username,
      });

      console.log(`${username} joined room ${roomId}`);

      io.to(roomId).emit(
        "room-users",
        activeRooms[roomId]
      );
    });

    // Chat Messages
    socket.on("send-message", ({ roomId, username, message }) => {
      console.log("MESSAGE RECEIVED:");
      console.log(roomId);
      console.log(username);
      console.log(message);

      io.to(roomId).emit("receive-message", {
        username,
        message,
        timestamp: new Date(),
      });
    });

    // Disconnect
    socket.on("disconnect", () => {
      Object.keys(activeRooms).forEach((roomId) => {
        activeRooms[roomId] =
          activeRooms[roomId].filter(
            (user) => user.socketId !== socket.id
          );

        io.to(roomId).emit(
          "room-users",
          activeRooms[roomId]
        );
      });

      console.log("User Disconnected:", socket.id);
    });
  });
};

module.exports = socketHandler;