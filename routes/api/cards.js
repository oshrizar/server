const express = require("express");
const router = express.Router();
const cardsServiceModel = require("../../model/cards/cardService");
router.post("/", async (req, res) => {
  try {
    const dataFromMongoose = await cardsServiceModel.createCard(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
