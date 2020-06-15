const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send("<h2>Your first Express App!!! Congratulations!!</h2>");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('The application is listening on localhost:3000!');
})