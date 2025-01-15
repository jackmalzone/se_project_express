const router = require("express").Router();
const userRouter = require("./users.js");
const itemRouter = require("./items.js");
const { login, createUser } = require("../controllers/users.js");
const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation.js");
const { NotFoundError } = require("../errors/index.js");

router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
