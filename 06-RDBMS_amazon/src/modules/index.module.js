const express = require("express");
const usersRouter = require("./users.module");
const productsRouter = require("./products.module");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);

module.exports = router;
