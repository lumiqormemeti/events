const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const User = require("../models/userModal");

const createToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const createUser = asyncHandler(async (req, res) => {
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
    const token = createToken(user._id, user.email);
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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Email format is invalid");
  }
  //Check for existing email & password are valid
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = createToken(user._id, user.email);
    res
      .cookie("adminAccessToken", token, {
        //30 days expiration with milliseconds
        // maxAge: 60 * 60 * 24 * 30 * 1000,
        //TODO: Adjust this back (its 10 min atm)
        maxAge: 1200000,
      })
      .json({
        id: user._id,
        email: user.email,
        token,
      });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

module.exports = {
  createUser,
  loginUser,
};
