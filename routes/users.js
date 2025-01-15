const router = require("express").Router();
const auth = require("../middlewares/auth.js");
const {
  getCurrentUser,
  updateCurrentUser,
} = require("../controllers/users.js");
const { validateUserUpdate } = require("../middlewares/validation.js");

router.get("/me", auth, getCurrentUser);
router.patch("/me", auth, validateUserUpdate, updateCurrentUser);

module.exports = router;
