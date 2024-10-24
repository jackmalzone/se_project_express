const router = require("express").Router();
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/items");
const validateObjectId = require("../middlewares/validateObjectId");

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:itemId", validateObjectId, deleteItem);
router.put("/:itemId/likes", validateObjectId, likeItem);
router.delete("/:itemId/likes", validateObjectId, dislikeItem);

module.exports = router;
