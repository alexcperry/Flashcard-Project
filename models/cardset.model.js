const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSetSchema = new Schema({
  title: { type: String, required: true, trim: true, minlength: 3, },
  cards: [{ type: String }],
});

const CardSet = mongoose.model('CardSet', cardSetSchema);

module.exports = CardSet;