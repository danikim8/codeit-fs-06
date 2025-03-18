const express = require("express");
const usersRouter = require("./users.module");
const postsRouter = require("./posts.module");
const commentsRouter = require("./comments.module");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);

module.exports = router;
