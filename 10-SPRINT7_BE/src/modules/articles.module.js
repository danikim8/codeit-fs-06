const express = require("express");
const prisma = require("../db/prisma/client.prisma");

const articlesRouter = express.Router();

/**
 * 게시글 등록
 */
articlesRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const { title, content } = data;

    const article = await prisma.article.create({ data: { title, content } });

    res.status(201).json(article);
  } catch (e) {
    next(e);
  }
});

/**
 * 게시글 조회
 */
articlesRouter.get("/:articleId", async (req, res, next) => {
  try {
    const articleId = Number(req.params.articleId);
    if (articleId === NaN) throw new Error("ArticleId must be number");

    const article = await prisma.article.findUnique({
      where: { id: articleId },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
      },
    });
    if (!article) throw new Error("No article found");

    res.json(article);
  } catch (e) {
    next(e);
  }
});

// 게시글 목록 조회
articlesRouter.get("/", async (req, res, next) => {
  try {
    const skip = Number(req.query.offset);
    const search = req.query.search;

    const options = {};

    // 정렬
    options.orderBy = { createdAt: "desc" };

    // 오프셋
    if (skip) options.skip = skip;

    // 검색
    if (search)
      options.where = {
        OR: [
          { title: { contains: search } },
          { content: { contains: search } },
        ],
      };

    const articles = await prisma.article.findMany(options);

    res.json(articles);
  } catch (e) {
    next(e);
  }
});

module.exports = articlesRouter;
