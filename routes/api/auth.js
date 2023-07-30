const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.json({ msg: "register" });
});

router.get("/login", (req, res) => {
  res.json({ msg: "login" });
});

module.exports = router;
