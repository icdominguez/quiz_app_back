const { Router } = require('express');

const { questionsGet, questionsGetRandom } = require('../controllers/questions');

const router = Router();

router.post('/', questionsGet);
router.get('/random', questionsGetRandom);

module.exports = router;