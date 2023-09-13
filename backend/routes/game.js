const express = require('express');
const { 
    getGameOverview,
    getTrophies, 
    getDeathboard,
    getLeague,
    getTeams
} = require('../controllers/gameController');

const router = express.Router();

router.get('/', getGameOverview);

router.get('/trophies', getTrophies);

router.get('/deathboard', getDeathboard);

router.get('/league', getLeague);

router.get('/teams', getTeams);

module.exports = router;