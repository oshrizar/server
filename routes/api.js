const express = require("express");
const router = express.Router();
const authRouter = require("./api/auth");
router.get("/", (req, res) => {
  res.json({ msg: "sub route " });
});

router.get("/register", (req, res) => {
  res.json({ msg: "register" });
});

router.use("/auth", authRouter);

module.exports = router;
