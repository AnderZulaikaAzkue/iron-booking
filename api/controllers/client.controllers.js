const Client = require("../models/client.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Client.find() 
    .then((clients) => res.json(clients))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Client.create(req.body)
    .then((client) => res.status(201).json(client))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.client);

module.exports.delete = (req, res, next) => {
  Client.deleteOne({ _id: req.user.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.user, req.body);
  req.user
    .save()
    .then((client) => res.json(client))
    .catch(next);
};

