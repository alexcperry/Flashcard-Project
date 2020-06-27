const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

let CardSet = require('./models/cardset.model');


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

//Card Routes
app.post('/sets/:setId/add-flashcard', (req, res) => { //Create WORKING

  //Create new flashcard
  const newFlashcard = {
    question: req.body.question,
    answer: req.body.answer,
    hint: req.body.hint
  }

  //Save new flashcard to database and get ID
  CardSet.findOne({ _id: req.params.setId }, (err, set) => {
  })
    //Add ID to list of cards belonging to that cardset
    .then(cardset => {
      cardset.cards.push(newFlashcard);
      cardset.save();
    }) //Return the updated cardset
    .then(cardset => res.json(cardset))
    .catch(err => res.status(400).json(`Error ${err}`));
})

//DEPRECATED - NEED TO USE 
app.get('/sets/:setId/delete-flashcard/:cardId', (req, res) => { //Delete
  CardSet.findOne({ _id: req.params.setId })
    .then(cardset => {
      const index = cardset.cards.indexOf(req.params.cardId);
      if (index > -1) cardset.cards.splice(index, 1);
      cardset.save();
    })
    .then(() => {
      Flashcard.findByIdAndDelete(req.params.cardId, () => { })
    })
    .then(res.send("Successfully deleted"))
    .catch(err => res.status(400).json(`Error ${err}`));

})


//Set Routes

app.post('/create-set', (req, res) => { //Create
  const newCardSet = new CardSet({
    title: req.body.title,
    cards: [],
  })

  newCardSet.save()
    .then(set => res.json(set))
    .catch(err => res.status(400).json(`Error ${err}`));
})


app.get('/all-sets', (req, res) => { //Read All
  CardSet.find({}, () => { })
    .then(set => res.json(set))
    .catch(err => res.status(400).json(`Error ${err}`));
})


app.get('/sets/:setId', (req, res) => { //Read
  CardSet.findById(req.params.setId)
    .then(set => res.json(set))
    .catch(err => res.status(400).json(`Error ${err}`));
})


//Update Title


app.get('/sets/:setId/delete-set', (req, res) => { //Delete
  CardSet.findByIdAndDelete(req.params.setId, () => { })
    .then(res.send('deleted set'))
    .catch(err => res.status(400).json(`Error ${err}`));
})


// Listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
})