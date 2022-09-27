'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  title: String,
  trail: Array,

});

const USER = mongoose.model('user', userSchema);

module.exports = USER;
