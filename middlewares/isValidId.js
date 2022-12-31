const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (res, req, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(404, "Invalid id"));
  }
  next();
};

module.exports = isValidId;
