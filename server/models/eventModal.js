const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add event title"],
    },
    description: {
      type: String,
      required: [true, "Please add event description"],
    },
    image: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "Please add event date"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
