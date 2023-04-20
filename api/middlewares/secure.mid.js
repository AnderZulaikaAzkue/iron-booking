const Client = require("../models/client.model");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

module.exports.cleanBody = (req, res, next) => {
  if (req.body) {
    delete req.body._id;
    delete req.body.author;
    delete req.body.createdAt;
    delete req.body.updatedAt;
    delete req.body.confirm;
  }
  next();
};

module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1];

  if (!token) {
    return next(createError(401, "Missing access token"));
  }

  try {
    const decoded = jwt.verify(token, "supersecret");

    Client.findById(decoded.sub)
      .then((client) => {
        if (client) {
          req.user = client;
          next();
        } else {
          next(createError(401, "Client not found"));
        }
      })
      .catch(next);
  } catch (err) {
    next(createError(401, err));
  }

  module.exports.checkRole = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")?.[1];

    if (!token) {
      return next(createError(401, "Missing access token"));
    }

    try {
      const decoded = jwt.verify(token, "supersecret");

      Client.findById(decoded.sub)
        .then((client) => {
          if (req.client?.role === role) {
            req.user = client;
            next();
          } else {
            next(createError(403, 'Forbidden'))
          }
        })
        .catch(next);
    } catch (err) {
      next(createError(401, err));
    }
  }
}