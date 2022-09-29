
'use strict'

const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    username: String,
    number: NUMBER,
    review: String,
});

const reviewModel = mongoose.model('review', reviewSchema);

module.exports = reviewModel;
