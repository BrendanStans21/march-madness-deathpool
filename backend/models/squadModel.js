const mongoose = require('mongoose');
const teamSchema = require('./TeamModel');

const Schema = mongoose.Schema;

const squadSchema = new Schema ({
    squadId: {
        type: String,
        required: true
    },
    squadName: {
        type: String,
        required: true
    },
    owner: { // user assigned to squad
        type: String,
        required: true
    },
    teams: [teamSchema]
});

module.exports = mongoose.model('squad', squadSchema);