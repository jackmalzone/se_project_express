const router = require("express").Router();
const auth = require("../middlewares/auth.js");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/items.js");
const {
  validateId,
  validateClothingItem,
} = require("../middlewares/validation.js");

router.get("/", getItems);
router.post("/", auth, validateClothingItem, createItem);
router.delete("/:itemId", auth, validateId, deleteItem);
router.put("/:itemId/likes", auth, validateId, likeItem);
router.delete("/:itemId/likes", auth, validateId, dislikeItem);

module.exports = router;
