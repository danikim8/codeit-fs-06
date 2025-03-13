const express = require("express");
const boardsRouter = require("./boards.module");
const usersRouter = require("./users.module");
const fruitsRouter = require("./fruits.module");
const adminOnly = require("../middlewares/adminOnly.middleware");
const logging = require("../middlewares/logging.middleware");

const router = express.Router();

router.use("/users", logging, adminOnly, usersRouter);
router.use("/boards", adminOnly, boardsRouter);
router.use("/fruits", logging, fruitsRouter);

module.exports = router;
