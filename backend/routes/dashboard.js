const express = require('express');
const { 
    getDashboardPage,
    getCreateGamePage, 
    postNewGameDetails,
    patchGame,
    getJoinGamePage,
    postJoinGameRequest
} = require('../controllers/dashboardController');

const router = express.Router();

router.get('/', getDashboardPage);

router.get('/createGame', getCreateGamePage);

router.post('/createGame', postNewGameDetails);

router.patch('/createGame', patchGame);

router.get('/joinGame', getJoinGamePage);

router.post('/joinGame', postJoinGameRequest);

module.exports = router;