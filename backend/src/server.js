'use strict';

// Instanciate express server and server setup
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Trail = require('./Models/trailSchema')


// Cors for middleware
const cors = require('cors');
//VERIFICATION-AUTH0>>>>>>
// const verifyUser = require('./Auth/auth');
const notFoundHandler = require('./Handlers/error404');
const errorHandler = require('./Handlers/error500');


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
app.get('/trails/:id', handleGetOneTrail)

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

async function handleGetOneTrail(req, res) {
  const { id } = req.params;
  console.log('UGH>>>', id);
  try {
    const trail = await Trail.findById(id);
    console.log('HERE>>>', trail);

    if (!trail) res.status(400).send('unable to get trail');

  } catch (e) {
    res.status(500).send('server error');
  }
}

// Error stuff 
app.use('*', notFoundHandler);
app.use(errorHandler);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
