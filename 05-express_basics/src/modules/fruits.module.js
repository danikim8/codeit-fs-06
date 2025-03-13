const express = require("express");

const fruitsRouter = express.Router();

fruitsRouter.get("/fruits/:fruitName", (req, res) => {
  const fruitName = req.params.fruitName;
  res.send(`${fruitName} 경로에 오셨습니다`);
});

module.exports = fruitsRouter;
