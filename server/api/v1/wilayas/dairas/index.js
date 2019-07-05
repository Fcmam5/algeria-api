const { Router } = require('express');

const router = new Router();

const {
  create, update, destroy, list, show,
} = require('./controller');

router.get('/', list);
router.get('/:daira', show);

router.post('/', create);
router.put('/:daira', update);
router.delete('/:daira', destroy);

module.exports = router;
