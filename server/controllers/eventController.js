const Event = require("../models/eventModal");

const getEvents = async (req, res) => {
  const data = await Event.find({});

  res.status(200).json(data);
};
const getEventById = async (req, res) => {
  try {    
    const { id } = req.params;
    const data = await Event.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);

  }
};
const getUpcomingEvents = async (req, res) => {
  try {
    const data = await Event.find({ date: { $gt: new Date() } });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);

  }
};
const getPastEvents = async (req, res) => {
  const data = await Event.find({ date: { $lt: new Date() } });
  res.status(200).json(data);
};

const createEvent = async (req, res) => {
  try {
    const { title, description, date, image } = req.body;
    const data = await Event.create({
      title,
      description,
      date,
      image,
    });
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteEvent = async (req,res)=>{
  const { id } = req.params;
  await Event.deleteOne({_id:id})

  try {
    const updatedData = await Event.find({});
    res.status(200).json(updatedData)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
}

module.exports = {
  getEvents,
  createEvent,
  getPastEvents,
  getUpcomingEvents,
  getEventById,
  deleteEvent
};
