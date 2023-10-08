const Event = require("../models/eventModal");

const getEvents = async (req, res) => {
  const data = await Event.find({});

  res.status(200).json(data);
};

const createEvent = async (req, res) => {
  const { title, description, date, image } = req.body;

  if (!title || !description || !date || !image) {
    res.status(400);
    throw new Error("Please add all fields");
  }

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
};
