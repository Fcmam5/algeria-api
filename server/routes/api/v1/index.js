const express = require('express');
const router = express.Router();
// Import constrollers
const wilayaController = require('../../../controllers/wilayaController');

router.get('/wilaya', wilayaController.list);

module.exports = router;
