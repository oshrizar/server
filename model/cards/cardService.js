const Card = require("./Card");

const createCard = (cardToSave) => {
  let card = new Card(cardToSave);
  return card.save();
};

module.exports = {
  createCard,
};
