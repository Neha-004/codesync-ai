const activeRooms = {};

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("join-room", ({ roomId, username }) => {
      socket.join(roomId);

      if (!activeRooms[roomId]) {
        activeRooms[roomId] = [];
      }

      activeRooms[roomId].push({
        socketId: socket.id,
        username,
      });

      console.log(
        `${username} joined room ${roomId}`
      );

      io.to(roomId).emit(
        "room-users",
        activeRooms[roomId]
      );
    });

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

      console.log(
        "User Disconnected:",
        socket.id
      );
    });
  });
};

module.exports = socketHandler;