const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    // not sure what will be needed here yet, the other models may handle everything
});

module.exports = mongoose.model('game', gameSchema);