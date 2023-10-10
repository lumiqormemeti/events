// const mongoose = require("mongoose");
import { Schema, model } from "mongoose";

interface EventInterface {
  title: String;
  description: String;
  image: String;
  date: Date;
}

const eventSchema = new Schema<EventInterface>(
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
      required: [true, "Please add event description"],
    },
    date: {
      type: Date,
      required: [true, "Please add event date"],
    },
  },
  { timestamps: true }
);

export const Event = model<EventInterface>("Event", eventSchema);
// module.exports = mongoose.model("Event", eventSchema);
// export default eventSchema;
