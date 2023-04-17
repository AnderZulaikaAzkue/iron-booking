const Room = require('../models/room.model');
const Hotel = require('../models/hotel.model');
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Room.find()
    //.populate("room")
    .then((rooms) => res.json(rooms))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  console.log(req.body);
  Room.create(req.body)
    .then((room) => res.status(201).json(room))
    .catch(next);
}

module.exports.update = (req, res, next) => {
  Object.assign(req.room, req.body);
  req.room.save()
    .then((room) => res.json(room))
    .catch(next);
}

module.exports.detail = (req, res, next) => res.json(req.room)

module.exports.delete = (req, res, next) => {
  Room.deleteOne({_id: req.room.id })
  .then(() => res.status(204).send())
  .catch(next)
}