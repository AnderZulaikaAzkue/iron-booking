const Booking = require('../models/booking.model');
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Booking.find()
    .then((bookings) => res.json(bookings))
    .catch(next);
}
module.exports.create = (req, res, next) => {
  console.log(req.body); 
  console.log(req.params.hotelId);
  console.log(req.params.roomsId);

 Booking.create({
  hotels: req.params.hotelId, 
  rooms: req.params.roomsID, 
  booked: true,
  clients: req.body.Id
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