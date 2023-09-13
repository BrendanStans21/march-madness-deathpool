const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    squadIds: {
        type: String,
        required: false
    },
    gameIds: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('user', userSchema);