const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'GET Draw Page'});
});

router.get('/manual', (req, res) => {
    res.json({msg: 'GET Manual Draw Page'});
});

router.post('/manual', (req, res) => {
    res.json({msg: 'POST Manual Draw'});
});

router.get('/automatic', (req, res) => {
    res.json({msg: 'GET Automatic Draw Page'});
});

router.post('/automatic', (req, res) => {
    res.json({msg: 'POST Automatic Draw'});
});

router.get('/live', (req, res) => {
    res.json({msg: 'GET Live Draw Page'});
});

router.post('/live', (req, res) => {
    res.json({msg: 'POST Live Draw'});
});

module.exports = router;