const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "homePg.html"));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});

module.exports = app;
