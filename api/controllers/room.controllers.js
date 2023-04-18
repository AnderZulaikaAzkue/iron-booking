const Room = require('../models/room.model');
const Hotel = require('../models/hotel.model');
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Room.find()
    .then((rooms) => res.json(rooms))
    .catch(next);
}

module.exports.create = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

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