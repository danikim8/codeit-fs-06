const express = require("express");
const router = require("./modules/index.module");

const server = express();
const PORT = 3002;

// 미들웨어 A
server.use("/assets", express.static("src/public"));
// 미들웨어 B
server.use(router);
// 미들웨어 C
// 미들웨어 D
server.use((error, req, res, next) => {
  console.log("에러 발생~!", er~ror.message);

  res.status(500).send("서버에서 에러가 발생했어요.");
});

server.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 잘 돌아가고 있습니다`);
});