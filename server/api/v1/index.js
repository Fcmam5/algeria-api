const { Router } = require('express');
const wilayas = require('./wilayas');

const router = new Router();


router.use('/wilayas', wilayas);


module.exports = router;
