const Hotel = require('../models/hotel.model');

module.exports.list = (req, res, next) => {
  Hotel.find()
    /*.populate("comments")*/
    .then((hotels) => res.json(hotels))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  console.log(req.body);
  Hotel.create(req.body)
    .then((hotel) => res.status(201).json(hotel))
    .catch(next);
}

module.exports.update = (req, res, next) => {
  Object.assign(req.hotel, req.body);
  req.hotel.save()
    .then((hotel) => res.json(hotel))
    .catch(next);
}

module.exports.detail = (req, res, next) => res.json(req.hotel)

module.exports.delete = (req, res, next) => {
  Hotel.deleteOne({_id: req.hotel.id })
  .then(() => res.status(204).send())
  .catch(next)
}