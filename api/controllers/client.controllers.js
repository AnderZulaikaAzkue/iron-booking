const Client = require("../models/client.model");
const createError = require("http-errors");
const mailer = require("../config/mailer.config");
const jwt = require("jsonwebtoken");

const clientConfirmationRequired = process.env.USER_CONFIRMATION_REQUIRED= true

module.exports.list = (req, res, next) => {
  Client.find() 
    .then((clients) => res.json(clients))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Client.create(req.body)
  .then((client) => {
    if (clientConfirmationRequired) {
    mailer.sendConfirmationEmail(client);
  }
    res.status(201).json(client);
  })
  .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.client);

module.exports.delete = (req, res, next) => {
  Client.deleteOne({ _id: req.client.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.client, req.body);
  req.client
    .save()
    .then((client) => res.json(client))
    .catch(next);
};

module.exports.confirm = (req, res, next) => {
  req.client.confirm = true;

  req.client
    .save()
    .then((client) => {
      res.redirect(`${process.env.WEB_URL}/login`);
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  Client.findOne({ username: req.body.username })
    .then((client) => {
      if (!client) {
        return next(createError(401, "Invalid credentials"));
      }

      if (!client.confirm) {
        return next(createError(401, "Please confirm your account"));
      }

      client.checkPassword(req.body.password).then((match) => {
        if (!match) {
          return next(createError(401, "Invalid credentials"));
        }

        const token = jwt.sign({ sub: client.id, exp: Date.now() / 1000 + 3_600}, 
        "supersecret");
        res.json({ token, ...client.toJSON() });
      });
    })
    .catch(next);
};
