const express = require("express");
const prisma = require("../db/prisma/client.prisma");
const userOnly = require("../middlewares/userOnly.middleware");
const Exception = require("../exceptions");

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

/**
 * 글 조회하기
 */
postsRouter.get("/:postId", async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { comments: true },
    });
    if (!post) throw new Exception(404, "존재하지 않는 게시글입니다");

    res.json(post);
  } catch (e) {
    next(e);
  }
});

/**
 * 글 좋아요 누르기
 */
postsRouter.put("/:postId/like", userOnly, async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const userId = req.userId;

    const like = await prisma.like.create({ data: { userId, postId } });

    res.json(like);
  } catch (e) {
    next(e);
  }
});

module.exports = postsRouter;
