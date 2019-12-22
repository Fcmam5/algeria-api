const express = require('express');
const userController = require('../../controllers/UserController');

const router = express.Router();

router.post('/signup', userController.register);

router.post('/login', userController.login);

// router.post('/refreshToken', TODO);

module.exports = router;
