const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
  question: { type: String, required: true, trim: true, minlength: 1, },
  answer: { type: String, required: true, trim: true, minlength: 1, },
  hint: { type: String, required: false, trim: true, minlength: 1 },
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcard;