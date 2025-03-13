const express = require("express");

const boardsRouter = express.Router();

boardsRouter.get("/", (req, res) => {
  res.send("게시판 목록 경로에 오셨습니다");
});

boardsRouter.get("/:boardId", (req, res) => {
  const boardId = req.params.boardId;
  res.send(`ID가 ${boardId}인 게시판에 오셨습니다`);
});

module.exports = boardsRouter;
