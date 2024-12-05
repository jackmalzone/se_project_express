const router = require("express").Router();
const userRouter = require("./users");
const itemRouter = require("./items");
const { login, createUser } = require("../controllers/users");
const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation");
const { NOT_FOUND } = require("../utils/errors");

router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND).json({ message: "Requested resource not found" });
});

module.exports = router;
