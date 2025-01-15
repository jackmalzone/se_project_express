const { isValidObjectId } = require("mongoose");
const { BadRequestError } = require("../errors/index.js");

module.exports = (req, res, next) => {
  if (!isValidObjectId(req.params.itemId)) {
    return next(new BadRequestError("Invalid id"));
  }
  return next();
};
