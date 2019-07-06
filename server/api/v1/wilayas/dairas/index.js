const { Router } = require('express');
const { findDairat, findDairatAndSave } = require('./middlewares');
const baladyats = require('./baladyats');

const router = new Router();

const {
  create, update, destroy, list, show,
} = require('./controller');

router.get('/', list);
router.get('/:daira', show);

router.post('/', create);
router.put('/:daira', update);
router.delete('/:daira', destroy);
router.use('/:daira/baladyats', findDairat, findDairatAndSave, baladyats);
module.exports = router;
