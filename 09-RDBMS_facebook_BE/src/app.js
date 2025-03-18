const express = require("express");
const router = require("./modules/index.module");
const errorHandler = require("./middlewares/errorHandler.middleware");

const app = express();
const PORT = 7777;

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started to listen at port number ${PORT}...`);
});
