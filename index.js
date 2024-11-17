const express = require("express");
const app = express();
require("dotenv").config();
const createError = require("http-errors");
const PORT = process.env.PORT || 6000;
//const bodyParser = require("body-parser");
app.use(express.json());
app.use("/", require("./routes/tasks"));
app.get("/", (req, res) => {
  res.json("Hello World!");
});
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
app.listen(PORT, () => {
  console.log(`backend server listening on port ${PORT}`);
});
module.exports = app;
