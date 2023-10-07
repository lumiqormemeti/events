const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB is connected!");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectDB;