const express = require("express");
const prisma = require("../db/client");

const ordersRouter = express.Router();

ordersRouter.post("/", async (req, res, next) => {
  try {
    const userEmail = "test@test.com";

    const order = await prisma.order.create({
      data: {
        userEmail,
        orderItem: {
          createMany: { data: [{ productId: 1 }, { productId: 2 }] },
        },
      },
      include: {
        orderItem: { include: { product: true } },
      },
    });

    res.json(order);
  } catch (e) {
    next(e);
  }
});

module.exports = ordersRouter;
