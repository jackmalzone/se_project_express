const { isValidObjectId } = require("mongoose");
const { BAD_REQUEST } = require("../utils/errors");

module.exports = (req, res, next) => {
  if (!isValidObjectId(req.params.itemId)) {
    return res.status(BAD_REQUEST).send({ message: "Invalid id" });
  }
  return next();
};
