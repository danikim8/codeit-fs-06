const express = require("express");
const prisma = require("../db/client");
const adminOnly = require("../middlewares/adminOnly.middleware");

const usersRouter = express.Router();

usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await prisma.user.create({ data });

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

/**
 * 전체 유저 목록 불러오기
 */
usersRouter.get("/", adminOnly, async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      omit: { password: true },
      include: { favoriteProduct: true },
    });

    res.json(users);
  } catch (e) {
    next(e);
  }
});

module.exports = usersRouter;
