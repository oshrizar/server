const mongoose = require("mongoose");
const Image = require("./image");
const Address = require("./Address");
const {
  DEFAULT_STRING_SCHEMA_REQUIRED,
  URL,
} = require("./helpers/mongooseValidation");
const { string } = require("joi");
const cardSchema = new mongoose.Schema({
  title: DEFAULT_STRING_SCHEMA_REQUIRED,
  subTitle: DEFAULT_STRING_SCHEMA_REQUIRED,
  description: { ...DEFAULT_STRING_SCHEMA_REQUIRED, maxLength: 1024 },
  phone: {
    type: string,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  email: {
    type: string,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
  },
  web: URL,
  image: Image,
  address: Address,
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    trim: true,
  },
  likes: [string],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Card = mongoose.model("cards", cardSchema);

module.exports = Card;
