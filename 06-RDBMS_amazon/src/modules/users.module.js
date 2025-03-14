const express = require("express");
const prisma = require("../db/client");

const usersRouter = express.Router();

usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await prisma.user.create({ data });

    console.log(result);

    res.status(201).send("Created");
  } catch (e) {
    next(e);
  }
});

usersRouter.post("/log-in", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 일단 해당 이메일의 유저가 있는지 확인
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).send("그런 유저 없어요...");

    if (user.password !== password)
      return res.status(400).send("비밀번호가 잘못되었어요...");

    res.status(200).send("로그인 성공~!");
  } catch (e) {
    next(e);
  }
});

module.exports = usersRouter;
