const express = require('express');
const { isInWilayasRange, isValidPhoneCode } = require('../../../middlewares');
const wilayaController = require('../../../controllers/wilayaController');

const router = express.Router();

router.get('/wilaya', wilayaController.list);
router.get('/wilaya/matricule/:matricule', isInWilayasRange, wilayaController.wilayaByMatricule);
router.get('/wilaya/phone-codes', isValidPhoneCode, wilayaController.wilayaByPhoneCode);

// Adjacent wilayas
router.get('/wilaya/adjacence/:matricule', isInWilayasRange, wilayaController.adjacentWilayas);
router.get('/wilaya/adjacence/:matricule/names/:lang', isInWilayasRange, wilayaController.adjacentWilayasNames);
router.get('/wilaya/adjacence/:matricule/names/', isInWilayasRange, wilayaController.adjacentWilayasNames);

module.exports = router;
