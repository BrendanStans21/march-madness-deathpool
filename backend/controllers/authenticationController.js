const User = require('../models/UserModel');

const getLoginPage = async (req, res) => {
    res.json({msg: "GET Login Page"});
};

const postLoginCredentials = async (req, res) => {
    res.json({msg: "POST Login Request"});
};

const getSignupPage = async (req, res) => {
    res.json({msg: "GET Signup Page"});
};

const postSignupCredentials = async (req, res) => {
    res.json({msg: "POST Signup Request"});
};

const getRecoveryPage = async (req, res) => {
    res.json({msg: "GET Recovery Page"});
};

const postRecoveryInformation = async (req, res) => {
    res.json({msg: "POST Recovery Information"});
};

module.exports = {
    getLoginPage,
    postLoginCredentials,
    getSignupPage,
    postSignupCredentials,
    getRecoveryPage,
    postRecoveryInformation
};