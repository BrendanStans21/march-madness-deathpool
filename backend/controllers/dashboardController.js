const Game = require('../models/GameModel');

const getDashboardPage = async (req, res) => {
    res.json({msg: 'GET Dashboard Page'});
};

const getCreateGamePage = async (req, res) => {
    res.json({msg: 'GET Create Game Page'});
};

const postNewGameDetails = async (req, res) => {
    res.json({msg: 'POST New Game'});
};

const patchGame = async (req, res) => {
    res.json({msg: 'PATCH Game'});
};

const getJoinGamePage = async (req, res) => {
    res.json({msg: 'GET Join Page'});
};

const postJoinGameRequest = async (req, res) => {
    res.json({msg: 'POST Join'});
};

module.exports = {
    getDashboardPage,
    getCreateGamePage,
    postNewGameDetails,
    patchGame,
    getJoinGamePage,
    postJoinGameRequest
};