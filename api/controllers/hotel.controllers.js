const Hotel = require('../models/hotel.model');

module.exports.list = (req, res, next) => {
  Hotel.find()
  
    .then((hotels) => res.json(hotels))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  console.log(req.body);
  Hotel.create(req.body)
    .then((hotel) => res.status(201).json(hotel))
    .catch(next);
}