const express = require("express");
const prisma = require("../db/prisma/client.prisma");

const usersRouter = express.Router();

usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        encryptedPassword: "$" + data.password + "@",
      },
      omit: {
        encryptedPassword: true,
      },
    });

    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = usersRouter;
