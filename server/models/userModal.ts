// const mongoose = require("mongoose");
import mongoose, { Schema, model, connect } from "mongoose";

interface userSchema {
  email: string;
  password: string;
}
const userSchema = new Schema<userSchema>(
  {
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  { timestamps: true }
);

export const User = model<userSchema>("User", userSchema);

// export default userSchema;
