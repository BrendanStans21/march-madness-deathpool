const express = require('express');
const {
    getLoginPage,
    postLoginCredentials,
    getSignupPage,
    postSignupCredentials,
    getRecoveryPage,
    postRecoveryInformation
} = require('../controllers/authenticationController');

const router = express.Router();

router.get('/login', getLoginPage);

router.post('/login', postLoginCredentials);

router.get('/signup', getSignupPage);

router.post('/signup', postSignupCredentials);

router.get('/recover', getRecoveryPage);

router.post('/recover', postRecoveryInformation);

module.exports = router;