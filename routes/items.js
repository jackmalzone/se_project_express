const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/items");
const validateObjectId = require("../middlewares/validateObjectId");

router.get("/", getItems);
router.post("/", auth, createItem);
router.delete("/:itemId", auth, validateObjectId, deleteItem);
router.put("/:itemId/likes", auth, validateObjectId, likeItem);
router.delete("/:itemId/likes", auth, validateObjectId, dislikeItem);

module.exports = router;
