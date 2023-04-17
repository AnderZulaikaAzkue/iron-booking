const Hotel = require('../models/hotel.model');

module.exports.list = (req, res, next) => {
  Hotel.find()
    .populate("comments")
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
  Object.assign(req.project, req.body);
  req.project.save()
    .then((project) => res.json(project))
    .catch(next);
}

module.exports.detail = (req, res, next) => res.json(req.project)

module.exports.delete = (req, res, next) => {
  Project.deleteOne({_id: req.project.id })
  .then(() => res.status(204).send())
  .catch(next)
}