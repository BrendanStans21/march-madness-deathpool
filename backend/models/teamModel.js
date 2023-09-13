const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamId: {
        type: String,
        required: true
    },
    seed: {
        Type: Number,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    stillAlive: {
        type: Boolean,
        required: true
    },
    kills: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('team', teamSchema);