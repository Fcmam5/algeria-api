const express = require('express');
const { isInWilayasRange, isValidPhoneCode } = require('../../../middlewares/wilayasMiddlware');
const { isValidResponseType } = require('../../../middlewares/common');
const {
  list,
  wilayaByMatricule,
  wilayaByPhoneCode,
  adjacentWilayas,
  adjacentWilayasNames,
} = require('../../../controllers/wilayaController');

const router = express.Router();

router.get('/wilaya', isValidResponseType, list);
router.get('/wilaya/matricule/:matricule', isInWilayasRange, wilayaByMatricule);
router.get('/wilaya/phone-codes', isValidResponseType, isValidPhoneCode, wilayaByPhoneCode);

// // Adjacent wilayas
router.get('/wilaya/adjacence/:matricule', isValidResponseType, isInWilayasRange, adjacentWilayas);
router.get('/wilaya/adjacence/:matricule/names/:lang', isValidResponseType, isInWilayasRange, adjacentWilayasNames);
router.get('/wilaya/adjacence/:matricule/names/', isValidResponseType, isInWilayasRange, adjacentWilayasNames);

module.exports = router;
