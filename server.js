const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('statics'));


// Set View Engine
app.set('view engine', 'pug');



// Routing
app.get('/', (req, res) => {
  if (!req.cookies.userName) res.render('');
  else res.redirect('/profile');
})

app.post('/cards', (req, res) => {
  const userName = req.body['user-name'];
  res.cookie('userName', userName);
  res.render('cards', { cards: true });
})

app.get('/cards', (req, res) => {
  if (req.cookies.userName) res.render('cards', { cards: true });
  else res.redirect('/');
})

app.get('/profile', (req, res) => {
  const userName = req.cookies.userName;
  if (userName) res.render('profile', { profile: true, userName });
  else res.redirect('/');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The application is listening on localhost:${PORT}!`);
})

/* TODO:
1. Redirect instead of just rendering a different HTML page
*/