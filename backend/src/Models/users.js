'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String

});

const USER = mongoose.model('user', userSchema);

module.exports = USER;
