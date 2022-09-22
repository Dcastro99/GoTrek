'use strict';

// Instanciate express server and server setup
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Trail = require('./Models/trailSchema')


// Require custom routes handlers and modules



// Cors for middleware
const cors = require('cors');
//VERIFICATION-AUTH0>>>>>>
// const verifyUser = require('./Auth/auth');


// Use the things.
app.use(cors());
app.use(express.json());
// app.use(verifyUser);

// Connect databas
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const PORT = process.env.PORT || 3002;


app.get('/', (request, response) => {
  response.send('Hello BSquad!!!');
});


app.get('/trails', handleGetTrails)

async function handleGetTrails(req, res) {
  try {
    const trails = await Trail.find(req.trailName);
    console.log('Trails: ', trails);
    res.status(200).send(trails);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find trails');
  }
}

// Error stuff 


// Export the stuff 
app.listen(PORT, () => console.log(`listening on ${PORT}`));
// module.exports = {
//   server: app,
//   start: (port) => {
//     app.listen(port, console.log(`--Server Running-- Port:${port}`))
//   }
// }