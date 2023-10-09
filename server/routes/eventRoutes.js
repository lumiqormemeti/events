const express = require("express");
const {
  getEvents,
  createEvent,
  getPastEvents,
  getUpcomingEvents,
  getEventById,
} = require("../controllers/eventController");
const { deleteEvent } = require("../controllers/eventController");

const router = express.Router();

router.get("/", getEvents);
router.delete("/delete/:id", deleteEvent);
router.get("/past", getPastEvents);
router.get("/upcoming", getUpcomingEvents);
router.post("/create", createEvent);
router.get("/:id", getEventById);


module.exports = router;
