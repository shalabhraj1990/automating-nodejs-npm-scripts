const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(path.resolve(`${__dirname}`, "./")));

const server = app.listen(port, () => {
  console.log("app is running");
});
module.exports = server;
