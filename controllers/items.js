const ClothingItem = require("../models/clothingItem");
const { BAD_REQUEST, NOT_FOUND, FORBIDDEN } = require("../utils/errors");

const getItems = (req, res, next) => {
  ClothingItem.find({})
    .then((items) => res.send(items))
    .catch(next);
};

const createItem = (req, res, next) => {
  const { name, weather, imageUrl } = req.body;

  if (!name || !weather || !imageUrl) {
    const error = new Error("Missing required fields");
    error.statusCode = BAD_REQUEST;
    return next(error);
  }

  const owner = req.user._id;

  return ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => res.status(201).send(item))
    .catch((err) => {
      if (err.name === "ValidationError") {
        const error = new Error("Invalid item data");
        error.statusCode = BAD_REQUEST;
        next(error);
      } else {
        next(err);
      }
    });
};

const deleteItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findById(itemId)
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .then((item) => {
      if (item.owner.toString() !== req.user._id) {
        const error = new Error("Forbidden");
        error.statusCode = FORBIDDEN;
        throw error;
      }
      return ClothingItem.findByIdAndRemove(itemId);
    })
    .then((item) => res.send(item))
    .catch(next);
};

const likeItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .then((item) => res.send(item))
    .catch(next);
};

const dislikeItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .then((item) => res.send(item))
    .catch(next);
};

module.exports = { getItems, createItem, deleteItem, likeItem, dislikeItem };
