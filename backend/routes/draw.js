const express = require('express');
const { 
    getDrawPage,
    getManualDrawPage, 
    postManualDraw,
    getAutomaticDrawPage,
    postAutomaticDraw,
    getLiveDrawPage,
    postLiveDraw
} = require('../controllers/drawController');

const router = express.Router();

router.get('/', getDrawPage);

router.get('/manual', getManualDrawPage);

router.post('/manual', postManualDraw);

router.get('/automatic', getAutomaticDrawPage);

router.post('/automatic', postAutomaticDraw);

router.get('/live', getLiveDrawPage);

router.post('/live', postLiveDraw);

module.exports = router;