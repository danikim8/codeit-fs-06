const express = require("express");
const router = require("./modules/index.module");
const identify = require("./middlewares/identify.middleware");

const app = express();
const PORT = 5050;

app.use(express.json());
app.use(identify);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started to listen at ${PORT}...`);
});
