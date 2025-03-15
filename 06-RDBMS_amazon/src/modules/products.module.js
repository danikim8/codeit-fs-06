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

/**
 * 상품 상세 조회
 */
productsRouter.get("/:productId", async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    res.json(product);
  } catch (e) {
    next(e);
  }
});

/**
 * 상품 삭제
 */
productsRouter.delete("/:productId", adminOnly, async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    await prisma.product.delete({ where: { id: productId } });

    res.status(204).send("No content");
  } catch (e) {
    next(e);
  }
});

module.exports = productsRouter;
