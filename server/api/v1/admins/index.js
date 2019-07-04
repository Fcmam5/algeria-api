const express = require('express');
const { showMe, login } = require('./controller');

const router = express.Router();

router.get('/', showMe);
router.post('/', login);

module.exports = router;
