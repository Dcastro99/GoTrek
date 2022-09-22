
'use strict'

const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    trailName: String,
    trailRating: NUMBER,
    review: String,
    author: String,
});

const reviewModel = mongoose.model('review', reviewSchema);

module.exports = reviewModel;
