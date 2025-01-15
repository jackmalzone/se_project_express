const BadRequestError = require("./classes/BadRequestError.js");
const UnauthorizedError = require("./classes/UnauthorizedError.js");
const ForbiddenError = require("./classes/ForbiddenError.js");
const NotFoundError = require("./classes/NotFoundError.js");
const ConflictError = require("./classes/ConflictError.js");

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
