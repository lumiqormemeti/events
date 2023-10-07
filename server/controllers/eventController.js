const Event = require("../models/eventModal");

const getEvents = async (req, res) => {
  let searchQuery = req.query.query ? { "genres.value": req.query.query } : {};

  const data = await Event.find({});

  res.status(200).json(data);
};

module.exports = {
  getEvents,
};
