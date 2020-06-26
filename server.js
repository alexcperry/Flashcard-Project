const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

let Flashcard = require('./models/flashcard.model');


// Make Server
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


//DB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully!");
});


// Routing

app.get('/test', (req, res) => {
  Flashcard.find()
    .then(cardList => res.json(cardList))
    .catch(err => res.status(400).json(`Error ${err}`));
})

app.post('/add-flashcard', (req, res) => {
  const newFlashcard = new Flashcard({
    question: req.body.question,
    answer: req.body.answer,
    cardset: req.body.cardset
  })

  newFlashcard.save()
    .catch(err => res.status(400).json(`Error ${err}`));
})


// Listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
})