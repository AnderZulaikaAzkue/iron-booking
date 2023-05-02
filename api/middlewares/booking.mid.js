const Booking = require('../models/booking.model');
const createError = require('http-errors');


module.exports.exists = (req, res, next) => {
  const bookingId = req.params.bookingId || req.params.id;
 Booking.findById(bookingId)
  .then((booking) => {
    if (booking) {
      req.booking = booking;
      next();
    } else {
      next(createError(404, 'Booking not found'))
    }
  })
  .catch(next)
}