const Hotel = require('../models/hotel.model');
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  const { city } = req.query;
  const { type } = req.query;

  const criterial = {};
  if (city) criterial.city = city;
  if (type) criterial.type = type;

  Hotel.find(criterial)
    .populate("rooms")
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
  Hotel.deleteOne({ _id: req.hotel.id })
    .then(() => res.status(204).send())
    .catch(next)
}

/*module.exports.searchByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};*/

module.exports.getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};