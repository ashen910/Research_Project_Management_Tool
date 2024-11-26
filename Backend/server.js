const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const dotenv = require("dotenv");
const cors = require("cors");


const usersRouter = require("./routes/api/users");
const userProfiles = require("./routes/userProfiles");
const topicRoutes = require("./routes/topics");
const groupRoutes = require("./routes/groups");
const panelRoutes = require("./routes/panels");

//Chat System Routes {
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});

//Chat System Routes }

dotenv.config();
const config = require('config');
const app = express();
// Body parser middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(cors());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);
app.use(userProfiles);
app.use(topicRoutes);
app.use(groupRoutes);
app.use(panelRoutes);

//Doc Download & Uploads Routes(APIS)
app.use("/marksSupervisor", require("./routes/marksSupervisor"));
app.use("/marksPannel", require("./routes/marksPannel"));
app.use("/templates", require("./routes/templates"));
app.use("/topicRegDoc", require("./routes/topicRegDoc"));
app.use("/finalDoc", require("./routes/finalDoc"));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


