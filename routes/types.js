const { Router } = require('express');

const { typesGet } = require('../controllers/types');

const router = Router();

router.get('/', typesGet);

module.exports = router;