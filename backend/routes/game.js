const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'GET Game Page'});
});

router.get('/trophies', (req, res) => {
    res.json({msg: 'GET Game Trophies Page'});
});

router.get('/deathboard', (req, res) => {
    res.json({msg: 'GET Game Deathboard Page'});
});

router.get('/league', (req, res) => {
    res.json({msg: 'GET Game League Page'});
});

router.get('/teams', (req, res) => {
    res.json({msg: 'GET Game Teams Page'});
});

module.exports = router;