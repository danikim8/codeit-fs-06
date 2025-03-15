const express = require("express");
const usersRouter = require("./users.module");
const productsRouter = require("./products.module");
const ordersRouter = require("./orders.module");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

module.exports = router;
