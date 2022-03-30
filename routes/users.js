const { Router } = require('express');
const { check } = require('express-validator');

const { checkUser } = require('../controllers/users');

const router = Router();

router.post('/checkUser',[
    check('username', 'username is required').not().isEmpty()
], checkUser);

module.exports = router;