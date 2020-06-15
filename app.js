const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send("<h2>Your first Express App!!! Congratulations!!</h2>");
})

app.get('/hello', (req, res) => {
  res.render('hello');
})

app.listen(3000, () => {
  console.log('The application is listening on localhost:3000!');
})