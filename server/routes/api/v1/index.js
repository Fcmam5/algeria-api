const express = require('express');
const { isInWilayasRange } = require('../../../middlewares');

const router = express.Router();
// Import constrollers
const wilayaController = require('../../../controllers/wilayaController');

router.get('/wilaya', wilayaController.list);
router.get('/wilaya/matricule/:matricule', isInWilayasRange, wilayaController.wilayaByMatricule);

module.exports = router;
