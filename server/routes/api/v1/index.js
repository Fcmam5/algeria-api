const express = require('express');
const { isInWilayasRange } = require('../../../middlewares');

const router = express.Router();
// Import constrollers
const wilayaController = require('../../../controllers/wilayaController');

router.get('/wilaya', wilayaController.list);
router.get('/wilaya/matricule/:matricule', isInWilayasRange, wilayaController.wilayaByMatricule);
// Adjacent wilayas
router.get('/wilaya/adjacence/:matricule', isInWilayasRange, wilayaController.adjacentWilayas);
router.get('/wilaya/adjacence/:matricule/names/:lang', isInWilayasRange, wilayaController.adjacentWilayasNames);
router.get('/wilaya/adjacence/:matricule/names/', isInWilayasRange, wilayaController.adjacentWilayasNames);

module.exports = router;
