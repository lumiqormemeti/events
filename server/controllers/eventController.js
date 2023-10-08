const Event = require("../models/eventModal");

const getEvents = async (req, res) => {
  const data = await Event.find({});

  res.status(200).json(data);
};
const getEventById = async (req, res) => {
  const { id } = req.params;
  const data = await Event.findById(id);

  res.status(200).json(data);
};
const getUpcomingEvents = async (req, res) => {
  const data = await Event.find({ date: { $gt: new Date() } });

  res.status(200).json(data);
};
const getPastEvents = async (req, res) => {
  const data = await Event.find({ date: { $lt: new Date() } });

  res.status(200).json(data);
};

const createEvent = async (req, res) => {
  const { title, description, date, image } = req.body;

  const data = await Event.create({
    title,
    description,
    date,
    image,
  });

  res.status(200).json(data);
};

module.exports = {
  getEvents,
  createEvent,
  getPastEvents,
  getUpcomingEvents,
  getEventById,
};
