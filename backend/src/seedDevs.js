'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const dev = require('./models/dev');

const seed = async () => {
  await dev.create({
    name: 'Tony Regalado',
    bio: " bio..",
    imageURL: 'https://avatars.githubusercontent.com/u/70992980?v=4',
    github: 'https://github.com/Edward-Regalado',
    linkedIn: 'https://www.linkedin.com/in/edward-regalado/',
    role: 'Software Developer',
    admin: true,
  });

  await dev.create({
    name: 'Von Arzu',
    bio: "bio..",
    imageURL:
      'https://avatars.githubusercontent.com/u/107226923?v=4',
    github: 'https://github.com/ArzuVon',
    linkedIn: 'https://www.linkedin.com/in/vonarzu',
    role: 'Software Developer',
    admin: true,
  });

  await dev.create({
    name: 'Danny Castro',
    email: 'dcmusic01@gmail.com',
    bio: "bio..",
    imageURL:
      'https://avatars.githubusercontent.com/u/93397389?v=4',
    github: 'https://github.com/Dcastro99',
    linkedIn: 'https://www.linkedin.com/in/dcastro99/',
    role: 'Software Developer',
    admin: true,
  });

  await dev.create({
    name: 'Sarah Teklemariam',
    bio: `bio..`,
    imageUrl: `https://res.cloudinary.com/software-developer/image/upload/v1650823279/IMG_1591_csgc7r.jpg`,
    github: 'https://github.com/SarahTek',
    linkedIn: 'https://www.linkedin.com/in/sarah-t-31658b190/',
    role: 'Software Developer',
    admin: true,
  });


  mongoose.disconnect();
};
seed();
