'use strict';
const mongoose = require('mongoose');

const { Schema } = mongoose;

const devSchema = new Schema({
  name: String,
  email: String,
  bio: String,
  imageURL: String,
  github: String,
  linkedIn: String,
  role: String,
  admin: Boolean,
});

const userDev = mongoose.model('dev', devSchema);

module.exports = userDev;
