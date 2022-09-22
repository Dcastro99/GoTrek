'use strict'

const mongoose = require('mongoose');

const { Schema } = mongoose;

const trailSchema = new Schema({
  trailName: String,
  location: String,
  type: String,
  class: Number,
  length: String,
  elevationGain: String,

});
const trailModel = mongoose.model('trail', trailSchema);

module.exports = trailModel;
