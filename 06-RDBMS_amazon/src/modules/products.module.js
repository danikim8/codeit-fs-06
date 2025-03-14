const express = require("express");
const prisma = require("../db/client");
const adminOnly = require("../middlewares/adminOnly.middleware");

const productsRouter = express.Router();

/**
 * 상품 생성
 */
productsRouter.post("/", adminOnly, async (req, res, next) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) throw new Error("필수 정보가 빠졌습니다.");

    const product = await prisma.product.create({ data: { name, price } });

    res.json(product);
  } catch (e) {
    next(e);
  }
});

/**
 * 상품 목록 조회
 */
productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();

    res.json(products);
  } catch (e) {
    next(e);
  }
});

module.exports = productsRouter;
