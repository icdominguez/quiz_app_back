const { Router } = require('express');

const { categoriesGet } = require('../controllers/categories');

const router = Router();

router.get('/', categoriesGet);

module.exports = router;