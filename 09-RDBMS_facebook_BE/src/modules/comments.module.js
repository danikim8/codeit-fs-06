const express = require("express");
const userOnly = require("../middlewares/userOnly.middleware");
const prisma = require("../db/prisma/client.prisma");

const commentsRouter = express.Router();

/**
 * 댓글 남기기
 */
commentsRouter.post("/", userOnly, async (req, res, next) => {
  try {
    const { postId, content } = req.body;
    const authorId = req.userId;

    const comment = await prisma.comment.create({
      data: { authorId, postId, content },
    });

    res.json(comment);
  } catch (e) {
    next(e);
  }
});

module.exports = commentsRouter;
