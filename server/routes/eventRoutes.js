const express = require("express");
const {
  getEvents,
  createEvent,
  getPastEvents,
  getUpcomingEvents,
} = require("../controllers/eventController");

const router = express.Router();

router.get("/", getEvents);
router.get("/past", getPastEvents);
router.get("/upcoming", getUpcomingEvents);
router.post("/create", createEvent);

module.exports = router;
