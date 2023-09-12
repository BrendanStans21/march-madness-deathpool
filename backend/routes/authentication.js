const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.json({msg: "GET Login Page"});
});

router.post('/login', (req, res) => {
    res.json({msg: "POST Login Request"});
});

router.get('/signup', (req, res) => {
    res.json({msg: "GET Signup Page"});
});

router.post('/signup', (req, res) => {
    res.json({msg: "POST Signup Request"});
});

router.get('/recover', (req, res) => {
    res.json({msg: "GET Recovery Page"});
});

router.post('/recover', (req, res) => {
    res.json({msg: "POST Recovery Information"});
});

module.exports = router;