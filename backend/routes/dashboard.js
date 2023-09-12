const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'GET Dashboard Page'});
});

router.get('/createGame', (req, res) => {
    res.json({msg: 'GET Create Game Page'});
});

router.post('/createGame', (req, res) => {
    res.json({msg: 'POST New Game'});
});

router.patch('/createGame', (req, res) => {
    res.json({msg: 'PATCH Game'});
});

router.get('/joinGame', (req, res) => {
    res.json({msg: 'GET Join Page'});
});

router.post('/joinGame', (req, res) => {
    res.json({msg: 'POST Join'});
});

module.exports = router;