const Room = require('../models/room.model');
const createError = require('http-errors');
const Hotel = require('../models/hotel.model');

module.exports.exists = (req, res, next) => {
  const roomId = req.params.projectId || req.params.id;
 Room.findById(roomId)
  populate("hotel")
  .then((room) => {
    if (room) {
      req.room = room;
      next();
    } else {
      next(createError(404, 'Room not found'))
    }
  })
  .catch(next)
}