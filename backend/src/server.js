require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  res.send("CodeSync API Running...");
});

// Create HTTP Server
const server = http.createServer(app);

// Attach Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Socket Handler
const socketHandler = require("./socket/socketHandler");
socketHandler(io);

const PORT = process.env.PORT || 5000;

// Start Server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});