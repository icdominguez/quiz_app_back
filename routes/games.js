const { Router } = require('express');
const { check } = require('express-validator');

const { saveGame, getBestGames } = require('../controllers/games')

const router = Router();

router.post('/save', [
    check('userId', 'userId is required').not().isEmpty()
], saveGame);

router.get('/bests', getBestGames)

module.exports = router