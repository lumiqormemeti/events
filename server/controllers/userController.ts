// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const validator = require("validator");
// const User = require("../models/userModal");
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcryptjs";
import { User } from "../models/userModal";
import { Request, Response } from "express";
const createToken = (id: string, email: string) => {
  return jwt.sign(
    { id, email },
    "k6LIk9ohI5-wDB9mvhqcUc4-mqL0htELOpz0_RF0f3jlYlH8FFHIjcI4iQ7TzhddK8dXOgJx-xNuM5nsLHQEhQACF8cVq-hQR96VDLOiioPqKdfXOgUW3dOIyPAZ6BSTETUUy0ROPm02r7HsL7O3p8eoAdlR48zN2ozT4XbXHOfdGmX-dHQ6xCTLyfd9vFY4glllLhrxfhuXLUjuSNup487tUGTBJu_FpN4Zy7haFR3XgY5ltv0FkF4V9Nv1UeCmXv37eUXS0COstQEr9UpQBIi00KzgqPbDBVqqsF_0mhl8B66uKzpSxQDu5jfqK_LbbxAIMq8Kv1HHs3inSnpS7Q  ",
    {
      expiresIn: "30d",
    }
  );
};

export const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Validations
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Email format is invalid");
  }
  //This makes sure that the pw has one uppercase, one lowercase, one symbol and minimum of 8 chars
  if (!validator.isStrongPassword(password)) {
    res.status(400);
    throw new Error("Password not strong enough");
  }

  //Checking if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Creating user
  const user = await User.create({
    email,
    password: hashedPassword,
  });
  if (user) {
    const token = createToken("Testong", user.email);
    res
      .cookie("adminAccessToken", token, {
        maxAge: 1200000,
      })
      .status(201)
      .json({
        id: user._id,

        email: user.email,
      });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Email format is invalid");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = await createToken(user._id.toString(), user.email);
    res.cookie("adminAccessToken", token, {}).json({
      id: user._id,
      email: user.email,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
