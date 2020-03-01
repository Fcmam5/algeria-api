const express = require('express');
const userController = require('../../controllers/UserController');
const {
  validateLoginCredentials,
  validateSignupBody,
} = require('../../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', validateSignupBody, userController.register);

router.post('/login', validateLoginCredentials, userController.login);

// router.post('/refreshToken', TODO);

module.exports = router;
