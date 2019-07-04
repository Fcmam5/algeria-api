const express = require('express');
const { isInWilayasRange } = require('./middlewares');
const wilayaController = require('./controller');

const router = express.Router();

router.get('/', wilayaController.list);
router.post('/', wilayaController.create);
router.put('/matricule/:matricule', wilayaController.update);
router.delete('/matricule/:matricule', wilayaController.destroy);

router.get('/matricule/:matricule', isInWilayasRange, wilayaController.wilayaByMatricule);
// Adjacent wilayas
router.get('/adjacence/:matricule', isInWilayasRange, wilayaController.adjacentWilayas);
router.get('/adjacence/:matricule/names/:lang', isInWilayasRange, wilayaController.adjacentWilayasNames);
router.get('/adjacence/:matricule/names/', isInWilayasRange, wilayaController.adjacentWilayasNames);

module.exports = router;
