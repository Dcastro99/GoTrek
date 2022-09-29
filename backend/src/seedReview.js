'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const REVIEW = require('./models/reviewSchema');

const seedUser = async () => {
  await REVIEW.create({
    username: 'Daffy Duck',
    star: 4,
    review: 'I love this Website!!!'
  });

  mongoose.disconnect();
};

seedUser();