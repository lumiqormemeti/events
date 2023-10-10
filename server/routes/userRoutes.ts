import express from "express";
import { createUser, loginUser } from "../controllers/userController";
// const { createUser, loginUser } = require("../controllers/userController");
const router = express.Router();
// import

router.post("/signup", createUser);
// router.post("/login", loginUser);
router.post("/login", loginUser);

router.post("/test", (req, res) => {
  console.log("TESTING");
  res.send("HELLO");
});

export default router;
