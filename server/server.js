const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3001;
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:8080"],
    credentials: true,
  })
);

app.get("/test", (req, res) => {
  res.json("Success!");
});

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => console.log("SERVER STARTED PORT 3001!"));
