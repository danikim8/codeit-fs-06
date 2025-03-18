const express = require("express");
const prisma = require("../db/prisma/client.prisma");
const Exception = require("../exceptions");

const usersRouter = express.Router();

usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
    const { username, password } = data;

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) throw new Exception(400, "이미 사용중인 username입니다.");

    const user = await prisma.user.create({
      data: { username, encryptedPassword: password },
      omit: { encryptedPassword: true },
    });

    res.json(user);
  } catch (e) {
    next(e);
  }
});

usersRouter.post("/log-in", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (!existingUser)
      throw new Exception(404, "존재하지 않는 username입니다.");

    if (password !== existingUser.encryptedPassword)
      throw new Exception(400, "비밀번호가 일치하지 않습니다.");

    const data = { accessToken: `@${existingUser.id}@` };

    res.json(data);
  } catch (e) {
    next(e);
  }
});

module.exports = usersRouter;
