const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


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


// Listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
})