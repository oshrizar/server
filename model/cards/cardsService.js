const Card = require("./Card");

const createCard = (cardToSave) => {
  //normalize card
  let card = new Card(cardToSave);
  return card.save();
};

const getAllCards = () => {
  return card.find();
};

const getCardById = (id) => {
  return card.findById(id);
};

module.exports = {
  createCard,
  getAllCards,
  getCardById,
};
