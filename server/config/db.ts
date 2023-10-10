// const mongoose = require("mongoose");
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://lumi:GsiDTjxyba4j51Fs@cluster0.f5hfyby.mongodb.net/"
    );
    console.log("MongoDB is connected!");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectDB;
