const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    seed: {
        Type: Number,
        required: true
    },
    teamName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema);