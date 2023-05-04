const Booking = require('../models/booking.model');
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Booking.find()
    .then((bookings) => res.json(bookings))
    .catch(next);
}
module.exports.create = (req, res, next) => {

 Booking.create({
  hotels: req.params.hotelId, 
  rooms: req.params.roomsId, 
  booked: true,
  clients: req.body.id
 })
    .then((booking) => res.status(201).json(booking))
    .catch(next); 
}

module.exports.update = (req, res, next) => {
  Object.assign(req.booking, req.body);
  req.booking.save()
    .then((booking) => res.json(booking))
    .catch(next);
}

module.exports.detail = (req, res, next) => res.json(req.booking)

module.exports.delete = (req, res, next) => {
  Booking.deleteOne({ _id: req.booking.id })
    .then(() => res.status(204).send())
    .catch(next)
}