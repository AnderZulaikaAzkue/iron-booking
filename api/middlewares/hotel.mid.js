const Hotel = require('../models/hotel.model');
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
  const hotelId = req.params.hotelId || req.params.id;
  Hotel.findById(hotelId)
  //.populate("room")
  .then((hotel) => {
    if (hotel) {
      req.hotel = hotel;
      next();
    } else {
      next(createError(404, 'Hotel not found'))
    }
  })
  .catch(next)
}