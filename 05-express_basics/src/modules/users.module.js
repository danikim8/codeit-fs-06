const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res, next) => {
  try {
    throw new Error("이런... 심각한 에러가 발생했습니다...");

    res.send("유저 목록 경로에 오셨습니다");
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`ID가 ${userId}인 유저 경로에 오셨습니다`);
});

module.exports = usersRouter;
