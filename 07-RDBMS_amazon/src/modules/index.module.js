const express = require("express");
const usersRouter = require("./users.module");

const router = express.Router();

router.use("/users", usersRouter);

router.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;
