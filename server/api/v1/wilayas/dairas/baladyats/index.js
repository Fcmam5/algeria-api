const { Router } = require('express');

const router = new Router();

const {
  create, update, destroy, list, show,
} = require('./controller');

router.get('/', list);
router.get('/:baladya', show);

router.post('/', create);
router.put('/:baladya', update);
router.delete('/:baladya', destroy);

module.exports = router;
