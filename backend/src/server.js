'use strict';

// Instanciate express server and server setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io')
const io = socketIo(3000);


// error Handling
const notFoundHandler = require('./Handlers/error404');
const errorHandler = require('./Handlers/error500');


//VERIFICATION-AUTH0>>>>>>
const verifyUser = require('./Auth/auth');

//SOCKET_IO
io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    console.log('HERE>>>>>');
    io.emit('message', { name, message })
  })
})



//App using express & JSON
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());


// MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

//Models for MongoDB
const Trail = require('./Models/trailSchema')
const UserDev = require('./Models/dev');
const User = require('./Models/users')

// Landing path
app.get('/', handleGetTrails)
// app.get('/dev', handelgetAllDevs);

// Do not move line this line below <*>
app.use(verifyUser);
//TRAIL path
app.get('/trails/:id', handleGetOneTrail)

// dev Paths
// app.get('/userDev', handleGetUserDev);
// app.put('/dev/:id', handleUpdateDev);
// app.get('/user', handleGetUser);
app.post('/user', handlePostUser);




//Dev Functions
// async function handelgetAllDevs(req, res) {
//   try {
//     const dev = await UserDev.find();
//     res.status(200).send(dev);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send('Could not find dev');
//   }
// }
// async function handleGetUserDev(req, res) {
//   console.log('OKOKOK', req.user);
//   try {
//     const dev = await UserDev.find({ email: req.user.email });
//     res.status(200).send(dev);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send('Could not find dev');
//   }
// }
// async function handleUpdateDev(req, res) {
//   try {
//     const result = await UserDev.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body
//     );
//     res.status('200').send(result);
//   } catch (error) {
//     next(error.message);
//   }
// }


//TRAIL Functions
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
  // console.log('UGH>>>', id);
  try {
    const trail = await Trail.findById(id);
    // console.log('HERE>>>', trail);

    if (!trail) res.status(400).send('unable to get trail');

  } catch (e) {
    res.status(500).send('server error');
  }
}

// async function handleGetUser(req, res) {
//   try {
//     const user = await User.find(req.user.email);
//     // console.log('Trails: ', user);
//     res.status(200).send(user);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send('Could not find users');
//   }
// }


async function handlePostUser(req, res) {
  // const { username, email } = req.user;
  // console.log('DATAOBJ', req.body.user);
  // const { name, email } = req.body.user;
  // console.log('NEW USER', name, email);
  try {
    const checkUser = await User.findOne({ ...req.body, email: req.body.user.email })

    console.log('user created!', checkUser);

    if (!checkUser) {
      res.status(200).send('user created!')
      const newUser = await User.create({ ...req.body, username: req.body.user.name, email: req.body.user.email })
    } else {
      res.status(500).send('user already exists!!');
    }

  } catch (e) {
    res.status(500).send('server error');
  }
}


//Landing page for testing purposes
app.get('/', (request, response) => {
  response.send('Hello BSquad!!!');
});

app.get('*', notFoundHandler);

// Error stuff 
app.use(errorHandler);




app.listen(PORT, () => console.log(`listening on ${PORT}`));
