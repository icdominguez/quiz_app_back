const { Router } = require('express');

const { difficultiesGet } = require('../controllers/difficulties');

const router = Router();

router.get('/', difficultiesGet);

module.exports = router;