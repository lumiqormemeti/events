import express, { Express, Request, Response, Application } from "express";
// const dotenv = require("dotenv").config();
// const colors = require("colors");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// import eventRoutes from "./routes/eventRoutes";
// import userRoutes from "./routes/userRoutes";
import cors from "cors";
import connectDB from "./config/db";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import eventRoutes from "./routes/eventRoutes";

const port = process.env.PORT || 3001;
import dotenv from "dotenv";
// dotenv.config();

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

// app.get("/test", (req, res) => {
// res.json("Success!");
// });

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`SERVER STARTED PORT AT PORT:${port}`));
