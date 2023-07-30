const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
var cors = require("cors");
const apiRouter = require("./routes/api");

const app = express();

app.use(cors());
app.use(
  logger((tokens, req, res) => {
    return [
      new Date().toISOString().replace("T", " "),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); */

app.use("/api", apiRouter);
app.use((req, res, next) => {
  res.status(404).json({ err: "page not found" });
});

module.exports = app;
