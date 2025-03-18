const express = require("express");
const prisma = require("../db/prisma/client.prisma");
const userOnly = require("../middlewares/userOnly.middleware");

const postsRouter = express.Router();

/**
 * 글 작성
 */
postsRouter.post("/", userOnly, async (req, res, next) => {
  try {
    const { boardName, title, content } = req.body;
    const authorId = req.userId;

    const post = await prisma.post.create({
      data: { title, content, boardName, authorId },
    });

    res.json(post);
  } catch (e) {
    next(e);
  }
});

module.exports = postsRouter;
