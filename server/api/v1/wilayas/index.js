const express = require('express');
const { isInWilayasRange } = require('./middlewares');
const wilayaController = require('./controller');

const router = express.Router();

router.get('/', wilayaController.list);
router.get('/:matricule', isInWilayasRange, wilayaController.show);

router.post('/', wilayaController.create);
router.put('/:matricule', isInWilayasRange, wilayaController.update);
router.delete('/:matricule', isInWilayasRange, wilayaController.destroy);

module.exports = router;
