module.exports.cleanBody = (req, res, next) => {
  if (req.body) {
    delete req.body.createdAt;
    delete req.body.updatedAt;
    delete req.body.confirm;
  }
  next();
};