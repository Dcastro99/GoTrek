'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const USER = require('./models/users');

const seedUser = async () => {
  await USER.create({
    username: 'Mickey Mouse',
    email: 'disney@desny.com'
  });

  mongoose.disconnect();
};

seedUser();
