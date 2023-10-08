const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add event title"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
