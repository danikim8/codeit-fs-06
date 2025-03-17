const express = require("express");
const usersRouter = require("./users.module");
const ordersRouter = require("./orders.module");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);

router.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;
