const express = require('express');
const userController = require('../../controllers/UserController');

const router = express.Router();

router.post('/signup', userController.create);

router.post('/login', userController.login);
// router.post('/refreshToken', TODO);
// router.get('/logout', TODO);

module.exports = router;
