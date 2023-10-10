import { Request, Response } from "express";
// const Event = require("../models/eventModal");
// import {Request}
import { Event } from "../models/eventModal";
export const getEvents = async (req: Request, res: Response) => {
  try {
    const data = await Event.find({});
    console.log("HERe");
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json(error);
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await Event.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getUpcomingEvents = async (req: Request, res: Response) => {
  try {
    const data = await Event.find({ date: { $gt: new Date() } });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getPastEvents = async (req: Request, res: Response) => {
  const data = await Event.find({ date: { $lt: new Date() } });
  res.status(200).json(data);
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { title, description, date, image } = req.body;
    const data = await Event.create({
      title,
      description,
      date,
      image,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Event.deleteOne({ _id: id });

  try {
    const updatedData = await Event.find({});
    res.status(200).json(updatedData);
  } catch (error: Error | any) {
    res.status(400);
    throw new Error(error);
  }
};
