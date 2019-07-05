const express = require('express');
const { isInWilayasRange } = require('./middlewares');
const wilayaController = require('./controller');
const dairas = require('./dairas');

const router = express.Router();

router.get('/', wilayaController.list);
router.get('/:matricule', isInWilayasRange, wilayaController.show);

router.post('/', wilayaController.create);
router.put('/:matricule', isInWilayasRange, wilayaController.update);
router.delete('/:matricule', isInWilayasRange, wilayaController.destroy);

router.use(['/:matricule/dairats/'], wilayaController.findWilaya, dairas);

module.exports = router;
