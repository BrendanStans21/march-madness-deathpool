const Game = require('../models/GameModel');

const getDrawPage = async (req, res) => {
    res.json({msg: 'GET Draw Page'});
};

const getManualDrawPage = async (req, res) => {
    res.json({msg: 'GET Manual Draw Page'});
};

const postManualDraw = async (req, res) => {
    res.json({msg: 'POST Manual Draw'});
};

const getAutomaticDrawPage = async (req, res) => {
    res.json({msg: 'GET Automatic Draw Page'});
};

const postAutomaticDraw = async (req, res) => {
    res.json({msg: 'POST Automatic Draw'});
};

const getLiveDrawPage = async (req, res) => {
    res.json({msg: 'GET Live Draw Page'});
};

const postLiveDraw = async (req, res) => {
    res.json({msg: 'POST Live Draw'});
};

module.exports = {
    getDrawPage,
    getManualDrawPage,
    postManualDraw,
    getAutomaticDrawPage,
    postAutomaticDraw,
    getLiveDrawPage,
    postLiveDraw
};