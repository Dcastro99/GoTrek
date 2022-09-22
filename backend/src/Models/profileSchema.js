
'use strict'

const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
    displayName: String,
    email: String,
    bio: String,
    completedTrails: Array,
    photos: Array,
});

const profileModel = mongoose.model('profile', profileSchema);

module.exports = profileModel;
