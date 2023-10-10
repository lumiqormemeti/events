import express from "express";
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEvents,
  getPastEvents,
  getUpcomingEvents,
} from "../controllers/eventController";

const router = express.Router();

router.get("/", getEvents);
router.delete("/delete/:id", deleteEvent);
router.get("/past", getPastEvents);
router.get("/upcoming", getUpcomingEvents);
router.post("/create", createEvent);
router.get("/:id", getEventById);

export default router;
