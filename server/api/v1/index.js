const { Router } = require('express');
const wilayas = require('./wilayas');
const admins = require('./admins');

const router = new Router();


router.use('/wilayas', wilayas);
router.use('/admins', admins);


module.exports = router;
