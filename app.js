var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); */

app.use("/mw1", (req, res, next) => {
  console.log("middle ware");
  next();
});
app.use("/mw2", (req, res, next) => {
  console.log("middle ware 2");
});

app.get("/", (req, res) => {
  console.log("headers", req.headers);
  res.status(404).json("error from server");
});

app.get("/:id/name", (req, res) => {
  console.log("params", req.params);
});

app.post("/", (req, res) => {
  console.log(req.body);
});

/* app.use('/', indexRouter);
app.use('/users', usersRouter); */

module.exports = app;
