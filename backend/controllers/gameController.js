const Game = require('../models/GameModel');

const getGameOverview = async (req, res) => {
    res.json({msg: 'GET Game Page'});
};

const getTrophies = async (req, res) => {
    res.json({msg: 'GET Game Trophies Page'});
};

const getDeathboard = async (req, res) => {
    res.json({msg: 'GET Game Deathboard Page'});
};

const getLeague = async (req, res) => {
    res.json({msg: 'GET Game League Page'});
};

const getTeams = async (req, res) => {
    res.json({msg: 'GET Game Teams Page'});
};

module.exports = {
    getGameOverview,
    getTrophies,
    getDeathboard,
    getLeague,
    getTeams
};